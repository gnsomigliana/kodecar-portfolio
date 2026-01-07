import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kodec.ar | Soluciones Digitales",
  description: "Desarrollo de software y soluciones digitales.",
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
