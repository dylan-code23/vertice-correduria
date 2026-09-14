# Vértice Importadora — sitio web

Sitio de varias páginas para la empresa (importadora de insumos agroindustriales, ej. soya) del
familiar del cliente. Diseño propio, sin plantillas ni build (HTML + CSS/JS compartidos, sin
frameworks). Publicado en GitHub Pages.

**En vivo:** https://dylan-code23.github.io/vertice-correduria/

## Estructura

```
vertice-correduria/
├── index.html                → Inicio (hero, carrusel, resumen de secciones, cifras)
├── productos.html             → Insumos que se importan (soya, maíz, etc.)
├── proceso.html                 → Cómo se trabaja (4 pasos: cotización → compra en origen → embarque y aduana → entrega)
├── nosotros.html                  → Por qué importar con la empresa
├── proveedores.html                 → Proveedores y países de origen
├── contacto.html                      → Formulario de cotización
├── assets/
│   ├── css/styles.css       → estilos compartidos por todas las páginas
│   ├── js/main.js           → menú móvil, carrusel, scroll reveal y formulario, compartido
│   ├── fotos/                → fotos reales del equipo, almacén, planta (pendiente)
│   └── logos-aliados/        → logos de proveedores/socios comerciales (pendiente)
├── fonts/                     → (pendiente) fuentes auto-alojadas, ver docs/pendientes.md
└── docs/                       → notas, checklist y borradores para la entrega
```

Cada página tiene su propio `<title>` y `<meta description>`; el header, pie y nav se repiten en
cada archivo (no hay build ni plantillas), pero el CSS y el JS están en un solo lugar cada uno —
para cambiar un estilo o el comportamiento del menú/carrusel/formulario se edita un solo archivo,
no las seis páginas.

## Estado actual

Todo el contenido (textos, cifras, fotos, datos de contacto, logo) es **de ejemplo** — ver
`docs/pendientes.md` para la lista completa de lo que falta antes de entregarla. El rubro se
confirmó como importación de insumos agroindustriales (soya, maíz, etc.); falta confirmar el
detalle exacto del catálogo, países de origen y demás datos reales con la empresa.

También existe una versión de un solo archivo publicada como Claude Artifact (quedó desactualizada
tras pasar a varias páginas y tras el cambio de rubro — no la sigo actualizando):
https://claude.ai/code/artifact/1e2c77ed-3e0f-43aa-a2be-7efc5cfacbea — usar siempre el link de
GitHub Pages de arriba como referencia real.

## Cómo previsualizar

Al ser varias páginas con rutas relativas (`productos.html`, `assets/css/styles.css`, etc.), hay
que abrirlo con un servidor, no con doble clic. Hay uno configurado en `C:\.claude\launch.json`
(`python -m http.server`), usable desde Claude Code con el preview del navegador. También sirve
cualquier servidor estático apuntando a esta carpeta.

## Próximos pasos

1. Confirmar con la empresa: catálogo exacto de insumos, países de origen, proveedores, nombre y
   logo definitivos.
2. Recibir materiales reales (ver `docs/pendientes.md`).
3. Reemplazar contenido de ejemplo.
4. Seguridad y publicación (hosting, `.htaccess`, formulario, dominio) — ver `docs/seguridad.md`.
5. Documento de traspaso al cliente — ver `docs/traspaso.md`.
