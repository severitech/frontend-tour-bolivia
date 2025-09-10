"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LoadingLink } from "../EfectoCarga/vista-cargando";
import { usePathname } from "next/navigation"; // 👈 importamos el hook
<<<<<<< HEAD
import { VariantProps } from 'class-variance-authority';
=======
import useAuth from "@/hooks/useAuth";
import { NavUser } from "@/components/nav-user";
>>>>>>> 171f9c1774f3a30fedead1597599a46c6e3b6a19

export function Navegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname();

  // 👇 cuando cambie la ruta, cerramos el menú
  useEffect(() => {
    setMenuAbierto(false);
  }, [pathname]);

  return (
<<<<<<< HEAD
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm border-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
=======
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 171f9c1774f3a30fedead1597599a46c6e3b6a19
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <span className="text-lg font-black text-primary-foreground font-heading">
                B
              </span>
            </div>
            <span className="text-xl font-black font-heading text-foreground">
              Descubre Bolivia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <LoadingLink href="/">Inicio</LoadingLink>
            <LoadingLink href="/destinos">Destinos</LoadingLink>
            <LoadingLink href="/paquetes">Paquetes</LoadingLink>
            <LoadingLink href="/contacto">Contacto</LoadingLink>
            <LoadingLink href="/panel">Panel</LoadingLink>
<<<<<<< HEAD
            <LoadingLink href="/login" ><Button className="transition-all duration-200 shadow-md active:scale-95 md:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl">Login</Button></LoadingLink>
=======
            {/* Show avatar if logged in, else Login link */}
            {(() => {
              const { user } = useAuth();
              if (user) {
                return <NavUser />;
              } else {
                return <LoadingLink href="/login">Login</LoadingLink>;
              }
            })()}
>>>>>>> 171f9c1774f3a30fedead1597599a46c6e3b6a19
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="p-2"
            >
              {menuAbierto ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuAbierto && (
          <div className="border-t md:hidden border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <LoadingLink href="/" className="block px-3 py-2">
                Inicio
              </LoadingLink>
              <LoadingLink href="/destinos" className="block px-3 py-2">
                Destinos
              </LoadingLink>
              <LoadingLink href="/paquetes" className="block px-3 py-2">
                Paquetes
              </LoadingLink>
              <LoadingLink href="/contacto" className="block px-3 py-2">
                Contacto
              </LoadingLink>
              {(() => {
                const { user } = useAuth();
                if (user) {
                  return <NavUser />;
                } else {
                  return (
                    <LoadingLink href="/login" className="block px-3 py-2">
                      Iniciar Sesión
                    </LoadingLink>
                  );
                }
              })()}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
