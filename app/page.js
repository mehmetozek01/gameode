"use client";

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameCard from './components/GameCard';

export default function Home() {
  const exampleGames = [
    {
      title: "Valorant",
      image: "/images/valorant.jpg",
      shortDesc: "Hızlı tempolu taktiksel FPS oyunu.",
      rating: 4.8,
      downloads: "5M+",
      isFree: true,
      url: "/games/valorant", // site içi detay sayfası linki
    },
    {
      title: "Valorant2",
      image: "/images/valorant.jpg",
      shortDesc: "Hızlı tempolu taktiksel FPS oyunu.",
      rating: 4.8,
      downloads: "5M+",
      isFree: true,
      url: "/games/valorant", // site içi detay sayfası linki
    },
  ];


  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar alwaysShow={false} />
      <Hero />

      <section className="p-6">
        <h2 className="text-3xl font-bold mb-6">Popüler Oyunlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exampleGames.map(game => <GameCard key={game.title} game={game} />)}
        </div>

      </section>

      <Footer />
    </main>
  );
}
