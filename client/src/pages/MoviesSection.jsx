import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Peliculas = () => {
    const navigate = useNavigate();
    const [peliculas, setPeliculas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [imagenesError, setImagenesError] = useState(new Set());

    const peliculasPorPagina = 10;

    useEffect(() => {
        const obtenerPeliculas = async () => {
            try {
                setCargando(true);
                const respuesta = await axios.get('http://localhost:5000/api/peliculas');
                setPeliculas(respuesta.data);
                setError(null);
            } catch (err) {
                setError('Error al cargar las películas. Asegúrate de que el servidor esté corriendo.');
                console.error(err);
            } finally {
                setCargando(false);
            }
        };

        obtenerPeliculas();
    }, []);

    const goToDetails = (id) => {
        navigate(`/movies/${id}`);
    };

    if (cargando) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <p className="text-white text-2xl">Cargando películas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <p className="text-red-500 text-2xl text-center">{error}</p>
            </div>
        );
    }

    const totalPaginas = Math.ceil(peliculas.length / peliculasPorPagina);
    const indiceInicio = (paginaActual - 1) * peliculasPorPagina;
    const indiceFin = indiceInicio + peliculasPorPagina;
    const peliculasActuales = peliculas.slice(indiceInicio, indiceFin);

    const irPaginaAnterior = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const irPaginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-2 tracking-wider uppercase drop-shadow-lg">
                    Sección de películas
                </h1>

                <p className="text-center text-gray-400 mb-8">
                    Página {paginaActual} de {totalPaginas}
                </p>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <button
                        onClick={irPaginaAnterior}
                        disabled={paginaActual === 1}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded transition"
                    >
                        ← Anterior
                    </button>

                    <span className="text-gray-300 font-bold">
                        Página {paginaActual} de {totalPaginas}
                    </span>

                    <button
                        onClick={irPaginaSiguiente}
                        disabled={paginaActual === totalPaginas}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded transition"
                    >
                        Siguiente →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
                    {peliculasActuales.map((pelicula) => (
                        <div
                            key={pelicula.id}
                            className="group bg-neutral-900 border border-red-900/30 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-950/50 transition transform hover:scale-105 flex flex-col h-full"
                        >
                            <div
                                className="relative overflow-hidden h-64 sm:h-72 bg-neutral-800 flex items-center justify-center flex-shrink-0 cursor-pointer"
                                onClick={() => goToDetails(pelicula.id)}
                            >
                                <img
                                    src={
                                        imagenesError.has(pelicula.id)
                                            ? '/posters/placeholder.jpg'
                                            : pelicula.poster
                                    }
                                    alt={pelicula.titulo}
                                    className="w-full h-full object-contain group-hover:brightness-75 transition"
                                    onError={() =>
                                        setImagenesError(prev => new Set([...prev, pelicula.id]))
                                    }
                                />

                                {imagenesError.has(pelicula.id) && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-center justify-center">
                                        <span className="text-red-500 font-bold text-sm text-center px-2">
                                            Sin imagen
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 flex flex-col flex-grow justify-between">
                                <h3 className="text-gray-100 font-bold text-sm mb-2 line-clamp-2 group-hover:text-red-500 transition">
                                    {pelicula.titulo}
                                </h3>

                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-400 text-sm">
                                        {pelicula.anio}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-500 text-lg">⭐</span>
                                        <span className="text-gray-300 font-bold text-sm">
                                            {pelicula.rating
                                                ? Number(pelicula.rating).toFixed(1)
                                                : "—"}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => goToDetails(pelicula.id)}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition text-sm"
                                >
                                    Más info
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <button
                        onClick={irPaginaAnterior}
                        disabled={paginaActual === 1}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded transition"
                    >
                        ← Anterior
                    </button>

                    <span className="text-gray-300 font-bold">
                        Página {paginaActual} de {totalPaginas}
                    </span>

                    <button
                        onClick={irPaginaSiguiente}
                        disabled={paginaActual === totalPaginas}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded transition"
                    >
                        Siguiente →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Peliculas;
