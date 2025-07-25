import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrialForm } from "@/components/trial-form"
import { CheckCircle, Clock, Users, Shield } from "lucide-react"

export default function PruebaGratisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Prueba Universal Telecom
              <span className="text-orange-500"> 14 Días Gratis</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Descubre por qué más de 2.000 empresas confían en nuestras soluciones de comunicación. Sin compromiso, sin
              permanencia, configuración incluida.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold">14 días completos</h3>
                <p className="text-sm text-gray-600">Acceso total a todas las funcionalidades</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Configuración incluida</h3>
                <p className="text-sm text-gray-600">Nuestros técnicos configuran todo por ti</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Soporte dedicado</h3>
                <p className="text-sm text-gray-600">Equipo técnico especializado durante la prueba</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Sin compromiso</h3>
                <p className="text-sm text-gray-600">Cancela cuando quieras, sin penalizaciones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comienza tu prueba gratuita ahora</h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y un especialista se pondrá en contacto contigo en menos de 2 horas
              </p>
            </div>

            <TrialForm
              service="Prueba Gratuita 14 Días"
              title="Solicitar Prueba Gratuita"
              description="Sin permanencia, sin costes ocultos. Todas las funcionalidades incluidas durante 14 días."
            />
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Qué incluye tu prueba gratuita?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Centralita Virtual Completa</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hasta 10 extensiones incluidas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>1 número local gratuito</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>500 minutos de llamadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>IVR personalizable</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Grabación de llamadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>APP móvil incluida</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Servicios Adicionales</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>WhatsApp Business API (100 mensajes)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Análisis de llamadas con IA</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Chatbot básico incluido</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integraciones CRM</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reportes y analíticas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Migración de datos gratuita</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
