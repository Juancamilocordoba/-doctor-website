# 🚀 Desplegar en Vercel - Guía Paso a Paso

## Opción 1: Despliegue INSTANTÁNEO (SIN GitHub, SIN configuración)

### Usar Vercel CLI

```bash
# 1. Instalar Vercel CLI (una sola vez)
npm install -g vercel

# 2. Ir a la carpeta del proyecto
cd D:\doctor-website

# 3. Desplegar
vercel
```

**Preguntas que te hará Vercel:**
- "Set up and deploy?" → **Y**
- "Which scope?" → Usa tu email (crea cuenta si es necesario)
- "Link to existing project?" → **N**
- "What's your project's name?" → **doctor-website**
- "In which directory is your code?" → **./(**déjalo así)**
- "Want to override the settings?" → **N**

**¡LISTO!** Tu sitio estará en: `https://doctor-website.vercel.app`

---

## Opción 2: Con GitHub (Más profesional)

### Paso 1: Crear cuenta en GitHub (si no tienes)
- Ve a https://github.com/signup
- Completa el registro

### Paso 2: Crear un nuevo repositorio
- Ve a https://github.com/new
- Nombre: `doctor-website`
- Descripción: "Sitio web de Dra. Zharick Tobar"
- Privado o Público (tu elección)
- Click **"Create repository"**

### Paso 3: Subir el código a GitHub

```bash
cd D:\doctor-website

# Configurar git (primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/doctor-website.git
git branch -M main
git push -u origin main
```

### Paso 4: Desplegar en Vercel

1. Ve a https://vercel.com
2. Click en **"Sign Up"** → Elige **"Continue with GitHub"**
3. Autoriza Vercel a acceder a tu GitHub
4. Click **"Import Project"**
5. Selecciona **`doctor-website`**
6. Click **"Deploy"**
7. **¡LISTO!** Tu sitio estará en vivo

**URL:** `https://doctor-website-[random].vercel.app`

---

## Opción 3: Dominio Personalizado

Después de desplegar, puedes agregar tu dominio:

1. En Vercel Dashboard → Tu proyecto
2. **Settings** → **Domains**
3. Agrega tu dominio (ej: `drazharicktobar.com`)
4. Sigue las instrucciones de DNS

---

## 🎯 Verificar que Funciona

Después de desplegar, verifica:

- ✅ **Hero section** carga correctamente
- ✅ **Services** muestra los 9 procedimientos
- ✅ **Booking form** funciona
- ✅ **Responsive** en móvil
- ✅ **WhatsApp button** abre conversación

---

## 🆘 Solucionar Problemas

### "Command not found: vercel"
```bash
npm install -g vercel
```

### "Port already in use"
```bash
# Usar puerto diferente
npm run dev -- -p 3001
```

### Build falla
```bash
# Limpiar caché y reinstalar
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

## 📝 Próximos Pasos Después de Desplegar

1. **Agregar foto de perfil** (en `/public/images/doctor.jpg`)
2. **Agregar galería before/after**
3. **Conectar con Google Analytics**
4. **Agregar testimonios reales**
5. **Integrar sistema de pagos** (opcional)

---

## ✨ Características de Vercel

✅ Hosting GRATIS
✅ SSL/HTTPS automático
✅ CDN global (rápido en cualquier país)
✅ Deployments automáticos desde Git
✅ Dominio personalizado (gratis primero)
✅ Analytics y logs

---

**¿Necesitas ayuda? Sigue los pasos y tendrás tu sitio en vivo en minutos.** 🚀
