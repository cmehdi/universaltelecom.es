import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Bot,
  BarChart3,
  Hash,
  CheckCircle,
  Star,
  Users,
  Building,
  Globe,
  ArrowRight,
  Headphones,
  Shield,
  Zap,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Universal Telecom France - Solutions de Communication d'Entreprise",
  description:
    "Solutions complètes de téléphonie d'entreprise. Standard virtuel, WhatsApp Business API, agents IA et analyse d'appels. Essai gratuit 14 jours.",
  keywords:
    "téléphonie d'entreprise, standard virtuel, WhatsApp Business, agents IA, analyse d'appels, Universal Telecom France",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                🚀 Solutions de Communication d'Entreprise
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Révolutionnez vos
                <span className="text-orange-600"> Communications</span>
                <br />
                d'Entreprise
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Standard virtuel, WhatsApp Business API, agents IA et analyse d'appels. Tout ce dont vous avez besoin
                pour moderniser vos communications professionnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="flex items-center mt-8 space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Configuration en 5 minutes
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Support 24/7
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Sans engagement
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/dashboard-inicio.png"
                alt="Tableau de bord Universal Telecom"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">+15,000 entreprises nous font confiance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">15,000+</div>
              <div className="text-gray-600">Entreprises Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">50M+</div>
              <div className="text-gray-600">Appels/Mois</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Technique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Solutions de Communication</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des outils professionnels conçus pour optimiser vos communications d'entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Virtual PBX */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Standard Virtuel</CardTitle>
                <CardDescription>
                  Téléphonie d'entreprise dans le cloud avec toutes les fonctionnalités avancées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Numéros fixes et mobiles
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transferts et conférences
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Enregistrement d'appels
                  </li>
                </ul>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  Dès 9€<span className="text-sm text-gray-500">/mois</span>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/centralita-virtual">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp Business API */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">WhatsApp Business API</CardTitle>
                <CardDescription>Intégration officielle WhatsApp pour votre service client</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Messages automatisés
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Intégration CRM
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analytics avancés
                  </li>
                </ul>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  Dès 25€<span className="text-sm text-gray-500">/mois</span>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/whatsapp-business-api">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Agents */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Agents IA</CardTitle>
                <CardDescription>
                  Chatbots intelligents et assistants virtuels pour automatiser vos interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    IA conversationnelle
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Apprentissage automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multicanal
                  </li>
                </ul>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  Dès 49€<span className="text-sm text-gray-500">/mois</span>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/agents-ia">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Call Analytics */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Analyse d'Appels</CardTitle>
                <CardDescription>Intelligence conversationnelle et analytics avancés pour vos appels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transcription automatique
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Analyse de sentiment
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapports détaillés
                  </li>
                </ul>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  Dès 39€<span className="text-sm text-gray-500">/mois</span>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/analyse-appels">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Global Numbers */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Hash className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Numéros Globaux</CardTitle>
                <CardDescription>Numéros locaux dans plus de 100 pays pour une présence mondiale</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    +100 pays disponibles
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Activation instantanée
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Redirection flexible
                  </li>
                </ul>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  Dès 5€<span className="text-sm text-gray-500">/mois</span>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/fr/numeros-globaux">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Universal Telecom ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 15 ans d'expérience dans les télécommunications d'entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sécurité Maximale</h3>
              <p className="text-gray-600">Chiffrement de bout en bout et conformité RGPD</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Configuration Rapide</h3>
              <p className="text-gray-600">Mise en service en moins de 5 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Support Expert</h3>
              <p className="text-gray-600">Équipe technique disponible 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualité Certifiée</h3>
              <p className="text-gray-600">99.9% de disponibilité garantie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Plus de 15,000 entreprises nous font confiance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Universal Telecom a révolutionné notre service client. L'intégration WhatsApp et les agents IA nous
                  ont permis d'améliorer notre efficacité de 300%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Marie Dubois</div>
                    <div className="text-sm text-gray-500">Directrice Marketing, TechCorp</div>
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
                  "La qualité audio est exceptionnelle et le support technique est réactif. Nous recommandons Universal
                  Telecom à toutes les entreprises."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Building className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Pierre Martin</div>
                    <div className="text-sm text-gray-500">PDG, InnovSolutions</div>
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
                  "L'analyse d'appels par IA nous donne des insights précieux sur nos clients. Un outil indispensable
                  pour notre équipe commerciale."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Sophie Laurent</div>
                    <div className="text-sm text-gray-500">Responsable Ventes, GlobalTrade</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Prêt à Moderniser vos Communications ?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Rejoignez plus de 15,000 entreprises qui font confiance à Universal Telecom
          </p>
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
