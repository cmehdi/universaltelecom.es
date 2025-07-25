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
import { CheckCircle, Loader2, Phone, Mail, Calendar, Clock } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  employees: string
  preferredDate: string
  preferredTime: string
  timezone: string
  interests: string[]
  currentSolution: string
  message: string
  acceptTerms: boolean
}

export function DemoFormFr() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "Europe/Paris",
    interests: [],
    currentSolution: "",
    message: "",
    acceptTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const { trackFormSubmission, trackFormStart } = useAnalytics()

  const timeSlots = [
    "09:00 - 09:30",
    "10:00 - 10:30",
    "11:00 - 11:30",
    "14:00 - 14:30",
    "15:00 - 15:30",
    "16:00 - 16:30",
    "17:00 - 17:30",
  ]

  const interests = [
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

  const handleInterestChange = (interestId: string, checked: boolean) => {
    const newInterests = checked
      ? [...formData.interests, interestId]
      : formData.interests.filter((i) => i !== interestId)
    handleInputChange("interests", newInterests)
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
    if (!formData.preferredDate) newErrors.preferredDate = "La date est requise"
    if (!formData.preferredTime) newErrors.preferredTime = "L'heure est requise"
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

      trackFormSubmission("demo_request", "fr")
      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFocus = () => {
    trackFormStart("demo_request", "fr")
  }

  // Get tomorrow's date as minimum
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">Démo Programmée avec Succès !</h3>
          <div className="text-green-700 space-y-2 mb-6">
            <p className="font-medium">Prochaines étapes :</p>
            <div className="text-left space-y-1 max-w-md mx-auto">
              <p>✅ Invitation envoyée à votre email</p>
              <p>✅ Lien de visioconférence inclus</p>
              <p>✅ Rappel 24h avant la démo</p>
              <p>✅ Matériel de présentation préparé</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Besoin de modifier votre rendez-vous ?</strong>
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
        <Label htmlFor="employees">Nombre d'employés *</Label>
        <Select value={formData.employees} onValueChange={(value) => handleInputChange("employees", value)}>
          <SelectTrigger className={errors.employees ? "border-red-500" : ""}>
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
        {errors.employees && <p className="text-red-500 text-sm mt-1">{errors.employees}</p>}
      </div>

      {/* Planification */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Planification de la Démo</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="preferredDate">Date préférée *</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="preferredDate"
                type="date"
                min={minDate}
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                className={`pl-10 ${errors.preferredDate ? "border-red-500" : ""}`}
              />
            </div>
            {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
          </div>
          <div>
            <Label htmlFor="preferredTime">Créneau horaire *</Label>
            <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
              <SelectTrigger className={errors.preferredTime ? "border-red-500" : ""}>
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <SelectValue placeholder="Choisissez un créneau" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
          </div>
        </div>
      </div>

      {/* Centres d'intérêt */}
      <div>
        <Label className="text-base font-medium">Solutions qui vous intéressent</Label>
        <div className="grid grid-cols-1 gap-3 mt-3">
          {interests.map((interest) => (
            <div key={interest.id} className="flex items-center space-x-2">
              <Checkbox
                id={interest.id}
                checked={formData.interests.includes(interest.id)}
                onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
              />
              <Label htmlFor={interest.id} className="text-sm font-normal cursor-pointer">
                {interest.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="currentSolution">Solution actuelle</Label>
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
        <Label htmlFor="message">Questions ou besoins spécifiques</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Décrivez vos besoins ou posez vos questions pour personnaliser la démo..."
          rows={3}
        />
      </div>

      {/* Acceptation des conditions */}
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

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Programmation en cours...
          </>
        ) : (
          "Programmer Ma Démo Gratuite"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Vos données sont sécurisées et ne seront jamais partagées avec des tiers
      </p>
    </form>
  )
}
