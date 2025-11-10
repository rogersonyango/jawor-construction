import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Vision - JAWOR 2023',
  description: 'The vision of JAWOR 2023 General Supplies and Construction Company Limited',
}

export default function VisionPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Vision</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-12 rounded-2xl shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Excellence, Shaping Futures
              </h2>
              <p className="text-xl text-gray-700">
                Our vision is to be the leading construction company in Uganda and beyond, 
                recognized for our commitment to excellence, innovation, and sustainability. 
                We aspire to create lasting value for our clients and communities while shaping 
                the future of the built environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
