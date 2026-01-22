import { Link } from "react-router-dom";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            aria-label="Footer THE OMEN"
            className="mt-10 border-t border-[#b30000]/30 bg-[#050505]"
        >
            {/* Glow sutil superior */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff1a1a]/70 to-transparent" />

            <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Marca + descripción */}
                    <section aria-label="Marca" className="space-y-3">
                        <p className="font-omen-title text-2xl tracking-[0.2em] text-[#f2f2f2]">
                            THE OMEN
                        </p>
                        <p className="font-omen-body text-sm leading-relaxed text-[#b5b5b5]">
                            Un videoclub de culto. Historias prohibidas, proyecciones nocturnas y silencio sagrado.
                        </p>

                        {/* Mini detalle decorativo */}
                        <div className="flex items-center gap-2 pt-1">
                            <span className="h-px w-10 bg-[#b30000]/70" />
                            <span className="font-omen-body text-xs uppercase tracking-[0.25em] text-[#b30000]">
                                Horror elegante
                            </span>
                        </div>
                    </section>

                    {/* Navegación interna */}
                    <nav aria-label="Enlaces internos" className="space-y-3">
                        <p className="font-omen-title text-sm uppercase tracking-[0.25em] text-[#f2f2f2]">
                            Navegación
                        </p>

                        <ul className="space-y-2 font-omen-body text-sm">
                            {[
                                { to: "/", label: "Inicio" },
                                { to: "/movies", label: "Películas" },
                                { to: "/add-movie", label: "Añadir película" },
                                { to: "/location", label: "Ubicación" },
                            ].map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="inline-flex items-center gap-2 text-[#b5b5b5] transition
                                hover:text-[#ff1a1a]
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                        aria-label={`Ir a ${item.label}`}
                                    >
                                        <span className="h-[6px] w-[6px] rounded-full bg-[#b30000]/70" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Info (falsa pero creíble) */}
                    <section aria-label="Información" className="space-y-3">
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
                                Carrer del Bisbe (Ciutat Vella), 1, 08007 Barcelona
                            </p>
                            <p>
                                <span className="text-[#f2f2f2]">Contacto:</span>{" "}
                                <a
                                    href="mailto:contact@theomen-video.club"
                                    className="text-[#b5b5b5] transition hover:text-[#ff1a1a]
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]
                                    focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                                    aria-label="Enviar email a contacto"
                                >
                                    contact@theomen-video.club
                                </a>
                            </p>
                        </div>

                        {/* Avisito extra */}
                        <p className="font-omen-body text-xs text-[#b5b5b5]/80">
                            *Las proyecciones especiales pueden requerir “invitación”. No preguntes dos veces.
                        </p>
                    </section>
                </div>

                {/* Línea final */}
                <div className="mt-10 flex flex-col gap-3 border-t border-[#b30000]/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-omen-body text-xs text-[#b5b5b5]">
                        © {year} THE OMEN. Todos los derechos reservados.
                    </p>

                    <p className="font-omen-body text-xs text-[#b5b5b5]/80">
                        Hecho para clase · React · Router · Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
