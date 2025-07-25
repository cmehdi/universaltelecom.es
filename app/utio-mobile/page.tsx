import { Smartphone, CheckCircle, ArrowRight, Shield, Zap, Globe, Star, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function UtioMobilePage() {
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
                  Solo disponible en España
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Utio Mobile: Tarifas Móviles Sin Complicaciones
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Planes móviles diseñados para empresas que buscan simplicidad y transparencia. Sin permanencias, sin
                  letra pequeña, con la mejor cobertura nacional.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Por qué elegir Utio Mobile?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Cobertura nacional premium con tecnología 4G/5G</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Portabilidad gratuita: Conserva tu número actual</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Facturación empresarial: Una sola factura para todas las líneas
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Gestión online: Panel de control para administrar todas las líneas
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto?producto=utio-mobile">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
                    Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50 bg-transparent"
                >
                  Ver Cobertura
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Utio+Mobile+Dashboard"
                alt="Panel control Utio Mobile Universal Telecom gestión líneas móviles empresariales"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">3 planes, máxima simplicidad</h2>
            <p className="text-xl text-gray-600">Precios sin IVA. Sin permanencias. Sin sorpresas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Esencial */}
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Esencial</CardTitle>
                  <CardDescription>Ideal para uso moderado</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-500">7,5€</div>
                  <div className="text-gray-500">/mes + IVA</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">40GB de datos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Llamadas ilimitadas nacionales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SMS incluidos en bonos adicionales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cobertura 4G/5G nacional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Portabilidad gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Gestión online</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Contratar</Button>
              </CardContent>
            </Card>

            {/* Plan Profesional */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Profesional</CardTitle>
                  <CardDescription>Para empresas activas</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">9,5€</div>
                  <div className="text-gray-500">/mes + IVA</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">100GB de datos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Llamadas ilimitadas nacionales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SMS incluidos en bonos adicionales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cobertura 4G/5G nacional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Portabilidad gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Gestión online avanzada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte prioritario</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Contratar</Button>
              </CardContent>
            </Card>

            {/* Plan Ilimitado */}
            <Card className="border-2 border-purple-300 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Ilimitado</CardTitle>
                  <CardDescription>Sin límites de datos</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">19€</div>
                  <div className="text-gray-500">/mes + IVA</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Datos ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Llamadas ilimitadas nacionales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SMS incluidos en bonos adicionales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cobertura 4G/5G nacional premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Portabilidad gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Gestión online completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte 24/7 dedicado</span>
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
            <p className="text-xl text-gray-600">Personaliza tu línea móvil según tus necesidades</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* eSIM */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>eSIM</CardTitle>
                <CardDescription>Activación digital instantánea</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">10€</div>
                  <div className="text-gray-500">pago único</div>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RduqAH5hBZZGIgsqNDt5UmQX8Snl3f.png"
                  alt="eSIM compatible para nuevas contrataciones, duplicados de SIM y servicio Dual SIM y Dual Ring"
                  width={400}
                  height={100}
                  className="rounded-lg"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Compatible nuevas contrataciones</li>
                  <li>• Duplicados de SIM</li>
                  <li>• Servicio Dual SIM y Dual Ring</li>
                  <li>• Retribución del 8%</li>
                  <li>• No compatible Apple Watch/Samsung</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dual SIM */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Dual SIM</CardTitle>
                <CardDescription>Un número, dos tarjetas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">3€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p7lSWxmySmuWjUzEfDKcYqu2RfbYYC.png"
                  alt="Con el servicio Dual SIM se asocia un mismo número de teléfono a dos SIM"
                  width={400}
                  height={100}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-600">
                  La llamada entra primero en la SIM Principal y luego salta a la Secundaria. Servicio autorrenovable y
                  no prorrateable.
                </p>
              </CardContent>
            </Card>

            {/* Dual Ring */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Dual Ring</CardTitle>
                <CardDescription>Llamadas simultáneas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">3€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gSzb1TCJrkEEjXK2joTlUau4gk6L4Z.png"
                  alt="Con el servicio Dual Ring se asocia un mismo número de teléfono a dos SIM, la llamada entra simultáneamente en ambas tarjetas"
                  width={400}
                  height={100}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-600">
                  La llamada entra simultáneamente en ambas tarjetas. Servicio autorrenovable y no prorrateable.
                </p>
              </CardContent>
            </Card>

            {/* Bono SMS */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Bono 50 SMS</CardTitle>
                <CardDescription>SMS nacionales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">4€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-USmKnezQdB7BjxX1zcIJeXfMv1hvS8.png"
                  alt="50 SMS nacionales. Autorrenovable mensualmente y prorrateable en SMS y cuota según fecha de contratación"
                  width={400}
                  height={100}
                  className="rounded-lg"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 50 SMS nacionales incluidos</li>
                  <li>• Autorrenovable mensualmente</li>
                  <li>• Prorrateable según fecha contratación</li>
                  <li>• Acumulables hasta 3 bonos activos</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ciberseguridad */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Ciberseguridad Móvil</CardTitle>
                <CardDescription>Protección contra phishing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">1€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eWg8axn5dOYDQ6jz3h66odM0QPf1TA.png"
                  alt="Servicio de Ciberseguridad en la red móvil para resolver ataques de Phising, no efectivo para conexiones wifi"
                  width={400}
                  height={100}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-600">
                  Protección en la red móvil contra ataques de phishing. No efectivo para conexiones WiFi. Servicio
                  autorrenovable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cobertura nacional premium</h2>
            <p className="text-xl text-gray-600">La mejor red móvil de España</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">99% Cobertura</h3>
              <p className="text-sm text-gray-600">Territorio nacional</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">5G Ready</h3>
              <p className="text-sm text-gray-600">Máxima velocidad</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Red Segura</h3>
              <p className="text-sm text-gray-600">Protección avanzada</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Calidad Premium</h3>
              <p className="text-sm text-gray-600">Mejor experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para cambiar a Utio Mobile?</h2>
            <p className="text-xl opacity-90">
              Portabilidad gratuita, sin permanencias y con la mejor cobertura nacional. Tu empresa merece una tarifa
              móvil sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto?producto=utio-mobile">
                <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-500 bg-transparent"
              >
                Ver Cobertura
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
