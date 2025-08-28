"use server"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  employees: string
  inquiryType: string
  subject: string
  message: string
  acceptTerms: boolean
  acceptMarketing: boolean
}

export async function submitContactForm(formData: ContactFormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // Configure email settings for French customers
    const emailConfig = {
      from: "sales@universaltelecom.eu",
      to: "sales@universaltelecom.eu",
      replyTo: formData.email,
      subject: `Nouvelle demande: ${formData.inquiryType} - ${formData.subject}`,
      body: `
        Détails de la demande:
        Nom: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Téléphone: ${formData.phone}
        Entreprise: ${formData.company}
        Nombre d'employés: ${formData.employees}
        Type de demande: ${formData.inquiryType}
        Sujet: ${formData.subject}
        Message: ${formData.message}
        
        Conditions acceptées: ${formData.acceptTerms ? "Oui" : "Non"}
        Marketing accepté: ${formData.acceptMarketing ? "Oui" : "Non"}
        
        Date: ${new Date().toLocaleString("fr-FR")}
        Source: Site web Français
      `,
    }

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send email notifications using sales@universaltelecom.eu
    // 4. Integrate with CRM
    // 5. Send confirmation email

    console.log("Contact form submitted (FR):", {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company,
      inquiryType: formData.inquiryType,
      subject: formData.subject,
      emailConfig,
      timestamp: new Date().toISOString(),
    })

    return {
      success: true,
      message:
        "Votre message a été envoyé avec succès. Nous vous contacterons sous 2h depuis sales@universaltelecom.eu.",
    }
  } catch (error) {
    console.error("Error processing French contact form:", error)
    return {
      success: false,
      message: "Une erreur s'est produite. Veuillez nous contacter directement à sales@universaltelecom.eu.",
    }
  }
}

export async function submitTrialForm(formData: any) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    const emailConfig = {
      from: "sales@universaltelecom.eu",
      to: "sales@universaltelecom.eu",
      replyTo: formData.email,
      subject: `Nouvelle demande d'essai gratuit - ${formData.company || formData.firstName + " " + formData.lastName}`,
      body: `
        Détails de la demande d'essai gratuit:
        Nom: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Téléphone: ${formData.phone || "Non fourni"}
        Entreprise: ${formData.company || "Non spécifiée"}
        Nombre d'employés: ${formData.employees || "Non spécifié"}
        
        Date: ${new Date().toLocaleString("fr-FR")}
        Source: Site web Français - Essai gratuit
      `,
    }

    console.log("Free trial form submission (FR):", {
      ...formData,
      emailConfig,
      timestamp: new Date().toISOString(),
      source: "website-fr",
    })

    return {
      success: true,
      message:
        "Votre compte d'essai gratuit est en cours de configuration. Vous recevrez vos identifiants dans 15 minutes.",
    }
  } catch (error) {
    console.error("Error processing French trial form:", error)
    return {
      success: false,
      message:
        "Une erreur s'est produite lors de la configuration de votre essai. Contactez-nous à sales@universaltelecom.eu.",
    }
  }
}

export async function submitDemoForm(formData: any) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1200))

  try {
    const emailConfig = {
      from: "sales@universaltelecom.eu",
      to: "sales@universaltelecom.eu",
      replyTo: formData.email,
      subject: `Nouvelle demande de démonstration - ${formData.company || formData.firstName + " " + formData.lastName}`,
      body: `
        Détails de la demande de démonstration:
        Nom: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Téléphone: ${formData.phone || "Non fourni"}
        Entreprise: ${formData.company || "Non spécifiée"}
        Date préférée: ${formData.preferredDate || "Flexible"}
        Heure préférée: ${formData.preferredTime || "Flexible"}
        
        Date: ${new Date().toLocaleString("fr-FR")}
        Source: Site web Français - Demande de démonstration
      `,
    }

    console.log("Demo form submission (FR):", {
      ...formData,
      emailConfig,
      timestamp: new Date().toISOString(),
      source: "website-fr",
    })

    return {
      success: true,
      message:
        "Votre demande de démonstration a été reçue. Notre équipe vous contactera dans 2h pour confirmer votre créneau préféré.",
    }
  } catch (error) {
    console.error("Error processing French demo form:", error)
    return {
      success: false,
      message:
        "Une erreur s'est produite lors de la planification de votre démonstration. Contactez-nous à sales@universaltelecom.eu.",
    }
  }
}
