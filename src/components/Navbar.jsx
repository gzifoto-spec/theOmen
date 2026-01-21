import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const leftLinks = [
        "Inicio",
        "Sección de películas",
        "Formulario para añadir películas",
    ];

    const rightLinks = [
        "Sobre nosotros",
        "Contacto",
    ];

    return (
        <>
            {/* HERO */}
            <div
                className="relative w-full h-37.5 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* NAVBAR */}
            <header className="w-full bg-black/80 backdrop-blur-md border-t border-white/10">

                <nav className="w-full bg-black">
                    <div className="relative mx-auto max-w-7xl px-8 py-4 flex items-center justify-between text-sm uppercase tracking-widest text-gray-200">

                        {/* Izquierda */}
                        <div className="hidden md:flex gap-8">
                            {leftLinks.map((item) => (
                                <a key={item} href="#" className="hover:text-red-700 transition">
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Derecha */}
                        <div className="hidden md:flex gap-8">
                            {rightLinks.map((item) => (
                                <a key={item} href="#" className="hover:text-red-700 transition">
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Botón móvil */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="absolute right-8 md:hidden hover:text-red-700 transition"
                        >
                            Menú ☰
                        </button>
                    </div>
                </nav>

                {/* Menú móvil */}
                {open && (
                    <div className="w-full bg-black/80 backdrop-blur-md p-6 text-center md:hidden z-20">
                        {[...leftLinks, ...rightLinks].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="block text-sm uppercase tracking-widest text-gray-200 hover:text-red-700 transition mb-2"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>
        </>
    );
}
