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

    // Aquí se integraría con el sistema real de Universal Telecom
    // Por ejemplo: envío a CRM, email, webhook, etc.
    console.log("Formulario de contacto enviado:", data)

    // Simular envío exitoso
    return {
      success: true,
      message: "Formulario enviado correctamente",
    }
  } catch (error) {
    console.error("Error al procesar formulario:", error)
    return {
      success: false,
      error: "Error interno del servidor",
    }
  }
}
