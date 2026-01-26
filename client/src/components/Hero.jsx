export default function Hero() {
    return (
        <div className="relative w-full">
            <img
                src="/hero.png"
                alt="Hero"
                className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
}
