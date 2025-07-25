import { ContactFormFr } from "@/components/contact-form-fr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"

export default function ContactPageFr() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      description: "Parlez directement à nos experts",
      contact: "+33 1 84 88 32 81",
      action: "tel:+33184883281",
      available: "Lun-Jeu: 09:30-19:00 | Ven: 09:30-18:00",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Réponse sous 2h en moyenne",
      contact: "commercial@universaltelecom.es",
      action: "mailto:commercial@universaltelecom.es",
      available: "Réponse garantie sous 24h",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      description: "Chat direct avec notre équipe",
      contact: "+33 1 84 88 32 81",
      action: "https://wa.me/33184883281",
      available: "Disponible 24h/24",
    },
  ]

  const officeInfo = {
    address: "Calle Compositor Lehmberg Ruiz, 13",
    city: "29007 Málaga, Espagne",
    hours: ["Lundi - Jeudi: 09:30 - 19:00", "Vendredi: 09:30 - 18:00", "Weekend: Fermé"],
  }

  const faq = [
    {
      question: "Combien de temps faut-il pour mettre en place Universal Telecom ?",
      answer:
        "La mise en service est généralement effectuée en moins de 24h. Pour les configurations complexes, notre équipe technique vous accompagne étape par étape.",
    },
    {
      question: "Proposez-vous un support en français ?",
      answer:
        "Oui, absolument ! Notre équipe technique et commerciale parle français et vous accompagne dans votre langue.",
    },
    {
      question: "Puis-je conserver mes numéros de téléphone existants ?",
      answer:
        "Oui, nous pouvons porter vos numéros existants vers notre plateforme. Le processus est gratuit et géré entièrement par notre équipe.",
    },
    {
      question: "Y a-t-il des frais d'installation ou de configuration ?",
      answer:
        "Non, l'installation et la configuration initiale sont incluses dans tous nos plans. Vous ne payez que votre abonnement mensuel.",
    },
    {
      question: "Quelle est la qualité de vos communications ?",
      answer:
        "Nous garantissons une qualité HD avec 99.9% de disponibilité grâce à notre infrastructure cloud redondante et nos centres de données européens.",
    },
    {
      question: "Proposez-vous des intégrations avec d'autres outils ?",
      answer:
        "Oui, nous proposons des intégrations avec les principaux CRM (Salesforce, HubSpot, Pipedrive), outils de productivité (Microsoft Teams, Slack) et bien d'autres.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">💬 Support Expert en Français</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contactez Nos Experts
              <span className="text-orange-600 block">Universal Telecom</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Notre équipe d'experts est là pour répondre à toutes vos questions et vous accompagner dans la
              transformation de vos communications d'entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow border-2 hover:border-orange-200"
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <a
                      href={method.action}
                      className="text-lg font-medium text-orange-600 hover:text-orange-700 block mb-2"
                    >
                      {method.contact}
                    </a>
                    <p className="text-sm text-gray-500">{method.available}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-2 border-blue-100">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                  <CardTitle className="text-2xl text-center text-gray-900">Envoyez-nous un Message</CardTitle>
                  <p className="text-center text-gray-600">Nous vous répondons sous 2h en moyenne</p>
                </CardHeader>
                <CardContent className="p-8">
                  <ContactFormFr />
                </CardContent>
              </Card>
            </div>

            {/* Office Info & FAQ */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                    Nos Bureaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900">{officeInfo.address}</p>
                      <p className="text-gray-600">{officeInfo.city}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="font-medium text-gray-900">Horaires d'Ouverture</span>
                      </div>
                      {officeInfo.hours.map((hour, index) => (
                        <p key={index} className="text-sm text-gray-600 ml-6">
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Headphones className="h-5 w-5 mr-2 text-orange-600" />
                    Questions Fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faq.slice(0, 3).map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">{item.question}</h4>
                        <p className="text-sm text-gray-600">{item.answer}</p>
                        {index < 2 && <hr className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Full FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Toutes Vos Questions, Nos Réponses</h2>
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
