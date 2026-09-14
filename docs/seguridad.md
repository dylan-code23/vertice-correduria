# Seguridad — checklist de cierre

Pendiente de aplicar cuando se defina el hosting definitivo (ver `pendientes.md` A). Contexto
completo de por qué en la conversación con Claude; acá solo las acciones.

## Código
- [ ] Auto-alojar las fuentes (Spectral, IBM Plex Sans/Mono) en `/fonts` en vez de cargarlas de
      Google Fonts — reemplazar el `<link>` por `@font-face` local
- [ ] Mover `<style>` y `<script>` a `style.css` / `main.js` externos (permite un CSP sin
      `'unsafe-inline'`)
- [ ] Redactar y publicar la política de privacidad, enlazarla desde el checkbox del formulario

## Hosting
- [ ] Activar SSL gratuito + forzar HTTPS
- [ ] Subir `.htaccess` con cabeceras de seguridad (bloque abajo)
- [ ] Contraseña fuerte + 2FA en la cuenta de hosting
- [ ] Subir archivos por SFTP, no FTP plano
- [ ] Activar backups automáticos

```apache
# Forzar HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Cabeceras de seguridad
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "DENY"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), camera=(), microphone=()"
  Header always set Content-Security-Policy "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'self'"
</IfModule>

# Desactivar listado de carpetas
Options -Indexes
```

## Formulario
- [ ] Servicio de envío probado (Formspree / Getform / el de Hostinger) — nada de `mail()` casero
- [ ] Honeypot oculto + CAPTCHA (Cloudflare Turnstile)
- [ ] 2FA en el correo que recibe los mensajes
- [ ] Nunca pedir DNI, número de póliza ni datos de pago por este formulario
- [ ] Definir cada cuánto se borran los mensajes viejos

## Dominio y correo (anti-suplantación)
- [ ] 2FA + bloqueo de transferencia + renovación automática del dominio
- [ ] SPF, DKIM y DMARC configurados
- [ ] Frase en la web: "Nunca le pediremos contraseñas ni pagos por correo o WhatsApp"

## Si se agrega analítica
- [ ] Banner de cookies si hay Google Analytics / píxel de Meta
- [ ] Scripts de terceros con versión fija + `integrity` (SRI)

## Checklist final antes de entregar
- [ ] HTTPS forzado y certificado válido
- [ ] `.htaccess` subido y verificado
- [ ] Formulario probado de punta a punta
- [ ] Política de privacidad publicada y enlazada
- [ ] SPF/DKIM/DMARC configurados
- [ ] Backups activos
- [ ] Accesos transferidos al cliente (ver `traspaso.md`)
- [ ] Probado en móvil y en otro navegador
- [ ] Fuentes auto-alojadas
