import {
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  BarChart3,
  MessageSquare,
  Bot,
  Headphones,
  Smartphone,
  Clock,
  Globe,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function WhatsAppAPIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  WhatsApp Business API Oficial
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  WhatsApp Business API para Empresas
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Conecta con tus clientes donde están. API oficial de WhatsApp con integración CRM, plantillas
                  personalizadas y soporte multiagente. Más de 500 empresas ya lo usan.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Por qué WhatsApp Business API?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">2.000M+ usuarios activos - Alcance global garantizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">98% tasa de apertura - 10x más que el email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Integración CRM - Zoho, HubSpot, Salesforce y más</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Configuración en 24h - Sin desarrollo técnico</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prueba-gratis?producto=whatsapp-api">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
                    Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo?producto=whatsapp-api">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-50 bg-transparent"
                  >
                    Solicitar Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">WhatsApp Business</h3>
                      <p className="text-gray-600">API oficial verificada</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-gray-600">Tasa apertura</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">24h</div>
                      <div className="text-sm text-gray-600">Configuración</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Funcionalidades Avanzadas</h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para comunicarte profesionalmente por WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Plantillas Personalizadas</CardTitle>
                <CardDescription>Mensajes pre-aprobados por WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Confirmaciones de pedido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Recordatorios de cita</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Notificaciones de envío</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Promociones y ofertas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Multiagente</CardTitle>
                <CardDescription>Gestión de equipos y asignación</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Múltiples operadores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Asignación automática</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Horarios de trabajo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Métricas por agente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Integración CRM</CardTitle>
                <CardDescription>Conecta con tu sistema actual</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>HubSpot, Salesforce</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Zoho, Pipedrive</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>API personalizada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sincronización automática</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Chatbots Inteligentes</CardTitle>
                <CardDescription>Automatización con IA</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Respuestas automáticas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Flujos conversacionales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Escalado a humano</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Aprendizaje continuo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Analytics Avanzado</CardTitle>
                <CardDescription>Métricas y reportes detallados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tasa de entrega</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tiempo de respuesta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Satisfacción cliente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>ROI por campaña</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Seguridad Empresarial</CardTitle>
                <CardDescription>Cumplimiento y protección</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cifrado end-to-end</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>RGPD compliant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Backup automático</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Auditoría completa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes WhatsApp Business API</h2>
            <p className="text-xl text-gray-600">Elige el plan que mejor se adapte a tu volumen de conversaciones</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Starter */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">49€</div>
                <div className="text-gray-600">/mes</div>
                <CardDescription className="mt-4">Perfecto para pequeñas empresas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>1.000 conversaciones/mes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3 plantillas personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>2 agentes incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integración CRM básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte email</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=whatsapp-api&plan=starter">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Empezar Prueba</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Business */}
            <Card className="relative border-2 border-green-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-1">Más Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Business</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">149€</div>
                <div className="text-gray-600">/mes</div>
                <CardDescription className="mt-4">Ideal para empresas en crecimiento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>5.000 conversaciones/mes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Todo del plan Starter</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>10 plantillas personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>5 agentes incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Chatbots básicos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Analytics avanzado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=whatsapp-api&plan=business">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Empezar Prueba</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Enterprise */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">349€</div>
                <div className="text-gray-600">/mes</div>
                <CardDescription className="mt-4">Para grandes organizaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>15.000 conversaciones/mes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Todo del plan Business</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Plantillas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Agentes ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Chatbots avanzados con IA</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Account Manager dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte 24/7</span>
                  </li>
                </ul>
                <Link href="/demo?producto=whatsapp-api&plan=enterprise">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Contactar Ventas</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              * Conversaciones adicionales: 0,05€ cada una. Sin permanencia ni costes ocultos.
            </p>
            <Link href="/contacto">
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 bg-transparent">
                ¿Necesitas un plan personalizado?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de Uso Reales</h2>
            <p className="text-xl text-gray-600">Cómo nuestros clientes usan WhatsApp Business API</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>Confirmaciones y seguimiento de pedidos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automatiza confirmaciones de pedido, notificaciones de envío y gestiona devoluciones. Aumenta la
                  satisfacción del cliente con comunicación proactiva.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Satisfacción</span>
                    <span className="text-sm font-medium text-green-600">+35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Consultas soporte</span>
                    <span className="text-sm font-medium text-blue-600">-40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Servicios</CardTitle>
                <CardDescription>Recordatorios de citas y confirmaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reduce no-shows con recordatorios automáticos. Permite reprogramación fácil y confirma citas. Perfecto
                  para clínicas, salones y consultorías.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">No-shows</span>
                    <span className="text-sm font-medium text-green-600">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Confirmaciones</span>
                    <span className="text-sm font-medium text-blue-600">+80%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>Campañas y promociones dirigidas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Envía ofertas personalizadas, promociones exclusivas y contenido relevante. Segmenta audiencias y
                  mide el ROI de cada campaña.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tasa apertura</span>
                    <span className="text-sm font-medium text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Conversión</span>
                    <span className="text-sm font-medium text-blue-600">+25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Soporte</CardTitle>
                <CardDescription>Atención al cliente 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Resuelve consultas rápidamente con chatbots inteligentes. Escala a agentes humanos cuando sea
                  necesario. Historial completo de conversaciones.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tiempo respuesta</span>
                    <span className="text-sm font-medium text-green-600">-70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Resolución automática</span>
                    <span className="text-sm font-medium text-blue-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Recursos Humanos</CardTitle>
                <CardDescription>Comunicación interna y externa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comunica con candidatos, programa entrevistas y mantén informados a los empleados. Automatiza
                  procesos de selección y onboarding.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tiempo contratación</span>
                    <span className="text-sm font-medium text-green-600">-45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Satisfacción candidatos</span>
                    <span className="text-sm font-medium text-blue-600">+50%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Inmobiliarias</CardTitle>
                <CardDescription>Gestión de leads y visitas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cualifica leads automáticamente, programa visitas y mantén informados a los clientes sobre nuevas
                  propiedades que coincidan con sus criterios.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Cualificación leads</span>
                    <span className="text-sm font-medium text-green-600">+55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Visitas programadas</span>
                    <span className="text-sm font-medium text-blue-600">+40%</span>
                  </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿Listo para conectar con tus clientes por WhatsApp?
            </h2>
            <p className="text-xl opacity-90">
              Únete a más de 500 empresas que ya usan WhatsApp Business API. Prueba gratis durante 14 días y
              experimenta el poder de la comunicación directa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prueba-\
