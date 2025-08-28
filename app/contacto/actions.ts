"use server"

interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  empresa?: string
  consulta: string
  mensaje?: string
}

export async function submitContactForm(formData: FormData) {
  // Simular delay de envío
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    const data: ContactFormData = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      empresa: formData.get("empresa") as string,
      consulta: formData.get("consulta") as string,
      mensaje: formData.get("mensaje") as string,
    }

    // Validaciones básicas
    if (!data.nombre || !data.email || !data.telefono || !data.consulta) {
      return {
        success: false,
        error: "Faltan campos obligatorios",
      }
    }

    // Configurar email de envío para España
    const emailConfig = {
      from: "comercial@universaltelecom.es",
      to: "comercial@universaltelecom.es",
      replyTo: data.email,
      subject: `Nueva consulta: ${data.consulta}`,
      body: `
        Nombre: ${data.nombre}
        Email: ${data.email}
        Teléfono: ${data.telefono}
        Empresa: ${data.empresa || "No especificada"}
        Tipo de consulta: ${data.consulta}
        Mensaje: ${data.mensaje || "Sin mensaje adicional"}
        
        Fecha: ${new Date().toLocaleString("es-ES")}
        Origen: Sitio web España
      `,
    }

    // Aquí se integraría con el sistema real de Universal Telecom
    // Por ejemplo: envío a CRM, email, webhook, etc.
    console.log("Formulario de contacto enviado desde España:", {
      ...data,
      emailConfig,
      timestamp: new Date().toISOString(),
    })

    // Simular envío exitoso
    return {
      success: true,
      message: "Formulario enviado correctamente. Nos pondremos en contacto contigo en las próximas 2 horas.",
    }
  } catch (error) {
    console.error("Error al procesar formulario:", error)
    return {
      success: false,
      error: "Error interno del servidor. Por favor, contacta directamente a comercial@universaltelecom.es",
    }
  }
}
