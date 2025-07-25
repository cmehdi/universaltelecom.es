"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
  path: string
}

const languages: Language[] = [
  { code: "es", name: "Español", flag: "🇪🇸", path: "/" },
  { code: "en", name: "English", flag: "🇺🇸", path: "/en" },
  { code: "fr", name: "Français", flag: "🇫🇷", path: "/fr" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  useEffect(() => {
    // Detect current language from pathname
    if (pathname.startsWith("/en")) {
      setCurrentLanguage(languages[1])
    } else if (pathname.startsWith("/fr")) {
      setCurrentLanguage(languages[2])
    } else {
      setCurrentLanguage(languages[0])
    }
  }, [pathname])

  const handleLanguageChange = (language: Language) => {
    // Save preference in cookie
    document.cookie = `preferred-language=${language.code}; path=/; max-age=31536000; SameSite=Lax`

    // Navigate to the new language version
    let newPath = language.path

    // If we're not on the home page, try to construct the equivalent path
    if (pathname !== "/" && pathname !== "/en" && pathname !== "/fr") {
      const pathWithoutLang = pathname.replace(/^\/(en|fr)/, "") || "/"

      // Map some common paths between languages
      const pathMappings: Record<string, Record<string, string>> = {
        "/centralita-virtual": {
          en: "/virtual-pbx",
          fr: "/centralita-virtual",
        },
        "/virtual-pbx": {
          es: "/centralita-virtual",
          fr: "/centralita-virtual",
        },
        "/whatsapp-api": {
          en: "/whatsapp-business-api",
          fr: "/whatsapp-business-api",
        },
        "/whatsapp-business-api": {
          es: "/whatsapp-api",
          fr: "/whatsapp-business-api",
        },
        "/agente-ia-chatbot": {
          en: "/ai-agents",
          fr: "/agents-ia",
        },
        "/ai-agents": {
          es: "/agente-ia-chatbot",
          fr: "/agents-ia",
        },
        "/agents-ia": {
          es: "/agente-ia-chatbot",
          en: "/ai-agents",
        },
        "/analisis-llamadas-ia": {
          en: "/call-analytics",
          fr: "/analyse-appels",
        },
        "/call-analytics": {
          es: "/analisis-llamadas-ia",
          fr: "/analyse-appels",
        },
        "/analyse-appels": {
          es: "/analisis-llamadas-ia",
          en: "/call-analytics",
        },
        "/numeracion-global": {
          en: "/global-numbers",
          fr: "/numeros-globaux",
        },
        "/global-numbers": {
          es: "/numeracion-global",
          fr: "/numeros-globaux",
        },
        "/numeros-globaux": {
          es: "/numeracion-global",
          en: "/global-numbers",
        },
        "/contacto": {
          en: "/contact",
          fr: "/contact",
        },
        "/contact": {
          es: "/contacto",
          fr: "/contact",
        },
        "/demo": {
          en: "/demo",
          fr: "/demo",
        },
        "/prueba-gratis": {
          en: "/free-trial",
          fr: "/essai-gratuit",
        },
        "/free-trial": {
          es: "/prueba-gratis",
          fr: "/essai-gratuit",
        },
        "/essai-gratuit": {
          es: "/prueba-gratis",
          en: "/free-trial",
        },
      }

      const mappedPath = pathMappings[pathWithoutLang]?.[language.code]
      if (mappedPath) {
        newPath = language.code === "es" ? mappedPath : `${language.path}${mappedPath}`
      } else {
        // Fallback to home page if no mapping exists
        newPath = language.path
      }
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
        <Globe className="h-4 w-4 mr-1" />
        {currentLanguage.code.toUpperCase()} <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center cursor-pointer"
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
