import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <div>
      <section className="relative py-32 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900/70 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Commercial_Crane.png')" }}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">Our Story</div>
            <h1 className="text-5xl md:text-6xl mb-6">About Cincinnati Landworks — Commercial Concrete Contractor</h1>
            <p className="text-xl text-zinc-300">Founded by two Cincinnati entrepreneurs who built their careers in construction and concrete, Cincinnati Landworks is 100% focused on commercial and industrial concrete across OH, KY & IN.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-2">The Team</div>
            <h2 className="text-4xl md:text-5xl mb-4">Meet Kyle & Brandon</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">Two Cincinnati-area entrepreneurs who turned construction industry experience into a commercial concrete company built to last.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[416px] overflow-hidden">
                <img src="/Kyle.jpg" alt="Kyle Johnson Co-Founder Cincinnati Landworks Commercial Concrete" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl mb-1">Kyle Johnson</h3>
                <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">Co-Founder</div>
                <p className="text-zinc-600">Commercial concrete contractor and co-founder of Cincinnati Landworks LLC, serving the Cincinnati Tri-State area with expert commercial and industrial concrete solutions.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[416px] overflow-hidden">
                <img src="/Brandon.jpg" alt="Brandon Glassmeyer Co-Founder Cincinnati Landworks Commercial Concrete" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl mb-1">Brandon Glassmeyer</h3>
                <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">Co-Founder</div>
                <p className="text-zinc-600">Co-founder of Cincinnati Landworks LLC and experienced commercial concrete contractor serving businesses and industrial facilities across OH, KY & IN.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4 text-center">Our Journey</div>
            <h2 className="text-4xl md:text-5xl mb-8 text-center">How Cincinnati Landworks Was Built</h2>
            <div className="space-y-6 text-zinc-600 text-lg">
              <p>In our earlier years, both of us embarked on entrepreneurial endeavors with landscaping companies. Despite our dedication, we recognized the limitations of our small-scale operations as we matured. Rising equipment costs and increasing overheads posed significant challenges to sustaining our businesses. Consequently, we made the decision to sell our respective companies and transitioned into roles within the construction industry — where we both found a passion for commercial concrete work across the Cincinnati Tri-State area. However, the desire for greater autonomy and the pursuit of loftier ambitions continued to drive us.</p>
              <p>After reconnecting, we found ourselves dissatisfied with the limited growth opportunities within our current positions. At the age of 25, we realized that the time had come to seize control of our futures before the responsibilities of starting families diverted our focus. This pivotal moment served as the catalyst for us to embark on a new entrepreneurial journey — founding Cincinnati Landworks LLC as a commercial concrete contractor focused exclusively on commercial and industrial projects across Ohio, Kentucky, and Indiana.</p>
              <p>Today, Cincinnati Landworks is a trusted commercial concrete subcontractor and direct contractor serving warehouses, manufacturing facilities, retail centers, municipalities, and general contractors throughout the Cincinnati Tri-State area. We bring the same entrepreneurial drive and work ethic that started our careers to every commercial concrete project we take on.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">Our Focus</div>
              <h2 className="text-4xl md:text-5xl mb-6">100% Commercial & Industrial Concrete</h2>
              <p className="text-xl text-zinc-400">We made a deliberate choice to focus exclusively on commercial and industrial concrete. No residential — just expert craftsmanship for businesses, GCs, and industrial facilities across Cincinnati OH, KY & IN.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Commercial concrete contractor Cincinnati OH",
                "Industrial concrete floors & flatwork",
                "Serving Hamilton, Butler, Warren & Clermont Counties",
                "Licensed & fully insured",
                "Commercial concrete subcontractor for GCs",
                "Serving Northern KY & SE Indiana",
                "Concrete maintenance contracts available",
                "Commercial pavement & concrete replacement"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8510A] flex-shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8510A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Contact Cincinnati Landworks for a free estimate on your commercial or industrial concrete project in the Cincinnati Tri-State area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white hover:bg-zinc-100 text-[#E8510A] px-8 py-4 rounded text-lg inline-flex items-center justify-center gap-2 transition-colors">
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:5136732888" className="border-2 border-white hover:bg-white hover:text-[#E8510A] text-white px-8 py-4 rounded text-lg inline-flex items-center justify-center transition-colors">
              Call (513) 673-2888
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
