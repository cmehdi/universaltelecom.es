import { MessageSquare, CheckCircle, ArrowRight, Zap, BarChart3, Shield, Code, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ApiSmsPage() {
  const messageId = "msg_123456" // Declare the messageId variable

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
                  API REST para desarrolladores
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  API SMS: Envío Masivo Inteligente
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  API REST robusta para envío masivo de SMS. Integra notificaciones SMS en tu aplicación, CRM o sistema
                  con máxima fiabilidad y entregabilidad garantizada.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">¿Por qué elegir nuestra API SMS?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Entregabilidad superior al 99%: Conexión directa con operadores
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Velocidad de envío: Hasta 1.000 SMS/segundo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Cobertura global: 200+ países con tarifas competitivas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Documentación completa: Integración en minutos</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Desde:</div>
                  <div className="text-4xl font-bold text-blue-500">0,045€</div>
                  <div className="text-sm text-gray-500">por SMS nacional</div>
                </div>
                <Link href="/contacto?producto=api-sms">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=API+SMS+Dashboard"
                alt="Panel control API SMS Universal Telecom envío masivo estadísticas tiempo real"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">API completa para todas tus necesidades</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Envío Individual y Masivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SMS individuales: Notificaciones transaccionales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Envío masivo: Hasta 100.000 SMS en una llamada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Programación: Envía en fecha y hora específica</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Personalización: Variables dinámicas por destinatario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Tracking y Analíticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Estado en tiempo real: Enviado, entregado, fallido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Webhooks: Recibe notificaciones de estado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Reportes detallados: Estadísticas por campaña</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Análisis de entregabilidad: Optimiza tus envíos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Integración Sencilla</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>REST API: Estándar HTTP con JSON</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SDKs disponibles: PHP, Python, Node.js, C#</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Documentación interactiva: Prueba desde el navegador</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sandbox gratuito: Pruebas sin coste</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentación Técnica */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Documentación técnica completa</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para integrar SMS en tu aplicación</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ejemplo de Código */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ejemplo de integración</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Envío de SMS - JavaScript
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                    <pre>{`// Envío individual
const response = await fetch('https://api.universaltelecom.es/sms/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+34600123456',
    message: 'Hola, este es un SMS de prueba',
    from: 'TuEmpresa'
  })
});

const result = await response.json();
console.log('SMS enviado:', result.messageId);

// Envío masivo
const bulkResponse = await fetch('https://api.universaltelecom.es/sms/bulk', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messages: [
      {
        to: '+34600123456',
        message: 'Hola {{name}}, tu pedido está listo',
        variables: { name: 'Juan' }
      },
      {
        to: '+34600789012',
        message: 'Hola {{name}}, tu pedido está listo',
        variables: { name: 'María' }
      }
    ],
    from: 'TuEmpresa'
  })
});`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Endpoints Principales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Endpoints principales</h3>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">POST /sms/send</CardTitle>
                  <CardDescription>Envío de SMS individual</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <strong>Parámetros:</strong>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>
                        • <code>to</code>: Número destino (formato E.164)
                      </li>
                      <li>
                        • <code>message</code>: Texto del mensaje (máx. 160 chars)
                      </li>
                      <li>
                        • <code>from</code>: Remitente (opcional)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">POST /sms/bulk</CardTitle>
                  <CardDescription>Envío masivo de SMS</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <strong>Parámetros:</strong>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>
                        • <code>messages</code>: Array de mensajes
                      </li>
                      <li>
                        • <code>from</code>: Remitente común
                      </li>
                      <li>
                        • <code>schedule</code>: Programación (opcional)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GET /sms/status/{messageId}</CardTitle>
                  <CardDescription>Consultar estado de SMS</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <strong>Respuesta:</strong>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>
                        • <code>status</code>: sent, delivered, failed
                      </li>
                      <li>
                        • <code>timestamp</code>: Fecha y hora
                      </li>
                      <li>
                        • <code>cost</code>: Coste del SMS
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* SDKs Disponibles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">SDKs oficiales disponibles</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-2">JavaScript/Node.js</h4>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    npm install
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Python</h4>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    pip install
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">PHP</h4>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    composer install
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">C# / .NET</h4>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    NuGet install
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Precios transparentes por volumen</h2>
            <p className="text-xl text-gray-600">Sin costes de setup. Sin mínimos. Paga solo lo que uses.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">SMS Nacionales</CardTitle>
                <CardDescription>España y territorios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">1 - 10.000 SMS</span>
                    <span className="font-bold text-blue-500">0,045€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">10.001 - 50.000 SMS</span>
                    <span className="font-bold text-blue-500">0,040€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">50.001 - 100.000 SMS</span>
                    <span className="font-bold text-blue-500">0,035€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">+100.000 SMS</span>
                    <span className="font-bold text-blue-500">0,030€</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">SMS Internacionales</CardTitle>
                <CardDescription>200+ países disponibles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Europa (UE)</span>
                    <span className="font-bold text-green-500">0,055€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">América del Norte</span>
                    <span className="font-bold text-green-500">0,065€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">América Latina</span>
                    <span className="font-bold text-green-500">0,075€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Resto del mundo</span>
                    <span className="font-bold text-green-500">0,085€</span>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Ver Todos los Países</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Necesitas volúmenes superiores a 1 millón de SMS/mes?</p>
            <Button variant="outline" size="lg">
              Solicitar Tarifa Personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso que impulsan resultados</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  Autenticación y Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Fintech (50.000 usuarios):</strong> Códigos OTP para autenticación de dos factores. Entrega
                  instantánea con 99.9% de fiabilidad. Reducción del 80% en fraudes.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">99.9% entregabilidad OTP</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                  </div>
                  Marketing y Promociones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Retail (100.000 clientes):</strong> Campañas promocionales segmentadas con personalización.
                  Tasa de apertura del 95% vs 20% del email. ROI 400% superior.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">95% tasa de apertura</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  Notificaciones Transaccionales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>E-commerce (10.000 pedidos/mes):</strong> Confirmaciones de pedido, actualizaciones de envío y
                  notificaciones de entrega. Mejora del 40% en satisfacción del cliente.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">40% mejora satisfacción</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  Recordatorios y Citas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Clínica dental (500 citas/mes):</strong> Recordatorios automáticos 24h antes de la cita.
                  Reducción del 60% en no-shows y optimización de agenda.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">60% menos no-shows</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Webhooks y Automatización */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Webhooks y automatización avanzada</h2>
            <p className="text-xl text-gray-600">Recibe notificaciones en tiempo real del estado de tus SMS</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Configuración de Webhooks</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Ejemplo de Webhook</CardTitle>
                  <CardDescription>Recibe notificaciones automáticas de estado</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                    <pre>{`// Configurar webhook
const webhook = await fetch('https://api.universaltelecom.es/webhooks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://tu-app.com/webhook/sms',
    events: ['sms.delivered', 'sms.failed'],
    secret: 'tu_secreto_webhook'
  })
});

// Tu endpoint recibirá:
{
  "event": "sms.delivered",
  "messageId": "msg_123456",
  "to": "+34600123456",
  "status": "delivered",
  "timestamp": "2024-01-15T10:30:00Z",
  "cost": 0.045
}`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Eventos disponibles</h3>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">sms.sent</div>
                        <div className="text-sm text-gray-600">SMS enviado al operador</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">sms.delivered</div>
                        <div className="text-sm text-gray-600">SMS entregado al destinatario</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">sms.failed</div>
                        <div className="text-sm text-gray-600">Error en la entrega</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">sms.expired</div>
                        <div className="text-sm text-gray-600">SMS expirado sin entregar</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Listo para integrar SMS en tu aplicación?</h2>
            <p className="text-xl opacity-90">
              API robusta, documentación completa y soporte técnico especializado. Comienza a enviar SMS en minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto?producto=api-sms">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
              >
                Ver Documentación
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
