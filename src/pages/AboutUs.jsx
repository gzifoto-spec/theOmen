import React, { useState, useEffect } from "react";
import "../index.css";

// Importa tus imágenes del carrusel
import posterHereditary from "../assets/home/poster-hereditary.jpg";
import posterMidsommar from "../assets/home/poster-midsommar.webp";
import posterSaintMaud from "../assets/home/poster-saint-maud.jpg";
import posterTheConjuring from "../assets/home/poster-the-conjuring.jpg";
import posterTheWitch from "../assets/home/poster-the-witch.webp";

// Imagen de fondo
import heroDesktop from "../assets/home/hero-desktop.jpg";

const imagenesCarrusel = [
  posterHereditary,
  posterMidsommar,
  posterSaintMaud,
  posterTheConjuring,
  posterTheWitch,
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay lento
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagenesCarrusel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex flex-col items-center">
      {/* Fondo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDesktop})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Texto */}
      <div className="relative z-10 text-center px-4 py-20 md:py-32 max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 font-omen-title">
          Bienvenido al terror que se queda contigo
        </h2>
        <p className="text-xl md:text-2xl mb-6 font-omen-body">
          Cada película aquí está seleccionada para inquietar, emocionar y perturbar.
          Desde clásicos hasta joyas ocultas, nuestro catálogo es un homenaje al cine de terror.
        </p>
        <p className="text-lg md:text-xl text-gray-300 font-omen-body">
          Aquí también puedes explorar nuevas historias de miedo, descubrir películas exclusivas y
          disfrutar de un catálogo actualizado constantemente con los mejores títulos de terror.
        </p>
      </div>

      {/* Carrusel centrado */}
      <div className="relative z-10 flex justify-center items-center w-full py-16 overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${activeIndex * 280}px)`, // 280px = ancho imagen + gap
          }}
        >
          {imagenesCarrusel.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`mx-4 transition-transform duration-500 ${
                  isActive ? "scale-110 z-20" : "scale-90 opacity-70 z-10"
                }`}
              >
                <img
                  src={img}
                  alt={`Póster ${index + 1}`}
                  className="rounded-lg shadow-2xl w-64 md:w-72 h-auto cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
