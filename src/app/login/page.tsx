"use client";

import { useEffect, useState } from "react";
import { ArrowLeftFromLine } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import "./login.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PHRASES = [
  "Explora el Salar de Uyuni",
  "Camina por la Amazonía boliviana",
  "Prueba la gastronomía andina",
  "Descubre la historia en Potosí",
  "Disfruta del Lago Titicaca",
  "Vive la cultura de La Paz",
  "Reserva experiencias únicas",
];

function RotatingPhrases() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rotating-container">
      <div key={`cur-${index}`} className="phrase-in">
        {PHRASES[index]}
      </div>
    </div>
  );
}

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false);

  // Aplicar clase login-page al body
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  // Decide qué formulario mostrar
  const Formulario = showRegister ? RegisterForm : LoginForm;
  const toggleText = showRegister
    ? "¿Ya tienes cuenta? Inicia sesión"
    : "¿No tienes cuenta? Regístrate";
  const toggleAction = () => setShowRegister((v) => !v);

  return (
    <>
      {/* 📱 Mobile */}
      <div className="grid md:hidden h-dvh">
        <div className="relative flex items-center justify-center">
          <div className="absolute top-4 left-4">
            <Link href="/">
              <Button className="cursor-pointer">
                <ArrowLeftFromLine />
              </Button>
            </Link>
          </div>
          <div className="w-full max-w-md p-6 shadow-lg bg-white/80 backdrop-blur-md rounded-xl">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-900">Bienvenido 👋</h2>
            <Formulario />
            <div className="mt-4 text-center">
              <button className="text-blue-600 underline" type="button" onClick={toggleAction}>
                {toggleText}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 💻 Desktop */}
      <div className="hidden md:grid grid-cols-2 h-dvh overflow-hidden">
        <div className="relative flex flex-col items-center justify-center h-full overflow-hidden">
          <div className="overlay-dark" />
          <div className="overlay-gradient" />
          <div className="absolute top-4 left-4">
            <Link href="/">
              <Button className="cursor-pointer">
                <ArrowLeftFromLine />
              </Button>
            </Link>
          </div>
          <div className="relative z-10 flex flex-col items-center form-wrapper">
            <div className="w-full max-w-md form-box">
              <h2 className="form-title">Bienvenido 👋</h2>
              <Formulario />
              <div className="mt-4 text-center">
                <button className="text-blue-600 underline" type="button" onClick={toggleAction}>
                  {toggleText}
                </button>
              </div>
            </div>
          </div>
          <div className="union-gradient" />
        </div>
        <div className="relative w-full h-full overflow-hidden login-right">
          <img src="/login.png" alt="Bolivia" className="absolute inset-0 object-cover w-full h-full" />
          <div className="overlay-contrast" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <h3 className="text-white right-title">Descubre Bolivia con nosotros</h3>
            <RotatingPhrases />
            <p className="right-sub">Desde la Amazonía hasta el altiplano ✨</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4 chips">
              <span className="chip">Cultura</span>
              <span className="chip">Naturaleza</span>
              <span className="chip">Aventura</span>
              <span className="chip">Gastronomía</span>
              <span className="chip">Historia</span>
              <span className="chip">Tradiciones</span>
              <span className="chip">Música</span>
              <span className="chip">Festivales</span>
              <span className="chip">Montañas</span>
              <span className="chip">Amazonía</span>
              <span className="chip">Desiertos</span>
              <span className="chip">Artesanía</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
