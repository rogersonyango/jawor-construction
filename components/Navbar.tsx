'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Company',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Company Profile', href: '/profile' },
        { name: 'Vision', href: '/vision' },
        { name: 'Mission', href: '/mission' },
        { name: 'Core Values', href: '/values' },
      ],
    },
    { name: 'Services', href: '/services' },
    { name: 'Policies', href: '/policies' },
    { name: 'Partners', href: '/partners' },
    {
      name: 'Careers',
      dropdown: [
        { name: 'Jobs', href: '/careers/jobs' },
        { name: 'Internships', href: '/careers/internships' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/assets/jaworlogo.png" 
              alt="JAWOR 2023 Logo"
              width={120} 
              height={30} 
              className="object-contain"
            />
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium flex items-center transition-colors">
                      {item.name}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium flex items-center justify-between transition-colors"
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="bg-gray-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-8 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar





