import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/peliculas/${id}`);
                setMovie(response.data);
                setError(null);
            } catch (err) {
                setError("No se pudo invocar la película. El ritual falló.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
                <p className="text-gray-400 text-xl">Invocando...</p>
            </div>
        );
    }

    if (error || !movie) {
        return (
            <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4">
                <p className="text-red-500 text-2xl text-center mb-6">{error || "Película no encontrada"}</p>
                <button
                    onClick={() => navigate("/movies")}
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition"
                >
                    Volver al catálogo
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={() => navigate("/movies")}
                    className="mb-6 text-gray-400 hover:text-red-500 transition flex items-center gap-2"
                >
                    ← Volver
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="aspect-[2/3] bg-neutral-900 rounded-lg overflow-hidden border border-red-900/30 shadow-2xl shadow-red-950/20">
                            <img
                                src={imageError ? "/posters/placeholder.jpg" : movie.poster}
                                alt={movie.titulo}
                                className="w-full h-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2 tracking-wider uppercase">
                                {movie.titulo}
                            </h1>
                            <p className="text-gray-400 text-lg">{movie.anio}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-2xl">⭐</span>
                            <span className="text-gray-200 text-xl font-bold">{movie.rating.toFixed(1)}</span>
                            <span className="text-gray-500">/ 10</span>
                        </div>

                        <div>
                            <h2 className="text-red-500 font-semibold uppercase tracking-wider text-sm mb-2">
                                Sinopsis
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {movie.sinopsis}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}