import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"

interface PropsTarjetaDestino {
  id: string
  nombre: string
  ubicacion: string
  descripcion: string
  calificacion: number
  urlImagen: string
  precio?: string
}

export function TarjetaDestino({
  id,
  nombre,
  ubicacion,
  descripcion,
  calificacion,
  urlImagen,
  precio,
}: PropsTarjetaDestino) {
  const calificacionSegura = calificacion || 0
  const calificacionRedondeada = Math.max(0, Math.min(5, calificacionSegura))

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in">
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        {/* <img
          src={urlImagen || "/placeholder.svg?height=256&width=400&query=destino turístico boliviano"}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        /> */}
        {precio && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {precio}
          </div>
        )}
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Ubicación */}
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          {ubicacion}
        </div>

        {/* Título */}
        <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-amber-600 transition-colors">
          {nombre}
        </h3>

        {/* Descripción */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{descripcion}</p>

        {/* Calificación */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(calificacionRedondeada) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            {calificacionRedondeada.toFixed(1)} ({Math.floor(Math.random() * 500) + 100} reseñas)
          </span>
        </div>

        {/* Botón de acción */}
        <Link href={`/destinos/${id}`}>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-200 transform hover:scale-105">
            Explorar más
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
