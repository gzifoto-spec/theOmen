import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:5000/api/peliculas/${id}`
                );
                setMovie(response.data);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Error al cargar los detalles de la película.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/movies");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <p className="text-gray-300 text-xl">Cargando ritual...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <p className="text-red-500 text-xl text-center">{error}</p>
            </div>
        );
    }

    if (!movie) return null;

    return (
        <div className="min-h-screen bg-neutral-950 text-gray-200 px-4 md:px-8 py-10">
            <div className="max-w-5xl mx-auto">

                <button
                    onClick={handleBack}
                    className="mb-6 inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition font-bold"
                >
                    ← Volver
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <img
                            src={movie.poster}
                            alt={movie.titulo}
                            className="w-full rounded-lg shadow-xl border border-red-900/30"
                            onError={(e) => {
                                e.target.src = "/posters/placeholder.jpg";
                            }}
                        />
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide uppercase">
                            {movie.titulo}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{movie.anio}</span>
                            <span>•</span>
                            <span>⭐ {movie.rating?.toFixed(1)}</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            {movie.sinopsis}
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
