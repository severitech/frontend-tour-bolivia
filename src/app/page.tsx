import { Navegacion } from "@/components/comunes/navegacion";
import { FormularioBusqueda } from "@/components/inicio/formulario-busqueda";
import { DestinosDestacados } from "@/components/inicio/destinos-destacados";
import { PiePagina } from "@/components/comunes/pie-pagina";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Cloud, Mountain } from "lucide-react";

export default function PaginaInicio() {
  return (
    <div className="min-h-screen">
      <Navegacion />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
     
        <video
          className="absolute inset-0 h-full w-full object-cover z-0"
          src="/Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // poster="/poster.jpg"
        />

        {/* Oscurecimiento suave sobre el video */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Elementos animados flotantes (encima) */}
        {/* <div className="absolute inset-0 pointer-events-none z-20">
          <Cloud className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <Cloud className="absolute top-32 right-20 text-white/15 w-20 h-20 animate-float-slower" />
          <Cloud className="absolute top-40 left-1/3 text-white/10 w-12 h-12 animate-float-fast" />
          <Waves className="absolute bottom-20 left-16 text-blue-300/30 w-24 h-24 animate-wave" />
          <Waves className="absolute bottom-32 right-24 text-blue-200/20 w-20 h-20 animate-wave-slow" />
          <Mountain className="absolute bottom-40 left-1/4 text-amber-300/20 w-32 h-32 animate-float-slower" />
        </div> */}

        {/* Gradiente superior (si lo quieres más visible, sube opacidades) */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-amber-900/40 to-blue-800/70 z-30" /> */}

        {/* Contenido */}
        <div className="relative z-40 text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-tight drop-shadow-2xl animate-title-glow">
              Descubre la <span className="text-amber-300 animate-pulse">Magia</span> de Bolivia
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up-delay">
              Explora paisajes impresionantes, cultura vibrante y aventuras únicas en el corazón de Sudamérica
            </p>
          </div>

          <div className="pt-8 animate-fade-in-up-delay-2">
            <FormularioBusqueda />
          </div>

          <div className="pt-6 animate-fade-in-up-delay-3">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-5 text-lg rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-110 group border-2 border-amber-400 animate-bounce-subtle"
            >
              Comienza tu aventura
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Estadísticas + resto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm">
        {/* ...tu contenido existente... */}
      </section>

      <DestinosDestacados />
      <PiePagina />
    </div>
  );
}

