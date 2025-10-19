import { Phone, CheckCircle, ArrowRight, Users, Zap, Shield, BarChart3, Headphones, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Virtual PBX | Cloud Phone System | Universal Telecom",
  description:
    "Professional cloud-based Virtual PBX. No hardware required, setup in 15 minutes. CRM integration, advanced AI and 24/7 support. 14-day free trial.",
  keywords: "virtual pbx, cloud pbx, business phone system, virtual phone system, ip pbx, business voip",
  openGraph: {
    title: "Professional Virtual PBX - The Future of Business Phone Systems",
    description:
      "Hardware-free Virtual PBX. Instant setup, CRM integration and advanced AI. Over 2,000 businesses trust us.",
    type: "website",
  },
}

export default function VirtualPBXPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Professional Cloud PBX
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Virtual PBX: The Future of Business Communications
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Forget hardware. Embrace the cloud. Our Virtual PBX eliminates the technical complexity of traditional
                  phone systems and revolutionizes business communications.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Unique competitive advantages of our Virtual PBX
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Setup in 15 minutes: Your Virtual PBX ready to use today</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant scalability: Add unlimited users to your Virtual PBX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Native CRM integration: Clientify, HubSpot, Odoo, Zoho and more
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Guaranteed HD audio: Superior quality to traditional lines</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/en/free-trial?product=virtual-pbx">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    14-Day Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/en/demo?product=virtual-pbx">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx01-iaFxSiCeGs0unly1YAoBCStrmX4ODg.png"
                alt="Virtual PBX dashboard with real-time agent statistics, call metrics and monitoring"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Complete Virtual PBX Features</h2>
            <p className="text-xl text-gray-600">All the professional tools you need in one platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Extensions Management */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Advanced Extension Management</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx02-d2IU4MJVlaWfTAjSkshjt5U9Low1Ip.png"
                alt="Extension management panel with detailed user configuration and permissions"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Manage all extensions from an intuitive panel. Configure permissions, recordings, call forwarding and
                specific features for each Virtual PBX user.
              </p>
            </div>

            {/* Call History */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Complete Call History</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx03-ASEcvfiTZjKkXRlIRpDYwdxUT4UBuH.png"
                alt="Detailed call history with advanced filters and audio playback"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Access complete history with advanced filters, duration, call status and direct playback of recordings.
                Export data for external analysis.
              </p>
            </div>

            {/* Contact Management */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Integrated Contact Database</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx04-akkWSlZhUX99hw4eOW3ATyxPP4kgTG.png"
                alt="Contact management system with import, export and automatic classification"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Manage 900+ contacts with bulk import, automatic classification and CRM synchronization. Advanced search
                and quick actions included.
              </p>
            </div>

            {/* Real-time Dashboard */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Real-time Monitoring</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx01-iaFxSiCeGs0unly1YAoBCStrmX4ODg.png"
                alt="Real-time dashboard with agent statistics, active calls and service level"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Monitor your Virtual PBX status instantly: connected agents, ongoing calls, service statistics and
                performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white" id="plans">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Virtual PBX Plans That Scale With Your Growth
            </h2>
            <p className="text-xl text-gray-600">No fine print, no surprises with your Virtual PBX</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Global Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Global Plan</CardTitle>
                  <CardDescription>Perfect Virtual PBX for small businesses</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">€45</div>
                  <div className="text-gray-500">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">6 users included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">500 minutes per user</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1 free local number</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Customizable IVR</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Call recording</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Mobile app included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 support</span>
                  </li>
                </ul>
                <Link href="/en/free-trial?product=virtual-pbx&plan=global">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Smart Plan */}
            <Card className="relative border-2 border-purple-300 hover:border-purple-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Smart Plan</CardTitle>
                  <CardDescription>Virtual PBX with basic AI for growing businesses</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">€112.5</div>
                  <div className="text-gray-500">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Everything in Global</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI: Automatic transcription</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI: Call summaries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1,000 minutes per user</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic CRM integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Smart call queue</span>
                  </li>
                </ul>
                <Link href="/en/free-trial?product=virtual-pbx&plan=smart">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Start Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Total Plan */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Total Plan</CardTitle>
                  <CardDescription>Complete Virtual PBX with advanced AI</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">€225</div>
                  <div className="text-gray-500">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Everything in Smart</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI: Sentiment analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">WhatsApp Business integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Unlimited calls</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">3 local numbers included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Complete REST API</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority technical support</span>
                  </li>
                </ul>
                <Link href="/en/free-trial?product=virtual-pbx&plan=total">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-4">Additional services for your Virtual PBX</h3>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
              <div>
                Additional user: <strong>from €7.5/month + VAT</strong>
              </div>
              <div>
                Additional number: <strong>€5/month</strong>
              </div>
              <div>
                3 months recordings: <strong>5GB included</strong>
              </div>
              <div>
                Advanced Reports: <strong>Included</strong>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
              <p>
                <strong>What's included with each user in your Virtual PBX?</strong> Each user has full access to the
                Virtual PBX: phone extension, mobile app, web panel, call recording, CRM integration, personal
                statistics and included technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              CRM Integrations That Power Your Virtual PBX
            </h2>
            <p className="text-xl text-gray-600">Connect your Virtual PBX with the tools you already use</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
                  CRM & Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Clientify</div>
                    <div className="text-sm text-gray-600">Complete integration with Spanish CRM</div>
                  </div>
                  <div>
                    <div className="font-medium">HubSpot</div>
                    <div className="text-sm text-gray-600">Ticket creation and lead tracking</div>
                  </div>
                  <div>
                    <div className="font-medium">Odoo</div>
                    <div className="text-sm text-gray-600">Complete ERP with call management</div>
                  </div>
                  <div>
                    <div className="font-medium">Zoho CRM</div>
                    <div className="text-sm text-gray-600">Automatic call and contact logging</div>
                  </div>
                  <div>
                    <div className="font-medium">Google Contacts</div>
                    <div className="text-sm text-gray-600">Automatic contact synchronization</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  Productivity Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Zapier</div>
                    <div className="text-sm text-gray-600">500+ integrations available</div>
                  </div>
                  <div>
                    <div className="font-medium">Slack</div>
                    <div className="text-sm text-gray-600">Missed call notifications</div>
                  </div>
                  <div>
                    <div className="font-medium">Google Workspace</div>
                    <div className="text-sm text-gray-600">Complete Gmail and Calendar integration</div>
                  </div>
                  <div>
                    <div className="font-medium">Zendesk</div>
                    <div className="text-sm text-gray-600">Integrated customer support</div>
                  </div>
                  <div>
                    <div className="font-medium">Make (Integromat)</div>
                    <div className="text-sm text-gray-600">Advanced process automation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-green-500" />
                  Complete REST API
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Build custom integrations with our documented API. Endpoints for user management, calls, recordings
                  and analysis of your Virtual PBX.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View API Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Real use cases of our Virtual PBX</h2>
            <p className="text-xl text-gray-600">
              Companies that have already transformed their communications with our Virtual PBX
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Consulting firm (25 employees)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Migrated from a traditional PBX to our Virtual PBX saving <strong>€1,200/year</strong> in maintenance.
                  HubSpot integration automated the registration of 200+ monthly contacts.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Savings: €1,200/year with Virtual PBX</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dental clinic (8 lines)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Reduced missed calls by <strong>40%</strong> with intelligent IVR from the Virtual PBX. Automatic
                  WhatsApp reminders increased attendance by 25%.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">-40% missed calls</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* No fine print */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              No fine print, no surprises with your Virtual PBX
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold">Free installation</h3>
              <p className="text-sm text-gray-600">Set up your Virtual PBX from our web panel</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Number portability included</h3>
              <p className="text-sm text-gray-600">Keep your current numbers in the Virtual PBX</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Transparent billing</h3>
              <p className="text-sm text-gray-600">No hidden costs in your Virtual PBX</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Support included</h3>
              <p className="text-sm text-gray-600">Virtual PBX specialist technicians at no extra cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to modernize your phone system with our Virtual PBX?
            </h2>
            <p className="text-xl opacity-90">
              Join the companies that already enjoy unlimited communications with our Virtual PBX. Migration is easier
              than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/demo?product=virtual-pbx">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8">
                  Request Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/en/free-trial?product=virtual-pbx">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-500 bg-transparent"
                >
                  14-Day Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
