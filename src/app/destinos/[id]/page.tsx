"use client"

import { Navegacion } from "@/components/comunes/navegacion"
import { PiePagina } from "@/components/comunes/pie-pagina"
import { GaleriaImagenes } from "@/components/detalle/galeria-imagenes"
import { MapaDestino } from "@/components/detalle/mapa-destino"
import { SeccionActividades } from "@/components/detalle/seccion-actividades"
import { SeccionRecomendaciones } from "@/components/detalle/seccion-recomendaciones"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, Clock, Users, Calendar, MapPin } from "lucide-react"

// Mock data - in a real app this would come from an API
const obtenerDatosDestino = (id: string) => {
  const destinos: Record<string, any> = {
    "salar-de-uyuni": {
      id: "salar-de-uyuni",
      nombre: "Salar de Uyuni",
      ubicacion: "Potosí, Bolivia",
      descripcionCorta: "El desierto de sal más grande del mundo",
      descripcionCompleta: `El Salar de Uyuni es una experiencia única en el mundo. Con más de 10,000 kilómetros cuadrados de superficie, este desierto de sal se convierte en un espejo perfecto durante la temporada de lluvias, creando paisajes surrealistas que parecen sacados de otro planeta.

Durante el día, el contraste entre el blanco puro de la sal y el azul intenso del cielo crea fotografías espectaculares. Al atardecer, los colores se reflejan en la superficie creando un espectáculo visual inolvidable.

La experiencia incluye visitas a las islas de cactus milenarios, flamencos rosados en las lagunas de colores, y la oportunidad de hospedarse en hoteles construidos completamente de sal.`,
      calificacion: 4.9,
      numeroReseñas: 1247,
      precio: "$120",
      duracion: "3 días / 2 noches",
      maxPersonas: 12,
      dificultad: "Moderado",
      categoria: "Naturaleza",
      imagenes: [
        "/salar-de-uyuni-espejo.png",
        "/salar-de-uyuni-atardecer.png",
        "/isla-incahuasi-cactus.png",
        "/bolivian-pink-flamingos.png",
        "/hotel-de-sal-bolivia.png",
      ],
      coordenadas: { lat: -20.1338, lng: -67.4891 },
      actividades: [
        {
          id: "1",
          nombre: "Fotografía en el espejo de sal",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "camera" as const,
        },
        {
          id: "2",
          nombre: "Visita a Isla Incahuasi",
          duracion: "3 horas",
          dificultad: "Moderado" as const,
          icono: "users" as const,
        },
        {
          id: "3",
          nombre: "Observación de flamencos",
          duracion: "1 hora",
          dificultad: "Fácil" as const,
          icono: "camera" as const,
        },
        {
          id: "4",
          nombre: "Cena en hotel de sal",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "utensils" as const,
        },
      ],
      incluido: [
        "Transporte 4x4",
        "Guía especializado",
        "2 noches de alojamiento",
        "Todas las comidas",
        "Equipo de fotografía",
        "Entrada a parques",
      ],
      noIncluido: ["Vuelos", "Seguro de viaje", "Propinas", "Bebidas alcohólicas"],
    },
    "lago-titicaca": {
      id: "lago-titicaca",
      nombre: "Lago Titicaca",
      ubicacion: "La Paz, Bolivia",
      descripcionCorta: "El lago navegable más alto del mundo",
      descripcionCompleta: `El Lago Titicaca, ubicado a 3,812 metros sobre el nivel del mar, es el lago navegable más alto del mundo y uno de los destinos más místicos de Bolivia. Sus aguas azul profundo albergan islas sagradas con una rica historia precolombina.

La Isla del Sol, considerada el lugar de nacimiento del Imperio Inca, ofrece ruinas arqueológicas impresionantes y vistas panorámicas del lago. La Isla de la Luna complementa la experiencia con sus templos dedicados a las vírgenes del sol.

Las comunidades locales mantienen vivas las tradiciones ancestrales, ofreciendo experiencias auténticas de convivencia con familias aymaras que han habitado estas tierras por generaciones.`,
      calificacion: 4.8,
      numeroReseñas: 892,
      precio: "$85",
      duracion: "2 días / 1 noche",
      maxPersonas: 15,
      dificultad: "Fácil",
      categoria: "Cultural",
      imagenes: [
        "/lago-titicaca-bolivia-panorama.png",
        "/isla-del-sol-ruinas.png",
        "/totora-boats-titicaca.png",
        "/copacabana-bolivia.png",
        "/aymara-culture-bolivia.png",
      ],
      coordenadas: { lat: -15.9254, lng: -69.3354 },
      actividades: [
        {
          id: "1",
          nombre: "Navegación a Isla del Sol",
          duracion: "4 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
        {
          id: "2",
          nombre: "Exploración de ruinas incas",
          duracion: "3 horas",
          dificultad: "Moderado" as const,
          icono: "camera" as const,
        },
        {
          id: "3",
          nombre: "Convivencia con familias aymaras",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
      ],
      incluido: [
        "Transporte en lancha",
        "Guía local",
        "1 noche de hospedaje",
        "Desayuno incluido",
        "Entrada a sitios arqueológicos",
      ],
      noIncluido: ["Almuerzo y cena", "Propinas", "Seguro de viaje"],
    },
    "la-paz": {
      id: "la-paz",
      nombre: "La Paz",
      ubicacion: "La Paz, Bolivia",
      descripcionCorta: "La capital más alta del mundo",
      descripcionCompleta: `La Paz, situada a 3,500 metros sobre el nivel del mar, es la capital administrativa más alta del mundo. Esta ciudad única combina arquitectura colonial con rascacielos modernos, creando un paisaje urbano extraordinario en medio de los Andes.

El centro histórico alberga la Plaza Murillo, el Palacio Presidencial y la Catedral Metropolitana. Los mercados como el de las Brujas ofrecen una experiencia cultural auténtica con productos tradicionales y rituales ancestrales.

El sistema de teleféricos Mi Teleférico ofrece vistas panorámicas espectaculares de la ciudad y conecta La Paz con El Alto, proporcionando una perspectiva única de esta metrópoli andina.`,
      calificacion: 4.7,
      numeroReseñas: 1156,
      precio: "$60",
      duracion: "1 día",
      maxPersonas: 20,
      dificultad: "Fácil",
      categoria: "Cultural",
      imagenes: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      coordenadas: { lat: -16.5, lng: -68.1193 },
      actividades: [
        {
          id: "1",
          nombre: "Tour por el centro histórico",
          duracion: "3 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
        {
          id: "2",
          nombre: "Visita al Mercado de las Brujas",
          duracion: "1 hora",
          dificultad: "Fácil" as const,
          icono: "camera" as const,
        },
        {
          id: "3",
          nombre: "Paseo en teleférico",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
      ],
      incluido: ["Guía turístico", "Transporte urbano", "Entrada a museos", "Paseo en teleférico"],
      noIncluido: ["Comidas", "Propinas", "Compras personales"],
    },
    potosi: {
      id: "potosi",
      nombre: "Potosí",
      ubicacion: "Potosí, Bolivia",
      descripcionCorta: "Ciudad colonial con minas históricas",
      descripcionCompleta: `Potosí, conocida como la "Villa Imperial", fue una de las ciudades más ricas del mundo durante la época colonial gracias a sus minas de plata del Cerro Rico. Hoy es Patrimonio de la Humanidad por la UNESCO.

La ciudad conserva su arquitectura colonial con iglesias barrocas, casas señoriales y calles empedradas que narran la historia de la extracción de plata que financió el imperio español durante siglos.

La experiencia incluye visitas a las minas activas donde aún trabajan los mineros locales, ofreciendo una perspectiva única sobre las condiciones laborales y la importancia histórica de este lugar.`,
      calificacion: 4.6,
      numeroReseñas: 743,
      precio: "$45",
      duracion: "1 día",
      maxPersonas: 12,
      dificultad: "Moderado",
      categoria: "Historia",
      imagenes: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      coordenadas: { lat: -19.5836, lng: -65.7531 },
      actividades: [
        {
          id: "1",
          nombre: "Tour por las minas del Cerro Rico",
          duracion: "4 horas",
          dificultad: "Moderado" as const,
          icono: "users" as const,
        },
        {
          id: "2",
          nombre: "Visita a la Casa de la Moneda",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "camera" as const,
        },
        {
          id: "3",
          nombre: "Recorrido por el centro histórico",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
      ],
      incluido: ["Guía especializado", "Equipo de seguridad para minas", "Transporte local", "Entrada a museos"],
      noIncluido: ["Comidas", "Propinas", "Seguro de viaje"],
    },
    sucre: {
      id: "sucre",
      nombre: "Sucre",
      ubicacion: "Chuquisaca, Bolivia",
      descripcionCorta: "La ciudad blanca de Bolivia",
      descripcionCompleta: `Sucre, la capital constitucional de Bolivia, es conocida como la "Ciudad Blanca" por sus edificios coloniales pintados de blanco. Esta ciudad Patrimonio de la Humanidad conserva intacta su arquitectura del siglo XVI.

El centro histórico alberga la Universidad de San Francisco Xavier, una de las más antiguas de América, y numerosas iglesias coloniales con arte religioso excepcional. Los museos ofrecen una rica colección de arte colonial y republicano.

La experiencia se complementa con visitas a los alrededores, incluyendo el Parque Cretácico con huellas de dinosaurios y pueblos tradicionales donde se mantienen vivas las técnicas artesanales ancestrales.`,
      calificacion: 4.5,
      numeroReseñas: 567,
      precio: "$55",
      duracion: "1 día",
      maxPersonas: 15,
      dificultad: "Fácil",
      categoria: "Cultural",
      imagenes: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      coordenadas: { lat: -19.0196, lng: -65.2619 },
      actividades: [
        {
          id: "1",
          nombre: "Tour por el centro histórico",
          duracion: "3 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
        {
          id: "2",
          nombre: "Visita a la Casa de la Libertad",
          duracion: "1 hora",
          dificultad: "Fácil" as const,
          icono: "camera" as const,
        },
        {
          id: "3",
          nombre: "Parque Cretácico",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
      ],
      incluido: ["Guía turístico", "Transporte local", "Entrada a museos", "Entrada al Parque Cretácico"],
      noIncluido: ["Comidas", "Propinas", "Compras personales"],
    },
    cochabamba: {
      id: "cochabamba",
      nombre: "Cochabamba",
      ubicacion: "Cochabamba, Bolivia",
      descripcionCorta: "La ciudad del eterno clima primaveral",
      descripcionCompleta: `Cochabamba, conocida como la "Ciudad de la Eterna Primavera" por su clima templado durante todo el año, es el corazón gastronómico de Bolivia. Esta ciudad ofrece una perfecta combinación de tradición culinaria y paisajes andinos.

El Cristo de la Concordia, una de las estatuas de Cristo más grandes del mundo, domina el paisaje urbano desde el Cerro San Pedro. La ciudad es famosa por sus mercados gastronómicos y restaurantes que ofrecen la mejor comida tradicional boliviana.

Los alrededores incluyen el Parque Nacional Tunari y pueblos tradicionales donde se puede experimentar la vida rural andina y participar en actividades agrícolas tradicionales.`,
      calificacion: 4.4,
      numeroReseñas: 432,
      precio: "$50",
      duracion: "1 día",
      maxPersonas: 18,
      dificultad: "Fácil",
      categoria: "Gastronomía",
      imagenes: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      coordenadas: { lat: -17.3895, lng: -66.1568 },
      actividades: [
        {
          id: "1",
          nombre: "Visita al Cristo de la Concordia",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "camera" as const,
        },
        {
          id: "2",
          nombre: "Tour gastronómico",
          duracion: "3 horas",
          dificultad: "Fácil" as const,
          icono: "utensils" as const,
        },
        {
          id: "3",
          nombre: "Mercado La Cancha",
          duracion: "2 horas",
          dificultad: "Fácil" as const,
          icono: "users" as const,
        },
      ],
      incluido: ["Guía gastronómico", "Transporte local", "Degustaciones incluidas", "Teleférico al Cristo"],
      noIncluido: ["Comida completa", "Propinas", "Compras personales"],
    },
  }

  return destinos[id] || null
}

const recomendaciones = [
  {
    id: "lago-titicaca",
    nombre: "Lago Titicaca",
    ubicacion: "La Paz, Bolivia",
    descripcion: "El lago navegable más alto del mundo con islas místicas",
    calificacion: 4.8,
    imagenUrl: "/placeholder.svg?height=300&width=400",
    precio: "Desde $85",
  },
  {
    id: "la-paz",
    nombre: "La Paz",
    ubicacion: "La Paz, Bolivia",
    descripcion: "La capital más alta del mundo con cultura vibrante",
    calificacion: 4.7,
    imagenUrl: "/placeholder.svg?height=300&width=400",
    precio: "Desde $60",
  },
  {
    id: "potosi",
    nombre: "Potosí",
    ubicacion: "Potosí, Bolivia",
    descripcion: "Ciudad colonial con minas históricas de plata",
    calificacion: 4.6,
    imagenUrl: "/placeholder.svg?height=300&width=400",
    precio: "Desde $45",
  },
  {
    id: "sucre",
    nombre: "Sucre",
    ubicacion: "Chuquisaca, Bolivia",
    descripcion: "La ciudad blanca de Bolivia con rica historia cultural",
    calificacion: 4.5,
    imagenUrl: "/placeholder.svg?height=300&width=400",
    precio: "Desde Bs. 55",
  },
  {
    id: "cochabamba",
    nombre: "Cochabamba",
    ubicacion: "Cochabamba, Bolivia",
    descripcion: "La ciudad del eterno clima primaveral con deliciosa gastronomía",
    calificacion: 4.4,
    imagenUrl: "/placeholder.svg?height=300&width=400",
    precio: "Desde $50",
  },
]

export default function PaginaDetalleDestino({ params }: { params: { id: string } }) {
  const destino = obtenerDatosDestino(params.id)
  console.log(params)
  if (!destino) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <Navegacion />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">Destino no encontrado</h1>
          <p className="text-muted-foreground">El destino que buscas no existe o ha sido movido.</p>
          <Button className="mt-6" onClick={() => window.history.back()}>
            Volver atrás
          </Button>
        </div>
        <PiePagina />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <Navegacion />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span className="hover:text-primary cursor-pointer transition-colors">Inicio</span>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Destinos</span>
            <span>/</span>
            <span className="text-foreground font-medium">{destino.nombre}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 animate-bounce-in">
                  {destino.categoria}
                </Badge>
                <Badge variant="outline" className="animate-bounce-in animation-delay-100">
                  {destino.dificultad}
                </Badge>
              </div>

              <h1 className="font-heading font-black text-3xl lg:text-4xl text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {destino.nombre}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <MapPin className="h-4 w-4" />
                  <span>{destino.ubicacion}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-accent transition-colors">
                  <Clock className="h-4 w-4" />
                  <span>{destino.duracion}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <Users className="h-4 w-4" />
                  <span>Hasta {destino.maxPersonas} personas</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-200">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-200 hover:scale-110 ${
                        i < Math.floor(destino.calificacion) ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-lg">{destino.calificacion}</span>
                <span className="text-muted-foreground">({destino.numeroReseñas} reseñas)</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-300">
              <Button
                variant="outline"
                size="sm"
                className="hover:scale-105 transition-all duration-200 hover:bg-red-50 hover:border-red-200 bg-transparent"
              >
                <Heart className="h-4 w-4 mr-2" />
                Guardar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:scale-105 transition-all duration-200 hover:bg-blue-50 hover:border-blue-200 bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8 animate-slide-up animation-delay-200">
          <GaleriaImagenes imagenes={destino.imagenes} titulo={destino.nombre} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="animate-fade-in-up animation-delay-300 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4 text-primary">Sobre esta experiencia</h2>
                <div className="prose prose-gray max-w-none">
                  {destino.descripcionCompleta.split("\n\n").map((parrafo: string, index: number) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed mb-4 animate-fade-in-up"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      {parrafo}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <div className="animate-fade-in-up animation-delay-500">
              <SeccionActividades actividades={destino.actividades} />
            </div>

            {/* What's Included */}
            <Card className="animate-fade-in-up animation-delay-600 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4 text-primary">Qué incluye</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slide-right">
                    <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">✓</span>
                      Incluido
                    </h3>
                    <ul className="space-y-2">
                      {destino.incluido.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center animate-fade-in-up"
                          style={{ animationDelay: `${700 + index * 50}ms` }}
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="animate-slide-left">
                    <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">✗</span>
                      No incluido
                    </h3>
                    <ul className="space-y-2">
                      {destino.noIncluido.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center animate-fade-in-up"
                          style={{ animationDelay: `${800 + index * 50}ms` }}
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="lg:sticky lg:top-6 animate-fade-in-up animation-delay-400 hover:shadow-xl transition-all duration-300 border-2 border-primary/10 z-10 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center mb-6 animate-pulse-gentle">
                  <div className="text-3xl font-heading font-black text-primary mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {destino.precio}
                  </div>
                  <div className="text-sm text-muted-foreground">por persona</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="animate-slide-right">
                      <label className="text-sm font-medium text-muted-foreground">Fecha</label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      />
                    </div>
                    <div className="animate-slide-left">
                      <label className="text-sm font-medium text-muted-foreground">Personas</label>
                      <select className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200">
                        <option>1 persona</option>
                        <option>2 personas</option>
                        <option>3 personas</option>
                        <option>4 personas</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 mb-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Calendar className="h-4 w-4 mr-2" />
                  Reservar ahora
                </Button>

                <div className="text-center text-xs text-muted-foreground animate-fade-in-up animation-delay-600">
                  Reserva sin costo. Cancela hasta 24h antes.
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="animate-fade-in-up animation-delay-500">
              <MapaDestino ubicacion={destino.ubicacion} coordenadas={destino.coordenadas} />
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-700">
          <SeccionRecomendaciones recomendaciones={recomendaciones} />
        </div>
      </div>
      <PiePagina />
    </div>
  )
}
