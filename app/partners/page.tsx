import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Partners - JAWOR 2023',
  description: 'Partners and collaborators of JAWOR 2023',
}

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Partners</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building success through strategic partnerships
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-12">
              At JAWOR 2023, we believe in the power of collaboration. We work with trusted 
              partners, suppliers, and subcontractors to deliver exceptional construction solutions. 
              Our partnerships are built on mutual respect, shared values, and a commitment to excellence.
            </p>

            <div className="bg-primary-50 p-10 rounded-2xl mb-12">
              <h2 className="heading-tertiary mb-6">Partnership Opportunities</h2>
              <p className="text-gray-700 mb-6">
                We are always looking to establish new partnerships with reliable suppliers, 
                skilled subcontractors, and innovative service providers. If you're interested 
                in partnering with us, we'd love to hear from you.
              </p>
              <a
                href="mailto:jaworemmanuel@gmail.com"
                className="btn-primary inline-block"
              >
                Get in Touch
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3">Suppliers</h3>
                <p className="text-gray-600">
                  Quality materials from trusted suppliers
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3">Subcontractors</h3>
                <p className="text-gray-600">
                  Skilled professionals for specialized work
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3">Consultants</h3>
                <p className="text-gray-600">
                  Expert advice and technical support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
