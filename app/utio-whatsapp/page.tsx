import { MessageCircle, CheckCircle, ArrowRight, Bot, Zap, Users, BarChart3, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function UtioWhatsAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Servicio propio de Universal Telecom
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Utio WhatsApp: La API de WhatsApp Business Que Necesitas
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nuestro servicio propio de WhatsApp Business API te permite integrar WhatsApp directamente en tu
                  centralita virtual, CRM o aplicación. Conversaciones unificadas, automatización inteligente y máximo
                  control.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Por qué Utio WhatsApp es diferente?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Integración nativa con centralita virtual: Un solo panel para todo
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">API propia: Sin dependencias de terceros, máxima estabilidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Soporte técnico directo: Nuestro equipo, nuestra responsabilidad
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Precios transparentes: Sin comisiones ocultas por mensaje</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto?producto=utio-whatsapp">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
                    Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50 bg-transparent"
                >
                  Ver Documentación API
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Utio+WhatsApp+Dashboard"
                alt="Panel control Utio WhatsApp Universal Telecom conversaciones unificadas API WhatsApp Business"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Funcionalidades que marcan la diferencia</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Conversaciones Unificadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Panel único: WhatsApp, llamadas y emails en un solo lugar</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Historial completo: Toda la conversación con el cliente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Asignación automática: Deriva a agentes según criterios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Etiquetas inteligentes: Organiza conversaciones automáticamente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Automatización Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Respuestas automáticas: Fuera de horario y primeros contactos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Chatbots avanzados: Integración con nuestro Agente IA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Flujos personalizados: Crea secuencias según tu negocio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Escalado inteligente: Deriva a humano cuando es necesario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>API Completa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Envío masivo: Campañas y notificaciones automáticas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Webhooks en tiempo real: Recibe eventos instantáneamente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multimedia completo: Texto, imágenes, documentos, audio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Plantillas aprobadas: Gestión completa de templates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes que se adaptan a tu volumen</h2>
            <p className="text-xl text-gray-600">Sin costes de setup. Paga solo por los mensajes que envíes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Starter */}
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Starter</CardTitle>
                  <CardDescription>Ideal para pequeñas empresas</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-500">49€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1.000 mensajes incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1 número WhatsApp Business</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Panel web unificado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API básica incluida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Respuestas automáticas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte por email</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-gray-500">Mensajes adicionales: 0,05€/mensaje</div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Empezar</Button>
              </CardContent>
            </Card>

            {/* Plan Business */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Business</CardTitle>
                  <CardDescription>Para empresas en crecimiento</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">149€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5.000 mensajes incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Hasta 3 números WhatsApp Business</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integración con centralita virtual</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API completa con webhooks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Chatbots avanzados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Analíticas detalladas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte prioritario</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-gray-500">Mensajes adicionales: 0,04€/mensaje</div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar</Button>
              </CardContent>
            </Card>

            {/* Plan Enterprise */}
            <Card className="border-2 border-purple-300 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Enterprise</CardTitle>
                  <CardDescription>Volumen alto y personalización</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">A medida</div>
                  <div className="text-gray-500">Consultar</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Mensajes ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Números WhatsApp ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integración personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API dedicada con SLA</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Account Manager dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte 24/7 dedicado</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Contactar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Integración perfecta con tu ecosistema</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  Centralita Virtual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Integración nativa con nuestra centralita virtual. Gestiona llamadas, WhatsApp y emails desde un solo
                  panel. Historial unificado del cliente y transferencias automáticas entre canales.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Panel unificado de comunicaciones</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  Agente IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Conecta con nuestro Agente IA para respuestas automáticas inteligentes. Entiende contexto, accede a tu
                  base de conocimiento y escala a humano cuando es necesario.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Respuestas inteligentes 24/7</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso que transforman negocios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  Atención al Cliente 24/7
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>E-commerce (500 consultas/día):</strong> Chatbot responde consultas básicas automáticamente.
                  Consultas complejas se derivan a agentes humanos con contexto completo. Reducción del 60% en tiempo de
                  respuesta.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">60% reducción tiempo respuesta</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  Notificaciones Automáticas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Clínica dental (200 pacientes/mes):</strong> Recordatorios automáticos de citas,
                  confirmaciones y seguimientos post-tratamiento. Reducción del 40% en no-shows y mejora en
                  satisfacción.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">40% menos no-shows</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para revolucionar tu WhatsApp Business?</h2>
            <p className="text-xl opacity-90">
              Nuestro servicio propio te garantiza máxima estabilidad, soporte directo y precios transparentes. La
              evolución natural de tu comunicación empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto?producto=utio-whatsapp">
                <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-500 bg-transparent"
              >
                Ver Documentación API
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
