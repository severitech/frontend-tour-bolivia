
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { register } from "@/api/auth";

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    password_confirm: "",
    telefono: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "register-nombre") setForm(f => ({ ...f, nombre: value }));
    else if (id === "register-email") setForm(f => ({ ...f, email: value }));
    else if (id === "register-password") setForm(f => ({ ...f, password: value }));
    else if (id === "register-password_confirm") setForm(f => ({ ...f, password_confirm: value }));
    else if (id === "register-telefono") setForm(f => ({ ...f, telefono: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.password_confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    try {
      await register({
        nombre: form.nombre,
        email: form.email,
        password: form.password,
        password_confirm: form.password_confirm,
        telefono: form.telefono
      });
      setSuccess("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
      setForm({ nombre: "", email: "", password: "", password_confirm: "", telefono: "" });
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Error al registrar usuario");
    }
    setLoading(false);
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Regístrate</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Crea tu cuenta para acceder a todas las funciones
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="register-nombre">Nombre completo</Label>
          <Input id="register-nombre" type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={handleChange} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="register-email">Email</Label>
          <Input id="register-email" type="email" placeholder="m@example.com" value={form.email} onChange={handleChange} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="register-password">Contraseña</Label>
          <Input id="register-password" type="password" value={form.password} onChange={handleChange} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="register-password_confirm">Repetir contraseña</Label>
          <Input id="register-password_confirm" type="password" value={form.password_confirm} onChange={handleChange} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="register-telefono">Teléfono</Label>
          <Input id="register-telefono" type="text" placeholder="Tu teléfono" value={form.telefono} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Registrando..." : "Registrarse"}
        </Button>
        {error && <div className="text-red-500 text-center text-sm">{error}</div>}
        {success && <div className="text-green-600 text-center text-sm">{success}</div>}
      </div>
    </form>
  );
}
