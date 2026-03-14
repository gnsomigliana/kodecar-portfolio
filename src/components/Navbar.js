"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar si se ha hecho scroll y cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 flex justify-center pointer-events-none">
      {/* El nav recupera los eventos del puntero */}
      <nav 
        className={`pointer-events-auto transition-all duration-300 ease-in-out flex items-center justify-between w-full max-w-5xl rounded-full px-6 py-3 border 
          ${scrolled 
            ? "bg-[#02050a]/90 backdrop-blur-xl border-white/20 shadow-2xl shadow-blue-900/20 py-2" 
            : "bg-[#02050a]/50 backdrop-blur-md border-white/10"
          }
        `}
      >
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo-navbar.png" // Asegúrate de que este logo tenga fondo transparente y letras blancas
            alt="Logo Kodec.ar" 
            width={200} 
            height={100} 
            className="w-auto h-8 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Links Desktop con Hover Animado */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="relative group px-2 py-1 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Inicio</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </a>
          <a href="#tecnologias" className="relative group px-2 py-1 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Stack</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </a>
          <a href="#proyectos" className="relative group px-2 py-1 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Proyectos</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </a>
        </div>

        {/* Botón CTA Simple (Efecto Escalar) */}
        <div className="flex items-center">
          <a
            href="#contacto"
            className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Contactar
          </a>
        </div>
      </nav>
    </header>
  );
}