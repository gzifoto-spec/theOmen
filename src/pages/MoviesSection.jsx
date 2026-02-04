import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '..//index.css';

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
                const respuesta = await axios.get(`${import.meta.env.VITE_API_URL}/peliculas`);
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
            window.scrollTo(0, 0);
        }
    };

    const irPaginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
            window.scrollTo(0, 0);
        }
    };


    const btnNavStyle = "px-6 py-2 bg-black/60 border-2 border-amber-600/50 text-amber-500 font-black uppercase tracking-widest transition-all duration-500 hover:border-red-600 hover:text-red-500 hover:shadow-[0_0_15px_rgba(185,28,28,0.4)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-amber-600/50 disabled:hover:text-amber-500 disabled:hover:shadow-none";

    return (
        <div
            className="min-h-screen bg-neutral-950 bg-cover bg-center bg-no-repeat py-12 px-4 md:px-6 lg:px-8 relative"
            style={{ backgroundImage: "url('/img/moviesbackground.png')" }}
        >
            <div className="absolute inset-0 bg-black/70 -z-10"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-red-700 mb-2 tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(185,28,28,0.5)] font-omen-title">
                    Sección de películas
                </h1>
                
                
                <p className="text-center text-gray-400 mb-8 invisible">
                    Página {paginaActual} de {totalPaginas}
                </p>

                <div className="flex items-center justify-center gap-6 mb-8">
                    <button
                        onClick={irPaginaAnterior}
                        disabled={paginaActual === 1}
                        className={btnNavStyle}
                    >
                        ← Anterior
                    </button>

                    <span className="text-red-600 font-omen-title font-bold tracking-widest">
                        {paginaActual} / {totalPaginas}
                    </span>

                    <button
                        onClick={irPaginaSiguiente}
                        disabled={paginaActual === totalPaginas}
                        className={btnNavStyle}
                    >
                        Siguiente →
                    </button>
                </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
    {peliculasActuales.map((pelicula) => (
        <Link
            key={pelicula.id}
            to={`/movies/${pelicula.id}`}
            className="group bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-lg hover:border-red-700/50 transition duration-300 transform hover:scale-105 flex flex-col h-full"
        >
            <div className="relative overflow-hidden h-64 sm:h-72 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                <img
                    src={imagenesError.has(pelicula.id) ? '/posters/placeholder.jpg' : pelicula.poster}
                    alt={pelicula.titulo}
                    className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
                    onError={() => {
                        setImagenesError(prev => new Set([...prev, pelicula.id]));
                    }}
                />
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-red-600 font-bold text-xs mb-2 line-clamp-2 uppercase tracking-wide">
                    {pelicula.titulo}
                </h3>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-[10px] italic">
                        {pelicula.anio}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-600 text-sm">⭐</span>
                        <span className="text-gray-300 font-bold text-xs">
                            {pelicula.rating.toFixed(1)}
                        </span>
                    </div>
                </div>


                <span className="w-full px-2 py-1.5 border border-red-900/50 bg-red-950/20 hover:bg-red-700 hover:text-white hover:shadow-[0_0_10px_rgba(185,28,28,0.8)] text-red-700 font-bold text-[10px] uppercase rounded transition-all duration-300 text-center">
    Más info
</span>
            </div>
        </Link>
    ))}
</div>

                <div className="flex items-center justify-center gap-6 mt-12">
                    <button
                        onClick={irPaginaAnterior}
                        disabled={paginaActual === 1}
                        className={btnNavStyle}
                    >
                        ← Anterior
                    </button>

                    <button
                        onClick={irPaginaSiguiente}
                        disabled={paginaActual === totalPaginas}
                        className={btnNavStyle}
                    >
                        Siguiente →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Peliculas;