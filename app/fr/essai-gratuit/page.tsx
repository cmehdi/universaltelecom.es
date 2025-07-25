import { TrialFormFr } from "@/components/trial-form-fr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Clock, Shield, Headphones } from "lucide-react"

export default function FreeTrialPageFr() {
  const benefits = [
    "Accès complet à toutes les fonctionnalités",
    "Configuration personnalisée incluse",
    "Support technique dédié en français",
    "Aucun engagement, annulation à tout moment",
    "Migration de vos numéros existants",
    "Formation de votre équipe incluse",
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStart Paris",
      content: "L'essai gratuit nous a convaincus en 3 jours. La qualité et la simplicité sont exceptionnelles.",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      company: "Consulting Lyon",
      content:
        "Configuration en 10 minutes, équipe formée en 1 heure. Universal Telecom a révolutionné notre communication.",
      rating: 5,
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Jusqu'à 10 utilisateurs",
      description: "Testez avec toute votre équipe",
    },
    {
      icon: Clock,
      title: "14 jours complets",
      description: "Temps suffisant pour tout tester",
    },
    {
      icon: Shield,
      title: "Aucun engagement",
      description: "Annulez à tout moment",
    },
    {
      icon: Headphones,
      title: "Support inclus",
      description: "Accompagnement personnalisé",
    },
  ]

  const faq = [
    {
      question: "L'essai gratuit est-il vraiment gratuit ?",
      answer:
        "Oui, absolument ! Aucune carte bancaire requise, aucun frais caché. Vous testez toutes nos fonctionnalités gratuitement pendant 14 jours.",
    },
    {
      question: "Que se passe-t-il après les 14 jours ?",
      answer:
        "Rien ! Votre service s'arrête automatiquement. Si vous souhaitez continuer, nous vous contacterons pour vous proposer le plan qui vous convient.",
    },
    {
      question: "Puis-je utiliser mes numéros existants ?",
      answer:
        "Oui, nous pouvons porter vos numéros existants vers notre plateforme. Notre équipe technique vous accompagne dans cette migration.",
    },
    {
      question: "Le support est-il inclus pendant l'essai ?",
      answer:
        "Absolument ! Vous bénéficiez du même niveau de support que nos clients payants, avec une équipe dédiée en français.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              🎉 Essai 100% Gratuit - Aucune Carte Bancaire Requise
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Testez Universal Telecom
              <span className="text-orange-600 block">14 Jours Gratuitement</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez comment nos solutions de communication peuvent transformer votre entreprise. Configuration en 10
              minutes, support inclus, aucun engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form and Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="shadow-xl border-2 border-orange-100">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-blue-50">
                  <CardTitle className="text-2xl text-center text-gray-900">Commencez Votre Essai Gratuit</CardTitle>
                  <p className="text-center text-gray-600">Configuration en moins de 10 minutes</p>
                </CardHeader>
                <CardContent className="p-8">
                  <TrialFormFr />
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce Qui Est Inclus Dans Votre Essai</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2,000+</div>
                    <div className="text-blue-800 font-medium mb-4">Entreprises Nous Font Confiance</div>
                    <div className="flex justify-center items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-blue-700">Note moyenne: 4.9/5</div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce Que Disent Nos Clients</h3>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
