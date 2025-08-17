"use client"

import { Navegacion } from "@/components/comunes/navegacion"
import { PiePagina } from "@/components/comunes/pie-pagina"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Share2, Clock, Users, Calendar, MapPin, CheckCircle, XCircle } from "lucide-react"

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
        { nombre: "La Paz", dias: 2, descripcion: "Capital administrativa y mercados tradicionales" },
        { nombre: "Lago Titicaca", dias: 2, descripcion: "Islas flotantes y cultura ancestral" },
        { nombre: "Salar de Uyuni", dias: 3, descripcion: "Desierto de sal y paisajes únicos" },
        { nombre: "Potosí", dias: 2, descripcion: "Ciudad colonial y minas históricas" },
        { nombre: "Sucre", dias: 1, descripcion: "Capital constitucional y arquitectura colonial" },
      ],
      itinerario: [
        {
          dia: 1,
          titulo: "Llegada a La Paz",
          actividades: ["Recepción en aeropuerto", "City tour por La Paz", "Visita al Mercado de las Brujas"],
        },
        {
          dia: 2,
          titulo: "Valle de la Luna",
          actividades: ["Excursión al Valle de la Luna", "Teleférico de La Paz", "Cena tradicional"],
        },
        {
          dia: 3,
          titulo: "Lago Titicaca",
          actividades: ["Viaje a Copacabana", "Navegación a Isla del Sol", "Alojamiento en isla"],
        },
        {
          dia: 4,
          titulo: "Isla del Sol",
          actividades: ["Trekking en la isla", "Sitios arqueológicos", "Regreso a Copacabana"],
        },
        {
          dia: 5,
          titulo: "Hacia Uyuni",
          actividades: ["Viaje a Uyuni", "Cementerio de trenes", "Atardecer en el salar"],
        },
        { dia: 6, titulo: "Salar de Uyuni", actividades: ["Amanecer en el salar", "Isla Incahuasi", "Hotel de sal"] },
        { dia: 7, titulo: "Lagunas de colores", actividades: ["Laguna Colorada", "Flamencos", "Géiseres"] },
        { dia: 8, titulo: "Potosí", actividades: ["Viaje a Potosí", "Tour por la ciudad colonial", "Visita a minas"] },
        { dia: 9, titulo: "Sucre", actividades: ["Viaje a Sucre", "Centro histórico", "Mercado Central"] },
        { dia: 10, titulo: "Despedida", actividades: ["Tiempo libre", "Traslado al aeropuerto", "Vuelo de regreso"] },
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
      fechasDisponibles: ["2024-03-15", "2024-04-12", "2024-05-10", "2024-06-14"],
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
        { nombre: "Cordillera Real", dias: 3, descripcion: "Trekking y escalada en alta montaña" },
        { nombre: "Camino de la Muerte", dias: 1, descripcion: "Ciclismo extremo en ruta peligrosa" },
        { nombre: "Minas de Potosí", dias: 2, descripcion: "Exploración subterránea histórica" },
        { nombre: "La Paz", dias: 1, descripcion: "Preparativos y city tour urbano" },
      ],
      itinerario: [
        {
          dia: 1,
          titulo: "Llegada y preparativos",
          actividades: ["Recepción en La Paz", "Briefing de seguridad", "Prueba de equipos"],
        },
        {
          dia: 2,
          titulo: "Inicio del trekking",
          actividades: ["Viaje a Cordillera Real", "Inicio de caminata", "Campamento base"],
        },
        {
          dia: 3,
          titulo: "Trekking avanzado",
          actividades: ["Ascenso a picos", "Técnicas de escalada", "Campamento de altura"],
        },
        {
          dia: 4,
          titulo: "Camino de la Muerte",
          actividades: ["Descenso en bicicleta", "Ruta más peligrosa", "Llegada a Coroico"],
        },
        {
          dia: 5,
          titulo: "Viaje a Potosí",
          actividades: ["Traslado a Potosí", "Tour por la ciudad", "Preparación para minas"],
        },
        {
          dia: 6,
          titulo: "Minas de Potosí",
          actividades: ["Exploración subterránea", "Encuentro con mineros", "Historia colonial"],
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
      fechasDisponibles: ["2024-03-20", "2024-04-17", "2024-05-15", "2024-06-19"],
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
        { nombre: "Tiwanaku", dias: 1, descripcion: "Sitio arqueológico preincaico" },
        { nombre: "Copacabana", dias: 2, descripcion: "Ciudad sagrada del lago" },
        { nombre: "Isla del Sol", dias: 2, descripcion: "Cuna del Imperio Inca" },
        { nombre: "Comunidades Aymaras", dias: 1, descripcion: "Tradiciones vivas ancestrales" },
      ],
      itinerario: [
        {
          dia: 1,
          titulo: "Tiwanaku ancestral",
          actividades: ["Visita a Tiwanaku", "Museo arqueológico", "Ceremonia de bienvenida"],
        },
        {
          dia: 2,
          titulo: "Lago sagrado",
          actividades: ["Viaje a Copacabana", "Basílica colonial", "Navegación al atardecer"],
        },
        {
          dia: 3,
          titulo: "Isla del Sol",
          actividades: ["Exploración de la isla", "Sitios arqueológicos", "Alojamiento local"],
        },
        {
          dia: 4,
          titulo: "Tradiciones vivas",
          actividades: ["Visita a comunidades", "Taller de textiles", "Medicina tradicional"],
        },
        {
          dia: 5,
          titulo: "Ceremonias ancestrales",
          actividades: ["Ritual de agradecimiento", "Intercambio cultural", "Música tradicional"],
        },
        {
          dia: 6,
          titulo: "Despedida",
          actividades: ["Reflexión grupal", "Compras artesanales", "Regreso a La Paz"],
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
      fechasDisponibles: ["2024-03-25", "2024-04-22", "2024-05-20", "2024-06-24"],
      descuento: 20,
    },
  }

  return paquetes[id] || null
}

export default function PaginaDetallePaquete({ params }: { params: { id: string } }) {
  const paquete = obtenerDatosPaquete(params.id)

  if (!paquete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <Navegacion />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">Paquete no encontrado</h1>
          <p className="text-muted-foreground">El paquete que buscas no existe o ha sido movido.</p>
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
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span className="hover:text-primary cursor-pointer transition-colors">Inicio</span>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Paquetes</span>
            <span>/</span>
            <span className="text-foreground font-medium">{paquete.nombre}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 animate-bounce-in">
                  {paquete.categoria}
                </Badge>
                <Badge variant="outline" className="animate-bounce-in animation-delay-100">
                  {paquete.dificultad}
                </Badge>
                {paquete.descuento && (
                  <Badge className="bg-red-500 text-white animate-bounce-in animation-delay-200">
                    -{paquete.descuento}% OFF
                  </Badge>
                )}
              </div>

              <h1 className="font-heading font-black text-3xl lg:text-4xl text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {paquete.nombre}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <MapPin className="h-4 w-4" />
                  <span>{paquete.ubicacion}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-accent transition-colors">
                  <Clock className="h-4 w-4" />
                  <span>{paquete.duracion}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <Users className="h-4 w-4" />
                  <span>Hasta {paquete.maxPersonas} personas</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-200">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-200 hover:scale-110 ${
                        i < Math.floor(paquete.calificacion) ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-lg">{paquete.calificacion}</span>
                <span className="text-muted-foreground">({paquete.numeroReseñas} reseñas)</span>
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

        {/* Image Gallery */}
        <div className="mb-8 animate-slide-up animation-delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96">
            <div className="lg:col-span-2 lg:row-span-2">
              <img
                src={paquete.imagenes[0] || "/placeholder.svg"}
                alt={paquete.nombre}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            {paquete.imagenes.slice(1, 5).map((imagen: string, index: number) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <img
                  src={imagen || "/placeholder.svg"}
                  alt={`${paquete.nombre} ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="animate-fade-in-up animation-delay-300 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4 text-primary">Sobre este paquete</h2>
                <div className="prose prose-gray max-w-none">
                  {paquete.descripcionCompleta.split("\n\n").map((parrafo: string, index: number) => (
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

            {/* Destinos incluidos */}
            <Card className="animate-fade-in-up animation-delay-400 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4 text-primary">Destinos incluidos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paquete.destinos.map((destino: any, index: number) => (
                    <div
                      key={index}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow animate-fade-in-up"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground">{destino.nombre}</h3>
                        <Badge variant="secondary">{destino.dias} días</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{destino.descripcion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerario */}
            <Card className="animate-fade-in-up animation-delay-500 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4 text-primary">Itinerario detallado</h2>
                <div className="space-y-4">
                  {paquete.itinerario.map((dia: any, index: number) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary/20 pl-4 animate-fade-in-up"
                      style={{ animationDelay: `${600 + index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-primary text-primary-foreground">Día {dia.dia}</Badge>
                        <h3 className="font-semibold text-foreground">{dia.titulo}</h3>
                      </div>
                      <ul className="space-y-1">
                        {dia.actividades.map((actividad: string, actIndex: number) => (
                          <li key={actIndex} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {actividad}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="animate-fade-in-up animation-delay-600 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4 text-primary">Qué incluye</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slide-right">
                    <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Incluido
                    </h3>
                    <ul className="space-y-2">
                      {paquete.incluido.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center animate-fade-in-up"
                          style={{ animationDelay: `${700 + index * 50}ms` }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="animate-slide-left">
                    <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                      <XCircle className="h-5 w-5 mr-2" />
                      No incluido
                    </h3>
                    <ul className="space-y-2">
                      {paquete.noIncluido.map((item: string, index: number) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center animate-fade-in-up"
                          style={{ animationDelay: `${800 + index * 50}ms` }}
                        >
                          <XCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
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
            <Card className="lg:sticky lg:top-6 z-10 bg-white/95 backdrop-blur-sm animate-fade-in-up animation-delay-400 hover:shadow-xl transition-all duration-300 border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  {paquete.precioOriginal && (
                    <div className="text-lg text-muted-foreground line-through mb-1">{paquete.precioOriginal}</div>
                  )}
                  <div className="text-3xl font-heading font-black text-primary mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-gentle">
                    {paquete.precio}
                  </div>
                  <div className="text-sm text-muted-foreground">por persona</div>
                  {paquete.descuento && (
                    <Badge className="bg-red-500 text-white mt-2">¡Ahorra {paquete.descuento}%!</Badge>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="animate-slide-right">
                    <label className="text-sm font-medium text-muted-foreground">Fecha de salida</label>
                    <select className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200">
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
                    <label className="text-sm font-medium text-muted-foreground">Número de personas</label>
                    <select className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200">
                      <option>1 persona</option>
                      <option>2 personas</option>
                      <option>3 personas</option>
                      <option>4 personas</option>
                    </select>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 mb-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() =>
                    (window.location.href = `/reserva?paquete=${paquete.id}&nombre=${encodeURIComponent(paquete.nombre)}&precio=${encodeURIComponent(paquete.precio)}`)
                  }
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Reservar paquete
                </Button>

                <div className="text-center text-xs text-muted-foreground animate-fade-in-up animation-delay-600">
                  Reserva con solo $100. Paga el resto 30 días antes del viaje.
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="animate-fade-in-up animation-delay-500 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">¿Necesitas ayuda?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nuestros expertos están listos para ayudarte a planificar tu viaje perfecto.
                </p>
                <Button variant="outline" className="w-full hover:scale-105 transition-all duration-200 bg-transparent">
                  Contactar asesor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <PiePagina />
    </div>
  )
}
