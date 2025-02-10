import Image from "next/image"

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About Prayer Times API"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">About Prayer Times API</h2>
            <p className="text-lg mb-4">
              Our mission is to provide accurate and reliable Islamic prayer times to Muslims around the world. We
              understand the importance of precise timings for daily prayers and have developed a robust API to serve
              this need.
            </p>
            <p className="text-lg mb-4">
              With years of experience in Islamic astronomy and software development, our team has created a solution
              that combines traditional Islamic jurisprudence with modern technology.
            </p>
            <p className="text-lg">
              Whether you're building a mobile app, a website, or integrating prayer times into your smart home system,
              our API is designed to meet your needs with ease and accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

