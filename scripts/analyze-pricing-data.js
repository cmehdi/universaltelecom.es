// Fetch and analyze the CSV pricing data
async function analyzePricingData() {
  try {
    console.log("Fetching pricing data from CSV...")
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lista_completa_con_PVP-AatG3kOYI608r44jdPpjgyVV6lz0kW.csv",
    )
    const csvText = await response.text()

    console.log("CSV data fetched successfully")
    console.log("First 500 characters:", csvText.slice(0, 500))

    // Parse CSV data
    const lines = csvText.split("\n")
    const headers = lines[0].split(",")
    console.log("Headers:", headers)

    const data = []
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(",")
        if (values.length >= 4) {
          data.push({
            country: values[0]?.trim(),
            costPrice: Number.parseFloat(values[1]?.trim()) || 0,
            type: values[2]?.trim(),
            salePrice: Number.parseFloat(values[3]?.trim()) || 0,
          })
        }
      }
    }

    console.log(`Parsed ${data.length} records`)
    console.log("Sample records:", data.slice(0, 5))

    // Analyze pricing tiers
    const priceTiers = {}
    data.forEach((record) => {
      const price = record.salePrice
      if (!priceTiers[price]) {
        priceTiers[price] = []
      }
      priceTiers[price].push(record)
    })

    console.log(
      "Price tiers found:",
      Object.keys(priceTiers).sort((a, b) => a - b),
    )

    // Group by price ranges
    const priceRanges = {
      "5€": [],
      "9€": [],
      "15€": [],
      "25€": [],
    }

    data.forEach((record) => {
      const price = record.salePrice
      if (price <= 5) {
        priceRanges["5€"].push(record)
      } else if (price <= 9) {
        priceRanges["9€"].push(record)
      } else if (price <= 15) {
        priceRanges["15€"].push(record)
      } else {
        priceRanges["25€"].push(record)
      }
    })

    console.log("Countries by price range:")
    Object.entries(priceRanges).forEach(([range, countries]) => {
      console.log(`${range}: ${countries.length} countries`)
      console.log(
        "Sample countries:",
        countries.slice(0, 3).map((c) => c.country),
      )
    })
  } catch (error) {
    console.error("Error analyzing pricing data:", error)
  }
}

// Execute the analysis
analyzePricingData()
