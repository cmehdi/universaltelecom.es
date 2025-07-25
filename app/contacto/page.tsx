"use client"

import { Phone, MessageSquare, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "./contact-form"
import { Navigation } from "@/components/navigation"

export default function ContactoPage() {
  const whatsappNumber = "34951047200"
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa conocer más sobre los servicios de Universal Telecom. ¿Podrían proporcionarme información?",
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header simplificado */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Contacto: Hablemos de Tu Proyecto</h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte a transformar tus comunicaciones. Nuestro equipo de especialistas está
              disponible para acompañarte en cada paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">Formulario de Contacto</CardTitle>
                <CardDescription className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas (horario comercial).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            {/* WhatsApp Destacado */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp Business
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-600">¿Prefieres WhatsApp? Habla directamente con nuestro equipo comercial:</p>
                <div className="text-2xl font-bold text-green-700">+34 951 047 200</div>
                <p className="text-sm text-green-600">Horario: L-V 8:00-20:00 | S 9:00-14:00</p>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Información General */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">comercial@universaltelecom.es</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-gray-600">+34 951 047 200</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <div className="font-medium">Dirección</div>
                    <div className="text-gray-600">
                      Calle Almogia 14, B5 L30
                      <br />
                      29007 Málaga, España
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <div className="font-medium">Horarios de Soporte</div>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>• 24/7 para clientes Plan Total y Empresa</div>
                      <div>• L-V 8:00-20:00 para resto de planes</div>
                      <div>• Emergencias críticas: Siempre disponibles</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garantías de Servicio */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700">Lo que puedes esperar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm">Respuesta en menos de 2 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm">Demo personalizada adaptada a tu sector</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm">Presupuesto sin compromiso en 24 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm">Asesoramiento técnico especializado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 text-sm">Acompañamiento completo en la migración</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accesos Rápidos por Tipo de Consulta */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contacto Directo por Especialidad</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Centralita Virtual</h3>
                <p className="text-sm text-gray-600 mb-4">Consultas sobre PBX en la nube</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        "Hola, me interesa información sobre Centralita Virtual",
                      )}`,
                      "_blank",
                    )
                  }
                >
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp API</h3>
                <p className="text-sm text-gray-600 mb-4">Integración WhatsApp Business</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        "Hola, me interesa información sobre WhatsApp Business API",
                      )}`,
                      "_blank",
                    )
                  }
                >
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Agentes IA</h3>
                <p className="text-sm text-gray-600 mb-4">Chatbots y automatización</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        "Hola, me interesa información sobre Agentes IA y Chatbots",
                      )}`,
                      "_blank",
                    )
                  }
                >
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Soporte Técnico</h3>
                <p className="text-sm text-gray-600 mb-4">Ayuda con servicios actuales</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        "Hola, necesito soporte técnico con mis servicios actuales",
                      )}`,
                      "_blank",
                    )
                  }
                >
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa o Ubicación */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Nuestra Ubicación</CardTitle>
              <CardDescription>Visítanos en nuestras oficinas en Málaga</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Universal Telecom Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Calle Almogia 14, B5 L30
                  <br />
                  29007 Málaga, España
                </p>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/Calle+Almogia+14,+B5+L30,+29007+Málaga,+España",
                      "_blank",
                    )
                  }
                >
                  Ver en Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
