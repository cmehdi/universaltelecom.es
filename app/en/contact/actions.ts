"use server"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  inquiryType: string
  subject: string
  message: string
  urgency?: string
}

export async function submitContactForm(formData: ContactFormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // Configure email settings for international customers
    const emailConfig = {
      from: "sales@universaltelecom.eu",
      to: "sales@universaltelecom.eu",
      replyTo: formData.email,
      subject: `New inquiry: ${formData.inquiryType} - ${formData.subject}`,
      body: `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Company: ${formData.company || "Not specified"}
        Inquiry Type: ${formData.inquiryType}
        Subject: ${formData.subject}
        Message: ${formData.message}
        Urgency: ${formData.urgency || "Normal"}
        
        Date: ${new Date().toLocaleString("en-US")}
        Source: Website English
      `,
    }

    // Log the submission (in a real app, this would go to your database/CRM)
    console.log("Contact form submission from English site:", {
      ...formData,
      emailConfig,
      timestamp: new Date().toISOString(),
      source: "website-en",
    })

    // Simulate different responses based on inquiry type
    let responseMessage = "Thank you for contacting Universal Telecom. We'll respond within 24 hours."

    switch (formData.inquiryType) {
      case "demo":
        responseMessage =
          "Thank you for your demo request! Our sales team will contact you within 2 hours to schedule your personalized demonstration."
        break
      case "technical":
        responseMessage =
          "Your technical support request has been received. Our technical team will respond within 4 hours during business hours."
        break
      case "critical":
        responseMessage =
          "Your critical issue has been escalated to our emergency response team. You should receive a call within 30 minutes."
        break
      case "pricing":
        responseMessage =
          "Thank you for your interest in our pricing. Our sales team will send you a customized quote within 4 hours."
        break
      case "migration":
        responseMessage =
          "Thank you for your migration inquiry. Our migration specialists will contact you within 24 hours to discuss your current setup and migration plan."
        break
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notifications using sales@universaltelecom.eu
    // 3. Create tickets in your support system
    // 4. Send confirmation email to customer
    // 5. Trigger any necessary workflows

    return {
      success: true,
      message: responseMessage,
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return {
      success: false,
      message:
        "There was an error processing your request. Please try again or contact us directly at sales@universaltelecom.eu.",
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
      subject: `New Free Trial Request - ${formData.company || formData.firstName + " " + formData.lastName}`,
      body: `
        Free Trial Request Details:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Company: ${formData.company || "Not specified"}
        Employees: ${formData.employees || "Not specified"}
        
        Date: ${new Date().toLocaleString("en-US")}
        Source: Website English - Free Trial
      `,
    }

    console.log("Free trial form submission:", {
      ...formData,
      emailConfig,
      timestamp: new Date().toISOString(),
      source: "website-en",
    })

    // In a real application, you would:
    // 1. Create trial account
    // 2. Send welcome email with credentials from sales@universaltelecom.eu
    // 3. Schedule onboarding call
    // 4. Set up initial configuration
    // 5. Notify sales team

    return {
      success: true,
      message:
        "Your free trial account is being set up. You'll receive login credentials within 15 minutes at your email address.",
    }
  } catch (error) {
    console.error("Error processing trial form:", error)
    return {
      success: false,
      message: "There was an error setting up your trial. Please contact us directly at sales@universaltelecom.eu.",
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
      subject: `New Demo Request - ${formData.company || formData.firstName + " " + formData.lastName}`,
      body: `
        Demo Request Details:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Company: ${formData.company || "Not specified"}
        Preferred Date: ${formData.preferredDate || "Flexible"}
        Preferred Time: ${formData.preferredTime || "Flexible"}
        
        Date: ${new Date().toLocaleString("en-US")}
        Source: Website English - Demo Request
      `,
    }

    console.log("Demo form submission:", {
      ...formData,
      emailConfig,
      timestamp: new Date().toISOString(),
      source: "website-en",
    })

    // In a real application, you would:
    // 1. Check calendar availability
    // 2. Create calendar event
    // 3. Send confirmation email from sales@universaltelecom.eu
    // 4. Notify demo specialist
    // 5. Prepare customized demo materials

    return {
      success: true,
      message:
        "Your demo request has been received. Our team will contact you within 2 hours to confirm your preferred time.",
    }
  } catch (error) {
    console.error("Error processing demo form:", error)
    return {
      success: false,
      message: "There was an error scheduling your demo. Please contact us directly at sales@universaltelecom.eu.",
    }
  }
}
