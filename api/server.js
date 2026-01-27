import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const DB_PATH = path.resolve("api/terror.json");

// helpers
const readDB = () =>
    JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

const writeDB = (data) =>
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

/* =========================
    GET todas las películas
========================= */
app.get("/api/peliculas", (req, res) => {
    const db = readDB();
    res.json(db.peliculas);
});

/* =========================
    GET película por ID
========================= */
app.get("/api/peliculas/:id", (req, res) => {
    const db = readDB();
    const pelicula = db.peliculas.find(
        (p) => p.id === Number(req.params.id)
    );

    if (!pelicula) {
        return res.status(404).json({ message: "Película no encontrada" });
    }

    res.json(pelicula);
});

/* =========================
    POST crear película
========================= */
app.post("/api/peliculas", (req, res) => {
    const { titulo, anio, sinopsis, poster } = req.body;

    // validación fuerte
    if (
        typeof titulo !== "string" ||
        typeof sinopsis !== "string" ||
        typeof poster !== "string" ||
        !Number.isInteger(anio)
    ) {
        return res.status(400).json({ message: "Datos inválidos" });
    }

    const db = readDB();

    const nuevaPelicula = {
        id: Date.now(),
        titulo,
        anio,
        sinopsis,
        poster
    };

    db.peliculas.push(nuevaPelicula);
    writeDB(db);

    res.status(201).json(nuevaPelicula);
});

/* =========================
    PUT editar película
========================= */
app.put("/api/peliculas/:id", (req, res) => {
    const db = readDB();
    const index = db.peliculas.findIndex(
        (p) => p.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Película no encontrada" });
    }

    db.peliculas[index] = {
        ...db.peliculas[index],
        ...req.body
    };

    writeDB(db);
    res.json(db.peliculas[index]);
});

/* =========================
    DELETE borrar película
========================= */
app.delete("/api/peliculas/:id", (req, res) => {
    const db = readDB();
    const nuevas = db.peliculas.filter(
        (p) => p.id !== Number(req.params.id)
    );

    if (nuevas.length === db.peliculas.length) {
        return res.status(404).json({ message: "Película no encontrada" });
    }

    db.peliculas = nuevas;
    writeDB(db);

    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`🎬 API de terror arrancada en http://localhost:${PORT}`);
});
