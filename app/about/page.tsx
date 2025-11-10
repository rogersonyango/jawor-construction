import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - JAWOR 2023',
  description: 'Learn about JAWOR 2023 General Supplies and Construction Company Limited',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building Excellence, Shaping Futures Since 2023
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Jawor 2023 General Supplies and Construction Company Limited, 
                a leading construction company dedicated to building excellence and shaping futures. 
                With a team of experienced professionals and a commitment to safety, quality, and 
                sustainability, we deliver exceptional construction solutions for our clients.
              </p>

              <h2 className="heading-tertiary mb-4 mt-8">Our History</h2>
              <p className="text-gray-700 mb-6">
                Our history dates back to 2023, when we were founded with a vision to provide 
                high-quality construction services to our clients. Since then, we have grown into 
                a reputable company with a strong track record of delivering projects on time, on 
                budget, and to the required quality standards.
              </p>

              <h2 className="heading-tertiary mb-4 mt-8">Our Team</h2>
              <p className="text-gray-700 mb-6">
                Our team is comprised of skilled professionals with extensive experience in the 
                construction industry. We are passionate about construction and dedicated to providing 
                exceptional service and support to our clients. From concept to completion, we work 
                closely with our clients to bring their vision to life.
              </p>

              <h2 className="heading-tertiary mb-4 mt-8">Our Commitment</h2>
              <p className="text-gray-700 mb-6">
                Our goal is to build long-term relationships with our clients, employees, and communities, 
                and to make a positive impact on the built environment. We prioritize safety, quality, and 
                sustainability in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card p-8">
              <div className="text-5xl font-bold text-accent-600 mb-2">2023</div>
              <div className="text-gray-600">Year Founded</div>
            </div>
            <div className="card p-8">
              <div className="text-5xl font-bold text-accent-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="card p-8">
              <div className="text-5xl font-bold text-accent-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
