import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Users,
  Headphones,
  BarChart3,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Mic,
  Settings,
} from "lucide-react"

export default function VirtualPBXPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-blue-500 block">Virtual PBX</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete cloud phone system for modern businesses. Advanced features, unlimited extensions, and
              enterprise-grade reliability at a fraction of traditional PBX costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/en/free-trial">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/en/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                >
                  Request Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No hardware required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>99.9% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything Your Business Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional phone system features that scale with your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Unlimited Extensions</h3>
                <p className="text-gray-600">
                  Add as many extensions as you need. Perfect for growing teams and distributed workforces.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Call Routing</h3>
                <p className="text-gray-600">
                  Route calls based on time, location, agent availability, or custom rules to ensure every call is
                  answered.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Recording</h3>
                <p className="text-gray-600">
                  Automatic call recording with secure cloud storage. Perfect for training, compliance, and quality
                  assurance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Detailed call analytics, performance metrics, and real-time dashboards to optimize your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile & Desktop Apps</h3>
                <p className="text-gray-600">
                  Native apps for iOS, Android, Windows, and Mac. Work from anywhere with full PBX functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy Management</h3>
                <p className="text-gray-600">
                  Intuitive web portal for managing users, settings, and features. No technical expertise required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Virtual PBX?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
                    <p className="text-gray-600">
                      Get your phone system running in minutes, not weeks. No hardware installation or complex
                      configuration required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">
                      Bank-level encryption, secure data centers, and compliance with industry standards including HIPAA
                      and SOC 2.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                    <p className="text-gray-600">
                      Local numbers in 80+ countries, international calling rates, and global infrastructure for
                      reliable service worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Headphones className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Expert technical support available around the clock. Phone, chat, and email support with
                      guaranteed response times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Starter</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-500">$15</div>
                      <div className="text-sm text-gray-500">per user/month</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Unlimited domestic calls
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Basic call routing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Voicemail to email
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-blue-500 rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Professional</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-500">$25</div>
                      <div className="text-sm text-gray-500">per user/month</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Everything in Starter
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Call recording & analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Advanced call routing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Mobile & desktop apps
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Enterprise</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-500">$45</div>
                      <div className="text-sm text-gray-500">per user/month</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Everything in Professional
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Advanced analytics & reporting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Custom integrations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/en/free-trial">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start Free Trial</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your Phone System?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have modernized their communications with our Virtual PBX. Start your free
            trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-trial">
              <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/en/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-blue-100 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
