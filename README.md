# Sitio Web - Dra. Zharick Tobar

Medicina Estética Avanzada en Cali

## 🚀 Características

- ✨ Diseño moderno y elegante
- 📱 Completamente responsivo (mobile, tablet, desktop)
- 🎨 Animaciones suaves con Framer Motion
- 💼 Sección de servicios con cards interactivas (flip 3D)
- 📅 Sistema de agendamiento de citas
- 🎯 Optimizado para SEO
- ⚡ Rendimiento rápido con Next.js

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Librería de UI
- **Tailwind CSS** - Estilos CSS
- **Framer Motion** - Animaciones
- **React Three Fiber** - Gráficos 3D (listo para expandir)
- **TypeScript** - Tipado de JavaScript

## 📦 Instalación Local

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repo-url>
cd doctor-website
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Build para producción**
```bash
npm run build
npm start
```

## 📂 Estructura del Proyecto

```
doctor-website/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Booking.tsx
│   └── Footer.tsx
├── pages/              # Páginas Next.js
│   ├── _app.tsx
│   └── index.tsx
├── styles/             # Estilos globales
│   └── globals.css
├── public/             # Archivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Paleta de Colores

- **Primario**: #3D2B1F (Espresso)
- **Copper**: #9D836A
- **Taupe**: #B5AC9D
- **Accent**: #FDFDF1 (Warm White)
- **Warm Sand**: #ECE6D6

## 🌐 Desplegar en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Subir a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repo>
git push -u origin main
```

2. **Conectar con Vercel**
- Ve a https://vercel.com
- Click en "Import Project"
- Selecciona tu repositorio de GitHub
- Vercel detectará Next.js automáticamente
- Click en "Deploy"

### Opción 2: Desde la CLI

```bash
npm install -g vercel
vercel
```

## 📱 Secciones

### Hero
- Presentación de la Dra.
- Animaciones atractivas
- CTAs principales

### Servicios
- 9 procedimientos listados
- Cards con efecto flip 3D
- Precios y descripciones

### Agendamiento
- Formulario de contacto
- Información de ubicación y teléfono
- Integración WhatsApp

### Footer
- Enlaces de navegación
- Información de contacto
- Horarios

## ✨ Animaciones

- **Hero**: Gráficos animados, scroll indicator
- **Services**: Cards que voltean al pasar el ratón (flip 3D)
- **Scroll**: Fade-in animations al entrar en viewport
- **General**: Transiciones suaves entre secciones

## 📧 Contacto del Sitio

- **Teléfono**: +57 317 453 8636
- **WhatsApp**: Integrado en el formulario
- **Ubicación**: Centro Comercial Babilla Plaza, Local 301, Cali

## 🎯 SEO

- Metadata optimizada
- Estructura HTML semántica
- Títulos y descripciones
- Open Graph tags (listo para agregar)

## 🚀 Próximas Mejoras

- [ ] Galería before/after con efecto 3D
- [ ] Testimonios con carousel 3D
- [ ] Blog de consejos de estética
- [ ] Sistema de calificaciones
- [ ] Integración con sistema de pagos
- [ ] Analytics con Google Analytics

## 📄 Licencia

Todos los derechos reservados © 2024 Dra. Zharick Tobar

## 👨‍💻 Soporte

Para soporte técnico, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**
