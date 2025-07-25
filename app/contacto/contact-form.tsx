"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "./actions"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [acceptTerms, setAcceptTerms] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
        setAcceptTerms(false)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {submitStatus === "success" && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">¡Mensaje enviado correctamente!</span>
            </div>
            <p className="text-green-600 text-sm mt-1">
              Nos pondremos en contacto contigo en menos de 2 horas (horario comercial).
            </p>
          </CardContent>
        </Card>
      )}

      {submitStatus === "error" && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">Error al enviar el mensaje</span>
            </div>
            <p className="text-red-600 text-sm mt-1">
              Por favor, inténtalo de nuevo o contáctanos directamente por WhatsApp.
            </p>
          </CardContent>
        </Card>
      )}

      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo *</Label>
            <Input id="nombre" name="nombre" required placeholder="Tu nombre completo" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email empresarial *</Label>
            <Input id="email" name="email" type="email" required placeholder="tu@empresa.com" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono *</Label>
            <Input id="telefono" name="telefono" type="tel" required placeholder="+34 600 000 000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input id="empresa" name="empresa" placeholder="Nombre de tu empresa" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="consulta">¿En qué podemos ayudarte? *</Label>
          <Select name="consulta" required>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo de consulta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo">Solicitar demo personalizada</SelectItem>
              <SelectItem value="consulta-tecnica">Consulta técnica sobre productos</SelectItem>
              <SelectItem value="migracion">Migración desde otro sistema</SelectItem>
              <SelectItem value="presupuesto">Presupuesto personalizado</SelectItem>
              <SelectItem value="soporte">Soporte técnico</SelectItem>
              <SelectItem value="otro">Otro (especificar en mensaje)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            placeholder="Cuéntanos más detalles sobre tu proyecto, número aproximado de usuarios, servicios actuales, etc."
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              required
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              Acepto el tratamiento de mis datos personales según la{" "}
              <a href="/politica-privacidad" className="text-orange-600 hover:underline">
                Política de Privacidad
              </a>{" "}
              y autorizo el contacto comercial por parte de Universal Telecom.
            </Label>
          </div>

          <div className="text-xs text-gray-500">
            * Campos obligatorios. Tus datos están protegidos según RGPD y se almacenan en servidores españoles.
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          disabled={isSubmitting || !acceptTerms}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Enviar Consulta
            </>
          )}
        </Button>
      </form>

      <div className="text-center text-sm text-gray-500">
        <p>¿Prefieres contacto inmediato?</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open(
                `https://wa.me/34951047200?text=${encodeURIComponent(
                  "Hola, me interesa conocer más sobre los servicios de Universal Telecom",
                )}`,
                "_blank",
              )
            }
          >
            WhatsApp
          </Button>
          <Button variant="outline" size="sm" onClick={() => (window.location.href = "tel:+34951047200")}>
            Llamar
          </Button>
        </div>
      </div>
    </div>
  )
}
