"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAnalytics } from "@/hooks/use-analytics"

export function TrialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const { trackFormStart, trackFormSubmit } = useAnalytics()
  const searchParams = useSearchParams()

  useEffect(() => {
    const producto = searchParams.get("producto")
    if (producto) {
      const serviceMap: { [key: string]: string } = {
        "centralita-virtual": "centralita",
        "whatsapp-api": "whatsapp",
        "agente-ia-chatbot": "agente-ia",
        "analisis-llamadas-ia": "analisis",
      }

      const serviceId = serviceMap[producto]
      if (serviceId) {
        setSelectedServices([serviceId])
      }
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000))

      trackFormSubmit("trial_form", true)
      setIsSubmitted(true)
    } catch (error) {
      trackFormSubmit("trial_form", false)
      console.error("Error al enviar formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormStart = () => {
    trackFormStart("trial_form")
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== serviceId))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
          <p className="text-gray-600 mb-6">
            Hemos recibido tu solicitud de prueba gratuita. Nuestro equipo se pondrá en contacto contigo en las próximas
            2 horas para configurar tu cuenta.
          </p>
          <p className="text-sm text-gray-500">
            Mientras tanto, puedes contactarnos directamente al <strong>951 047 200</strong>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Solicita tu Prueba Gratuita de 14 Días</CardTitle>
        <CardDescription>Sin compromiso. Sin tarjeta de crédito. Configuración en 15 minutos.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input id="nombre" name="nombre" required onFocus={handleFormStart} placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos *</Label>
              <Input id="apellidos" name="apellidos" required placeholder="Tus apellidos" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Corporativo *</Label>
              <Input id="email" name="email" type="email" required placeholder="tu@empresa.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input id="telefono" name="telefono" type="tel" required placeholder="+34 600 000 000" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa *</Label>
              <Input id="empresa" name="empresa" required placeholder="Nombre de tu empresa" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="empleados">Número de Empleados</Label>
              <Select name="empleados">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 empleados</SelectItem>
                  <SelectItem value="11-50">11-50 empleados</SelectItem>
                  <SelectItem value="51-200">51-200 empleados</SelectItem>
                  <SelectItem value="201-500">201-500 empleados</SelectItem>
                  <SelectItem value="500+">Más de 500 empleados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="servicios">Servicios de Interés</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="centralita"
                  name="servicios"
                  value="centralita"
                  checked={selectedServices.includes("centralita")}
                  onCheckedChange={(checked) => handleServiceChange("centralita", checked as boolean)}
                />
                <Label htmlFor="centralita" className="text-sm">
                  Centralita Virtual
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whatsapp"
                  name="servicios"
                  value="whatsapp"
                  checked={selectedServices.includes("whatsapp")}
                  onCheckedChange={(checked) => handleServiceChange("whatsapp", checked as boolean)}
                />
                <Label htmlFor="whatsapp" className="text-sm">
                  WhatsApp Business
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agente-ia"
                  name="servicios"
                  value="agente-ia"
                  checked={selectedServices.includes("agente-ia")}
                  onCheckedChange={(checked) => handleServiceChange("agente-ia", checked as boolean)}
                />
                <Label htmlFor="agente-ia" className="text-sm">
                  Agente IA
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="analisis"
                  name="servicios"
                  value="analisis"
                  checked={selectedServices.includes("analisis")}
                  onCheckedChange={(checked) => handleServiceChange("analisis", checked as boolean)}
                />
                <Label htmlFor="analisis" className="text-sm">
                  Análisis de Llamadas
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comentarios">Comentarios Adicionales</Label>
            <Textarea
              id="comentarios"
              name="comentarios"
              placeholder="Cuéntanos sobre tus necesidades específicas..."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="privacidad" name="privacidad" required />
            <Label htmlFor="privacidad" className="text-sm">
              Acepto la{" "}
              <a href="/politica-privacidad" className="text-orange-600 hover:underline">
                Política de Privacidad
              </a>{" "}
              y el tratamiento de mis datos *
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="comunicaciones" name="comunicaciones" />
            <Label htmlFor="comunicaciones" className="text-sm">
              Deseo recibir comunicaciones comerciales de Universal Telecom
            </Label>
          </div>

          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Solicitar Prueba Gratuita"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar este formulario, un especialista se pondrá en contacto contigo en las próximas 2 horas para
            configurar tu cuenta de prueba.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
