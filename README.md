# Vértice Correduría — sitio web

Landing de una sola página para la empresa (bróker) del familiar del cliente. Diseño propio,
sin plantillas ni dependencias de build (HTML/CSS/JS en un solo archivo).

## Estructura

```
vertice-correduria/
├── index.html              → el sitio completo (listo para subir tal cual)
├── assets/
│   ├── fotos/               → fotos reales del equipo, oficina, fundador (reemplazan los "photo placeholder")
│   └── logos-aliados/       → logos de las aseguradoras/entidades aliadas
├── fonts/                   → (pendiente) fuentes auto-alojadas, ver docs/pendientes.md
└── docs/                    → notas, checklist y borradores para la entrega
```

## Estado actual

Demo funcional publicada como Claude Artifact:
https://claude.ai/code/artifact/1e2c77ed-3e0f-43aa-a2be-7efc5cfacbea

Todo el contenido (textos, cifras, fotos, datos de contacto, logo) es **de ejemplo** — ver
`docs/pendientes.md` para la lista completa de lo que falta antes de entregarla.

## Cómo previsualizar

Abrir `index.html` directamente en el navegador (doble clic), no necesita servidor — es un
documento HTML completo y autónomo (con su propio `<!DOCTYPE>`, `<head>` y `<meta charset>`).

Para probarlo como si fuera el sitio publicado (recomendado para revisar el menú móvil), hay un
servidor local configurado en `C:\.claude\launch.json` (`python -m http.server`), usable desde
Claude Code con el preview del navegador.

> Nota: la versión publicada como Artifact (ver abajo) es el mismo contenido pero sin las
> etiquetas `<html>/<head>/<body>` porque la plataforma de Artifacts las agrega sola. Si pedís un
> cambio en el sitio, avisá que se actualice también `index.html` acá en la carpeta.

## Próximos pasos

1. Reunión con el encargado → definir rubro exacto, nombre/logo, secciones extra.
2. Recibir materiales reales (ver `docs/pendientes.md`).
3. Reemplazar contenido de ejemplo.
4. Seguridad y publicación (hosting, `.htaccess`, formulario, dominio) — ver `docs/seguridad.md`.
5. Documento de traspaso al cliente — ver `docs/traspaso.md`.
