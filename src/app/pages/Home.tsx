import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";
import { 
  Building2, 
  Warehouse, 
  ShieldCheck, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/70 z-10"></div>
        <ImageWithFallback
          src="/Commercial_Crane.png"
          alt="Cincinnati Landworks commercial concrete pump truck pour Cincinnati OH"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
              Cincinnati's Commercial & Industrial Concrete Specialists
            </div>
            <h1 className="text-5xl md:text-7xl mb-6">
              Built to Last. <br />
              <span className="text-orange-500">Built for Business in the OH-KY-IN Tri-State Area.</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
              Cincinnati Landworks delivers expert commercial and industrial concrete solutions across Cincinnati, OH, Northern KY, and SE Indiana. From warehouse floors to loading docks, parking lots to concrete replacement — built right, built to last.
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
              <div className="text-4xl md:text-5xl mb-2">10+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">50+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">100%</div>
              <div className="text-orange-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">3</div>
              <div className="text-orange-100">States Served</div>
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
              Commercial & Industrial Concrete Services
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Specialized commercial concrete solutions for businesses across Cincinnati, OH, KY & IN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Warehouse className="w-12 h-12" />,
                title: "Industrial Warehouse Flooring",
                description: "Industrial-grade concrete floors built for warehouses, manufacturing facilities, and distribution centers across the Cincinnati Tri-State area.",
                image: "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwaW5kdXN0cmlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzE2ODA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Concrete Footings & Foundations",
                description: "Commercial concrete footings, walls, and foundations engineered for lasting structural integrity on every job.",
                image: "https://images.unsplash.com/photo-1625337905408-7b6fe970e187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3MzE1MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: <ShieldCheck className="w-12 h-12" />,
                title: "Commercial Parking Lots & Pavement",
                description: "Commercial pavement, parking lot concrete, curb and gutter, and concrete replacement for businesses across SW Ohio, Northern KY, and SE Indiana.",
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

{/* Before & After Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Before & After
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Real commercial concrete projects across the Cincinnati Tri-State area
            </p>
          </div>
          <div className="elfsight-app-590db583-b8ff-43a8-9ea8-79963e98e535" data-elfsight-app-lazy></div>
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
                Cincinnati Landworks is a trusted commercial concrete contractor serving the Cincinnati Tri-State area. We focus exclusively on commercial and industrial concrete — no residential, just expert craftsmanship for businesses, GCs, and industrial facilities.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Licensed and fully insured contractors",
                  "Industrial-grade materials and equipment",
                  "Fast project turnaround times",
                  "Competitive commercial pricing",
                  "Commercial concrete maintenance contracts available",
                  "Concrete replacement & pavement restoration specialists"
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

      {/* Google Reviews */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              What Our Clients Say
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Google Reviews
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Trusted by commercial and industrial businesses across Cincinnati, OH, KY & IN
            </p>
          </div>
          <div className="elfsight-app-05698238-9f04-4352-a783-3f86c3552af7" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Get a free estimate for your commercial or industrial concrete project in Cincinnati, OH, KY or IN. From concrete flatwork to full pavement replacement — Cincinnati Landworks is ready.
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
              href="tel:513-673-2888"
              className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors"
            >
              Call (513) 673-2888
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
