import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Job Opportunities - JAWOR 2023',
  description: 'Career opportunities at JAWOR 2023',
}

export default function JobsPage() {
  const jobs = [
    {
      title: 'Project Manager',
      type: 'Full-time',
      location: 'Mukono, Uganda',
      description: 'We are seeking an experienced Project Manager to oversee construction projects from start to finish.',
      requirements: [
        '5+ years of project management experience',
        'Degree in Civil Engineering or related field',
        'Strong leadership and communication skills',
        'Knowledge of construction methods and regulations',
      ],
    },
    {
      title: 'Site Supervisor',
      type: 'Full-time',
      location: 'Mukono, Uganda',
      description: 'Looking for a dedicated Site Supervisor to manage day-to-day construction activities on site.',
      requirements: [
        '3+ years of site supervision experience',
        'Technical diploma or degree in construction',
        'Strong organizational skills',
        'Knowledge of safety protocols',
      ],
    },
    {
      title: 'Civil Engineer',
      type: 'Full-time',
      location: 'Mukono, Uganda',
      description: 'Seeking a qualified Civil Engineer to design and oversee construction projects.',
      requirements: [
        'Bachelor\'s degree in Civil Engineering',
        '2+ years of experience',
        'Proficiency in AutoCAD and engineering software',
        'Strong analytical and problem-solving skills',
      ],
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Job Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team and build your career with JAWOR 2023
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              We're always looking for talented individuals to join our growing team. 
              Explore our current openings below and apply today.
            </p>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index} className="card p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-semibold mb-2 md:mb-0">{job.title}</h2>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-accent-600 rounded-full mr-3 mt-2"></span>
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
              <h3 className="text-2xl font-semibold mb-4">Don't see a position that fits?</h3>
              <p className="text-gray-700 mb-6">
                We're always interested in hearing from talented professionals. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a href="mailto:jaworemmanuel@gmail.com" className="btn-primary inline-block">
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
