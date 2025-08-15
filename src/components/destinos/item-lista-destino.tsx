import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

interface PropiedadesItemListaDestino {
  id: string
  nombre: string
  ubicacion: string
  descripcion: string
  calificacion: number
  urlImagen: string
  precio: string
  duracion: string
  categoria: string
  maxPersonas?: number
}

export function ItemListaDestino({
  id,
  nombre,
  ubicacion,
  descripcion,
  calificacion,
  urlImagen,
  precio,
  duracion,
  categoria,
  maxPersonas,
}: PropiedadesItemListaDestino) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative w-full sm:w-80 h-48 sm:h-auto overflow-hidden">
            <img
              src={urlImagen || "/placeholder.svg"}
              alt={nombre}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
              {categoria}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              {/* Location */}
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {ubicacion}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-foreground hover:text-primary transition-colors">
                <Link href={`/destinos/${id}`}>{nombre}</Link>
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{descripcion}</p>

              {/* Meta Info */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {duracion}
                </div>
                {maxPersonas && (
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Hasta {maxPersonas} personas
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(calificacion || 0) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {(calificacion || 0).toFixed(1)} ({Math.floor(Math.random() * 500) + 100} reseñas)
                </span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-right">
                <div className="text-2xl font-heading font-bold text-primary">{precio}</div>
                <div className="text-xs text-muted-foreground">por persona</div>
              </div>
              <Link href={`/destinos/${id}`}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold hover:shadow-md transition-all duration-200">
                  Ver detalles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
