import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary-400">JAWOR</span>
              <span className="text-accent-900"> 2023</span>
            </h3>
            <p className="text-sm mb-4">
              Building Excellence, Shaping Futures. Your trusted partner in construction and general supplies.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-900 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/partners" className="hover:text-primary-400 transition-colors">Partners</Link></li>
              <li><Link href="/careers/jobs" className="hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link href="/policies" className="hover:text-primary-400 transition-colors">Policies</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Building Construction</li>
              <li>Project Management</li>
              <li>Design and Build</li>
              <li>Maintenance & Repair</li>
              <li>Renovations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0 text-accent-900" />
                <span>Mukono, Kayunga Road, Uganda</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0 text-accent-900" />
                <div>
                  <a href="tel:0759740732" className="hover:text-primary-400 transition-colors">0759740732</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0 text-accent-900" />
                <a href="mailto:jaworemmanuel@gmail.com" className="hover:text-primary-400 transition-colors">
                  jaworemmanuel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JAWOR 2023 General Supplies and Construction Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
