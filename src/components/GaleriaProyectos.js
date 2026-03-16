"use client";
import { useState } from "react";

export default function GaleriaProyectos({ proyectos }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (proyecto) => {
    setSelectedProject(proyecto);
    setCurrentIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => 
        prev === selectedProject.imagenes.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => 
        prev === 0 ? selectedProject.imagenes.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* GRILLA OSCURA */}
      <div className="grid md:grid-cols-2 gap-8">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            onClick={() => openGallery(proyecto)}
            className="group relative bg-white/5 rounded-[2rem] p-8 border border-white/10 hover:border-white/30 transition-all cursor-pointer hover:bg-white/10"
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

      {/* MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-0 md:p-4"
          onClick={closeGallery}
        >
          <div className="relative w-full h-full md:max-w-6xl md:h-auto md:aspect-video bg-[#02050a] md:rounded-3xl overflow-hidden shadow-2xl border-0 md:border border-white/10 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            <img 
              src={selectedProject.imagenes[currentIndex]} 
              alt={`Imagen ${currentIndex + 1}`} 
              className="w-full h-full md:h-auto object-contain"
            />

            {/* Controles de navegación y cierre */}
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 md:bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-black transition-all z-20"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 md:left-6 bg-black/50 md:bg-white/10 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 z-20"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 md:right-6 bg-black/50 md:bg-white/10 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 z-20"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>

            <div className="absolute bottom-8 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-black/20 p-2 rounded-full backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
              {selectedProject.imagenes.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-150 w-6' : 'bg-white/30'}`}
                />
              ))}
            </div>

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/80 border border-white/10 px-4 py-2 md:px-5 rounded-full text-white text-xs md:text-sm font-bold tracking-widest backdrop-blur-md uppercase max-w-[60%] truncate z-20">
              {selectedProject.nombre} • {currentIndex + 1} / {selectedProject.imagenes.length}
            </div>

          </div>
        </div>
      )}
    </>
  );
}