'use client';
import React, { use } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NotFoundGame from '../[slug]/not-found';
import Image from 'next/image';
import Head from 'next/head';

const gamesData = [
    {
        slug: 'valorant',
        title: 'Valorant',
        image: '/images/valorant.jpg',
        releaseDate: '2020-06-02',
        platforms: ['PC'],
        description:
            'Valorant, Riot Games tarafından geliştirilen hızlı tempolu taktiksel FPS oyunudur. Strateji ve takım oyunu üzerine kuruludur.',
        rating: 4.8,
        downloads: '5M+',
        isFree: true,
        news: [
            {
                title: 'Valorant 2025 Güncellemesi Detayları Açıklandı',
                date: '2025-02-10',
                content:
                    'Yeni haritalar, ajanlar ve oyun mekanikleri oyunculara sunulacak. Turnuvalar heyecanla bekleniyor.',
            },
            {
                title: 'Turnuva Takvimi Açıklandı',
                date: '2025-03-05',
                content:
                    '2025 sezonu için resmi Valorant turnuva takvimi yayınlandı. Takımlar hazırlıklarını sürdürüyor.',
            },
        ],
    },
    // Diğer oyunlar...
];

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function GamePage({ params }) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const game = gamesData.find(g => g.slug === slug);

    if (!game) {
        return (
            <>
                <Navbar alwaysShow={true} />

                <NotFoundGame />

                <Footer />

            </>
        );
    }
    return (
        <>
            <Head>
                <title>{game.title} | Gameode - Oyun İnceleme</title>
                <meta
                    name="description"
                    content={`${game.title} hakkında detaylı bilgiler, incelemeler, haberler ve daha fazlası.`}
                />
                <meta name="keywords" content={`${game.title}, oyun, inceleme, haber, ${game.platforms.join(', ')}`} />
            </Head>

            <Navbar alwaysShow={true} />

            <main className="bg-[#0f0f0f] text-white min-h-screen px-6 md:px-20 lg:px-40 pt-24 pb-10">


                {/* Başlık ve görsel */}
                <section className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                        <Image
                            src={game.image}
                            alt={game.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-3xl"
                        />
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-5xl font-extrabold tracking-wide">{game.title}</h1>

                        <p className="text-gray-300 leading-relaxed text-lg">{game.description}</p>

                        <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                            <div>
                                <strong>Çıkış Tarihi:</strong> {formatDate(game.releaseDate)}
                            </div>
                            <div>
                                <strong>Platformlar:</strong> {game.platforms.join(', ')}
                            </div>
                            <div>
                                <strong>İndirilen:</strong> {game.downloads}
                            </div>
                            <div>
                                <strong>Ücretsiz:</strong> {game.isFree ? 'Evet' : 'Hayır'}
                            </div>
                            <div className="flex items-center gap-2">
                                <strong>Değerlendirme:</strong>
                                <span className="text-yellow-400 font-bold">{game.rating}</span>
                                <StarRating rating={game.rating} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Haberler */}
                <section className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold border-b-4 border-pink-600 mb-8">Son Haberler</h2>
                    <div className="flex flex-col gap-8">
                        {game.news.map(({ title, date, content }, i) => (
                            <article
                                key={i}
                                className="relative bg-zinc-900 bg-opacity-60 p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
                hover:shadow-pink-600 hover:scale-[1.03] hover:bg-gradient-to-r hover:from-pink-900 hover:via-pink-800 hover:to-pink-900"
                            >
                                <div className="pointer-events-none absolute inset-0 rounded-xl bg-pink-600 opacity-0 blur-3xl transition-opacity duration-300 hover:opacity-30" />
                                <h3 className="text-2xl font-semibold mb-2 text-white transition-colors duration-300 hover:text-pink-400 relative z-10">
                                    {title}
                                </h3>
                                <time className="text-pink-400 text-sm block mb-2 relative z-10">{formatDate(date)}</time>
                                <p className="text-gray-300 leading-relaxed relative z-10">{content}</p>
                                <span className="absolute bottom-6 left-6 w-20 h-1 bg-pink-500 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100 z-10" />
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

function StarRating({ rating }) {
    // Yıldız simgelerini döndüren küçük bir komponent
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(
                <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
            );
        } else if (rating > i - 1 && rating < i) {
            // Yarım yıldız için
            stars.push(
                <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <defs>
                        <linearGradient id="half">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#half)"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z"
                    />
                </svg>
            );
        } else {
            stars.push(
                <svg
                    key={i}
                    className="w-5 h-5 fill-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
            );
        }
    }

    return <div className="flex">{stars}</div>;
}
