import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-islamic-green-dark to-islamic-blue-dark text-islamic-white py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-arabic">أوقات الصلاة</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Accurate Prayer Times for Every Location
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Empower your applications with precise and reliable Islamic prayer times using our easy-to-integrate API.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              className="bg-islamic-gold hover:bg-islamic-gold-light text-islamic-black transition-colors duration-300"
            >
              <Link href="https://t.me/drkingbd">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-islamic-white text-islamic-white hover:bg-islamic-white hover:text-islamic-green-dark transition-colors duration-300"
            >
              <Link href="/docs">View Docs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

