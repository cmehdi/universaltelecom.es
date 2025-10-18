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
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Voice Agent & Chatbot | Utio Voice AI + Smart Chatbot | Universal Telecom",
  description:
    "Complete AI Agent: phone voice + WhatsApp chatbot integrated. From €29/month chatbot, from €99/month voice+chat. Natural conversation in 26 languages, CRM integration. Free trial.",
  keywords:
    "ai voice agent, utio voice ai, ai chatbot, conversational ai, phone ai, whatsapp bot, virtual assistant, 26 languages, crm integration",
}

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Omnichannel conversational artificial intelligence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI Voice Agent & Chatbot: Your Digital Employee That Never Sleeps
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A chatbot answers predefined questions. Our AI Agent understands context, learns from your knowledge
                  base and makes decisions like an experienced employee. By phone, WhatsApp, email or web.
                </p>
              </div>

              {/* Utio Voice AI Integration */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Utio Voice AI + Chat: Total Integration</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    It's not just a voice agent or a chatbot. It's a complete system that unifies WhatsApp, email, web
                    chat and <strong>phone calls</strong> in a single conversational intelligence. Context is maintained
                    across channels: a chat conversation can continue by phone without losing information.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">📞 Phone Voice</div>
                      <div className="text-xs text-gray-600">26 languages, no ASR lag, natural conversation</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">💬 Multichannel Chat</div>
                      <div className="text-xs text-gray-600">WhatsApp, Email, Web integrated</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">🔗 Shared Memory</div>
                      <div className="text-xs text-gray-600">Context across all channels</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Numbers */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Try Utio Voice AI right now</h3>
                <p className="text-gray-700 mb-4">Call and talk to our voice agent in your language:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🇪🇸</span>
                    <div>
                      <div className="font-semibold text-gray-900">Spanish</div>
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
                      <div className="font-semibold text-gray-900">French</div>
                      <a href="tel:+33948458102" className="text-blue-600 hover:underline font-mono">
                        +33 9 48 45 81 02
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/en/free-trial?product=ai-agent-chatbot">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
                    14-Day Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/en/demo?product=ai-agent-chatbot">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-50 bg-transparent"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/utcom5-GfKwa8rtVOOGJgJcVA79wOiBBWojMb.png"
                alt="Utio Voice AI and Chatbot control panel with performance metrics and omnichannel automation"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Features that revolutionize your customer service
            </h2>
            <p className="text-xl text-gray-600">Natural conversation by voice and chat with advanced AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Intelligent Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automatic transcription: Converts voice to text in real-time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tone detection: Identifies frustration, satisfaction, urgency</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Intent analysis: Understands what the customer really needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Contextual response: Accesses your entire knowledge base</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Automated Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Ticket creation: Classifies and assigns automatically</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quote generation: Calculates prices based on parameters</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>CRM update: Records interactions automatically</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smart escalation: Transfers to human when needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Total Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Native CRM: HubSpot, Salesforce, Zoho automatic</span>
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
                    <span>WhatsApp Business: Unified conversations</span>
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
                <CardTitle className="text-xl">🚀 Utio Voice AI: Key Features</CardTitle>
                <CardDescription>Natural phone conversations with state-of-the-art AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧠 Real-time conversation</div>
                    <div className="text-xs text-gray-600">No ASR-lag, natural fluency like human</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🌍 Multilingual: 26 languages</div>
                    <div className="text-xs text-gray-600">Spanish, English, French, Arabic, German and more</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🔗 External systems integration</div>
                    <div className="text-xs text-gray-600">API for CRM, ERP, ticketing in real-time</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🛠 Function execution</div>
                    <div className="text-xs text-gray-600">Query data, send quotes, open tickets</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🎭 Custom voice cloning</div>
                    <div className="text-xs text-gray-600">Your brand, your unique voice</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧾 Transcriptions and recordings</div>
                    <div className="text-xs text-gray-600">Automatic with smart summaries</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🔄 Conversational memory</div>
                    <div className="text-xs text-gray-600">Between calls and channels</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">📞 Telephony compatible</div>
                    <div className="text-xs text-gray-600">Extensions, numbering, SIP, WebRTC</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧰 SDKs and Webhooks</div>
                    <div className="text-xs text-gray-600">Total integration with your systems</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Flexible plans for every channel</h2>
            <p className="text-xl text-gray-600">Chatbot only, Voice+Chat, or complete multichannel integration</p>
          </div>

          {/* Chatbot Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              💬 Chatbot Agent (WhatsApp, Email, Web)
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
                    <CardDescription>Perfect to start with conversational AI</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-500">€29</div>
                    <div className="text-gray-500">/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">1,000 conversations/month included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">€0.05 per additional conversation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">WhatsApp, Email, Web chat</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Basic knowledge base</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Basic CRM integration</span>
                    </li>
                  </ul>
                  <Link href="/en/free-trial?plan=chatbot-starter">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Chatbot Pro */}
              <Card className="border-2 border-green-300 hover:border-green-400 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white">Chat Recommended</Badge>
                </div>
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Chatbot Pro</CardTitle>
                    <CardDescription>For high-volume businesses</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-500">€99</div>
                    <div className="text-gray-500">/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">5,000 conversations/month included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">€0.05 per additional conversation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">All channels + APIs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Unlimited knowledge base</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">AI sentiment analysis</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Advanced CRM integrations</span>
                    </li>
                  </ul>
                  <Link href="/en/free-trial?plan=chatbot-pro">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Get Started</Button>
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
                    <CardTitle className="text-xl">Need Voice?</CardTitle>
                    <CardDescription>Combine chatbot + voice agent</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-700">
                    <strong>Utio Voice AI</strong> plans automatically include a chatbot with 1,000 conversations
                    integrated.
                  </div>
                  <div className="text-sm text-gray-700">
                    Perfect if you need automated phone support in addition to chat.
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                  >
                    See Voice AI Plans ↓
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Voice AI Plans */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📞 Utio Voice AI (Telephony + 1,000 conversations chatbot included)
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
                    <CardDescription>Includes chatbot with 1,000 conversations</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-500">€99</div>
                    <div className="text-gray-500">/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">200 voice minutes/month</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">€0.15 per additional minute</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Chatbot: 1,000 conversations included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">26 languages supported</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Automatic transcriptions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SIP, WebRTC telephony integration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Conversational memory across channels</span>
                    </li>
                  </ul>
                  <Link href="/en/free-trial?plan=voice-basic">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Voice AI Pro */}
              <Card className="relative border-2 border-blue-400 hover:border-blue-500 transition-colors">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Voice Most Popular</Badge>
                </div>
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Voice AI Pro</CardTitle>
                    <CardDescription>Includes chatbot with 1,000 conversations</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-500">€295</div>
                    <div className="text-gray-500">/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">2,000 voice minutes/month</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">€0.15 per additional minute</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Chatbot: 1,000 conversations included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Everything in Voice AI Basic +</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom voice cloning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Advanced API integrations (CRM, ERP)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Real-time function execution</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SDKs and Webhooks included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">24/7 priority support</span>
                    </li>
                  </ul>
                  <Link href="/en/free-trial?plan=voice-pro">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
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
                    <CardDescription>Complete custom solution</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-purple-500">Custom</div>
                    <div className="text-gray-500">Contact us</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Unlimited voice minutes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Unlimited chat conversations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">AI customized with your vocabulary</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Dedicated custom integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Multiple cloned voices</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom SLA</span>
                    </li>
                  </ul>
                  <Link href="/en/contact">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Contact Us</Button>
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
                  <h3 className="text-2xl font-bold text-gray-900">🔗 Total Integration Across Channels</h3>
                  <p className="text-gray-700 text-lg">
                    With <strong>Utio Voice AI</strong>, context is maintained across voice, WhatsApp, email and web
                    chat. A customer can start a conversation by chat and continue it by phone without repeating
                    information. <strong>Shared memory across all channels.</strong>
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <Badge variant="secondary" className="text-sm">
                      📞 Voice
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Use cases that transform businesses</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  24/7 Multichannel Support (Voice + Chat)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>SaaS company (500 queries/day):</strong> The customer chooses: chat for quick queries, phone
                  call for complex issues. The AI Agent (voice + chat) resolves 75% automatically. Context is
                  maintained: if they start on WhatsApp and call later, the AI remembers everything.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">75% multichannel automatic resolution</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  Voice Lead Qualification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Premium real estate (50 leads/day):</strong> The phone AI qualifies leads on incoming calls by
                  asking about budget, preferred area and urgency. Sales reps only handle leads with high closing
                  probability. Records and transcribes everything automatically.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">50 qualified phone leads/day</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  After-sales Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Fashion e-commerce (1,000 orders/month):</strong> Handles exchanges, returns and status
                  queries automatically by voice and chat. Only escalates complex incidents to humans. The customer
                  chooses the most comfortable channel.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">1,000 orders managed automatically</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-orange-600" />
                  </div>
                  Advanced Conversational Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Every interaction (voice and chat) generates valuable data: Automatic satisfaction score, call
                  transcriptions, industry keyword detection, trend analysis and improvement recommendations.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Automatic voice + chat insights</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Demonstrable ROI from the first month</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Staff savings</h3>
              <p className="text-sm text-gray-600">1 AI Agent (voice+chat) = 3 basic support employees</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">24/7 availability</h3>
              <p className="text-sm text-gray-600">No additional cost for night phone shifts</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Total consistency</h3>
              <p className="text-sm text-gray-600">Same quality response across all channels</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Scalability</h3>
              <p className="text-sm text-gray-600">Handle 100 or 10,000 phone queries without limits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">The omnichannel conversational AI your business needs</h2>
            <p className="text-xl opacity-90">
              It's not the future. It's the present. While others hire more staff, you scale with artificial
              intelligence by voice and chat. The competitive advantage is in acting now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/demo?product=ai-agent-chatbot">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8">
                  Request Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/en/free-trial?product=ai-agent-chatbot">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-500 bg-transparent"
                >
                  14-Day Free Trial
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-90">
              📞 Call now and try: 🇪🇸 +34 919 893 600 | 🇬🇧 +44 7520 640 309 | 🇫🇷 +33 9 48 45 81 02
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
