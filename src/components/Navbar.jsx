import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    const leftLinks = [
        { label: "Inicio", to: "/" },
        { label: "Sección de películas", to: "/peliculas" },
        { label: "Formulario para añadir películas", to: "/formulario" },
    ];

    const rightLinks = [
        { label: "Ubicación", to: "/ubicacion" },
        { label: "Sobre nosotros", to: "/nosotros" },
        { label: "Contacto", to: "/contacto" },
    ];


    return (
        <>
            {/* HERO */}
            <div className="relative w-full">
                <img
                    src="/hero.png"
                    alt="Hero"
                    className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            {/* NAVBAR */}
            <header className="w-full bg-black/80 backdrop-blur-md border-t border-white/10">

                <nav className="w-full bg-black">
                    <div className="relative mx-auto max-w-7xl px-8 py-4 flex items-center justify-between text-sm uppercase tracking-widest text-gray-200">

                        {/* Izquierda */}
                        <div className="hidden md:flex gap-8">
                            <ul className="list-none flex gap-8">
                                <li className="hover:text-red-700 transition">
                                    <Link to="/">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/peliculas">
                                        Sección de películas
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/formulario">
                                        Formulario para añadir películas
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Derecha */}
                        <div className="hidden md:flex gap-8">
                            <ul className="list-none flex gap-8">
                                <li className="hover:text-red-700 transition">
                                    <Link to="/ubicacion">
                                        Ubicación
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/nosotros">
                                        Sobre nosotros
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/contacto">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
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
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className="block text-sm uppercase tracking-widest text-gray-200 hover:text-red-700 transition mb-4"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}

            </header >
        </>
    );
}
