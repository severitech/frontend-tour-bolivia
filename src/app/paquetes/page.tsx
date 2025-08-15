import { Navegacion } from "@/components/comunes/navegacion"
import { PiePagina } from "@/components/comunes/pie-pagina"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Star, Calendar } from "lucide-react"

const paquetes = [
  {
    id: "bolivia-completa",
    nombre: "Bolivia Completa",
    ubicacion: "Multi-destino",
    descripcion:
      "Recorre los destinos más impresionantes de Bolivia en un viaje completo: Salar de Uyuni, Lago Titicaca, La Paz y más.",
    calificacion: 4.9,
    imagenUrl: "/placeholder.svg?height=400&width=600",
    precio: "Desde $850",
    duracion: "10 días",
    destinos: ["Salar de Uyuni", "Lago Titicaca", "La Paz", "Potosí"],
    maxPersonas: 12,
  },
  {
    id: "aventura-extrema",
    nombre: "Aventura Extrema",
    ubicacion: "La Paz - Potosí",
    descripcion:
      "Para los más aventureros: trekking, escalada, ciclismo de montaña y experiencias únicas en los Andes bolivianos.",
    calificacion: 4.8,
    imagenUrl: "/placeholder.svg?height=400&width=600",
    precio: "Desde $650",
    duracion: "7 días",
    destinos: ["Cordillera Real", "Camino de la Muerte", "Minas de Potosí"],
    maxPersonas: 8,
  },
  {
    id: "cultura-ancestral",
    nombre: "Cultura Ancestral",
    ubicacion: "Multi-destino",
    descripcion:
      "Sumérgete en la rica cultura boliviana visitando comunidades indígenas, sitios arqueológicos y tradiciones milenarias.",
    calificacion: 4.7,
    imagenUrl: "/placeholder.svg?height=400&width=600",
    precio: "Desde $480",
    duracion: "6 días",
    destinos: ["Tiwanaku", "Copacabana", "Isla del Sol", "Comunidades Aymaras"],
    maxPersonas: 15,
  },
  {
    id: "naturaleza-pura",
    nombre: "Naturaleza Pura",
    ubicacion: "Parques Nacionales",
    descripcion:
      "Explora la biodiversidad única de Bolivia en sus parques nacionales: desde la Amazonía hasta los Andes.",
    calificacion: 4.6,
    imagenUrl: "/placeholder.svg?height=400&width=600",
    precio: "Desde $720",
    duracion: "8 días",
    destinos: ["Parque Madidi", "Parque Amboró", "Reserva Eduardo Avaroa"],
    maxPersonas: 10,
  },
  {
    id: "gastronomia-boliviana",
    nombre: "Gastronomía Boliviana",
    ubicacion: "Cochabamba - La Paz",
    descripcion:
      "Un viaje culinario por Bolivia descubriendo sabores únicos, mercados locales y técnicas de cocina ancestrales.",
    calificacion: 4.5,
    imagenUrl: "/placeholder.svg?height=400&width=600",
    precio: "Desde $380",
    duracion: "5 días",
    destinos: ["Mercado Central", "Valle de Cochabamba", "Restaurantes típicos"],
    maxPersonas: 12,
  },
  {
    id: "luna-de-miel",
    nombre: "Luna de Miel Boliviana",
    ubicacion: "Destinos románticos",
    descripcion: "Paquete especial para parejas con experiencias románticas en los lugares más hermosos de Bolivia.",
    calificacion: 4.8,
    imagenUrl: "/placeholder.svg?height=400&width=600",
    precio: "Desde $950",
    duracion: "7 días",
    destinos: ["Salar de Uyuni", "Sucre", "Samaipata", "Hoteles boutique"],
    maxPersonas: 2,
  },
]

export default function PaginaPaquetes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 animate-fade-in">
      <Navegacion />

      {/* Sección Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground animate-fade-in-up">
            Paquetes <span className="text-primary">Turísticos</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Descubre Bolivia con nuestros paquetes cuidadosamente diseñados para ofrecerte experiencias únicas e
            inolvidables
          </p>
        </div>
      </section>

      {/* Grid de Paquetes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paquetes.map((paquete, index) => (
              <Card
                key={paquete.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={paquete.imagenUrl || "/placeholder.svg"}
                    alt={paquete.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-bounce-in">
                    {paquete.precio}
                  </div>
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold animate-bounce-in animation-delay-100">
                    {paquete.duracion}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Título */}
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {paquete.nombre}
                  </h3>

                  {/* Descripción */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{paquete.descripcion}</p>

                  {/* Destinos */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Incluye:</h4>
                    <div className="flex flex-wrap gap-1">
                      {paquete.destinos.slice(0, 3).map((destino, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {destino}
                        </Badge>
                      ))}
                      {paquete.destinos.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{paquete.destinos.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {paquete.maxPersonas} max
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                        <span>{paquete.calificacion}</span>
                      </div>
                    </div>
                  </div>

                  {/* Botón CTA */}
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-200 hover:scale-105">
                    <Calendar className="h-4 w-4 mr-2" />
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl text-foreground">¿No encuentras lo que buscas?</h2>
          <p className="text-muted-foreground text-lg">
            Creamos paquetes personalizados según tus intereses, presupuesto y tiempo disponible
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 hover:scale-105 transition-all duration-200"
          >
            Solicitar paquete personalizado
          </Button>
        </div>
      </section>

      <PiePagina />
    </div>
  )
}
