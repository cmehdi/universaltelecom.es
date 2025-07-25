"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Plus, Minus } from "lucide-react"

interface CountryTier {
  name: string
  price: number
  countries: string[]
  color: string
}

const countryTiers: CountryTier[] = [
  {
    name: "Premium",
    price: 5,
    countries: [
      "España",
      "Francia",
      "Alemania",
      "Italia",
      "Reino Unido",
      "Países Bajos",
      "Bélgica",
      "Estados Unidos",
      "Canadá",
    ],
    color: "blue",
  },
  {
    name: "Europa & LATAM",
    price: 9,
    countries: [
      "Portugal",
      "Suiza",
      "Austria",
      "Suecia",
      "Noruega",
      "Dinamarca",
      "México",
      "Brasil",
      "Argentina",
      "Chile",
      "Colombia",
      "Perú",
    ],
    color: "green",
  },
  {
    name: "Asia & Oceanía",
    price: 15,
    countries: [
      "Australia",
      "Japón",
      "Singapur",
      "Hong Kong",
      "Nueva Zelanda",
      "Corea del Sur",
      "Taiwán",
      "Tailandia",
      "Malasia",
      "Filipinas",
    ],
    color: "purple",
  },
  {
    name: "Especiales",
    price: 25,
    countries: ["Sudáfrica", "India", "Israel", "Emiratos Árabes Unidos", "Arabia Saudí", "Turquía"],
    color: "orange",
  },
]

export function PriceCalculator() {
  const [selections, setSelections] = useState<{ [key: string]: number }>({})
  const [totalNumbers, setTotalNumbers] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)

  const updateQuantity = (tierName: string, change: number) => {
    setSelections((prev) => {
      const newValue = Math.max(0, (prev[tierName] || 0) + change)
      return { ...prev, [tierName]: newValue }
    })
  }

  const getDiscountRate = (numbers: number) => {
    if (numbers >= 100) return 0.15
    if (numbers >= 51) return 0.1
    if (numbers >= 11) return 0.05
    return 0
  }

  const getDiscountLabel = (numbers: number) => {
    if (numbers >= 100) return "15% descuento"
    if (numbers >= 51) return "10% descuento"
    if (numbers >= 11) return "5% descuento"
    return "Sin descuento"
  }

  useEffect(() => {
    const newTotalNumbers = Object.values(selections).reduce((sum, qty) => sum + qty, 0)
    const newSubtotal = countryTiers.reduce((sum, tier) => {
      return sum + (selections[tier.name] || 0) * tier.price
    }, 0)

    const discountRate = getDiscountRate(newTotalNumbers)
    const newDiscount = newSubtotal * discountRate
    const newTotal = newSubtotal - newDiscount

    setTotalNumbers(newTotalNumbers)
    setSubtotal(newSubtotal)
    setDiscount(newDiscount)
    setTotal(newTotal)
  }, [selections])

  return (
    <div className="max-w-6xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center">
            <Calculator className="w-6 h-6 mr-2" />
            Calculadora de Numeración Global
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Selección de países */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countryTiers.map((tier) => (
              <Card key={tier.name} className={`border-2 border-${tier.color}-200`}>
                <CardHeader className="pb-4">
                  <div className="text-center">
                    <Badge variant="secondary" className={`bg-${tier.color}-100 text-${tier.color}-700 mb-2`}>
                      {tier.name}
                    </Badge>
                    <div className={`text-2xl font-bold text-${tier.color}-500`}>{tier.price}€</div>
                    <div className="text-sm text-gray-500">por número/mes</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-xs text-gray-600">
                    <div className="font-medium mb-1">Países incluidos:</div>
                    <div>{tier.countries.slice(0, 3).join(", ")}...</div>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(tier.name, -1)}
                      disabled={(selections[tier.name] || 0) === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-xl font-semibold w-8 text-center">{selections[tier.name] || 0}</span>
                    <Button variant="outline" size="sm" onClick={() => updateQuantity(tier.name, 1)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resumen de precios */}
          {totalNumbers > 0 && (
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Resumen del pedido</h3>
                    {countryTiers.map((tier) => {
                      const qty = selections[tier.name] || 0
                      if (qty === 0) return null
                      return (
                        <div key={tier.name} className="flex justify-between text-sm">
                          <span>
                            {tier.name} ({qty} números)
                          </span>
                          <span>{(qty * tier.price).toFixed(2)}€/mes</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Cálculo final</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total números:</span>
                        <span className="font-medium">{totalNumbers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{subtotal.toFixed(2)}€/mes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Descuento ({getDiscountLabel(totalNumbers)}):</span>
                        <span className="text-green-600">-{discount.toFixed(2)}€/mes</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total mensual:</span>
                          <span className="text-blue-600">{total.toFixed(2)}€/mes</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Total anual:</span>
                          <span>{(total * 12).toFixed(2)}€/año</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                    Solicitar Presupuesto Personalizado
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
