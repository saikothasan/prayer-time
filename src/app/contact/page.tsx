import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact Us - Prayer Times API",
  description: "Get in touch with our team for any questions or support",
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <ContactForm />
    </div>
  )
}

