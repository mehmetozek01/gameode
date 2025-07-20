// app/layout.js

import './globals.css';

export const metadata = {
  title: 'GameOde',
  description: 'Oyunları keşfet ve incele!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
