import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Industrial Warehouse Complex",
      location: "Cincinnati, OH",
      date: "2025",
      category: "Warehouse Flooring",
      description: "50,000 sq ft warehouse floor with laser-leveled concrete designed for heavy forklift traffic and high-bay storage systems.",
      image: "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwaW5kdXN0cmlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzE2ODA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["50,000 sq ft", "4,000 PSI", "14 days"]
    },
    {
      title: "Corporate Office Foundation",
      location: "Mason, OH",
      date: "2025",
      category: "Foundation Work",
      description: "Complete foundation system for new 3-story corporate headquarters including footers, walls, and structural slab.",
      image: "https://images.unsplash.com/photo-1625337905408-7b6fe970e187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3MzE1MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["30,000 sq ft", "3 stories", "21 days"]
    },
    {
      title: "Shopping Center Parking Lot",
      location: "West Chester, OH",
      date: "2024",
      category: "Parking Structures",
      description: "Complete parking lot replacement for busy shopping center including 300 spaces, drainage system, and ADA-compliant pathways.",
      image: "https://images.unsplash.com/photo-1762537766077-17b2c4de6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25jcmV0ZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzE2ODA1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["300 spaces", "ADA compliant", "18 days"]
    },
    {
      title: "Distribution Center Floor",
      location: "Sharonville, OH",
      date: "2024",
      category: "Warehouse Flooring",
      description: "High-strength concrete flooring for Amazon distribution facility with advanced leveling for automated systems.",
      image: "https://images.unsplash.com/photo-1772299121503-cd62a57e3a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uY3JldGUlMjBjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2V8ZW58MXx8fHwxNzczMTY4MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["75,000 sq ft", "5,000 PSI", "28 days"]
    },
    {
      title: "Medical Center Expansion",
      location: "Blue Ash, OH",
      date: "2024",
      category: "Foundation Work",
      description: "Foundation and structural concrete for hospital expansion including underground parking and loading docks.",
      image: "https://images.unsplash.com/photo-1673977597037-f0373625156e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzczMTY4MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["2-level parking", "40,000 sq ft", "35 days"]
    },
    {
      title: "Manufacturing Plant Floor",
      location: "Norwood, OH",
      date: "2024",
      category: "Industrial Flooring",
      description: "Complete floor replacement for automotive parts manufacturer with chemical-resistant finish and heavy load capacity.",
      image: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjb25jcmV0ZSUyMGZsb29yaW5nJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzMxNjgwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["35,000 sq ft", "Chemical resistant", "21 days"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
              Our Work
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-zinc-400">
              Take a look at some of our recent commercial concrete projects across the Cincinnati Tri-State area.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-zinc-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-zinc-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4 text-sm">
                    {project.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="bg-zinc-100 px-3 py-1 rounded">
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              Industry Expertise
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              We Serve Multiple Industries
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Our commercial concrete expertise spans across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Warehouses & Distribution",
                description: "Heavy-duty flooring for logistics facilities"
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Retail & Shopping",
                description: "Parking lots and walkways for retail centers"
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Manufacturing",
                description: "Industrial floors for production facilities"
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Office Buildings",
                description: "Foundations and structural concrete"
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-orange-500 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl mb-2">{industry.title}</h3>
                <p className="text-zinc-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Cincinnati Concrete delivered our 50,000 sq ft warehouse floor on time and on budget. The quality is exceptional and has held up perfectly under heavy forklift traffic.",
                author: "Mike Johnson",
                company: "Tri-State Logistics"
              },
              {
                quote: "Professional team, competitive pricing, and outstanding results. They completed our parking lot replacement with minimal disruption to our business operations.",
                author: "Sarah Chen",
                company: "Oakley Shopping Center"
              },
              {
                quote: "We've used Cincinnati Concrete for three major projects. Their expertise in commercial applications and attention to detail is unmatched in the region.",
                author: "David Martinez",
                company: "Northern KY Development"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-zinc-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-zinc-200 pt-4">
                  <div className="text-zinc-900">{testimonial.author}</div>
                  <div className="text-sm text-zinc-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied commercial clients across the Cincinnati area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
