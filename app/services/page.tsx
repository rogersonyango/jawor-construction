import { Metadata } from 'next'
import Image from 'next/image' 
import { FaHammer, FaProjectDiagram, FaPencilRuler, FaTools, FaHome } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Our Services - JAWOR 2023',
  description: 'Construction and general supply services offered by JAWOR 2023',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <FaHammer size={48} />,
      title: 'Building Construction',
      description: 'We deliver new build projects, renovations, and extensions for residential, commercial, and industrial clients. Our experienced team ensures quality construction that meets your specifications and exceeds expectations.',
      features: ['New builds', 'Renovations', 'Extensions', 'Commercial buildings', 'Industrial facilities'],
      image: '/assets/jawor2.jpeg', 
    },
    {
      icon: <FaProjectDiagram size={48} />,
      title: 'Project Management',
      description: 'Our experienced project managers oversee projects from concept to completion, ensuring that they are delivered on time, on budget, and to the required quality standards.',
      features: ['Full project oversight', 'Budget management', 'Timeline adherence', 'Quality control', 'Risk management'],
      image: '/assets/jawor3.jpeg',
    },
    {
      icon: <FaPencilRuler size={48} />,
      title: 'Design and Build',
      description: 'We work with architects, engineers, and designers to deliver innovative and sustainable construction solutions tailored to your needs.',
      features: ['Architectural design', 'Engineering solutions', 'Sustainable design', 'Custom solutions', 'Integrated delivery'],
      image: '/assets/jawor4.jpeg',
    },
    {
      icon: <FaTools size={48} />,
      title: 'Maintenance and Repair',
      description: 'We provide maintenance and repair services for existing buildings, ensuring that they remain safe, functional, and efficient throughout their lifecycle.',
      features: ['Regular maintenance', 'Emergency repairs', 'Safety inspections', 'Preventive care', 'System upgrades'],
      image: '/assets/jawor5.jpeg', 
    },
    {
      icon: <FaHome size={48} />,
      title: 'Renovations and Refurbishments',
      description: 'We deliver renovation and refurbishment projects for residential, commercial, and industrial clients, breathing new life into existing structures.',
      features: ['Interior renovations', 'Exterior upgrades', 'Modernization', 'Space optimization', 'Value enhancement'],
      image: '/assets/jr1.jpeg', 
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-accent-600 mb-4">{service.icon}</div>
                <h2 className="heading-tertiary mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600} 
                  height={400}
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                  priority={index === 0} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}