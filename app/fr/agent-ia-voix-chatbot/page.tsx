import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { NavigationFr } from "@/components/navigation-fr"
import { FooterFr } from "@/components/footer-fr"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agent IA Vocal & Chatbot | Utio Voice AI + Bot Intelligent | Universal Telecom",
  description:
    "Agent IA complet : téléphonie vocale + chatbot WhatsApp intégrés. Dès 29€/mois chatbot, dès 99€/mois voix+chat. Conversation naturelle en 26 langues, intégration CRM. Essai gratuit.",
  keywords:
    "agent ia vocal, utio voice ai, chatbot ia, ia conversationnelle, ia téléphonique, bot whatsapp, assistant virtuel, 26 langues, intégration crm",
}

export default function AgentIAVoixChatbotPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationFr />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Intelligence artificielle conversationnelle omnicanale
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Agent IA Vocal & Chatbot : Votre Employé Digital Qui Ne Dort Jamais
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Un chatbot répond à des questions prédéfinies. Notre Agent IA comprend le contexte, apprend de votre
                  base de connaissances et prend des décisions comme un employé expérimenté. Par téléphone, WhatsApp,
                  email ou web.
                </p>
              </div>

              {/* Utio Voice AI Integration */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Utio Voice AI + Chat : Intégration Totale</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ce n'est pas seulement un agent vocal ou un chatbot. C'est un système complet qui unifie WhatsApp,
                    email, chat web et <strong>appels téléphoniques</strong> dans une seule intelligence
                    conversationnelle. Le contexte est maintenu entre les canaux : une conversation par chat peut
                    continuer par téléphone sans perdre d'information.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">📞 Voix Téléphonique</div>
                      <div className="text-xs text-gray-600">26 langues, sans lag ASR, conversation naturelle</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">💬 Chat Multicanal</div>
                      <div className="text-xs text-gray-600">WhatsApp, Email, Web intégrés</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-semibold text-blue-600 text-sm">🔗 Mémoire Partagée</div>
                      <div className="text-xs text-gray-600">Contexte sur tous les canaux</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Numbers */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Essayez Utio Voice AI maintenant</h3>
                <p className="text-gray-700 mb-4">Appelez et parlez avec notre agent vocal dans votre langue :</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🇪🇸</span>
                    <div>
                      <div className="font-semibold text-gray-900">Espagnol</div>
                      <a href="tel:+34919893600" className="text-blue-600 hover:underline font-mono">
                        +34 919 893 600
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <div className="font-semibold text-gray-900">Anglais</div>
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
                <Link href="/fr/essai-gratuit?produit=agent-ia-vocal">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
                    Essai Gratuit 14 Jours <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/fr/demo?produit=agent-ia-vocal">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-500 hover:bg-purple-50 bg-transparent"
                  >
                    Demander une Démo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/utcom5-GfKwa8rtVOOGJgJcVA79wOiBBWojMb.png"
                alt="Panneau de contrôle Utio Voice AI et Chatbot avec métriques de performance et automatisation omnicanale"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Fonctionnalités qui révolutionnent votre service client
            </h2>
            <p className="text-xl text-gray-600">Conversation vocale et chat naturelle avec IA avancée</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-3 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">🚀 Utio Voice AI : Caractéristiques Clés</CardTitle>
                <CardDescription>Conversations téléphoniques naturelles avec IA de pointe</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧠 Conversation en temps réel</div>
                    <div className="text-xs text-gray-600">Sans lag ASR, fluidité humaine</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🌍 Multilingue : 26 langues</div>
                    <div className="text-xs text-gray-600">Espagnol, anglais, français, arabe, allemand & plus</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🔗 Intégration systèmes externes</div>
                    <div className="text-xs text-gray-600">API pour CRM, ERP, ticketing en temps réel</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🛠 Exécution de fonctions</div>
                    <div className="text-xs text-gray-600">Consulte données, envoie devis, ouvre tickets</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🎭 Clonage de voix personnalisé</div>
                    <div className="text-xs text-gray-600">Votre marque, votre voix unique</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧾 Transcriptions et enregistrements</div>
                    <div className="text-xs text-gray-600">Automatiques avec résumés intelligents</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🔄 Mémoire conversationnelle</div>
                    <div className="text-xs text-gray-600">Entre appels et canaux</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">📞 Compatible téléphonie</div>
                    <div className="text-xs text-gray-600">Extensions, numérations, SIP, WebRTC</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧰 SDKs et Webhooks</div>
                    <div className="text-xs text-gray-600">Intégration totale avec vos systèmes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              L'IA conversationnelle omnicanale dont votre entreprise a besoin
            </h2>
            <p className="text-xl opacity-90">
              Ce n'est pas le futur. C'est le présent. Pendant que d'autres embauchent du personnel, vous évoluez avec
              l'intelligence artificielle vocale et chat. L'avantage concurrentiel réside dans l'action maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/demo?produit=agent-ia-vocal">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8">
                  Demander une Démo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/fr/essai-gratuit?produit=agent-ia-vocal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-500 bg-transparent"
                >
                  Essai Gratuit 14 Jours
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-90">
              📞 Appelez maintenant et essayez : 🇪🇸 +34 919 893 600 | 🇬🇧 +44 7520 640 309 | 🇫🇷 +33 9 48 45 81 02
            </p>
          </div>
        </div>
      </section>

      <FooterFr />
    </div>
  )
}
