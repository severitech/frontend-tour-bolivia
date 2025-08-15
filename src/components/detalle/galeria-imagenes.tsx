"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface PropsGaleriaImagenes {
  imagenes: string[]
  titulo: string
}

export function GaleriaImagenes({ imagenes, titulo }: PropsGaleriaImagenes) {
  const [imagenActual, setImagenActual] = useState(0)
  const [mostrarLightbox, setMostrarLightbox] = useState(false)

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length)
  }

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-2 h-96 animate-fade-in">
        {/* Imagen Principal */}
        <div className="col-span-4 md:col-span-3 relative overflow-hidden rounded-lg cursor-pointer group">
          <img
            src={imagenes[imagenActual] || "/placeholder.svg?height=400&width=600&query=paisaje boliviano"}
            alt={`${titulo} - Imagen ${imagenActual + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onClick={() => setMostrarLightbox(true)}
          />
          {imagenes.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={imagenAnterior}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={siguienteImagen}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Grid de Miniaturas */}
        <div className="hidden md:flex flex-col gap-2">
          {imagenes.slice(0, 4).map((imagen, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer flex-1 transition-all duration-200 hover:scale-105 ${
                index === imagenActual ? "ring-2 ring-amber-500" : ""
              }`}
              onClick={() => setImagenActual(index)}
            >
              <img
                src={imagen || `/placeholder.svg?height=100&width=150&query=miniatura paisaje boliviano ${index + 1}`}
                alt={`${titulo} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === 3 && imagenes.length > 4 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold">
                  +{imagenes.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {mostrarLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-0"
            onClick={() => setMostrarLightbox(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={imagenes[imagenActual] || "/placeholder.svg?height=600&width=800&query=paisaje boliviano ampliado"}
              alt={`${titulo} - Imagen ${imagenActual + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            {imagenes.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
                  onClick={imagenAnterior}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
                  onClick={siguienteImagen}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
