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
import { CheckCircle, Loader2, Phone, Mail, Building, Users } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  employees: string
  services: string[]
  currentSolution: string
  message: string
  acceptTerms: boolean
  acceptMarketing: boolean
}

export function TrialFormFr() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    services: [],
    currentSolution: "",
    message: "",
    acceptTerms: false,
    acceptMarketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const { trackFormSubmission, trackFormStart } = useAnalytics()

  const services = [
    { id: "centralita", label: "Standard Virtuel" },
    { id: "whatsapp", label: "WhatsApp Business API" },
    { id: "ia", label: "Agents IA" },
    { id: "analytics", label: "Analyse d'Appels IA" },
    { id: "numeros", label: "Numéros Globaux" },
  ]

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    if (Object.keys(errors).length > 0) {
      setErrors({})
    }
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    const newServices = checked ? [...formData.services, serviceId] : formData.services.filter((s) => s !== serviceId)
    handleInputChange("services", newServices)
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
    if (!formData.employees) newErrors.employees = "Le nombre d'employés est requis"
    if (formData.services.length === 0) newErrors.services = ["Au moins un service doit être sélectionné"]
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

      trackFormSubmission("essai_gratuit", "fr")
      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFocus = () => {
    trackFormStart("essai_gratuit", "fr")
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">Merci ! Votre Essai Gratuit Est Activé</h3>
          <div className="text-green-700 space-y-2 mb-6">
            <p className="font-medium">Prochaines étapes :</p>
            <div className="text-left space-y-1 max-w-md mx-auto">
              <p>✅ Vérifiez votre email pour les détails de connexion</p>
              <p>✅ Notre équipe vous contactera dans les 2h</p>
              <p>✅ Configuration personnalisée incluse</p>
              <p>✅ Formation de votre équipe programmée</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Besoin d'aide immédiate ?</strong>
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Entreprise *</Label>
          <div className="relative">
            <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className={`pl-10 ${errors.company ? "border-red-500" : ""}`}
              placeholder="Nom de votre entreprise"
            />
          </div>
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
        <div>
          <Label htmlFor="employees">Nombre d'employés *</Label>
          <Select value={formData.employees} onValueChange={(value) => handleInputChange("employees", value)}>
            <SelectTrigger className={errors.employees ? "border-red-500" : ""}>
              <Users className="h-4 w-4 mr-2 text-gray-400" />
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employés</SelectItem>
              <SelectItem value="11-50">11-50 employés</SelectItem>
              <SelectItem value="51-200">51-200 employés</SelectItem>
              <SelectItem value="201-500">201-500 employés</SelectItem>
              <SelectItem value="500+">500+ employés</SelectItem>
            </SelectContent>
          </Select>
          {errors.employees && <p className="text-red-500 text-sm mt-1">{errors.employees}</p>}
        </div>
      </div>

      {/* Services d'intérêt */}
      <div>
        <Label className="text-base font-medium">Services qui vous intéressent *</Label>
        <div className="grid grid-cols-1 gap-3 mt-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={formData.services.includes(service.id)}
                onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
              />
              <Label htmlFor={service.id} className="text-sm font-normal cursor-pointer">
                {service.label}
              </Label>
            </div>
          ))}
        </div>
        {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services[0]}</p>}
      </div>

      <div>
        <Label htmlFor="currentSolution">Solution actuelle (optionnel)</Label>
        <Select value={formData.currentSolution} onValueChange={(value) => handleInputChange("currentSolution", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Quelle solution utilisez-vous actuellement ?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="aucune">Aucune solution</SelectItem>
            <SelectItem value="standard-traditionnel">Standard téléphonique traditionnel</SelectItem>
            <SelectItem value="voip-basique">Solution VoIP basique</SelectItem>
            <SelectItem value="teams">Microsoft Teams</SelectItem>
            <SelectItem value="autre">Autre solution</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message ou besoins spécifiques (optionnel)</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Décrivez vos besoins ou posez vos questions..."
          rows={3}
        />
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

      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Activation en cours...
          </>
        ) : (
          "Activer Mon Essai Gratuit 14 Jours"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Vos données sont sécurisées et ne seront jamais partagées avec des tiers
      </p>
    </form>
  )
}
