import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { CookieBanner } from "@/components/cookie-banner"
import { LanguageWelcomeBanner } from "@/components/language-welcome-banner"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Universal Telecom - Comunicaciones Empresariales del Futuro",
    template: "%s | Universal Telecom",
  },
  description:
    "Centralita Virtual, WhatsApp Business, Agentes IA y Análisis de Llamadas. Más de 2.000 empresas confían en nosotros en 9+ países. Prueba gratis 14 días.",
  keywords: [
    "centralita virtual",
    "whatsapp business",
    "agentes ia",
    "análisis llamadas",
    "comunicaciones empresariales",
    "pbx cloud",
    "telefonía ip",
    "chatbots",
    "universal telecom",
    "sistema telefónico empresarial",
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
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://universaltelecom.com",
    siteName: "Universal Telecom",
    title: "Universal Telecom - Comunicaciones Empresariales del Futuro",
    description:
      "Centralita Virtual, WhatsApp Business, Agentes IA y Análisis de Llamadas. Más de 2.000 empresas confían en nosotros.",
    images: [
      {
        url: "/images/og-image-es.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Telecom - Comunicaciones Empresariales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Telecom - Comunicaciones Empresariales del Futuro",
    description:
      "Centralita Virtual, WhatsApp Business, Agentes IA y Análisis de Llamadas. Más de 2.000 empresas confían en nosotros.",
    images: ["/images/twitter-image-es.jpg"],
    creator: "@universaltelecom",
    site: "@universaltelecom",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Universal Telecom",
  url: "https://universaltelecom.com",
  logo: "https://universaltelecom.com/logo.png",
  description:
    "Proveedor líder de soluciones de comunicaciones empresariales incluyendo centralita virtual, WhatsApp Business API, agentes IA y análisis de llamadas.",
  foundingDate: "2010",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+34-91-123-4567",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English", "French"],
      areaServed: ["ES", "US", "FR", "GB", "DE", "IT"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+34-91-123-4568",
      contactType: "sales",
      availableLanguage: ["Spanish", "English", "French"],
      areaServed: ["ES", "US", "FR", "GB", "DE", "IT"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Ejemplo 123",
    addressLocality: "Madrid",
    postalCode: "28001",
    addressCountry: "ES",
  },
  sameAs: [
    "https://www.linkedin.com/company/universal-telecom",
    "https://twitter.com/universaltelecom",
    "https://www.facebook.com/universaltelecom",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Comunicaciones Empresariales",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Centralita Virtual",
          description: "Sistema telefónico empresarial en la nube con funcionalidades avanzadas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WhatsApp Business API",
          description: "Integración oficial de WhatsApp para empresas con automatización",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agentes IA",
          description: "Chatbots inteligentes y asistentes virtuales con IA conversacional",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Análisis de Llamadas",
          description: "Análisis avanzado de llamadas con inteligencia artificial",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://universaltelecom.com" />
        <link rel="alternate" hrefLang="es" href="https://universaltelecom.com" />
        <link rel="alternate" hrefLang="en" href="https://universaltelecom.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://universaltelecom.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://universaltelecom.com" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <LanguageWelcomeBanner />
          {children}
          <Analytics />
          <CookieBanner language="es" />
        </Suspense>
      </body>
    </html>
  )
}
