import { Clock, Globe, Code, Zap } from "lucide-react"

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Accurate Timings",
    description: "Get precise prayer times based on reliable calculation methods.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Coverage",
    description: "Access prayer times for any location worldwide.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Easy Integration",
    description: "Simple API endpoints for seamless integration into your applications.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast and Reliable",
    description: "High-performance API with 99.9% uptime guarantee.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-islamic-beige-light dark:bg-islamic-maroon-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-islamic-maroon dark:text-islamic-gold-light font-arabic">
          لماذا تختار واجهة برمجة التطبيقات الخاصة بنا؟
        </h2>
        <h3 className="text-2xl font-bold text-center mb-12 text-islamic-maroon dark:text-islamic-gold-light">
          Why Choose Our Prayer Times API?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-islamic-white dark:bg-islamic-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="text-islamic-green-dark dark:text-islamic-green-light mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-islamic-maroon-dark dark:text-islamic-gold-light">
                {feature.title}
              </h3>
              <p className="text-islamic-gray-700 dark:text-islamic-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

