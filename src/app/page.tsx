import Hero from "../components/Hero"
import Features from "../components/Features"
import About from "../components/About"
import FAQ from "../components/FAQ"
import PrayerTimesDemo from "../components/PrayerTimesDemo"
import CTASection from "../components/CTASection"
import LocationSelector from "../components/LocationSelector"

export const metadata = {
  title: "Prayer Times API - Accurate Islamic Prayer Times for Developers",
  description:
    "Access reliable and precise Islamic prayer times for any location worldwide with our developer-friendly Prayer Times API. Perfect for apps, websites, and IoT devices.",
  keywords: "prayer times API, Islamic prayer, salah times, azan API, global prayer schedule, developer tools",
  openGraph: {
    title: "Prayer Times API - Accurate Islamic Prayer Times for Developers",
    description:
      "Access reliable and precise Islamic prayer times for any location worldwide with our developer-friendly Prayer Times API.",
    url: "https://prayer-time-api.pages.dev",
    siteName: "Prayer Times API",
    images: [
      {
        url: "https://prayer-time-api.pages.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Times API - Accurate Islamic Prayer Times for Developers",
    description:
      "Access reliable and precise Islamic prayer times for any location worldwide with our developer-friendly Prayer Times API.",
    images: ["https://prayer-time-api.pages.dev/og-image.png"],
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <LocationSelector />
      <Features />
      <PrayerTimesDemo />
      <About />
      <FAQ />
      <CTASection />
    </main>
  )
}

