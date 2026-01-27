function Contact() {
    return (
        <div
            className="min-h-screen text-gray-100 px-4 py-8 md:px-6 md:py-12 lg:py-16 bg-neutral-950 relative"
        >
            <div className="absolute inset-0 bg-black/70 -z-10"></div>
            <div className="relative z-10 max-w-6xl mx-auto">

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-red-600 mb-8 md:mb-12 tracking-wider uppercase drop-shadow-lg">
                    Contacto y Localización
                </h1>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">


                    <section className="bg-neutral-900 border border-red-900/50 p-6 md:p-8 rounded-lg shadow-2xl shadow-red-950/20">
                        <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4 md:mb-6">
                            Contáctanos
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-red-400 font-semibold">Email: </span>
                                contact@theomen-video.club
                            </p>
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-red-400 font-semibold">Telefóno: </span>
                                +34 (666) 1900-666
                            </p>

                        </div>
                    </section>


                    <section className="bg-neutral-900 border border-red-900/50 p-6 md:p-8 rounded-lg shadow-2xl shadow-red-950/20">
                        <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4 md:mb-6">
                            Nuestra localización
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-red-400 font-semibold">Dirección: </span>
                                Carrer del Bisbe, casa de la bruixa, 08007 BCN
                            </p>
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-red-400 font-semibold">Coordenadas: </span>
                                41.3833566° N, 2.175549° W
                            </p>

                        </div>
                    </section>
                </div>


                <section className="mt-6 md:mt-8">
                    <div className="bg-neutral-900 border border-red-900/50 p-6 md:p-8 rounded-lg shadow-2xl shadow-red-950/20">
                        <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4 md:mb-6">
                            Encuéntranos
                        </h2>
                        <div className="h-64 md:h-80 lg:h-96 w-full bg-neutral-800 rounded border-2 border-red-900/30 flex items-center justify-center relative overflow-hidden">

                            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900"></div>
                            <p className="relative z-10 text-gray-500 text-sm md:text-base text-center px-4">
                                
                                <br />
                                <span className="text-xs md:text-sm">
                                    <div className="h-64 md:h-80 lg:h-96 w-full rounded border-2 border-red-900/30 overflow-hidden">
                                        <a
                                            href="https://maps.app.goo.gl/mgv2oy2nQC21Mn9E7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full h-full grayscale hover:grayscale-0 transition duration-500"
                                        >
                                            <img
                                                src="/img/image1.png"
                                                alt="Ver nuestra ubicación en Google Maps"
                                                className="w-full h-full object-cover rounded-lg"
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                </span>
                            </p>


                            <div className="absolute top-0 left-1/4 w-1 h-full bg-red-900/20 rotate-12"></div>
                            <div className="absolute top-0 right-1/3 w-0.5 h-full bg-red-800/20 -rotate-6"></div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Contact;
