"use client"

import { useState } from "react"

export default function CountrySelect({ countries, selectedCountry, onSelectCountry }) {
  const [search, setSearch] = useState("")

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
        Select Country
      </label>
      <input
        type="text"
        placeholder="Search countries"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onSelectCountry(e.target.value)}
        className="w-full p-2 border rounded"
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

