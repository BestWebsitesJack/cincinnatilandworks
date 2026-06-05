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
      title: "Industrial Warehouse & Concrete Floors",
      description: "Industrial-grade concrete floors for warehouses, distribution centers, and manufacturing facilities across the Cincinnati Tri-State area. Built to handle forklift traffic, heavy loads, and constant use.",
      features: [
        "High PSI concrete for maximum durability",
        "Laser-guided leveling for flat floors",
        "Fast-track installation to minimize downtime",
        "Optional hardened surface treatments"
      ],
      image: "/Flooring.png"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Commercial Concrete Footings & Foundations",
      description: "Commercial concrete footings, walls, and foundations for businesses, industrial facilities, and commercial buildings across Cincinnati OH, KY & IN. Built to code, engineered for lasting structural integrity.",
      features: [
        "Engineered foundation design",
        "Rebar reinforcement",
        "Proper drainage integration",
        "Load-bearing calculations"
      ],
      image: "/Concretefoundations.png"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Commercial Parking Lots, Pavement & Curb and Gutter",
      description: "Commercial pavement, parking lot concrete, curb and gutter installation, and concrete replacement for businesses across Southwest Ohio, Northern Kentucky, and Southeast Indiana.",
      features: [
        "Proper slope for drainage",
        "Traffic flow optimization",
        "ADA-compliant installations",
        "Commercial pavement replacement & restoration"
      ],
      image: "/kroger.JPG"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Concrete Crack Repair, Replacement & Maintenance",
      description: "Expert commercial concrete crack repair, slab leveling, and concrete replacement for businesses in Cincinnati OH, KY & IN. We restore structural integrity and extend the life of your concrete investment.",
      features: [
        "Crack injection and sealing",
        "Slab jacking and leveling",
        "Surface restoration",
        "Commercial concrete maintenance contracts available"
      ],
      image: "/Maintenance.jpeg"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Commercial Sidewalks, Flatwork & Loading Docks",
      description: "Commercial concrete flatwork, sidewalks, and loading dock installation for businesses across the Cincinnati Tri-State area. ADA-compliant, slip-resistant, and built to last.",
      features: [
        "ADA compliance expertise",
        "Loading dock installation & repair",
        "Slip-resistant finishes",
        "Concrete flatwork contractor Cincinnati OH, KY & IN"
      ],
      image: "/sidewalk.JPG"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Commercial Drainage & Storm Sewer Systems",
      description: "Commercial drainage systems, storm sewer concrete repair, and water management solutions for businesses across Hamilton County OH, Northern KY, and SE Indiana.",
      features: [
        "Custom drainage design",
        "Proper grading and slope",
        "Storm sewer concrete repair",
        "Maintenance contracts available"
      ],
      image: "/kroger.JPG"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/75 via-zinc-900/50 to-zinc-900/10 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/services-hero.png')"}}></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Commercial & Industrial Concrete Services in Cincinnati
            </h1>
            <p className="text-xl text-zinc-400">
              Cincinnati Landworks provides expert commercial and industrial concrete services across Cincinnati, OH, Northern KY, and SE Indiana. From concrete flatwork and loading docks to parking lot replacement and drainage — 100% commercial focus.
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
                    <div className="text-[#E8510A] mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
                    <p className="text-lg text-zinc-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#E8510A] flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className="bg-[#E8510A] hover:bg-[#C8420A] text-white px-6 py-3 rounded inline-flex items-center gap-2 transition-colors"
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

      {/* Service Area */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Serving the Cincinnati Tri-State Area</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Cincinnati Landworks serves commercial and industrial clients across Hamilton County, Butler County, Warren County, and Clermont County in Ohio — plus Boone County, Kenton County, and Campbell County in Northern Kentucky — and Dearborn County in Southeast Indiana.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-2">
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
                <div className="text-6xl text-[#E8510A] mb-4 opacity-30">
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
      <section className="bg-[#E8510A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Every commercial and industrial concrete project is unique. Contact Cincinnati Landworks for a free estimate on concrete flatwork, pavement replacement, warehouse floors, loading docks, or drainage across Cincinnati OH, KY & IN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white hover:bg-zinc-100 text-[#E8510A] px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:5136732888"
              className="border-2 border-white hover:bg-white hover:text-[#E8510A] text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
            >
              Call (513) 673-2888
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
