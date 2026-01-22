import { Link } from "react-router-dom";
import omenLogoFooter from "../assets/home/the-omen-logo-footer.png";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            aria-label="Footer THE OMEN"
            className="mt-12 border-t border-[#b30000]/30 bg-[#050505]"
        >
            {/* Línea glow superior */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff1a1a]/60 to-transparent" />

            <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Marca */}
                    <section aria-label="Marca" className="space-y-4">
                        <Link
                            to="/"
                            aria-label="Ir al inicio"
                            className="inline-flex items-center rounded
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                            focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                            >
                            <img
                                src={omenLogoFooter}
                                alt="THE OMEN"
                                className="h-16 w-auto object-contain sm:h-20 md:h-24"
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>

                        <p className="font-omen-body text-sm leading-relaxed text-[#b5b5b5]">
                            Un videoclub de culto. Historias prohibidas, proyecciones nocturnas y silencio sagrado.
                        </p>

                        <div className="flex items-center gap-2 pt-1">
                            <span className="h-px w-10 bg-[#b30000]/70" />
                            <span className="font-omen-body text-xs uppercase tracking-[0.25em] text-[#b30000]">
                                LAS PUERTAS ESTÁN ABIERTAS. EL REGRESO, NO.
                            </span>
                        </div>
                    </section>

                    {/* Navegación */}
                    <nav aria-label="Navegación" className="space-y-4">
                        <p className="font-omen-title text-sm uppercase tracking-[0.25em] text-[#f2f2f2]">
                            Navegación
                        </p>

                        <ul className="space-y-2 font-omen-body text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-[#b5b5b5] transition hover:text-[#ff1a1a]
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/movies"
                                    className="text-[#b5b5b5] transition hover:text-[#ff1a1a]
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                >
                                    Películas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/add-movie"
                                    className="text-[#b5b5b5] transition hover:text-[#ff1a1a]
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                >
                                    Añadir película
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/location"
                                    className="text-[#b5b5b5] transition hover:text-[#ff1a1a]
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                    focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                >
                                    Ubicación
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Información */}
                    <section aria-label="Información" className="space-y-4">
                        <p className="font-omen-title text-sm uppercase tracking-[0.25em] text-[#f2f2f2]">
                            Información
                        </p>

                        <div className="space-y-2 font-omen-body text-sm text-[#b5b5b5]">
                            <p>
                                <span className="text-[#f2f2f2]">Horario:</span>{" "}
                                Lun–Jue 18:00–01:00 · Vie–Dom 18:00–03:00
                            </p>
                            <p>
                                <span className="text-[#f2f2f2]">Dirección:</span>{" "}
                                Carrer del Bisbe (Ciutat Vella), 08007 Barcelona
                            </p>
                            <p>
                                <span className="text-[#f2f2f2]">Contacto:</span>{" "}
                                <a
                                    href="mailto:contact@theomen-video.club"
                                    className="transition hover:text-[#ff1a1a]
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                    focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                    >
                                    contact@theomen-video.club
                                </a>
                            </p>
                        </div>

                        <p className="font-omen-body text-xs text-[#b5b5b5]/80">
                            *Las proyecciones especiales pueden requerir “invitación”.
                            No preguntes dos veces.
                        </p>
                    </section>
                </div>

                {/* Línea inferior */}
                <div className="mt-12 flex flex-col gap-3 border-t border-[#b30000]/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-omen-body text-xs text-[#b5b5b5]">
                        © {year} THE OMEN. Todos los derechos reservados.
                    </p>

                    <p className="font-omen-body text-xs text-[#b5b5b5]/80">
                        Has cruzado el umbral
                    </p>
                </div>
            </div>
        </footer>
    );
}
