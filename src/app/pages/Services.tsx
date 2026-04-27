import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Warehouse, 
  Building2, 
  Truck, 
  Settings, 
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: "Warehouse & Industrial Flooring",
      description: "Heavy-duty concrete floors engineered for warehouses, distribution centers, and manufacturing facilities. Designed to withstand forklift traffic, heavy machinery, and constant use.",
      features: [
        "High PSI concrete for maximum durability",
        "Laser-guided leveling for flat floors",
        "Fast-track installation to minimize downtime",
        "Optional hardened surface treatments"
      ],
      image: "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwaW5kdXN0cmlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzE2ODA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Commercial Foundation Work",
      description: "Structural foundations, footers, and walls for commercial buildings, retail spaces, and office complexes. Built to code and engineered for stability.",
      features: [
        "Engineered foundation design",
        "Rebar reinforcement",
        "Proper drainage integration",
        "Load-bearing calculations"
      ],
      image: "https://images.unsplash.com/photo-1625337905408-7b6fe970e187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3MzE1MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Parking Lots & Structures",
      description: "Commercial parking lots, garages, and loading docks built to handle heavy traffic and harsh weather conditions year-round.",
      features: [
        "Proper slope for drainage",
        "Traffic flow optimization",
        "ADA-compliant installations",
        "Striping and marking services"
      ],
      image: "https://images.unsplash.com/photo-1762537766077-17b2c4de6d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25jcmV0ZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzE2ODA1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Concrete Repair & Restoration",
      description: "Expert repair services for cracked, sunken, or damaged commercial concrete. We restore structural integrity and extend the life of your investment.",
      features: [
        "Crack injection and sealing",
        "Slab jacking and leveling",
        "Surface restoration",
        "Partial replacement options"
      ],
      image: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjb25jcmV0ZSUyMGZsb29yaW5nJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzMxNjgwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Commercial Sidewalks & Pavement",
      description: "ADA-compliant sidewalks, walkways, and pathways for commercial properties, retail centers, and business campuses.",
      features: [
        "ADA compliance expertise",
        "Decorative options available",
        "Slip-resistant finishes",
        "Integrated lighting preparation"
      ],
      image: "https://images.unsplash.com/photo-1673977597037-f0373625156e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzczMTY4MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Drainage Systems",
      description: "Commercial drainage solutions including catch basins, French drains, and channel drains to protect your property from water damage.",
      features: [
        "Custom drainage design",
        "Proper grading and slope",
        "Storm water management",
        "Maintenance contracts available"
      ],
      image: "https://images.unsplash.com/photo-1772299121503-cd62a57e3a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uY3JldGUlMjBjb25zdHJ1Y3Rpb24lMjB3YXJlaG91c2V8ZW58MXx8fHwxNzczMTY4MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Commercial Concrete Solutions
            </h1>
            <p className="text-xl text-zinc-400">
              Comprehensive concrete services designed for industrial and commercial applications. From new installations to repairs and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="text-orange-500 mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
                    <p className="text-lg text-zinc-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded inline-flex items-center gap-2 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              How We Work
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              A streamlined process designed for commercial efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free on-site assessment and project consultation"
              },
              {
                step: "02",
                title: "Quote",
                description: "Detailed proposal with timeline and pricing"
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional installation by certified team"
              },
              {
                step: "04",
                title: "Warranty",
                description: "Comprehensive warranty and ongoing support"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl text-orange-500 mb-4 opacity-30">
                  {item.step}
                </div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Every commercial project is unique. Contact us to discuss your specific requirements and get a tailored solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white hover:bg-zinc-100 text-orange-500 px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:513-555-0100"
              className="border-2 border-white hover:bg-white hover:text-orange-500 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
            >
              Call (513) 555-0100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
