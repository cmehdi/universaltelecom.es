"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, Phone, Mail } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

interface FormData {
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

export function ContactFormFr() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    inquiryType: "",
    subject: "",
    message: "",
    acceptTerms: false,
    acceptMarketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const { trackFormSubmission, trackFormStart } = useAnalytics()

  const inquiryTypes = [
    { value: "info-generale", label: "Information générale" },
    { value: "devis", label: "Demande de devis" },
    { value: "support-technique", label: "Support technique" },
    { value: "partenariat", label: "Partenariat" },
    { value: "autre", label: "Autre" },
  ]

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    if (Object.keys(errors).length > 0) {
      setErrors({})
    }
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis"
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis"
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis"
    if (!formData.company.trim()) newErrors.company = "L'entreprise est requise"
    if (!formData.inquiryType) newErrors.inquiryType = "Le type de demande est requis"
    if (!formData.subject.trim()) newErrors.subject = "Le sujet est requis"
    if (!formData.message.trim()) newErrors.message = "Le message est requis"
    if (!formData.acceptTerms) newErrors.acceptTerms = true

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      trackFormSubmission("contact", "fr")
      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFocus = () => {
    trackFormStart("contact", "fr")
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">Message Envoyé avec Succès !</h3>
          <div className="text-green-700 space-y-2 mb-6">
            <p className="font-medium">Nous avons bien reçu votre message</p>
            <div className="text-left space-y-1 max-w-md mx-auto">
              <p>✅ Accusé de réception envoyé par email</p>
              <p>✅ Notre équipe vous contactera sous 2h</p>
              <p>✅ Réponse personnalisée garantie</p>
              <p>✅ Suivi de votre demande assuré</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Besoin d'une réponse immédiate ?</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="tel:+33184883281"
                className="flex items-center justify-center text-green-600 hover:text-green-700 font-medium"
              >
                <Phone className="h-4 w-4 mr-1" />
                +33 1 84 88 32 81
              </a>
              <a
                href="mailto:commercial@universaltelecom.es"
                className="flex items-center justify-center text-green-600 hover:text-green-700 font-medium"
              >
                <Mail className="h-4 w-4 mr-1" />
                commercial@universaltelecom.es
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Informations personnelles */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            onFocus={handleFocus}
            className={errors.firstName ? "border-red-500" : ""}
            placeholder="Jean"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={errors.lastName ? "border-red-500" : ""}
            placeholder="Dupont"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email professionnel *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={errors.email ? "border-red-500" : ""}
          placeholder="jean.dupont@entreprise.fr"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={errors.phone ? "border-red-500" : ""}
            placeholder="+33 1 23 45 67 89"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="company">Entreprise *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className={errors.company ? "border-red-500" : ""}
            placeholder="Nom de votre entreprise"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="employees">Nombre d'employés</Label>
        <Select value={formData.employees} onValueChange={(value) => handleInputChange("employees", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez la taille de votre entreprise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 employés</SelectItem>
            <SelectItem value="11-50">11-50 employés</SelectItem>
            <SelectItem value="51-200">51-200 employés</SelectItem>
            <SelectItem value="201-500">201-500 employés</SelectItem>
            <SelectItem value="500+">500+ employés</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="inquiryType">Type de demande *</Label>
        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
          <SelectTrigger className={errors.inquiryType ? "border-red-500" : ""}>
            <SelectValue placeholder="Sélectionnez le type de votre demande" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
      </div>

      <div>
        <Label htmlFor="subject">Sujet *</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          className={errors.subject ? "border-red-500" : ""}
          placeholder="Résumez votre demande en quelques mots"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={errors.message ? "border-red-500" : ""}
          placeholder="Décrivez votre demande en détail..."
          rows={5}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Acceptation des conditions */}
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="acceptTerms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
            className={errors.acceptTerms ? "border-red-500" : ""}
          />
          <Label htmlFor="acceptTerms" className="text-sm leading-5 cursor-pointer">
            J'accepte les{" "}
            <a href="/fr/mentions-legales" className="text-orange-600 hover:underline" target="_blank" rel="noreferrer">
              conditions d'utilisation
            </a>{" "}
            et la{" "}
            <a
              href="/fr/politique-confidentialite"
              className="text-orange-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              politique de confidentialité
            </a>{" "}
            *
          </Label>
        </div>
        {errors.acceptTerms && <p className="text-red-500 text-sm">Vous devez accepter les conditions</p>}

        <div className="flex items-start space-x-2">
          <Checkbox
            id="acceptMarketing"
            checked={formData.acceptMarketing}
            onCheckedChange={(checked) => handleInputChange("acceptMarketing", checked as boolean)}
          />
          <Label htmlFor="acceptMarketing" className="text-sm leading-5 cursor-pointer">
            J'accepte de recevoir des communications marketing de Universal Telecom
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le Message"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Vos données sont sécurisées et ne seront jamais partagées avec des tiers
      </p>
    </form>
  )
}
