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

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        // Show success message
        showMessage("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.", "success")

        // Reset form
        contactForm.reset()

        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false

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
  const requiredFields = ["nombre", "empresa", "email", "telefono"]

  requiredFields.forEach((field) => {
    if (!data[field] || data[field].trim() === "") {
      showFieldError(field, "Este campo es obligatorio")
      isValid = false
    }
  })

  // Email validation
  if (data.email && !isValidEmail(data.email)) {
    showFieldError("email", "Por favor, introduce un email válido")
    isValid = false
  }

  // Phone validation
  if (data.telefono && !isValidPhone(data.telefono)) {
    showFieldError("telefono", "Por favor, introduce un teléfono válido")
    isValid = false
  }

  // Privacy policy acceptance
  if (!data.acepto) {
    showFieldError("acepto", "Debes aceptar la política de privacidad")
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

function showMessage(message, type) {
  // Remove existing messages
  document.querySelectorAll(".alert-message").forEach((el) => el.remove())

  const alertDiv = document.createElement("div")
  alertDiv.className = `alert-message ${type}`
  alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        ${type === "success" ? "background-color: #22c55e;" : "background-color: #ef4444;"}
    `
  alertDiv.textContent = message

  document.body.appendChild(alertDiv)

  // Auto remove after 5 seconds
  setTimeout(() => {
    alertDiv.remove()
  }, 5000)
}

// Smooth Scrolling for Anchor Links
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

// Fade In Animation on Scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", fadeInOnScroll)
window.addEventListener("load", fadeInOnScroll)

// Phone Call Tracking
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.gtag("event", "phone_call", {
      event_category: "Contact",
      event_label: "Phone Call",
    })
  })
})

// WhatsApp Link Tracking
document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.gtag("event", "whatsapp_click", {
      event_category: "Contact",
      event_label: "WhatsApp",
    })
  })
})

// Button Click Tracking
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent.trim()
    const buttonClass = this.className

    window.gtag("event", "button_click", {
      event_category: "Engagement",
      event_label: buttonText,
      custom_parameters: {
        button_class: buttonClass,
      },
    })
  })
})

// Page Load Tracking
window.addEventListener("load", () => {
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
  })
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
