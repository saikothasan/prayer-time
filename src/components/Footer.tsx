import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-islamic-gray-100 dark:bg-islamic-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-islamic-green dark:text-islamic-green-light">
              Prayer Times API
            </h3>
            <p className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400">
              Providing accurate prayer times for Muslims worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-islamic-maroon dark:text-islamic-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-islamic-maroon dark:text-islamic-gold-light">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-islamic-maroon dark:text-islamic-gold-light">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-islamic-gray-600 dark:text-islamic-gray-400 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-islamic-gray-200 dark:border-islamic-gray-700">
          <p className="text-sm text-center text-islamic-gray-600 dark:text-islamic-gray-400">
            © {new Date().getFullYear()} Prayer Times API. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

