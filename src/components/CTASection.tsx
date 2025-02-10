import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Integrate Accurate Prayer Times?</h2>
        <p className="text-xl mb-8">Start using our Prayer Times API today and enhance your Islamic applications.</p>
        <div className="space-x-4">
          <Button asChild variant="secondary">
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

