import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { gsap } from 'gsap'

// ─── Brand palette constants ──────────────────────────────────────────────
const GOLD   = '#B89060'
const IVORY  = '#F8F5F0'
const DARK   = '#0a0906'

// ─── Section data ─────────────────────────────────────────────────────────
export const HORIZON_SECTIONS = [
  {
    category: 'Rellenos & Perfilado',
    title: 'RELLENOS',
    line1: 'Armonía y proporción',
    line2: 'en cada detalle del rostro',
  },
  {
    category: 'Neuromoduladores',
    title: 'NEURO',
    line1: 'Movimiento natural,',
    line2: 'expresión auténtica',
  },
  {
    category: 'Bioestimulación',
    title: 'BIOESTIMULACIÓN',
    line1: 'Tu piel, renovada',
    line2: 'desde adentro',
  },
  {
    category: 'Hidratación & Regeneración',
    title: 'HIDRATACIÓN',
    line1: 'Profundidad e intensidad',
    line2: 'para tu piel',
  },
]

// Camera positions per section (+ one extra for exit transition)
const CAM_POSITIONS = [
  { x: 0,   y: 20, z: 100  },
  { x: -20, y: 32, z: 20   },
  { x: 20,  y: 42, z: -250 },
  { x: 0,   y: 52, z: -520 },
  { x: 0,   y: 62, z: -730 },
]

// ─── Types ────────────────────────────────────────────────────────────────
interface ThreeState {
  scene:           THREE.Scene | null
  camera:          THREE.PerspectiveCamera | null
  renderer:        THREE.WebGLRenderer | null
  composer:        EffectComposer | null
  stars:           THREE.Points[]
  nebula:          THREE.Mesh | null
  mountains:       THREE.Mesh[]
  animationId:     number | null
  targetCamX:      number
  targetCamY:      number
  targetCamZ:      number
  mountainBaseZ:   number[]
}

// ─── Component ────────────────────────────────────────────────────────────
export function HorizonServicesIntro() {
  const outerRef    = useRef<HTMLDivElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)

  const smoothCam = useRef({ x: 0, y: 30, z: 100 })

  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection]   = useState(0)
  const [isReady, setIsReady]               = useState(false)

  const three = useRef<ThreeState>({
    scene: null, camera: null, renderer: null, composer: null,
    stars: [], nebula: null, mountains: [], animationId: null,
    targetCamX: 0, targetCamY: 30, targetCamZ: 100,
    mountainBaseZ: [],
  })

  // ── Three.js initialisation ──────────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current) return
    const r = three.current

    // Scene & fog
    r.scene = new THREE.Scene()
    r.scene.fog = new THREE.FogExp2(0x0a0906, 0.00022)

    // Camera
    r.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    r.camera.position.set(0, 20, 100)

    // Renderer
    r.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true })
    r.renderer.setSize(window.innerWidth, window.innerHeight)
    r.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    r.renderer.toneMapping = THREE.ACESFilmicToneMapping
    r.renderer.toneMappingExposure = 0.5

    // Post-processing (bloom)
    r.composer = new EffectComposer(r.renderer)
    r.composer.addPass(new RenderPass(r.scene, r.camera))
    r.composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.75, 0.4, 0.88
      )
    )

    buildStars()
    buildNebula()
    buildMountains()
    buildAtmosphere()
    r.mountainBaseZ = r.mountains.map(m => m.userData.baseZ as number)
    startLoop()
    setIsReady(true)

    // ── scene builders ──────────────────────────────────────────────
    function buildStars() {
      for (let layer = 0; layer < 3; layer++) {
        const count = 4000
        const geo = new THREE.BufferGeometry()
        const pos = new Float32Array(count * 3)
        const col = new Float32Array(count * 3)
        const sz  = new Float32Array(count)

        for (let j = 0; j < count; j++) {
          const rad   = 200 + Math.random() * 800
          const theta = Math.random() * Math.PI * 2
          const phi   = Math.acos(Math.random() * 2 - 1)
          pos[j*3]   = rad * Math.sin(phi) * Math.cos(theta)
          pos[j*3+1] = rad * Math.sin(phi) * Math.sin(theta)
          pos[j*3+2] = rad * Math.cos(phi)

          // Warm palette: white + gold + amber
          const c = new THREE.Color()
          const p = Math.random()
          if (p < 0.65)      c.setHSL(0,    0,    0.8 + Math.random() * 0.2)  // warm white
          else if (p < 0.88) c.setHSL(0.09, 0.4,  0.85)                        // gold tint
          else               c.setHSL(0.12, 0.55,  0.72)                        // amber

          col[j*3] = c.r;  col[j*3+1] = c.g;  col[j*3+2] = c.b
          sz[j] = Math.random() * 2 + 0.4
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
        geo.setAttribute('color',    new THREE.BufferAttribute(col, 3))
        geo.setAttribute('size',     new THREE.BufferAttribute(sz,  1))

        const mat = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 }, depth: { value: layer } },
          vertexShader: `
            attribute float size; attribute vec3 color;
            varying vec3 vColor; uniform float time, depth;
            void main() {
              vColor = color; vec3 p = position;
              float a = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
              p.xy = rot * p.xy;
              vec4 mv = modelViewMatrix * vec4(p, 1.0);
              gl_PointSize = size * (300.0 / -mv.z);
              gl_Position = projectionMatrix * mv;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              gl_FragColor = vec4(vColor, 1.0 - smoothstep(0.0, 0.5, d));
            }
          `,
          transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
        })

        const pts = new THREE.Points(geo, mat)
        r.scene!.add(pts)
        r.stars.push(pts)
      }
    }

    function buildNebula() {
      const geo = new THREE.PlaneGeometry(8000, 4000, 80, 80)
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          time:    { value: 0 },
          color1:  { value: new THREE.Color(0x1a0900) },  // deep amber-black
          color2:  { value: new THREE.Color(0x7a4f10) },  // brand gold warm
          opacity: { value: 0.25 },
        },
        vertexShader: `
          varying vec2 vUv; uniform float time;
          void main() {
            vUv = uv; vec3 p = position;
            p.z += sin(p.x * 0.01 + time) * cos(p.y * 0.01 + time) * 20.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1, color2; uniform float opacity, time;
          varying vec2 vUv;
          void main() {
            float m = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 c = mix(color1, color2, m * 0.5 + 0.5);
            float a = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            gl_FragColor = vec4(c, max(0.0, a));
          }
        `,
        transparent: true, blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide, depthWrite: false,
      })
      r.nebula = new THREE.Mesh(geo, mat)
      r.nebula.position.z = -1050
      r.scene!.add(r.nebula)
    }

    function buildMountains() {
      const layers = [
        { z: -50,  h: 60,  color: 0x141210, opacity: 1.0  },
        { z: -100, h: 80,  color: 0x1c1510, opacity: 0.85 },
        { z: -150, h: 100, color: 0x221808, opacity: 0.70 },
        { z: -200, h: 120, color: 0x2a1e08, opacity: 0.50 },
      ]
      layers.forEach((l, i) => {
        const verts: THREE.Vector2[] = []
        for (let j = 0; j <= 50; j++) {
          const x = (j / 50 - 0.5) * 1000
          const y = Math.sin(j * 0.1) * l.h
                  + Math.sin(j * 0.05) * l.h * 0.5
                  + Math.random() * l.h * 0.2 - 100
          verts.push(new THREE.Vector2(x, y))
        }
        verts.push(new THREE.Vector2(5000, -300), new THREE.Vector2(-5000, -300))
        const mesh = new THREE.Mesh(
          new THREE.ShapeGeometry(new THREE.Shape(verts)),
          new THREE.MeshBasicMaterial({ color: l.color, transparent: true, opacity: l.opacity, side: THREE.DoubleSide })
        )
        mesh.position.set(0, l.z, l.z)
        mesh.userData = { baseZ: l.z, index: i }
        r.scene!.add(mesh)
        r.mountains.push(mesh)
      })
    }

    function buildAtmosphere() {
      const mat = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal; uniform float time;
          void main() {
            float i = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atm = vec3(0.72, 0.56, 0.24) * i;   // warm gold atmosphere
            gl_FragColor = vec4(atm * (sin(time * 2.0) * 0.08 + 0.92), i * 0.18);
          }
        `,
        side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true,
      })
      r.scene!.add(new THREE.Mesh(new THREE.SphereGeometry(600, 32, 32), mat))
    }

    function startLoop() {
      const loop = () => {
        r.animationId = requestAnimationFrame(loop)
        const t = Date.now() * 0.001

        // Animate star rotation
        r.stars.forEach(s => {
          ;(s.material as THREE.ShaderMaterial).uniforms.time.value = t
        })
        // Animate nebula
        if (r.nebula) {
          ;(r.nebula.material as THREE.ShaderMaterial).uniforms.time.value = t * 0.5
        }

        // Smooth camera interpolation
        if (r.camera) {
          const k = 0.055
          smoothCam.current.x += (r.targetCamX - smoothCam.current.x) * k
          smoothCam.current.y += (r.targetCamY - smoothCam.current.y) * k
          smoothCam.current.z += (r.targetCamZ - smoothCam.current.z) * k
          r.camera.position.set(
            smoothCam.current.x + Math.sin(t * 0.1) * 1.5,
            smoothCam.current.y + Math.cos(t * 0.14) * 0.8,
            smoothCam.current.z
          )
          r.camera.lookAt(0, 10, -600)
        }

        // Mountain subtle float
        r.mountains.forEach((m, i) => {
          const f = 1 + i * 0.5
          m.position.x = Math.sin(t * 0.08) * 1.5 * f
        })

        r.composer?.render()
      }
      loop()
    }

    // Resize handler
    const onResize = () => {
      if (!r.camera || !r.renderer || !r.composer) return
      r.camera.aspect = window.innerWidth / window.innerHeight
      r.camera.updateProjectionMatrix()
      r.renderer.setSize(window.innerWidth, window.innerHeight)
      r.composer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (r.animationId) cancelAnimationFrame(r.animationId)
      window.removeEventListener('resize', onResize)
      r.stars.forEach(s => {
        s.geometry.dispose()
        ;(s.material as THREE.ShaderMaterial).dispose()
      })
      r.mountains.forEach(m => {
        m.geometry.dispose()
        ;(m.material as THREE.Material).dispose()
      })
      if (r.nebula) {
        r.nebula.geometry.dispose()
        ;(r.nebula.material as THREE.ShaderMaterial).dispose()
      }
      r.renderer?.dispose()
    }
  }, [])

  // ── Scroll handler (section-relative) ───────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const outer = outerRef.current
      if (!outer) return
      const rect           = outer.getBoundingClientRect()
      const totalScrollable = outer.offsetHeight - window.innerHeight
      if (totalScrollable <= 0) return
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / totalScrollable)

      setScrollProgress(progress)

      const n    = HORIZON_SECTIONS.length
      const raw  = progress * n
      const sec  = Math.min(Math.floor(raw), n - 1)
      const frac = raw - sec

      setActiveSection(sec)

      const r   = three.current
      const cur = CAM_POSITIONS[sec]
      const nxt = CAM_POSITIONS[sec + 1] ?? cur
      r.targetCamX = cur.x + (nxt.x - cur.x) * frac
      r.targetCamY = cur.y + (nxt.y - cur.y) * frac
      r.targetCamZ = cur.z + (nxt.z - cur.z) * frac

      r.mountains.forEach((m, i) => {
        if (progress > 0.92) {
          m.position.z = 600000   // fly mountains off-screen at end
        } else {
          m.position.z  = (r.mountainBaseZ[i] ?? 0) + scrolled * (1 + i * 0.9) * 0.5
          m.position.y  = 50 + (r.mountainBaseZ[i] ?? 0) / 10
        }
      })
      if (r.nebula && r.mountains[3]) {
        r.nebula.position.z = r.mountains[3].position.z
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── GSAP title char animation on section change ──────────────────────
  useEffect(() => {
    if (!isReady || !titleRef.current) return
    const chars = titleRef.current.querySelectorAll<HTMLElement>('.hz-char')
    gsap.fromTo(
      chars,
      { y: 90, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.04, ease: 'power3.out' }
    )
  }, [activeSection, isReady])

  const sec = HORIZON_SECTIONS[activeSection]

  // ─── Render ───────────────────────────────────────────────────────────
  return (
    <div
      ref={outerRef}
      // total height = (numSections + 1) × 100vh so each section gets 1 full viewport of scroll
      style={{ height: `${(HORIZON_SECTIONS.length + 1) * 100}vh`, position: 'relative' }}
    >
      {/* ── Sticky viewport ── */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: DARK }}>

        {/* 3D canvas */}
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />

        {/* Gradient overlay: dark edges, lighter centre */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(10,9,6,0.75) 0%, transparent 35%, transparent 65%, rgba(10,9,6,0.45) 100%)',
        }} />

        {/* ── Left side label ── */}
        <div style={{
          position: 'absolute', left: 28, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, zIndex: 10,
        }}
          className="hidden md:flex"
        >
          <div style={{ width: 1, height: 56, background: 'rgba(184,144,96,0.4)' }} />
          <span style={{
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            fontFamily: 'Inter, sans-serif', fontSize: 9,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'rgba(248,245,240,0.38)',
          }}>
            Medicina Estética
          </span>
          <div style={{ width: 1, height: 56, background: 'rgba(184,144,96,0.4)' }} />
        </div>

        {/* ── Right section indicators ── */}
        <div style={{
          position: 'absolute', right: 28, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, zIndex: 10,
        }}
          className="hidden md:flex"
        >
          {HORIZON_SECTIONS.map((_, i) => (
            <div key={i} style={{
              width: 1,
              height: i === activeSection ? 36 : 14,
              background: i === activeSection ? GOLD : 'rgba(184,144,96,0.28)',
              transition: 'height 0.4s ease, background 0.4s ease',
            }} />
          ))}
        </div>

        {/* ── Main text overlay ── */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px', zIndex: 10,
        }}>

          {/* Category label */}
          <div
            key={`cat-${activeSection}`}
            style={{
              display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24,
              animation: 'hzFadeIn 0.5s ease forwards',
            }}
          >
            <div style={{ height: 1, width: 36, background: 'rgba(184,144,96,0.55)' }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10,
              letterSpacing: '0.38em', textTransform: 'uppercase',
              color: GOLD,
            }}>
              {sec.category}
            </span>
            <div style={{ height: 1, width: 36, background: 'rgba(184,144,96,0.55)' }} />
          </div>

          {/* Big animated title */}
          <h2
            ref={titleRef}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(44px, 9vw, 110px)',
              fontWeight: 400, color: IVORY,
              letterSpacing: '0.06em', lineHeight: 1,
              marginBottom: 28, display: 'block', overflow: 'hidden',
            }}
          >
            {sec.title.split('').map((char, i) => (
              <span
                key={`${activeSection}-char-${i}`}
                className="hz-char"
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <div
            key={`sub-${activeSection}`}
            style={{ animation: 'hzSlideUp 0.7s ease 0.28s both' }}
          >
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(17px, 2.4vw, 26px)',
              fontStyle: 'italic', lineHeight: 1.65, marginBottom: 3,
              color: 'rgba(248,245,240,0.62)',
            }}>
              {sec.line1}
            </p>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(17px, 2.4vw, 26px)',
              fontStyle: 'italic', lineHeight: 1.65,
              color: 'rgba(248,245,240,0.62)',
            }}>
              {sec.line2}
            </p>
          </div>
        </div>

        {/* ── Bottom scroll progress ── */}
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, zIndex: 10,
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 8,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'rgba(248,245,240,0.32)',
          }}>
            SCROLL
          </span>
          {/* Progress track */}
          <div style={{
            width: 120, height: 1, background: 'rgba(184,144,96,0.18)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0,
              height: '100%', width: `${scrollProgress * 100}%`,
              background: GOLD, transition: 'width 0.12s linear',
            }} />
          </div>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 8,
            letterSpacing: '0.22em', color: 'rgba(248,245,240,0.28)',
          }}>
            {String(activeSection + 1).padStart(2, '0')} / {String(HORIZON_SECTIONS.length).padStart(2, '0')}
          </span>
        </div>

      </div>{/* /sticky */}
    </div>
  )
}
