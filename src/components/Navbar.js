import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        {/* LOGO VIEJO 
          <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">kodec<span className="text-blue-600">.ar</span></span>
        </div>
        *} 
        {/* Logo con Redirección al Home */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Reemplazamos el cuadro azul por tu imagen */}
          <Image 
            src="/logo.png"
            alt="Logo Kodec.ar" 
            width={200} 
            height={108} 
            className="w-auto h-10 rounded-lg object-contain group-hover:scale-105 transition-transform"
          />
        </Link>


        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#tecnologias" className="hover:text-blue-600 transition">Tecnologias</a>
          <a href="#proyectos" className="hover:text-blue-600 transition">Proyectos</a>
        </div>

        <a href='#contacto'className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
          Contactanos
        </a>
      </div>
    </nav>
  );
}