import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DemoForm } from "@/components/demo-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Zap } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Demo Personalizada de 30 Minutos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo Universal Telecom puede transformar las comunicaciones de tu empresa. Un especialista te
              mostrará en vivo todas las funcionalidades adaptadas a tus necesidades.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">¿Qué verás en la demo?</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Centralita Virtual en Acción</h3>
                      <p className="text-gray-600">
                        Configuración, gestión de llamadas, IVR inteligente y reportes en tiempo real.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp Business Integrado</h3>
                      <p className="text-gray-600">
                        Gestión unificada de WhatsApp desde tu centralita con plantillas y automatizaciones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Agente IA en Funcionamiento</h3>
                      <p className="text-gray-600">
                        Chatbot inteligente resolviendo consultas y derivando casos complejos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Análisis de Llamadas con IA</h3>
                      <p className="text-gray-600">
                        Transcripciones automáticas, análisis de sentimiento y métricas de calidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Casos de Uso Específicos</h3>
                      <p className="text-gray-600">Ejemplos reales adaptados a tu sector y tamaño de empresa.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">30 Minutos</h3>
                    <p className="text-xs text-gray-600">Duración optimizada</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-4">
                    <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">Especialista Dedicado</h3>
                    <p className="text-xs text-gray-600">Experto en tu sector</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-4">
                    <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">Demo en Vivo</h3>
                    <p className="text-xs text-gray-600">Plataforma real</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué solicitar una demo?</h2>
            <p className="text-xl text-gray-600">Descubre el valor real antes de tomar una decisión</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Personalizada para Ti</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Adaptamos la demo a tu sector, tamaño de empresa y necesidades específicas. No es una presentación
                  genérica.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Casos Reales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Verás ejemplos reales de empresas similares a la tuya y cómo han mejorado sus comunicaciones.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Sin Compromiso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  La demo es completamente gratuita y sin compromiso. Solo queremos mostrarte el potencial de nuestras
                  soluciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
