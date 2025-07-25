import { Wifi, CheckCircle, ArrowRight, Shield, Zap, Globe, Star, Router } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function FibraOpticaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Fibra empresarial con IP fija
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fibra Óptica Empresarial: Conectividad Sin Límites
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fibra óptica simétrica con IP fija incluida. Router profesional e instalación gratuita. La
                  conectividad que tu empresa necesita para crecer sin límites.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Ventajas exclusivas para empresas</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">IP fija incluida: Ideal para servidores y acceso remoto</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Router profesional gratuito: Configuración empresarial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instalación gratuita: Técnicos especializados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Garantía de servicio: SLA empresarial incluido</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto?producto=fibra-optica">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                >
                  Verificar Cobertura
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Fibra+Óptica+Empresarial"
                alt="Instalación fibra óptica empresarial Universal Telecom router profesional IP fija"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes de fibra empresarial</h2>
            <p className="text-xl text-gray-600">
              Velocidad simétrica, IP fija y router incluido. Permanencia 24 meses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 300Mb */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Wifi className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Fibra 300Mb</CardTitle>
                  <CardDescription>Ideal para pequeñas empresas</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">29€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">300Mb simétricos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IP fija incluida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Router profesional gratuito</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Instalación gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Garantía de servicio</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte técnico 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Permanencia 24 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Contratar</Button>
              </CardContent>
            </Card>

            {/* Plan 600Mb */}
            <Card className="relative border-2 border-green-300 hover:border-green-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Fibra 600Mb</CardTitle>
                  <CardDescription>Para empresas en crecimiento</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-500">39€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">600Mb simétricos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IP fija incluida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Router profesional gratuito</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Instalación gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Garantía de servicio premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte técnico prioritario</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Permanencia 24 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Contratar</Button>
              </CardContent>
            </Card>

            {/* Plan 1Gb */}
            <Card className="border-2 border-purple-300 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Fibra 1Gb</CardTitle>
                  <CardDescription>Máximo rendimiento</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">49€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">1Gb simétrico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IP fija incluida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Router profesional premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Instalación gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Garantía de servicio premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte técnico 24/7 dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Permanencia 24 meses</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Contratar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Servicios adicionales</h2>
            <p className="text-xl text-gray-600">Complementa tu fibra con servicios profesionales</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Backup 4G */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Backup 4G</CardTitle>
                <CardDescription>Conectividad de respaldo automática</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">12€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Activación automática en caso de fallo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Router 4G incluido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Configuración transparente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Monitorización 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Añadir</Button>
              </CardContent>
            </Card>

            {/* VPN */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Router className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>VPN Empresarial</CardTitle>
                <CardDescription>Acceso seguro remoto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">6€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Túnel cifrado seguro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Acceso remoto a recursos internos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Configuración en router</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Soporte técnico incluido</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Añadir</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">¿Por qué elegir nuestra fibra empresarial?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Velocidad Simétrica</h3>
              <p className="text-sm text-gray-600">Misma velocidad de subida y bajada</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">IP Fija Incluida</h3>
              <p className="text-sm text-gray-600">Ideal para servidores y acceso remoto</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Router className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Router Profesional</h3>
              <p className="text-sm text-gray-600">Configuración empresarial avanzada</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">SLA Garantizado</h3>
              <p className="text-sm text-gray-600">Compromiso de disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso empresariales</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  Oficinas Remotas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Empresa consultora (3 oficinas):</strong> Conecta todas las sedes con VPN empresarial. Acceso
                  seguro a servidores centrales y backup automático 4G en caso de incidencias.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Conectividad empresarial unificada</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  E-commerce y Hosting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Tienda online (50.000 visitas/mes):</strong> IP fija para hosting propio, velocidad simétrica
                  para subida rápida de contenido y backup 4G para garantizar disponibilidad 24/7.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Disponibilidad garantizada</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para la fibra empresarial?</h2>
            <p className="text-xl opacity-90">
              IP fija, router profesional e instalación gratuita. La conectividad que tu empresa necesita para crecer
              sin límites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto?producto=fibra-optica">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
              >
                Verificar Cobertura
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
