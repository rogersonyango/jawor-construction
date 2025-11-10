import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-secondary text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's build something exceptional together. Contact us today for a consultation.
        </p>
        <Link href="/contact" className="btn-primary bg-accent-600 hover:bg-accent-700 inline-block">
          Get Started
        </Link>
      </div>
    </section>
  )
}

export default CTASection
