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
import Image from "next/image";
import { useParams } from "next/navigation";

// Definimos un tipo específico para los paquetes
interface Paquete {
  id: string;
  nombre: string;
  ubicacion: string;
  descripcionCorta: string;
  descripcionCompleta: string;
  calificacion: number;
  numeroReseñas: number;
  precio: string;
  precioOriginal: string;
  duracion: string;
  maxPersonas: number;
  dificultad: string;
  categoria: string;
  imagenes: string[];
  destinos: {
    nombre: string;
    dias: number;
    descripcion: string;
  }[];
  itinerario: {
    dia: number;
    titulo: string;
    actividades: string[];
  }[];
  incluido: string[];
  noIncluido: string[];
  fechasDisponibles: string[];
  descuento?: number;
}

// Mock data para paquetes detallados (rellena tu mock aquí)
const obtenerDatosPaquete = (id: string): Paquete | undefined => {
  const paquetes: Record<string, Paquete> = {
    "1": {
      id: "1",
      nombre: "Paquete A",
      ubicacion: "Bolivia",
      descripcionCorta: "Descripción corta del paquete A",
      descripcionCompleta: "Descripción completa del paquete A",
      calificacion: 4.5,
      numeroReseñas: 25,
      precio: "$200",
      precioOriginal: "$250",
      duracion: "5 días",
      maxPersonas: 10,
      dificultad: "Media",
      categoria: "Aventura",
      imagenes: ["/img1.jpg", "/img2.jpg"],
      destinos: [{ nombre: "Destino A", dias: 2, descripcion: "Descripción del destino A" }],
      itinerario: [{ dia: 1, titulo: "Inicio", actividades: ["Actividad 1"] }],
      incluido: ["Transporte", "Alojamiento"],
      noIncluido: ["Comidas"],
      fechasDisponibles: ["2023-12-01", "2023-12-15"],
      descuento: 10,
    },
    // Otros paquetes aquí
  };
  return paquetes[id];
};

interface PaqueteParams {
  id: string; // Aseguramos que 'id' siempre sea un string
}

export default function PaginaDetallePaquete() {
  const { id } = useParams<PaqueteParams>(); 
  const [esFavorito, setEsFavorito] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [selectedFecha, setSelectedFecha] = useState("");
  const [selectedPersonas, setSelectedPersonas] = useState("1");
  const [paquete, setPaquete] = useState<Paquete | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = obtenerDatosPaquete(id); // Aquí asumo que tienes esta función disponible
        setPaquete(data);
      } catch (error) {
        console.error("Error al obtener los datos del paquete:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (paquete) setTitulo(paquete.nombre);
  }, [paquete]);

  const alternarFavorito = () => {
    setEsFavorito((prev) => !prev);
    const agregado = !esFavorito;

    toast({
      title: agregado ? "Agregado a favoritos" : "Eliminado de favoritos",
      description: agregado
        ? `${titulo} ha sido agregado a tus favoritos`
        : `${titulo} ha sido eliminado de tus favoritos`,
    });
  };

  const compartir = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: titulo,
          text: `¡Mira este increíble destino en Bolivia: ${titulo}!`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Enlace copiado",
          description: "El enlace ha sido copiado al portapapeles",
        });
      }
    } catch (error) {
      console.log("Error al compartir:", error);
    }
  };

  const handleReserva = () => {
    if (!selectedFecha || !selectedPersonas) {
      toast({
        title: "Por favor selecciona todos los campos",
        description: "Asegúrate de que has seleccionado una fecha y el número de personas.",
      });
      return;
    }

    // Proceder con la reserva
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
                className="text-gray-700 border-0 bg-white/90 shadow-md active:scale-95 md:shadow-lg transition-all duration-200 hover:bg-white hover:scale-105 focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Heart
                  className={`h-5 w-5 transition-colors ${
                    esFavorito
                      ? "fill-red-500 text-red-500 animate-heartBeat"
                      : ""
                  }`}
                />{" "}
                Guardar
              </Button>

              <Button
                variant="secondary"
                size="sm"
                className="text-gray-700 border-0 bg-white/90 shadow-md active:scale-95 md:shadow-lg transition-all duration-200 hover:bg-white hover:scale-105 focus-visible:ring-2 focus-visible:ring-amber-400"
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
            <div className="lg:col-span-2 lg:row-span-2 relative">
              <Image
                src={paquete.imagenes[0] || "/placeholder.svg"}
                alt={paquete.nombre}
                fill
                className="object-cover w-full h-full transition-transform duration-300 rounded-lg hover:scale-105"
                priority
              />
            </div>
            {paquete.imagenes
              .slice(1, 5)
              .map((imagen: string, index: number) => (
                <div
                  key={index}
                  className="animate-fade-in-up relative"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <Image
                    src={imagen || "/placeholder.svg"}
                    alt={`${paquete.nombre} ${index + 2}`}
                    className="object-cover w-full h-full transition-transform duration-300 rounded-lg hover:scale-105"
                    width={600}
                    height={400}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <PiePagina />
    </div>
  );
}
