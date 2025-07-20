// Footer.tsx
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-12 px-6 md:px-20 animate-fadeIn">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Hakkımızda */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 tracking-wide">Gameode</h2>
                    <p className="text-gray-400 text-sm leading-6">
                        Gameode, oyuncular için en güncel oyun içeriklerini sunar. Oyun
                        dünyasında keşfe çık, rehberleri takip et, topluluğa katıl.
                    </p>
                </div>

                {/* Linkler */}
                <div className="flex flex-col gap-2 text-sm">
                    <h3 className="text-lg font-semibold mb-2">Bağlantılar</h3>
                    <a href="/" className="hover:text-pink-400 transition-colors">Anasayfa</a>
                    <a href="/blog" className="hover:text-pink-400 transition-colors">Blog</a>
                    <a href="/hakkimizda" className="hover:text-pink-400 transition-colors">Hakkımızda</a>
                    <a href="/iletisim" className="hover:text-pink-400 transition-colors">İletişim</a>
                    <a href="/gizlilik" className="hover:text-pink-400 transition-colors">Gizlilik Politikası</a>
                </div>

                {/* Sosyal ve Bülten */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Bizi Takip Et</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://github.com" target="_blank" className="hover:text-pink-400 transition-colors text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-pink-400 transition-colors text-xl">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition-colors text-xl">
                            <FaInstagram />
                        </a>
                    </div>
                    <form className="flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="E-posta ile abone ol"
                            className="bg-zinc-800 text-sm px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>

            {/* Alt Çizgi */}
            <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Gameode. Tüm hakları saklıdır.
            </div>
        </footer>
    );
}
