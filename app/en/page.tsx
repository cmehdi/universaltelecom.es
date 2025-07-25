import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Bot,
  BarChart3,
  Globe,
  CheckCircle,
  Star,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Universal Telecom - Professional Business Communications Solutions",
  description:
    "Transform your business communications with Universal Telecom. Virtual PBX, WhatsApp Business API, AI agents, call analytics, and global numbers. Trusted by 50,000+ businesses worldwide.",
  keywords:
    "business phone system, virtual pbx, whatsapp business api, ai chatbots, call analytics, global numbers, business communications, cloud phone system",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Trusted by 50,000+ businesses worldwide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Business Communications</h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Professional phone systems, AI-powered customer service, and global connectivity. Everything you need to
                communicate better with your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en/free-trial">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/en/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-orange-200 mt-4">
                No credit card required • 14-day free trial • Setup in 15 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50,000+</div>
                <div className="text-gray-600">Active Businesses</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">80+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Communication Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to modernize your business communications, from professional phone systems to
                AI-powered customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Virtual PBX */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Virtual PBX</CardTitle>
                  <CardDescription>
                    Professional cloud-based phone system with advanced call routing, voicemail, and extensions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Unlimited extensions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Advanced call routing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Voicemail to email</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Mobile & desktop apps</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">$29</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <Link href="/en/virtual-pbx">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Business API */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>WhatsApp Business API</CardTitle>
                  <CardDescription>
                    Official WhatsApp integration for business messaging, automation, and customer support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Official WhatsApp API</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Automated responses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Bulk messaging</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Rich media support</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">$49</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <Link href="/en/whatsapp-business-api">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* AI Agents */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>AI Agents & Chatbots</CardTitle>
                  <CardDescription>
                    Intelligent virtual assistants that handle customer inquiries 24/7 with human-like responses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Natural language processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>24/7 availability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Multi-channel support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Custom training</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">$79</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <Link href="/en/ai-agents">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Call Analytics */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Call Analytics</CardTitle>
                  <CardDescription>
                    AI-powered insights and analytics to optimize your communication performance and customer
                    experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Real-time analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Sentiment analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Performance metrics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Custom reports</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">$39</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <Link href="/en/call-analytics">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Global Numbers */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Global Numbers</CardTitle>
                  <CardDescription>
                    Local phone numbers in 80+ countries to establish a local presence anywhere in the world.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>80+ countries available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Instant activation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Call forwarding</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>SMS capabilities</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">$15</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <Link href="/en/global-numbers">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* All-in-One Package */}
              <Card className="hover:shadow-lg transition-shadow border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="flex items-center space-x-2">
                    <span>Complete Package</span>
                    <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                  </CardTitle>
                  <CardDescription>
                    All communication solutions in one integrated platform with significant savings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>All products included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">$149</span>
                      <span className="text-gray-600">/month</span>
                      <div className="text-sm text-green-600">Save $62/month</div>
                    </div>
                    <Link href="/en/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Universal Telecom?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another communication provider. We're your partner in transforming how you connect with
                customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast Setup</h3>
                <p className="text-gray-600">
                  Get up and running in just 15 minutes with our intuitive setup process and expert guidance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level encryption and security protocols to protect your business communications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Expert Support</h3>
                <p className="text-gray-600">
                  Our team of communication specialists is available around the clock to help you succeed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">
                  Our customers see an average 300% ROI within the first year of implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-600">
                See what our customers have to say about their experience with Universal Telecom.
              </p>
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
                    "Universal Telecom transformed our customer service operations. The AI chatbots handle 80% of our
                    inquiries automatically, and our response times improved by 90%."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      JS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Jennifer Smith</div>
                      <div className="text-gray-600 text-sm">CEO, TechCorp Solutions</div>
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
                    "The WhatsApp Business API integration was a game-changer. We now reach customers on their preferred
                    platform and our engagement rates increased by 250%."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                      <div className="text-gray-600 text-sm">Marketing Director, RetailPlus</div>
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
                    "The analytics dashboard gives us incredible insights into our communication performance. We've
                    optimized our processes and improved customer satisfaction by 40%."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      SL
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Lee</div>
                      <div className="text-gray-600 text-sm">Operations Manager, GlobalTech Inc.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business Communications?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Join thousands of businesses that have already revolutionized their customer communications with Universal
              Telecom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/free-trial">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/en/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-orange-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Setup in 15 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 support included</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
