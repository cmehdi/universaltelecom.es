import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Shield,
  Target,
  ArrowRight,
  PlayCircle,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Analyse d'Appels IA - Intelligence Artificielle pour Optimiser vos Communications | Universal Telecom",
  description:
    "Analysez et optimisez vos appels avec notre IA avancée. Obtenez des insights précieux, améliorez la satisfaction client et augmentez vos conversions. Essai gratuit 14 jours.",
  keywords:
    "analyse appels IA, intelligence artificielle, analytics téléphoniques, optimisation appels, insights clients, Universal Telecom France",
}

export default function AnalyseAppelsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                Intelligence Artificielle Avancée
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Analyse d'Appels IA
                <span className="block text-orange-600">Optimisez Chaque Conversation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformez vos appels en données exploitables avec notre IA avancée. Analysez les sentiments,
                identifiez les opportunités et améliorez continuellement vos performances commerciales.
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
                  Voir la Démo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Analyse en Temps Réel</h3>
                    <Badge className="bg-green-100 text-green-800">En Direct</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Sentiment Client</span>
                      <div className="flex items-center">
                        <div className="w-20 h-2 bg-green-200 rounded-full mr-2">
                          <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-green-600">Positif (80%)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Probabilité de Conversion</span>
                      <div className="flex items-center">
                        <div className="w-20 h-2 bg-orange-200 rounded-full mr-2">
                          <div className="w-14 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-orange-600">Élevée (70%)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Mots-clés Détectés</span>
                      <div className="flex gap-1">
                        <Badge variant="secondary" className="text-xs">
                          Prix
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Urgence
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Décision
                        </Badge>
                      </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Avancées d'Analyse IA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre intelligence artificielle analyse chaque aspect de vos conversations pour vous fournir des insights
              précieux et actionnables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Analyse de Sentiment</CardTitle>
                <CardDescription>
                  Détection automatique des émotions et du sentiment client en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reconnaissance émotionnelle avancée
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alertes en temps réel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Historique des tendances
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Détection d'Opportunités</CardTitle>
                <CardDescription>
                  Identification automatique des signaux d'achat et opportunités commerciales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Signaux d'intention d'achat
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scoring de leads automatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recommandations d'actions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Analytics Prédictifs</CardTitle>
                <CardDescription>
                  Prédictions basées sur l'IA pour optimiser vos stratégies commerciales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Prévisions de conversion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analyse de performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimisation continue
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Profiling Client</CardTitle>
                <CardDescription>
                  Création automatique de profils clients détaillés basés sur les conversations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Segmentation automatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Préférences détectées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personnalisation des approches
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Analyse Temporelle</CardTitle>
                <CardDescription>Optimisation des créneaux d'appel et analyse des patterns temporels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Meilleurs créneaux d'appel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Durée optimale des appels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Patterns de comportement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Conformité & Qualité</CardTitle>
                <CardDescription>Surveillance automatique de la conformité et de la qualité des appels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Vérification RGPD automatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scoring qualité des appels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alertes de non-conformité
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tarifs Transparents</h2>
            <p className="text-xl text-gray-600">Choisissez la solution d'analyse IA qui correspond à vos besoins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">29€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <CardDescription>Parfait pour les petites équipes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Jusqu'à 500 appels/mois
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Analyse de sentiment basique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Rapports mensuels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support email
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Commencer l'Essai</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white px-4 py-1">Plus Populaire</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">79€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <CardDescription>Idéal pour les équipes en croissance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Jusqu'à 2000 appels/mois
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Analyse IA complète
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Détection d'opportunités
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Rapports en temps réel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support prioritaire
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Commencer l'Essai</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Sur mesure</span>
                </div>
                <CardDescription>Pour les grandes organisations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Appels illimités
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    IA personnalisée
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Intégrations sur mesure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Support dédié 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Formation incluse
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Nous Contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "L'analyse IA nous a permis d'augmenter notre taux de conversion de 35%. Les insights sont précieux et
                  actionnables."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Marie Rousseau</p>
                    <p className="text-sm text-gray-600">Directrice Commerciale, TechCorp</p>
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
                  "La détection automatique des opportunités nous fait gagner un temps précieux. Notre équipe est
                  beaucoup plus efficace."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">PD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Pierre Dubois</p>
                    <p className="text-sm text-gray-600">CEO, InnovateSoft</p>
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
                  "Les rapports d'analyse nous donnent une vision claire de nos performances. Indispensable pour notre
                  croissance."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">SL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sophie Laurent</p>
                    <p className="text-sm text-gray-600">Responsable Marketing, GrowthCo</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Prêt à Optimiser vos Appels ?</h2>
            <p className="text-xl text-gray-600">
              Contactez-nous pour une démonstration personnalisée de notre solution d'analyse IA
            </p>
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
                  <Label htmlFor="volume">Volume d'appels mensuel estimé</Label>
                  <Input id="volume" placeholder="ex: 1000 appels/mois" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Décrivez vos besoins en analyse d'appels..." rows={4} />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                  Demander une Démonstration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transformez vos Appels en Opportunités</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez plus de 500 entreprises qui utilisent notre IA pour optimiser leurs communications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/fr/essai-gratuit" className="flex items-center">
                Essai Gratuit 14 Jours
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
