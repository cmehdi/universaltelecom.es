"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  Bot,
  BarChart3,
  Headphones,
  ChevronDown,
  Hash,
  Code,
  Send,
  Globe,
} from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { trackButtonClick, trackPhoneCall } = useAnalytics()

  const handlePhoneCall = () => {
    trackPhoneCall()
  }

  const handleCTAClick = (ctaType: string, location: string) => {
    trackButtonClick(ctaType, location)
  }

  const isActive = (path: string) => pathname === path

  const mainServices = [
    {
      name: "Virtual PBX",
      href: "/en/virtual-pbx",
      icon: Headphones,
    },
    {
      name: "WhatsApp API",
      href: "/en/whatsapp-business-api",
      icon: MessageSquare,
    },
    {
      name: "AI Agents",
      href: "/en/ai-agents",
      icon: Bot,
    },
    {
      name: "Call Analytics",
      href: "/en/call-analytics",
      icon: BarChart3,
    },
    {
      name: "Global Numbers",
      href: "/en/global-numbers",
      icon: Hash,
    },
  ]

  const additionalServices = [
    {
      name: "SMS API",
      href: "/en/sms-api",
      icon: Send,
    },
    {
      name: "APIs & Integrations",
      href: "/en/apis",
      icon: Code,
    },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <span>📧 sales@universaltelecom.com</span>
              <span className="hidden md:block">🕒 Mon-Thu: 09:30-19:00 | Fri: 09:30-18:00</span>
              <a
                href="tel:+1555123456"
                onClick={handlePhoneCall}
                className="flex items-center text-orange-600 hover:text-orange-700 font-medium"
              >
                <Phone className="h-4 w-4 mr-1" />
                +1 (555) 123-4567
              </a>
            </div>

            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                <Globe className="h-4 w-4 mr-1" />
                EN <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem asChild>
                  <Link href="/" className="flex items-center">
                    🇪🇸 Español
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/en" className="flex items-center">
                    🇺🇸 English
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/fr" className="flex items-center">
                    🇫🇷 Français
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/en" className="flex items-center">
              <Image src="/logo.png" alt="Universal Telecom" width={200} height={40} className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {mainServices.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(service.href)
                        ? "text-orange-600 border-b-2 border-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {service.name}
                  </Link>
                )
              })}

              {/* More Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600">
                  More Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {additionalServices.map((service) => {
                    const Icon = service.icon
                    return (
                      <DropdownMenuItem key={service.href} asChild>
                        <Link href={service.href} className="flex items-center">
                          <Icon className="w-4 h-4 mr-2" />
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Phone and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm" onClick={() => handleCTAClick("request_demo", "header")}>
              <Link href="/en/demo">Request Demo</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-orange-600 hover:bg-orange-700"
              onClick={() => handleCTAClick("free_trial", "header")}
            >
              <Link href="/en/free-trial">14-Day Free Trial</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {/* Main Services */}
              {mainServices.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-3 py-2 text-base font-medium transition-colors ${
                      isActive(service.href)
                        ? "text-orange-600 bg-orange-50 border-l-4 border-orange-600"
                        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {service.name}
                  </Link>
                )
              })}

              {/* Additional Services */}
              <div className="border-t pt-2 mt-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  More Services
                </div>
                {additionalServices.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center px-3 py-2 text-base font-medium transition-colors ${
                        isActive(service.href)
                          ? "text-orange-600 bg-orange-50 border-l-4 border-orange-600"
                          : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {service.name}
                    </Link>
                  )
                })}
              </div>

              {/* Language Selector Mobile */}
              <div className="border-t pt-2 mt-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Language</div>
                <Link
                  href="/"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                >
                  🇪🇸 Español
                </Link>
                <Link
                  href="/en"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                >
                  🇺🇸 English
                </Link>
                <Link
                  href="/fr"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                >
                  🇫🇷 Français
                </Link>
              </div>

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-2 px-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => handleCTAClick("request_demo", "mobile_menu")}
                  >
                    <Link href="/en/demo">Request Demo</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => handleCTAClick("free_trial", "mobile_menu")}
                  >
                    <Link href="/en/free-trial">14-Day Free Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
