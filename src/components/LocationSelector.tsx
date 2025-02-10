"use client"

import { useState, useEffect } from "react"
import CountrySelect from "./CountrySelect"
import CitySelect from "./CitySelect"

interface Country {
  name: {
    common: string
  }
  cca2: string
}

export default function LocationSelector() {
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data: Country[]) => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(sortedCountries)
      })
      .catch((err) => {
        console.error("Error fetching countries:", err)
      })
  }, [])

  return (
    <section className="py-12 bg-islamic-beige-light dark:bg-islamic-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-islamic-green-dark dark:text-islamic-green-light">
          Select Your Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <CountrySelect
            countries={countries}
            selectedCountry={selectedCountry}
            onSelectCountry={(country) => {
              setSelectedCountry(country)
              setSelectedCity("")
            }}
          />
          <CitySelect country={selectedCountry} selectedCity={selectedCity} onSelectCity={setSelectedCity} />
        </div>
      </div>
    </section>
  )
}

