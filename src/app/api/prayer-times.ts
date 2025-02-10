import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const country = searchParams.get("country")
  const city = searchParams.get("city")
  const date = searchParams.get("date")

  if (!country || !city || !date) {
    return NextResponse.json({ error: "Country, city, and date are required" }, { status: 400 })
  }

  const formattedDate = new Date(date).toISOString().split("T")[0]

  try {
    const response = await fetch(
      `http://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=${city}&country=${country}&method=2`,
    )
    const data = await response.json()

    if (data.code === 200) {
      return NextResponse.json(data.data)
    } else {
      return NextResponse.json({ error: data.status }, { status: data.code })
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch prayer times" }, { status: 500 })
  }
}

