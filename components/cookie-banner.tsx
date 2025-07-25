"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, Settings, X } from "lucide-react"

interface CookieBannerProps {
  language: "es" | "en" | "fr"
}

const translations = {
  es: {
    title: "Configuración de Cookies",
    description:
      "Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes configurar tus preferencias a continuación.",
    essential: "Cookies Esenciales",
    essentialDesc: "Necesarias para el funcionamiento básico del sitio web.",
    analytics: "Cookies de Análisis",
    analyticsDesc: "Nos ayudan a entender cómo interactúas con nuestro sitio web.",
    marketing: "Cookies de Marketing",
    marketingDesc: "Utilizadas para mostrarte anuncios relevantes.",
    acceptAll: "Aceptar Todas",
    acceptSelected: "Aceptar Seleccionadas",
    rejectAll: "Rechazar Todas",
    configure: "Configurar",
    close: "Cerrar",
    save: "Guardar Preferencias",
  },
  en: {
    title: "Cookie Settings",
    description:
      "We use cookies to improve your experience, analyze traffic, and personalize content. You can configure your preferences below.",
    essential: "Essential Cookies",
    essentialDesc: "Necessary for basic website functionality.",
    analytics: "Analytics Cookies",
    analyticsDesc: "Help us understand how you interact with our website.",
    marketing: "Marketing Cookies",
    marketingDesc: "Used to show you relevant advertisements.",
    acceptAll: "Accept All",
    acceptSelected: "Accept Selected",
    rejectAll: "Reject All",
    configure: "Configure",
    close: "Close",
    save: "Save Preferences",
  },
  fr: {
    title: "Paramètres des Cookies",
    description:
      "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Vous pouvez configurer vos préférences ci-dessous.",
    essential: "Cookies Essentiels",
    essentialDesc: "Nécessaires au fonctionnement de base du site web.",
    analytics: "Cookies d'Analyse",
    analyticsDesc: "Nous aident à comprendre comment vous interagissez avec notre site web.",
    marketing: "Cookies Marketing",
    marketingDesc: "Utilisés pour vous montrer des publicités pertinentes.",
    acceptAll: "Accepter Tout",
    acceptSelected: "Accepter la Sélection",
    rejectAll: "Tout Rejeter",
    configure: "Configurer",
    close: "Fermer",
    save: "Sauvegarder les Préférences",
  },
}

export function CookieBanner({ language }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  const t = translations[language]

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)

    // Initialize analytics if accepted
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
  }

  const handleRejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)

    // Update analytics consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
  }

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setIsVisible(false)

    // Update analytics consent based on preferences
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied",
      })
    }
  }

  const handleAcceptSelected = () => {
    handleSavePreferences()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-t-4 border-t-orange-500">
        <div className="p-6">
          {!showSettings ? (
            // Simple banner
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.description}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" onClick={() => setShowSettings(true)} className="w-full sm:w-auto">
                  <Settings className="h-4 w-4 mr-2" />
                  {t.configure}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto bg-transparent"
                >
                  {t.rejectAll}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto"
                >
                  {t.acceptAll}
                </Button>
              </div>
            </div>
          ) : (
            // Detailed settings
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
                <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-6">{t.description}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{t.essential}</h4>
                    <p className="text-sm text-gray-600">{t.essentialDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="h-4 w-4 text-orange-600 rounded border-gray-300"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{t.analytics}</h4>
                    <p className="text-sm text-gray-600">{t.analyticsDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{t.marketing}</h4>
                    <p className="text-sm text-gray-600">{t.marketingDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto bg-transparent"
                >
                  {t.rejectAll}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAcceptSelected}
                  className="w-full sm:w-auto bg-transparent"
                >
                  {t.acceptSelected}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto"
                >
                  {t.acceptAll}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
