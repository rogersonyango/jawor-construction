import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Internship Opportunities - JAWOR 2023',
  description: 'Internship opportunities at JAWOR 2023',
}

export default function InternshipsPage() {
  const internships = [
    {
      title: 'Civil Engineering Intern',
      duration: '3-6 months',
      location: 'Mukono, Uganda',
      description: 'Gain hands-on experience in civil engineering projects, working alongside experienced engineers.',
      requirements: [
        'Currently pursuing degree in Civil Engineering',
        'Strong academic record',
        'Basic knowledge of AutoCAD',
        'Eagerness to learn',
      ],
    },
    {
      title: 'Architecture Intern',
      duration: '3-6 months',
      location: 'Mukono, Uganda',
      description: 'Work on real architectural design projects and learn from experienced professionals.',
      requirements: [
        'Currently pursuing degree in Architecture',
        'Proficiency in design software',
        'Creative thinking',
        'Attention to detail',
      ],
    },
    {
      title: 'Construction Management Intern',
      duration: '3-6 months',
      location: 'Mukono, Uganda',
      description: 'Learn project management skills and gain exposure to construction site operations.',
      requirements: [
        'Pursuing degree in Construction Management or related field',
        'Strong organizational skills',
        'Good communication abilities',
        'Interest in construction industry',
      ],
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Internship Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Start your career journey with hands-on experience at JAWOR 2023
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-4">Why Intern With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent-900 rounded-full mr-3 mt-2"></span>
                  <span>Hands-on experience on real projects</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent-900 rounded-full mr-3 mt-2"></span>
                  <span>Mentorship from experienced professionals</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent-900 rounded-full mr-3 mt-2"></span>
                  <span>Competitive stipend</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent-900 rounded-full mr-3 mt-2"></span>
                  <span>Opportunity for full-time employment</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div key={index} className="card p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-semibold mb-2 md:mb-0">{internship.title}</h2>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {internship.duration}
                      </span>
                      <span className="px-3 py-1 bg-accent-100 text-accent-900 rounded-full text-sm">
                        {internship.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{internship.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="space-y-1">
                      {internship.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-accent-900 rounded-full mr-3 mt-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="btn-primary inline-block">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Application Process</h3>
              <p className="text-gray-700 mb-4">
                To apply for an internship, please send your CV, cover letter, and academic transcripts to:
              </p>
              <a
                href="mailto:jaworemmanuel@gmail.com"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                jaworemmanuel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
