interface PrayerTimesProps {
  prayerTimes: {
    date: string
    timezone: string
    timings: {
      [key: string]: string
    }
  }
}

export default function PrayerTimes({ prayerTimes }: PrayerTimesProps) {
  const prayerNames = {
    Fajr: "Fajr",
    Sunrise: "Sunrise",
    Dhuhr: "Dhuhr",
    Asr: "Asr",
    Maghrib: "Maghrib",
    Isha: "Isha",
  }

  return (
    <div className="bg-islamic-white dark:bg-islamic-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-islamic-gray-900 dark:text-islamic-gray-100">Prayer Times</h3>
        <p className="mt-1 max-w-2xl text-sm text-islamic-gray-500 dark:text-islamic-gray-400">
          {prayerTimes.date} - {prayerTimes.timezone}
        </p>
      </div>
      <div className="border-t border-islamic-gray-200 dark:border-islamic-gray-700">
        <dl>
          {Object.entries(prayerNames).map(([key, name], index) => (
            <div
              key={key}
              className={`${
                index % 2 === 0
                  ? "bg-islamic-gray-50 dark:bg-islamic-gray-900"
                  : "bg-islamic-white dark:bg-islamic-gray-800"
              } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt className="text-sm font-medium text-islamic-gray-500 dark:text-islamic-gray-400">{name}</dt>
              <dd className="mt-1 text-sm text-islamic-gray-900 dark:text-islamic-gray-100 sm:mt-0 sm:col-span-2">
                {prayerTimes.timings[key]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

