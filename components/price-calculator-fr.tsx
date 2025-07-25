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
  { code: "US", name: "États-Unis", flag: "🇺🇸", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "GB", name: "Royaume-Uni", flag: "🇬🇧", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "CA", name: "Canada", flag: "🇨🇦", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "AU", name: "Australie", flag: "🇦🇺", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "DE", name: "Allemagne", flag: "🇩🇪", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "FR", name: "France", flag: "🇫🇷", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "ES", name: "Espagne", flag: "🇪🇸", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "IT", name: "Italie", flag: "🇮🇹", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "NL", name: "Pays-Bas", flag: "🇳🇱", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "BE", name: "Belgique", flag: "🇧🇪", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "CH", name: "Suisse", flag: "🇨🇭", setup: 0, monthly: 4.99, perMinute: 0.042 },
  { code: "AT", name: "Autriche", flag: "🇦🇹", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "SE", name: "Suède", flag: "🇸🇪", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "NO", name: "Norvège", flag: "🇳🇴", setup: 0, monthly: 4.99, perMinute: 0.042 },
  { code: "DK", name: "Danemark", flag: "🇩🇰", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "FI", name: "Finlande", flag: "🇫🇮", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "IE", name: "Irlande", flag: "🇮🇪", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "PT", name: "Portugal", flag: "🇵🇹", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "PL", name: "Pologne", flag: "🇵🇱", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "CZ", name: "République Tchèque", flag: "🇨🇿", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "HU", name: "Hongrie", flag: "🇭🇺", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "GR", name: "Grèce", flag: "🇬🇷", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "JP", name: "Japon", flag: "🇯🇵", setup: 0, monthly: 5.79, perMinute: 0.05 },
  { code: "KR", name: "Corée du Sud", flag: "🇰🇷", setup: 0, monthly: 4.99, perMinute: 0.042 },
  { code: "SG", name: "Singapour", flag: "🇸🇬", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "NZ", name: "Nouvelle-Zélande", flag: "🇳🇿", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "BR", name: "Brésil", flag: "🇧🇷", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "MX", name: "Mexique", flag: "🇲🇽", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "AR", name: "Argentine", flag: "🇦🇷", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "CL", name: "Chili", flag: "🇨🇱", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "CO", name: "Colombie", flag: "🇨🇴", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "PE", name: "Pérou", flag: "🇵🇪", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "ZA", name: "Afrique du Sud", flag: "🇿🇦", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "IL", name: "Israël", flag: "🇮🇱", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "TR", name: "Turquie", flag: "🇹🇷", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "RU", name: "Russie", flag: "🇷🇺", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "IN", name: "Inde", flag: "🇮🇳", setup: 0, monthly: 1.69, perMinute: 0.008 },
  { code: "CN", name: "Chine", flag: "🇨🇳", setup: 0, monthly: 3.29, perMinute: 0.025 },
  { code: "TH", name: "Thaïlande", flag: "🇹🇭", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "MY", name: "Malaisie", flag: "🇲🇾", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "PH", name: "Philippines", flag: "🇵🇭", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "ID", name: "Indonésie", flag: "🇮🇩", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", setup: 0, monthly: 2.49, perMinute: 0.017 },
  { code: "AE", name: "Émirats Arabes Unis", flag: "🇦🇪", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "SA", name: "Arabie Saoudite", flag: "🇸🇦", setup: 0, monthly: 4.19, perMinute: 0.034 },
  { code: "EG", name: "Égypte", flag: "🇪🇬", setup: 0, monthly: 2.49, perMinute: 0.017 },
]

export function PriceCalculatorFr() {
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
            <Calculator className="h-6 w-6 text-orange-500" />
            Calculateur de Prix Numéros Globaux
          </CardTitle>
          <CardDescription>Calculez vos coûts mensuels pour les numéros de téléphone globaux</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="country">Sélectionner le Pays</Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un pays" />
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
              <Label htmlFor="numbers">Nombre de Numéros</Label>
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
              <Label htmlFor="minutes">Minutes Mensuelles</Label>
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
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span>{country.flag}</span>
                    {country.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Frais d'installation :</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      GRATUIT
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mensuel par numéro :</span>
                    <span className="font-semibold">{country.monthly}€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Par minute :</span>
                    <span className="font-semibold">{country.perMinute}€</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg">Détail des Coûts Mensuels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Frais mensuels :</span>
                    <span className="font-semibold">{costs.monthly.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Coûts d'utilisation :</span>
                    <span className="font-semibold">{costs.usage.toFixed(2)}€</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Mensuel :</span>
                      <span className="text-xl font-bold text-orange-600">{costs.total.toFixed(2)}€</span>
                    </div>
                  </div>
                  {costs.savings > 0 && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <TrendingDown className="h-4 w-4" />
                      <span>Économisez {costs.savings.toFixed(2)}€/mois vs traditionnel</span>
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
                Pas de frais d'installation
              </Badge>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                Activation instantanée
              </Badge>
              <Badge variant="outline" className="text-purple-600 border-purple-600">
                Support 24/7
              </Badge>
            </div>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Obtenir vos Numéros Maintenant
            </Button>
            <p className="text-sm text-gray-500">
              * Prix affichés en EUR. Taxes locales peuvent s'appliquer. Remises de volume disponibles pour 10+ numéros.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
