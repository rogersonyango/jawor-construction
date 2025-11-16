import { FaHammer, FaProjectDiagram, FaPencilRuler, FaTools, FaHome } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaHammer size={40} />,
      title: 'Building Construction',
      description: 'New build projects, renovations, and extensions for residential, commercial, and industrial clients.',
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: 'Project Management',
      description: 'Experienced project managers oversee projects from concept to completion, ensuring timely delivery.',
    },
    {
      icon: <FaPencilRuler size={40} />,
      title: 'Design and Build',
      description: 'Working with architects and engineers to deliver innovative and sustainable construction solutions.',
    },
    {
      icon: <FaTools size={40} />,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance services ensuring buildings remain safe, functional, and efficient.',
    },
    {
      icon: <FaHome size={40} />,
      title: 'Renovations',
      description: 'Professional renovation and refurbishment projects for all types of properties.',
    },
     {
      icon: <FaTools size={40} />,
      title: 'Plans and structural drawings',
      description: 'We make functional, and efficientplans for different buildings ensuring that they are upto the current trends and guidelines.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive construction solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 text-center animate-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-accent-900 flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
