"use client"

import { useState } from "react"
import LocationSelector from "./LocationSelector"

export default function LocationSelectorWrapper() {
  const [selectedLocation, setSelectedLocation] = useState<{ country: string; city: string } | null>(null)

  const handleLocationSelected = (country: string, city: string) => {
    setSelectedLocation({ country, city })
    console.log(`Selected location: ${city}, ${country}`)
    // You can add additional logic here if needed
  }

  return <LocationSelector onLocationSelected={handleLocationSelected} />
}

