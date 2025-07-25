import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Mic,
  Brain,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Headphones,
  Star,
  Target,
  AlertCircle,
} from "lucide-react"

export default function CallAnalyticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered
              <span className="text-indigo-500 block">Call Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your call data into actionable insights with AI-powered transcription, sentiment analysis, and
              performance metrics that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/en/free-trial">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/en/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 px-8 py-4 text-lg bg-transparent"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Real-time transcription</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sentiment analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Performance insights</span>
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
              <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">50+</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">Real-time</div>
              <div className="text-gray-600">Processing</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">100%</div>
              <div className="text-gray-600">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Call Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the power of your call data with AI-driven insights and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Transcription</h3>
                <p className="text-gray-600">
                  Accurate speech-to-text conversion in real-time with support for 50+ languages and dialects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
                <p className="text-gray-600">
                  AI-powered sentiment detection to understand customer emotions and satisfaction levels throughout
                  calls.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance Dashboards</h3>
                <p className="text-gray-600">
                  Comprehensive dashboards with KPIs, trends, and actionable insights for managers and agents.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Keyword Spotting</h3>
                <p className="text-gray-600">
                  Automatically detect important keywords, compliance phrases, and conversation topics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
                <p className="text-gray-600">
                  Identify patterns, trends, and opportunities in your call data over time with predictive insights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Monitoring</h3>
                <p className="text-gray-600">
                  Automated call scoring and quality assessment based on customizable criteria and standards.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Call Center Operations</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Improve Agent Performance</h3>
                    <p className="text-gray-600">
                      Identify coaching opportunities, track improvement, and optimize agent performance with
                      data-driven insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enhance Customer Experience</h3>
                    <p className="text-gray-600">
                      Understand customer sentiment, identify pain points, and improve service quality based on real
                      conversations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ensure Compliance</h3>
                    <p className="text-gray-600">
                      Automatically monitor compliance with regulations, scripts, and company policies across all calls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Save Time & Resources</h3>
                    <p className="text-gray-600">
                      Automate manual call review processes and focus your team on high-impact activities and
                      improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics Dashboard</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-500">Average Call Duration</div>
                    <div className="text-2xl font-bold text-indigo-500">4:32</div>
                  </div>
                  <div className="text-green-500 text-sm">↓ 12%</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-500">Customer Satisfaction</div>
                    <div className="text-2xl font-bold text-green-500">4.8/5</div>
                  </div>
                  <div className="text-green-500 text-sm">↑ 8%</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-500">First Call Resolution</div>
                    <div className="text-2xl font-bold text-blue-500">87%</div>
                  </div>
                  <div className="text-green-500 text-sm">↑ 15%</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-500">Compliance Score</div>
                    <div className="text-2xl font-bold text-purple-500">94%</div>
                  </div>
                  <div className="text-green-500 text-sm">↑ 3%</div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/en/demo">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">See Live Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Call analytics solutions tailored to your industry's specific needs and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
                <p className="text-gray-600 mb-4">
                  Monitor service quality, track resolution times, and identify training opportunities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Call quality scoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Agent performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Customer satisfaction analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sales Teams</h3>
                <p className="text-gray-600 mb-4">
                  Analyze sales calls, identify successful patterns, and improve conversion rates.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Conversion tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Objection analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Sales coaching insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Ensure compliance, monitor risk, and maintain regulatory standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Compliance monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Risk assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    Regulatory reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">See how call analytics is transforming businesses across industries</p>
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
                  "Call analytics helped us identify why our customer satisfaction was declining. We discovered specific
                  pain points and improved our processes. CSAT increased by 35% in 3 months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Jennifer Martinez</div>
                    <div className="text-sm text-gray-500">VP Customer Experience, ServicePro</div>
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
                  "The sentiment analysis feature is incredible. We can now identify frustrated customers in real-time
                  and escalate appropriately. Our retention rate improved by 28%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Robert Thompson</div>
                    <div className="text-sm text-gray-500">Call Center Manager, TechSupport Inc</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Call Analytics Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing based on your call volume and analytics needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Starter</h3>
                <div className="text-3xl font-bold text-indigo-500 mb-4">
                  $99<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Up to 1,000 calls/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Real-time transcription</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Basic sentiment analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Standard dashboards</span>
                  </li>
                </ul>
                <Link href="/en/free-trial">
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="text-3xl font-bold text-indigo-500 mb-4">
                  $299<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Up to 10,000 calls/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Keyword spotting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">API access</span>
                  </li>
                </ul>
                <Link href="/en/free-trial">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-indigo-500 mb-4">
                  $799<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited calls</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced AI models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">White-label options</span>
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
            <p className="text-gray-600">Additional calls: $0.15 per call • No setup fees • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Your Call Data Insights?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Transform your call center with AI-powered analytics that drive performance, compliance, and customer
            satisfaction. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/free-trial">
              <Button size="lg" className="bg-white text-indigo-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/en/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-500 px-8 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-indigo-100 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
