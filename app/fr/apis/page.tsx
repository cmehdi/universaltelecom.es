import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Zap,
  BarChart3,
  MessageSquare,
  Phone,
  Send,
  Bot,
  Webhook,
  Database,
  Settings,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "APIs & Intégrations - Solutions Développeurs | Universal Telecom",
  description:
    "APIs complètes pour intégrer nos services de télécommunications. REST API, webhooks, SDKs et documentation complète pour développeurs.",
  keywords: "api telecom, rest api, webhooks, sdk, intégrations, développeurs, api documentation",
}

export default function APIsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">APIs & Intégrations</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">APIs Puissantes pour Développeurs</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Intégrez facilement nos services de télécommunications dans vos applications. APIs REST, webhooks, SDKs et
              documentation complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/essai-gratuit">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Commencer Gratuitement
                </Button>
              </Link>
              <Link href="/fr/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                >
                  Voir la Documentation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-purple-200 mt-4">
              Accès gratuit aux APIs • Documentation complète • Support développeur
            </p>
          </div>
        </div>
      </section>

      {/* APIs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Suite Complète d'APIs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accédez à tous nos services via des APIs REST modernes et bien documentées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Voice API</CardTitle>
                <CardDescription>
                  Intégrez les appels vocaux, la synthèse vocale et la reconnaissance vocale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Appels sortants/entrants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Conférences téléphoniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Enregistrement d'appels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Text-to-Speech</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>SMS API</CardTitle>
                <CardDescription>
                  Envoyez et recevez des SMS dans le monde entier avec notre API robuste
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Envoi en masse</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SMS bidirectionnels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Numéros courts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Rapports de livraison</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>WhatsApp API</CardTitle>
                <CardDescription>Intégrez WhatsApp Business dans vos applications et workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Messages texte et média</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Templates approuvés</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Boutons interactifs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Webhooks temps réel</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>AI API</CardTitle>
                <CardDescription>Intégrez nos agents IA et services d'analyse dans vos applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Chatbots intelligents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Analyse de sentiment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Traitement du langage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Apprentissage automatique</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Analytics API</CardTitle>
                <CardDescription>Accédez aux données et statistiques de vos communications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Métriques en temps réel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Rapports personnalisés</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Export de données</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tableaux de bord</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Management API</CardTitle>
                <CardDescription>Gérez vos comptes, utilisateurs et configurations via API</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gestion des utilisateurs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Configuration des services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Facturation et usage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Logs et audit</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Intégration Simple</h2>
              <p className="text-xl text-gray-600">Commencez à utiliser nos APIs en quelques minutes</p>
            </div>

            <Tabs defaultValue="auth" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="auth">Authentification</TabsTrigger>
                <TabsTrigger value="voice">Voice API</TabsTrigger>
                <TabsTrigger value="sms">SMS API</TabsTrigger>
                <TabsTrigger value="webhook">Webhooks</TabsTrigger>
              </TabsList>

              <TabsContent value="auth" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentification API</CardTitle>
                    <CardDescription>Utilisez votre clé API pour authentifier vos requêtes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`// Authentification avec Bearer Token
const response = await fetch('https://api.universaltelecom.com/v1/account', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const account = await response.json();
console.log('Account info:', account);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="voice" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Passer un Appel</CardTitle>
                    <CardDescription>Initiez un appel vocal via l'API</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`// Initier un appel
const callData = {
  from: '+33123456789',
  to: '+33987654321',
  url: 'https://yourapp.com/voice-instructions.xml'
};

const response = await fetch('https://api.universaltelecom.com/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(callData)
});

const call = await response.json();
console.log('Call initiated:', call.sid);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sms" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Envoyer un SMS</CardTitle>
                    <CardDescription>Envoyez un SMS via l'API</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`// Envoyer un SMS
const smsData = {
  to: '+33612345678',
  from: 'MonEntreprise',
  body: 'Bonjour! Votre commande est prête à être récupérée.'
};

const response = await fetch('https://api.universaltelecom.com/v1/messages', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(smsData)
});

const message = await response.json();
console.log('SMS sent:', message.sid);`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="webhook" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuration Webhook</CardTitle>
                    <CardDescription>Recevez des notifications en temps réel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      {`// Configurer un webhook
const webhookData = {
  url: 'https://yourapp.com/webhooks/sms-status',
  events: ['message.delivered', 'message.failed'],
  method: 'POST'
};

const response = await fetch('https://api.universaltelecom.com/v1/webhooks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(webhookData)
});

// Traitement du webhook dans votre application
app.post('/webhooks/sms-status', (req, res) => {
  const { event, data } = req.body;
  console.log('Webhook received:', event, data);
  res.status(200).send('OK');
});`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intégrations Populaires</h2>
            <p className="text-xl text-gray-600">Connectez-vous facilement avec vos outils préférés</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Salesforce</h3>
                <p className="text-sm text-gray-600">Intégration CRM complète</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">HubSpot</h3>
                <p className="text-sm text-gray-600">Marketing automation</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Webhook className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Zapier</h3>
                <p className="text-sm text-gray-600">Automatisation workflow</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom</h3>
                <p className="text-sm text-gray-600">Intégrations sur mesure</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Nos APIs ?</h2>
            <p className="text-xl text-gray-600">Des APIs conçues pour les développeurs modernes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">APIs ultra-rapides avec 99.9% de disponibilité garantie</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600">Chiffrement de bout en bout et authentification robuste</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Documentation complète avec exemples et SDKs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global</h3>
              <p className="text-gray-600">Infrastructure mondiale avec faible latence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent les développeurs</h2>
            <p className="text-xl text-gray-600">Découvrez pourquoi les développeurs adorent nos APIs</p>
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
                  "Les APIs d'Universal Telecom sont incroyablement bien conçues. Documentation claire et intégration en
                  quelques minutes."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    AM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Alexandre Martin</div>
                    <div className="text-gray-600 text-sm">Lead Developer, TechCorp</div>
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
                  "Excellente performance et fiabilité. Nous traitons des millions de messages par mois sans problème."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    CL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Camille Laurent</div>
                    <div className="text-gray-600 text-sm">CTO, StartupPro</div>
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
                  "Le support développeur est exceptionnel. Réponses rapides et aide technique de qualité."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Julien Dupont</div>
                    <div className="text-gray-600 text-sm">Full Stack Developer, WebApp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à intégrer nos APIs ?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Commencez dès aujourd'hui avec notre documentation complète et nos exemples de code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/essai-gratuit">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
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
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-purple-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Accès gratuit aux APIs</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Documentation complète</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Support développeur</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
