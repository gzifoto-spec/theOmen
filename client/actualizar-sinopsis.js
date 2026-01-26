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

async function obtenerSinopsis(titulo, anio) {
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
            return pelicula.overview || null;
        }
        return null;
    } catch (error) {
        console.error(`Error buscando ${titulo}:`, error.message);
        return null;
    }
}

async function actualizarSinopsis() {
    console.log('🎬 Iniciando búsqueda de sinopsis en TMDB...\n');
    
    let actualizadas = 0;
    let sinSinopsis = 0;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        console.log(`[${i + 1}/${peliculas.length}] Buscando: ${pelicula.titulo} (${pelicula.anio})...`);

        const sinopsis = await obtenerSinopsis(pelicula.titulo, pelicula.anio);

        if (sinopsis) {
            pelicula.sinopsis = sinopsis;
            actualizadas++;
            console.log(`  ✅ Sinopsis encontrada\n`);
        } else {
            sinSinopsis++;
            console.log(`  ⚠️  No se encontró sinopsis\n`);
        }

        // Pequeña pausa para no saturar la API
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Guardar el archivo actualizado
    fs.writeFileSync(jsonPath, JSON.stringify(peliculas, null, 2), 'utf-8');

    console.log('\n✅ Actualización completada!');
    console.log(`📊 Sinopsis actualizadas: ${actualizadas}`);
    console.log(`⚠️  Sin sinopsis: ${sinSinopsis}`);
    console.log(`📁 Archivo guardado en: ${jsonPath}`);
}

actualizarSinopsis().catch(console.error);
