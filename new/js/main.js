// Universal Telecom - Main JavaScript

// Declare gtag variable
let gtag

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  // Phone call tracking
  const phoneLinks = document.querySelectorAll(".phone-link")
  phoneLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (typeof gtag !== "undefined") {
        gtag("event", "phone_call", {
          event_category: "engagement",
          event_label: this.textContent,
        })
      }
    })
  })

  // CTA button tracking
  const ctaButtons = document.querySelectorAll(".btn-primary")
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (typeof gtag !== "undefined") {
        gtag("event", "cta_click", {
          event_category: "engagement",
          event_label: this.textContent,
        })
      }
    })
  })

  // Smooth scroll for anchor links
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

  // Form validation
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const email = form.querySelector('input[type="email"]')
      if (email && !isValidEmail(email.value)) {
        e.preventDefault()
        alert("Por favor, introduce un email válido")
        email.focus()
      }
    })
  })
})

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Language selector
function changeLanguage(lang) {
  const currentPath = window.location.pathname
  const pathParts = currentPath.split("/")

  if (pathParts[1] === "en" || pathParts[1] === "fr" || pathParts[1] === "es") {
    pathParts[1] = lang
  } else {
    pathParts.splice(1, 0, lang)
  }

  window.location.href = pathParts.join("/")
}
