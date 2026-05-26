# Nico Vergés Redón — Portfolio Emprendedor (2023-2026)

Portfolio personal de una sola página construido con React + Vite + Tailwind CSS + Framer Motion.

---

## 1. Instalar dependencias

```bash
npm install
```

---

## 2. Ejecutar el proyecto en local

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 3. Sustituir imágenes

### Foto de perfil (Hero)
1. Copia tu foto en `src/assets/foto-nico.jpg`.
2. En `src/components/Hero.jsx`, busca el comentario `NOTA PARA EDITAR`.
3. Sustituye el div placeholder por:
   ```jsx
   <img
     src="/assets/foto-nico.jpg"
     alt="Nico Vergés Redón"
     className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
     style={{ border: '2px solid rgba(0,209,193,0.3)' }}
   />
   ```

---

## 4. Editar datos del portfolio

Todos los textos, métricas, proyectos, países, herramientas y aprendizajes están en:

```
src/data/portfolioData.js
```

| Variable | Qué contiene |
|---|---|
| `personalInfo` | Nombre, email, teléfono, LinkedIn, etc. |
| `metrics` | Las 6 métricas del Hero e ImpactStats |
| `aboutCards` | Las 3 cards de "Sobre mí" |
| `timeline` | Todos los hitos del timeline |
| `leadershipRoles` | Los 4 roles de liderazgo |
| `projects` | Los proyectos destacados |
| `countries` | Países del mapa interactivo (coordenadas x/y en %) |
| `skills` | Competencias con icono y texto |
| `tools` | Herramientas por categoría |
| `learnings` | Aprendizajes del acordeón |

---

## 5. Cambiar colores principales

En `tailwind.config.js`:

```js
colors: {
  'night':     '#071827',  // Fondo principal
  'deep':      '#0B2545',  // Fondo secundario
  'teal':      '#00D1C1',  // Color de acento principal
  'teal-soft': '#7FF7EC',  // Acento suave
  'gray-text': '#A7B0BA',  // Texto secundario
  'off-white': '#F6F8FA',  // Fondo claro
}
```

---

## Stack técnico

- React 18 + Vite 6
- Tailwind CSS 3
- Framer Motion (animaciones)
- Lucide React (iconos)
- Sin backend · Sin APIs externas

---

## Estructura

```
src/
  App.jsx
  index.css
  data/portfolioData.js     <- editar datos aquí
  components/
    Navbar / Hero / About / Timeline / LeadershipRoles
    Projects / ImpactStats / InteractiveMap
    Skills / Tools / Learnings / Vision / Contact / Footer
  assets/                   <- añadir foto-nico.jpg aquí
```
