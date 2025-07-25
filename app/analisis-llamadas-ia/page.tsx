import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  Headphones,
  TrendingUp,
  FileText,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AnalisisLlamadasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Inteligencia Artificial Avanzada
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Análisis de Llamadas con IA
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transcripción automática, análisis de sentimiento y métricas avanzadas. Convierte cada llamada en
                  datos valiosos para tu negocio con nuestra tecnología de IA.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Funcionalidades principales:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Transcripción automática en tiempo real</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Análisis de sentimiento y emociones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Detección de palabras clave y temas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Reportes automáticos y alertas</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prueba-gratis?producto=analisis-llamadas-ia">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo?producto=analisis-llamadas-ia">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Análisis en Tiempo Real</h3>
                      <p className="text-gray-600">Dashboard interactivo</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">94%</div>
                      <div className="text-sm text-gray-600">Precisión IA</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2.3s</div>
                      <div className="text-sm text-gray-600">Tiempo respuesta</div>
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
              Tecnología de IA que transforma tus llamadas en insights accionables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Transcripción Automática</CardTitle>
                <CardDescription>Convierte voz a texto con 95% de precisión</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tiempo real y post-llamada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Múltiples idiomas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Identificación de hablantes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Análisis de Sentimiento</CardTitle>
                <CardDescription>Detecta emociones y satisfacción del cliente</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Positivo, negativo, neutro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Nivel de frustración</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Satisfacción del cliente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Palabras Clave</CardTitle>
                <CardDescription>Identifica temas y conceptos importantes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Detección automática</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Palabras personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Alertas en tiempo real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Métricas Avanzadas</CardTitle>
                <CardDescription>KPIs y reportes detallados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tiempo de conversación</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Interrupciones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Velocidad de habla</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Alertas Inteligentes</CardTitle>
                <CardDescription>Notificaciones automáticas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cliente insatisfecho</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Oportunidad de venta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Problemas técnicos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Integración CRM</CardTitle>
                <CardDescription>Conecta con tu sistema actual</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Salesforce, HubSpot</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Zoho, Pipedrive</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>API personalizada</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes de Análisis IA</h2>
            <p className="text-xl text-gray-600">Elige el plan que mejor se adapte a tu volumen de llamadas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Básico */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">125€</div>
                <div className="text-gray-600">/mes</div>
                <CardDescription className="mt-4">Perfecto para pequeñas empresas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hasta 500 llamadas/mes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Transcripción automática</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Análisis de sentimiento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reportes básicos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte email</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=analisis-llamadas-ia&plan=basico">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Prueba</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Profesional */}
            <Card className="relative border-2 border-blue-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Más Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Profesional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">245€</div>
                <div className="text-gray-600">/mes</div>
                <CardDescription className="mt-4">Ideal para empresas en crecimiento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hasta 2.000 llamadas/mes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Todo del plan Básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Palabras clave personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Alertas en tiempo real</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integración CRM</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=analisis-llamadas-ia&plan=profesional">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Prueba</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Enterprise */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">495€</div>
                <div className="text-gray-600">/mes</div>
                <CardDescription className="mt-4">Para grandes organizaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Llamadas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Todo del plan Profesional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>IA personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>API completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Account Manager</span>
                  </li>
                </ul>
                <Link href="/demo?producto=analisis-llamadas-ia&plan=enterprise">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Contactar Ventas</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de Uso Reales</h2>
            <p className="text-xl text-gray-600">Cómo nuestros clientes usan el análisis IA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Call Center</CardTitle>
                <CardDescription>Mejora la calidad del servicio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Monitoriza automáticamente la satisfacción del cliente y detecta problemas antes de que escalen.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Satisfacción</span>
                    <span className="text-sm font-medium text-green-600">+25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tiempo resolución</span>
                    <span className="text-sm font-medium text-blue-600">-30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Ventas</CardTitle>
                <CardDescription>Optimiza el proceso comercial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Identifica oportunidades de venta y mejora las técnicas de cierre analizando conversaciones exitosas.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Conversión</span>
                    <span className="text-sm font-medium text-green-600">+40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Oportunidades</span>
                    <span className="text-sm font-medium text-blue-600">+60%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Compliance</CardTitle>
                <CardDescription>Cumplimiento normativo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Asegura el cumplimiento de protocolos y detecta automáticamente incumplimientos normativos.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Cumplimiento</span>
                    <span className="text-sm font-medium text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Alertas</span>
                    <span className="text-sm font-medium text-orange-600">Tiempo real</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para convertir tus llamadas en insights valiosos?</h2>
            <p className="text-xl opacity-90">
              Descubre el poder del análisis IA. Prueba gratis durante 14 días y transforma tu negocio con datos
              accionables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prueba-gratis?producto=analisis-llamadas-ia">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8">
                  Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/demo?producto=analisis-llamadas-ia">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
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
