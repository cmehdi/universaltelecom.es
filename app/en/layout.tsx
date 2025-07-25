import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation-en"
import { Footer } from "@/components/footer-en"

export const metadata: Metadata = {
  title: {
    default: "Universal Telecom - Professional Business Communications",
    template: "%s | Universal Telecom",
  },
  description:
    "Transform your business communications with Universal Telecom's professional solutions. Virtual PBX, WhatsApp Business API, AI agents, call analytics, and global numbers. Trusted by 50,000+ businesses worldwide.",
  keywords: [
    "business phone system",
    "virtual pbx",
    "whatsapp business api",
    "ai chatbots",
    "call analytics",
    "global numbers",
    "business communications",
    "cloud phone system",
    "universal telecom",
    "enterprise telephony",
  ],
  authors: [{ name: "Universal Telecom", url: "https://universaltelecom.com" }],
  creator: "Universal Telecom",
  publisher: "Universal Telecom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://universaltelecom.com"),
  alternates: {
    canonical: "/en",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://universaltelecom.com/en",
    siteName: "Universal Telecom",
    title: "Universal Telecom - Professional Business Communications",
    description:
      "Transform your business communications with professional solutions. Virtual PBX, WhatsApp Business API, AI agents, and more. Trusted by 50,000+ businesses worldwide.",
    images: [
      {
        url: "/images/og-image-en.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Telecom - Business Communications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Telecom - Professional Business Communications",
    description:
      "Transform your business communications with professional solutions. Virtual PBX, WhatsApp Business API, AI agents, and more.",
    images: ["/images/twitter-image-en.jpg"],
    creator: "@universaltelecom",
    site: "@universaltelecom",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Universal Telecom",
  url: "https://universaltelecom.com/en",
  logo: "https://universaltelecom.com/logo.png",
  description:
    "Leading provider of business communication solutions including virtual PBX, WhatsApp Business API, AI agents, and call analytics.",
  foundingDate: "2010",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "French"],
      areaServed: ["US", "CA", "GB", "AU", "NZ"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4568",
      contactType: "sales",
      availableLanguage: ["English", "Spanish", "French"],
      areaServed: ["US", "CA", "GB", "AU", "NZ"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Ave",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/universal-telecom",
    "https://twitter.com/universaltelecom",
    "https://www.facebook.com/universaltelecom",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Communication Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virtual PBX",
          description: "Cloud-based business phone system with advanced features",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WhatsApp Business API",
          description: "Official WhatsApp integration for businesses with automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agents",
          description: "Intelligent chatbots and virtual assistants with conversational AI",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Call Analytics",
          description: "Advanced call analysis with artificial intelligence",
        },
      },
    ],
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
