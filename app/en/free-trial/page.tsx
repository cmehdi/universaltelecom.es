import type { Metadata } from "next"
import { TrialFormEn } from "@/components/trial-form-en"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, CreditCard, Headphones, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Start Your 14-Day Free Trial - Universal Telecom",
  description:
    "Try Universal Telecom's business communication platform free for 14 days. No credit card required. Full access to Virtual PBX, WhatsApp API, AI Agents and more.",
  keywords: "free trial, business phone system, virtual pbx trial, whatsapp business api trial, ai agents trial",
  openGraph: {
    title: "Start Your 14-Day Free Trial - Universal Telecom",
    description: "Try Universal Telecom's business communication platform free for 14 days. No credit card required.",
    url: "https://universaltelecom.com/en/free-trial",
  },
}

export default function FreeTrialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                No Credit Card Required
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Start Your <span className="text-orange-500">14-Day Free Trial</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Experience the full power of Universal Telecom's business communication platform. Get instant access to
                all features with no commitments.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">No Credit Card</div>
                    <div className="text-sm text-gray-600">Required to start</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">15-Min Setup</div>
                    <div className="text-sm text-gray-600">Quick & easy</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Headphones className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">Always available</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>2,000+ businesses trust us</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>4.9/5 customer rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Free Trial</h2>
                    <p className="text-gray-600">Get full access to all features for 14 days</p>
                  </div>
                  <TrialFormEn />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything Included in Your Free Trial</h2>
            <p className="text-xl text-gray-600">Full access to all features, no limitations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Virtual PBX System</h3>
                  <p className="text-gray-600">
                    Professional phone system with unlimited extensions, call routing, voicemail, and advanced features.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Business API</h3>
                  <p className="text-gray-600">
                    Official WhatsApp integration for business messaging, automated responses, and customer support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Agents</h3>
                  <p className="text-gray-600">
                    Intelligent chatbots and virtual assistants to automate customer interactions and support.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Analytics & Insights</h3>
                  <p className="text-gray-600">
                    Advanced analytics, call recording, sentiment analysis, and detailed reporting dashboards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Phone Numbers</h3>
                  <p className="text-gray-600">
                    Local and toll-free numbers in 80+ countries for global business presence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Premium Support</h3>
                  <p className="text-gray-600">
                    Dedicated support team, onboarding assistance, and technical guidance throughout your trial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">
                "The free trial convinced us immediately. We saw a 40% improvement in customer response times and our
                team productivity increased significantly. The setup was incredibly easy and support was outstanding."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Johnson</div>
                  <div className="text-gray-600">Operations Director, TechFlow Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is the free trial really free?</h3>
                <p className="text-gray-600">
                  Yes, completely free for 14 days. No credit card required, no hidden fees, no commitments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What happens after the trial ends?</h3>
                <p className="text-gray-600">
                  You can choose to continue with a paid plan or your account will be paused. No automatic charges.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Absolutely. You can cancel your trial at any time with no questions asked and no penalties.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do I get full access to all features?</h3>
                <p className="text-gray-600">
                  Yes, you get complete access to all features, integrations, and premium support during your trial.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How quickly can I get started?</h3>
                <p className="text-gray-600">
                  Most customers are up and running within 15 minutes. Our team provides guided setup assistance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is support included?</h3>
                <p className="text-gray-600">
                  Yes, you get full access to our 24/7 support team, onboarding specialists, and technical resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business Communications?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses that have improved their customer experience with Universal Telecom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#trial-form">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                <Zap className="h-5 w-5 mr-2" />
                Start Free Trial Now
              </Button>
            </Link>
            <Link href="/en/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
              >
                Watch Demo First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
