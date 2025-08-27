import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Análisis de Llamadas con IA | Transcripción y Análisis Automático | Universal Telecom",
  description:
    "Análisis inteligente de llamadas con IA. Transcripción automática, análisis de sentimiento, puntuación de calidad y métricas avanzadas. Mejora tu servicio al cliente.",
  keywords:
    "análisis llamadas ia, transcripción automática, análisis sentimiento, calidad llamadas, speech analytics, call scoring",
  openGraph: {
    title: "Análisis de Llamadas con IA - Inteligencia para tu Negocio",
    description:
      "Convierte cada llamada en datos valiosos. IA que analiza, transcribe y evalúa automáticamente todas tus conversaciones telefónicas.",
    type: "website",
  },
}

export default function AnalisisLlamadasIAPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Inteligencia Artificial Avanzada
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Análisis de Llamadas con IA: Convierte Conversaciones en Insights
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nuestra IA analiza automáticamente cada llamada: transcribe, evalúa la calidad, detecta emociones y 
                  genera métricas que transforman tu servicio al cliente y estrategia comercial.
                </p>
              </div>

              <div className="\
