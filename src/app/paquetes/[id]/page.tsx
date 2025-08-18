"use client";

import { Navegacion } from "@/components/comunes/navegacion";
import { PiePagina } from "@/components/comunes/pie-pagina";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Heart,
  Share2,
  Clock,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";

// Mock data para paquetes detallados
const obtenerDatosPaquete = (id: string) => {
  const paquetes: Record<string, any> = {
    "bolivia-completa": {
      id: "bolivia-completa",
      nombre: "Bolivia Completa",
      ubicacion: "Multi-destino",
      descripcionCorta: "El tour más completo por Bolivia",
      descripcionCompleta: `Embárcate en una aventura épica de 10 días que te llevará por los destinos más impresionantes de Bolivia. Este paquete completo está diseñado para aquellos que quieren experimentar la diversidad única del país en un solo viaje.

Comenzarás en La Paz, la capital más alta del mundo, donde te sumergirás en la cultura andina y visitarás mercados coloridos. Luego te dirigirás al místico Lago Titicaca para explorar las islas flotantes y conocer las tradiciones ancestrales.

El punto culminante será el Salar de Uyuni, donde presenciarás atardeceres mágicos y el famoso efecto espejo. Finalmente, explorarás la histórica Potosí y sus minas de plata que una vez fueron las más ricas del mundo.

Cada día está cuidadosamente planificado para maximizar tu experiencia, con guías expertos, alojamientos cómodos y transporte seguro.`,
      calificacion: 4.9,
      numeroReseñas: 847,
      precio: "$850",
      precioOriginal: "$1200",
      duracion: "10 días / 9 noches",
      maxPersonas: 12,
      dificultad: "Moderado",
      categoria: "Multi-destino",
      imagenes: [
        "/placeholder.svg?height=400&width=600&text=Bolivia+Completa+Principal",
        "/placeholder.svg?height=400&width=600&text=La+Paz+Vista",
        "/placeholder.svg?height=400&width=600&text=Lago+Titicaca",
        "/placeholder.svg?height=400&width=600&text=Salar+Uyuni",
        "/placeholder.svg?height=400&width=600&text=Potosi+Colonial",
      ],
      destinos: [
        {
          nombre: "La Paz",
          dias: 2,
          descripcion: "Capital administrativa y mercados tradicionales",
        },
        {
          nombre: "Lago Titicaca",
          dias: 2,
          descripcion: "Islas flotantes y cultura ancestral",
        },
        {
          nombre: "Salar de Uyuni",
          dias: 3,
          descripcion: "Desierto de sal y paisajes únicos",
        },
        {
          nombre: "Potosí",
          dias: 2,
          descripcion: "Ciudad colonial y minas históricas",
        },
        {
          nombre: "Sucre",
          dias: 1,
          descripcion: "Capital constitucional y arquitectura colonial",
        },
      ],
      itinerario: [
        {
          dia: 1,
          titulo: "Llegada a La Paz",
          actividades: [
            "Recepción en aeropuerto",
            "City tour por La Paz",
            "Visita al Mercado de las Brujas",
          ],
        },
        {
          dia: 2,
          titulo: "Valle de la Luna",
          actividades: [
            "Excursión al Valle de la Luna",
            "Teleférico de La Paz",
            "Cena tradicional",
          ],
        },
        {
          dia: 3,
          titulo: "Lago Titicaca",
          actividades: [
            "Viaje a Copacabana",
            "Navegación a Isla del Sol",
            "Alojamiento en isla",
          ],
        },
        {
          dia: 4,
          titulo: "Isla del Sol",
          actividades: [
            "Trekking en la isla",
            "Sitios arqueológicos",
            "Regreso a Copacabana",
          ],
        },
        {
          dia: 5,
          titulo: "Hacia Uyuni",
          actividades: [
            "Viaje a Uyuni",
            "Cementerio de trenes",
            "Atardecer en el salar",
          ],
        },
        {
          dia: 6,
          titulo: "Salar de Uyuni",
          actividades: [
            "Amanecer en el salar",
            "Isla Incahuasi",
            "Hotel de sal",
          ],
        },
        {
          dia: 7,
          titulo: "Lagunas de colores",
          actividades: ["Laguna Colorada", "Flamencos", "Géiseres"],
        },
        {
          dia: 8,
          titulo: "Potosí",
          actividades: [
            "Viaje a Potosí",
            "Tour por la ciudad colonial",
            "Visita a minas",
          ],
        },
        {
          dia: 9,
          titulo: "Sucre",
          actividades: ["Viaje a Sucre", "Centro histórico", "Mercado Central"],
        },
        {
          dia: 10,
          titulo: "Despedida",
          actividades: [
            "Tiempo libre",
            "Traslado al aeropuerto",
            "Vuelo de regreso",
          ],
        },
      ],
      incluido: [
        "9 noches de alojamiento",
        "Todas las comidas especificadas",
        "Transporte terrestre privado",
        "Guía especializado bilingüe",
        "Entradas a todos los sitios",
        "Seguro de viaje básico",
        "Actividades mencionadas",
      ],
      noIncluido: [
        "Vuelos internacionales",
        "Bebidas alcohólicas",
        "Propinas",
        "Gastos personales",
        "Seguro médico internacional",
      ],
      fechasDisponibles: [
        "2024-03-15",
        "2024-04-12",
        "2024-05-10",
        "2024-06-14",
      ],
      descuento: 30,
    },
    "aventura-extrema": {
      id: "aventura-extrema",
      nombre: "Aventura Extrema",
      ubicacion: "La Paz - Potosí",
      descripcionCorta: "Para los más aventureros",
      descripcionCompleta: `Diseñado para los amantes de la adrenalina y la aventura extrema, este paquete de 7 días te llevará a vivir experiencias únicas en los Andes bolivianos.

Comenzarás con trekking en la Cordillera Real, donde caminarás por senderos de alta montaña rodeado de picos nevados y lagunas cristalinas. Luego te enfrentarás al famoso "Camino de la Muerte", una de las rutas de ciclismo más peligrosas y emocionantes del mundo.

La aventura continúa en las profundidades de las minas de Potosí, donde conocerás de primera mano las condiciones de trabajo de los mineros y la historia de esta ciudad que una vez fue la más rica del mundo.

Cada actividad está supervisada por guías expertos en seguridad y equipos de primera calidad para garantizar una experiencia emocionante pero segura.`,
      calificacion: 4.8,
      numeroReseñas: 523,
      precio: "$650",
      precioOriginal: "$850",
      duracion: "7 días / 6 noches",
      maxPersonas: 8,
      dificultad: "Difícil",
      categoria: "Aventura",
      imagenes: [
        "/placeholder.svg?height=400&width=600&text=Aventura+Extrema+Principal",
        "/placeholder.svg?height=400&width=600&text=Cordillera+Real",
        "/placeholder.svg?height=400&width=600&text=Camino+Muerte",
        "/placeholder.svg?height=400&width=600&text=Minas+Potosi",
        "/placeholder.svg?height=400&width=600&text=Escalada+Roca",
      ],
      destinos: [
        {
          nombre: "Cordillera Real",
          dias: 3,
          descripcion: "Trekking y escalada en alta montaña",
        },
        {
          nombre: "Camino de la Muerte",
          dias: 1,
          descripcion: "Ciclismo extremo en ruta peligrosa",
        },
        {
          nombre: "Minas de Potosí",
          dias: 2,
          descripcion: "Exploración subterránea histórica",
        },
        {
          nombre: "La Paz",
          dias: 1,
          descripcion: "Preparativos y city tour urbano",
        },
      ],
      itinerario: [
        {
          dia: 1,
          titulo: "Llegada y preparativos",
          actividades: [
            "Recepción en La Paz",
            "Briefing de seguridad",
            "Prueba de equipos",
          ],
        },
        {
          dia: 2,
          titulo: "Inicio del trekking",
          actividades: [
            "Viaje a Cordillera Real",
            "Inicio de caminata",
            "Campamento base",
          ],
        },
        {
          dia: 3,
          titulo: "Trekking avanzado",
          actividades: [
            "Ascenso a picos",
            "Técnicas de escalada",
            "Campamento de altura",
          ],
        },
        {
          dia: 4,
          titulo: "Camino de la Muerte",
          actividades: [
            "Descenso en bicicleta",
            "Ruta más peligrosa",
            "Llegada a Coroico",
          ],
        },
        {
          dia: 5,
          titulo: "Viaje a Potosí",
          actividades: [
            "Traslado a Potosí",
            "Tour por la ciudad",
            "Preparación para minas",
          ],
        },
        {
          dia: 6,
          titulo: "Minas de Potosí",
          actividades: [
            "Exploración subterránea",
            "Encuentro con mineros",
            "Historia colonial",
          ],
        },
        {
          dia: 7,
          titulo: "Regreso",
          actividades: ["Tiempo libre", "Traslado al aeropuerto", "Despedida"],
        },
      ],
      incluido: [
        "6 noches de alojamiento",
        "Todas las comidas",
        "Equipos de seguridad",
        "Guías especializados",
        "Transporte terrestre",
        "Seguro de aventura",
        "Certificados de participación",
      ],
      noIncluido: [
        "Vuelos internacionales",
        "Seguro médico personal",
        "Propinas",
        "Gastos personales",
        "Bebidas alcohólicas",
      ],
      fechasDisponibles: [
        "2024-03-20",
        "2024-04-17",
        "2024-05-15",
        "2024-06-19",
      ],
      descuento: 25,
    },
    "cultura-ancestral": {
      id: "cultura-ancestral",
      nombre: "Cultura Ancestral",
      ubicacion: "Multi-destino",
      descripcionCorta: "Sumérgete en la rica cultura boliviana",
      descripcionCompleta: `Un viaje fascinante de 6 días que te conectará con las raíces más profundas de la cultura boliviana y las tradiciones ancestrales que han perdurado por milenios.

Comenzarás explorando Tiwanaku, la cuna de una de las civilizaciones más importantes de América del Sur, donde descubrirás los misterios de esta cultura preincaica a través de sus impresionantes monumentos de piedra.

Continuarás hacia el sagrado Lago Titicaca, donde visitarás comunidades aymaras que mantienen vivas sus tradiciones ancestrales. Participarás en ceremonias tradicionales, aprenderás sobre medicina natural y textiles ancestrales.

La experiencia culmina en Copacabana e Isla del Sol, lugares sagrados donde podrás conectar con la espiritualidad andina y comprender la cosmovisión de los pueblos originarios.`,
      calificacion: 4.7,
      numeroReseñas: 389,
      precio: "$480",
      precioOriginal: "$600",
      duracion: "6 días / 5 noches",
      maxPersonas: 15,
      dificultad: "Fácil",
      categoria: "Cultural",
      imagenes: [
        "/placeholder.svg?height=400&width=600&text=Cultura+Ancestral+Principal",
        "/placeholder.svg?height=400&width=600&text=Tiwanaku+Ruinas",
        "/placeholder.svg?height=400&width=600&text=Comunidad+Aymara",
        "/placeholder.svg?height=400&width=600&text=Textiles+Tradicionales",
        "/placeholder.svg?height=400&width=600&text=Ceremonia+Ancestral",
      ],
      destinos: [
        {
          nombre: "Tiwanaku",
          dias: 1,
          descripcion: "Sitio arqueológico preincaico",
        },
        {
          nombre: "Copacabana",
          dias: 2,
          descripcion: "Ciudad sagrada del lago",
        },
        {
          nombre: "Isla del Sol",
          dias: 2,
          descripcion: "Cuna del Imperio Inca",
        },
        {
          nombre: "Comunidades Aymaras",
          dias: 1,
          descripcion: "Tradiciones vivas ancestrales",
        },
      ],
      itinerario: [
        {
          dia: 1,
          titulo: "Tiwanaku ancestral",
          actividades: [
            "Visita a Tiwanaku",
            "Museo arqueológico",
            "Ceremonia de bienvenida",
          ],
        },
        {
          dia: 2,
          titulo: "Lago sagrado",
          actividades: [
            "Viaje a Copacabana",
            "Basílica colonial",
            "Navegación al atardecer",
          ],
        },
        {
          dia: 3,
          titulo: "Isla del Sol",
          actividades: [
            "Exploración de la isla",
            "Sitios arqueológicos",
            "Alojamiento local",
          ],
        },
        {
          dia: 4,
          titulo: "Tradiciones vivas",
          actividades: [
            "Visita a comunidades",
            "Taller de textiles",
            "Medicina tradicional",
          ],
        },
        {
          dia: 5,
          titulo: "Ceremonias ancestrales",
          actividades: [
            "Ritual de agradecimiento",
            "Intercambio cultural",
            "Música tradicional",
          ],
        },
        {
          dia: 6,
          titulo: "Despedida",
          actividades: [
            "Reflexión grupal",
            "Compras artesanales",
            "Regreso a La Paz",
          ],
        },
      ],
      incluido: [
        "5 noches de alojamiento",
        "Todas las comidas tradicionales",
        "Guía antropólogo especializado",
        "Entradas a sitios arqueológicos",
        "Talleres culturales",
        "Transporte terrestre y lacustre",
        "Materiales educativos",
      ],
      noIncluido: [
        "Vuelos internacionales",
        "Bebidas alcohólicas",
        "Compras personales",
        "Propinas",
        "Seguro de viaje",
      ],
      fechasDisponibles: [
        "2024-03-25",
        "2024-04-22",
        "2024-05-20",
        "2024-06-24",
      ],
      descuento: 20,
    },
  };

  return paquetes[id] || null;
};

export default function PaginaDetallePaquete({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const paquete = obtenerDatosPaquete(id);
  const [esFavorito, setEsFavorito] = useState(false);
  const [titulo, setTitulo] = useState("");
  useEffect(() => {
    if (paquete) {
      setTitulo(paquete.nombre);
    }
  }, [paquete]);

  const alternarFavorito = () => {
    setEsFavorito(!esFavorito);

    toast({
      title: esFavorito ? "Eliminado de favoritos" : "Agregado a favoritos",
      description: esFavorito
        ? `${titulo} ha sido eliminado de tus favoritos`
        : `${titulo} ha sido agregado a tus favoritos`,
    });
  };

  const compartir = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: titulo,
          text: `¡Mira este increíble destino en Bolivia: ${titulo}!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error al compartir:", error);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Enlace copiado",
        description: "El enlace ha sido copiado al portapapeles",
      });
    }
  };
  if (!paquete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <Navegacion />
        <div className="max-w-4xl px-4 py-16 mx-auto text-center animate-fade-in">
          <h1 className="mb-4 text-2xl font-bold font-heading text-foreground">
            Paquete no encontrado
          </h1>
          <p className="text-muted-foreground">
            El paquete que buscas no existe o ha sido movido.
          </p>
          <Button className="mt-6" onClick={() => window.history.back()}>
            Volver atrás
          </Button>
        </div>
        <PiePagina />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <Navegacion />

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 animate-fade-in">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center mb-4 space-x-2 text-sm text-muted-foreground">
            <span className="transition-colors cursor-pointer hover:text-primary">
              Inicio
            </span>
            <span>/</span>
            <span className="transition-colors cursor-pointer hover:text-primary">
              Paquetes
            </span>
            <span>/</span>
            <span className="font-medium text-foreground">
              {paquete.nombre}
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 animate-bounce-in">
                  {paquete.categoria}
                </Badge>
                <Badge
                  variant="outline"
                  className="animate-bounce-in animation-delay-100"
                >
                  {paquete.dificultad}
                </Badge>
                {paquete.descuento && (
                  <Badge className="text-white bg-red-500 animate-bounce-in animation-delay-200">
                    -{paquete.descuento}% OFF
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-black font-heading lg:text-4xl text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text">
                {paquete.nombre}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center space-x-1 transition-colors hover:text-primary">
                  <MapPin className="w-4 h-4" />
                  <span>{paquete.ubicacion}</span>
                </div>
                <div className="flex items-center space-x-1 transition-colors hover:text-accent">
                  <Clock className="w-4 h-4" />
                  <span>{paquete.duracion}</span>
                </div>
                <div className="flex items-center space-x-1 transition-colors hover:text-primary">
                  <Users className="w-4 h-4" />
                  <span>Hasta {paquete.maxPersonas} personas</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-200">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-200 hover:scale-110 ${
                        i < Math.floor(paquete.calificacion)
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">
                  {paquete.calificacion}
                </span>
                <span className="text-muted-foreground">
                  ({paquete.numeroReseñas} reseñas)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-300">
              <Button
                variant="secondary"
                size="sm"
                onClick={alternarFavorito}
                className={`
               text-gray-700 border-0 bg-white/90
               shadow-md active:scale-95
               md:shadow-lg
               transition-all duration-200
               hover:bg-white hover:scale-105
               focus-visible:ring-2 focus-visible:ring-amber-400
             `}
              >
                <Heart
                  className={`
                 h-5 w-5 transition-colors
                 ${
                   esFavorito
                     ? "fill-red-500 text-red-500 animate-heartBeat"
                     : ""
                 }
               `}
                />{" "}
                Guardar
              </Button>

              <Button
                variant="secondary"
                size="sm"
                className={`
               text-gray-700 border-0 bg-white/90
               shadow-md active:scale-95
               md:shadow-lg
               transition-all duration-200
               hover:bg-white hover:scale-105
               focus-visible:ring-2 focus-visible:ring-amber-400
             `}
                onClick={compartir}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8 animate-slide-up animation-delay-200">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 h-96">
            <div className="lg:col-span-2 lg:row-span-2">
              <img
                src={paquete.imagenes[0] || "/placeholder.svg"}
                alt={paquete.nombre}
                className="object-cover w-full h-full transition-transform duration-300 rounded-lg hover:scale-105"
              />
            </div>
            {paquete.imagenes
              .slice(1, 5)
              .map((imagen: string, index: number) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <img
                    src={imagen || "/placeholder.svg"}
                    alt={`${paquete.nombre} ${index + 2}`}
                    className="object-cover w-full h-full transition-transform duration-300 rounded-lg hover:scale-105"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <Card className="transition-shadow duration-300 animate-fade-in-up animation-delay-300 hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold font-heading text-primary">
                  Sobre este paquete
                </h2>
                <div className="prose prose-gray max-w-none">
                  {paquete.descripcionCompleta
                    .split("\n\n")
                    .map((parrafo: string, index: number) => (
                      <p
                        key={index}
                        className="mb-4 leading-relaxed text-muted-foreground animate-fade-in-up"
                        style={{ animationDelay: `${400 + index * 100}ms` }}
                      >
                        {parrafo}
                      </p>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Destinos incluidos */}
            <Card className="transition-shadow duration-300 animate-fade-in-up animation-delay-400 hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold font-heading text-primary">
                  Destinos incluidos
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {paquete.destinos.map((destino: any, index: number) => (
                    <div
                      key={index}
                      className="p-4 transition-shadow border rounded-lg border-border hover:shadow-md animate-fade-in-up"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground">
                          {destino.nombre}
                        </h3>
                        <Badge variant="secondary">{destino.dias} días</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {destino.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerario */}
            <Card className="transition-shadow duration-300 animate-fade-in-up animation-delay-500 hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold font-heading text-primary">
                  Itinerario detallado
                </h2>
                <div className="space-y-4">
                  {paquete.itinerario.map((dia: any, index: number) => (
                    <div
                      key={index}
                      className="pl-4 border-l-4 border-primary/20 animate-fade-in-up"
                      style={{ animationDelay: `${600 + index * 50}ms` }}
                    >
                      <div className="flex items-center mb-2 space-x-2">
                        <Badge className="bg-primary text-primary-foreground">
                          Día {dia.dia}
                        </Badge>
                        <h3 className="font-semibold text-foreground">
                          {dia.titulo}
                        </h3>
                      </div>
                      <ul className="space-y-1">
                        {dia.actividades.map(
                          (actividad: string, actIndex: number) => (
                            <li
                              key={actIndex}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <CheckCircle className="flex-shrink-0 w-3 h-3 mr-2 text-green-500" />
                              {actividad}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="transition-shadow duration-300 animate-fade-in-up animation-delay-600 hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold font-heading text-primary">
                  Qué incluye
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="animate-slide-right">
                    <h3 className="flex items-center mb-3 font-semibold text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Incluido
                    </h3>
                    <ul className="space-y-2">
                      {paquete.incluido.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-muted-foreground animate-fade-in-up"
                          style={{ animationDelay: `${700 + index * 50}ms` }}
                        >
                          <CheckCircle className="flex-shrink-0 w-4 h-4 mr-3 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="animate-slide-left">
                    <h3 className="flex items-center mb-3 font-semibold text-red-700">
                      <XCircle className="w-5 h-5 mr-2" />
                      No incluido
                    </h3>
                    <ul className="space-y-2">
                      {paquete.noIncluido.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-muted-foreground animate-fade-in-up"
                          style={{ animationDelay: `${800 + index * 50}ms` }}
                        >
                          <XCircle className="flex-shrink-0 w-4 h-4 mr-3 text-red-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="z-10 transition-all duration-300 border-2 lg:sticky lg:top-6 bg-white/95 backdrop-blur-sm animate-fade-in-up animation-delay-400 hover:shadow-xl border-primary/10">
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  {paquete.precioOriginal && (
                    <div className="mb-1 text-lg line-through text-muted-foreground">
                      {paquete.precioOriginal}
                    </div>
                  )}
                  <div className="mb-1 text-3xl font-black text-transparent font-heading text-primary bg-gradient-to-r from-primary to-accent bg-clip-text animate-pulse-gentle">
                    {paquete.precio}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    por persona
                  </div>
                  {paquete.descuento && (
                    <Badge className="mt-2 text-white bg-red-500">
                      ¡Ahorra {paquete.descuento}%!
                    </Badge>
                  )}
                </div>

                <div className="mb-6 space-y-4">
                  <div className="animate-slide-right">
                    <label className="text-sm font-medium text-muted-foreground">
                      Fecha de salida
                    </label>
                    <select className="w-full px-3 py-2 mt-1 transition-all duration-200 border rounded-lg border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option>Seleccionar fecha</option>
                      {paquete.fechasDisponibles.map((fecha: string) => (
                        <option key={fecha} value={fecha}>
                          {new Date(fecha).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="animate-slide-left">
                    <label className="text-sm font-medium text-muted-foreground">
                      Número de personas
                    </label>
                    <select className="w-full px-3 py-2 mt-1 transition-all duration-200 border rounded-lg border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option>1 persona</option>
                      <option>2 personas</option>
                      <option>3 personas</option>
                      <option>4 personas</option>
                    </select>
                  </div>
                </div>

                <Button
                  className="w-full py-3 mb-3 font-semibold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 hover:shadow-xl"
                  onClick={() =>
                    (window.location.href = `/reserva?paquete=${
                      paquete.id
                    }&nombre=${encodeURIComponent(
                      paquete.nombre
                    )}&precio=${encodeURIComponent(paquete.precio)}`)
                  }
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar paquete
                </Button>

                <div className="text-xs text-center text-muted-foreground animate-fade-in-up animation-delay-600">
                  Reserva con solo $100. Paga el resto 30 días antes del viaje.
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="transition-shadow duration-300 animate-fade-in-up animation-delay-500 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 font-semibold">¿Necesitas ayuda?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Nuestros expertos están listos para ayudarte a planificar tu
                  viaje perfecto.
                </p>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-200 bg-transparent hover:scale-105"
                >
                  Contactar asesor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <PiePagina />
    </div>
  );
}
