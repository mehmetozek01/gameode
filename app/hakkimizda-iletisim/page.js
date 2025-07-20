'use client';

import { FaTwitter, FaInstagram, FaDiscord, FaRedditAlien, FaDonate, FaBullseye, FaEye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HakkimizdaIletisim() {
  return (
 <>
 <Navbar alwaysShow={true} />
    <div className="min-h-screen px-6 py-20 bg-zinc-900 text-white flex flex-col gap-20 font-sans">
      
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-5xl font-extrabold text-purple-400 tracking-tight">Gameode Nedir?</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Gameode, tutkulu oyuncular tarafından kurulan bağımsız bir platformdur. Amacımız, oyunculara güncel, doğru ve ilgi çekici içerikler sunmak; oyun dünyasını bir araya getirmektir.
        </p>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-4 text-purple-300 text-xl">
            <FaBullseye />
            <h2 className="font-semibold">Misyonumuz</h2>
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            Oyun dünyasının hızla değişen yapısında, oyuncuların güvenilir bilgiye, rehber içeriklere ve gerçek topluluk deneyimlerine ulaşmasını sağlamak. Amacımız, her seviyeden oyuncuya rehberlik ederek bilgi kirliliğini azaltmak, oyun kültürünü desteklemek ve kaliteli içeriklerle oyun deneyimini zenginleştirmek.

            Ayrıca bağımsız yapımcılara ve yerel geliştiricilere görünürlük kazandırmak, yenilikçi oyun projelerini desteklemek bizim için bir sorumluluktur
          </p>
        </div>
        <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-4 text-purple-300 text-xl">
            <FaEye />
            <h2 className="font-semibold">Vizyonumuz</h2>
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
           Gameode olarak, sadece bir oyun platformu değil, oyun severlerin buluştuğu bir merkez olmak istiyoruz.

             Hedefimiz; Türkiye’de başlayıp globalde büyüyen, kullanıcı geri bildirimleriyle sürekli evrilen, adil ve şeffaf bir topluluk oluşturmaktır.

            Oyun dünyasına katkı sağlayan bir referans noktası olmak; oyuncular, yayıncılar ve geliştiriciler için ilham verici bir ekosistem yaratmak vizyonumuzun temelini oluşturur.
          </p>
        </div>
      </section>

      {/* SOSYAL MEDYA */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-purple-400">Bize Ulaşın</h2>
        <p className="text-gray-400">
          Öneri, destek veya işbirliği için sosyal medya kanallarımızdan bize ulaşabilirsiniz.
        </p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://twitter.com/" target="_blank" className="hover:text-blue-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank" className="hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://discord.com/" target="_blank" className="hover:text-indigo-400 transition duration-300">
            <FaDiscord />
          </a>
          <a href="https://reddit.com/" target="_blank" className="hover:text-orange-400 transition duration-300">
            <FaRedditAlien />
          </a>
        </div>
      </section>

      {/* DESTEK */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-purple-400">Bize Destek Olun</h2>
        <p className="text-gray-400 text-base">
          Gameode’u daha ileri taşımamız için desteğiniz bizim için çok önemli. Küçük bir katkı, büyük bir fark yaratır!
        </p>
        <a
          href="https://bana-bir-kahve-ismi-linki.com"
          target="_blank"
          className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition"
        >
          <FaDonate className="text-lg" /> Bağış Yap
        </a>
      </section>
    </div>
    <Footer/>
 </>
  );
}
