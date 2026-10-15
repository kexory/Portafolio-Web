# Perfil web de Erick Cruz

Sitio personal de una sola página construido con React, Vite y CSS. Está preparado para publicarse como sitio estático en GitHub Pages. No incluye backend, base de datos, analítica ni formularios propios.

## Requisitos

- Node.js LTS (incluye npm).
- Git y una cuenta de GitHub para publicar el sitio.

## Ejecutar en tu computadora

1. Descomprime la carpeta.
2. Abre una terminal dentro de `erick-cruz-profile`.
3. Ejecuta:

   ```bash
   npm install
   npm run dev
   ```

4. Abre la dirección local que Vite muestre en la terminal.

Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

Los archivos listos para publicar quedan en `dist/`.

## Dónde editar el contenido

- `src/data/profile.js`: nombre, edad, cargo, correo, redes sociales, Kivoplix, proyectos, certificados y textos.
- `public/locales/es.json`: textos en español.
- `public/locales/en.json`: textos en inglés.
- `public/images/`: foto de perfil, portadas, certificados e imagen de vista previa social.
- `public/icons/`: favicon y recursos pequeños.
- `src/styles/`: estilos generales y componentes.
- `src/components/`: navegación, botones, tarjetas y ventanas modales.
- `src/sections/`: bloques principales de la página.

### Cambiar la foto

Coloca una imagen JPG, PNG o WebP dentro de `public/images/`, por ejemplo `erick-cruz.jpg`, y cambia `photo` en `src/data/profile.js` a `/images/erick-cruz.jpg`. Si el campo está vacío, se muestra un marcador visual, no una foto inventada.

### Editar proyectos y certificados

En `src/data/profile.js` hay tres ejemplos claramente marcados como contenido de demostración. Sustituye nombre, descripción, tecnologías, estado y enlaces por información real. Puedes quitar tarjetas que no necesites o duplicar un objeto siguiendo la misma estructura.

Los proyectos se abren en una ventana modal con detalles y enlace de repositorio. Los certificados se abren en una ventana modal con datos y enlace de verificación. No se han inventado credenciales reales: los ejemplos deben sustituirse antes de publicar.

### Cambiar redes sociales o correo

Edita `socials` y `email` en `src/data/profile.js`. Si un enlace todavía no existe, déjalo como cadena vacía (`""`); la interfaz lo omitirá. Actualmente solo se han incluido las redes proporcionadas: TikTok, Instagram, YouTube, Threads, X y GitHub. No se muestran enlaces personales pendientes.

### Cambiar la dirección de Kivoplix

La URL inicial proporcionada está en `src/data/profile.js`, bajo `kivoplix.url`. Los botones la abren en una pestaña nueva.

### Editar el contenido bilingüe

El idioma inicial es español. El selector ES / EN cambia los textos de interfaz. Modifica ambos archivos JSON para mantener la traducción alineada. Los datos de proyectos, certificados y perfil se encuentran centralizados en `src/data/profile.js`; para un sitio con contenido distinto por idioma puedes añadir campos `titleEn`, `descriptionEn`, etc. a esos objetos y ajustar el componente correspondiente.

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub y sube los archivos de esta carpeta.
2. Si el repositorio será `tuusuario.github.io`, la ruta base normalmente es `/`.
3. Si será un repositorio de proyecto como `perfil-erick`, define la base al construir el sitio:
   - Windows PowerShell: `$env:VITE_BASE_PATH="/perfil-erick/"; npm run build`
   - macOS/Linux: `VITE_BASE_PATH=/perfil-erick/ npm run build`
4. En GitHub, entra a **Settings → Pages**.
5. Selecciona **Deploy from a branch** si publicarás manualmente desde una rama, o configura una acción de GitHub Actions para desplegar la carpeta `dist/`.
6. Para una publicación manual, el contenido de `dist/` debe quedar publicado desde la fuente configurada en Pages. No subas `node_modules/`.

Este repositorio incluye el paquete `gh-pages`, pero la publicación con `npm run deploy` requiere que configures primero la propiedad `homepage` o el destino del repositorio y que autentiques Git. Si prefieres una ruta automatizada, usa el flujo de GitHub Actions recomendado por GitHub Pages.

**Importante:** el ZIP no publica automáticamente el sitio, no crea un repositorio y no verifica la disponibilidad de nombres de usuario o dominios. Debes revisar el resultado en móvil y escritorio antes de compartirlo.

## Personalizar la vista previa al compartir

Actualiza las etiquetas Open Graph en `index.html` y reemplaza `public/images/og-placeholder.svg` por una imagen propia de 1200 × 630 px (preferentemente JPG o PNG). Ajusta `og:image` a la ruta final. Las plataformas pueden almacenar la vista previa en caché y no siempre actualizan el resultado inmediatamente.

## Accesibilidad y movimiento

La interfaz respeta `prefers-reduced-motion` y limita el efecto del cursor a dispositivos con puntero fino. Revisa contraste, teclado y lectores de pantalla al modificar componentes.

## Antes de publicar

- Sustituye los proyectos y certificados de demostración.
- Confirma que todos los enlaces sean públicos y correctos.
- Decide si deseas mostrar la edad en la web pública.
- Añade foto, favicon e imagen social propios si lo deseas.
- Verifica que el correo mostrado sea el que quieres recibir públicamente.


## Personalizar proyectos y certificados

Edita `src/data/profile.js`. En `projects`, cada elemento tiene `title`, `category`, `status`, `description`, `details`, `technologies`, `image`, `repository` y `liveUrl`. Sustituye los textos de muestra y añade únicamente proyectos reales antes de publicar. Los enlaces vacíos no se muestran.

Para una imagen de proyecto, copia el archivo a `public/images/` y asigna por ejemplo `image: "/images/mi-proyecto.png"`. Para un repositorio usa `repository: "https://github.com/usuario/repositorio"`; para una demo usa `liveUrl: "https://..."`.

Los certificados se configuran en el arreglo `certificates` del mismo archivo. Copia cada imagen PNG/JPG a `public/images/` y asigna su ruta a `image`, por ejemplo `image: "/images/certificado-python.png"`. Puedes poner una URL de verificación en `url`. La web muestra imágenes; para un PDF, convierte la página del certificado a PNG/JPG o sube el PDF a un servicio público confiable y coloca su enlace en `url`. Comprueba que no publiques datos privados ni códigos QR que no quieras hacer públicos.

## Logotipo de Kexory

El archivo usado por el encabezado, la portada y el pie es `public/images/kexory-logo.svg`. El SVG actual es un marcador temporal sencillo; reemplázalo por tu logotipo real conservando ese nombre y formato. Si tu logo está en PNG, guarda el archivo como `public/images/kexory-logo.png` y cambia `logo` en `src/data/profile.js` a `"/images/kexory-logo.png"`. Para nitidez a cualquier tamaño, SVG es ideal si tienes el logo original en vector; no conviene convertir automáticamente un PNG pequeño a SVG porque no recupera detalle real.

## Correo

Los botones de contacto abren la ventana de redacción de Gmail con el correo prellenado. Si Gmail no está disponible o no hay una sesión iniciada, puedes copiar la dirección o usar el enlace `mailto:` del perfil.
