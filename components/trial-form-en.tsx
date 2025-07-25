"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  companySize: string
  industry: string
  currentSolution: string
  interests: string[]
  message: string
}

export function TrialFormEn() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    industry: "",
    currentSolution: "",
    interests: [],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const services = [
    { id: "virtual-pbx", label: "Virtual PBX System" },
    { id: "whatsapp-api", label: "WhatsApp Business API" },
    { id: "ai-agents", label: "AI Agents & Chatbots" },
    { id: "call-analytics", label: "Call Analytics" },
    { id: "global-numbers", label: "Global Phone Numbers" },
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, serviceId] : prev.interests.filter((id) => id !== serviceId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success
      setIsSubmitted(true)

      // Track conversion
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
          event_category: "Free Trial",
          event_label: "Form Submission",
        })
      }
    } catch (err) {
      setError("There was an error submitting your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Trial Request Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in Universal Telecom. We're setting up your 14-day free trial account and will
          send you login credentials within the next 15 minutes.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg text-left">
          <h4 className="font-semibold text-blue-900 mb-2">What happens next:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• You'll receive login credentials via email within 15 minutes</li>
            <li>• Our onboarding specialist will call you within 2 hours</li>
            <li>• We'll help you set up your first phone number and extensions</li>
            <li>• You'll have full access to all features for 14 days</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="trial-form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Business Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="mt-1"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="mt-1"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <Label htmlFor="company">Company Name *</Label>
        <Input
          id="company"
          type="text"
          required
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className="mt-1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companySize">Company Size</Label>
          <Select onValueChange={(value) => handleInputChange("companySize", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-1000">201-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select onValueChange={(value) => handleInputChange("industry", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="currentSolution">Current Communication Solution</Label>
        <Input
          id="currentSolution"
          type="text"
          value={formData.currentSolution}
          onChange={(e) => handleInputChange("currentSolution", e.target.value)}
          className="mt-1"
          placeholder="e.g., Traditional phone system, Zoom, Teams, etc."
        />
      </div>

      <div>
        <Label className="text-base font-medium">Services of Interest (select all that apply)</Label>
        <div className="mt-3 space-y-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={formData.interests.includes(service.id)}
                onCheckedChange={(checked) => handleInterestChange(service.id, checked as boolean)}
              />
              <Label htmlFor={service.id} className="text-sm font-normal">
                {service.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="mt-1"
          rows={3}
          placeholder="Tell us about your specific needs or questions..."
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Setting Up Your Trial...
          </>
        ) : (
          "Start Your 14-Day Free Trial"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/en/privacy-policy" className="text-orange-500 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/en/terms-of-service" className="text-orange-500 hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  )
}
