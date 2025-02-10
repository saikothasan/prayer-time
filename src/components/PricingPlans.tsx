import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["1,000 API calls per day", "Standard support", "Basic documentation"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["10,000 API calls per day", "Priority support", "Advanced documentation", "Custom calculation methods"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited API calls", "24/7 dedicated support", "Full API access", "Custom integration assistance"],
  },
]

export default function PricingPlans() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">
              {plan.price}
              <span className="text-sm font-normal">/month</span>
            </p>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Choose Plan</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

