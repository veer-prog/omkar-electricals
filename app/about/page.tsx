import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About Omkar Electricals - Our Team & Values',
  description: 'Learn about Omkar Electricals, our team, vision, mission, and commitment to excellence in electrical services.',
}

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-accent font-bold text-sm md:text-base mb-4">WHO WE ARE?</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Want to Know a little <span className="text-accent">About us?</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-8">Let us tell you.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Omkar Electricals is a comprehensive electrical contracting and service organization. Our programme involves a dynamic and committed work force that serves its clients in meeting and exceeding their commitment towards sustainable built environment, energy efficiency and safety compliance.
                </p>
              </div>
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src="/team-illustration.png"
                  alt="Our professional team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Omkar Electricals envisions being a flag-bearer for sustainable electrical solutions. We promote sustainability movement and create awareness about sustainable habitat by highlighting strategies.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At present we are conducting the following programmes: the Energy Audit, Safety Audit, ISO - 9001,14001,45001,50001 Audit and certification.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We are also doing the Green building Certification with IGBC, GRIHA and ASSOCHAM GEM and Third Party commissioning.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our current projects involve MEP design and build up for hospital, hotel, offices, homes, residential etc.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Vision */}
              <div>
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/vision-image.png"
                    alt="Our vision"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the most respected sustainable design consultancy company for our clients and employees that embark on an everlasting legacy through sustainable design solutions and implementations.
                </p>
              </div>

              {/* Mission */}
              <div>
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/mission-image.png"
                    alt="Our mission"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our consultancy serves clients with high standards of honesty, integrity, competence and objectivity. We work with the end in mind and strong ethics. We discourage any commissions, remuneration, or other benefits from any third party in connection with the recommendations to our clients. Respecting the individual&apos;s space and responsibility for balancing personal and professional life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/values-image.png"
                  alt="Our core values"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Values Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">VALUES</h2>

                <ul className="space-y-4">
                  {[
                    'Have business dealings conducted with the highest standards of honesty, integrity, competence, and objectivity.',
                    'Have high business ethics and discourage any commissions, remuneration, or other benefits from any third party in connection with the recommendations to our client.',
                    'Respect the individual\'s responsibility for balancing personal and professional life.',
                    'Commit to personal growth within a stable, rewarding & friendly working environment.',
                    'Seek opportunities to work for worthy causes within our communities.',
                  ].map((value, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-accent font-bold text-xl">•</span>
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
