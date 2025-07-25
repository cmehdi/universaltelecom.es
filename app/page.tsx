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
  Database,
  Activity,
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
                src="/images/hero-dashboard.png"
                alt="Dashboard de comunicaciones empresariales Universal Telecom con centralita virtual, WhatsApp, IA y análisis"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Dashboard de Control Unificado</h2>
            <p className="text-xl text-gray-600">
              Gestiona todas tus comunicaciones desde una sola plataforma intuitiva
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-t-2xl p-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-b-2xl p-8 shadow-2xl">
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">Inicio</h3>
                  <div className="text-sm text-gray-600">24/07/2025 19:54</div>
                </div>

                {/* Main Metrics */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-teal-500 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Users className="w-8 h-8" />
                        <div>
                          <div className="text-sm opacity-90">Clientes</div>
                          <div className="text-3xl font-bold">474</div>
                          <div className="text-sm opacity-75">● Baja</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm opacity-90">Facturas</div>
                          <div className="text-sm opacity-75">01/06/2025 - 30/06/2025</div>
                          <div className="text-3xl font-bold">€18,151.71</div>
                        </div>
                        <BarChart3 className="w-8 h-8" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Database className="w-8 h-8" />
                        <div>
                          <div className="text-sm opacity-90">Dids</div>
                          <div className="text-sm opacity-75 text-teal-400">✓ asignados</div>
                          <div className="text-3xl font-bold text-orange-400">1.239</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts Row */}
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Clientes</h4>
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-300 relative">
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-red-400 border-r-green-500 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Infor'ies</h4>
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-300 relative">
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-400 border-r-green-500 transform rotate-90"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Recargas</h4>
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-300 relative">
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-400 border-r-teal-500 transform rotate-180"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Recargas</h4>
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-300 relative">
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-400 border-r-green-500 transform rotate-270"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Dids</h4>
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-300 relative">
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-400 border-r-green-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Activity */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-red-500" />
                    <h4 className="text-lg font-semibold text-gray-700">Actividad Llamadas (Actual)</h4>
                    <span className="text-sm text-gray-500">24/07/2025 19:54</span>
                  </div>

                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Totales</div>
                      <div className="text-2xl font-bold text-green-600">€334,44</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Contestadas</div>
                      <div className="text-2xl font-bold text-gray-800">29,843</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">No contestadas</div>
                      <div className="text-2xl font-bold text-gray-800">51,352</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Ocupadas</div>
                      <div className="text-2xl font-bold text-gray-800">24,122</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Fallidas</div>
                      <div className="text-2xl font-bold text-gray-800">-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Dashboard real de nuestros clientes - Datos en tiempo real, métricas avanzadas y control total
            </p>
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
