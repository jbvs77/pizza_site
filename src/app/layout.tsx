import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'CasiPizza | Pizza Artesanal de Lenta Fermentación',
  description: 'Masa fermentada por más de 48 horas en frío. Bordes crujientes, textura aireada y fácil digestión en Guatemala.',
  openGraph: {
    title: 'CasiPizza | Pizza Artesanal',
    description: 'El secreto está en el tiempo. Masas fermentadas por 48 horas.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}