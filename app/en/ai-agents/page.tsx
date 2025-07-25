import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageSquare,
  Zap,
  BarChart3,
  Shield,
  Brain,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Users,
  Smartphone,
  TrendingUp,
  Star,
  Settings,
} from "lucide-react"

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Intelligent
              <span className="text-purple-500 block">AI Agents & Chatbots</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Deploy smart AI assistants that handle customer inquiries, bookings, and support 24/7 across all your
              communication channels with human-like conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/en/free-trial">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/en/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No coding required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Multi-channel deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 availability</span>
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
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">80%</div>
              <div className="text-gray-600">Queries Resolved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">5s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Next-Generation AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology that understands context, learns from interactions, and provides human-like support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Advanced NLP understands customer intent, context, and sentiment for more accurate responses.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Multi-Channel Support</h3>
                <p className="text-gray-600">
                  Deploy across WhatsApp, web chat, Facebook Messenger, and more with consistent experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Responses</h3>
                <p className="text-gray-600">
                  Provide immediate answers to customer questions, reducing wait times and improving satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Workflows</h3>
                <p className="text-gray-600">
                  Create custom conversation flows, integrate with your systems, and automate complex processes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Learning & Analytics</h3>
                <p className="text-gray-600">
                  Continuous learning from interactions with detailed analytics and performance insights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Human Handoff</h3>
                <p className="text-gray-600">
                  Seamless transfer to human agents when needed, with full conversation context preserved.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Agents for Every Business Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer service to sales support, our AI agents adapt to your specific business requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Customer Service</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
                    <p className="text-gray-600">
                      Handle customer inquiries around the clock, providing instant responses to common questions and
                      issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Issue Resolution</h4>
                    <p className="text-gray-600">
                      Automatically resolve common issues like password resets, order status, and account information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Escalation Management</h4>
                    <p className="text-gray-600">
                      Smart escalation to human agents when complex issues require personal attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Sales & Marketing</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Lead Qualification</h4>
                    <p className="text-gray-600">
                      Automatically qualify leads, collect contact information, and schedule appointments with sales
                      teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Product Recommendations</h4>
                    <p className="text-gray-600">
                      Provide personalized product recommendations based on customer preferences and purchase history.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Multi-language Support</h4>
                    <p className="text-gray-600">
                      Communicate with customers in their preferred language with automatic translation capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how businesses are transforming their customer experience with AI agents
            </p>
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
                  "Our AI chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by
                  40% and our support team can focus on complex issues that really need human attention."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">David Kim</div>
                    <div className="text-sm text-gray-500">Head of Customer Success, TechFlow</div>
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
                  "The AI agent qualifies leads 24/7 and books appointments automatically. Our sales team gets warm,
                  qualified leads and our conversion rate improved by 250%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Lisa Chen</div>
                    <div className="text-sm text-gray-500">Sales Director, GrowthCorp</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Agent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing that scales with your business needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <div className="text-3xl font-bold text-purple-500 mb-4">
                  $49<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">1 AI agent</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">1,000 conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Link href="/en/free-trial">
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="text-3xl font-bold text-purple-500 mb-4">
                  $149<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">5 AI agents</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">10,000 conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom workflows</span>
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
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-500 mb-4">
                  $399<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited AI agents</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited conversations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced AI training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Dedicated support</span>
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
            <p className="text-gray-600">
              Additional conversations: $0.10 per conversation • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Deploy Your AI Assistant?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your customer service with intelligent AI agents that work 24/7. Start your free trial and see the
            difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-trial">
              <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/en/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-500 px-8 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-purple-100 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
