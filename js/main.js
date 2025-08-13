// JavaScript principal para Universal Telecom

// Declaración de la variable gtag
const gtag = window.gtag || (() => {})

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeCookieBanner()
  initializeScrollEffects()
  initializeForms()
  initializeAnalytics()
})

// Navegación móvil
function initializeNavigation() {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Cerrar menú móvil al hacer clic en un enlace
  const mobileLinks = mobileMenu?.querySelectorAll("a")
  mobileLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })

  // Cerrar menú móvil al hacer clic fuera
  document.addEventListener("click", (event) => {
    if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuButton?.contains(event.target)) {
      mobileMenu.classList.add("hidden")
    }
  })
}

// Banner de cookies
function initializeCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner")
  const acceptButton = document.getElementById("accept-cookies")

  // Mostrar banner si no se han aceptado las cookies
  if (!localStorage.getItem("cookies-accepted")) {
    cookieBanner?.classList.remove("hidden")
  }

  // Manejar aceptación de cookies
  acceptButton?.addEventListener("click", () => {
    localStorage.setItem("cookies-accepted", "true")
    cookieBanner?.classList.add("hidden")

    // Activar Google Analytics si está disponible
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "granted",
      })
    }
  })
}

// Efectos de scroll
function initializeScrollEffects() {
  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  }, observerOptions)

  // Observar elementos con la clase 'animate-on-scroll'
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Inicializar formularios
function initializeForms() {
  // Validación de formularios
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (!validateForm(this)) {
        e.preventDefault()
      }
    })

    // Validación en tiempo real
    const inputs = form.querySelectorAll("input, textarea, select")
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this)
      })
    })
  })
}

// Validar formulario
function validateForm(form) {
  let isValid = true
  const requiredFields = form.querySelectorAll("[required]")

  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false
    }
  })

  return isValid
}

// Validar campo individual
function validateField(field) {
  const value = field.value.trim()
  let isValid = true
  let errorMessage = ""

  // Limpiar errores previos
  clearFieldError(field)

  // Validar campo requerido
  if (field.hasAttribute("required") && !value) {
    errorMessage = "Este campo es obligatorio"
    isValid = false
  }

  // Validar email
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      errorMessage = "Por favor, introduce un email válido"
      isValid = false
    }
  }

  // Validar teléfono
  if (field.type === "tel" && value) {
    const phoneRegex = /^[+]?[\d\s\-$$$$]{9,}$/
    if (!phoneRegex.test(value)) {
      errorMessage = "Por favor, introduce un teléfono válido"
      isValid = false
    }
  }

  // Mostrar error si existe
  if (!isValid) {
    showFieldError(field, errorMessage)
  }

  return isValid
}

// Mostrar error en campo
function showFieldError(field, message) {
  field.classList.add("border-red-500")

  const errorDiv = document.createElement("div")
  errorDiv.className = "text-red-500 text-sm mt-1"
  errorDiv.textContent = message
  errorDiv.setAttribute("data-error-for", field.id || field.name)

  field.parentNode.appendChild(errorDiv)
}

// Limpiar error de campo
function clearFieldError(field) {
  field.classList.remove("border-red-500")

  const errorDiv = field.parentNode.querySelector(`[data-error-for="${field.id || field.name}"]`)
  if (errorDiv) {
    errorDiv.remove()
  }
}

// Analytics
function initializeAnalytics() {
  // Tracking de eventos
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", function () {
      const eventName = this.getAttribute("data-track")
      const eventCategory = this.getAttribute("data-track-category") || "engagement"
      const eventLabel = this.getAttribute("data-track-label") || this.textContent

      if (typeof gtag !== "undefined") {
        gtag("event", eventName, {
          event_category: eventCategory,
          event_label: eventLabel,
        })
      }
    })
  })

  // Tracking de formularios
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", function () {
      const formName = this.getAttribute("id") || "form"

      if (typeof gtag !== "undefined") {
        gtag("event", "form_submit", {
          event_category: "form",
          event_label: formName,
        })
      }
    })
  })
}

// Utilidades
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

// Detectar dispositivo móvil
function isMobile() {
  return window.innerWidth <= 768
}

// Lazy loading de imágenes
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Inicializar lazy loading
if ("IntersectionObserver" in window) {
  initializeLazyLoading()
}

// Manejo de errores globales
window.addEventListener("error", (e) => {
  console.error("Error:", e.error)

  // Enviar error a analytics si está disponible
  if (typeof gtag !== "undefined") {
    gtag("event", "exception", {
      description: e.error.message,
      fatal: false,
    })
  }
})

// Exportar funciones para uso global
window.UniversalTelecom = {
  validateForm,
  validateField,
  debounce,
  throttle,
  isMobile,
}
