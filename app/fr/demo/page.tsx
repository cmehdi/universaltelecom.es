import { DemoFormFr } from "@/components/demo-form-fr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Clock, Video, Headphones } from "lucide-react"

export default function DemoPageFr() {
  const demoFeatures = [
    "Présentation personnalisée de 30 minutes",
    "Configuration en direct de votre compte",
    "Démonstration avec vos cas d'usage",
    "Questions & réponses avec nos experts",
    "Proposition commerciale sur mesure",
    "Support technique inclus",
  ]

  const whatYoullSee = [
    {
      title: "Interface d'Administration",
      description: "Découvrez notre tableau de bord intuitif et ses fonctionnalités avancées",
    },
    {
      title: "Configuration en Direct",
      description: "Voyez comment configurer votre standard virtuel en quelques clics",
    },
    {
      title: "Intégrations Disponibles",
      description: "Explorez nos intégrations CRM, WhatsApp Business et outils métier",
    },
    {
      title: "Rapports et Analytics",
      description: "Analysez vos performances avec nos outils de reporting avancés",
    },
  ]

  const testimonials = [
    {
      name: "Sophie Laurent",
      company: "E-commerce Bordeaux",
      content: "La démo nous a convaincus immédiatement. L'équipe a su répondre à toutes nos questions techniques.",
      rating: 5,
    },
    {
      name: "Marc Dubois",
      company: "Consulting Paris",
      content: "Présentation claire et professionnelle. Nous avons signé le jour même après la démo.",
      rating: 5,
    },
  ]

  const timeSlots = [
    "09:00 - 09:30",
    "10:00 - 10:30",
    "11:00 - 11:30",
    "14:00 - 14:30",
    "15:00 - 15:30",
    "16:00 - 16:30",
    "17:00 - 17:30",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">🎯 Démo Personnalisée Gratuite</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Découvrez Universal Telecom
              <span className="text-orange-600 block">En Action</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Réservez votre démonstration personnalisée de 30 minutes avec nos experts. Voyez comment nos solutions
              peuvent transformer votre communication d'entreprise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Démo Interactive</h3>
              <p className="text-sm text-gray-600">Présentation en direct avec vos cas d'usage</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">30 Minutes</h3>
              <p className="text-sm text-gray-600">Durée optimale pour tout découvrir</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Headphones className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Dédié</h3>
              <p className="text-sm text-gray-600">Accompagnement personnalisé en français</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="shadow-xl border-2 border-blue-100">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                  <CardTitle className="text-2xl text-center text-gray-900">Réservez Votre Démo Gratuite</CardTitle>
                  <p className="text-center text-gray-600">Choisissez votre créneau préféré</p>
                </CardHeader>
                <CardContent className="p-8">
                  <DemoFormFr />
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce Qui Est Inclus Dans Votre Démo</h2>
                <div className="space-y-4">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll See */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce Que Vous Découvrirez</h3>
                <div className="space-y-4">
                  {whatYoullSee.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                    <div className="text-orange-800 font-medium mb-4">Taux de Conversion Après Démo</div>
                    <div className="flex justify-center items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-orange-700">Satisfaction client: 4.9/5</div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Retours de Nos Démos</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-500">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm mb-2 italic">"{testimonial.content}"</p>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{testimonial.name}</span>
                          <span className="text-gray-500"> - {testimonial.company}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Vous Préférez Une Autre Approche ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essai Gratuit 14 Jours</h3>
                <p className="text-gray-600 mb-4">Testez toutes nos fonctionnalités sans engagement</p>
                <a
                  href="/fr/essai-gratuit"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  Commencer l'Essai Gratuit
                </a>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Parler à un Expert</h3>
                <p className="text-gray-600 mb-4">Contactez directement notre équipe commerciale</p>
                <a
                  href="/fr/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Nous Contacter
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
