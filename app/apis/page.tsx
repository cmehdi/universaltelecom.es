import {
  Code,
  CheckCircle,
  ArrowRight,
  Zap,
  MessageSquare,
  Phone,
  Shield,
  BarChart3,
  Volume2,
  FileText,
  Headphones,
} from "lucide-react"
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
                src="/images/apis-dashboard.png"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Suite completa de APIs</h2>
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
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-500">Desde 0,045€</div>
                    <div className="text-sm text-gray-500">por SMS</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 180+ países cubiertos</li>
                  <li>✓ Templates personalizables</li>
                  <li>✓ Programación de envíos</li>
                  <li>✓ Delivery reports incluidos</li>
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
                    <span className="text-sm text-gray-600">TTS</span>
                    <span className="font-medium">0,08€/min</span>
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
                    <span className="text-sm text-gray-600">Cuota mensual</span>
                    <span className="font-medium">10€/mes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Por conversación</span>
                    <span className="font-medium">Desde 0,01€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Webhook "escribiendo"</span>
                    <span className="font-medium text-green-600">Incluido</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Templates pre-aprobados</li>
                  <li>✓ Media (imagen/audio/video)</li>
                  <li>✓ Webhook delivery status</li>
                  <li>✓ Webhook "grabando audio"</li>
                </ul>
                <Link href="/whatsapp-api">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Ver Documentación</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Transcription API */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Transcription API</CardTitle>
                <CardDescription>Transcripción de audio a texto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500">0,008€</div>
                    <div className="text-sm text-gray-500">por minuto</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Múltiples idiomas</li>
                  <li>✓ Identificación de hablantes</li>
                  <li>✓ Timestamps precisos</li>
                  <li>✓ Formato JSON/SRT</li>
                  <li>✓ Procesamiento en tiempo real</li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Ver Documentación</Button>
              </CardContent>
            </Card>

            {/* TTS API */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Text-to-Speech API</CardTitle>
                <CardDescription>Síntesis de voz natural</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">0,08€</div>
                    <div className="text-sm text-gray-500">por minuto</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Voces neurales premium</li>
                  <li>✓ Múltiples idiomas</li>
                  <li>✓ Control de velocidad/tono</li>
                  <li>✓ SSML compatible</li>
                  <li>✓ Formatos MP3/WAV</li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Ver Documentación</Button>
              </CardContent>
            </Card>

            {/* Analytics API */}
            <Card className="border-2 border-gray-200 hover:border-indigo-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Analytics API</CardTitle>
                <CardDescription>IA y análisis conversacional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-500">0,012€</div>
                    <div className="text-sm text-gray-500">por análisis</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Transcripción incluida</li>
                  <li>✓ Análisis de sentimiento</li>
                  <li>✓ Keywords extraction</li>
                  <li>✓ Score de calidad automático</li>
                  <li>✓ Compliance detection</li>
                </ul>
                <Link href="/analisis-llamadas-ia">
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
                    <CardTitle>WhatsApp con webhooks de estado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`import { UniversalTelecomWhatsApp } from '@universaltelecom/whatsapp-api';

const whatsappClient = new UniversalTelecomWhatsApp({
  apiKey: 'your-api-key'
});

// Enviar mensaje con webhook de "escribiendo"
async function sendWithTyping() {
  // Activar indicador "escribiendo"
  await whatsappClient.sendTyping({
    to: '+34666123456',
    duration: 3000 // 3 segundos
  });
  
  // Enviar mensaje
  const result = await whatsappClient.send({
    to: '+34666123456',
    message: 'Hola, ¿en qué puedo ayudarte?',
    webhook: 'https://tu-app.com/webhook/whatsapp'
  });
  
  console.log('Mensaje enviado:', result.messageId);
}

// Webhook para audio grabado
app.post('/webhook/whatsapp', (req, res) => {
  const { type, data } = req.body;
  
  if (type === 'audio_recording_started') {
    console.log('Usuario comenzó a grabar audio');
  }
  
  if (type === 'audio_received') {
    // Transcribir automáticamente
    transcribeAudio(data.audioUrl);
  }
  
  res.status(200).send('OK');
});`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="python" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Transcripción con análisis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`# Instalar SDK: pip install universaltelecom-analytics

from universaltelecom.analytics import AnalyticsClient

client = AnalyticsClient(
    api_key='your-api-key',
    environment='production'
)

def analyze_call_recording(audio_url):
    try:
        # Análisis completo: transcripción + sentimiento
        response = client.analyze_audio(
            audio_url=audio_url,
            include_transcription=True,
            include_sentiment=True,
            include_keywords=True,
            language='es-ES'
        )
        
        print(f"Transcripción: {response.transcription}")
        print(f"Sentimiento: {response.sentiment.score}")
        print(f"Keywords: {response.keywords}")
        print(f"Coste: {response.cost}€")
        
        return response
        
    except Exception as e:
        print(f"Error: {e}")

# Usar con webhook de llamada finalizada
analyze_call_recording('https://recordings.com/call123.wav')`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="php" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Text-to-Speech con PHP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`<?php
// Instalar SDK: composer require universaltelecom/tts-api

require_once 'vendor/autoload.php';

use UniversalTelecom\\TTS\\TTSClient;

$client = new TTSClient([
    'api_key' => 'your-api-key',
    'environment' => 'production'
]);

try {
    $response = $client->synthesize([
        'text' => 'Hola, bienvenido a Universal Telecom. Tu llamada es importante para nosotros.',
        'voice' => 'es-ES-ElviraNeural',
        'speed' => 1.0,
        'format' => 'mp3',
        'webhook' => 'https://tu-app.com/webhook/tts'
    ]);
    
    echo "Audio generado: " . $response->audioUrl . "\\n";
    echo "Duración: " . $response->duration . " segundos\\n";
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
                    <CardTitle>Transcripción con cURL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      {`# Transcribir audio
curl -X POST https://api.universaltelecom.es/v1/transcribe \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "audio_url": "https://example.com/audio.wav",
    "language": "es-ES",
    "include_speakers": true,
    "include_timestamps": true,
    "webhook": "https://tu-app.com/webhook/transcription"
  }'

# Respuesta:
{
  "transcription_id": "trans_12345abc",
  "status": "processing",
  "estimated_duration": "2-3 minutes",
  "cost_estimate": "0.024€"
}

# Análisis completo con transcripción incluida
curl -X POST https://api.universaltelecom.es/v1/analytics/analyze \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "audio_url": "https://example.com/call.wav",
    "include_transcription": true,
    "include_sentiment": true,
    "include_compliance": true
  }'`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Webhooks Avanzados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Webhooks en Tiempo Real</h2>
            <p className="text-xl text-gray-600">Recibe notificaciones instantáneas de todos los eventos</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Eventos WhatsApp Avanzados</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Webhooks de Estado de Conversación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">user_typing</div>
                        <div className="text-sm text-gray-600">Usuario está escribiendo</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">user_recording_audio</div>
                        <div className="text-sm text-gray-600">Usuario grabando nota de voz</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">audio_transcribed</div>
                        <div className="text-sm text-gray-600">Audio transcrito automáticamente</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">message_read</div>
                        <div className="text-sm text-gray-600">Mensaje leído por el usuario</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ejemplo de Webhook</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Procesamiento Automático de Audio</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    {`// Webhook endpoint para WhatsApp
app.post('/webhook/whatsapp', async (req, res) => {
  const { event, data } = req.body;
  
  switch(event) {
    case 'user_recording_audio':
      console.log('Usuario grabando audio...');
      // Mostrar indicador en UI
      break;
      
    case 'audio_received':
      // Transcribir automáticamente
      const transcription = await transcribeAudio({
        audioUrl: data.audioUrl,
        language: 'es-ES'
      });
      
      // Analizar sentimiento
      const sentiment = await analyzeSentiment({
        text: transcription.text
      });
      
      console.log('Audio transcrito:', transcription.text);
      console.log('Sentimiento:', sentiment.score);
      break;
      
    case 'message_delivered':
      updateMessageStatus(data.messageId, 'delivered');
      break;
  }
  
  res.status(200).send('OK');
});`}
                  </pre>
                </CardContent>
              </Card>
            </div>
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
                  Fintech con Transcripción Automática
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Banco digital (10.000 llamadas/mes):</strong> Transcripción automática de llamadas de soporte
                  con análisis de compliance. Detección automática de información sensible y cumplimiento normativo.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">100% compliance automático</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Headphones className="w-4 h-4 text-green-600" />
                  </div>
                  Call Center con IA Conversacional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Soporte técnico (50.000 llamadas/mes):</strong> TTS para respuestas automáticas, transcripción
                  en tiempo real y análisis de sentimiento. Escalado inteligente a agentes humanos.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">70% resolución automática</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-purple-600" />
                  </div>
                  E-commerce con WhatsApp Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Tienda online (25.000 conversaciones/mes):</strong> Webhooks de "escribiendo" para mejor UX,
                  transcripción automática de notas de voz de clientes y respuestas TTS personalizadas.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">45% más engagement</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-orange-600" />
                  </div>
                  Plataforma de Formación Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>EdTech (5.000 estudiantes):</strong> TTS para generar contenido de audio, transcripción de
                  clases grabadas y análisis de sentimiento en feedback de estudiantes.
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">60% más accesibilidad</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDKs Oficiales */}
      <section className="py-20 bg-white">
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
