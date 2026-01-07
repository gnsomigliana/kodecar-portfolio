import Navbar from "@/components/Navbar";
import GaleriaProyectos from "@/components/GaleriaProyectos";

// 1. Función para buscar datos en Django
/*async function buscarProyectos() {
  try {
    // IMPORTANTE: Asegúrate de que esta URL sea la correcta de tu Django
    // 'no-store' asegura que siempre busque datos frescos y no use caché vieja
    const res = await fetch("http://127.0.0.1:8000/api/proyectos/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error al conectar con Django");
    }

    return await res.json();
  } catch (error) {
    console.error(
      "⚠️ No se pudo conectar a la API. Usando datos de prueba.",
      error
    );
    return null; // Retorna null si falla para usar el backup
  }
}
*/ 

// 2. El componente ahora es 'async' para poder esperar los datos
export default function Home() {
  // Datos de respaldo por si la API está apagada
  const backupData = [
    {
      id: 1,
      nombre: "Proyecto RappiFarm",
      desc: "Sistema Ecommerce Web de medicamentos desarrollado con Next.JS y Django",
      tag: "Pagina web",
      imagenes: [
        "/inicio-rappifarm.png", // Foto 1
        "/login-rappifarm.png", // Foto 2
        "/vista-medicamentos-rappifarm.png", // Foto 3
        "/carrito-de-compras-rappifarm.png", // Foto 4
        "/vista-pago-rappifarm.png", // Foto 5
      ]
    },
    {
      id: 2,
      nombre: "Billetera Virtual de Criptomonedas ",
      desc: "Aplicacion de escritorio desarrollada en Java Nativo",
      tag: "De escritorio",
      imagenes: [
        "/login-billetera.png", // Foto 1
        "/menu-billetera.png", // Foto 2
        "/cotizaciones-billetera.png", // Foto 3
        "/compra-billetera.png", // Foto 4
        "/operaciones-billetera.png", // Foto 5
      ]
    },
  ];

  // 3. Ejecutamos la función de búsqueda
 // const proyectosApi = await buscarProyectos();

  // Si la API respondió, usamos sus datos. Si no, usamos el backup.
  const proyectos = backupData //proyectosApi || backupData;
  const apiStatus = "Modo Demo"//proyectosApi ? "Conectado" : "Modo Demo";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Hero Section Moderno */}
        <section id="home" className="mb-32 text-center md:text-left md:flex items-center gap-12">
          <div className="flex-1">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Innovación digital
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Construimos el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                futuro del software.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8">
              En Kodec.ar transformamos ideas complejas en soluciones digitales
              elegantes
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#proyectos"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                Ver Proyectos
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-2xl text-slate-700 font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Disponibles para nuevos retos
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Tecnologías */}
        <section id="tecnologias" className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
              Nuestro Stack
            </h2>
            <p className="text-3xl font-bold text-slate-900">
              Tecnologías que dominamos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card Tecnología: Django */}
            <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-blue-100 transition-all group">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-emerald-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-bold text-slate-800">Django</span>
              <span className="text-xs text-slate-400 mt-1 text-center">
                Backend & APIs
              </span>
            </div>

            {/* Card Tecnología: Next.js */}
            <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-blue-100 transition-all group">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="font-bold text-slate-800">Next.js</span>
              <span className="text-xs text-slate-400 mt-1 text-center">
                Frontend & UX
              </span>
            </div>

            {/* Card Tecnología: PostgreSQL */}
            <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-blue-100 transition-all group">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <span className="font-bold text-slate-800">Bases de Datos</span>
              <span className="text-xs text-slate-400 mt-1 text-center">
                SQL & Estructura
              </span>
            </div>

            {/* Card Tecnología: Tailwind */}
            <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-blue-100 transition-all group">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-cyan-50 rounded-2xl group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-cyan-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <span className="font-bold text-slate-800">Tailwind CSS</span>
              <span className="text-xs text-slate-400 mt-1 text-center">
                Diseño Moderno
              </span>
            </div>
          </div>
        </section>

        {/* Sección Proyectos */}
        <section id="proyectos" className="mb-32">
          
          {/* Cabecera de la sección (La mantenemos aquí para que se renderice en servidor) */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Nuestros Trabajos</h2>
              <p className="text-slate-500 mt-2">Soluciones escalables desarrolladas por nuestro equipo.</p>
            </div>
            <span className="text-slate-400 text-sm italic">
              API Status: <span className={/*proyectosApi ? "text-green-500 font-bold" : */ "text-orange-400 font-bold"}>{apiStatus}</span>
            </span>
          </div>

          {/* Componente Interactivo de Galería */}
          {/* Le pasamos los datos para que él arme la grilla y el modal */}
          <GaleriaProyectos proyectos={proyectos} />

        </section>

        {/* Footer */}
        {/* SECCIÓN DE CONTACTO DIRECTO */}
      <footer id="contacto" className="bg-slate-900 rounded-[3rem] text-white py-24 relative overflow-hidden">
        
        {/* Decoración de fondo (opcional para dar profundidad) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
            Contacto Directo
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Hagamos realidad <br/> tu próximo proyecto.
          </h2>
          
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Sin formularios largos ni esperas. Elige tu plataforma preferida y habla directamente con nuestro equipo de desarrollo.
          </p>

          {/* Grid de Botones de Contacto */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* Opción WhatsApp */}
            <a 
              href="https://wa.me/5492281491955" // TU NÚMERO AQUÍ
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#25D366] hover:bg-[#20bd5a] text-white p-6 rounded-3xl flex flex-col items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25d366]/30"
            >
              <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.374-5.03c0-5.445 4.431-9.87 9.873-9.87 2.636 0 5.115 1.026 6.979 2.891s2.89 4.342 2.89 6.98c0 5.445-4.43 9.87-9.87 9.87"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">WhatsApp</span>
              <span className="text-green-100 font-medium mt-1">Respuesta rápida</span>
            </a>

            {/* Opción Instagram */}
            <a 
              href="https://www.instagram.com/kodec.ar/" // TU INSTAGRAM AQUÍ
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-tr from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white p-6 rounded-3xl flex flex-col items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
              </div>
              <span className="text-2xl font-bold">Instagram</span>
              <span className="text-purple-100 font-medium mt-1">Sigue nuestro trabajo</span>
            </a>
          
          </div>

          {/* Copyright simple */}
          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-600 text-sm">
            © {new Date().getFullYear()} Kodec.ar. Desarrollado con Next.js & Django.
          </div>

        </div>
      </footer>
      </main>
    </div>
  );
}
