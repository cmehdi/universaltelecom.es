import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/en" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Universal Telecom" width={32} height={32} />
              <span className="text-xl font-bold">Universal Telecom</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Professional business communications solutions. Virtual PBX, AI, WhatsApp Business API and global numbers.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@universaltelecom.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <div className="space-y-2 text-sm">
              <Link href="/en/virtual-pbx" className="block text-gray-400 hover:text-white transition-colors">
                Virtual PBX
              </Link>
              <Link href="/en/whatsapp-business-api" className="block text-gray-400 hover:text-white transition-colors">
                WhatsApp Business API
              </Link>
              <Link href="/en/ai-agents" className="block text-gray-400 hover:text-white transition-colors">
                AI Agents & Chatbots
              </Link>
              <Link href="/en/call-analytics" className="block text-gray-400 hover:text-white transition-colors">
                Call Analytics
              </Link>
              <Link href="/en/global-numbers" className="block text-gray-400 hover:text-white transition-colors">
                Global Numbers
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/en/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/en/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/en/careers" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/en/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link href="/en/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/en/terms-of-service" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/en/cookie-policy" className="block text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/en/legal-notice" className="block text-gray-400 hover:text-white transition-colors">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Universal Telecom. All rights reserved.</div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                🇪🇸 Español
              </Link>
              <Link href="/en" className="text-sm text-orange-500 font-medium">
                🇺🇸 English
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
