<section className="relative z-10 min-h-screen flex items-center">
    <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl grid items-center gap-10 md:grid-cols-2">
            <div className="max-w-2xl">
                <h1 className="font-omen-title mt-6 text-[#f2f2f2] tracking-[0.18em] uppercase text-4xl sm:text-5xl md:text-6xl leading-tight">
                    EL RITO COMIENZA
                </h1>

                <p className="font-omen-body mt-4 text-[#b5b5b5] text-base sm:text-lg max-w-xl leading-relaxed">
                    <span className="block">
                        La entrada ceremonial a un cine consagrado a lo prohibido.
                    </span>
                    <span className="block mt-2">
                        Aquí no se proyectan películas: se invocan recuerdos, se repiten
                        visiones y se preservan obras que nunca debieron volver a la luz.
                    </span>
                </p>

                <div className="mt-10">
                    <Link
                        to="/movies"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md font-omen-body font-medium text-[#f2f2f2] bg-[#b30000] border border-[#ff1a1a]/40 transition hover:bg-[#ff1a1a] hover:shadow-[0_0_18px_rgba(255,26,26,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                    >
                        Iniciar el Ritual
                    </Link>

                    <p className="font-omen-body mt-3 text-sm text-[#b5b5b5]/90">
                        Proyección sujeta a restricciones no documentadas
                    </p>
                </div>
            </div>

            <div className="hidden md:flex justify-end">
                <CursedCarousel />
            </div>
        </div>
    </div>
</section>
