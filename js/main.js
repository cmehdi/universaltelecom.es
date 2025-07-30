// Universal Telecom - Main JavaScript File

// Import necessary variables
const lucide = window.lucide // Declare lucide variable
const gtag = window.gtag // Declare gtag variable

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initializeNavigation()
  initializeLanguageDetection()
  initializeCookieBanner()
  initializeAnalytics()
  initializeForms()
  initializeScrollEffects()
})

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuIcon = mobileMenuButton?.querySelector("[data-lucide]")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden")

      if (isOpen) {
        mobileMenu.classList.add("hidden")
        if (mobileMenuIcon) mobileMenuIcon.setAttribute("data-lucide", "menu")
      } else {
        mobileMenu.classList.remove("hidden")
        if (mobileMenuIcon) mobileMenuIcon.setAttribute("data-lucide", "x")
      }

      // Reinitialize icons
      if (lucide) {
        lucide.createIcons()
      }
    })
  }

  // Language selector dropdown
  const languageSelector = document.getElementById("language-selector")
  const languageDropdown = document.getElementById("language-dropdown")

  if (languageSelector && languageDropdown) {
    languageSelector.addEventListener("click", (e) => {
      e.preventDefault()
      languageDropdown.classList.toggle("hidden")
    })

    // Handle language selection with proper navigation
    const languageLinks = languageDropdown.querySelectorAll("a[data-lang]")
    languageLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetLang = link.getAttribute("data-lang")
        const currentPath = window.location.pathname

        // Store language preference
        localStorage.setItem("language-choice", targetLang)

        // Navigate to correct language version
        navigateToLanguage(targetLang, currentPath)
      })
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!languageSelector.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.add("hidden")
      }
    })
  }

  // More services dropdown
  const moreServicesButton = document.getElementById("more-services")
  const moreServicesDropdown = document.getElementById("more-services-dropdown")

  if (moreServicesButton && moreServicesDropdown) {
    moreServicesButton.addEventListener("click", (e) => {
      e.preventDefault()
      moreServicesDropdown.classList.toggle("hidden")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!moreServicesButton.contains(e.target) && !moreServicesDropdown.contains(e.target)) {
        moreServicesDropdown.classList.add("hidden")
      }
    })
  }
}

// Fixed language navigation function
function navigateToLanguage(targetLang, currentPath) {
  let newPath = "/"

  // Remove existing language prefixes from current path
  const cleanPath = currentPath.replace(/^\/(en|fr)\//, "/").replace(/^\//, "")

  // Build new path based on target language
  switch (targetLang) {
    case "es":
      // Spanish is the root, so just use clean path
      newPath = cleanPath ? `/${cleanPath}` : "/"
      break
    case "en":
      // English gets /en/ prefix
      newPath = cleanPath ? `/en/${cleanPath}` : "/en/"
      break
    case "fr":
      // French gets /fr/ prefix
      newPath = cleanPath ? `/fr/${cleanPath}` : "/fr/"
      break
    default:
      newPath = "/"
  }

  // Navigate to the new path
  window.location.href = newPath
}

// Language detection and welcome banner
function initializeLanguageDetection() {
  const languageBanner = document.getElementById("language-banner")
  const acceptLanguageBtn = document.getElementById("accept-language")
  const dismissLanguageBtn = document.getElementById("dismiss-language")
  const closeLanguageBtn = document.getElementById("close-language")

  // Check if user has already made a language choice
  const languageChoice = localStorage.getItem("language-choice")
  const bannerDismissed = sessionStorage.getItem("language-banner-dismissed")

  // Detect current page language
  const currentLang = detectCurrentLanguage()

  if (!languageChoice && !bannerDismissed) {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage
    const detectedLang = browserLang.substring(0, 2)

    // Show banner if detected language is different from current page language
    if (detectedLang !== currentLang && (detectedLang === "en" || detectedLang === "fr" || detectedLang === "es")) {
      showLanguageBanner(detectedLang, currentLang)
    }
  }

  function detectCurrentLanguage() {
    const path = window.location.pathname
    if (path.startsWith("/en/")) return "en"
    if (path.startsWith("/fr/")) return "fr"
    return "es" // Default to Spanish
  }

  function showLanguageBanner(detectedLang, currentLang) {
    const langInfo = {
      en: { name: "English", flag: "🇺🇸" },
      fr: { name: "Français", flag: "🇫🇷" },
      es: { name: "Español", flag: "🇪🇸" },
    }

    if (langInfo[detectedLang] && languageBanner) {
      const detectedLanguageSpan = document.getElementById("detected-language")
      if (detectedLanguageSpan) {
        detectedLanguageSpan.textContent = `${langInfo[detectedLang].flag} ${langInfo[detectedLang].name}`
      }

      // Update banner text based on current page language
      const bannerText = languageBanner.querySelector("div span")
      if (bannerText && currentLang === "fr") {
        bannerText.textContent = `Nous avons détecté que votre navigateur est en ${langInfo[detectedLang].name}. Souhaitez-vous voir le site en ${langInfo[detectedLang].name}?`
      } else if (bannerText && currentLang === "en") {
        bannerText.textContent = `We detected that your browser is in ${langInfo[detectedLang].name}. Would you like to see the site in ${langInfo[detectedLang].name}?`
      }

      languageBanner.classList.remove("hidden")

      // Accept language button
      if (acceptLanguageBtn) {
        acceptLanguageBtn.addEventListener("click", () => {
          localStorage.setItem("language-choice", detectedLang)
          navigateToLanguage(detectedLang, window.location.pathname)
        })
      }

      // Dismiss language button
      if (dismissLanguageBtn) {
        dismissLanguageBtn.addEventListener("click", () => {
          localStorage.setItem("language-choice", currentLang)
          languageBanner.classList.add("hidden")
        })
      }

      // Close language button
      if (closeLanguageBtn) {
        closeLanguageBtn.addEventListener("click", () => {
          sessionStorage.setItem("language-banner-dismissed", "true")
          languageBanner.classList.add("hidden")
        })
      }
    }
  }
}

// Cookie banner functionality
function initializeCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner")
  const cookieSimple = document.getElementById("cookie-simple")
  const cookieSettings = document.getElementById("cookie-settings")

  // Buttons
  const cookieAccept = document.getElementById("cookie-accept")
  const cookieReject = document.getElementById("cookie-reject")
  const cookieConfigure = document.getElementById("cookie-configure")
  const cookieClose = document.getElementById("cookie-close")
  const cookieSave = document.getElementById("cookie-save")
  const cookieAcceptAll = document.getElementById("cookie-accept-all")
  const cookieRejectSettings = document.getElementById("cookie-reject-settings")

  // Check if cookies have been configured
  const cookieConsent = localStorage.getItem("cookie-consent")

  if (!cookieConsent && cookieBanner) {
    cookieBanner.classList.remove("hidden")
  }

  // Accept all cookies
  if (cookieAccept) {
    cookieAccept.addEventListener("click", () => {
      const consent = {
        essential: true,
        analytics: true,
        marketing: true,
        timestamp: Date.now(),
      }
      localStorage.setItem("cookie-consent", JSON.stringify(consent))
      cookieBanner.classList.add("hidden")

      // Enable analytics
      if (gtag) {
        enableAnalytics()
      }
    })
  }

  // Reject all cookies
  if (cookieReject) {
    cookieReject.addEventListener("click", () => {
      const consent = {
        essential: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now(),
      }
      localStorage.setItem("cookie-consent", JSON.stringify(consent))
      cookieBanner.classList.add("hidden")
    })
  }

  // Configure cookies
  if (cookieConfigure) {
    cookieConfigure.addEventListener("click", () => {
      cookieSimple.classList.add("hidden")
      cookieSettings.classList.remove("hidden")
    })
  }

  // Close settings
  if (cookieClose) {
    cookieClose.addEventListener("click", () => {
      cookieSettings.classList.add("hidden")
      cookieSimple.classList.remove("hidden")
    })
  }

  // Save preferences
  if (cookieSave) {
    cookieSave.addEventListener("click", () => {
      const analyticsCheckbox = document.getElementById("analytics-cookies")
      const marketingCheckbox = document.getElementById("marketing-cookies")

      const consent = {
        essential: true,
        analytics: analyticsCheckbox ? analyticsCheckbox.checked : false,
        marketing: marketingCheckbox ? marketingCheckbox.checked : false,
        timestamp: Date.now(),
      }

      localStorage.setItem("cookie-consent", JSON.stringify(consent))
      cookieBanner.classList.add("hidden")

      if (consent.analytics && gtag) {
        enableAnalytics()
      }
    })
  }

  // Accept all from settings
  if (cookieAcceptAll) {
    cookieAcceptAll.addEventListener("click", () => {
      const consent = {
        essential: true,
        analytics: true,
        marketing: true,
        timestamp: Date.now(),
      }
      localStorage.setItem("cookie-consent", JSON.stringify(consent))
      cookieBanner.classList.add("hidden")

      if (gtag) {
        enableAnalytics()
      }
    })
  }

  // Reject all from settings
  if (cookieRejectSettings) {
    cookieRejectSettings.addEventListener("click", () => {
      const consent = {
        essential: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now(),
      }
      localStorage.setItem("cookie-consent", JSON.stringify(consent))
      cookieBanner.classList.add("hidden")
    })
  }
}

// Analytics functionality
function initializeAnalytics() {
  // Check if analytics are enabled
  const cookieConsent = localStorage.getItem("cookie-consent")
  if (cookieConsent) {
    const consent = JSON.parse(cookieConsent)
    if (consent.analytics && gtag) {
      enableAnalytics()
    }
  }
}

function enableAnalytics() {
  // Enable Google Analytics if available
  if (gtag) {
    gtag("consent", "update", {
      analytics_storage: "granted",
    })
  }

  // Track page view
  if (gtag) {
    trackPageView()
  }
}

function trackPageView() {
  if (gtag) {
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

function trackButtonClick(buttonName, location) {
  if (gtag) {
    gtag("event", "click", {
      event_category: "Button",
      event_label: buttonName,
      custom_parameter_1: location,
    })
  }
}

function trackPhoneCall() {
  if (gtag) {
    gtag("event", "phone_call", {
      event_category: "Contact",
      event_label: "Header Phone Click",
    })
  }
}

// Form functionality
function initializeForms() {
  // Add form validation and submission handling
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      if (!validateForm(form)) {
        e.preventDefault()
      }
    })
  })
}

function validateForm(form) {
  let isValid = true
  const requiredFields = form.querySelectorAll("[required]")

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      showFieldError(field, getErrorMessage("required"))
      isValid = false
    } else {
      clearFieldError(field)
    }

    // Email validation
    if (field.type === "email" && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(field.value)) {
        showFieldError(field, getErrorMessage("email"))
        isValid = false
      }
    }

    // Phone validation
    if (field.type === "tel" && field.value.trim()) {
      const phoneRegex = /^[+]?[\d\s\-()]{9,}$/
      if (!phoneRegex.test(field.value)) {
        showFieldError(field, getErrorMessage("phone"))
        isValid = false
      }
    }
  })

  return isValid
}

function getErrorMessage(type) {
  const currentLang = detectCurrentLanguage()
  const messages = {
    es: {
      required: "Este campo es obligatorio",
      email: "Por favor, introduce un email válido",
      phone: "Por favor, introduce un teléfono válido",
    },
    en: {
      required: "This field is required",
      email: "Please enter a valid email",
      phone: "Please enter a valid phone number",
    },
    fr: {
      required: "Ce champ est obligatoire",
      email: "Veuillez saisir un email valide",
      phone: "Veuillez saisir un numéro de téléphone valide",
    },
  }

  function detectCurrentLanguage() {
    const path = window.location.pathname
    if (path.startsWith("/en/")) return "en"
    if (path.startsWith("/fr/")) return "fr"
    return "es"
  }

  return messages[currentLang][type] || messages.es[type]
}

function showFieldError(field, message) {
  clearFieldError(field)

  const errorDiv = document.createElement("div")
  errorDiv.className = "text-red-600 text-sm mt-1"
  errorDiv.textContent = message
  errorDiv.setAttribute("data-error-for", field.name || field.id)

  field.classList.add("border-red-500")
  field.parentNode.appendChild(errorDiv)
}

function clearFieldError(field) {
  field.classList.remove("border-red-500")
  const existingError = field.parentNode.querySelector(`[data-error-for="${field.name || field.id}"]`)
  if (existingError) {
    existingError.remove()
  }
}

// Scroll effects
function initializeScrollEffects() {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".animate-on-scroll")
  animateElements.forEach((el) => observer.observe(el))
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Export functions for global use
window.trackButtonClick = trackButtonClick
window.trackPhoneCall = trackPhoneCall
window.validateForm = validateForm
window.navigateToLanguage = navigateToLanguage
