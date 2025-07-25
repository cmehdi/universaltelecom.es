import { Bot, CheckCircle, ArrowRight, Brain, Zap, Users, BarChart3, Shield, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AgenteIAChatbotPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header simplificado */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Inteligencia artificial conversacional
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Agente IA & Chatbot: Tu Empleado Digital Que Nunca Descansa
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Un chatbot responde preguntas predefinidas. Nuestro Agente IA entiende contexto, aprende de tu base de
                  conocimiento y toma decisiones como un empleado experimentado.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Chatbot o Agente IA? Tú decides el nivel</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-700 mb-2">Chatbot Básico</div>
                    <div className="text-sm text-gray-600">Respuestas programadas y flujos lineales</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <div className="font-medium text-purple-700 mb-2">Agente IA</div>
                    <div className="text-sm text-purple-600">
                      Comprensión natural, aprendizaje continuo y decisiones inteligentes
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prueba-gratis?producto=agente-ia-chatbot">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
                    Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo?producto=agente-ia-chatbot">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-50 bg-transparent"
                  >
                    Solicitar Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Agente+IA+Conversacional"
                alt="Panel control Agente IA Universal Telecom conversaciones análisis sentimiento tiempo real"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Funcionalidades que revolucionan tu atención
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Procesamiento Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transcripción automática: Convierte voz a texto en tiempo real</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Detección de tono: Identifica frustración, satisfacción, urgencia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Análisis de intención: Entiende qué necesita realmente el cliente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Respuesta contextual: Accede a toda tu base de conocimiento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Gestión Automatizada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Creación de tickets: Clasifica y asigna automáticamente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Generación de presupuestos: Calcula precios según parámetros</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Actualización de CRM: Registra interacciones automáticamente</span>
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
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Integración Total</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>CRM nativo: HubSpot, Salesforce, Zoho automático</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Helpdesk: Zendesk, Freshdesk, ServiceNow</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>E-commerce: Shopify, WooCommerce, Magento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>WhatsApp Business: Conversaciones unificadas</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes diseñados para cada necesidad</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Inicio */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Inicio</CardTitle>
                  <CardDescription>Ideal para pequeñas empresas</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">99€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1.000 conversaciones/mes incluidas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Base de conocimiento hasta 50 documentos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integración CRM básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Transcripción automática</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Respuestas por templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Panel de métricas básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte técnico por email</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Empezar Ahora</Button>
              </CardContent>
            </Card>

            {/* Plan Pro */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Pro</CardTitle>
                  <CardDescription>La potencia completa para empresas en crecimiento</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">399€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">10.000 conversaciones/mes incluidas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Base de conocimiento ilimitada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA avanzada: análisis de sentimiento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Generación automática de presupuestos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integración API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Múltiples canales (web, WhatsApp, email)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Reportes avanzados y analíticas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte prioritario 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Ahora</Button>
              </CardContent>
            </Card>

            {/* Plan Empresa */}
            <Card className="border-2 border-orange-300 hover:border-orange-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Empresa</CardTitle>
                  <CardDescription>Solución personalizada para grandes organizaciones</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-orange-500">A medida</div>
                  <div className="text-gray-500">Consultar</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Conversaciones ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA personalizada con tu vocabulario</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integraciones custom vía API</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Múltiples idiomas y dialectos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Compliance y seguridad avanzada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Account Manager dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SLA personalizado</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contactar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso que transforman negocios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  Soporte Técnico Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Empresa SaaS (200 usuarios/día):</strong> El Agente IA resuelve el 70% de consultas
                  automáticamente. Los tickets complejos llegan pre-cualificados con contexto completo, reduciendo
                  tiempo de resolución un 50%.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">70% resolución automática</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  Cualificación de Leads 24/7
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Inmobiliaria premium (50 leads/día):</strong> La IA cualifica leads preguntando presupuesto,
                  zona preferida y urgencia. Los comerciales solo atienden leads con alta probabilidad de cierre.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">50 leads cualificados/día</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  Automatización Post-venta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>E-commerce moda (1.000 pedidos/mes):</strong> Gestiona cambios, devoluciones y consultas de
                  estado automáticamente. Solo escala a humano incidencias complejas.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">1.000 pedidos gestionados</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-orange-600" />
                  </div>
                  Análisis Conversacional Avanzado
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Cada interacción genera datos valiosos: Score de satisfacción automático, detección de palabras clave
                  de tu industria, análisis de tendencias y recomendaciones de mejora.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Insights automáticos</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">ROI demostrable desde el primer mes</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Ahorro en personal</h3>
              <p className="text-sm text-gray-600">1 Agente IA = 2.5 empleados de soporte básico</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Disponibilidad 24/7</h3>
              <p className="text-sm text-gray-600">Sin coste adicional de guardias nocturnas</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Consistencia total</h3>
              <p className="text-sm text-gray-600">Misma calidad de respuesta siempre</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Escalabilidad</h3>
              <p className="text-sm text-gray-600">Atiende 100 o 10.000 consultas sin límites</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">La IA conversacional que tu empresa necesita</h2>
            <p className="text-xl opacity-90">
              No es futuro. Es presente. Mientras otros contratan más personal, tú escalas con inteligencia artificial.
              La ventaja competitiva está en actuar ahora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo?producto=agente-ia-chatbot">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/prueba-gratis?producto=agente-ia-chatbot">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-500 bg-transparent"
                >
                  Prueba 14 Días Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
