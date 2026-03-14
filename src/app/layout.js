import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: 'Kodec.ar | Desarrollo de Software',
  description: 'Transformamos ideas complejas en soluciones digitales elegantes. Desarrollo web y sistemas a medida desde La Plata para el mundo.',
  //metadataBase: new URL('https://kodec.ar'), Cambia esto por tu dominio final si es distinto
  openGraph: {
    title: 'Kodec.ar | Desarrollo de Software',
    description: 'Transformamos ideas complejas en soluciones digitales elegantes y de alto rendimiento.',
    url: 'https://kodecar-software.vercel.app/',
    siteName: 'Kodec.ar',
    images: [
      {
        // Lo ideal es crear una imagen rectangular (1200x630px) que diga Kodec.ar y guardarla en public/og-image.jpg
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Kodec.ar Preview',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodec.ar | Innovación Digital',
    description: 'Desarrollo web y aplicaciones escalables.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png', // Tu favicon actual
  },
};

export default function RootLayout({ children }) {
  return (
    // Agregamos 'scroll-smooth'
    <html lang="es" className="scroll-smooth scroll-pt-24">
      {/* Forzamos el icono aquí directamente 👇 */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
