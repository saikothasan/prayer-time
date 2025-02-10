import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate are the prayer times provided by the API?",
    answer:
      "Our prayer times are calculated using precise astronomical formulas and follow the guidelines set by Islamic scholars. We use reliable calculation methods and regularly verify our results against local observations.",
  },
  {
    question: "Can I use the API for commercial purposes?",
    answer:
      "Yes, we offer plans suitable for commercial use. Please check our pricing page for more details on our commercial licenses and usage limits.",
  },
  {
    question: "Do you provide prayer times for all locations worldwide?",
    answer:
      "Our API covers prayer times for virtually any location on Earth. If you encounter a location that's not supported, please contact us, and we'll work to add it promptly.",
  },
  {
    question: "How often are the prayer times updated?",
    answer:
      "Prayer times are calculated in real-time based on the latest astronomical data. This ensures that you always receive the most up-to-date and accurate prayer times for any given date and location.",
  },
  {
    question: "Is there a limit to the number of API calls I can make?",
    answer:
      "API call limits depend on the plan you choose. We offer various plans to suit different needs, from individual developers to large-scale applications. Check our pricing page for specific details on API call limits for each plan.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

