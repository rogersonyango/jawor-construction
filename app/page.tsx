import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTASection from '@/components/CTASection'
import Script from 'next/script'

export default function Home() {
  // Structured data for Google Search
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "JAWOR 2023 General Supplies and Construction Company Limited",
    "image": "https://jaworconstructions.com/og-image.jpg",
    "logo": "https://jaworconstructions.com/icon.png",
    "url": "https://jaworconstructions.com",
    "telephone": "+256772927899",
    "email": "jaworemmanuel@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kayunga Road",
      "addressLocality": "Mukono",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.3476654,
      "longitude": 32.7555148
    },
    "sameAs": [
      "https://www.facebook.com/jawor2023",
      "https://www.linkedin.com/company/jawor2023",
      "https://www.instagram.com/jawor2023"
    ],
    "description": "Leading construction company in Mukono, Uganda. Delivering exceptional construction solutions with quality, safety, and sustainability.",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "knowsAbout": [
      "Building Construction",
      "Project Management",
      "Design and Build",
      "Maintenance and Repair",
      "Renovations and Refurbishments"
    ]
  }

  return (
    <>
      {/* Add structured data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}