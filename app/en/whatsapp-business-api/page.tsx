import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Users,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Bot,
  Smartphone,
  TrendingUp,
  Headphones,
} from "lucide-react"
import Image from "next/image"

export default function WhatsAppBusinessAPIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-700">Official WhatsApp Business API Partner</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  WhatsApp Business
                  <span className="text-green-500 block">API for Companies</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with your customers where they are. Official WhatsApp API with CRM integration, custom
                  templates, and multi-agent support. Join 500+ companies already using it.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Why WhatsApp Business API?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">2B+ active users - Guaranteed global reach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">98% open rate - 10x higher than email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">CRM integration - Zoho, HubSpot, Salesforce and more</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24h setup - No technical development required</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/en/free-trial?product=whatsapp-api">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/en/demo?product=whatsapp-api">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-50 bg-transparent"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/utcom3-16h79RzVRjHKQb1NvNDsLXzCMpnHqQ.png"
                alt="WhatsApp Business API interface with conversations, AI and automatic templates"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to communicate professionally on WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Custom Templates</CardTitle>
                <CardDescription>Pre-approved WhatsApp messages</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Order confirmations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Appointment reminders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Shipping notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Promotions and offers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Multi-Agent</CardTitle>
                <CardDescription>Team management and assignment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multiple operators</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automatic assignment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Working hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Per-agent metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>CRM Integration</CardTitle>
                <CardDescription>Connect with your current system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>HubSpot, Salesforce</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Zoho, Pipedrive</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Custom API</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automatic sync</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Smart Chatbots</CardTitle>
                <CardDescription>AI automation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automatic responses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Conversation flows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Human escalation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Continuous learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>Detailed metrics and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Delivery rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Response time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customer satisfaction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>ROI per campaign</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>Compliance and protection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>GDPR compliant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automatic backup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Complete audit trail</span>
                  </li>
                </ul>
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
              Choose the plan that best suits your conversation volume
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Basic Plan */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <div className="text-3xl font-bold text-green-500 mt-4">
                  €25<span className="text-lg text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-4">WhatsApp with agents only</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">WhatsApp Business API</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Multi-agent management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">2 agents included</span>
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
                <Link href="/en/free-trial?product=whatsapp-api&plan=basic">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Start Trial</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-green-500 mt-4">
                  €49<span className="text-lg text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-4">With chatbot and agents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">1,000 conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Basic chatbot</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">3 custom templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Basic CRM integration</span>
                  </li>
                </ul>
                <Link href="/en/free-trial?product=whatsapp-api&plan=starter">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Start Trial</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Business</CardTitle>
                <div className="text-3xl font-bold text-green-500 mt-4">
                  €99<span className="text-lg text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-4">Ideal for growing companies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">3,000 conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">10 custom templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced chatbot</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Link href="/en/free-trial?product=whatsapp-api&plan=business">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Start Trial</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-green-500 mt-4">
                  <span className="text-2xl">Contact Us</span>
                </div>
                <div className="text-gray-600">&nbsp;</div>
                <CardDescription className="mt-4">For large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited conversations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Everything in Business</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced AI chatbots</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Full API access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">24/7 support</span>
                  </li>
                </ul>
                <Link href="/en/contact?product=whatsapp-api&plan=enterprise">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Additional conversations: €0.05 each • No setup fees • No contracts • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Use Cases</h2>
            <p className="text-xl text-gray-600">How our customers use WhatsApp Business API</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>Order confirmations and tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automate order confirmations, shipping notifications, and handle returns. Increase customer
                  satisfaction with proactive communication.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Satisfaction</span>
                    <span className="text-sm font-medium text-green-600">+35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Support queries</span>
                    <span className="text-sm font-medium text-blue-600">-40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Services</CardTitle>
                <CardDescription>Appointment reminders and confirmations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reduce no-shows with automatic reminders. Enable easy rescheduling and confirm appointments. Perfect
                  for clinics, salons, and consultancies.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">No-shows</span>
                    <span className="text-sm font-medium text-green-600">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Confirmations</span>
                    <span className="text-sm font-medium text-blue-600">+80%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>Targeted campaigns and promotions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send personalized offers, exclusive promotions, and relevant content. Segment audiences and measure
                  ROI for each campaign.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Open rate</span>
                    <span className="text-sm font-medium text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Conversion</span>
                    <span className="text-sm font-medium text-blue-600">+25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Support</CardTitle>
                <CardDescription>24/7 customer service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Resolve queries quickly with smart chatbots. Escalate to human agents when needed. Complete
                  conversation history.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response time</span>
                    <span className="text-sm font-medium text-green-600">-70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Auto-resolution</span>
                    <span className="text-sm font-medium text-blue-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Human Resources</CardTitle>
                <CardDescription>Internal and external communication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Communicate with candidates, schedule interviews, and keep employees informed. Automate recruitment
                  and onboarding processes.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Hiring time</span>
                    <span className="text-sm font-medium text-green-600">-45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Candidate satisfaction</span>
                    <span className="text-sm font-medium text-blue-600">+50%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Real Estate</CardTitle>
                <CardDescription>Lead management and viewings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Qualify leads automatically, schedule viewings, and keep clients informed about new properties that
                  match their criteria.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Lead qualification</span>
                    <span className="text-sm font-medium text-green-600">+55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Scheduled viewings</span>
                    <span className="text-sm font-medium text-blue-600">+40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect with Your Customers on WhatsApp?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join 500+ companies using WhatsApp Business API to provide better customer service and drive more sales.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-trial?product=whatsapp-api">
              <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/en/contact?product=whatsapp-api">
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
