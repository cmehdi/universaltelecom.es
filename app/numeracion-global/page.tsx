import { Globe, CheckCircle, ArrowRight, Phone, Shield, BarChart3, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PriceCalculator } from "@/components/price-calculator"
import Link from "next/link"

export default function NumeracionGlobalPage() {
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
                  Presencia global instantánea
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Numeración Global: Tu Presencia Local en 80+ Países
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Números locales y toll-free en más de 80 países. Establece presencia local, mejora la confianza de tus
                  clientes y reduce costes de comunicación internacional.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Por qué elegir numeración global?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Presencia local: Aumenta confianza y conversiones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Reducción de costes: Hasta 80% menos en llamadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Activación inmediata: Números listos en minutos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Gestión centralizada: Un panel para todos los países</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Desde:</div>
                  <div className="text-4xl font-bold text-blue-500">5€</div>
                  <div className="text-sm text-gray-500">por número/mes</div>
                </div>
                <Link href="/contacto?producto=numeracion-global">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Mapa+Mundial+Numeración+Global"
                alt="Mapa mundial numeración global Universal Telecom presencia local internacional"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora de Precios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Calculadora de precios</h2>
            <p className="text-xl text-gray-600">Calcula el coste de tu numeración global con descuentos por volumen</p>
          </div>
          <PriceCalculator />
        </div>
      </section>

      {/* Países y Precios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Precios por región</h2>
            <p className="text-xl text-gray-600">Tarifas competitivas con descuentos por volumen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tier Premium - 5€ */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Premium</CardTitle>
                <CardDescription>Países principales</CardDescription>
                <div className="text-3xl font-bold text-blue-500 mt-4">5€</div>
                <div className="text-sm text-gray-500">por número/mes</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-gray-900">Países incluidos:</div>
                  <div className="text-gray-600">
                    España, Francia, Alemania, Italia, Reino Unido, Países Bajos, Bélgica, Estados Unidos, Canadá
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Números fijos</span>
                    <span className="font-medium">5€/mes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Números móviles</span>
                    <span className="font-medium">5€/mes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tier Europa & Latinoamérica - 9€ */}
            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Europa & LATAM</CardTitle>
                <CardDescription>Mercados emergentes</CardDescription>
                <div className="text-3xl font-bold text-green-500 mt-4">9€</div>
                <div className="text-sm text-gray-500">por número/mes</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-gray-900">Países incluidos:</div>
                  <div className="text-gray-600">
                    Portugal, Suiza, Austria, países nórdicos, México, Brasil, Argentina, Chile, Colombia, Perú
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Números fijos</span>
                    <span className="font-medium">9€/mes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Números móviles</span>
                    <span className="font-medium">9€/mes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tier Asia & Oceanía - 15€ */}
            <Card className="border-2 border-purple-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Asia & Oceanía</CardTitle>
                <CardDescription>Mercados asiáticos</CardDescription>
                <div className="text-3xl font-bold text-purple-500 mt-4">15€</div>
                <div className="text-sm text-gray-500">por número/mes</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-gray-900">Países incluidos:</div>
                  <div className="text-gray-600">
                    Australia, Japón, Singapur, Hong Kong, Nueva Zelanda, Corea del Sur, Taiwán, Tailandia, Malasia,
                    Filipinas
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Números fijos</span>
                    <span className="font-medium">15€/mes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Números móviles</span>
                    <span className="font-medium">15€/mes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tier Especiales - 25€ */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Especiales</CardTitle>
                <CardDescription>Países premium</CardDescription>
                <div className="text-3xl font-bold text-orange-500 mt-4">25€</div>
                <div className="text-sm text-gray-500">por número/mes</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-gray-900">Países incluidos:</div>
                  <div className="text-gray-600">
                    Sudáfrica, India, Israel, Emiratos Árabes Unidos, Arabia Saudí, Turquía
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Números fijos</span>
                    <span className="font-medium">25€/mes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Números móviles</span>
                    <span className="font-medium">25€/mes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Números Toll-Free */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Números Toll-Free (Gratuitos)</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-blue-500 mb-2">15€</div>
                  <div className="text-sm text-gray-500 mb-4">por número/mes</div>
                  <div className="text-sm text-gray-600">España, Francia, Reino Unido, Alemania, Italia</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-green-500 mb-2">25€</div>
                  <div className="text-sm text-gray-500 mb-4">por número/mes</div>
                  <div className="text-sm text-gray-600">Estados Unidos, Canadá, Australia, Países Bajos</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-purple-500 mb-2">35€</div>
                  <div className="text-sm text-gray-500 mb-4">por número/mes</div>
                  <div className="text-sm text-gray-600">Japón, Singapur, Hong Kong, Suiza</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                * Los números toll-free tienen coste adicional por llamadas entrantes según tarifa del país
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Funcionalidades avanzadas incluidas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Desvío Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Desvío por horarios: Oficina, fuera de horario, festivos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Distribución de llamadas: Round-robin, peso, disponibilidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Failover automático: Backup en caso de no respuesta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Geolocalización: Desvío según origen de llamada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Analytics y Reportes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dashboard en tiempo real: Llamadas activas y estadísticas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Reportes detallados: CDR completos con filtros avanzados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Análisis de origen: Países, ciudades, operadores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Alertas personalizadas: Email/SMS por eventos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Seguridad y Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Listas blancas/negras: Control de números permitidos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Filtros geográficos: Bloqueo por países/regiones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Límites de coste: Alertas y cortes automáticos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Grabación opcional: Cumplimiento normativo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso que generan resultados</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  E-commerce Internacional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Tienda online (50.000 clientes/mes):</strong> Números locales en 15 países principales.
                  Aumento del 40% en conversiones y reducción del 60% en coste de soporte telefónico.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>40% más conversiones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>60% menos coste soporte</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                  </div>
                  SaaS Global
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Plataforma SaaS (10.000 empresas):</strong> Soporte telefónico 24/7 con números locales en
                  cada región. Mejora del 50% en satisfacción del cliente y expansión a 25 países.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>50% más satisfacción</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>25 países activos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  Consultoría Internacional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Consultora (500 clientes):</strong> Presencia local en mercados clave con desvío inteligente
                  por zonas horarias. Aumento del 80% en leads cualificados.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>80% más leads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cobertura 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-orange-600" />
                  </div>
                  Call Center Distribuido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Contact center (200 agentes):</strong> Números locales con distribución inteligente por
                  idiomas y especialización. Reducción del 30% en tiempo de espera.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>30% menos espera</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Routing inteligente</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Descuentos por Volumen */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Descuentos por volumen</h2>
            <p className="text-xl text-gray-600">Ahorra más cuantos más números contrates</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">1-10</div>
                    <div className="text-sm text-gray-500">números</div>
                    <div className="text-lg font-semibold text-blue-500">Precio base</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">11-50</div>
                    <div className="text-sm text-gray-500">números</div>
                    <div className="text-lg font-semibold text-green-500">5% descuento</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">51-100</div>
                    <div className="text-sm text-gray-500">números</div>
                    <div className="text-lg font-semibold text-purple-500">10% descuento</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500">números</div>
                    <div className="text-lg font-semibold text-orange-500">15% descuento</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para expandir tu presencia global?</h2>
            <p className="text-xl opacity-90">
              Establece presencia local en más de 80 países. Números activos en minutos, sin compromisos de permanencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto?producto=numeracion-global">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
              >
                Ver Calculadora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
