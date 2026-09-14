# Vértice Correduría — sitio web

Sitio de varias páginas para la empresa (bróker) del familiar del cliente. Diseño propio, sin
plantillas ni build (HTML + CSS/JS compartidos, sin frameworks). Publicado en GitHub Pages.

**En vivo:** https://dylan-code23.github.io/vertice-correduria/

## Estructura

```
vertice-correduria/
├── index.html               → Inicio (hero, carrusel, resumen de secciones, cifras)
├── servicios.html            → Ramos que se asesoran
├── proceso.html               → Cómo se trabaja (4 pasos)
├── nosotros.html               → Por qué un bróker
├── aliados.html                 → Aseguradoras aliadas
├── contacto.html                 → Formulario de cotización
├── assets/
│   ├── css/styles.css       → estilos compartidos por todas las páginas
│   ├── js/main.js           → menú móvil, carrusel, scroll reveal y formulario, compartido
│   ├── fotos/                → fotos reales del equipo, oficina, fundador (pendiente)
│   └── logos-aliados/        → logos de las aseguradoras/entidades aliadas (pendiente)
├── fonts/                     → (pendiente) fuentes auto-alojadas, ver docs/pendientes.md
└── docs/                       → notas, checklist y borradores para la entrega
```

Cada página tiene su propio `<title>` y `<meta description>`; el header, pie y nav se repiten en
cada archivo (no hay build ni plantillas), pero el CSS y el JS están en un solo lugar cada uno —
para cambiar un estilo o el comportamiento del menú/carrusel/formulario se edita un solo archivo,
no las seis páginas.

## Estado actual

Todo el contenido (textos, cifras, fotos, datos de contacto, logo) es **de ejemplo** — ver
`docs/pendientes.md` para la lista completa de lo que falta antes de entregarla.

También existe una versión de un solo archivo publicada como Claude Artifact (solo la portada,
sin navegación entre páginas — quedó desactualizada tras pasar a varias páginas):
https://claude.ai/code/artifact/1e2c77ed-3e0f-43aa-a2be-7efc5cfacbea — usar el link de GitHub
Pages de arriba como referencia real.

## Cómo previsualizar

Al ser varias páginas con rutas relativas (`servicios.html`, `assets/css/styles.css`, etc.), hay
que abrirlo con un servidor, no con doble clic. Hay uno configurado en `C:\.claude\launch.json`
(`python -m http.server`), usable desde Claude Code con el preview del navegador. También sirve
cualquier servidor estático apuntando a esta carpeta.

## Próximos pasos

1. Reunión con el encargado → definir rubro exacto, nombre/logo, secciones extra.
2. Recibir materiales reales (ver `docs/pendientes.md`).
3. Reemplazar contenido de ejemplo.
4. Seguridad y publicación (hosting, `.htaccess`, formulario, dominio) — ver `docs/seguridad.md`.
5. Documento de traspaso al cliente — ver `docs/traspaso.md`.
