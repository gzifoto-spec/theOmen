import { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';
export default function Navbar() {
    const [open, setOpen] = useState(false);

    const leftLinks = [
        { label: "Inicio", to: "/" },
        { label: "Sección de películas", to: "/movies" },
        { label: "Formulario para añadir películas", to: "/form" },
    ];

    const rightLinks = [
        { label: "Sobre nosotros", to: "/aboutus" },
        { label: "Contacto", to: "/contact" },
    ];


    return (
        <>
            {/* HERO */}
            <div className="relative w-full flex items-center justify-center bg-black">
                <img
                    src="public/logo-primary.png"
                    alt="Hero"
                    className="h-auto max-h-[60px] sm:max-h-[80px] md:max-h-[100px] lg:max-h-[120px] object-contain block"
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>






            {/* NAVBAR */}
            <header className="w-full bg-black/80 backdrop-blur-md border-t border-white/10">

                <nav className="w-full bg-black">
                    <div className="font-omen-body relative mx-auto max-w-7xl px-8 py-4 flex items-center justify-between text-sm uppercase tracking-widest text-gray-200">

                        {/* Izquierda */}
                        <div className="hidden md:flex gap-8">
                            <ul className="list-none flex gap-8">
                                <li className="hover:text-red-700 transition">
                                    <Link to="/">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/movies">
                                        Sección de películas
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/form">
                                        Formulario para añadir películas
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Derecha */}
                        <div className="hidden md:flex gap-8">
                            <ul className="list-none flex gap-8">
                                <li className="hover:text-red-700 transition">
                                    <Link to="/aboutus">
                                        Sobre nosotros
                                    </Link>
                                </li>
                                <li className="hover:text-red-700 transition">
                                    <Link to="/contact">
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
                    <div className="font-omen-body w-full bg-black/80 backdrop-blur-md p-6 text-center md:hidden z-20">
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
