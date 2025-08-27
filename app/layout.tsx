import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Universal Telecom - Comunicaciones Empresariales del Futuro",
  description:
    "Centralita Virtual, WhatsApp Business, Agentes IA y Análisis de Llamadas. Más de 2.000 empresas confían en nosotros en 9+ países.",
  keywords: "centralita virtual, whatsapp business, agentes ia, análisis llamadas, comunicaciones empresariales",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
