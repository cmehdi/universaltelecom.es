import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation-fr"
import { Footer } from "@/components/footer-fr"

export const metadata: Metadata = {
  title: {
    default: "Universal Telecom - Solutions de Communications Professionnelles",
    template: "%s | Universal Telecom",
  },
  description:
    "Transformez vos communications d'entreprise avec les solutions professionnelles d'Universal Telecom. PBX virtuel, API WhatsApp Business, agents IA, analyse d'appels et numéros globaux. Plus de 15,000 entreprises nous font confiance.",
  keywords: [
    "système téléphonique entreprise",
    "pbx virtuel",
    "api whatsapp business",
    "chatbots ia",
    "analyse appels",
    "numéros globaux",
    "communications entreprise",
    "téléphonie cloud",
    "universal telecom",
    "téléphonie d'entreprise",
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
    canonical: "/fr",
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
    locale: "fr_FR",
    url: "https://universaltelecom.com/fr",
    siteName: "Universal Telecom",
    title: "Universal Telecom - Solutions de Communications Professionnelles",
    description:
      "Transformez vos communications d'entreprise avec des solutions professionnelles. PBX virtuel, API WhatsApp Business, agents IA et plus. Plus de 15,000 entreprises nous font confiance.",
    images: [
      {
        url: "/images/og-image-fr.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Telecom - Communications Entreprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Telecom - Solutions de Communications Professionnelles",
    description:
      "Transformez vos communications d'entreprise avec des solutions professionnelles. PBX virtuel, API WhatsApp Business, agents IA et plus.",
    images: ["/images/twitter-image-fr.jpg"],
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
  url: "https://universaltelecom.com/fr",
  logo: "https://universaltelecom.com/logo.png",
  description:
    "Fournisseur leader de solutions de communications d'entreprise incluant PBX virtuel, API WhatsApp Business, agents IA et analyse d'appels.",
  foundingDate: "2010",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+33-1-84-88-32-81",
      contactType: "customer service",
      availableLanguage: ["French", "English", "Spanish"],
      areaServed: ["FR", "BE", "CH", "CA"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+33-1-84-88-32-82",
      contactType: "sales",
      availableLanguage: ["French", "English", "Spanish"],
      areaServed: ["FR", "BE", "CH", "CA"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Avenue des Champs-Élysées",
    addressLocality: "Paris",
    postalCode: "75008",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/company/universal-telecom",
    "https://twitter.com/universaltelecom",
    "https://www.facebook.com/universaltelecom",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Communications d'Entreprise",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PBX Virtuel",
          description: "Système téléphonique d'entreprise dans le cloud avec fonctionnalités avancées",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API WhatsApp Business",
          description: "Intégration officielle WhatsApp pour entreprises avec automatisation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agents IA",
          description: "Chatbots intelligents et assistants virtuels avec IA conversationnelle",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Analyse d'Appels",
          description: "Analyse avancée d'appels avec intelligence artificielle",
        },
      },
    ],
  },
}

export default function FrenchLayout({
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
