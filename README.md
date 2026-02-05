# 🎬 THE OMEN – Horror Video Club

<p align="right">
  <a href="#english-version">🇬🇧 English Version</a>
</p>

<p align="center">
  <strong>🌐 Aplicación desplegada:</strong>
  <a href="https://the-omen-5de8.vercel.app" target="_blank">https://the-omen-5de8.vercel.app</a>
</p>

---

**THE OMEN** es una aplicación web SPA (Single Page Application) creada con **React** y una estética inspirada en el terror, lo oculto y el cine ritual. Simula un archivo/colección de películas malditas con una UI oscura y cinematográfica.

---

## 📸 Capturas

A continuación, algunas capturas representativas del proyecto:

<div align="center">

![theOmer — Home](img/theOmer.png)

![Nuestro equipo](/img/theOmerNosotros.png)

</div>

---

## 🎯 Qué incluye

- SPA con **React.js** y **React Router DOM**
- **CRUD completo** sobre películas (Crear / Leer / Editar / Borrar)
- Consumo de API fake con **JSON Server** y **Axios**
- **Paginación** en la lista de películas
- Manejo de imágenes con **placeholder** cuando falla la carga
- Formulario con validaciones básicas (año y rating numéricos)
- Diseño **responsive** con **Tailwind CSS**

---

## 🚀 Rutas importantes

- `/` → Home (hero y resumen)
- `/movies` → Sección de películas (lista con paginación)
- `/movies/:id` → Detalle de película
- `/form` o `/add-movie` → Formulario para crear/editar películas
- `/aboutus` → Sobre nosotros
- `/contact` → Contacto

> Nota: El proyecto utiliza `/form` como ruta principal para crear/editar películas (el código también incluye `/add-movie` como alias).

---

## 🧩 API (JSON Server)

La API local utiliza el archivo `server/db.json` y expone el recurso principal en:

- GET /peliculas → Lista de películas
- GET /peliculas/:id → Detalle
- POST /peliculas → Crear
- PUT /peliculas/:id → Actualizar
- DELETE /peliculas/:id → Borrar

Ejemplo de estructura (fragmento):

```json
{
  "peliculas": [
    {
      "id": 1,
      "titulo": "El silencio de los corderos",
      "anio": 1991,
      "rating": 8.6,
      "poster": "/posters/1.jpg",
      "sinopsis": "Resumen..."
    }
  ]
}
```

- Las imágenes de póster pueden ser rutas locales (`/posters/*.jpg`) o URLs externas. Si la imagen falla, se muestra un `placeholder`.

---

## 🧰 Tecnologías y dependencias

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- JSON Server
- Vite (dev server)

---

## 🏁 Cómo ejecutar el proyecto (desarrollo)

1. Instala dependencias:

```bash
npm install
```

2. En una terminal ejecuta la API local (JSON Server):

```bash
npm run api
# → escucha en http://localhost:3000
```

3. En otra terminal ejecuta la aplicación (Vite):

```bash
npm run dev
# → por defecto en http://127.0.0.1:5173
```

4. Abre el navegador y navega a `http://localhost:5173`.

> Para producción:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## ✅ Funcionalidades destacadas

- Paginación en `/movies` (10 películas por página)
- Enlaces a detalle por cada tarjeta (`/movies/:id`)
- Formulario con creación y edición (edición en línea, con botones Editar / Borrar)
- Validaciones sencillas en frontend (campo año y rating numéricos)
- Manejo de errores en carga de datos e imágenes

---

## 🌐 Despliegue en producción

El proyecto está desplegado y accesible públicamente:

- **Frontend (React):** [https://the-omen-5de8.vercel.app](https://the-omen-5de8.vercel.app) - Desplegado en **Vercel**
- **API (JSON Server):** [https://theomen-api.onrender.com](https://theomen-api.onrender.com) - Desplegado en **Render**

### Configuración de entornos

El proyecto utiliza variables de entorno para diferenciar entre desarrollo y producción:

- **Desarrollo:** `.env` → API en `http://localhost:3000`
- **Producción:** `.env.production` → API en `https://theomen-api.onrender.com`

La aplicación detecta automáticamente el entorno y utiliza la URL correcta mediante `import.meta.env.VITE_API_URL`.

---

## 🧪 Nota sobre el entorno

- Asegúrate de que la API (`npm run api`) esté corriendo antes de abrir la app; la UI espera `http://localhost:3000/peliculas`.
- Si quieres ejecutar API y app en una sola terminal considera instalar `concurrently` y añadir un script, pero actualmente se ejecutan en terminales separadas.

---

## 📄 License & Contribuciones

- Licencia: MIT (revisar `LICENSE`)
- Contribuciones: Abre un issue o PR describiendo cambios/errores.
- Nota: Este proyecto se finalizó y se corrigieron errores con la ayuda de IA (asistente). La IA asistió en la redacción y en correcciones de código y documentación.

---

---

<div id="english-version"></div>

# 🎬 THE OMEN – Horror Video Club (English)

<p align="center">
  <strong>🌐 Live app:</strong>
  <a href="https://the-omen-5de8.vercel.app" target="_blank">https://the-omen-5de8.vercel.app</a>
</p>

---

**THE OMEN** is a single-page web app built with **React**, inspired by horror, occult aesthetics and cinematic rituals. It simulates a forbidden archive of cursed movies with a dark, cinematic interface.

---

## 🎯 What it includes (Summary)

- SPA built with **React.js** and **React Router DOM**
- **Full CRUD** for movies (Create / Read / Update / Delete)
- Fake API using **JSON Server** and **Axios**
- Pagination in the movies listing
- Image fallback (placeholder) when posters fail to load
- Form with basic validation (year and rating numeric)
- Responsive UI using **Tailwind CSS**

---

## 📸 Screenshots

<div align="center">

![Hero — Home](/src/assets/home/hero-desktop.jpg)

![Our team](/img/theOmerNosotros.png)

</div>

---

## 🚀 Important Routes

- `/` → Home (hero and concept summary)
- `/movies` → Movies section (paginated list)
- `/movies/:id` → Movie detail
- `/form` or `/add-movie` → Add/Edit movie form
- `/aboutus` → About us
- `/contact` → Contact

> Note: The project uses `/form` as the main route for add/edit (there is also `/add-movie` alias).

---

## 🧩 API (JSON Server)

The local API uses `server/db.json` and exposes the main resource at:

- GET /peliculas → List
- GET /peliculas/:id → Detail
- POST /peliculas → Create
- PUT /peliculas/:id → Update
- DELETE /peliculas/:id → Delete

Example structure:

```json
{
  "peliculas": [
    {
      "id": 1,
      "titulo": "The Silence of the Lambs",
      "anio": 1991,
      "rating": 8.6,
      "poster": "/posters/1.jpg",
      "sinopsis": "Short synopsis..."
    }
  ]
}
```

---

## 🧰 Tech & Dependencies

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- JSON Server
- Vite (dev server)

---

## 🏁 How to run (development)

1. Install deps:

```bash
npm install
```

2. Run the fake API in one terminal:

```bash
npm run api
# → listening at http://localhost:3000
```

3. Run the app in another terminal:

```bash
npm run dev
# → default http://127.0.0.1:5173
```

4. Open your browser at `http://localhost:5173`.

> For production:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## ✅ Highlights

- Pagination (10 movies/page)
- Detail pages for each movie
- Inline editing and deletion from the form listing
- Basic frontend validation
- Error handling for data & images

---

## 🌐 Production Deployment

The project is deployed and publicly accessible:

- **Frontend (React):** [https://the-omen-5de8.vercel.app](https://the-omen-5de8.vercel.app) - Deployed on **Vercel**
- **API (JSON Server):** [https://theomen-api.onrender.com](https://theomen-api.onrender.com) - Deployed on **Render**

### Environment Configuration

The project uses environment variables to differentiate between development and production:

- **Development:** `.env` → API at `http://localhost:3000`
- **Production:** `.env.production` → API at `https://theomen-api.onrender.com`

The app automatically detects the environment and uses the correct URL via `import.meta.env.VITE_API_URL`.

---

## 📄 License & Contributions

- License: MIT (see `LICENSE`)
- Contributions: Open an issue or PR describing changes/bugs.
- Note: This project was completed and corrected with the assistance of AI (assistant). The AI assisted with writing and fixing code and documentation.

---

If you need badges, deployment instructions, or want a shorter/more visual README, tell me and I'll adapt it. 🎛️