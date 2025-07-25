import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Zap,
  Shield,
  Globe,
  BarChart3,
  MessageSquare,
  Phone,
  Send,
  Bot,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "APIs & Integrations - Developer Solutions | Universal Telecom",
  description:
    "Complete APIs to integrate our telecommunications services. REST API, webhooks, SDKs and comprehensive documentation for developers.",
  keywords: "telecom API, REST API, webhooks, SDK, integrations, developers, API documentation",
}

export default function APIsPage() {
  const apis = [
    {
      icon: Phone,
      title: "Voice API",
      description: "Integrate voice calls, text-to-speech and speech recognition",
      features: ["Outbound/Inbound calls", "Conference calls", "Call recording", "Text-to-Speech"],
      endpoint: "/api/v1/voice",
    },
    {
      icon: Send,
      title: "SMS API",
      description: "Send and receive SMS worldwide with our robust API",
      features: ["Bulk messaging", "Two-way SMS", "Short codes", "Delivery reports"],
      endpoint: "/api/v1/sms",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp API",
      description: "Automate your WhatsApp conversations",
      features: ["Template messages", "Media support", "Chatbots", "Advanced analytics"],
      endpoint: "/api/v1/whatsapp",
    },
    {
      icon: Bot,
      title: "AI Conversational API",
      description: "Integrate our AI agents into your systems",
      features: ["Advanced NLP", "Multi-language", "Continuous learning", "CRM integration"],
      endpoint: "/api/v1/ai",
    },
  ]

  const integrations = [
    {
      name: "Salesforce",
      logo: "🔗",
      description: "Complete synchronization with Salesforce CRM",
    },
    {
      name: "HubSpot",
      logo: "🎯",
      description: "Native integration with HubSpot",
    },
    {
      name: "Microsoft Teams",
      logo: "💼",
      description: "Connect your communications to Teams",
    },
    {
      name: "Slack",
      logo: "💬",
      description: "Notifications and controls via Slack",
    },
    {
      name: "Zapier",
      logo: "⚡",
      description: "Automations with 5000+ applications",
    },
    {
      name: "Webhooks",
      logo: "🔄",
      description: "Custom webhooks for your systems",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Optimal Performance",
      description: "High-performance APIs with response times < 100ms",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "OAuth 2.0 authentication and SSL/TLS encryption",
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Distributed infrastructure with 99.9% SLA",
    },
    {
      icon: BarChart3,
      title: "Integrated Analytics",
      description: "Detailed metrics and real-time reports",
    },
    {
      icon: Code,
      title: "Complete Documentation",
      description: "Guides, examples and SDKs for all languages",
    },
    {
      icon: Users,
      title: "Developer Support",
      description: "Dedicated team to support your integrations",
    },
  ]

  const testimonials = [
    {
      name: "Thomas Wilson",
      company: "TechStart Inc",
      content:
        "Universal Telecom's APIs allowed us to easily integrate telephony into our CRM. Excellent documentation and responsive support.",
      rating: 5,
    },
    {
      name: "Sophie Anderson",
      company: "Digital Solutions",
      content: "The WhatsApp API revolutionized our customer service. Simple integration and advanced features.",
      rating: 5,
    },
  ]

  const pricingTiers = [
    {
      name: "Developer",
      price: "Free",
      description: "For testing and development",
      features: ["1,000 API calls/month", "Complete documentation", "Community support", "Test environment"],
      popular: false,
    },
    {
      name: "Startup",
      price: "$49/month",
      description: "For young companies",
      features: ["50,000 API calls/month", "Email support", "Webhooks included", "Basic analytics", "Official SDKs"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions",
      features: ["Unlimited API calls", "24/7 dedicated support", "Custom SLA", "Custom integrations", "Team training"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">APIs & Integrations</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Powerful APIs for Your Applications</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Easily integrate our communication services into your applications with our REST APIs. Complete
              documentation, official SDKs and dedicated developer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/en/free-trial" className="flex items-center">
                  Start Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/en/demo">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Available APIs</h2>
            <p className="text-xl text-gray-600">A complete suite of APIs for all your communication needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apis.map((api, index) => {
              const Icon = api.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{api.title}</CardTitle>
                        <code className="text-sm text-gray-500">{api.endpoint}</code>
                      </div>
                    </div>
                    <CardDescription className="text-base">{api.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {api.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple Integration</h2>
            <p className="text-xl text-gray-600">Start using our APIs in minutes</p>
          </div>

          <Tabs defaultValue="auth" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="auth">Authentication</TabsTrigger>
              <TabsTrigger value="voice">Voice API</TabsTrigger>
              <TabsTrigger value="sms">SMS API</TabsTrigger>
              <TabsTrigger value="webhook">Webhooks</TabsTrigger>
            </TabsList>

            <TabsContent value="auth" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Authentication</CardTitle>
                  <CardDescription>Use your API key to authenticate your requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`// Authentication with Bearer Token
const response = await fetch('https://api.universaltelecom.com/v1/account', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const account = await response.json();
console.log('Account info:', account);`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="voice" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Call</CardTitle>
                  <CardDescription>Initiate a voice call via API</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`// Initiate a call
const callData = {
  from: '+1234567890',
  to: '+0987654321',
  url: 'https://yourapp.com/voice-instructions.xml'
};

const response = await fetch('https://api.universaltelecom.com/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(callData)
});

const call = await response.json();
console.log('Call initiated:', call.sid);`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sms" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send SMS</CardTitle>
                  <CardDescription>Send an SMS via API</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`// Send an SMS
const smsData = {
  to: '+1234567890',
  from: 'MyBusiness',
  body: 'Hello! Your order is ready for pickup.'
};

const response = await fetch('https://api.universaltelecom.com/v1/messages', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(smsData)
});

const message = await response.json();
console.log('SMS sent:', message.sid);`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="webhook" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Webhook Configuration</CardTitle>
                  <CardDescription>Receive real-time notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`// Configure a webhook
const webhookData = {
  url: 'https://yourapp.com/webhooks/sms-status',
  events: ['message.delivered', 'message.failed'],
  method: 'POST'
};

const response = await fetch('https://api.universaltelecom.com/v1/webhooks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(webhookData)
});

// Process webhook in your application
app.post('/webhooks/sms-status', (req, res) => {
  const { event, data } = req.body;
  console.log('Webhook received:', event, data);
  res.status(200).send('OK');
});`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Integrations</h2>
            <p className="text-xl text-gray-600">Connect easily with your favorite tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{integration.logo}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-gray-600">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our APIs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Developer Pricing</h2>
            <p className="text-xl text-gray-600">Start free, scale as you grow</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-blue-500 border-2" : "border-gray-200"}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
                  >
                    <Link href="/en/free-trial">{tier.name === "Enterprise" ? "Contact Us" : "Get Started"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Developer Feedback</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Integrate Our APIs?</h2>
          <p className="text-xl text-blue-100 mb-8">Start your development today with our free plan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/en/free-trial" className="flex items-center">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/en/contact">API Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
