import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Oops! Page not found.</p>
        <Link href="/" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
          Go back home
        </Link>
      </div>
    </div>
  )
}

