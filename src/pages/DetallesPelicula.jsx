import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DetallesPelicula = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pelicula, setPelicula] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerPelicula = async () => {
            try {
                setCargando(true);
                const respuesta = await axios.get(`http://localhost:5000/api/peliculas/${id}`);
                setPelicula(respuesta.data);
                setError(null);
            } catch (err) {
                setError('No se pudo cargar la película');
                console.error(err);
            } finally {
                setCargando(false);
            }
        };

        obtenerPelicula();
    }, [id]);

    if (cargando) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <p className="text-white text-2xl">Cargando película...</p>
            </div>
        );
    }

    if (error || !pelicula) {
        return (
            <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-4">
                <p className="text-red-500 text-2xl">{error}</p>
                <button
                    onClick={() => navigate('/peliculas')}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
                >
                    Volver a películas
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Botón atrás */}
                <button
                    onClick={() => navigate('/peliculas')}
                    className="mb-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
                >
                    ← Volver
                </button>

                {/* Contenido principal */}
                <div className="bg-neutral-900 border border-red-900/30 rounded-lg overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
                        {/* Poster */}
                        <div className="flex justify-center md:col-span-1">
                            <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={pelicula.poster}
                                    alt={pelicula.titulo}
                                    className="h-96 object-contain"
                                    onError={(e) => {
                                        e.target.src = '/posters/placeholder.jpg';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Detalles */}
                        <div className="md:col-span-2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2 tracking-wider uppercase">
                                    {pelicula.titulo}
                                </h1>

                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="bg-red-900/20 px-4 py-2 rounded border border-red-900/50">
                                        <p className="text-gray-400 text-sm">Año de lanzamiento</p>
                                        <p className="text-white font-bold text-lg">{pelicula.anio}</p>
                                    </div>

                                    <div className="bg-yellow-900/20 px-4 py-2 rounded border border-yellow-900/50">
                                        <p className="text-gray-400 text-sm">Calificación</p>
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500 text-2xl">⭐</span>
                                            <span className="text-white font-bold text-lg">
                                                {pelicula.rating.toFixed(1)}/10
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-neutral-800 p-4 rounded border border-red-900/30">
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {pelicula.sinopsis || 'No hay sinopsis disponible para esta película.'}
                                    </p>
                                </div>
                            </div>

                            {/* Botones */}
                            <div className="flex gap-4 mt-6">
                                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300">
                                    ▶️ Ver película
                                </button>
                                <button className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-3 px-4 rounded transition duration-300">
                                    ❤️ Añadir a favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallesPelicula;
