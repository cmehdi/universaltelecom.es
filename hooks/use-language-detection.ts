"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface LanguageDetection {
  currentLanguage: string
  detectedLanguage: string | null
  isFirstVisit: boolean
  changeLanguage: (language: string) => void
  dismissSuggestion: () => void
}

export function useLanguageDetection(): LanguageDetection {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLanguage, setCurrentLanguage] = useState("es")
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    // Determine current language from pathname
    let current = "es"
    if (pathname.startsWith("/en")) {
      current = "en"
    } else if (pathname.startsWith("/fr")) {
      current = "fr"
    }
    setCurrentLanguage(current)

    // Check if this is first visit and detect browser language
    const hasPreference = document.cookie.includes("preferred-language=")
    const hasVisited = localStorage.getItem("language-suggestion-dismissed")

    if (!hasPreference && !hasVisited) {
      const browserLanguage = navigator.language.split("-")[0]
      if (["en", "fr"].includes(browserLanguage) && browserLanguage !== current) {
        setDetectedLanguage(browserLanguage)
        setIsFirstVisit(true)
      }
    }
  }, [pathname])

  const changeLanguage = (language: string) => {
    // Save preference
    document.cookie = `preferred-language=${language}; path=/; max-age=31536000; SameSite=Lax`

    // Navigate to new language
    let newPath = "/"
    if (language === "en") newPath = "/en"
    if (language === "fr") newPath = "/fr"

    router.push(newPath)
    setDetectedLanguage(null)
    setIsFirstVisit(false)
  }

  const dismissSuggestion = () => {
    localStorage.setItem("language-suggestion-dismissed", "true")
    setDetectedLanguage(null)
    setIsFirstVisit(false)
  }

  return {
    currentLanguage,
    detectedLanguage,
    isFirstVisit,
    changeLanguage,
    dismissSuggestion,
  }
}
