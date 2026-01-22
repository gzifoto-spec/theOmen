import { useEffect, useState } from "react";

import posterHereditary from "../assets/home/poster-hereditary.jpg";
import posterTheWitch from "../assets/home/poster-the-witch.webp";
import posterMidsommar from "../assets/home/poster-midsommar.webp";
import posterSaintMaud from "../assets/home/poster-saint-maud.jpg";
import posterTheConjuring from "../assets/home/poster-the-conjuring.jpg";


const movies = [
    {
        id: 1,
        title: "Hereditary",
        year: "2018",
        tag: "Herencia",
        poster: posterHereditary,
    },
    {
        id: 2,
        title: "The Witch",
        year: "2015",
        tag: "Herejía",
        poster: posterTheWitch,
    },
    {
        id: 3,
        title: "Midsommar",
        year: "2019",
        tag: "Ritual",
        poster: posterMidsommar,
    },
    {
        id: 4,
        title: "Saint Maud",
        year: "2019",
        tag: "Fe",
        poster: posterSaintMaud,
    },
    {
        id: 5,
        title: "The Conjuring",
        year: "2013",
        tag: "Expediente Warren",
        poster: posterTheConjuring,
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
            <div className="relative h-105 w-75 lg:h-130 lg:w-90 overflow-hidden rounded-xl border border-[#ff1a1a]/20 bg-[#0b0b0b]/40"> 
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
