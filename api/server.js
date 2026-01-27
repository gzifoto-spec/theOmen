import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;


app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());


const terrorData = JSON.parse(fs.readFileSync(path.join(__dirname, 'terror.json')));


app.get('/api/peliculas', (req, res) => {
    res.json(terrorData);
});

app.get('/api/peliculas/:id', (req, res) => {
    const pelicula = terrorData.peliculas.find(p => p.id === parseInt(req.params.id));
    if (pelicula) {
        res.json(pelicula);
    } else {
        res.status(404).json({ error: 'Película no encontrada' });
    }
});

app.listen(PORT, () => {
    console.log(`🎬 API de terror arrancada en http://localhost:${PORT}`);
    console.log(`📽️  GET /api/peliculas - Obtener todas las películas`);
    console.log(`🎞️  GET /api/peliculas/:id - Obtener película por ID`);
});