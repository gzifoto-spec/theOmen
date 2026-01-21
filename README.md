# 🎬 THE OMEN – Horror Video Club

Aplicación web de videoclub centrada en **películas de terror y ocultismo**, inspirada en una estética oscura, ritualista y cinematográfica como la mostrada en la imagen de referencia.  
El proyecto simula un **archivo prohibido de películas malditas**, combinando una experiencia visual potente con una arquitectura frontend moderna en **React**.

---

## 🧠 Objetivo del proyecto

Trabajo en grupo para poner en práctica:

- **React.js** (componentes, estado, routing)
- **UX/UI** (diseño centrado en el usuario y benchmark)
- **Consumo de APIs REST**
- **Operaciones CRUD completas** sobre películas

La aplicación permite **gestionar un videoclub** mediante una **API fake creada con JSON Server**, consumida desde el frontend.

---

## 🎥 Temática y estética

- **Género principal:** Terror, horror psicológico, ocultismo, películas malditas  
- **Identidad visual:**  
  - Colores predominantes: negro, rojo oscuro  
  - Estética: gótica, ritual, cinematográfica  
  - Inspiración: archivos prohibidos, iglesias antiguas, símbolos ocultos  
- **Logotipo:** Generado con IA  
- **Diseño UI:** Definido previamente en **Figma** tras un benchmark visual

---

## 🧩 Funcionalidades principales

- Visualización de películas en formato **cards**
- Navegación SPA con **React Router DOM**
- CRUD completo sobre películas:
  - Crear
  - Leer
  - Editar
  - Eliminar
- Consumo de API REST fake con **Axios**
- Diseño **100% responsive**
- Estilos exclusivamente con **Tailwind CSS**

---

## 🗺️ Rutas de la aplicación

- `/` → **Home**
  - Hero con nombre del videoclub
  - Breve descripción del concepto

- `/movies` → **Películas**
  - Listado de películas desde la API
  - Cards con botón de editar y eliminar

- `/add-movie` → **Añadir película**
  - Formulario controlado para crear nuevas películas

- `/location` → **Ubicación**
  - Dirección, horarios y mapa (información ficticia)

---

## 🛠️ Tecnologías

- HTML
- JavaScript
- React.js
- React Router DOM
- Tailwind CSS
- JSON Server
- Axios

---

## 🧰 Herramientas

- Figma (diseño y prototipado)
- Visual Studio Code
- Git / GitHub

---

## 📦 Backend (API Fake)

- API creada con **JSON Server**
- Una única colección:
```json
{
  "movies": []
}

