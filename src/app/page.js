"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import GaleriaProyectos from "@/components/GaleriaProyectos";
import Link from 'next/link';
import Image from 'next/image';

// --- HOOK DE ANIMACIÓN AL SCROLL ---
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Home() {
  // 1. Nuevo estado para la animación inicial
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs para animaciones que ya tenías
  const [valoresRef, valoresVisible] = useReveal();
  const [tecnologiasRef, tecnologiasVisible] = useReveal();
  const [proyectosRef, proyectosVisible] = useReveal();
  const [contactoRef, contactoVisible] = useReveal();

  // 2. Este efecto se ejecuta una vez al entrar a la página
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const backupData = [
    {
      id: 1,
      nombre: "Proyecto RappiFarm",
      desc: "Sistema Ecommerce Web de medicamentos desarrollado con Next.JS y Django",
      tag: "Página web",
      imagenes: [
        "/inicio-rappifarm.png",
        "/login-rappifarm.png",
        "/vista-medicamentos-rappifarm.png",
        "/carrito-de-compras-rappifarm.png",
        "/vista-pago-rappifarm.png",
      ]
    },
    {
      id: 2,
      nombre: "Billetera Virtual Cripto",
      desc: "Aplicación de escritorio desarrollada en Java Nativo",
      tag: "De escritorio",
      imagenes: [
        "/login-billetera.png",
        "/menu-billetera.png",
        "/cotizaciones-billetera.png",
        "/compra-billetera.png",
        "/operaciones-billetera.png",
      ]
    },
  ];

  const proyectos = backupData; 

  return (
    // FONDO: Gradiente de Azul oscuro a Negro, texto blanco
    <div className={`min-h-screen bg-gradient-to-br from-[#040b16] via-[#02050a] to-black text-white overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Glow de fondo (Spotlight Azul) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">Innovación Digital</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-white">
            CONSTRUIMOS EL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-600">
              FUTURO DEL SOFTWARE.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Transformamos ideas complejas en soluciones digitales elegantes, escalables y de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#proyectos"
              className="px-10 py-4 rounded-full bg-white text-black font-black text-lg hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] flex items-center gap-2 group"
            >
              VER PROYECTOS
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#contacto"
              className="px-10 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN DE VALORES (Reemplaza a la Cinta) --- */}
      <section ref={valoresRef} className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm relative z-20">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 transform ${valoresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="px-4">
              <span className="block text-3xl font-black text-blue-500 mb-1">100%</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Ingenieria aplicada</span>
            </div>
            <div className="px-4">
              <span className="block text-3xl font-black text-white mb-1">UI/UX</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Diseño Centrado</span>
            </div>
            <div className="px-4">
              <span className="block text-3xl font-black text-white mb-1">100%</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Código a Medida</span>
            </div>
            <div className="px-4">
              <span className="block text-3xl font-black text-blue-500 mb-1">24/7</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Soporte Técnico</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- TECNOLOGÍAS (BENTO GRID MODERNO) --- */}
      <section ref={tecnologiasRef} id="tecnologias" className="py-32 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 transform ${tecnologiasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            <div className="text-center mb-16 relative">
              {/* Brillo decorativo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-blue-600/20 blur-[80px] -z-10"></div>
              
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Nuestro Stack</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                  TECNOLOGÍAS QUE <span className="text-blue-500">DOMINAMOS.</span>
              </h3>
            </div>

            {/* Grid Asimétrico */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
                
                {/* Card 1: Django (Grande) */}
                <div className="md:col-span-8 relative group rounded-3xl overflow-hidden bg-[#0a1120] border border-white/5 p-10 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                            {/* Icono más parecido al estilo Python/Django */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <h3 className="text-4xl font-black text-white mb-2">Django & Python</h3>
                        <p className="text-gray-400 text-lg max-w-md">Desarrollamos arquitecturas backend robustas, seguras y altamente escalables.</p>
                    </div>
                </div>

                {/* Card 2: Bases de Datos (Pequeña) */}
                <div className="md:col-span-4 relative group rounded-3xl overflow-hidden bg-[#0a1120] border border-white/5 p-8 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:rotate-12 transition-transform">
                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">PostgreSQL</h3>
                        <p className="text-gray-400 text-sm">Gestión de datos sólida.</p>
                    </div>
                </div>

                {/* Card 3: Tailwind CSS (Pequeña) */}
                <div className="md:col-span-4 relative group rounded-3xl overflow-hidden bg-[#0a1120] border border-white/5 p-8 flex flex-col items-center justify-center text-center hover:border-cyan-500/50 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <div className="w-20 h-20 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mb-4 group-hover:-translate-y-2 transition-transform">
                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 14a2 2 0 100-4 2 2 0 000 4z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Tailwind CSS</h3>
                        <p className="text-gray-400 text-sm">Diseño UI/UX moderno.</p>
                    </div>
                </div>

                {/* Card 4: Next.js (Grande) */}
                <div className="md:col-span-8 relative group rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-10 flex flex-col md:flex-row items-center md:items-start md:justify-between hover:bg-white/10 transition-all duration-500 shadow-xl">
                    <div className="relative z-10 mb-6 md:mb-0">
                        <h3 className="text-4xl font-black text-white mb-4">Next.js & React</h3>
                        <p className="text-gray-400 text-lg max-w-sm">Interfaces de usuario dinámicas, renderizado híbrido y la mejor experiencia de navegación.</p>
                    </div>
                    {/* Icono grande y llamativo */}
                    <div className="w-32 h-32 bg-black/50 rounded-[2rem] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- PROYECTOS --- */}
      <section ref={proyectosRef} id="proyectos" className="py-32 bg-white/5 border-y border-white/5">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${proyectosVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">NUESTROS TRABAJOS</h2>
                <p className="text-gray-400 mt-2 text-lg">Soluciones reales desarrolladas por nuestro equipo.</p>
              </div>
            </div>

            <GaleriaProyectos proyectos={proyectos} />
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section ref={contactoRef} id="contacto" className="py-32 px-6 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-[150px] pointer-events-none"></div>

         <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${contactoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Contacto Directo
            </span>
            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] text-white">
               HAGAMOS REALIDAD <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">TU PROYECTO.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
               Sin formularios largos ni esperas. Elige tu plataforma preferida y habla directamente con nuestro equipo de desarrollo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Opción WhatsApp con Icono */}
              <a 
                href="https://wa.me/5492281491955" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 text-white p-8 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 shadow-lg"
              >
                <div className="bg-[#25D366]/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform text-[#25D366]">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.374-5.03c0-5.445 4.431-9.87 9.873-9.87 2.636 0 5.115 1.026 6.979 2.891s2.89 4.342 2.89 6.98c0 5.445-4.43 9.87-9.87 9.87"/>
                  </svg>
                </div>
                <span className="text-3xl font-black mb-2">WhatsApp</span>
                <span className="text-gray-400 font-medium text-sm uppercase tracking-widest">Respuesta rápida</span>
              </a>

              {/* Opción Instagram con Icono */}
              <a 
                href="https://www.instagram.com/kodec.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 text-white p-8 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 shadow-lg"
              >
                <div className="bg-purple-500/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform text-purple-400">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-3xl font-black mb-2">Instagram</span>
                <span className="text-gray-400 font-medium text-sm uppercase tracking-widest">Sigue nuestro trabajo</span>
              </a>
            </div>
         </div>
      </section>

      {/* --- FOOTER (Actualizado y Modernizado) --- */}
      <footer className="bg-[#09090b]/80 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
        {/* Brillo sutil de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12 text-center md:text-left">
            
            {/* 1. Marca y Descripción */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                
                <div className="w-12 h-12 flex items-center justify-center relative overflow-hidden shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="Logo Kodec.ar"
                    fill 
                    className="object-contain" 
                    priority 
                  />
                </div>

                <div className="text-left">
                  <span className="text-2xl font-black tracking-tighter text-white uppercase block leading-none">KODEC.<span className="text-blue-500">AR</span></span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Software Dev.</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-xs font-medium leading-relaxed mt-2">
                Transformando ideas en soluciones digitales. Especialistas en desarrollo web y aplicaciones a medida.
              </p>
            </div>

            <div className="md:col-span-2"></div> {/* Espaciador invisible */}

            {/* 2. Enlaces Rápidos */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start gap-3">
              <h4 className="text-white font-black uppercase tracking-wider mb-2 text-sm">Explorar</h4>
              <a href="#home" className="text-gray-400 hover:text-blue-500 font-medium transition-colors text-sm">Inicio</a>
              <a href="#tecnologias" className="text-gray-400 hover:text-blue-500 font-medium transition-colors text-sm">Tecnologías</a>
              <a href="#proyectos" className="text-gray-400 hover:text-blue-500 font-medium transition-colors text-sm">Proyectos</a>
            </div>

            {/* 3. Contacto y Redes */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start gap-3">
              <h4 className="text-white font-black uppercase tracking-wider mb-2 text-sm">Conectar</h4>
              <a href="https://www.instagram.com/kodec.ar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 font-medium transition-colors text-sm flex items-center gap-2">
                Instagram
              </a>
              <a href="https://wa.me/5492281491955" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 font-medium transition-colors text-sm flex items-center gap-2">
                WhatsApp
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kodecar25@gmail.com&su=Consulta%20sobre%20desarrollo%20de%20software" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 font-medium transition-colors text-sm flex items-center gap-2">
                Email
              </a>
            </div>

          </div>

          {/* Barra Inferior (Copyright) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs font-medium">
              © {new Date().getFullYear()} Kodec.ar. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span>Made with</span>
              <span className="text-blue-500">Next.js & Django</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}