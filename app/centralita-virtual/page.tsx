import { Phone, CheckCircle, ArrowRight, Users, Zap, Shield, BarChart3, Headphones, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Centralita Virtual Profesional | PBX en la Nube | Universal Telecom",
  description:
    "Centralita Virtual profesional en la nube. PBX sin hardware, configuración en 15 minutos. Integración CRM, IA avanzada y soporte 24/7. Prueba gratis 14 días.",
  keywords: [
    "centralita virtual",
    "pbx nube",
    "centralita empresarial",
    "sistema telefónico virtual",
    "centralita ip",
    "voip empresarial",
    "telefonía cloud",
    "pbx virtual",
    "sistema telefónico empresarial",
    "centralita telefónica virtual",
  ],
  openGraph: {
    title: "Centralita Virtual Profesional - La PBX del Futuro",
    description:
      "Centralita Virtual sin hardware. Configuración instantánea, integración CRM y IA avanzada. Más de 2.000 empresas confían en nosotros.",
    type: "website",
    images: [
      {
        url: "/images/centralita-virtual-og.jpg",
        width: 1200,
        height: 630,
        alt: "Centralita Virtual Universal Telecom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centralita Virtual Profesional - La PBX del Futuro",
    description: "Centralita Virtual sin hardware. Configuración instantánea, integración CRM y IA avanzada.",
    images: ["/images/centralita-virtual-twitter.jpg"],
  },
  alternates: {
    canonical: "/centralita-virtual",
    languages: {
      "en-US": "/en/virtual-pbx",
      "fr-FR": "/fr/centralita-virtual",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Centralita Virtual",
  description:
    "Sistema telefónico empresarial en la nube con funcionalidades avanzadas, sin necesidad de hardware físico.",
  provider: {
    "@type": "Organization",
    name: "Universal Telecom",
    url: "https://universaltelecom.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Plan Global",
      description: "Centralita virtual perfecta para pequeñas empresas",
      price: "45",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    {
      "@type": "Offer",
      name: "Plan Smart",
      description: "Centralita virtual con IA básica para empresas en crecimiento",
      price: "112.5",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    {
      "@type": "Offer",
      name: "Plan Total",
      description: "La centralita virtual completa con IA avanzada",
      price: "225",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Funcionalidades Centralita Virtual",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Usuarios ilimitados",
          description: "Añade tantos usuarios como necesites sin límites técnicos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grabación de llamadas",
          description: "Grabación automática con almacenamiento seguro en la nube",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integración CRM",
          description: "Integración nativa con Clientify, HubSpot, Odoo, Zoho y más",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: "Empresa de consultoría",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Migró de una centralita tradicional a nuestra centralita virtual ahorrando 1.200€/año en mantenimiento.",
    },
  ],
}

export default function CentralitaVirtualPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header simplificado */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  PBX en la nube profesional
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Centralita Virtual: La PBX del Futuro
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Olvídate del hardware. Abraza la nube. Nuestra centralita virtual elimina la complejidad técnica de
                  los sistemas telefónicos tradicionales y revoluciona la comunicación empresarial.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Ventajas competitivas únicas de nuestra Centralita Virtual
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Configuración en 15 minutos: Tu centralita virtual lista para usar hoy mismo
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Escalabilidad instantánea: Añade usuarios a tu centralita virtual sin límites técnicos
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Integración nativa con CRM: Clientify, HubSpot, Odoo, Zoho y más
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Audio HD garantizado: Calidad superior a líneas tradicionales</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prueba-gratis?producto=centralita-virtual">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo?producto=centralita-virtual">
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
                src="/placeholder.svg?height=600&width=500&text=Dashboard+Centralita+Virtual"
                alt="Panel de control centralita virtual Universal Telecom con métricas en tiempo real"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-20 bg-gray-50" id="planes">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Planes de Centralita Virtual que se adaptan a tu crecimiento
            </h2>
            <p className="text-xl text-gray-600">Sin letra pequeña, sin sorpresas en tu centralita virtual</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Global */}
            <Card className="relative border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Global</CardTitle>
                  <CardDescription>Centralita virtual perfecta para pequeñas empresas</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-orange-500">45€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">6 usuarios incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">500 minutos por usuario</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1 número local gratis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IVR personalizable</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Grabación de llamadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">APP móvil incluida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte 24/7</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=centralita-virtual&plan=global">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Empezar Ahora</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Smart */}
            <Card className="relative border-2 border-purple-300 hover:border-purple-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Smart</CardTitle>
                  <CardDescription>Centralita virtual con IA básica para empresas en crecimiento</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">112,5€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Todo lo del plan Global</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA: Transcripción automática</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA: Resumen de llamadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1.000 minutos por usuario</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integración CRM básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Analíticas avanzadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cola de espera inteligente</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=centralita-virtual&plan=smart">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Empezar Ahora</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Total */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Total</CardTitle>
                  <CardDescription>La centralita virtual completa con IA avanzada</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">225€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Todo lo del plan Smart</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA: Análisis de sentimiento</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integración WhatsApp Business</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Llamadas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">3 números locales incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API REST completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Prioridad soporte técnico</span>
                  </li>
                </ul>
                <Link href="/prueba-gratis?producto=centralita-virtual&plan=total">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Ahora</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-4">Servicios adicionales para tu Centralita Virtual</h3>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
              <div>
                Usuario adicional: <strong>desde 7,5€/mes + IVA</strong>
              </div>
              <div>
                Número adicional: <strong>5€/mes</strong>
              </div>
              <div>
                3 meses grabaciones: <strong>5GB incluidos</strong>
              </div>
              <div>
                Reportes Avanzados: <strong>Incluidos</strong>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
              <p>
                <strong>¿Qué incluye un usuario en tu Centralita Virtual?</strong> Cada usuario tiene acceso completo a
                la centralita virtual: extensión telefónica, app móvil, panel web, grabación de llamadas, integración
                CRM, estadísticas personales y soporte técnico incluido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Integraciones CRM que potencian tu Centralita Virtual
            </h2>
            <p className="text-xl text-gray-600">Conecta tu centralita virtual con las herramientas que ya usas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-orange-500" />
                  CRM y Ventas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Clientify</div>
                    <div className="text-sm text-gray-600">Integración completa con tu CRM español</div>
                  </div>
                  <div>
                    <div className="font-medium">HubSpot</div>
                    <div className="text-sm text-gray-600">Creación de tickets y seguimiento de leads</div>
                  </div>
                  <div>
                    <div className="font-medium">Odoo</div>
                    <div className="text-sm text-gray-600">ERP completo con gestión de llamadas</div>
                  </div>
                  <div>
                    <div className="font-medium">Zoho CRM</div>
                    <div className="text-sm text-gray-600">Registro automático de llamadas y contactos</div>
                  </div>
                  <div>
                    <div className="font-medium">Google Contacts</div>
                    <div className="text-sm text-gray-600">Sincronización automática de contactos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  Herramientas de Productividad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Zapier</div>
                    <div className="text-sm text-gray-600">+500 integraciones disponibles</div>
                  </div>
                  <div>
                    <div className="font-medium">Slack</div>
                    <div className="text-sm text-gray-600">Notificaciones de llamadas perdidas</div>
                  </div>
                  <div>
                    <div className="font-medium">Google Workspace</div>
                    <div className="text-sm text-gray-600">Integración completa con Gmail y Calendar</div>
                  </div>
                  <div>
                    <div className="font-medium">Zendesk</div>
                    <div className="text-sm text-gray-600">Soporte al cliente integrado</div>
                  </div>
                  <div>
                    <div className="font-medium">Make (Integromat)</div>
                    <div className="text-sm text-gray-600">Automatización avanzada de procesos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-green-500" />
                  API REST Completa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Desarrolla integraciones personalizadas con nuestra API documentada. Endpoints para gestión de
                  usuarios, llamadas, grabaciones y análisis de tu centralita virtual.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Ver Documentación API
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de uso reales de nuestra Centralita Virtual
            </h2>
            <p className="text-xl text-gray-600">
              Empresas que ya transformaron su comunicación con nuestra centralita virtual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Empresa de consultoría (25 empleados)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Migró de una centralita tradicional a nuestra centralita virtual ahorrando <strong>1.200€/año</strong>{" "}
                  en mantenimiento. La integración con HubSpot automatizó el registro de 200+ contactos mensuales.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Ahorro: 1.200€/año con centralita virtual</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clínica dental (8 líneas)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Redujo llamadas perdidas un <strong>40%</strong> con IVR inteligente de la centralita virtual. Los
                  recordatorios automáticos vía WhatsApp aumentaron la asistencia un 25%.
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

      {/* Sin letra pequeña */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Sin letra pequeña, sin sorpresas en tu Centralita Virtual
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold">Instalación gratuita</h3>
              <p className="text-sm text-gray-600">Configura tu centralita virtual desde nuestro panel web</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Portabilidad incluida</h3>
              <p className="text-sm text-gray-600">Conserva tus números actuales en la centralita virtual</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Facturación transparente</h3>
              <p className="text-sm text-gray-600">Sin costes ocultos en tu centralita virtual</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold">Soporte incluido</h3>
              <p className="text-sm text-gray-600">Técnicos especialistas en centralita virtual sin coste extra</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿Listo para modernizar tu sistema telefónico con nuestra Centralita Virtual?
            </h2>
            <p className="text-xl opacity-90">
              Únete a las empresas que ya disfrutan de comunicaciones sin límites con nuestra centralita virtual. La
              migración es más fácil de lo que imaginas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo?producto=centralita-virtual">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/prueba-gratis?producto=centralita-virtual">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                >
                  Prueba 14 Días Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
