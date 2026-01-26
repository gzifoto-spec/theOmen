import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_KEY = '3cb21c3405a6d6f4dc45af841e52d5db';
const API_URL = 'https://api.themoviedb.org/3/search/movie';

// Leer el archivo JSON
const jsonPath = path.join(__dirname, 'theOmen/terror.json');
const peliculas = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

async function obtenerPosterDeTMDB(titulo, anio) {
    try {
        const response = await axios.get(API_URL, {
            params: {
                api_key: API_KEY,
                query: titulo,
                year: anio,
                language: 'es-ES'
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            const pelicula = response.data.results[0];
            if (pelicula.poster_path) {
                return `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
            }
        }
        return null;
    } catch (error) {
        console.error(`Error buscando ${titulo}:`, error.message);
        return null;
    }
}

async function actualizarPosters() {
    console.log('🎬 Iniciando búsqueda de posters en TMDB...\n');
    
    let actualizadas = 0;
    let sinPoster = 0;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        console.log(`[${i + 1}/${peliculas.length}] Buscando: ${pelicula.titulo} (${pelicula.anio})...`);

        const posterURL = await obtenerPosterDeTMDB(pelicula.titulo, pelicula.anio);

        if (posterURL) {
            pelicula.poster = posterURL;
            actualizadas++;
            console.log(`  ✅ Poster encontrado\n`);
        } else {
            sinPoster++;
            console.log(`  ⚠️  No se encontró poster\n`);
        }

        // Pequeña pausa para no saturar la API
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Guardar el archivo actualizado
    fs.writeFileSync(jsonPath, JSON.stringify(peliculas, null, 2), 'utf-8');

    console.log('\n✅ Actualización completada!');
    console.log(`📊 Posters actualizados: ${actualizadas}`);
    console.log(`⚠️  Sin poster: ${sinPoster}`);
    console.log(`📁 Archivo guardado en: ${jsonPath}`);
}

actualizarPosters().catch(console.error);
