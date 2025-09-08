"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { login as apiLogin, refresh as apiRefresh, getUser, logout as apiLogout } from "../api/auth";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access = typeof window !== "undefined" ? localStorage.getItem("access") : null;
    if (access) {
      getUser()
        .then(res => setUser(res.data))
        .catch(() => handleLogout());
    }
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await apiLogin(email, password);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      // Obtener datos de usuario actualizados
      const userRes = await getUser();
      setUser(userRes.data);
      return { success: true };
    } catch (err: any) {
      return { success: false, message: "Credenciales inválidas" };
    }
  };

  const handleLogout = () => {
    apiLogout();
    setUser(null);
  };

  // Refrescar token automáticamente
  useEffect(() => {
    const interval = setInterval(async () => {
      const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refresh") : null;
      if (refreshToken) {
        try {
          const res = await apiRefresh(refreshToken);
          localStorage.setItem("access", res.data.access);
        } catch {
          handleLogout();
        }
      }
    }, 1000 * 60 * 10); // cada 10 minutos
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
