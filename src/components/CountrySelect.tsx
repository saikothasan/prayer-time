"use client"

import { useState } from "react"

interface Country {
  name: {
    common: string
  }
  cca2: string
}

interface CountrySelectProps {
  countries: Country[]
  selectedCountry: string
  onSelectCountry: (country: string) => void
}

export default function CountrySelect({ countries, selectedCountry, onSelectCountry }: CountrySelectProps) {
  const [search, setSearch] = useState("")

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium text-islamic-gray-700 dark:text-islamic-gray-300 mb-1"
      >
        Select Country
      </label>
      <input
        type="text"
        placeholder="Search countries"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-2 dark:bg-islamic-gray-700 dark:border-islamic-gray-600 dark:text-islamic-white"
      />
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onSelectCountry(e.target.value)}
        className="w-full p-2 border rounded dark:bg-islamic-gray-700 dark:border-islamic-gray-600 dark:text-islamic-white"
      >
        <option value="">Select a country</option>
        {filteredCountries.map((country) => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  )
}

