"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAnalytics } from "@/hooks/use-analytics"

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { trackFormStart, trackFormSubmit } = useAnalytics()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 2000))

      trackFormSubmit("demo_form", true)
      setIsSubmitted(true)
    } catch (error) {
      trackFormSubmit("demo_form", false)
      console.error("Error al enviar formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormStart = () => {
    trackFormStart("demo_form")
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
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Demo Programada!</h3>
          <p className="text-gray-600 mb-6">
            Hemos recibido tu solicitud de demo. Un especialista se pondrá en contacto contigo en las próximas 2 horas
            para programar una sesión personalizada.
          </p>
          <p className="text-sm text-gray-500">
            La demo durará aproximadamente 30 minutos y será adaptada a las necesidades específicas de tu empresa.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Solicita una Demo Personalizada</CardTitle>
        <CardDescription>
          30 minutos con un especialista para ver cómo Universal Telecom puede transformar tus comunicaciones.
        </CardDescription>
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
              <Label htmlFor="cargo">Cargo</Label>
              <Input id="cargo" name="cargo" placeholder="Tu cargo en la empresa" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="space-y-2">
              <Label htmlFor="sector">Sector</Label>
              <Select name="sector">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="servicios">Servicios</SelectItem>
                  <SelectItem value="comercio">Comercio</SelectItem>
                  <SelectItem value="salud">Salud</SelectItem>
                  <SelectItem value="educacion">Educación</SelectItem>
                  <SelectItem value="inmobiliario">Inmobiliario</SelectItem>
                  <SelectItem value="otros">Otros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="horario">Horario Preferido para la Demo</Label>
            <Select name="horario">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona tu horario preferido" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manana">Mañana (9:00 - 12:00)</SelectItem>
                <SelectItem value="mediodia">Mediodía (12:00 - 14:00)</SelectItem>
                <SelectItem value="tarde">Tarde (14:00 - 18:00)</SelectItem>
                <SelectItem value="flexible">Horario flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="necesidades">Cuéntanos sobre tus necesidades</Label>
            <Textarea
              id="necesidades"
              name="necesidades"
              placeholder="¿Qué problemas de comunicación necesitas resolver? ¿Qué servicios te interesan más?"
              rows={4}
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
            {isSubmitting ? "Enviando..." : "Solicitar Demo Personalizada"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Un especialista se pondrá en contacto contigo en las próximas 2 horas para programar tu demo personalizada.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
