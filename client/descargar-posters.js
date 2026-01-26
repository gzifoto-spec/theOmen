import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Leer el archivo JSON
const jsonPath = path.join(__dirname, 'theOmen/terror.json');
const peliculas = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Crear carpeta de posters si no existe
const postersDir = path.join(__dirname, 'theOmen/public/posters');
if (!fs.existsSync(postersDir)) {
    fs.mkdirSync(postersDir, { recursive: true });
}

async function descargarImagen(url, nombreArchivo) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const filePath = path.join(postersDir, nombreArchivo);
        fs.writeFileSync(filePath, response.data);
        return `/posters/${nombreArchivo}`;
    } catch (error) {
        console.error(`Error descargando ${nombreArchivo}:`, error.message);
        return null;
    }
}

async function descargarPosters() {
    console.log('🎬 Iniciando descarga de posters...\n');

    let descargadas = 0;
    let fallidas = 0;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        
        if (!pelicula.poster || pelicula.poster.startsWith('/posters/')) {
            continue; // Ya está descargada
        }

        console.log(`[${i + 1}/${peliculas.length}] Descargando: ${pelicula.titulo}...`);

        const nombreArchivo = `${pelicula.id}.jpg`;
        const localPath = await descargarImagen(pelicula.poster, nombreArchivo);

        if (localPath) {
            pelicula.poster = localPath;
            descargadas++;
            console.log(`  ✅ Descargada\n`);
        } else {
            fallidas++;
            console.log(`  ⚠️  Falló la descarga\n`);
        }

        // Pequeña pausa
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Guardar el archivo actualizado
    fs.writeFileSync(jsonPath, JSON.stringify(peliculas, null, 2), 'utf-8');

    console.log('\n✅ Proceso completado!');
    console.log(`📊 Posters descargados: ${descargadas}`);
    console.log(`⚠️  Fallos: ${fallidas}`);
    console.log(`📁 Guardados en: ${postersDir}`);
}

descargarPosters().catch(console.error);
