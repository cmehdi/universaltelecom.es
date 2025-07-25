import type { Metadata } from "next"
import { ContactFormEn } from "@/components/contact-form-en"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, MapPin, Clock, Users, Award, Globe } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us - Universal Telecom",
  description:
    "Get in touch with Universal Telecom's experts. Phone, email, or WhatsApp support available 24/7. We're here to help transform your business communications.",
  keywords: "contact, support, business phone system support, customer service, technical support",
  openGraph: {
    title: "Contact Us - Universal Telecom",
    description: "Get in touch with Universal Telecom's experts. Phone, email, or WhatsApp support available 24/7.",
    url: "https://universaltelecom.com/en/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with Our <span className="text-orange-500">Experts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need technical support, want to learn more about our solutions, or are ready to get started,
              our team is here to help you succeed.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                <a
                  href="tel:+15551234567"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg block mb-2"
                >
                  +1 (555) 123-4567
                </a>
                <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                <p className="text-sm text-gray-500">24/7 Emergency Support</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions anytime</p>
                <a
                  href="mailto:sales@universaltelecom.com"
                  className="text-green-600 hover:text-green-700 font-semibold block mb-2"
                >
                  sales@universaltelecom.com
                </a>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
                <p className="text-sm text-gray-500">during business hours</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chat with us instantly</p>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
                  </div>
                  <ContactFormEn />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Office Info & FAQ */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                    Our Office
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-900">Universal Telecom USA</div>
                      <div className="text-gray-600">123 Business Avenue, Suite 500</div>
                      <div className="text-gray-600">New York, NY 10001</div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>Serving customers in 9+ countries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Universal Telecom?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">2,000+ satisfied customers worldwide</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">99.9% uptime guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">24/7 technical support</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">Global presence in 80+ countries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How quickly can you respond to support requests?</h3>
                <p className="text-gray-600">
                  We respond to all inquiries within 2 hours during business hours, and within 24 hours on weekends.
                  Emergency support is available 24/7.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer technical support during implementation?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide dedicated technical support throughout the entire implementation process, including
                  training and onboarding for your team.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I schedule a call with a technical expert?</h3>
                <p className="text-gray-600">
                  Absolutely. We can arrange a call with our technical team to discuss your specific requirements and
                  answer detailed questions about our platform.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What information should I include in my inquiry?</h3>
                <p className="text-gray-600">
                  Please include your company size, current communication challenges, and specific features you're
                  interested in. This helps us provide more targeted assistance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you provide custom solutions for large enterprises?
                </h3>
                <p className="text-gray-600">
                  Yes, we specialize in custom enterprise solutions. Our team can design and implement tailored
                  communication systems for organizations of any size.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there a cost for initial consultation?</h3>
                <p className="text-gray-600">
                  No, all initial consultations, demos, and technical discussions are completely free. We only charge
                  when you decide to implement our solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait - our team is standing by to help you transform your business communications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 (555) 123-4567
              </Button>
            </a>
            <Link href="/en/free-trial">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
