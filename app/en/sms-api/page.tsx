import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Send,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Users,
  Star,
  Code,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SMS API - Mass SMS Messaging | Universal Telecom",
  description:
    "Powerful SMS API for mass messaging. Easy integration, guaranteed delivery, and competitive rates. Perfect for marketing, notifications, and alerts.",
  keywords: "SMS API, bulk SMS, SMS marketing, SMS notifications, messaging API, business SMS",
}

export default function SMSAPIPage() {
  const features = [
    {
      icon: Send,
      title: "Instant Delivery",
      description: "Send your SMS messages in seconds to over 200 countries worldwide",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide network with top carriers for optimal delivery rates",
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description: "SSL/TLS encryption and GDPR compliance to protect your data",
    },
    {
      icon: BarChart3,
      title: "Detailed Reports",
      description: "Real-time statistics on delivery and engagement rates",
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Simple REST API with comprehensive documentation",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Process millions of messages with 99.9% uptime",
    },
  ]

  const useCases = [
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "Promotional campaigns and SMS newsletters",
    },
    {
      icon: Shield,
      title: "Security Notifications",
      description: "Verification codes and 2FA authentication",
    },
    {
      icon: Clock,
      title: "Automated Alerts",
      description: "System notifications and automated reminders",
    },
    {
      icon: Users,
      title: "Customer Communication",
      description: "Order confirmations and status updates",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Plus",
      content:
        "Universal Telecom's SMS API transformed our customer communication. Excellent delivery rates and very simple integration.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "FinTech Solutions",
      content:
        "For our verification codes, we need reliability. This API gives us exactly what we need with great performance.",
      rating: 5,
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0.05",
      currency: "",
      unit: "per SMS",
      description: "Perfect to get started",
      features: ["Up to 1,000 SMS/month", "Complete REST API", "Email support", "Basic reports"],
      popular: false,
    },
    {
      name: "Business",
      price: "$0.04",
      currency: "",
      unit: "per SMS",
      description: "For growing businesses",
      features: [
        "Up to 10,000 SMS/month",
        "REST API + Webhooks",
        "Priority support",
        "Advanced reports",
        "Custom sender IDs",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      currency: "",
      unit: "",
      description: "Tailored solutions",
      features: [
        "Unlimited volume",
        "99.9% SLA guarantee",
        "24/7 dedicated support",
        "Custom integration",
        "Negotiated rates",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Professional SMS API</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Powerful SMS API for Your Applications
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Easily integrate SMS sending into your applications with our REST API. Instant delivery, global
                coverage, and competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/en/free-trial" className="flex items-center">
                    14-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/en/demo">View Documentation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="mb-2">POST /api/v1/sms/send</div>
                  <div className="text-gray-400">{"{"}</div>
                  <div className="ml-4 text-blue-400">"to": "+1234567890",</div>
                  <div className="ml-4 text-blue-400">"message": "Your code: 123456",</div>
                  <div className="ml-4 text-blue-400">"from": "YourApp"</div>
                  <div className="text-gray-400">{"}"}</div>
                  <div className="mt-4 text-green-400">✓ Message sent successfully</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple Integration</h2>
            <p className="text-xl text-gray-600">Start sending SMS in minutes with our easy-to-use API</p>
          </div>

          <Tabs defaultValue="curl" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
            </TabsList>

            <TabsContent value="curl" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`curl -X POST https://api.universaltelecom.com/v1/sms/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "message": "Hello! Your order is ready for pickup.",
    "from": "MyBusiness"
  }'`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="javascript" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`const response = await fetch('https://api.universaltelecom.com/v1/sms/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Hello! Your order is ready for pickup.',
    from: 'MyBusiness'
  })
});

const result = await response.json();
console.log(result);`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="python" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`import requests

url = "https://api.universaltelecom.com/v1/sms/send"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "to": "+1234567890",
    "message": "Hello! Your order is ready for pickup.",
    "from": "MyBusiness"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="php" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {`<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.universaltelecom.com/v1/sms/send',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
  ),
  CURLOPT_POSTFIELDS => json_encode(array(
    'to' => '+1234567890',
    'message' => 'Hello! Your order is ready for pickup.',
    'from' => 'MyBusiness'
  ))
));

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our SMS API?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete and reliable solution for all your SMS messaging needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Use Cases</h2>
            <p className="text-xl text-gray-600">Discover how our customers use our SMS API</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-orange-500 border-2" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">
                      {plan.currency} {plan.unit}
                    </span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-900 hover:bg-gray-800"}`}
                  >
                    <Link href="/en/free-trial">{plan.name === "Enterprise" ? "Contact Us" : "Get Started"}</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Integrate Our SMS API?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Start your free trial today and discover the power of our SMS API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/en/free-trial" className="flex items-center">
                14-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Link href="/en/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
