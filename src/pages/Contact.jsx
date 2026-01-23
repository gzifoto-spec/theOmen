// import fondo from '../components/img/fondo.jpg';
// TODO: Añadir imagen de fondo cuando esté disponible

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
                                medium@theomen.com
                            </p>
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-red-400 font-semibold">Telefóno: </span>
                                +34 (666) 1980-666
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
                                Carrer del Bisbe, casa de la bruixa,
                            </p>
                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-red-400 font-semibold">Coordenadas: </span>
                                41.3833947° N, 2.1769119° W
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
                                🩸 <span className="text-red-500 font-bold">El mapa ha sido desgarrado...</span> 🩸
                                <br />
                                <span className="text-xs md:text-sm">
                                    <div className="h-64 md:h-80 lg:h-96 w-full rounded border-2 border-red-900/30 overflow-hidden">
                                        <iframe
                                            src="https://www.google.es/maps/place/Carrer+del+Bisbe,+Ciutat+Vella,+08002+Barcelona/@41.3836785,2.1757003,3a,90y,180h,90t/data=!3m7!1e1!3m5!1sSDLhzuCmdjMjTxSxE4OOHQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DSDLhzuCmdjMjTxSxE4OOHQ%26yaw%3D180!7i16384!8i8192!4m15!1m8!3m7!1s0x12a4a2f9b17cd0cf:0xec8f33a36203db2c!2sCarrer+del+Bisbe,+Ciutat+Vella,+08002+Barcelona!3b1!8m2!3d41.3834647!4d2.1762226!16s%2Fg%2F11bx1gswm4!3m5!1s0x12a4a2f9b17cd0cf:0xec8f33a36203db2c!8m2!3d41.3834647!4d2.1762226!16s%2Fg%2F11bx1gswm4?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-500"
                                            allowFullScreen=""
                                            loading="cargando"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Nuestra ubicación"
                                        ></iframe>
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