import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white animate-fade-in">
        <h1 className="heading-primary text-white mb-6">
          Building Excellence,<br />Shaping Futures
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          Your trusted partner in construction and general supplies. Delivering exceptional solutions with quality, safety, and sustainability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn-primary inline-flex items-center justify-center group">
            Our Services
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
