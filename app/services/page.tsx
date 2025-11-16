"use client"

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaHammer, FaHome, FaPencilRuler, FaProjectDiagram, FaTools } from 'react-icons/fa';

export default function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideshowRef = useRef(null);

  const services = [
    {
      icon: <FaHammer size={48} className="text-[#b01e41]" />,
      title: 'Building Construction',
      description:
        'We deliver new build projects, renovations, and extensions for residential, commercial, and industrial clients. Our team ensures quality construction that meets your specifications and exceeds expectations.',
      features: ['New builds', 'Renovations', 'Extensions', 'Commercial buildings', 'Industrial facilities'],
      image: '/assets/jawor3.jpeg',
    },
    {
      icon: <FaProjectDiagram size={48} className="text-[#b01e41]" />,
      title: 'Project Management',
      description:
        'Our experienced project managers oversee projects from concept to completion, ensuring that they are delivered on time, on budget, and to the required quality standards.',
      features: ['Full project oversight', 'Budget management', 'Timeline adherence', 'Quality control', 'Risk management'],
      image: '/assets/jawor_fencing.jpeg',
    },
    {
      icon: <FaPencilRuler size={48} className="text-[#b01e41]" />,
      title: 'Design and Build',
      description:
        'We work with architects, engineers, and designers to deliver innovative and sustainable construction solutions tailored to your needs.',
      features: ['Architectural design', 'Engineering solutions', 'Sustainable design', 'Custom solutions', 'Integrated delivery'],
      image: '/assets/jawor_house.jpeg',
    },
    {
      icon: <FaTools size={48} className="text-[#b01e41]" />,
      title: 'Maintenance and Repair',
      description:
        'We provide maintenance and repair services for existing buildings, ensuring that they remain safe, functional, and efficient throughout their lifecycle.',
      features: ['Regular maintenance', 'Emergency repairs', 'Safety inspections', 'Preventive care', 'System upgrades'],
      image: '/assets/jawor_eng.jpeg',
    },
    {
      icon: <FaHome size={48} className="text-[#b01e41]" />,
      title: 'Renovations and Refurbishments',
      description:
        'We deliver renovation and refurbishment projects for residential, commercial, and industrial clients, breathing new life into existing structures.',
      features: ['Interior renovations', 'Exterior upgrades', 'Modernization', 'Space optimization', 'Value enhancement'],
      image: '/assets/jr1.jpeg',
    },
  ];

  const services_slide = [
    { image: '/assets/jawor_house.jpeg', title: 'Building Construction', description: 'We deliver new build projects...' },
    { image: '/assets/jawor_incomp.jpeg', title: 'Project Management', description: 'Our experienced project managers...' },
    { image: '/assets/jawor_incomp3.jpeg', title: 'Design and Build', description: 'We work with architects...' },
    { image: '/assets/jawor_incomp2.jpeg', title: 'Maintenance and Repair', description: 'We provide maintenance...' },
    { image: '/assets/kiwala_site.jpeg', title: 'Renovations and Refurbishments', description: 'We deliver renovations...' },
    { image: '/assets/jawor_incomp4.jpeg', title: 'Project Management Extension', description: 'Expert project handling...' },
  ];

  // AUTO-ADVANCE (PAUSE ON HOVER)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services_slide.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, services_slide.length]);

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* SLIDESHOW */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={slideshowRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border-4 border-[#7f1d39]"
          >
            {services_slide.map((service, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? 'opacity-100 animate-slideIn' : 'opacity-0'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] transform hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* INDICATORS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {services_slide.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-[#b01e41] w-8'
                      : 'bg-[#b01e41]/50'
                  }`}
                />
              ))}
            </div>

            {/* LEFT BUTTON */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + services_slide.length) % services_slide.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-[#941d3d]/80 hover:bg-[#7f1d39] text-white p-3 rounded-full transition"
            >
              <FaChevronLeft size={22} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % services_slide.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-[#941d3d]/80 hover:bg-[#7f1d39] text-white p-3 rounded-full transition"
            >
              <FaChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS (unchanged) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#b01e41] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slideIn {
            animation: slideIn 1.2s ease-out;
          }
        `}
      </style>
    </div>
  );
}






