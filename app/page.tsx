import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  BarChart3,
  MessageSquare,
  Bot,
  Headphones,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Comunicaciones Empresariales del Futuro
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  La Plataforma de Comunicación que Tu Empresa Necesita
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Centralita Virtual, WhatsApp Business, Agentes IA y Análisis de Llamadas. Todo integrado en una sola
                  plataforma. Más de 2.000 empresas ya confían en nosotros en 9+ países.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Por qué elegir Universal Telecom?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Configuración en 15 minutos - Sin instalaciones complejas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">IA integrada - Transcripción y análisis automático</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Integraciones CRM - Zoho, HubSpot, Salesforce y más</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Soporte 24/7 - Técnicos especialistas en español</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prueba-gratis">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    Solicitar Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx01-iaFxSiCeGs0unly1YAoBCStrmX4ODg.png"
                alt="Dashboard de comunicaciones empresariales Universal Telecom con centralita virtual, métricas en tiempo real y análisis de llamadas"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Plataforma de Control Unificada</h2>
            <p className="text-xl text-gray-600">
              Gestiona todas tus comunicaciones desde dashboards profesionales e intuitivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* PBX Dashboard */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Dashboard Centralita Virtual</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx01-iaFxSiCeGs0unly1YAoBCStrmX4ODg.png"
                alt="Dashboard centralita virtual con estadísticas de agentes, llamadas y nivel de servicio en tiempo real"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Monitoriza agentes, llamadas activas, estadísticas de servicio y métricas de rendimiento desde un panel
                unificado.
              </p>
            </div>

            {/* Analytics Dashboard */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Análisis Avanzado de Llamadas</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analitica01-bXMtUxOOLaJ1R23FhGJXBjm8ict4Qz.png"
                alt="Dashboard de análisis de llamadas con métricas, gráficos de evolución y clasificaciones automáticas"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Análisis completo con puntuaciones automáticas, evolución temporal y clasificación inteligente de
                llamadas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Métricas en Tiempo Real</h3>
              <p className="text-gray-600">
                Visualiza el estado de tu centralita, agentes activos y estadísticas de llamadas al instante
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Gestión Completa</h3>
              <p className="text-gray-600">
                Administra extensiones, contactos, historial de llamadas y configuraciones desde un solo lugar
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Bot className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">IA Integrada</h3>
              <p className="text-gray-600">
                Análisis automático de sentimientos, transcripciones y evaluación de calidad con inteligencia artificial
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/demo">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Ver Demo Completo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Nuestros Servicios Principales</h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para modernizar las comunicaciones de tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Centralita Virtual */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Centralita Virtual</CardTitle>
                <CardDescription>PBX en la nube profesional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Desde 45€/mes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>6 usuarios incluidos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>IVR personalizable</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Grabación incluida</span>
                  </li>
                </ul>
                <Link href="/centralita-virtual">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Ver Detalles</Button>
                </Link>
              </CardContent>
            </Card>

            {/* WhatsApp Business */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">WhatsApp Business</CardTitle>
                <CardDescription>API oficial de WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Desde 49€/mes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>1.000 conversaciones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Plantillas personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Integración CRM</span>
                  </li>
                </ul>
                <Link href="/whatsapp-api">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Ver Detalles</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Agentes IA */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Agentes IA</CardTitle>
                <CardDescription>Chatbots inteligentes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Desde 89€/mes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>IA conversacional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multicanal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Aprendizaje automático</span>
                  </li>
                </ul>
                <Link href="/agente-ia-chatbot">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Ver Detalles</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Análisis de Llamadas */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Análisis IA</CardTitle>
                <CardDescription>Inteligencia de llamadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Desde 125€/mes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transcripción automática</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Análisis de sentimiento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Métricas avanzadas</span>
                  </li>
                </ul>
                <Link href="/analisis-llamadas-ia">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Ver Detalles</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de Éxito Reales</h2>
            <p className="text-xl text-gray-600">Empresas que ya transformaron su comunicación</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Consultora (50 empleados)</CardTitle>
                    <CardDescription>Servicios profesionales</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Migró de centralita tradicional ahorrando <strong>1.200€/año</strong> en mantenimiento. La integración
                  con HubSpot automatizó el registro de 200+ contactos mensuales.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Ahorro: 1.200€/año</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">E-commerce (25 empleados)</CardTitle>
                    <CardDescription>Comercio electrónico</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  WhatsApp Business API aumentó las ventas un <strong>35%</strong>. Los agentes IA resuelven el 60% de
                  consultas automáticamente, liberando tiempo para ventas complejas.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">+35% ventas</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Clínica Dental (8 líneas)</CardTitle>
                    <CardDescription>Sector salud</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Redujo llamadas perdidas un <strong>40%</strong> con IVR inteligente. El análisis IA identificó
                  patrones de cancelaciones, mejorando la planificación.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">-40% llamadas perdidas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por qué Universal Telecom */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">¿Por qué más de 2.000 empresas nos eligen?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Configuración Rápida</h3>
              <p className="text-gray-600">
                Tu centralita lista en 15 minutos. Sin instalaciones complejas ni hardware.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Bot className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">IA Integrada</h3>
              <p className="text-gray-600">
                Transcripción, análisis y agentes inteligentes incluidos en todos los planes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Soporte 24/7</h3>
              <p className="text-gray-600">
                Técnicos especialistas en español. Respuesta garantizada en menos de 2 horas.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Sin Permanencia</h3>
              <p className="text-gray-600">Cancela cuando quieras. Sin penalizaciones ni costes ocultos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para transformar tu comunicación empresarial?</h2>
            <p className="text-xl opacity-90">
              Únete a más de 2.000 empresas que ya disfrutan de comunicaciones sin límites. Prueba gratis durante 14
              días, sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prueba-gratis">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                  Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                >
                  Solicitar Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
