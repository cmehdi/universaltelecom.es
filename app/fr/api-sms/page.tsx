import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, CheckCircle, Star, Globe, Shield, Zap, BarChart3, MessageSquare, Smartphone, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "API SMS - Envoi de SMS en Masse | Universal Telecom",
  description:
    "API SMS puissante pour l'envoi de messages en masse. Intégration facile, livraison garantie, tarifs compétitifs. Parfait pour marketing, notifications et alertes.",
  keywords: "api sms, envoi sms masse, sms marketing, notifications sms, api messaging, sms business",
}

export default function SMSAPIPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">API SMS Professionnelle</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">API SMS Puissante pour Votre Business</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Envoyez des SMS en masse avec notre API robuste. Marketing, notifications, alertes - tout ce dont vous
              avez besoin pour communiquer efficacement avec vos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/essai-gratuit">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Essai Gratuit
                </Button>
              </Link>
              <Link href="/fr/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                >
                  Voir la Démo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-4">100 SMS gratuits • Intégration en 5 minutes • Support 24/7</p>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Intégration Simple et Rapide</h2>
              <p className="text-xl text-gray-600">Commencez à envoyer des SMS en quelques lignes de code</p>
            </div>

            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="php">PHP</TabsTrigger>
              </TabsList>

              <TabsContent value="curl" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`curl -X POST https://api.universaltelecom.com/v1/sms/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+33612345678",
    "message": "Bonjour! Votre commande est prête.",
    "from": "MonEntreprise"
  }'`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="javascript" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`const response = await fetch('https://api.universaltelecom.com/v1/sms/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+33612345678',
    message: 'Bonjour! Votre commande est prête.',
    from: 'MonEntreprise'
  })
});

const result = await response.json();
console.log(result);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="python" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`import requests

url = "https://api.universaltelecom.com/v1/sms/send"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "to": "+33612345678",
    "message": "Bonjour! Votre commande est prête.",
    "from": "MonEntreprise"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="php" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.universaltelecom.com/v1/sms/send',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
  ),
  CURLOPT_POSTFIELDS => json_encode(array(
    'to' => '+33612345678',
    'message' => 'Bonjour! Votre commande est prête.',
    'from' => 'MonEntreprise'
  ))
));

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Avancées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre API SMS offre toutes les fonctionnalités dont vous avez besoin pour vos campagnes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Envoi en Masse</CardTitle>
                <CardDescription>
                  Envoyez des milliers de SMS simultanément avec notre infrastructure haute performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Jusqu'à 10,000 SMS/minute</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gestion des listes de contacts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Personnalisation des messages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Couverture Mondiale</CardTitle>
                <CardDescription>Envoyez des SMS dans plus de 200 pays avec des tarifs compétitifs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>200+ pays couverts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Routage intelligent</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Numéros courts disponibles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Analytics Détaillées</CardTitle>
                <CardDescription>Suivez vos campagnes avec des statistiques en temps réel</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Taux de livraison</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Rapports détaillés</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Webhooks en temps réel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Sécurité Avancée</CardTitle>
                <CardDescription>Protection maximale de vos données et communications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Chiffrement SSL/TLS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Authentification API</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Conformité RGPD</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Programmation</CardTitle>
                <CardDescription>Planifiez vos campagnes SMS pour un envoi optimal</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Envoi programmé</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gestion des fuseaux horaires</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Campagnes récurrentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Infrastructure haute performance pour une livraison rapide</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>99.9% de disponibilité</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Livraison en secondes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Redondance mondiale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cas d'Usage Populaires</h2>
            <p className="text-xl text-gray-600">Découvrez comment nos clients utilisent notre API SMS</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing SMS</h3>
              <p className="text-gray-600">Campagnes promotionnelles, offres spéciales et communication marketing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Notifications</h3>
              <p className="text-gray-600">
                Alertes de commande, confirmations de livraison et notifications importantes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentification</h3>
              <p className="text-gray-600">Codes OTP, vérification à deux facteurs et sécurisation des comptes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rappels</h3>
              <p className="text-gray-600">Rendez-vous, échéances de paiement et rappels automatiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs Transparents</h2>
            <p className="text-xl text-gray-600">Payez seulement pour ce que vous utilisez, sans frais cachés</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Parfait pour débuter</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  0,05€ <span className="text-lg font-normal text-gray-600">/SMS</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100 SMS gratuits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>API REST complète</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Support email</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dashboard analytics</span>
                  </li>
                </ul>
                <Button className="w-full">Commencer</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Business</span>
                  <Badge className="bg-blue-500 text-white">Populaire</Badge>
                </CardTitle>
                <CardDescription>Pour les entreprises en croissance</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  0,04€ <span className="text-lg font-normal text-gray-600">/SMS</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>1,000 SMS gratuits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Support prioritaire</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Webhooks avancés</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Choisir Business</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Pour les gros volumes</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  0,03€ <span className="text-lg font-normal text-gray-600">/SMS</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>10,000 SMS gratuits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Account manager dédié</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Support 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SLA garantie</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Nous Contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Découvrez pourquoi des milliers d'entreprises nous font confiance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "L'API SMS d'Universal Telecom a révolutionné notre communication client. Taux de livraison excellent
                  et intégration très simple."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    ML
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marie Leblanc</div>
                    <div className="text-gray-600 text-sm">CTO, TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "Nous envoyons plus de 50,000 SMS par mois. La plateforme est stable et les tarifs très compétitifs."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    PD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pierre Dubois</div>
                    <div className="text-gray-600 text-sm">Directeur Marketing, RetailPro</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "Le support technique est exceptionnel. Ils nous ont aidés à intégrer l'API en moins d'une journée."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    SG
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sophie Girard</div>
                    <div className="text-gray-600 text-sm">Lead Developer, InnovApp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à commencer avec notre API SMS ?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Rejoignez des milliers d'entreprises qui font confiance à Universal Telecom pour leurs communications SMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/essai-gratuit">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Commencer Gratuitement
              </Button>
            </Link>
            <Link href="/fr/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              >
                Parler à un Expert
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-blue-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>100 SMS gratuits</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Intégration en 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
