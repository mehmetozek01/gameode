"use client";
import Link from 'next/link';

export default function NotFoundGame() {
    return (
        <>
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

        .container {
          height: 100vh;
          background: #0f0f1e;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #eee;
          text-align: center;
          padding: 20px;
          font-family: 'Orbitron', monospace;
        }

        .neon-text {
          font-size: 8rem;
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #00f,
            0 0 80px #00f;
          animation: flicker 2s infinite alternate;
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.4;
          }
        }

        .subtitle {
          font-size: 1.8rem;
          color: #ff4081;
          margin-top: 0.5rem;
          text-shadow: 0 0 10px #ff4081;
          animation: slideIn 1.5s ease forwards;
          opacity: 0;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .description {
          max-width: 400px;
          margin: 1rem auto 2rem;
          color: #aaa;
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 300;
        }
        .btn-home {
        background: linear-gradient(135deg, #8a2be2, #6a5acd);
        color: white;
        padding: 12px 30px;
        font-size: 1.2rem;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(106, 90, 205, 0.6);
        transition: all 0.3s ease;
        font-weight: 600;
        letter-spacing: 0.05em;
        }

        .btn-home:hover {
        background: linear-gradient(135deg, #7b68ee, #483d8b);
        box-shadow: 0 6px 20px rgba(123, 104, 238, 0.8);
        transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width: 480px) {
          .neon-text {
            font-size: 5rem;
          }
          .subtitle {
            font-size: 1.3rem;
          }
          .btn-home {
            padding: 10px 25px;
            font-size: 1rem;
          }
        }
      `}</style>

            <div className="container select-none" role="main" aria-label="404 Not Found">
                <h1 className="neon-text" aria-hidden="true">404</h1>
                <h2 className="subtitle">Oops! Kaybolduk gibi...</h2>
                <p className="description">
                    Aradığın oyun evrende kaybolmuş olabilir. Ama endişelenme, seni tekrar oyun alanına götürüyorum!
                </p>
                <Link href="/">
                    <button className="btn-home" aria-label="Ana sayfaya dön">Ana Sayfaya Dön</button>
                </Link>
            </div>
        </>
    );
}
