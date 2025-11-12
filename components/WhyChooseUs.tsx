import { FaCheckCircle } from 'react-icons/fa'

const WhyChooseUs = () => {
  const values = [
    'Quality: High-quality construction meeting the highest standards',
    'Safety: Prioritizing health and well-being of all stakeholders',
    'Sustainability: Environmentally responsible practices',
    'Integrity: Honesty and transparency in all interactions',
    'Collaboration: Working together for exceptional results',
    'Innovation: Embracing new technologies and techniques',
  ]

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-secondary mb-6">Why Choose JAWOR 2023?</h2>
            <p className="text-lg text-gray-600 mb-6">
              With a team of experienced professionals and a commitment to excellence, 
              we deliver exceptional construction solutions that exceed expectations.
            </p>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-accent-900 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Construction team"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
