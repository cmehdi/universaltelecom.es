import {
  CheckCircle,
  ArrowRight,
  Brain,
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  Star,
  Phone,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agente IA por Voz y Chat | Utio Voice AI + Chatbot Inteligente | Universal Telecom",
  description:
    "Agente IA completo: voz telefónica + chatbot WhatsApp integrados. Desde 29€/mes chatbot, desde 99€/mes voz+chat. Conversación natural en 26 idiomas, integración CRM. Prueba gratis.",
  keywords:
    "agente ia voz, utio voice ai, chatbot ia, agente conversacional, ia telefonica, whatsapp bot, asistente virtual, 26 idiomas, integracion crm",
}

export default function AgenteIAChatbotPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Inteligencia artificial conversacional omnicanal
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Agente IA por Voz y Chat: Tu Empleado Digital Que Nunca Descansa
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Un chatbot responde preguntas predefinidas. Nuestro Agente IA entiende contexto, aprende de tu base de
                  conocimiento y toma decisiones como un empleado experimentado. Por teléfono, WhatsApp, email o web.
                </p>
              </div>

              {/* Utio Voice AI Integration */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Utio Voice AI + Chat: Integración Total</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    No es solo un agente de voz o un chatbot. Es un sistema completo que unifica WhatsApp, email, web
                    chat y <strong>llamadas telefónicas</strong> en una única inteligencia conversacional. El contexto
                    se mantiene entre canales: una conversación por chat puede continuar por teléfono sin perder
                    información.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">📞 Voz Telefónica</div>
                      <div className="text-xs text-gray-600">26 idiomas, sin lag ASR, conversación natural</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">💬 Chat Multicanal</div>
                      <div className="text-xs text-gray-600">WhatsApp, Email, Web integrados</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">🔗 Memoria Compartida</div>
                      <div className="text-xs text-gray-600">Contexto entre todos los canales</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Numbers */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Prueba Utio Voice AI ahora mismo</h3>
                <p className="text-gray-700 mb-4">Llama y habla con nuestro agente de voz en tu idioma:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🇪🇸</span>
                    <div>
                      <div className="font-semibold text-gray-900">Español</div>
                      <a href="tel:+34919893600" className="text-blue-600 hover:underline font-mono">
                        +34 919 893 600
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <div className="font-semibold text-gray-900">English</div>
                      <a href="tel:+447520640309" className="text-blue-600 hover:underline font-mono">
                        +44 7520 640 309
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🇫🇷</span>
                    <div>
                      <div className="font-semibold text-gray-900">Français</div>
                      <a href="tel:+33948458102" className="text-blue-600 hover:underline font-mono">
                        +33 9 48 45 81 02
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prueba-gratis?producto=agente-ia-chatbot">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
                    Prueba 14 Días Gratis <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo?producto=agente-ia-chatbot">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-50 bg-transparent"
                  >
                    Solicitar Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/utcom5-GfKwa8rtVOOGJgJcVA79wOiBBWojMb.png"
                alt="Panel control Utio Voice AI y Chatbot con métricas de rendimiento y automatización omnicanal"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Funcionalidades que revolucionan tu atención
            </h2>
            <p className="text-xl text-gray-600">Conversación natural por voz y chat con IA avanzada</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Procesamiento Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transcripción automática: Convierte voz a texto en tiempo real</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Detección de tono: Identifica frustración, satisfacción, urgencia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Análisis de intención: Entiende qué necesita realmente el cliente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Respuesta contextual: Accede a toda tu base de conocimiento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Gestión Automatizada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Creación de tickets: Clasifica y asigna automáticamente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Generación de presupuestos: Calcula precios según parámetros</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Actualización de CRM: Registra interacciones automáticamente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Escalado inteligente: Deriva a humano cuando es necesario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Integración Total</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>CRM nativo: HubSpot, Salesforce, Zoho automático</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Helpdesk: Zendesk, Freshdesk, ServiceNow</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>E-commerce: Shopify, WooCommerce, Magento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>WhatsApp Business: Conversaciones unificadas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Utio Voice AI Card */}
            <Card className="md:col-span-3 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">🚀 Utio Voice AI: Características Destacadas</CardTitle>
                <CardDescription>Conversaciones telefónicas naturales con IA de última generación</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧠 Conversación en tiempo real</div>
                    <div className="text-xs text-gray-600">Sin ASR-lag, fluidez natural como humano</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🌍 Multilingüe: 26 idiomas</div>
                    <div className="text-xs text-gray-600">Español, inglés, francés, árabe, alemán y más</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🔗 Integración con sistemas externos</div>
                    <div className="text-xs text-gray-600">API para CRM, ERP, ticketing en tiempo real</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🛠 Ejecución de funciones</div>
                    <div className="text-xs text-gray-600">Consulta datos, envía presupuestos, abre tickets</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🎭 Clonado de voz personalizado</div>
                    <div className="text-xs text-gray-600">Tu marca, tu voz única</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧾 Transcripciones y grabaciones</div>
                    <div className="text-xs text-gray-600">Automáticas con resúmenes inteligentes</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🔄 Memoria conversacional</div>
                    <div className="text-xs text-gray-600">Entre llamadas y canales</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">📞 Compatible con telefonía</div>
                    <div className="text-xs text-gray-600">Extensiones, numeraciones, SIP, WebRTC</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧰 SDKs y Webhooks</div>
                    <div className="text-xs text-gray-600">Integración total con tus sistemas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planes flexibles para cada canal</h2>
            <p className="text-xl text-gray-600">Chatbot solo, Voz+Chat, o integración completa multicanal</p>
          </div>

          {/* Chatbot Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              💬 Agente Chatbot (WhatsApp, Email, Web)
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Chatbot Starter */}
              <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Chatbot Starter</CardTitle>
                    <CardDescription>Ideal para empezar con IA conversacional</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-500">29€</div>
                    <div className="text-gray-500">/mes</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">1.000 conversaciones/mes incluidas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0.05€ por conversación adicional</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">WhatsApp, Email, Web chat</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Base de conocimiento básica</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Integración CRM básica</span>
                    </li>
                  </ul>
                  <Link href="/prueba-gratis?plan=chatbot-starter">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Empezar Ahora</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Chatbot Pro */}
              <Card className="border-2 border-green-300 hover:border-green-400 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white">Chat Recomendado</Badge>
                </div>
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Chatbot Pro</CardTitle>
                    <CardDescription>Para empresas con alto volumen</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-500">99€</div>
                    <div className="text-gray-500">/mes</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">5.000 conversaciones/mes incluidas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0.05€ por conversación adicional</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Todos los canales + APIs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Base de conocimiento ilimitada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Análisis de sentimiento IA</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Integraciones avanzadas CRM</span>
                    </li>
                  </ul>
                  <Link href="/prueba-gratis?plan=chatbot-pro">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Empezar Ahora</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">¿Necesitas Voz?</CardTitle>
                    <CardDescription>Combina chatbot + agente de voz</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-700">
                    Los planes de <strong>Utio Voice AI</strong> incluyen automáticamente un chatbot con 1.000
                    conversaciones integrado.
                  </div>
                  <div className="text-sm text-gray-700">
                    Ideal si necesitas atención telefónica automatizada además de chat.
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                  >
                    Ver Planes Voice AI ↓
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Voice AI Plans */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📞 Utio Voice AI (Telefonía + Chatbot 1.000 conversaciones incluido)
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Voice AI Basic */}
              <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Voice AI Basic</CardTitle>
                    <CardDescription>Incluye chatbot con 1.000 conversaciones</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-500">99€</div>
                    <div className="text-gray-500">/mes</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">200 minutos de voz/mes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0.15€ por minuto adicional</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Chatbot: 1.000 conversaciones incluidas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">26 idiomas soportados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Transcripciones automáticas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Integración telefonía SIP, WebRTC</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Memoria conversacional entre canales</span>
                    </li>
                  </ul>
                  <Link href="/prueba-gratis?plan=voice-basic">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Ahora</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Voice AI Pro */}
              <Card className="relative border-2 border-blue-400 hover:border-blue-500 transition-colors">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Voz Más Popular</Badge>
                </div>
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Voice AI Pro</CardTitle>
                    <CardDescription>Incluye chatbot con 1.000 conversaciones</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-500">295€</div>
                    <div className="text-gray-500">/mes</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">2.000 minutos de voz/mes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0.15€ por minuto adicional</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Chatbot: 1.000 conversaciones incluidas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Todo de Voice AI Basic +</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Clonado de voz personalizado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Integraciones API avanzadas (CRM, ERP)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Ejecución de funciones en tiempo real</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SDKs y Webhooks incluidos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Soporte prioritario 24/7</span>
                    </li>
                  </ul>
                  <Link href="/prueba-gratis?plan=voice-pro">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Empezar Ahora</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="border-2 border-purple-300 hover:border-purple-400 transition-colors">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>Solución completa personalizada</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-purple-500">A medida</div>
                    <div className="text-gray-500">Consultar</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Minutos de voz ilimitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Conversaciones chat ilimitadas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">IA personalizada con tu vocabulario</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Integraciones custom dedicadas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Múltiples voces clonadas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Account Manager dedicado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SLA personalizado</span>
                    </li>
                  </ul>
                  <Link href="/contacto">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Contactar</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Integration Info */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">🔗 Integración Total Entre Canales</h3>
                  <p className="text-gray-700 text-lg">
                    Con <strong>Utio Voice AI</strong>, el contexto se mantiene entre voz, WhatsApp, email y web chat.
                    Un cliente puede iniciar una conversación por chat y continuarla por teléfono sin repetir
                    información. <strong>Memoria compartida en todos los canales.</strong>
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <Badge variant="secondary" className="text-sm">
                      📞 Voz
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      💬 WhatsApp
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      📧 Email
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      🌐 Web Chat
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Casos de uso que transforman negocios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  Soporte Multicanal 24/7 (Voz + Chat)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Empresa SaaS (500 consultas/día):</strong> El cliente elige: chat para consultas rápidas,
                  llamada telefónica para problemas complejos. El Agente IA (voz + chat) resuelve el 75%
                  automáticamente. El contexto se mantiene: si empieza por WhatsApp y llama después, la IA recuerda
                  todo.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">75% resolución automática multicanal</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  Cualificación de Leads por Voz
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Inmobiliaria premium (50 leads/día):</strong> La IA telefónica cualifica leads en llamada
                  entrante preguntando presupuesto, zona preferida y urgencia. Los comerciales solo atienden leads con
                  alta probabilidad de cierre. Graba y transcribe todo automáticamente.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">50 leads telefónicos cualificados/día</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  Automatización Post-venta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>E-commerce moda (1.000 pedidos/mes):</strong> Gestiona cambios, devoluciones y consultas de
                  estado automáticamente por voz y chat. Solo escala a humano incidencias complejas. El cliente elige el
                  canal más cómodo.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">1.000 pedidos gestionados automáticamente</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-orange-600" />
                  </div>
                  Análisis Conversacional Avanzado
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Cada interacción (voz y chat) genera datos valiosos: Score de satisfacción automático, transcripciones
                  de llamadas, detección de palabras clave de tu industria, análisis de tendencias y recomendaciones de
                  mejora.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Insights automáticos voz + chat</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">ROI demostrable desde el primer mes</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Ahorro en personal</h3>
              <p className="text-sm text-gray-600">1 Agente IA (voz+chat) = 3 empleados de soporte básico</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Disponibilidad 24/7</h3>
              <p className="text-sm text-gray-600">Sin coste adicional de guardias nocturnas telefónicas</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Consistencia total</h3>
              <p className="text-sm text-gray-600">Misma calidad de respuesta en todos los canales</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Escalabilidad</h3>
              <p className="text-sm text-gray-600">Atiende 100 o 10.000 consultas telefónicas sin límites</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">La IA conversacional omnicanal que tu empresa necesita</h2>
            <p className="text-xl opacity-90">
              No es futuro. Es presente. Mientras otros contratan más personal, tú escalas con inteligencia artificial
              por voz y chat. La ventaja competitiva está en actuar ahora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo?producto=agente-ia-chatbot">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8">
                  Solicitar Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/prueba-gratis?producto=agente-ia-chatbot">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-500 bg-transparent"
                >
                  Prueba 14 Días Gratis
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-90">
              📞 Llama ahora y prueba: 🇪🇸 +34 919 893 600 | 🇬🇧 +44 7520 640 309 | 🇫🇷 +33 9 48 45 81 02
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
