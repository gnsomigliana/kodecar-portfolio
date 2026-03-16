"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function GaleriaProyectos({ proyectos }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // 1. Aseguramos que el componente esté montado para usar Portals en Next.js sin errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Manejo seguro del scroll
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // 3. Soporte para teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const openGallery = (proyecto) => {
    setSelectedProject(proyecto);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => 
        prev === selectedProject.imagenes.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => 
        prev === 0 ? selectedProject.imagenes.length - 1 : prev - 1
      );
    }
  };

  // 4. El contenido del modal extraído para inyectarlo en el Portal
  const modalContent = selectedProject ? (
    <div 
      className="fixed inset-0 z-[9999] bg-[#02050a]/95 backdrop-blur-xl flex items-center justify-center w-full h-[100dvh] touch-none"
      onClick={closeGallery}
    >
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center md:w-[90vw] md:h-[90vh] md:bg-black/40 md:rounded-3xl md:border md:border-white/10 md:shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Cabecera superior adaptada */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-20 bg-gradient-to-b from-black/80 to-transparent">
          <div className="bg-black/50 border border-white/10 px-4 py-2 rounded-full text-white text-xs md:text-sm font-bold tracking-widest uppercase backdrop-blur-md max-w-[70%] truncate shadow-lg">
            {selectedProject.nombre} • {currentIndex + 1} / {selectedProject.imagenes.length}
          </div>
          
          <button 
            onClick={closeGallery}
            className="bg-white/10 border border-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Imagen centrada y contenida */}
        <div className="relative w-full h-full flex items-center justify-center pb-24 pt-20 md:p-12">
           <img 
            src={selectedProject.imagenes[currentIndex]} 
            alt={`Imagen ${currentIndex + 1}`} 
            className="w-full h-full object-contain select-none drop-shadow-2xl"
          />
        </div>

        {/* Botón Anterior */}
        <button 
          onClick={prevImage}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 md:bg-white/10 border border-white/10 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 z-20 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>

        {/* Botón Siguiente */}
        <button 
          onClick={nextImage}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 md:bg-white/10 border border-white/10 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 z-20 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Indicador de puntitos en la base */}
        <div className="absolute bottom-8 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-black/60 md:bg-black/40 px-5 py-3 rounded-full backdrop-blur-md border border-white/5">
          {selectedProject.imagenes.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-150 w-6' : 'bg-white/30'}`}
            />
          ))}
        </div>

      </div>
    </div>
  ) : null;

  return (
    <>
      {/* GRILLA OSCURA DE PROYECTOS */}
      <div className="grid md:grid-cols-2 gap-8">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            onClick={() => openGallery(proyecto)}
            className="group relative bg-white/5 rounded-[2rem] p-8 border border-white/10 hover:border-white/30 transition-all cursor-pointer hover:bg-white/10 shadow-lg"
          >
            <div className="text-xs font-bold text-blue-400 mb-4 tracking-widest uppercase">
              {proyecto.tag}
            </div>
            <h3 className="text-3xl font-black text-white mb-3 group-hover:text-blue-100 transition">
              {proyecto.nombre}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              {proyecto.desc}
            </p>
            
            <div className="w-full h-56 bg-black/50 rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all">
               <img 
                 src={proyecto.imagenes[0]} 
                 alt={proyecto.nombre} 
                 className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
               />
            </div>

            <div className="font-bold text-white text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              Ver Galería <span className="text-blue-500">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* RENDERIZADO DEL PORTAL (Evita que el modal quede atrapado por animaciones) */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}