import React, { useState, useEffect } from "react";
import "../index.css";

// Imágenes del carrusel
import posterHereditary from "../assets/home/poster-hereditary.jpg";
import posterMidsommar from "../assets/home/poster-midsommar.webp";
import posterSaintMaud from "../assets/home/poster-saint-maud.jpg";
import posterTheConjuring from "../assets/home/poster-the-conjuring.jpg";
import posterTheWitch from "../assets/home/poster-the-witch.webp";

import fotoXabier from "../assets/home/Xabier.png";
import fotoAdrian from "../assets/home/Adrian.png";
import fotoAlba from "../assets/home/Alba.png";
import fotoMaria from "../assets/home/Maria.png"; 

const imagenesCarrusel = [
  posterHereditary,
  posterMidsommar,
  posterSaintMaud,
  posterTheConjuring,
  posterTheWitch,
];
const equipo = [
  { nombre: "Xabier Piñeiro", rol: "Product Owner", foto: fotoXabier },
  { nombre: "Adrian", rol: "Scrum Master", foto: fotoAdrian },
  { nombre: "Alba", rol: "Developer", foto: fotoAlba },
  { nombre: "Maria", rol: "Developer", foto: fotoMaria },
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
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col items-center">
      
      {/* 🎬 VÍDEO DE FONDO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="public/video/14058980-uhd_4096_2160_30fps (1) (1).mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🧠 TEXTO */}
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

      {/* 🎞️ CARRUSEL CENTRADO */}
      <div className="relative z-10 w-full flex justify-center overflow-hidden py-16">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${activeIndex * 320}px - 160px))`,
          }}
        >
          {imagenesCarrusel.map((img, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`mx-6 transition-all duration-500 ${
                  isActive ? "scale-110 opacity-100" : "scale-90 opacity-60"
                }`}
              >
                <img
                  src={img}
                  alt={`Póster ${index + 1}`}
                  className="w-72 md:w-80 rounded-xl shadow-2xl cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>  
                   {/* 👥 SECCIÓN EQUIPO */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white font-omen-title mb-12 uppercase drop-shadow-lg">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {equipo.map((miembro, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={miembro.foto}
                alt={miembro.nombre}
                className="w-32 h-32 md:w-36 md:h-36 object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-red-700 font-omen-title">{miembro.nombre}</h3>
              <p className="text-gray-300 font-omen-body">{miembro.rol}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;