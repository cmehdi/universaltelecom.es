"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Calendar } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  companySize: string
  industry: string
  timePreference: string
  timezone: string
  specificNeeds: string
  currentChallenges: string
}

export function DemoFormEn() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    industry: "",
    timePreference: "",
    timezone: "",
    specificNeeds: "",
    currentChallenges: "",
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
          send_to: "AW-CONVERSION_ID/DEMO_LABEL",
          event_category: "Demo Request",
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
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Demo Scheduled Successfully!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in Universal Telecom. Our demo specialist will contact you within 2 hours to
          confirm your preferred time and customize the demo for your needs.
        </p>
        <div className="bg-green-50 p-4 rounded-lg text-left">
          <h4 className="font-semibold text-green-900 mb-2">What to expect:</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Confirmation call within 2 hours</li>
            <li>• 30-minute personalized demo session</li>
            <li>• Live Q&A with technical experts</li>
            <li>• Custom pricing and implementation plan</li>
            <li>• Follow-up resources and next steps</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="demo-form">
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="timePreference">Preferred Time</Label>
          <Select onValueChange={(value) => handleInputChange("timePreference", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
              <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
              <SelectItem value="flexible">I'm flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="timezone">Timezone</Label>
          <Select onValueChange={(value) => handleInputChange("timezone", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EST">Eastern Time (EST)</SelectItem>
              <SelectItem value="CST">Central Time (CST)</SelectItem>
              <SelectItem value="MST">Mountain Time (MST)</SelectItem>
              <SelectItem value="PST">Pacific Time (PST)</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="currentChallenges">Current Communication Challenges</Label>
        <Textarea
          id="currentChallenges"
          value={formData.currentChallenges}
          onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
          className="mt-1"
          rows={3}
          placeholder="What communication challenges is your business facing?"
        />
      </div>

      <div>
        <Label htmlFor="specificNeeds">Specific Features of Interest</Label>
        <Textarea
          id="specificNeeds"
          value={formData.specificNeeds}
          onChange={(e) => handleInputChange("specificNeeds", e.target.value)}
          className="mt-1"
          rows={3}
          placeholder="Which features would you like to see in the demo?"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Scheduling Your Demo...
          </>
        ) : (
          <>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule My Demo
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/en/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/en/terms-of-service" className="text-blue-500 hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  )
}
