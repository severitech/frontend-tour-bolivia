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
        "/placeholder.svg?height=400&width=600&text=Salar+de+Uyuni+Principal",
        "/placeholder.svg?height=400&width=600&text=Espejo+de+Agua",
        "/placeholder.svg?height=400&width=600&text=Atardecer+Salar",
        "/placeholder.svg?height=400&width=600&text=Isla+Incahuasi",
        "/placeholder.svg?height=400&width=600&text=Flamencos",
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
]

export default function PaginaDetalleDestino({ params }: { params: { id: string } }) {
  const destino = obtenerDatosDestino(params.id)

  if (!destino) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <Navegacion />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">Destino no encontrado</h1>
          <p className="text-muted-foreground">El destino que buscas no existe o ha sido movido.</p>
        </div>
        <PiePagina />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <Navegacion />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span>Inicio</span>
            <span>/</span>
            <span>Destinos</span>
            <span>/</span>
            <span className="text-foreground">{destino.nombre}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary/10 text-primary border-primary/20">{destino.categoria}</Badge>
                <Badge variant="outline">{destino.dificultad}</Badge>
              </div>

              <h1 className="font-heading font-black text-3xl lg:text-4xl text-foreground">{destino.nombre}</h1>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{destino.ubicacion}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{destino.duracion}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>Hasta {destino.maxPersonas} personas</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(destino.calificacion) ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{destino.calificacion}</span>
                <span className="text-muted-foreground">({destino.numeroReseñas} reseñas)</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Guardar
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <GaleriaImagenes imagenes={destino.imagenes} titulo={destino.nombre} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4">Sobre esta experiencia</h2>
                <div className="prose prose-gray max-w-none">
                  {destino.descripcionCompleta.split("\n\n").map((parrafo: string, index: number) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {parrafo}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <SeccionActividades actividades={destino.actividades} />

            {/* What's Included */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-heading font-bold text-xl mb-4">Qué incluye</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-3">✓ Incluido</h3>
                    <ul className="space-y-2">
                      {destino.incluido.map((item: string, index: number) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-3">✗ No incluido</h3>
                    <ul className="space-y-2">
                      {destino.noIncluido.map((item: string, index: number) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-heading font-black text-primary mb-1">{destino.precio}</div>
                  <div className="text-sm text-muted-foreground">por persona</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Fecha</label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Personas</label>
                      <select className="w-full mt-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>1 persona</option>
                        <option>2 personas</option>
                        <option>3 personas</option>
                        <option>4 personas</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  Reservar ahora
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  Reserva sin costo. Cancela hasta 24h antes.
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <MapaDestino ubicacion={destino.ubicacion} coordenadas={destino.coordenadas} />
          </div>
        </div>

        {/* Recommendations */}
        <SeccionRecomendaciones recomendaciones={recomendaciones} />
      </div>
      <PiePagina />
    </div>
  )
}
