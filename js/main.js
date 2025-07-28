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
  const mobileMenuIcon = mobileMenuButton.querySelector("[data-lucide]")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden")

      if (isOpen) {
        mobileMenu.classList.add("hidden")
        mobileMenuIcon.setAttribute("data-lucide", "menu")
      } else {
        mobileMenu.classList.remove("hidden")
        mobileMenuIcon.setAttribute("data-lucide", "x")
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

// Language detection and welcome banner
function initializeLanguageDetection() {
  const languageBanner = document.getElementById("language-banner")
  const acceptLanguageBtn = document.getElementById("accept-language")
  const dismissLanguageBtn = document.getElementById("dismiss-language")
  const closeLanguageBtn = document.getElementById("close-language")

  // Check if user has already made a language choice
  const languageChoice = localStorage.getItem("language-choice")
  const bannerDismissed = sessionStorage.getItem("language-banner-dismissed")

  if (!languageChoice && !bannerDismissed) {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage
    const detectedLang = browserLang.substring(0, 2)

    // Show banner if detected language is not Spanish
    if (detectedLang === "en" || detectedLang === "fr") {
      showLanguageBanner(detectedLang)
    }
  }

  function showLanguageBanner(lang) {
    const langInfo = {
      en: { name: "English", flag: "🇺🇸", url: "/en/" },
      fr: { name: "Français", flag: "🇫🇷", url: "/fr/" },
    }

    if (langInfo[lang] && languageBanner) {
      const detectedLanguageSpan = document.getElementById("detected-language")
      if (detectedLanguageSpan) {
        detectedLanguageSpan.textContent = `${langInfo[lang].flag} ${langInfo[lang].name}`
      }

      languageBanner.classList.remove("hidden")

      // Accept language button
      if (acceptLanguageBtn) {
        acceptLanguageBtn.addEventListener("click", () => {
          localStorage.setItem("language-choice", lang)
          window.location.href = langInfo[lang].url
        })
      }

      // Dismiss language button
      if (dismissLanguageBtn) {
        dismissLanguageBtn.addEventListener("click", () => {
          localStorage.setItem("language-choice", "es")
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
      showFieldError(field, "Este campo es obligatorio")
      isValid = false
    } else {
      clearFieldError(field)
    }

    // Email validation
    if (field.type === "email" && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(field.value)) {
        showFieldError(field, "Por favor, introduce un email válido")
        isValid = false
      }
    }

    // Phone validation
    if (field.type === "tel" && field.value.trim()) {
      const phoneRegex = /^[+]?[\d\s\-$$$$]{9,}$/
      if (!phoneRegex.test(field.value)) {
        showFieldError(field, "Por favor, introduce un teléfono válido")
        isValid = false
      }
    }
  })

  return isValid
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
