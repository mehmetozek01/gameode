"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const menuItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Oyunlar", href: "/oyunlar" },
    { name: "İletişim", href: "/hakkimizda-iletisim" },
];

export default function Navbar({ alwaysShow = false }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(alwaysShow);

    useEffect(() => {
        if (alwaysShow) {
            setShowNavbar(true);
            return;
        }

        const handleScroll = () => {
            setShowNavbar(window.scrollY >= 450);
            if (window.scrollY < 450 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen, alwaysShow]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
          ${showNavbar
                        ? "bg-black bg-opacity-90 backdrop-blur-md shadow-lg opacity-100 translate-y-0"
                        : "bg-transparent opacity-0 -translate-y-full"
                    }
          flex justify-between items-center text-white
        `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    tabIndex={0}
                    aria-label="Gameode Logo"
                    className="text-pink-500 text-xl font-bold tracking-wider select-none cursor-pointer
          transition-transform duration-300 hover:scale-110 hover:text-pink-400 drop-shadow-[0_0_6px_rgba(255,64,129,0.8)]"
                    onClick={() => setMenuOpen(false)} // Logo tıklanınca menü kapanır mobilde
                >
                    Gameode
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10 text-lg font-medium">
                    {menuItems.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            tabIndex={0}
                            className="relative group focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 rounded transition-colors duration-300 hover:text-pink-400 group-focus:text-pink-400"
                            onClick={() => setMenuOpen(false)} // Masaüstü link tıklanınca menü kapat (genelde açık olur ama ekstra iyilik)
                        >
                            <span>
                                {name}
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 rounded transition-all group-hover:w-full group-focus:w-full"></span>
                            <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-30 group-focus:opacity-30 bg-pink-500 blur-xl transition-opacity"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
                    aria-expanded={menuOpen}
                    className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
                >
                    <span
                        className={`block absolute h-0.5 w-6 bg-pink-500 rounded transition-transform duration-300 ease-in-out
              ${menuOpen ? "rotate-45 translate-y-2" : "-translate-y-2.5"}
            `}
                    ></span>
                    <span
                        className={`block absolute h-0.5 w-6 bg-pink-500 rounded transition-opacity duration-300 ease-in-out
              ${menuOpen ? "opacity-0" : "opacity-100"}
            `}
                    ></span>
                    <span
                        className={`block absolute h-0.5 w-6 bg-pink-500 rounded transition-transform duration-300 ease-in-out
              ${menuOpen ? "-rotate-45 -translate-y-2" : "translate-y-2.5"}
            `}
                    ></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center space-y-12 text-white text-3xl font-semibold transition-all duration-500 z-40
          ${menuOpen
                        ? "opacity-100 pointer-events-auto scale-100 translate-y-0"
                        : "opacity-0 pointer-events-none scale-95 -translate-y-8"
                    }
        `}
            >
                {menuItems.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        tabIndex={0}
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-pink-400 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </>
    );
}
