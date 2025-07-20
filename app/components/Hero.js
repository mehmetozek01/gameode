"use client";

export default function Hero() {
    return (
        <section className="relative h-screen select-none overflow-hidden flex items-center justify-center text-white px-4">
            <video
                key="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                src="/videos/hero-video.mp4"
                type="video/mp4"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />

            <div className="relative z-20 max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Oyun Dünyasına Dal!
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    En sevdiğin oyunları keşfet, sıradaki favorini bul!
                </p>
                <a
                    href="#featured"
                    className="inline-block bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-full font-semibold"
                >
                    Oyunlara Göz At
                </a>
            </div>
        </section>

    );
}
