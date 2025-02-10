"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PrayerTimesData {
  date: string
  timezone: string
  timings: {
    [key: string]: string
  }
}

interface ErrorResponse {
  error: string
}

type ApiResponse = PrayerTimesData | ErrorResponse

export default function PrayerTimesDemo() {
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [date, setDate] = useState("")
  const [method, setMethod] = useState("2")
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/prayer-times?city=${city}&country=${country}&date=${date}&method=${method}`)
      const data: ApiResponse = await response.json()

      if (response.ok) {
        if ("timings" in data) {
          setPrayerTimes(data)
        } else {
          setError("Unexpected response format")
        }
      } else {
        setError("error" in data ? data.error : "An error occurred")
      }
    } catch (err) {
      setError("An error occurred while fetching prayer times")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Try Our Prayer Times API</h2>
        <div className="max-w-2xl mx-auto bg-islamic-white dark:bg-islamic-gray-800 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="method">Calculation Method</Label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger id="method">
                  <SelectValue placeholder="Select calculation method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Shia Ithna-Ashari</SelectItem>
                  <SelectItem value="1">University of Islamic Sciences, Karachi</SelectItem>
                  <SelectItem value="2">Islamic Society of North America</SelectItem>
                  <SelectItem value="3">Muslim World League</SelectItem>
                  <SelectItem value="4">Umm Al-Qura University, Makkah</SelectItem>
                  <SelectItem value="5">Egyptian General Authority of Survey</SelectItem>
                  <SelectItem value="7">Institute of Geophysics, University of Tehran</SelectItem>
                  <SelectItem value="8">Gulf Region</SelectItem>
                  <SelectItem value="9">Kuwait</SelectItem>
                  <SelectItem value="10">Qatar</SelectItem>
                  <SelectItem value="11">Majlis Ugama Islam Singapura, Singapore</SelectItem>
                  <SelectItem value="12">Union Organization islamic de France</SelectItem>
                  <SelectItem value="13">Diyanet İşleri Başkanlığı, Turkey</SelectItem>
                  <SelectItem value="14">Spiritual Administration of Muslims of Russia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Get Prayer Times"}
            </Button>
          </form>
          {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}
          {prayerTimes && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Prayer Times for {prayerTimes.date}</h3>
              <p className="mb-2">Timezone: {prayerTimes.timezone}</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(prayerTimes.timings).map(([prayer, time]) => (
                  <div key={prayer} className="flex justify-between">
                    <span className="font-medium">{prayer}:</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

