"use client"

import Link from "next/link"
import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="bg-islamic-white dark:bg-islamic-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-islamic-green dark:text-islamic-green-light">
            Prayer Times API
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link
              href="/"
              className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-islamic-white dark:border-islamic-green-light dark:text-islamic-green-light dark:hover:bg-islamic-green-light dark:hover:text-islamic-gray-900 transition-colors duration-300"
            >
              <Link href="/login">Log In</Link>
            </Button>
            <Button
              asChild
              className="bg-islamic-green text-islamic-white hover:bg-islamic-green-dark dark:bg-islamic-green-light dark:text-islamic-gray-900 dark:hover:bg-islamic-green transition-colors duration-300"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-islamic-gray-200 dark:hover:bg-islamic-gray-700 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-islamic-gold" />
              ) : (
                <Moon className="h-5 w-5 text-islamic-blue" />
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-islamic-gray-200 dark:hover:bg-islamic-gray-700 transition-colors duration-300 mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-islamic-gold" />
              ) : (
                <Moon className="h-5 w-5 text-islamic-blue" />
              )}
            </button>
            <button onClick={toggleMobileMenu} className="p-2 text-islamic-gray-700 dark:text-islamic-gray-300">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/docs"
                className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
              >
                Docs
              </Link>
              <Link
                href="/pricing"
                className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-islamic-gray-700 dark:text-islamic-gray-300 hover:text-islamic-green dark:hover:text-islamic-green-light transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4 space-y-2">
              <Button
                asChild
                variant="outline"
                className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-islamic-white dark:border-islamic-green-light dark:text-islamic-green-light dark:hover:bg-islamic-green-light dark:hover:text-islamic-gray-900 transition-colors duration-300"
              >
                <Link href="/login">Log In</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-islamic-green text-islamic-white hover:bg-islamic-green-dark dark:bg-islamic-green-light dark:text-islamic-gray-900 dark:hover:bg-islamic-green transition-colors duration-300"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

