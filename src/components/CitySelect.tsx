"use client"

import { useState, useEffect } from "react"

interface CitySelectProps {
  country: string
  selectedCity: string
  onSelectCity: (city: string) => void
}

export default function CitySelect({ country, selectedCity, onSelectCity }: CitySelectProps) {
  const [cities, setCities] = useState<string[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (country) {
      fetch(`https://countriesnow.space/api/v0.1/countries/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error === false && Array.isArray(data.data)) {
            setCities(data.data)
          } else {
            setCities([])
          }
        })
        .catch((error) => {
          console.error("Error fetching cities:", error)
          setCities([])
        })
    }
  }, [country])

  const filteredCities = cities.filter((city) => city.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Select City
      </label>
      <input
        type="text"
        placeholder="Search cities"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <select
        id="city"
        value={selectedCity}
        onChange={(e) => onSelectCity(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        disabled={!country}
      >
        <option value="">Select a city</option>
        {filteredCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  )
}

