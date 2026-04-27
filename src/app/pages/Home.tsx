import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Building2, 
  Warehouse, 
  ShieldCheck, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/70 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1772299121503-cd62a57e3a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uY3JldGUlMjBjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2V8ZW58MXx8fHwxNzczMTY4MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Commercial concrete construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
              Commercial Concrete Specialists
            </div>
            <h1 className="text-5xl md:text-7xl mb-6">
              Built to Last. <br />
              <span className="text-orange-500">Built for Business.</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
              Industrial-grade concrete solutions for warehouses, commercial buildings, and industrial facilities across the Cincinnati Tri-State area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">25+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">500+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">100%</div>
              <div className="text-orange-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">24/7</div>
              <div className="text-orange-100">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Commercial Concrete Services
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Specialized solutions for industrial and commercial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Warehouse className="w-12 h-12" />,
                title: "Warehouse Flooring",
                description: "Heavy-duty concrete floors designed to withstand industrial loads and constant traffic.",
                image: "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwaW5kdXN0cmlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzE2ODA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Foundation Work",
                description: "Structural foundations and footers for commercial buildings and industrial facilities.",
                image: "https://images.unsplash.com/photo-1625337905408-7b6fe970e187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3MzE1MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: <ShieldCheck className="w-12 h-12" />,
                title: "Parking Structures",
                description: "Durable parking lots and garages built to handle heavy traffic and weather.",
                image: "https://images.unsplash.com/photo-1762537766077-17b2c4de6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25jcmV0ZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzE2ODA1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-orange-500 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-zinc-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-orange-500 hover:text-orange-600 inline-flex items-center gap-2 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded text-lg inline-flex items-center gap-2 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Commercial Concrete Experts
              </h2>
              <p className="text-xl text-zinc-600 mb-8">
                With over 25 years of experience, we deliver industrial-strength concrete solutions that stand the test of time.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Licensed and fully insured contractors",
                  "Industrial-grade materials and equipment",
                  "Fast project turnaround times",
                  "Competitive commercial pricing",
                  "24/7 emergency repair service",
                  "Comprehensive warranties"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg inline-flex items-center gap-2 transition-colors"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 text-white p-8 rounded-lg">
                <Clock className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl mb-2">Fast Response</h3>
                <p className="text-zinc-400">Quick quotes and project scheduling to meet your deadlines.</p>
              </div>
              <div className="bg-orange-500 text-white p-8 rounded-lg">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-2xl mb-2">Certified Team</h3>
                <p className="text-orange-100">All our technicians are certified and highly trained.</p>
              </div>
              <div className="bg-orange-500 text-white p-8 rounded-lg">
                <ShieldCheck className="w-12 h-12 mb-4" />
                <h3 className="text-2xl mb-2">Quality Assured</h3>
                <p className="text-orange-100">We stand behind every project with comprehensive warranties.</p>
              </div>
              <div className="bg-zinc-900 text-white p-8 rounded-lg">
                <Building2 className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl mb-2">Commercial Focus</h3>
                <p className="text-zinc-400">Specialized in large-scale industrial and commercial projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get a free quote for your commercial concrete project. Our team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:513-555-0100"
              className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
            >
              Call (513) 555-0100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
