import "./globals.css"
import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "../components/ThemeProvider"
import type { Metadata } from 'next'
import React from 'react'; // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prayer Times API - Accurate Islamic Prayer Times for Developers",
  description: "Access reliable and precise Islamic prayer times for any location worldwide with our developer-friendly Prayer Times API.",
  metadataBase: new URL("https://prayer-time-api.pages.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prayer Times API - Accurate Islamic Prayer Times for Developers",
    description: "Access reliable and precise Islamic prayer times for any location worldwide with our developer-friendly Prayer Times API.",
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
    description: "Access reliable and precise Islamic prayer times for any location worldwide with our developer-friendly Prayer Times API.",
    images: ["https://prayer-time-api.pages.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
