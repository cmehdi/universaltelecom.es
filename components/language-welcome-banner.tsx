"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Globe } from "lucide-react"
import { useLanguageDetection } from "@/hooks/use-language-detection"

const languageNames: Record<string, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇺🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
  es: { name: "Español", flag: "🇪🇸" },
}

const messages = {
  es: {
    detected: "Hemos detectado que tu navegador está en",
    suggestion: "¿Te gustaría ver el sitio en",
    yes: "Sí, cambiar",
    no: "No, mantener español",
    dismiss: "No mostrar de nuevo",
  },
  en: {
    detected: "We detected your browser is set to",
    suggestion: "Would you like to view the site in",
    yes: "Yes, switch",
    no: "No, keep Spanish",
    dismiss: "Don't show again",
  },
  fr: {
    detected: "Nous avons détecté que votre navigateur est en",
    suggestion: "Souhaitez-vous voir le site en",
    yes: "Oui, changer",
    no: "Non, garder espagnol",
    dismiss: "Ne plus afficher",
  },
}

export function LanguageWelcomeBanner() {
  const { detectedLanguage, isFirstVisit, changeLanguage, dismissSuggestion } = useLanguageDetection()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isFirstVisit && detectedLanguage) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [isFirstVisit, detectedLanguage])

  if (!isVisible || !detectedLanguage) return null

  const detectedLangInfo = languageNames[detectedLanguage]
  const currentMessages = messages.es // Always show in Spanish since we're on Spanish site

  const handleAccept = () => {
    changeLanguage(detectedLanguage)
    setIsVisible(false)
  }

  const handleDismiss = () => {
    dismissSuggestion()
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-lg transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-blue-200" />
            <div className="text-sm">
              <span>{currentMessages.detected} </span>
              <span className="font-semibold">
                {detectedLangInfo.flag} {detectedLangInfo.name}
              </span>
              <span>
                . {currentMessages.suggestion} {detectedLangInfo.name}?
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={handleAccept}
              className="bg-white text-blue-600 hover:bg-gray-100 text-xs px-3 py-1"
            >
              {currentMessages.yes}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleDismiss}
              className="text-blue-200 hover:text-white hover:bg-blue-700 text-xs px-3 py-1"
            >
              {currentMessages.dismiss}
            </Button>
            <button onClick={handleClose} className="text-blue-200 hover:text-white p-1">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
