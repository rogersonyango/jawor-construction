import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Mission - JAWOR 2023',
  description: 'The mission statement of JAWOR 2023',
}

export default function MissionPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Mission</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 p-10 rounded-2xl mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                At Jawor 2023 General Supplies and Construction Company Limited, our mission is to 
                deliver exceptional construction solutions that exceed client expectations, while 
                prioritizing safety, quality, and sustainability. We strive to build long-term 
                relationships with our clients, employees, and communities, and to make a positive 
                impact on the built environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent-600">Client Focus</h3>
                <p className="text-gray-700">
                  Exceeding client expectations through exceptional service and quality delivery
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent-600">Safety First</h3>
                <p className="text-gray-700">
                  Prioritizing the health and safety of everyone involved in our projects
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent-600">Quality Excellence</h3>
                <p className="text-gray-700">
                  Maintaining the highest standards in every aspect of our work
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent-600">Sustainability</h3>
                <p className="text-gray-700">
                  Building responsibly with consideration for environmental impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
