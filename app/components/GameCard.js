'use client';

import Image from "next/image";
import Link from "next/link";

const slugify = (text) =>
    text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();

export default function GameCard({ game }) {
    const slug = slugify(game.title);

    return (
        <div className="relative group cursor-default overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">

            {/* Görsel */}
            <Image
                src={game.image}
                alt={game.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-10 rounded-2xl" />

            {/* Metin Alanı */}
            <div className="absolute bottom-6 left-6 right-6 z-20 transition-all duration-500 transform group-hover:translate-y-0 translate-y-6 opacity-0 group-hover:opacity-100">
                <h3 className="text-2xl font-extrabold text-white tracking-wide group-hover:animate-pulse">
                    {game.title}
                </h3>
                <p className="text-sm text-gray-200 mt-1">{game.shortDesc}</p>

                {/* Sadece Buton Link */}
                <Link href={`/games/${slug}`} passHref>
                    <button className="cursor-pointer mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition-all duration-300">
                        İncele
                    </button>
                </Link>
            </div>

            {/* Üst çizgi */}
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />
        </div>
    );
}
