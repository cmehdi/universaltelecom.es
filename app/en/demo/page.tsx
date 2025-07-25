import type { Metadata } from "next"
import { DemoFormEn } from "@/components/demo-form-en"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Video, Star, Zap, BarChart3, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Request a Personalized Demo - Universal Telecom",
  description:
    "See Universal Telecom's business communication platform in action. Schedule a personalized demo with our experts and discover how we can transform your business communications.",
  keywords: "demo, business phone system demo, virtual pbx demo, whatsapp business api demo, ai agents demo",
  openGraph: {
    title: "Request a Personalized Demo - Universal Telecom",
    description:
      "See Universal Telecom's business communication platform in action. Schedule a personalized demo with our experts.",
    url: "https://universaltelecom.com/en/demo",
  },
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Video className="h-4 w-4 mr-2" />
                Personalized Demo
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                See Our Platform <span className="text-blue-500">In Action</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Schedule a personalized demo with our experts and discover how Universal Telecom can transform your
                business communications. See real results, not just features.
              </p>

              {/* Demo Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Customized to your industry and business needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Live demonstration of all features and integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Q&A session with technical experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Custom pricing and implementation plan</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>500+ demos this month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>98% satisfaction rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>30-minute sessions</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Demo</h2>
                    <p className="text-gray-600">Choose your preferred time and we'll customize the demo for you</p>
                  </div>
                  <DemoFormEn />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll See in Your Demo</h2>
            <p className="text-xl text-gray-600">A comprehensive walkthrough tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Platform Tour</h3>
              <p className="text-gray-600">Complete walkthrough of the dashboard, features, and user interface</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Integrations</h3>
              <p className="text-gray-600">See how our platform integrates with your existing tools and workflows</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Deep Dive</h3>
              <p className="text-gray-600">Explore reporting capabilities and insights specific to your industry</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Discuss custom features and implementation plans for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Schedule a Demo Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Schedule a Demo?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Experience</h3>
                <p className="text-gray-600">
                  Every demo is customized to your industry, company size, and specific communication challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">
                  See real case studies and ROI calculations based on businesses similar to yours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Implementation</h3>
                <p className="text-gray-600">
                  Learn about our rapid deployment process and get a timeline for your specific setup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Demo Success Stories</h2>
            <p className="text-xl text-gray-600">See what happens after companies schedule their demo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The demo showed us exactly how to solve our customer service bottleneck. We implemented within 2
                  weeks and saw immediate results."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-gray-600">Customer Success Manager, RetailPlus</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The personalized demo convinced our entire team. The ROI projections were spot-on and we've exceeded
                  them by 20%."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">David Rodriguez</div>
                  <div className="text-gray-600">IT Director, Manufacturing Corp</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Best demo experience ever. They understood our needs perfectly and showed us solutions we didn't even
                  know we needed."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Lisa Thompson</div>
                  <div className="text-gray-600">Operations Manager, HealthTech Solutions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Ready for a Demo?</h2>
            <p className="text-xl text-gray-600">Explore other ways to learn about our platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Free Trial</h3>
                <p className="text-gray-600 mb-6">
                  Get hands-on experience with our platform. 14 days free, no credit card required.
                </p>
                <Link href="/en/free-trial">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Sales</h3>
                <p className="text-gray-600 mb-6">
                  Have specific questions? Our sales team is ready to help you find the right solution.
                </p>
                <Link href="/en/contact">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See What's Possible?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses who have transformed their communications after seeing our demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo-form">
              <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100">
                <Video className="h-5 w-5 mr-2" />
                Schedule Demo Now
              </Button>
            </Link>
            <Link href="/en/free-trial">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
              >
                Try Free Instead
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
