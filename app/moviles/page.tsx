import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Smartphone, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MovilesPage() {
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
                  Móviles Empresariales Utio
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Líneas Móviles para Empresas
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tarifas empresariales con datos ilimitados, roaming internacional y gestión centralizada. Perfecto
                  para equipos que necesitan estar siempre conectados.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Ventajas para tu empresa:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Datos ilimitados en España y Europa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Gestión centralizada de todas las líneas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Roaming internacional incluido</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Facturación única empresarial</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#planes">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    Ver Planes <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="#solicitar-sims">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                  >
                    Solicitar SIMs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Gestión Empresarial</h3>
                      <p className="text-gray-600">Control total de tu flota móvil</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">∞</div>
                      <div className="text-sm text-gray-600">Datos ilimitados</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">28</div>
                      <div className="text-sm text-gray-600">Países incluidos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Tarifas */}
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes Móviles Empresariales</h2>
            <p className="text-xl text-gray-600">Tarifas transparentes sin sorpresas ni permanencia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Básico */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">15€</div>
                <div className="text-gray-600">/línea/mes</div>
                <CardDescription className="mt-4">Perfecto para uso moderado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>20 GB datos España</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>5 GB roaming UE</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Llamadas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>SMS ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Red 4G/5G</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plan Profesional */}
            <Card className="relative border-2 border-blue-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Más Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Profesional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">25€</div>
                <div className="text-gray-600">/línea/mes</div>
                <CardDescription className="mt-4">Ideal para equipos activos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Datos ilimitados España</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>25 GB roaming UE</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Todo del plan Básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Velocidad premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plan Enterprise */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">35€</div>
                <div className="text-gray-600">/línea/mes</div>
                <CardDescription className="mt-4">Para grandes organizaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Datos ilimitados global</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Roaming mundial incluido</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Todo del plan Profesional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>IP fija móvil</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Account Manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Servicios Adicionales</h2>
            <p className="text-xl text-gray-600">Personaliza tu plan con servicios extra</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Ciberseguridad</CardTitle>
                <CardDescription>Protección avanzada</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-gray-900">2€</div>
                <div className="text-gray-600">/línea</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Antivirus móvil</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>VPN empresarial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Filtro web</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Dual SIM</CardTitle>
                <CardDescription>Dos números, un dispositivo</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-gray-900">4€</div>
                <div className="text-gray-600">/mes</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Segundo número</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gestión independiente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Facturación separada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Dual Ring</CardTitle>
                <CardDescription>Suena en varios dispositivos</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-gray-900">4€</div>
                <div className="text-gray-600">/mes</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Múltiples dispositivos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Mismo número</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sincronización total</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>eSIM</CardTitle>
                <CardDescription>SIM digital instantánea</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-gray-900">10€</div>
                <div className="text-gray-600">Alta</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Activación inmediata</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sin SIM física</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gestión remota</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de Solicitud */}
      <section id="solicitar-sims" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Solicitar SIMs Empresariales</h2>
              <p className="text-xl text-gray-600">Completa el formulario y te contactaremos en menos de 24 horas</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Información de la Empresa</CardTitle>
                <CardDescription>Datos necesarios para procesar tu solicitud</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de la Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cif" className="block text-sm font-medium text-gray-700 mb-2">
                        CIF/NIF *
                      </label>
                      <input
                        type="text"
                        id="cif"
                        name="cif"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contacto" className="block text-sm font-medium text-gray-700 mb-2">
                        Persona de Contacto *
                      </label>
                      <input
                        type="text"
                        id="contacto"
                        name="contacto"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lineas" className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Líneas *
                      </label>
                      <select
                        id="lineas"
                        name="lineas"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="1-5">1-5 líneas</option>
                        <option value="6-10">6-10 líneas</option>
                        <option value="11-25">11-25 líneas</option>
                        <option value="26-50">26-50 líneas</option>
                        <option value="50+">Más de 50 líneas</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                        Plan Preferido *
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="basico">Básico (15€/línea)</option>
                        <option value="profesional">Profesional (25€/línea)</option>
                        <option value="enterprise">Enterprise (35€/línea)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
                      Comentarios Adicionales
                    </label>
                    <textarea
                      id="comentarios"
                      name="comentarios"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Cuéntanos sobre tus necesidades específicas..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="acepto"
                      name="acepto"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="acepto" className="text-sm text-gray-700">
                      Acepto la{" "}
                      <Link href="/politica-privacidad" className="text-blue-600 hover:underline">
                        política de privacidad
                      </Link>{" "}
                      y el{" "}
                      <Link href="/aviso-legal" className="text-blue-600 hover:underline">
                        aviso legal
                      </Link>
                      *
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">
                    Solicitar SIMs Empresariales
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">¿Por qué elegir Utio Mobile?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Activación Inmediata</h3>
              <p className="text-gray-600">SIMs activas en menos de 2 horas. eSIM disponible al instante.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Cobertura Global</h3>
              <p className="text-gray-600">Red premium en España y roaming en más de 180 países.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Gestión Centralizada</h3>
              <p className="text-gray-600">Portal web para controlar todas las líneas desde un solo lugar.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Sin Permanencia</h3>
              <p className="text-gray-600">Cancela cuando quieras. Sin penalizaciones ni costes ocultos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para modernizar la conectividad de tu empresa?</h2>
            <p className="text-xl opacity-90">
              Únete a cientos de empresas que ya disfrutan de conectividad sin límites. Solicita tus SIMs empresariales
              hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#solicitar-sims">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8">
                  Solicitar SIMs <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
                >
                  Hablar con Experto
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
