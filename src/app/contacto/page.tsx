import { Navegacion } from "@/components/comunes/navegacion"
import { PiePagina } from "@/components/comunes/pie-pagina"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <Navegacion />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground">
            <span className="text-primary">Contáctanos</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a planificar tu aventura perfecta en Bolivia. ¡Hablemos!
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Envíanos un mensaje</h2>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          Nombre *
                        </label>
                        <Input id="firstName" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Apellido *
                        </label>
                        <Input id="lastName" placeholder="Tu apellido" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Teléfono
                      </label>
                      <Input id="phone" type="tel" placeholder="+591 123 456 789" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      >
                        <option value="">Selecciona un tema</option>
                        <option value="informacion">Información general</option>
                        <option value="reserva">Hacer una reserva</option>
                        <option value="paquete-personalizado">Paquete personalizado</option>
                        <option value="cancelacion">Cancelación o cambios</option>
                        <option value="reclamo">Reclamo o sugerencia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Mensaje *
                      </label>
                      <Textarea id="message" placeholder="Cuéntanos cómo podemos ayudarte..." rows={5} required />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Información de contacto</h2>
                <p className="text-muted-foreground">
                  También puedes contactarnos directamente a través de estos medios.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Oficina principal</h3>
                        <p className="text-muted-foreground text-sm">
                          Av. 16 de Julio 1234
                          <br />
                          La Paz, Bolivia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Teléfonos</h3>
                        <p className="text-muted-foreground text-sm">
                          +591 2 123 4567 (Oficina)
                          <br />
                          +591 7 890 1234 (WhatsApp)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm">
                          info@descubrebolivia.com
                          <br />
                          reservas@descubrebolivia.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horarios de atención</h3>
                        <p className="text-muted-foreground text-sm">
                          Lunes a Viernes: 8:00 - 18:00
                          <br />
                          Sábados: 9:00 - 15:00
                          <br />
                          Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading font-bold text-lg">Preguntas frecuentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">¿Cuánto tiempo antes debo reservar?</h4>
                    <p className="text-muted-foreground text-sm">
                      Recomendamos reservar con al menos 2 semanas de anticipación, especialmente en temporada alta.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">¿Puedo cancelar mi reserva?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sí, puedes cancelar hasta 48 horas antes sin costo adicional.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">¿Ofrecen tours privados?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sí, ofrecemos tours privados y paquetes personalizados según tus necesidades.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <PiePagina />
    </div>
  )
}
