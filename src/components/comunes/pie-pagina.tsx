"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

export function PiePagina() {
  const [emailNewsletter, setEmailNewsletter] = useState("")

  const manejarSuscripcion = (e: React.FormEvent) => {
    e.preventDefault()

    if (!emailNewsletter.trim()) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu email para suscribirte",
        variant: "destructive",
      })
      return
    }

    if (!/\S+@\S+\.\S+/.test(emailNewsletter)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "¡Suscripción exitosa!",
      description: "Te has suscrito correctamente a nuestro newsletter",
    })

    setEmailNewsletter("")
  }

  const abrirRedSocial = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-black text-lg">B</span>
              </div>
              <span className="font-heading font-black text-xl">Descubre Bolivia</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Tu guía definitiva para explorar los destinos más impresionantes de Bolivia. Descubre paisajes únicos,
              cultura vibrante y aventuras inolvidables.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-2"
                onClick={() => abrirRedSocial("https://facebook.com/descubrebolivia")}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-2"
                onClick={() => abrirRedSocial("https://instagram.com/descubrebolivia")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-2"
                onClick={() => abrirRedSocial("https://twitter.com/descubrebolivia")}
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-100 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/destinos" className="text-amber-100 hover:text-white transition-colors text-sm">
                  Destinos
                </Link>
              </li>
              <li>
                <Link href="/paquetes" className="text-amber-100 hover:text-white transition-colors text-sm">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-amber-100 hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinos populares */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Destinos populares</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinos/salar-de-uyuni"
                  className="text-amber-100 hover:text-white transition-colors text-sm"
                >
                  Salar de Uyuni
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos/lago-titicaca"
                  className="text-amber-100 hover:text-white transition-colors text-sm"
                >
                  Lago Titicaca
                </Link>
              </li>
              <li>
                <Link href="/destinos/la-paz" className="text-amber-100 hover:text-white transition-colors text-sm">
                  La Paz
                </Link>
              </li>
              <li>
                <Link href="/destinos/potosi" className="text-amber-100 hover:text-white transition-colors text-sm">
                  Potosí
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Contacto</h3>
            <div className="space-y-3">
              <div
                className="flex items-center space-x-2 text-amber-100 text-sm cursor-pointer hover:text-white transition-colors"
                onClick={() => window.open("https://maps.google.com/?q=La+Paz+Bolivia", "_blank")}
              >
                <MapPin className="h-4 w-4" />
                <span>La Paz, Bolivia</span>
              </div>
              <div
                className="flex items-center space-x-2 text-amber-100 text-sm cursor-pointer hover:text-white transition-colors"
                onClick={() => window.open("tel:+59121234567", "_self")}
              >
                <Phone className="h-4 w-4" />
                <span>+591 2 123 4567</span>
              </div>
              <div
                className="flex items-center space-x-2 text-amber-100 text-sm cursor-pointer hover:text-white transition-colors"
                onClick={() => window.open("mailto:info@descubrebolivia.com", "_self")}
              >
                <Mail className="h-4 w-4" />
                <span>info@descubrebolivia.com</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Suscríbete a nuestro newsletter</h4>
              <form onSubmit={manejarSuscripcion} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={emailNewsletter}
                  onChange={(e) => setEmailNewsletter(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-amber-200 focus:bg-white/20"
                />
                <Button type="submit" className="bg-white text-amber-800 hover:bg-amber-50 font-semibold">
                  Suscribir
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-amber-200 text-sm">© 2024 Descubre Bolivia. Todos los derechos reservados.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-amber-200 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-amber-200 hover:text-white text-sm transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
