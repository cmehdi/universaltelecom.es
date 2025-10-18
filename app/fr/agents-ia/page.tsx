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
import { NavigationFr } from "@/components/navigation-fr"
import { FooterFr } from "@/components/footer-fr"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agent IA Vocal & Chatbot | Utio Voice AI + Bot Intelligent | Universal Telecom",
  description:
    "Agent IA complet : téléphonie vocale + chatbot WhatsApp intégrés. Dès 29€/mois chatbot, dès 99€/mois voix+chat. Conversation naturelle en 26 langues, intégration CRM. Essai gratuit.",
  keywords:
    "agent ia vocal, utio voice ai, chatbot ia, agent conversationnel, ia téléphonique, bot whatsapp, assistant virtuel, 26 langues, intégration crm",
}

export default function AgentsIAPage() {
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
                <Link href="/fr/essai-gratuit?produit=agent-ia-chatbot">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
                    Essai Gratuit 14 Jours <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/fr/demo?produit=agent-ia-chatbot">
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
                alt="Panneau de contrôle Utio Voice AI et Chatbot avec métriques de performance"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Fonctionnalités qui révolutionnent votre service client
            </h2>
            <p className="text-xl text-gray-600">Conversation naturelle par voix et chat avec IA avancée</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Traitement Intelligent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transcription automatique : Convertit la voix en texte en temps réel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Détection de ton : Identifie frustration, satisfaction, urgence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Analyse d'intention : Comprend ce dont le client a vraiment besoin</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Réponse contextuelle : Accède à toute votre base de connaissances</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Gestion Automatisée</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Création de tickets : Classe et assigne automatiquement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Génération de devis : Calcule les prix selon les paramètres</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Mise à jour CRM : Enregistre les interactions automatiquement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Escalade intelligente : Transfère à un humain si nécessaire</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Intégration Totale</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>CRM natif : HubSpot, Salesforce, Zoho automatique</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Helpdesk : Zendesk, Freshdesk, ServiceNow</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>E-commerce : Shopify, WooCommerce, Magento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>WhatsApp Business : Conversations unifiées</span>
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
                <CardTitle className="text-xl">🚀 Utio Voice AI : Caractéristiques Principales</CardTitle>
                <CardDescription>Conversations téléphoniques naturelles avec IA de dernière génération</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🧠 Conversation en temps réel</div>
                    <div className="text-xs text-gray-600">Sans lag ASR, fluidité naturelle comme un humain</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-blue-600">🌍 Multilingue : 26 langues</div>
                    <div className="text-xs text-gray-600">Espagnol, anglais, français, arabe, allemand et plus</div>
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

      {/* Plans tarifaires */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Plans flexibles pour chaque canal</h2>
            <p className="text-xl text-gray-600">Chatbot seul, Voix+Chat, ou intégration complète multicanale</p>
          </div>

          {/* Plans Chatbot */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              💬 Agent Chatbot (WhatsApp, Email, Web)
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
                    <CardDescription>Idéal pour débuter avec l'IA conversationnelle</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-500">29€</div>
                    <div className="text-gray-500">/mois</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">1.000 conversations/mois incluses</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0,05€ par conversation supplémentaire</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">WhatsApp, Email, Chat web</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Base de connaissances basique</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Intégration CRM basique</span>
                    </li>
                  </ul>
                  <Link href="/fr/essai-gratuit?plan=chatbot-starter">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Commencer</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Chatbot Pro */}
              <Card className="border-2 border-green-300 hover:border-green-400 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white">Chat Recommandé</Badge>
                </div>
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Chatbot Pro</CardTitle>
                    <CardDescription>Pour entreprises à fort volume</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-500">99€</div>
                    <div className="text-gray-500">/mois</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">5.000 conversations/mois incluses</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0,05€ par conversation supplémentaire</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Tous les canaux + APIs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Base de connaissances illimitée</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Analyse de sentiment IA</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Intégrations avancées CRM</span>
                    </li>
                  </ul>
                  <Link href="/fr/essai-gratuit?plan=chatbot-pro">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Commencer</Button>
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
                    <CardTitle className="text-xl">Besoin de la Voix ?</CardTitle>
                    <CardDescription>Combinez chatbot + agent vocal</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-700">
                    Les plans <strong>Utio Voice AI</strong> incluent automatiquement un chatbot avec 1.000
                    conversations intégré.
                  </div>
                  <div className="text-sm text-gray-700">
                    Idéal si vous avez besoin d'assistance téléphonique automatisée en plus du chat.
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                  >
                    Voir Plans Voice AI ↓
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Plans Voice AI */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📞 Utio Voice AI (Téléphonie + Chatbot 1.000 conversations inclus)
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
                    <CardDescription>Inclut chatbot avec 1.000 conversations</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-500">99€</div>
                    <div className="text-gray-500">/mois</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">200 minutes de voix/mois</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0,15€ par minute supplémentaire</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Chatbot : 1.000 conversations incluses</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">26 langues supportées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Transcriptions automatiques</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Intégration téléphonie SIP, WebRTC</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Mémoire conversationnelle entre canaux</span>
                    </li>
                  </ul>
                  <Link href="/fr/essai-gratuit?plan=voice-basic">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Commencer</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Voice AI Pro */}
              <Card className="relative border-2 border-blue-400 hover:border-blue-500 transition-colors">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Voix Plus Populaire</Badge>
                </div>
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Voice AI Pro</CardTitle>
                    <CardDescription>Inclut chatbot avec 1.000 conversations</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-500">295€</div>
                    <div className="text-gray-500">/mois</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold">2.000 minutes de voix/mois</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">0,15€ par minute supplémentaire</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Chatbot : 1.000 conversations incluses</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Tout de Voice AI Basic +</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Clonage de voix personnalisé</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Intégrations API avancées (CRM, ERP)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Exécution de fonctions en temps réel</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SDKs et Webhooks inclus</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Support prioritaire 24/7</span>
                    </li>
                  </ul>
                  <Link href="/fr/essai-gratuit?plan=voice-pro">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Commencer</Button>
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
                    <CardDescription>Solution complète personnalisée</CardDescription>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-purple-500">Sur mesure</div>
                    <div className="text-gray-500">Nous consulter</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Minutes de voix illimitées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Conversations chat illimitées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">IA personnalisée avec votre vocabulaire</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Intégrations personnalisées dédiées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Plusieurs voix clonées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Account Manager dédié</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SLA personnalisé</span>
                    </li>
                  </ul>
                  <Link href="/fr/contact">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Nous Contacter</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Info intégration */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">🔗 Intégration Totale Entre Canaux</h3>
                  <p className="text-gray-700 text-lg">
                    Avec <strong>Utio Voice AI</strong>, le contexte est maintenu entre voix, WhatsApp, email et chat
                    web. Un client peut commencer une conversation par chat et la continuer par téléphone sans répéter
                    les informations. <strong>Mémoire partagée sur tous les canaux.</strong>
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <Badge variant="secondary" className="text-sm">
                      📞 Voix
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      💬 WhatsApp
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      📧 Email
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      🌐 Chat Web
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Cas d'usage qui transforment les entreprises
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  Support Multicanal 24/7 (Voix + Chat)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Entreprise SaaS (500 demandes/jour) :</strong> Le client choisit : chat pour les questions
                  rapides, appel téléphonique pour les problèmes complexes. L'Agent IA (voix + chat) résout 75%
                  automatiquement. Le contexte est maintenu : s'il commence par WhatsApp et appelle ensuite, l'IA se
                  souvient de tout.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">75% résolution automatique multicanal</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  Qualification de Leads par Voix
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Immobilier premium (50 leads/jour) :</strong> L'IA téléphonique qualifie les leads lors des
                  appels entrants en posant des questions sur le budget, la zone préférée et l'urgence. Les commerciaux
                  ne traitent que les leads à forte probabilité de closing. Enregistre et transcrit tout
                  automatiquement.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">50 leads téléphoniques qualifiés/jour</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  Automatisation Post-vente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>E-commerce mode (1.000 commandes/mois) :</strong> Gère les échanges, retours et demandes de
                  statut automatiquement par voix et chat. N'escalade vers un humain que pour les incidents complexes.
                  Le client choisit le canal le plus confortable.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">1.000 commandes gérées automatiquement</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-orange-600" />
                  </div>
                  Analyse Conversationnelle Avancée
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Chaque interaction (voix et chat) génère des données précieuses : Score de satisfaction automatique,
                  transcriptions d'appels, détection de mots-clés de votre industrie, analyse des tendances et
                  recommandations d'amélioration.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Insights automatiques voix + chat</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">ROI démontrable dès le premier mois</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Économie de personnel</h3>
              <p className="text-sm text-gray-600">1 Agent IA (voix+chat) = 3 employés support basique</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Disponibilité 24/7</h3>
              <p className="text-sm text-gray-600">Sans coût supplémentaire de gardes téléphoniques nocturnes</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Consistance totale</h3>
              <p className="text-sm text-gray-600">Même qualité de réponse sur tous les canaux</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Évolutivité</h3>
              <p className="text-sm text-gray-600">Traite 100 ou 10.000 demandes téléphoniques sans limites</p>
            </div>
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
              <Link href="/fr/demo?produit=agent-ia-chatbot">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8">
                  Demander une Démo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/fr/essai-gratuit?produit=agent-ia-chatbot">
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
