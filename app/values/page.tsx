import { Metadata } from 'next'
import { FaAward, FaShieldAlt, FaLeaf, FaHandshake, FaUsers, FaLightbulb } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Core Values - JAWOR 2023',
  description: 'The core values that guide JAWOR 2023',
}

export default function ValuesPage() {
  const values = [
    {
      icon: <FaAward size={48} />,
      title: 'Quality',
      description: 'We are committed to delivering high-quality construction projects that meet the highest standards.',
    },
    {
      icon: <FaShieldAlt size={48} />,
      title: 'Safety',
      description: 'We prioritize the health, safety, and well-being of our employees, subcontractors, and clients.',
    },
    {
      icon: <FaLeaf size={48} />,
      title: 'Sustainability',
      description: 'We incorporate environmentally responsible practices and materials into our construction projects.',
    },
    {
      icon: <FaHandshake size={48} />,
      title: 'Integrity',
      description: 'We conduct ourselves with honesty, transparency, and integrity in all our interactions.',
    },
    {
      icon: <FaUsers size={48} />,
      title: 'Collaboration',
      description: 'We work collaboratively with our clients, subcontractors, and partners to deliver exceptional results.',
    },
    {
      icon: <FaLightbulb size={48} />,
      title: 'Innovation',
      description: 'We embrace new technologies, techniques, and materials to improve efficiency and enhance the built environment.',
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Core Values</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The principles that guide our work and define who we are
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-accent-600 flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
