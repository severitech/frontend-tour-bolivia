"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-lg">B</span>
            </div>
            <span className="font-heading font-black text-xl text-foreground">Descubre Bolivia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/destinos" className="text-foreground hover:text-primary transition-colors font-medium">
              Destinos
            </Link>
            <Link href="/paquetes" className="text-foreground hover:text-primary transition-colors font-medium">
              Paquetes
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMenuAbierto(!menuAbierto)} className="p-2">
              {menuAbierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuAbierto && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMenuAbierto(false)}
              >
                Inicio
              </Link>
              <Link
                href="/destinos"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMenuAbierto(false)}
              >
                Destinos
              </Link>
              <Link
                href="/paquetes"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMenuAbierto(false)}
              >
                Paquetes
              </Link>
              <Link
                href="/contacto"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMenuAbierto(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
