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
    "Transform your business communications with Universal Telecom's professional solutions. Virtual PBX, WhatsApp Business API, AI agents, call analytics, and global numbers.",
  keywords:
    "business phone system, virtual pbx, whatsapp business api, ai chatbots, call analytics, global numbers, business communications",
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
    locale: "en_US",
    url: "https://universaltelecom.com/en",
    siteName: "Universal Telecom",
    title: "Universal Telecom - Professional Business Communications",
    description:
      "Transform your business communications with professional solutions. Virtual PBX, WhatsApp Business API, AI agents, and more.",
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
  },
  alternates: {
    canonical: "https://universaltelecom.com/en",
    languages: {
      es: "https://universaltelecom.com",
      en: "https://universaltelecom.com/en",
      fr: "https://universaltelecom.com/fr",
    },
  },
}

export default function EnglishLayout({
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
