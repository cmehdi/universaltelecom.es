import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { NavigationEn } from "@/components/navigation-en"
import { FooterEn } from "@/components/footer-en"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Voice Agent & Chatbot | Utio Voice AI + Intelligent Bot | Universal Telecom",
  description:
    "Complete AI Agent: voice telephony + WhatsApp chatbot integrated. From €29/month chatbot, from €99/month voice+chat. Natural conversation in 26 languages, CRM integration. Free trial.",
  keywords:
    "ai voice agent, utio voice ai, ai chatbot, conversational ai, phone ai, whatsapp bot, virtual assistant, 26 languages, crm integration",
}

export default function AIVoiceAgentChatbotPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationEn />

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
                  base, and makes decisions like an experienced employee. By phone, WhatsApp, email, or web.
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
                    It's not just a voice agent or chatbot. It's a complete system that unifies WhatsApp, email, web
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
                <p className="text-gray-700 mb-4">Call and speak with our voice agent in your language:</p>
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
                <Link href="/en/free-trial?product=ai-voice-agent">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
                    14-Day Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/en/demo?product=ai-voice-agent">
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

      {/* Features Section - Similar structure to Spanish but translated */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Features that revolutionize your customer service
            </h2>
            <p className="text-xl text-gray-600">Natural voice and chat conversation with advanced AI</p>
          </div>

          {/* Rest of the features cards - similar structure */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards here - abbreviated for space */}
            <Card className="md:col-span-3 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">🚀 Utio Voice AI: Key Features</CardTitle>
                <CardDescription>Natural phone conversations with cutting-edge AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧠 Real-time conversation</div>
                    <div className="text-xs text-gray-600">No ASR lag, human-like fluency</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🌍 Multilingual: 26 languages</div>
                    <div className="text-xs text-gray-600">Spanish, English, French, Arabic, German & more</div>
                  </div>
                  {/* More features */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing section with similar structure */}
      {/* Use cases */}
      {/* ROI */}
      {/* Final CTA with demo phone numbers */}

      <FooterEn />
    </div>
  )
}
