import { Code, CheckCircle, ArrowRight, Zap, MessageSquare, Phone, Shield, BarChart3, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function APIsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Suite completa de APIs
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  APIs & Integraciones: La Infraestructura Digital Que Tu Empresa Necesita
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  6 APIs RESTful documentadas, SDKs oficiales y webhooks en tiempo real para integrar comunicaciones
                  avanzadas en tu stack tecnológico. Desde SMS hasta IA conversacional.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Diseñadas para desarrolladores</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">SDKs oficiales</div>
                      <div className="text-sm text-gray-600">JavaScript, Python, PHP, cURL</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">99,9% uptime</div>
                      <div className="text-sm text-gray-600">SLA garantizado</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Webhooks real-time</div>
                      <div className="text-sm text-gray-600">Eventos instantáneos</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">OAuth 2.0 + JWT</div>
                      <div className="text-sm text-gray-600">Seguridad empresarial</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                    Ver Documentación <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/prueba-gratis">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-50 bg-transparent"
                  >
                    Probar APIs Gratis
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=APIs+Dashboard+Universal+Telecom"
                alt="Dashboard APIs Universal Telecom documentación SDKs webhooks tiempo real"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APIs Disponibles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Suite completa de 6 APIs</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para integrar comunicaciones avanzadas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SMS API */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">SMS API</CardTitle>
                <CardDescription>Envío masivo y transaccional de SMS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Envío masivo</span>
                    <span className="font-medium">0,045€/SMS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">SMS Premium</span>
                    <span className="font-medium">0,08€/SMS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Delivery reports</span>
                    <span className="font-medium text-green-600">Incluido</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 180+ países cubiertos</li>
                  <li>✓ Templates personalizables</li>
                  <li>✓ Programación de envíos</li>
                  <li>✓ Listas negras automáticas</li>
                </ul>
                <Link href="/api-sms">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Ver Documentación</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Voice API */}
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Voice API</CardTitle>
                <CardDescription>Llamadas programáticas e IVR</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Llamadas salientes</span>
                    <span className="font-medium">0,12€/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">IVR avanzado</span>
                    <span className="font-medium">0,05€/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">TTS (Text-to-Speech)</span>
                    <span className="font-medium text-green-600">Incluido</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Grabación automática</li>
                  <li>✓ Detección de contestador</li>
                  <li>✓ Transferencias inteligentes</li>
                  <li>✓ Métricas en tiempo real</li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Ver Documentación</Button>
              </CardContent>
            </Card>

            {/* WhatsApp API */}
            <Card className="border-2 border-gray-200 hover:border-emerald-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">WhatsApp API</CardTitle>
                <CardDescription>Integración WhatsApp Business oficial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mensajes template</span>
                    <span className="font-medium">0,055€/msg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conversaciones</span>
                    <span className="font-medium">0,09€/24h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Media (imagen/audio)</span>
                    <span className="font-medium text-green-600">Incluido</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Templates pre-aprobados</li>
                  <li>✓ Botones interactivos</li>
                  <li>✓ Lista de productos</li>
                  <li>✓ Webhook delivery status</li>
                </ul>
                <Link href="/whatsapp-api">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Ver Documentación</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Verification API */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Verification API</CardTitle>
                <CardDescription>OTP y verificación de números</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Verificación SMS</span>
                    <span className="font-medium">0,08€/intento</span>
                  </div>
                  <div className="flex justify-between items-children">
                    <span className="text-sm text-gray-600">Verificación voz</span>
                    <span className="font-medium">0,12€/intento</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">WhatsApp OTP</span>
                    <span className="font-medium">0,045€/intento</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ PIN personalizables</li>
                  <li>✓ Templates multiidioma</li>
                  <li>✓ Fraud detection</li>
                  <li>✓ Retry automático</li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Ver Documentación</Button>
              </CardContent>
            </Card>

            {/* Analytics API */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Analytics API</CardTitle>
                <CardDescription>IA y análisis conversacional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Transcripción IA</span>
                    <span className="font-medium">0,15€/min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Análisis sentimiento</span>
                    <span className="font-medium">0,05€/llamada</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Keywords extraction</span>
                    <span className="font-medium text-green-600">Incluido</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Speaker diarization</li>
                  <li>✓ Score de calidad automático</li>
                  <li>✓ Compliance detection</li>
                  <li>✓ Reportes personalizables</li>
                </ul>
                <Link href="/analisis-llamadas-ia">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Ver Documentación</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Numbers API */}
            <Card className="border-2 border-gray-200 hover:border-indigo-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Numbers API</CardTitle>
                <CardDescription>Numeración global programática</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Números locales</span>
                    <span className="font-medium">5€-25€/mes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Toll-free</span>
                    <span className="font-medium">45€/mes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Portabilidad</span>
                    <span className="font-medium text-green-600">Gratuita</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 80+ países disponibles</li>
                  <li>✓ Búsqueda por patrón</li>
                  <li>✓ Activación instantánea</li>
                  <li>✓ Desvíos programables</li>
                </ul>
                <Link href="/numeracion-global">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">Ver Documentación</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ejemplos de Código */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ejemplos de código</h2>
            <p className="text-xl text-gray-600">Integra nuestras APIs en minutos, no semanas</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="php">PHP</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>

              <TabsContent value="javascript" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enviar SMS con JavaScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`// Instalar SDK: npm install @universaltelecom/sms-api

import { UniversalTelecomSMS } from '@universaltelecom/sms-api';

const smsClient = new UniversalTelecomSMS({
  apiKey: 'your-api-key',
  environment: 'production' // o 'sandbox'
});

async function sendSMS() {
  try {
    const result = await smsClient.send({
      to: '+34666123456',
      from: 'UniversalTC',
      message: '¡Hola! Tu pedido #12345 está en camino.',
      webhook: 'https://tu-app.com/webhook/sms'
    });
    
    console.log('SMS enviado:', result.messageId);
    console.log('Coste:', result.cost);
  } catch (error) {
    console.error('Error:', error.message);
  }
}`}
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hacer llamada con Voice API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`import { UniversalTelecomVoice } from '@universaltelecom/voice-api';

const voiceClient = new UniversalTelecomVoice({
  apiKey: 'your-api-key'
});

async function makeCall() {
  const call = await voiceClient.create({
    to: '+34666123456',
    from: '+34951047200',
    tts: {
      text: 'Hola, este es un recordatorio de tu cita médica mañana a las 10:00.',
      voice: 'es-ES-ElviraNeural',
      speed: 1.0
    },
    webhook: 'https://tu-app.com/webhook/call'
  });
  
  console.log('Llamada iniciada:', call.sid);
}`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="python" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enviar SMS con Python</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`# Instalar SDK: pip install universaltelecom-sms

from universaltelecom.sms import SMSClient

client = SMSClient(
    api_key='your-api-key',
    environment='production'
)

def send_sms():
    try:
        response = client.send(
            to='+34666123456',
            sender='UniversalTC',
            message='¡Tu pedido #12345 está en camino!',
            webhook='https://tu-app.com/webhook/sms'
        )
        
        print(f"SMS enviado: {response.message_id}")
        print(f"Coste: {response.cost}€")
        
    except Exception as e:
        print(f"Error: {e}")

send_sms()`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="php" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enviar SMS con PHP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`<?php
// Instalar SDK: composer require universaltelecom/sms-api

require_once 'vendor/autoload.php';

use UniversalTelecom\\SMS\\SMSClient;

$client = new SMSClient([
    'api_key' => 'your-api-key',
    'environment' => 'production'
]);

try {
    $response = $client->send([
        'to' => '+34666123456',
        'from' => 'UniversalTC',
        'message' => '¡Tu pedido #12345 está en camino!',
        'webhook' => 'https://tu-app.com/webhook/sms'
    ]);
    
    echo "SMS enviado: " . $response->messageId . "\\n";
    echo "Coste: " . $response->cost . "€\\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}
?>`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curl" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enviar SMS con cURL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`curl -X POST https://api.universaltelecom.es/v1/sms \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+34666123456",
    "from": "UniversalTC",
    "message": "¡Tu pedido #12345 está en camino!",
    "webhook": "https://tu-app.com/webhook/sms"
  }'

# Respuesta:
{
  "message_id": "msg_12345abc",
  "status": "sent",
  "cost": 0.045,
  "currency": "EUR",
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Verificar número con OTP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`# Iniciar verificación
curl -X POST https://api.universaltelecom.es/v1/verify \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+34666123456",
    "brand": "TuApp",
    "code_length": 6,
    "channel": "sms"
  }'

# Verificar código
curl -X POST https://api.universaltelecom.es/v1/verify/check \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "request_id": "req_abc123",
    "code": "123456"
  }'`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes flexibles para desarrolladores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Gratis */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Gratis</CardTitle>
                  <CardDescription>Para desarrollo y pruebas</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-500">0€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">100 SMS/mes incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">50 minutos Voice API</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Acceso completo a sandbox</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Documentación completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SDKs oficiales</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte por email</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white">Empezar Gratis</Button>
              </CardContent>
            </Card>

            {/* Plan Professional */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Professional</CardTitle>
                  <CardDescription>Para empresas en crecimiento</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">49€</div>
                  <div className="text-gray-500">/mes</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">10.000 SMS/mes incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">500 minutos Voice API</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">WhatsApp API incluida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Analytics API básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Webhooks ilimitados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte prioritario</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SLA 99,9% uptime</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Ahora</Button>
              </CardContent>
            </Card>

            {/* Plan Enterprise */}
            <Card className="border-2 border-orange-300 hover:border-orange-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Enterprise</CardTitle>
                  <CardDescription>Solución personalizada</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-orange-500">A medida</div>
                  <div className="text-gray-500">Consultar</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Volúmenes personalizados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Todas las APIs incluidas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IP dedicadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Integraciones custom</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Account Manager dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SLA personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Soporte 24/7</span>
                  </li>
                </ul>
                <Link href="/contacto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contactar</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDKs Oficiales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">SDKs oficiales para tu stack</h2>
            <p className="text-xl text-gray-600">Integra nuestras APIs en el lenguaje que prefieras</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">JavaScript/Node.js</h3>
                <p className="text-sm text-gray-600 mb-4">SDK completo para frontend y backend</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">npm install @universaltelecom/sdk</code>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Python</h3>
                <p className="text-sm text-gray-600 mb-4">Compatible con Django, Flask, FastAPI</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">pip install universaltelecom</code>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">PHP</h3>
                <p className="text-sm text-gray-600 mb-4">Laravel, Symfony, WordPress</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">composer require universaltelecom/sdk</code>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">REST API</h3>
                <p className="text-sm text-gray-600 mb-4">Compatible con cualquier lenguaje</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">curl -H "Authorization: Bearer..."</code>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso reales</h2>
            <p className="text-xl text-gray-600">Empresas que ya integran nuestras APIs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  E-commerce con 50.000 pedidos/mes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Integración completa:</strong> SMS de confirmación, WhatsApp para seguimiento, Voice API para
                  encuestas post-venta. Redujo consultas de soporte un 60% automatizando notificaciones.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>APIs usadas:</strong> SMS, WhatsApp, Voice, Analytics
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  Fintech con verificación 2FA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Seguridad máxima:</strong> Verification API para onboarding de usuarios, SMS y Voice como
                  respaldo. 99,7% de verificaciones exitosas con fraud detection integrado.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>APIs usadas:</strong> Verification, SMS, Voice
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  Call Center con 200 agentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Optimización total:</strong> Voice API para llamadas automáticas, Analytics API para evaluar
                  calidad al 100%. Números dinámicos según campañas usando Numbers API.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>APIs usadas:</strong> Voice, Analytics, Numbers, SMS
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="w-4 h-4 text-orange-600" />
                  </div>
                  SaaS internacional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Escalabilidad global:</strong> Numbers API para presencia local en 15 países, WhatsApp para
                  soporte en tiempo real. SMS transaccionales en múltiples idiomas.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>APIs usadas:</strong> Numbers, WhatsApp, SMS, Verification
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              La infraestructura de comunicaciones que tu empresa necesita
            </h2>
            <p className="text-xl opacity-90">
              Más de 500 desarrolladores ya integran nuestras APIs. Documentación completa, SDKs oficiales y soporte
              técnico especializado. Comienza gratis hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                  Ver Documentación <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/prueba-gratis">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Empezar Gratis
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
