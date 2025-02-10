"use client"

import { useState, useEffect } from "react"
import CountrySelect from "./CountrySelect"
import CitySelect from "./CitySelect"
import PrayerTimes from "./PrayerTimes"

interface Country {
  name: {
    common: string
  }
  cca2: string
}

interface PrayerTimesData {
  date: string
  timezone: string
  timings: {
    [key: string]: string
  }
}

interface LocationSelectorProps {
  onLocationSelected: (country: string, city: string) => void
}

export default function LocationSelector({ onLocationSelected }: LocationSelectorProps) {
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data: unknown) => {
        if (isCountryArray(data)) {
          const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
          setCountries(sortedCountries)
        } else {
          console.error("Unexpected API response format")
          setCountries([])
        }
      })
      .catch((err) => {
        console.error("Error fetching countries:", err)
        setCountries([])
      })
  }, [])

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      onLocationSelected(selectedCountry, selectedCity)
      fetchPrayerTimes(selectedCountry, selectedCity)
    }
  }, [selectedCountry, selectedCity, onLocationSelected])

  function isCountryArray(data: unknown): data is Country[] {
    return Array.isArray(data) && data.every(isCountry)
  }

  function isCountry(item: unknown): item is Country {
    return (
      typeof item === "object" &&
      item !== null &&
      "name" in item &&
      typeof item.name === "object" &&
      item.name !== null &&
      "common" in item.name &&
      typeof item.name.common === "string" &&
      "cca2" in item &&
      typeof item.cca2 === "string"
    )
  }

  function isPrayerTimesData(data: unknown): data is PrayerTimesData {
    return (
      typeof data === "object" &&
      data !== null &&
      "date" in data &&
      typeof data.date === "string" &&
      "timezone" in data &&
      typeof data.timezone === "string" &&
      "timings" in data &&
      typeof data.timings === "object" &&
      data.timings !== null
    )
  }

  async function fetchPrayerTimes(country: string, city: string) {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/prayer-times?country=${country}&city=${city}`)
      const data: unknown = await response.json()
      if (response.ok) {
        if (isPrayerTimesData(data)) {
          setPrayerTimes(data)
        } else {
          setError("Unexpected response format")
        }
      } else {
        setError(
          typeof data === "object" && data !== null && "error" in data
            ? String(data.error)
            : "Failed to fetch prayer times",
        )
      }
    } catch (err) {
      setError("An error occurred while fetching prayer times")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12 bg-islamic-beige-light dark:bg-islamic-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-islamic-green-dark dark:text-islamic-green-light">
          Select Your Location
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
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
        {loading && <p className="text-center">Loading prayer times...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {prayerTimes && <PrayerTimes prayerTimes={prayerTimes} />}
      </div>
    </section>
  )
}

