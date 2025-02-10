"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

export default function DatePicker({ selectedDate, onSelectDate }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDateChange = (e) => {
    onSelectDate(new Date(e.target.value))
  }

  return (
    <div className="relative">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Select Date
      </label>
      <div className="relative">
        <input
          type="date"
          id="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={handleDateChange}
          className="w-full p-2 pl-8 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <Calendar className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  )
}

