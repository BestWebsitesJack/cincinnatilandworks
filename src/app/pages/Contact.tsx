import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <div>
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">
              Free Estimate
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Contact Cincinnati Landworks
            </h1>
            <p className="text-xl text-zinc-400">
              Request a free estimate for your commercial or industrial concrete project in Cincinnati, OH, Northern KY, or SE Indiana. Call or email us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <a href="tel:5136732888" className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow group">
              <div className="bg-[#E8510A] text-white p-3 rounded-lg group-hover:bg-[#C8420A] transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-zinc-600 mb-1">Call Us</div>
                <div className="text-2xl">(513) 673-2888</div>
                <div className="text-sm text-zinc-500 mt-1">Mon-Fri: 8AM-6PM</div>
              </div>
            </a>

            <a href="mailto:kyle@cincinnatilandworks.com" className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow group">
              <div className="bg-[#E8510A] text-white p-3 rounded-lg group-hover:bg-[#C8420A] transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-zinc-600 mb-1">Email Us</div>
                <div className="text-2xl">kyle@cincinnatilandworks.com</div>
                <div className="text-sm text-zinc-500 mt-1">We respond within 24 business hours</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
              <div className="bg-[#E8510A] text-white p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-zinc-600 mb-1">Address</div>
                <div className="text-2xl">24 Landy Lane, Unit 5D</div>
                <div className="text-sm text-zinc-500 mt-1">Reading, OH 45215</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
              <div className="bg-[#E8510A] text-white p-3 rounded-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-zinc-600 mb-1">Business Hours</div>
                <div className="text-2xl">Mon-Fri: 8AM-6PM</div>
                <div className="text-sm text-zinc-500 mt-1">Sat-Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-2">Service Area</div>
            <h2 className="text-4xl md:text-5xl mb-4">Cincinnati Tri-State Coverage</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Commercial and industrial concrete contractor serving Ohio, Kentucky, and Indiana</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">Ohio</h3>
              <ul className="space-y-2 text-zinc-600">
                <li>Cincinnati</li><li>Reading</li><li>Mason</li><li>West Chester</li><li>Sharonville</li><li>Hamilton</li><li>Norwood</li><li>Blue Ash</li>
              </ul>
            </div>
            <div className="bg-[#E8510A] text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">Kentucky</h3>
              <ul className="space-y-2 text-orange-100">
                <li>Covington</li><li>Newport</li><li>Florence</li><li>Fort Thomas</li><li>Alexandria</li><li>Highland Heights</li><li>Erlanger</li><li>Boone County</li>
              </ul>
            </div>
            <div className="bg-zinc-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">Indiana</h3>
              <ul className="space-y-2 text-zinc-600">
                <li>Lawrenceburg</li><li>Aurora</li><li>Greendale</li><li>Dillsboro</li><li>Versailles</li><li>Milan</li><li>Dearborn County</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-2">FAQ</div>
              <h2 className="text-4xl md:text-5xl mb-4">Common Questions</h2>
            </div>
            <div className="space-y-6">
              {[
                { question: "How long does commercial concrete take to cure?", answer: "Commercial concrete typically reaches initial set in 24-48 hours, but full cure time is 28 days. We can provide fast-track options with special additives for projects requiring quicker timelines." },
                { question: "Do you work with general contractors as a concrete subcontractor?", answer: "Yes — Cincinnati Landworks is a trusted commercial concrete subcontractor for GCs across Ohio, Kentucky, and Indiana. We bring the crew, equipment, and expertise to keep your project on schedule." },
                { question: "How much does commercial concrete cost in Cincinnati?", answer: "Commercial concrete costs vary based on PSI requirements, thickness, site preparation, and finish. Contact us for a detailed free estimate based on your specific project needs." },
                { question: "Do you offer concrete maintenance contracts?", answer: "Yes — we offer commercial concrete maintenance contracts for businesses that need ongoing inspection, crack repair, and pavement maintenance across the Cincinnati Tri-State area." },
                { question: "What areas do you serve?", answer: "Cincinnati Landworks serves commercial and industrial clients across Hamilton County, Butler County, Warren County, and Clermont County in Ohio — plus Boone, Kenton, and Campbell Counties in Northern Kentucky — and Dearborn County in Southeast Indiana." }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl mb-3">{faq.question}</h3>
                  <p className="text-zinc-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
