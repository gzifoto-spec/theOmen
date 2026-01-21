import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        "Inicio",
        "Sección de películas",
        "Formulario para añadir películas",
        "Map",
        "FAQ",
        "Tickets",
        "Safety",
        "Contacto",
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <nav
                className="relative mx-auto max-w-7xl px-8 h-[50vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-between bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Contenido del navbar */}
                <div className="relative flex w-full items-center justify-between text-sm uppercase tracking-widest text-gray-200">
                    {/* Left links */}
                    <div className="hidden md:flex gap-8">
                        {links.slice(0, 4).map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-red-700 transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Right links */}
                    <div className="hidden md:flex gap-8">
                        {links.slice(4).map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-red-700 transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Botón móvil */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl text-white"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Menú móvil */}
            {open && (
                <div className="absolute top-28 left-0 w-full bg-black/80 backdrop-blur-md p-6 text-center md:hidden z-20">
                    {links.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block text-gray-200 hover:text-red-700 transition mb-2 last:mb-0"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}