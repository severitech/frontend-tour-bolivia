"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeftFromLine,
  ArrowRightCircleIcon,
  BackpackIcon,
  GalleryVerticalEnd,
} from "lucide-react";
import { LoginForm } from "@/components/login-form";
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
      <div key={`prev-${index}`} className="phrase-out">
        {PHRASES[(index - 1 + PHRASES.length) % PHRASES.length]}
      </div>
      <div key={`cur-${index}`} className="phrase-in">
        {PHRASES[index]}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="login-grid">
      <div className="login-left">
        <div className="overlay-dark" />
        <div className="overlay-gradient" />

        <div className="brand">
          <Link href={`/`}>
            <Button className=" cursor-pointer">
              <ArrowLeftFromLine />
            </Button>
          </Link>
        </div>

        <div className="form-wrapper">
          <div className="form-box">
            <h2 className="form-title">Bienvenido 👋</h2>
            <LoginForm />
          </div>
        </div>

        <div className="union-gradient" />
      </div>

      <div className="login-right">
        <img src="/login.png" alt="Bolivia" className="background-img" />
        <div className="overlay-contrast" />
        <div className="right-content">
          <h3 className="right-title">Descubre Bolivia con nosotros</h3>
          <RotatingPhrases />
          <p className="right-sub">Desde la Amazonía hasta el altiplano ✨</p>

          <div className="chips">
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
  );
}
