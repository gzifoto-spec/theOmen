import { useEffect, useState } from "react";

const movies = [
    {
        id: 1,
        title: "La Novicia del Umbral",
        year: "1978",
        tag: "Ritual",
        poster: "/assets/the-omen/posters/poster-01.jpg",
    },
    {
        id: 2,
        title: "El Proyector Negro",
        year: "1964",
        tag: "Prohibida",
        poster: "/assets/the-omen/posters/poster-02.jpg",
    },
    {
        id: 3,
        title: "Cinta 13",
        year: "1986",
        tag: "No clasificada",
        poster: "/assets/the-omen/posters/poster-03.jpg",
    },
];

export default function CursedCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % movies.length);
        }, 6500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[420px] w-[300px] lg:h-[520px] lg:w-[360px] overflow-hidden rounded-xl border border-[#ff1a1a]/20 bg-[#0b0b0b]/40">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]/90 z-10" />

            {movies.map((movie, i) => (
                <div
                    key={movie.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="h-full w-full object-cover opacity-80"
                        draggable="false"
                    />

                    <div className="absolute inset-0 bg-[#050505]/40" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <p className="font-omen-body text-xs tracking-[0.25em] uppercase text-[#b5b5b5]">
                            {movie.tag} · {movie.year}
                        </p>
                        <h3 className="font-omen-title mt-2 text-[#f2f2f2] text-lg tracking-[0.12em] uppercase">
                            {movie.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
