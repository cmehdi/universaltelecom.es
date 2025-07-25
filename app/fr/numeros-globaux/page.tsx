import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PriceCalculatorFr } from "@/components/price-calculator-fr"
import {
  Globe,
  Phone,
  TrendingUp,
  Users,
  Clock,
  Star,
  CheckCircle,
  Shield,
  Zap,
  ArrowRight,
  PlayCircle,
  Building,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Numéros Globaux - Présence Locale dans 80+ Pays | Universal Telecom",
  description:
    "Établissez une présence locale dans plus de 80 pays avec nos numéros virtuels. Réduisez les coûts d'appel et développez votre entreprise à l'international. Activation instantanée.",
  keywords:
    "numéros globaux, numéros virtuels, présence locale, expansion internationale, numéros téléphone pays, Universal Telecom France",
}

export default function NumerosGlobauxPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Expansion Internationale</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Numéros Globaux
                <span className="block text-orange-600">Présence Locale Mondiale</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Établissez une présence locale dans plus de 80 pays avec nos numéros virtuels. Réduisez les coûts
                d'appel pour vos clients et développez votre entreprise à l'international sans bureau physique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/essai-gratuit" className="flex items-center">
                    Essai Gratuit 14 Jours
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Voir les Prix
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Pays Populaires</h3>
                    <Badge className="bg-green-100 text-green-800">Disponible</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🇺🇸</span>
                        <span className="text-sm font-medium">États-Unis</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-600">2,49€/mois</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🇬🇧</span>
                        <span className="text-sm font-medium">Royaume-Uni</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-600">3,29€/mois</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🇩🇪</span>
                        <span className="text-sm font-medium">Allemagne</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-600">3,29€/mois</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🇨🇦</span>
                        <span className="text-sm font-medium">Canada</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-600">2,49€/mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Présence Globale, Confiance Locale</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Construisez la confiance avec vos clients locaux et développez votre entreprise dans le monde entier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>80+ Pays Disponibles</CardTitle>
                <CardDescription>
                  Numéros locaux disponibles dans les principaux marchés incluant USA, UK, Canada, Australie, et à
                  travers l'Europe, l'Asie et l'Amérique Latine.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tous les indicatifs régionaux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Numéros premium disponibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Support multi-langues
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Phone className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Routage Flexible</CardTitle>
                <CardDescription>
                  Routez les appels vers n'importe quelle destination - votre bureau, mobile, centre d'appels ou système
                  VoIP avec des règles de routage avancées.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Routage basé sur l'heure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Failover automatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Distribution des appels
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Activation Instantanée</CardTitle>
                <CardDescription>
                  Obtenez vos numéros globaux activés en quelques minutes. Pas de paperasse, pas d'attente - commencez à
                  recevoir des appels immédiatement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Configuration en 5 minutes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Interface web intuitive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Support technique inclus
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Analytics Détaillés</CardTitle>
                <CardDescription>
                  Analytics détaillés pour chaque numéro incluant volume d'appels, durée, distribution géographique et
                  métriques de performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapports en temps réel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Exportation des données
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alertes personnalisées
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Sécurité Entreprise</CardTitle>
                <CardDescription>
                  Routage d'appels sécurisé avec chiffrement, protection contre la fraude et conformité avec les
                  réglementations locales de télécommunications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Chiffrement end-to-end
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Détection de fraude
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Conformité RGPD
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Gestion 24/7</CardTitle>
                <CardDescription>
                  Gérez tous vos numéros globaux depuis un tableau de bord unique. Mettez à jour le routage, consultez
                  les analytics et configurez les paramètres à tout moment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Interface unifiée
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API complète
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Support 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Calculez vos Coûts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez combien vous pouvez économiser avec nos tarifs transparents
            </p>
          </div>

          <PriceCalculatorFr />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Parfait pour Chaque Entreprise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les numéros globaux fonctionnent pour les entreprises de toutes tailles et tous secteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Building className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Startups & PME</CardTitle>
                <CardDescription>
                  Testez de nouveaux marchés sans présence physique. Établissez la crédibilité avec des numéros locaux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Test de marché
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expansion économique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Image professionnelle
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>
                  Fournissez des numéros de support client locaux pour vos clients internationaux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Support client
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Suivi des commandes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Assistance retours
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Entreprises</CardTitle>
                <CardDescription>
                  Centralisez les communications globales tout en maintenant une présence locale.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bureaux globaux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Communications unifiées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimisation des coûts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Histoires de Succès Global</h2>
            <p className="text-xl text-gray-600">
              Découvrez comment les entreprises se développent à l'international avec nos numéros
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Les numéros globaux nous ont aidés à nous développer dans 5 nouveaux pays sans ouvrir de bureaux. Nos
                  ventes internationales ont augmenté de 300% et les clients adorent avoir des numéros locaux à
                  appeler."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">AT</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alexandre Thomsen</p>
                    <p className="text-sm text-gray-600">VP Ventes Internationales, TechGlobal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Nous avons testé 3 marchés européens avec des numéros locaux avant de nous engager dans des bureaux.
                  Les insights que nous avons obtenus nous ont évité de faire une erreur coûteuse sur un marché."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">SL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sophie Laurent</p>
                    <p className="text-sm text-gray-600">CEO, StartupEurope</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Prêt à Devenir Global ?</h2>
            <p className="text-xl text-gray-600">Contactez-nous pour obtenir vos numéros locaux dans plus de 80 pays</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email professionnel</Label>
                    <Input id="email" type="email" placeholder="votre@entreprise.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Entreprise</Label>
                    <Input id="company" placeholder="Nom de votre entreprise" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" placeholder="+33 1 23 45 67 89" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="countries">Pays d'intérêt</Label>
                  <Input id="countries" placeholder="ex: États-Unis, Royaume-Uni, Allemagne" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Décrivez vos besoins en numéros globaux..." rows={4} />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">Demander vos Numéros</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prêt à Devenir Global ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenez des numéros de téléphone locaux dans plus de 80 pays et commencez à développer votre entreprise à
            l'international. Pas de frais d'installation, activation instantanée et tarifs transparents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/fr/essai-gratuit" className="flex items-center">
                Obtenir vos Numéros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              +33 1 84 88 32 81
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
