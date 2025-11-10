import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Profile - JAWOR 2023',
  description: 'Company profile and overview of JAWOR 2023',
}

export default function ProfilePage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">Company Profile</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Jawor 2023 General Supplies and Construction Company Limited is a leading construction 
              company dedicated to building excellence and shaping futures. With a team of experienced 
              professionals and a commitment to safety, quality, and sustainability, we deliver 
              exceptional construction solutions for our clients.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              From concept to completion, we work closely with our clients to bring their vision to 
              life. Our goal is to build long-term relationships with our clients, employees, and 
              communities, and to make a positive impact on the built environment.
            </p>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h2 className="heading-tertiary mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> Mukono, Kayunga Road, Uganda</p>
                <p><strong>Telephone:</strong> 0772927899, 0759740732</p>
                <p><strong>Email:</strong> jaworemmanuel@gmail.com</p>
              </div>
            </div>

            <h2 className="heading-tertiary mb-4">Our Expertise</h2>
            <p className="text-gray-700 mb-6">
              We specialize in a wide range of construction services including building construction, 
              project management, design and build solutions, maintenance and repair, and renovations. 
              Our experienced team brings innovation and sustainability to every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
