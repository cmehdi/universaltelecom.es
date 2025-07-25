import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageSquare,
  Users,
  Zap,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Bot,
  Smartphone,
  TrendingUp,
  Star,
} from "lucide-react"

export default function WhatsAppBusinessAPIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              WhatsApp Business
              <span className="text-green-500 block">API Integration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Official WhatsApp Business API for customer service, marketing campaigns, and automated notifications.
              Reach your customers where they are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/en/free-trial">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/en/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-4 text-lg bg-transparent"
                >
                  Request Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Official WhatsApp Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Verified Business Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">2B+</div>
              <div className="text-gray-600">WhatsApp Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-gray-600">Open Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">5x</div>
              <div className="text-gray-600">Higher Engagement</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete WhatsApp Business Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to leverage WhatsApp for business communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Rich Messaging</h3>
                <p className="text-gray-600">
                  Send text, images, videos, documents, location, and interactive messages with buttons and lists.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Bulk Messaging</h3>
                <p className="text-gray-600">
                  Send personalized messages to thousands of customers simultaneously with delivery tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Chatbots & Automation</h3>
                <p className="text-gray-600">
                  Automate customer service with intelligent chatbots that handle common inquiries 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600">
                  Detailed analytics on message delivery, read rates, response times, and customer engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Verified Business Profile</h3>
                <p className="text-gray-600">
                  Official green checkmark verification that builds trust and credibility with your customers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">API Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with your CRM, helpdesk, and business systems via REST API and webhooks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Business Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer service to marketing campaigns, WhatsApp Business API covers all your communication needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Customer Service</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
                    <p className="text-gray-600">
                      Provide instant customer support with automated responses and seamless handoff to human agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Order Updates</h4>
                    <p className="text-gray-600">
                      Send real-time order confirmations, shipping updates, and delivery notifications automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Multi-Agent Support</h4>
                    <p className="text-gray-600">
                      Route conversations to the right department or agent based on customer needs and availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Marketing & Sales</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Campaign Management</h4>
                    <p className="text-gray-600">
                      Create and manage targeted marketing campaigns with personalized messages and rich media.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Global Reach</h4>
                    <p className="text-gray-600">
                      Reach customers in 180+ countries with localized messaging and multi-language support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Performance Tracking</h4>
                    <p className="text-gray-600">
                      Track message delivery, read rates, click-through rates, and conversion metrics in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how businesses are growing with WhatsApp Business API</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "WhatsApp Business API increased our customer engagement by 300%. We can now provide instant support
                  and our customers love the convenience of messaging us directly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="text-sm text-gray-500">Customer Success Manager, RetailCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Our order confirmation and delivery notification system via WhatsApp reduced customer service calls
                  by 60%. The automation features are incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">James Wilson</div>
                    <div className="text-sm text-gray-500">Operations Director, FoodDelivery Plus</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only for what you use. No hidden fees, no long-term contracts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Starter</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">
                  $29<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">1,000 messages/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Basic chatbot</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Standard support</span>
                  </li>
                </ul>
                <Link href="/en/free-trial">
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">
                  $99<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">10,000 messages/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced chatbot & automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Link href="/en/free-trial">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">
                  $299<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited messages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">24/7 premium support</span>
                  </li>
                </ul>
                <Link href="/en/contact">
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Additional messages: $0.05 per message • No setup fees • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect with Your Customers on WhatsApp?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using WhatsApp Business API to provide better customer service and drive more
            sales. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-trial">
              <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/en/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-500 px-8 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-green-100 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
