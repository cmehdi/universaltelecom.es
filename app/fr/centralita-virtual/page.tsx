import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Headphones,
  Users,
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Mic,
  PhoneCall,
  BarChart3,
  Globe,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Standard Virtuel - PBX Cloud Professionnel | Universal Telecom",
  description:
    "Standard téléphonique virtuel dans le cloud. Numéros fixes et mobiles, transferts, conférences, enregistrement. Dès 9€/mois. Essai gratuit 14 jours.",
  keywords: "standard virtuel, PBX cloud, téléphonie d'entreprise, numéros virtuels, transfert d'appels",
}

export default function VirtualPBXPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                <Headphones className="w-4 h-4 mr-2" />
                Standard Téléphonique Cloud
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Standard Virtuel
                <span className="text-orange-600"> Professionnel</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Téléphonie d'entreprise dans le cloud avec toutes les fonctionnalités avancées. Numéros fixes et
                mobiles, transferts, conférences et bien plus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  <Link href="/fr/essai-gratuit">
                    Essai 14 Jours Gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Link href="/fr/demo">Demander une Démo</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Configuration en 5 minutes
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  99.9% de disponibilité
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Interface du standard virtuel"
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
            <p className="text-xl text-gray-600">Choisissez le plan qui correspond à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Essentiel</CardTitle>
                <CardDescription>Parfait pour les petites entreprises</CardDescription>
                <div className="text-4xl font-bold text-orange-600 mt-4">
                  9€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />1 numéro fixe inclus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Jusqu'à 3 extensions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Transfert d'appels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Messagerie vocale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Application mobile
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/essai-gratuit">Commencer l'essai</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-orange-500 relative hover:border-orange-600 transition-colors">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Plus Populaire</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professionnel</CardTitle>
                <CardDescription>Idéal pour les entreprises en croissance</CardDescription>
                <div className="text-4xl font-bold text-orange-600 mt-4">
                  29€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />3 numéros inclus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Jusqu'à 10 extensions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Conférences téléphoniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Enregistrement d'appels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Statistiques avancées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support prioritaire
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/essai-gratuit">Commencer l'essai</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Entreprise</CardTitle>
                <CardDescription>Pour les grandes organisations</CardDescription>
                <div className="text-4xl font-bold text-orange-600 mt-4">
                  79€<span className="text-lg text-gray-500">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Numéros illimités
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Extensions illimitées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Centre d'appels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Intégrations CRM
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
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
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
              Toutes les fonctionnalités dont vous avez besoin pour une téléphonie d'entreprise moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Numéros Virtuels</CardTitle>
                <CardDescription>Numéros fixes et mobiles dans plus de 100 pays</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Numéros géographiques
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Numéros gratuits
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Portabilité des numéros
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Gestion d'Équipe</CardTitle>
                <CardDescription>Outils avancés pour gérer vos équipes et départements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Groupes d'appels
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Files d'attente
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Horaires personnalisés
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Enregistrement</CardTitle>
                <CardDescription>Enregistrement automatique et stockage sécurisé des appels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Enregistrement automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Stockage cloud sécurisé
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recherche avancée
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <PhoneCall className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Conférences</CardTitle>
                <CardDescription>Conférences téléphoniques jusqu'à 100 participants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Jusqu'à 100 participants
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contrôle modérateur
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Enregistrement inclus
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Analytics</CardTitle>
                <CardDescription>Statistiques détaillées et rapports en temps réel</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapports en temps réel
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Métriques de performance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Export des données
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Intégrations</CardTitle>
                <CardDescription>Connectez votre standard à vos outils existants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    CRM populaires
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API REST complète
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Webhooks en temps réel
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Découvrez pourquoi plus de 15,000 entreprises nous font confiance</p>
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
                  "Le standard virtuel d'Universal Telecom a transformé notre façon de communiquer. La qualité audio est
                  exceptionnelle et la configuration a été très simple."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Jean Dupont</div>
                    <div className="text-sm text-gray-500">Directeur, TechStart</div>
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
                  "Nous avons migré notre ancien standard vers Universal Telecom en une journée. Le support technique
                  est remarquable et les fonctionnalités sont très complètes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Marie Leroy</div>
                    <div className="text-sm text-gray-500">PDG, ConseilPro</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Prêt à Moderniser votre Téléphonie ?</h2>
          <p className="text-xl text-orange-100 mb-8">Commencez votre essai gratuit de 14 jours dès aujourd'hui</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/fr/essai-gratuit">
                Commencer l'Essai Gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Link href="/fr/contact">Parler à un Expert</Link>
            </Button>
          </div>
          <p className="text-orange-100 text-sm mt-4">✓ Configuration en 5 minutes ✓ Support 24/7 ✓ Sans engagement</p>
        </div>
      </section>
    </div>
  )
}
