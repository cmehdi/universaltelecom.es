// Mobile Menu Toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none"
    mobileMenuBtn.classList.remove("active")
  } else {
    navMenu.style.display = "flex"
    navMenu.style.flexDirection = "column"
    navMenu.style.position = "absolute"
    navMenu.style.top = "100%"
    navMenu.style.left = "0"
    navMenu.style.right = "0"
    navMenu.style.backgroundColor = "white"
    navMenu.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"
    navMenu.style.padding = "20px"
    navMenu.style.zIndex = "1000"
    mobileMenuBtn.classList.add("active")
  }
}

// Language Change
function changeLanguage(lang) {
  const currentPath = window.location.pathname
  let newPath = ""

  switch (lang) {
    case "en":
      if (currentPath === "/" || currentPath === "/index.html") {
        newPath = "/en/index.html"
      } else {
        newPath = "/en" + currentPath
      }
      break
    case "fr":
      if (currentPath === "/" || currentPath === "/index.html") {
        newPath = "/fr/index.html"
      } else {
        newPath = "/fr" + currentPath
      }
      break
    default:
      newPath = currentPath.replace("/en/", "/").replace("/fr/", "/")
  }

  window.location.href = newPath
}

// Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (navMenu && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  })
})

// Contact Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      if (!validateForm(data)) {
        return
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Enviando..."
      submitBtn.disabled = true
      contactForm.classList.add("loading")

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        // Show success message
        showMessage("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.", "success")

        // Reset form
        contactForm.reset()

        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false
        contactForm.classList.remove("loading")

        // Track form submission
        window.gtag("event", "form_submit", {
          event_category: "Contact",
          event_label: "Contact Form",
        })
      }, 2000)
    })
  }
})

// Form Validation
function validateForm(data) {
  let isValid = true

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((el) => el.remove())
  document.querySelectorAll(".form-group.error").forEach((el) => el.classList.remove("error"))

  // Required fields
  const requiredFields = ["nombre", "apellidos", "empresa", "email", "telefono", "mensaje"]

  requiredFields.forEach((field) => {
    const input = document.getElementById(field)
    if (!data[field] || data[field].trim() === "") {
      input.style.borderColor = "#ef4444"
      isValid = false
    } else {
      input.style.borderColor = "#e5e7eb"
    }
  })

  // Privacy policy acceptance
  const privacyCheckbox = document.getElementById("acepto")
  if (!privacyCheckbox.checked) {
    isValid = false
    showMessage("Debes aceptar la Política de Privacidad para continuar.", "error")
    return
  }

  // Email validation
  if (data.email && !isValidEmail(data.email)) {
    document.getElementById("email").style.borderColor = "#ef4444"
    showMessage("Por favor, introduce un email válido.", "error")
    isValid = false
  }

  // Phone validation
  if (data.telefono && !isValidPhone(data.telefono)) {
    document.getElementById("telefono").style.borderColor = "#ef4444"
    showMessage("Por favor, introduce un teléfono válido.", "error")
    isValid = false
  }

  return isValid
}

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName)
  const formGroup = field.closest(".form-group")

  formGroup.classList.add("error")

  const errorDiv = document.createElement("div")
  errorDiv.className = "error-message"
  errorDiv.textContent = message

  formGroup.appendChild(errorDiv)
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone) {
  const phoneRegex = /^[+]?[0-9\s\-$$$$]{9,}$/
  return phoneRegex.test(phone)
}

// Show message function
function showMessage(message, type) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll(".form-success, .form-error")
  existingMessages.forEach((msg) => msg.remove())

  // Create new message
  const messageDiv = document.createElement("div")
  messageDiv.className = type === "success" ? "form-success" : "form-error"
  messageDiv.textContent = message

  // Insert message at the top of the form
  const form = document.getElementById("contact-form")
  if (form) {
    form.insertBefore(messageDiv, form.firstChild)

    // Auto-remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove()
    }, 5000)
  }
}

// Smooth Scrolling for Anchor Links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
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
})

// WhatsApp integration
function openWhatsApp(message) {
  const phoneNumber = "34600123456"
  const encodedMessage = encodeURIComponent(message || "Hola, me interesa conocer más sobre Universal Telecom")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}

// Add WhatsApp click handlers
document.addEventListener("DOMContentLoaded", () => {
  const whatsappLinks = document.querySelectorAll('.whatsapp-link, [href*="wa.me"]')

  whatsappLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Track WhatsApp click if analytics is available
      const gtag = window.gtag
      if (typeof gtag !== "undefined") {
        gtag("event", "click", {
          event_category: "WhatsApp",
          event_label: "Contact WhatsApp",
        })
      }
    })
  })
})

// Form field enhancements
document.addEventListener("DOMContentLoaded", () => {
  // Auto-format phone numbers
  const phoneInputs = document.querySelectorAll('input[type="tel"]')
  phoneInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")
      if (value.length > 0) {
        if (value.startsWith("34")) {
          value = "+" + value
        } else if (!value.startsWith("+")) {
          value = "+34" + value
        }
      }
      e.target.value = value
    })
  })

  // Auto-capitalize names
  const nameInputs = document.querySelectorAll('input[name="nombre"], input[name="apellidos"]')
  nameInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const words = e.target.value.split(" ")
      const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      e.target.value = capitalizedWords.join(" ")
    })
  })
})

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".service-card, .stat-item, .info-item")
  animatedElements.forEach((el) => observer.observe(el))
})

// URL parameter handling for service selection
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const producto = urlParams.get("producto")

  if (producto) {
    const servicioSelect = document.getElementById("servicio")
    if (servicioSelect) {
      // Map URL parameters to select options
      const serviceMap = {
        "centralita-virtual": "centralita-virtual",
        "whatsapp-api": "whatsapp-api",
        "agentes-ia": "agentes-ia",
        "analisis-llamadas": "analisis-llamadas",
        "api-sms": "api-sms",
        "numeracion-global": "numeracion-global",
        "integraciones-crm": "integraciones-crm",
      }

      if (serviceMap[producto]) {
        servicioSelect.value = serviceMap[producto]
      }
    }
  }
})

// Cookie consent (basic implementation)
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("cookieConsent")) {
    showCookieConsent()
  }
})

function showCookieConsent() {
  const cookieDiv = document.createElement("div")
  cookieDiv.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1f2937; color: white; padding: 1rem; z-index: 10000; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div style="flex: 1;">
                <p>Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies. 
                <a href="politica-cookies.html" style="color: #7c3aed; text-decoration: underline;">Más información</a></p>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button onclick="acceptCookies()" style="background: #7c3aed; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">Aceptar</button>
                <button onclick="rejectCookies()" style="background: transparent; color: white; border: 1px solid white; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">Rechazar</button>
            </div>
        </div>
    `
  document.body.appendChild(cookieDiv)
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted")
  document.querySelector('[style*="position: fixed; bottom: 0"]').remove()

  // Initialize analytics if accepted
  const gtag = window.gtag
  if (typeof gtag !== "undefined") {
    gtag("consent", "update", {
      analytics_storage: "granted",
    })
  }
}

function rejectCookies() {
  localStorage.setItem("cookieConsent", "rejected")
  document.querySelector('[style*="position: fixed; bottom: 0"]').remove()
}

// Error handling for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg=="
      this.alt = "Imagen no disponible"
    })
  })
})

// Phone Call Tracking
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    const gtag = window.gtag
    if (typeof gtag !== "undefined") {
      gtag("event", "phone_call", {
        event_category: "Contact",
        event_label: "Phone Call",
      })
    }
  })
})

// WhatsApp Link Tracking
document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
  link.addEventListener("click", () => {
    const gtag = window.gtag
    if (typeof gtag !== "undefined") {
      gtag("event", "whatsapp_click", {
        event_category: "Contact",
        event_label: "WhatsApp",
      })
    }
  })
})

// Button Click Tracking
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent.trim()
    const buttonClass = this.className

    const gtag = window.gtag
    if (typeof gtag !== "undefined") {
      gtag("event", "button_click", {
        event_category: "Engagement",
        event_label: buttonText,
        custom_parameters: {
          button_class: buttonClass,
        },
      })
    }
  })
})

// Page Load Tracking
window.addEventListener("load", () => {
  const gtag = window.gtag
  if (typeof gtag !== "undefined") {
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
})

// Dropdown Menu Handling
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn")
  const content = dropdown.querySelector(".dropdown-content")

  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    content.style.display = content.style.display === "block" ? "none" : "block"
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    content.style.display = "none"
  })
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("navMenu")
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

    if (window.innerWidth < 768) {
      navMenu.style.display = "none"
      mobileMenuBtn.classList.remove("active")
    }
  })
})

// Resize handler for mobile menu
window.addEventListener("resize", () => {
  const navMenu = document.getElementById("navMenu")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  if (window.innerWidth >= 768) {
    navMenu.style.display = ""
    navMenu.style.flexDirection = ""
    navMenu.style.position = ""
    navMenu.style.top = ""
    navMenu.style.left = ""
    navMenu.style.right = ""
    navMenu.style.backgroundColor = ""
    navMenu.style.boxShadow = ""
    navMenu.style.padding = ""
    navMenu.style.zIndex = ""
    mobileMenuBtn.classList.remove("active")
  }
})

// Declare gtag variable
window.gtag =
  window.gtag ||
  (() => {
    window.dataLayer.push(arguments)
  })
window.dataLayer = window.dataLayer || []
