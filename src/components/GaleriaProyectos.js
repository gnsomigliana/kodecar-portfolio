"use client"; // ¡Vital! Esto habilita la interactividad
import { useState } from "react";
import Image from "next/image";

export default function GaleriaProyectos({ proyectos }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Abrir modal
  const openGallery = (proyecto) => {
    setSelectedProject(proyecto);
    setCurrentIndex(0); // Empezar siempre por la primera foto
    document.body.style.overflow = "hidden"; // Bloquear scroll del fondo
  };

  // Cerrar modal
  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Reactivar scroll
  };

  // Navegación siguiente
  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentIndex((prev) => 
        prev === selectedProject.imagenes.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Navegación anterior
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
      {/* --- GRILLA DE PROYECTOS --- */}
      <div className="grid md:grid-cols-2 gap-8">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            onClick={() => openGallery(proyecto)}
            className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer hover:shadow-lg"
          >
            <div className="text-xs font-bold text-blue-600 mb-4 tracking-widest uppercase">
              {proyecto.tag}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
              {proyecto.nombre}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {proyecto.desc}
            </p>
            
            {/* Preview de la imagen principal */}
            <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden relative group-hover:opacity-90 transition-opacity">
               {/* Usamos la primera imagen del array como portada */}
               <img 
                 src={proyecto.imagenes[0]} 
                 alt={proyecto.nombre} 
                 className="w-full h-full object-cover"
               />
            </div>

            <div className="font-bold text-slate-900 flex items-center gap-2 group-hover:gap-4 transition-all">
              Ver Galería <span className="text-blue-600">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL / GALERÍA (Solo aparece si hay selectedProject) --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeGallery} // Click afuera cierra
        >
          {/* Contenedor de la imagen */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            
            {/* Imagen Actual */}
            <img 
              src={selectedProject.imagenes[currentIndex]} 
              alt={`Imagen ${currentIndex + 1}`} 
              className="w-full h-full object-contain"
            />

            {/* Botón Cerrar */}
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {/* Flecha Izquierda */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-white hover:text-black transition hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            {/* Flecha Derecha */}
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-white hover:text-black transition hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>

            {/* Indicador de posición (puntitos) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {selectedProject.imagenes.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
                />
              ))}
            </div>

            {/* Título flotante */}
            <div className="absolute top-4 left-4 bg-black/60 px-4 py-1 rounded-full text-white text-sm backdrop-blur-md">
              {selectedProject.nombre} • {currentIndex + 1} / {selectedProject.imagenes.length}
            </div>

          </div>
        </div>
      )}
    </>
  );
}