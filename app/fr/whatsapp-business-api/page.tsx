import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Bot,
  Users,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Send,
  Clock,
  Globe,
  Smartphone,
  Settings,
  TrendingUp,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhatsApp Business API - Automatisation Client | Universal Telecom",
  description:
    "API WhatsApp Business officielle. Messages automatisés, chatbots, intégration CRM. Dès 25€/mois. Essai gratuit 14 jours.",
  keywords: "WhatsApp Business API, messages automatisés, chatbot WhatsApp, service client, intégration CRM",
}

export default function WhatsAppBusinessAPIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                <MessageSquare className="w-4 h-4 mr-2" />
                API WhatsApp Officielle
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                WhatsApp Business
                <span className="text-green-600"> API</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatisez votre service client avec l'API WhatsApp Business officielle. Messages automatisés, chatbots
                intelligents et intégrations CRM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  <Link href="/fr/essai-gratuit">
                    Essai 14 Jours Gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Link href="/fr/demo">Demander une Démo</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Intégration en 24h
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Support technique dédié
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Interface WhatsApp Business API"
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
            <p className="text-xl text-gray-600">Payez uniquement pour les messages envoyés</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Parfait pour débuter avec WhatsApp</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">
                  25€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    1,000 messages inclus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />1 numéro WhatsApp
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Messages automatisés
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Templates personnalisés
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support par email
                  </li>
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/fr/essai-gratuit">Commencer l'essai</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-green-500 relative hover:border-green-600 transition-colors">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Plus Populaire</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professionnel</CardTitle>
                <CardDescription>Pour les entreprises actives</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">
                  79€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    5,000 messages inclus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />3 numéros WhatsApp
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Chatbot intelligent
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Intégration CRM
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Analytics avancés
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support prioritaire
                  </li>
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/fr/essai-gratuit">Commencer l'essai</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Entreprise</CardTitle>
                <CardDescription>Volume élevé et fonctionnalités avancées</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">
                  199€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    20,000 messages inclus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Numéros illimités
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    IA conversationnelle
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    API complète
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Intégrations personnalisées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support dédié 24/7
                  </li>
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Avancées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour automatiser et optimiser votre service client WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Messages Automatisés</CardTitle>
                <CardDescription>Envoyez des messages automatiques basés sur des déclencheurs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Messages de bienvenue
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Confirmations automatiques
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rappels personnalisés
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Chatbot Intelligent</CardTitle>
                <CardDescription>IA conversationnelle pour répondre automatiquement aux clients</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Réponses intelligentes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Apprentissage automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transfert vers humain
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Gestion d'Équipe</CardTitle>
                <CardDescription>Gérez plusieurs agents et départements facilement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Attribution automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Files d'attente
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Supervision en temps réel
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Analytics Avancés</CardTitle>
                <CardDescription>Mesurez les performances de votre service client</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Métriques détaillées
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapports personnalisés
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tableaux de bord
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Intégrations CRM</CardTitle>
                <CardDescription>Connectez WhatsApp à vos outils existants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Salesforce, HubSpot
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Synchronisation automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API REST complète
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Sécurité & Conformité</CardTitle>
                <CardDescription>Protection des données et conformité RGPD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Chiffrement de bout en bout
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Conformité RGPD
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audit et logs
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cas d'Usage</h2>
            <p className="text-xl text-gray-600">Comment nos clients utilisent WhatsApp Business API</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-600">
                    Confirmations de commande, suivi de livraison, support client et récupération de paniers abandonnés.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Services</h3>
                  <p className="text-gray-600">
                    Prise de rendez-vous, rappels automatiques, confirmations et gestion des annulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Marketing</h3>
                  <p className="text-gray-600">
                    Campagnes promotionnelles, newsletters, enquêtes de satisfaction et fidélisation client.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support Client</h3>
                  <p className="text-gray-600">
                    Assistance technique, FAQ automatisées, escalade vers agents humains et résolution de problèmes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">International</h3>
                  <p className="text-gray-600">
                    Communication multilingue, support 24/7 et gestion de clients dans différents fuseaux horaires.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatisation</h3>
                  <p className="text-gray-600">
                    Processus métier automatisés, intégrations avec systèmes existants et workflows personnalisés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600">Découvrez comment WhatsApp Business API transforme les entreprises</p>
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
                  "Grâce à WhatsApp Business API, nous avons réduit notre temps de réponse de 80% et amélioré la
                  satisfaction client de manière significative."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Claire Moreau</div>
                    <div className="text-sm text-gray-500">Directrice Marketing, ShopOnline</div>
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
                  "L'intégration avec notre CRM est parfaite. Nous avons une vue complète de toutes les interactions
                  client sur une seule plateforme."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Thomas Bernard</div>
                    <div className="text-sm text-gray-500">Responsable IT, ServicePro</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à Révolutionner votre Service Client ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Commencez votre essai gratuit de WhatsApp Business API dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/fr/essai-gratuit">
                Commencer l'Essai Gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/fr/contact">Parler à un Expert</Link>
            </Button>
          </div>
          <p className="text-green-100 text-sm mt-4">✓ Intégration en 24h ✓ Support dédié ✓ Sans engagement</p>
        </div>
      </section>
    </div>
  )
}
