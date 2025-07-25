"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Phone, TrendingDown } from "lucide-react"

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "CA", name: "Canada", flag: "🇨🇦", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "AU", name: "Australia", flag: "🇦🇺", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "DE", name: "Germany", flag: "🇩🇪", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "FR", name: "France", flag: "🇫🇷", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "ES", name: "Spain", flag: "🇪🇸", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "IT", name: "Italy", flag: "🇮🇹", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "BE", name: "Belgium", flag: "🇧🇪", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", setup: 0, monthly: 5.99, perMinute: 0.05 },
  { code: "AT", name: "Austria", flag: "🇦🇹", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "SE", name: "Sweden", flag: "🇸🇪", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "NO", name: "Norway", flag: "🇳🇴", setup: 0, monthly: 5.99, perMinute: 0.05 },
  { code: "DK", name: "Denmark", flag: "🇩🇰", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "FI", name: "Finland", flag: "🇫🇮", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "IE", name: "Ireland", flag: "🇮🇪", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "PT", name: "Portugal", flag: "🇵🇹", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "PL", name: "Poland", flag: "🇵🇱", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "HU", name: "Hungary", flag: "🇭🇺", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "GR", name: "Greece", flag: "🇬🇷", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "JP", name: "Japan", flag: "🇯🇵", setup: 0, monthly: 6.99, perMinute: 0.06 },
  { code: "KR", name: "South Korea", flag: "🇰🇷", setup: 0, monthly: 5.99, perMinute: 0.05 },
  { code: "SG", name: "Singapore", flag: "🇸🇬", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "BR", name: "Brazil", flag: "🇧🇷", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "MX", name: "Mexico", flag: "🇲🇽", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "AR", name: "Argentina", flag: "🇦🇷", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "CL", name: "Chile", flag: "🇨🇱", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "CO", name: "Colombia", flag: "🇨🇴", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "PE", name: "Peru", flag: "🇵🇪", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "IL", name: "Israel", flag: "🇮🇱", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "TR", name: "Turkey", flag: "🇹🇷", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "RU", name: "Russia", flag: "🇷🇺", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "IN", name: "India", flag: "🇮🇳", setup: 0, monthly: 1.99, perMinute: 0.01 },
  { code: "CN", name: "China", flag: "🇨🇳", setup: 0, monthly: 3.99, perMinute: 0.03 },
  { code: "TH", name: "Thailand", flag: "🇹🇭", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "PH", name: "Philippines", flag: "🇵🇭", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", setup: 0, monthly: 2.99, perMinute: 0.02 },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", setup: 0, monthly: 4.99, perMinute: 0.04 },
  { code: "EG", name: "Egypt", flag: "🇪🇬", setup: 0, monthly: 2.99, perMinute: 0.02 },
]

export function PriceCalculatorEn() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [numbers, setNumbers] = useState(1)
  const [minutes, setMinutes] = useState(1000)

  const country = countries.find((c) => c.code === selectedCountry)

  const calculateCosts = () => {
    if (!country) return { monthly: 0, usage: 0, total: 0, savings: 0 }

    const monthly = country.monthly * numbers
    const usage = country.perMinute * minutes
    const total = monthly + usage

    // Calculate savings compared to traditional phone service (estimated 40% savings)
    const traditionalCost = total / 0.6 // Assuming our service is 40% cheaper
    const savings = traditionalCost - total

    return { monthly, usage, total, savings }
  }

  const costs = calculateCosts()

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-teal-500" />
            Global Numbers Price Calculator
          </CardTitle>
          <CardDescription>Calculate your monthly costs for global phone numbers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="country">Select Country</Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="numbers">Number of Phone Numbers</Label>
              <Input
                id="numbers"
                type="number"
                min="1"
                max="100"
                value={numbers}
                onChange={(e) => setNumbers(Number.parseInt(e.target.value) || 1)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minutes">Monthly Minutes</Label>
              <Input
                id="minutes"
                type="number"
                min="0"
                step="100"
                value={minutes}
                onChange={(e) => setMinutes(Number.parseInt(e.target.value) || 0)}
              />
            </div>
          </div>

          {country && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span>{country.flag}</span>
                    {country.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Setup Fee:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      FREE
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly per number:</span>
                    <span className="font-semibold">${country.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Per minute:</span>
                    <span className="font-semibold">${country.perMinute}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly fees:</span>
                    <span className="font-semibold">${costs.monthly.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Usage costs:</span>
                    <span className="font-semibold">${costs.usage.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Monthly:</span>
                      <span className="text-xl font-bold text-teal-600">${costs.total.toFixed(2)}</span>
                    </div>
                  </div>
                  {costs.savings > 0 && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <TrendingDown className="h-4 w-4" />
                      <span>Save ${costs.savings.toFixed(2)}/month vs traditional</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <Phone className="h-3 w-3 mr-1" />
                No setup fees
              </Badge>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                Instant activation
              </Badge>
              <Badge variant="outline" className="text-purple-600 border-purple-600">
                24/7 support
              </Badge>
            </div>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Get Your Numbers Now
            </Button>
            <p className="text-sm text-gray-500">
              * Prices shown in USD. Local taxes may apply. Volume discounts available for 10+ numbers.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
