import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CursedCarousel() {
    const [index, setIndex] = useState(0);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerPeliculas = async () => {
            try {
                // CORREGIDO: puerto 5000 (backend), no 5173 (frontend)
                const respuesta = await axios.get('http://localhost:5000/api/peliculas');
                
                const datos = respuesta.data.peliculas || [];
                
                const peliculasAleatorias = datos
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5);
                
                setMovies(peliculasAleatorias);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching movies:', err);
                setLoading(false);
            }
        };

        obtenerPeliculas();
    }, []);

    useEffect(() => {
        if (movies.length === 0) return;
        
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % movies.length);
        }, 6500);
        
        return () => clearInterval(timer);
    }, [movies.length]);

    if (loading || movies.length === 0) {
        return (
            <div className="relative h-105 w-75 lg:h-130 lg:w-90 overflow-hidden rounded-xl border border-[#ff1a1a]/20 bg-[#0b0b0b]/40 flex items-center justify-center">
                <p className="text-[#b5b5b5] text-sm">Cargando...</p>
            </div>
        );
    }

    return (
        <Link to={`/movies/${movies[index]?.id}`} className="block">
            <div className="relative h-105 w-75 lg:h-130 lg:w-90 overflow-hidden rounded-xl border border-[#ff1a1a]/20 bg-[#0b0b0b]/40 cursor-pointer"> 
                <div className="absolute inset-0 bg-linear-to-b from-[#050505]/30 via-transparent to-[#050505]/90 z-10" />
                
                {movies.map((movie, i) => (
                    <div
                        key={movie.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            i === index ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={movie.poster}
                            alt={movie.titulo}
                            className="h-full w-full object-cover opacity-80"
                            draggable="false"
                            onError={(e) => {
                                e.target.src = '/posters/placeholder.jpg';
                            }}
                        />

                        <div className="absolute inset-0 bg-[#050505]/40" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                            <p className="font-omen-body text-xs tracking-[0.25em] uppercase text-[#b5b5b5]">
                                {movie.anio}
                            </p>
                            <h3 className="font-omen-title mt-2 text-[#f2f2f2] text-lg tracking-[0.12em] uppercase">
                                {movie.titulo}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </Link>
    );
}