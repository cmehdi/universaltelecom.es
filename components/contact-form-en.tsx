"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, Send } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  inquiryType: string
  subject: string
  message: string
  urgency: string
}

export function ContactFormEn() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
    urgency: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
          send_to: "AW-CONVERSION_ID/CONTACT_LABEL",
          event_category: "Contact Form",
          event_label: formData.inquiryType,
        })
      }
    } catch (err) {
      setError("There was an error submitting your message. Please try again or contact us directly.")
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting Universal Telecom. We've received your message and will respond within 24 hours. For
          urgent matters, please call us directly.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg text-left">
          <h4 className="font-semibold text-blue-900 mb-2">Next steps:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• We'll review your inquiry and assign it to the right specialist</li>
            <li>• You'll receive a response within 24 hours (2 hours during business hours)</li>
            <li>• For urgent technical issues, call +1 (555) 123-4567</li>
            <li>• Check your email for a confirmation of this submission</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <Label htmlFor="email">Email Address *</Label>
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
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="mt-1"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className="mt-1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="inquiryType">Type of Inquiry *</Label>
          <Select onValueChange={(value) => handleInputChange("inquiryType", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo">Request Demo</SelectItem>
              <SelectItem value="pricing">Pricing Information</SelectItem>
              <SelectItem value="technical">Technical Support</SelectItem>
              <SelectItem value="migration">Migration Assistance</SelectItem>
              <SelectItem value="integration">Integration Questions</SelectItem>
              <SelectItem value="billing">Billing Support</SelectItem>
              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="urgency">Urgency Level</Label>
          <Select onValueChange={(value) => handleInputChange("urgency", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low - General inquiry</SelectItem>
              <SelectItem value="medium">Medium - Need response soon</SelectItem>
              <SelectItem value="high">High - Urgent business need</SelectItem>
              <SelectItem value="critical">Critical - System down</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          className="mt-1"
          placeholder="Brief description of your inquiry"
        />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="mt-1"
          rows={5}
          placeholder="Please provide details about your inquiry, current setup, specific requirements, or any questions you have..."
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
            Sending Message...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
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
