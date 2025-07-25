import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Brain,
  MessageSquare,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Mic,
  Globe,
  Clock,
  TrendingUp,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agents IA - Chatbots Intelligents | Universal Telecom",
  description:
    "Agents IA conversationnels et chatbots intelligents. Automatisation, apprentissage automatique, multicanal. Dès 49€/mois. Essai gratuit 14 jours.",
  keywords: "agents IA, chatbots intelligents, IA conversationnelle, automatisation, apprentissage automatique",
}

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Bot className="w-4 h-4 mr-2" />
                Intelligence Artificielle Conversationnelle
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Agents IA
                <span className="text-blue-600"> Intelligents</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatisez vos interactions client avec des agents IA conversationnels. Apprentissage automatique,
                réponses intelligentes et intégration multicanal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  <Link href="/fr/essai-gratuit">
                    Essai 14 Jours Gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="/fr/demo">Demander une Démo</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  IA pré-entraînée
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Multilingue
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Interface des agents IA"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifs Transparents</h2>
            <p className="text-xl text-gray-600">Des solutions IA adaptées à tous les besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Essentiel</CardTitle>
                <CardDescription>Parfait pour débuter avec l'IA</CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  49€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />1 agent IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    1,000 conversations/mois
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Réponses pré-configurées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Intégration web
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Analytics de base
                  </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/fr/essai-gratuit">Commencer l'essai</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Plus Populaire</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professionnel</CardTitle>
                <CardDescription>IA avancée pour entreprises</CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  149€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />5 agents IA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    10,000 conversations/mois
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Apprentissage automatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Multicanal (Web, WhatsApp)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Intégrations CRM
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Analytics avancés
                  </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/fr/essai-gratuit">Commencer l'essai</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Entreprise</CardTitle>
                <CardDescription>IA sur mesure et volume élevé</CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  399€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Agents IA illimités
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Conversations illimitées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    IA personnalisée
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Tous les canaux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    API complète
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support dédié 24/7
                  </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/fr/contact">Nous contacter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Capacités IA Avancées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des agents IA qui comprennent, apprennent et s'adaptent à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Traitement du Langage Naturel</CardTitle>
                <CardDescription>Compréhension avancée du langage humain et des intentions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analyse sémantique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Détection d'intentions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Extraction d'entités
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Apprentissage Automatique</CardTitle>
                <CardDescription>L'IA s'améliore continuellement grâce aux interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Apprentissage continu
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimisation automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personnalisation adaptive
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Conversations Contextuelles</CardTitle>
                <CardDescription>Maintien du contexte tout au long de la conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mémoire conversationnelle
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Suivi des préférences
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Historique client
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Support Multilingue</CardTitle>
                <CardDescription>Communication dans plus de 50 langues</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Détection automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Traduction en temps réel
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Adaptation culturelle
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Escalade Intelligente</CardTitle>
                <CardDescription>Transfert automatique vers agents humains si nécessaire</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Détection de complexité
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transfert contextuel
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Collaboration humain-IA
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Analytics IA</CardTitle>
                <CardDescription>Insights détaillés sur les performances de vos agents IA</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Métriques de performance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analyse de sentiment
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimisation continue
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Applications des Agents IA</h2>
            <p className="text-xl text-gray-600">Comment l'IA peut transformer votre entreprise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Support Client 24/7</CardTitle>
                <CardDescription>Assistance automatisée disponible en permanence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Répondez aux questions fréquentes, résolvez les problèmes simples et collectez les informations avant
                  transfert vers un agent humain.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Génération de Leads</CardTitle>
                <CardDescription>Qualification automatique des prospects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Engagez les visiteurs, qualifiez les prospects et collectez les informations de contact pour votre
                  équipe commerciale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Prise de Rendez-vous</CardTitle>
                <CardDescription>Planification automatique des rendez-vous</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Gérez votre agenda automatiquement, proposez des créneaux disponibles et confirmez les rendez-vous
                  avec vos clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600">Découvrez comment nos agents IA transforment les entreprises</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Nos agents IA gèrent maintenant 70% des demandes client automatiquement. Cela nous a permis de
                  réduire les coûts tout en améliorant la satisfaction."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Bot className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Sophie Dubois</div>
                    <div className="text-sm text-gray-500">Directrice Service Client, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "L'IA comprend parfaitement nos clients et s'améliore chaque jour. C'est comme avoir un assistant
                  parfait qui ne dort jamais."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Marc Lefevre</div>
                    <div className="text-sm text-gray-500">PDG, InnovSolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à Déployer l'IA dans votre Entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Commencez votre transformation digitale avec nos agents IA intelligents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/fr/essai-gratuit">
                Commencer l'Essai Gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/fr/contact">Parler à un Expert</Link>
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-4">✓ IA pré-entraînée ✓ Support dédié ✓ Sans engagement</p>
        </div>
      </section>
    </div>
  )
}
