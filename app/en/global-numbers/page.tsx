import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PriceCalculatorEn } from "@/components/price-calculator-en"
import {
  Globe,
  Phone,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  BarChart3,
  Star,
  Building,
  Headphones,
} from "lucide-react"

export default function GlobalNumbersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Phone
              <span className="text-teal-500 block">Numbers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Establish local presence in 80+ countries with virtual phone numbers. Reduce calling costs for customers
              and expand your business globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/en/free-trial">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/en/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-500 text-teal-500 hover:bg-teal-50 px-8 py-4 text-lg bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>80+ countries available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Instant activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
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
              <div className="text-3xl md:text-4xl font-bold text-teal-500 mb-2">80+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-500 mb-2">500+</div>
              <div className="text-gray-600">Area Codes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-500 mb-2">5min</div>
              <div className="text-gray-600">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-500 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Presence, Local Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build trust with local customers and expand your business worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">80+ Countries</h3>
                <p className="text-gray-600">
                  Local numbers available in major markets including US, UK, Canada, Australia, and across Europe, Asia,
                  and Latin America.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Flexible Routing</h3>
                <p className="text-gray-600">
                  Route calls to any destination - your office, mobile, call center, or VoIP system with advanced
                  routing rules.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Activation</h3>
                <p className="text-gray-600">
                  Get your global numbers activated within minutes. No paperwork, no waiting - start receiving calls
                  immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Analytics</h3>
                <p className="text-gray-600">
                  Detailed analytics for each number including call volume, duration, geographic distribution, and
                  performance metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">
                  Secure call routing with encryption, fraud protection, and compliance with local telecommunications
                  regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Management</h3>
                <p className="text-gray-600">
                  Manage all your global numbers from one dashboard. Update routing, view analytics, and configure
                  settings anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Global Numbers?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Presence</h3>
                    <p className="text-gray-600">
                      Establish credibility and trust with local customers by providing familiar local phone numbers in
                      their area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Reduce Costs</h3>
                    <p className="text-gray-600">
                      Lower calling costs for your customers and increase response rates by eliminating international
                      calling charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expand Markets</h3>
                    <p className="text-gray-600">
                      Enter new markets without physical offices. Test market demand and establish presence before major
                      investments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Headphones className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Better Support</h3>
                    <p className="text-gray-600">
                      Provide local customer support numbers that customers recognize and trust, improving satisfaction
                      and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Countries</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇺🇸</span>
                    <div>
                      <div className="font-semibold">United States</div>
                      <div className="text-sm text-gray-500">All area codes available</div>
                    </div>
                  </div>
                  <div className="text-teal-500 font-semibold">$2/month</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <div className="font-semibold">United Kingdom</div>
                      <div className="text-sm text-gray-500">London, Manchester, Birmingham</div>
                    </div>
                  </div>
                  <div className="text-teal-500 font-semibold">$3/month</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇨🇦</span>
                    <div>
                      <div className="font-semibold">Canada</div>
                      <div className="text-sm text-gray-500">Toronto, Vancouver, Montreal</div>
                    </div>
                  </div>
                  <div className="text-teal-500 font-semibold">$2/month</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇦🇺</span>
                    <div>
                      <div className="font-semibold">Australia</div>
                      <div className="text-sm text-gray-500">Sydney, Melbourne, Brisbane</div>
                    </div>
                  </div>
                  <div className="text-teal-500 font-semibold">$4/month</div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/en/free-trial">
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Get Your Numbers</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Costs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you can save with our transparent pricing
            </p>
          </div>

          <PriceCalculatorEn />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global numbers work for businesses of all sizes and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Startups & SMBs</h3>
                <p className="text-gray-600 mb-4">
                  Test new markets without physical presence. Establish credibility with local numbers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Market testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Cost-effective expansion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Professional image
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Provide local customer support numbers for international customers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Customer support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Order inquiries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Return assistance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-gray-600 mb-4">Centralize global communications while maintaining local presence.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Global offices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Unified communications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Cost optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Success Stories</h2>
            <p className="text-xl text-gray-600">See how businesses are expanding globally with our numbers</p>
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
                  "Global numbers helped us expand to 5 new countries without opening offices. Our international sales
                  increased 300% and customers love having local numbers to call."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Alex Thompson</div>
                    <div className="text-sm text-gray-500">VP International Sales, TechGlobal</div>
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
                  "We tested 3 European markets with local numbers before committing to offices. The insights we gained
                  saved us from making a costly mistake in one market."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Sophie Laurent</div>
                    <div className="text-sm text-gray-500">CEO, StartupEurope</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Go Global?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Get local phone numbers in 80+ countries and start expanding your business globally. No setup fees, instant
            activation, and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-trial">
              <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Your Numbers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/en/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-500 px-8 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-teal-100 text-sm mt-4">No credit card required • Instant activation • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
