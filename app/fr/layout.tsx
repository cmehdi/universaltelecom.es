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
    "Transformez vos communications d'entreprise avec les solutions professionnelles d'Universal Telecom. PBX virtuel, API WhatsApp Business, agents IA, analyse d'appels et numéros globaux.",
  keywords:
    "système téléphonique entreprise, pbx virtuel, api whatsapp business, chatbots ia, analyse appels, numéros globaux, communications entreprise",
  authors: [{ name: "Universal Telecom" }],
  creator: "Universal Telecom",
  publisher: "Universal Telecom",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      "Transformez vos communications d'entreprise avec des solutions professionnelles. PBX virtuel, API WhatsApp Business, agents IA et plus.",
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
  },
  alternates: {
    canonical: "https://universaltelecom.com/fr",
    languages: {
      es: "https://universaltelecom.com",
      en: "https://universaltelecom.com/en",
      fr: "https://universaltelecom.com/fr",
    },
  },
}

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
