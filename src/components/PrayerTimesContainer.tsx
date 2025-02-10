"use client"

import { useState, useEffect } from "react"
import CountrySelect from "./CountrySelect"
import CitySelect from "./CitySelect"
import PrayerTimes from "./PrayerTimes"

export default function PrayerTimesContainer() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [prayerTimes, setPrayerTimes] = useState(null)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(sortedCountries)
      })
  }, [])

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      fetch(`/api/prayer-times?country=${selectedCountry}&city=${selectedCity}`)
        .then((response) => response.json())
        .then((data) => setPrayerTimes(data))
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
      {prayerTimes && <PrayerTimes prayerTimes={prayerTimes} />}
    </div>
  )
}

