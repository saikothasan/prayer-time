import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const city = searchParams.get("city")
  const country = searchParams.get("country")
  const date = searchParams.get("date") || new Date().toISOString().split("T")[0]
  const method = searchParams.get("method") || "2" // Default to Islamic Society of North America (ISNA)

  if (!city || !country) {
    return NextResponse.json({ error: "City and country are required parameters" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `http://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&method=${method}`,
    )
    const data = await response.json()

    if (data.code === 200) {
      return NextResponse.json({
        date: data.data.date.readable,
        timezone: data.data.meta.timezone,
        timings: data.data.timings,
      })
    } else {
      return NextResponse.json({ error: data.status }, { status: data.code })
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch prayer times" }, { status: 500 })
  }
}

