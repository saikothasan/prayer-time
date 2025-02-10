"use client"

import { useState, useEffect } from "react"
import CountrySelect from "./CountrySelect"
import CitySelect from "./CitySelect"
import PrayerTimes from "./PrayerTimes"
import ErrorMessage from "./ErrorMessage"
import LoadingSpinner from "./LoadingSpinner"

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

export default function PrayerTimesContainer() {
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data: Country[]) => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(sortedCountries)
      })
      .catch((err) => {
        console.error("Error fetching countries:", err)
        setError("Failed to load countries. Please try again later.")
      })
  }, [])

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      setLoading(true)
      setError(null)
      fetch(`/api/prayer-times?country=${selectedCountry}&city=${selectedCity}`)
        .then((response) => response.json())
        .then((data: PrayerTimesData) => {
          setPrayerTimes(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error fetching prayer times:", err)
          setError("Failed to load prayer times. Please try again later.")
          setLoading(false)
        })
    }
  }, [selectedCountry, selectedCity])

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSpinner />}
      {prayerTimes && <PrayerTimes prayerTimes={prayerTimes} />}
    </div>
  )
}

