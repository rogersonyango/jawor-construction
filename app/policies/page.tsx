import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Policies - JAWOR 2023',
  description: 'Company policies and commitments of JAWOR 2023',
}

export default function PoliciesPage() {
  const policies = [
    {
      title: 'Health and Safety',
      content: 'We prioritize the health, safety, and well-being of our employees, subcontractors, and clients. We implement comprehensive safety protocols and conduct regular training to ensure a safe working environment on all our projects.',
    },
    {
      title: 'Quality',
      content: 'We are committed to delivering high-quality construction projects that meet the highest standards. Our quality management system ensures consistent excellence in every aspect of our work.',
    },
    {
      title: 'Sustainability',
      content: 'We incorporate environmentally responsible practices and materials into our construction projects. We are committed to reducing our environmental footprint and promoting sustainable building practices.',
    },
    {
      title: 'Customer Service',
      content: 'We strive to provide exceptional customer service and support to our clients. We maintain open communication, respond promptly to inquiries, and work collaboratively to ensure client satisfaction.',
    },
    {
      title: 'Integrity',
      content: 'We conduct ourselves with honesty, transparency, and integrity in all our interactions. We adhere to the highest ethical standards and comply with all applicable laws and regulations.',
    },
    {
      title: 'Equal Opportunity',
      content: 'We are an equal opportunity employer and are committed to creating a diverse and inclusive workplace. We do not discriminate based on race, color, religion, gender, age, or any other protected characteristic.',
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Policies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to excellence, safety, and integrity
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {policies.map((policy, index) => (
              <div key={index} className="card p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary-700">
                  {policy.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
