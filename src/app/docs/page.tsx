import APIDocumentation from "@/components/APIDocumentation"

export const metadata = {
  title: "API Documentation - Prayer Times API",
  description:
    "Learn how to integrate accurate Islamic prayer times into your applications using our Prayer Times API. Comprehensive documentation for developers.",
  keywords: "prayer times API docs, Islamic prayer API, salah times integration, azan API documentation",
  openGraph: {
    title: "API Documentation - Prayer Times API",
    description:
      "Learn how to integrate accurate Islamic prayer times into your applications using our Prayer Times API.",
    url: "https://prayer-time-api.pages.dev/docs",
    siteName: "Prayer Times API",
    images: [
      {
        url: "https://prayer-time-api.pages.dev/og-image-docs.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Documentation - Prayer Times API",
    description:
      "Learn how to integrate accurate Islamic prayer times into your applications using our Prayer Times API.",
    images: ["https://prayer-time-api.pages.dev/og-image-docs.png"],
  },
}

export default function DocsPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center mb-12">API Documentation</h1>
      <APIDocumentation />
    </div>
  )
}

