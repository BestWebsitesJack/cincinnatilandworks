import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "fb986043-20d3-4ea7-abee-dd5434cc35ba",
          subject: "New Contact - Cincinnati Landworks: " + formData.subject,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject_line: formData.subject,
          message: formData.message
        })
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-10" style={{background: "rgba(0,0,0,0.65)"}}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-wider text-sm mb-4" style={{color: "#E8510A"}}>Free Estimate</div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{color: "#ffffff"}}>Contact Cincinnati Landworks</h1>
            <p className="text-xl" style={{color: "#e0e0e0"}}>Request a free estimate for your commercial or industrial concrete project in Cincinnati, OH, Northern KY, or SE Indiana.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{color: "#1A1A1A"}}>Contact Information</h2>
              <a href="tel:5136144190" className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 rounded-lg text-white" style={{background: "#E8510A"}}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Call Us</div>
                  <div className="text-2xl font-medium">(513) 614-4190</div>
                  <div className="text-sm text-zinc-500 mt-1">Mon-Fri: 8AM-4PM</div>
                </div>
              </a>
              <a href="mailto:michele@cincinnatilandworks.com" className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 rounded-lg text-white" style={{background: "#E8510A"}}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Email Us</div>
                  <div className="text-xl font-medium">michele@cincinnatilandworks.com</div>
                  <div className="text-sm text-zinc-500 mt-1">We respond within 24 business hours</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
                <div className="p-3 rounded-lg text-white" style={{background: "#E8510A"}}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Address</div>
                  <div className="text-xl font-medium">24 Landy Lane, Unit 4A</div>
                  <div className="text-sm text-zinc-500 mt-1">Reading, OH 45215</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
                <div className="p-3 rounded-lg text-white" style={{background: "#E8510A"}}>
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-zinc-600 mb-1">Business Hours</div>
                  <div className="text-xl font-medium">Mon-Fri: 8AM-4PM</div>
                  <div className="text-sm text-zinc-500 mt-1">Sat-Sun: Closed</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6" style={{color: "#1A1A1A"}}>Get In Touch</h2>
              {submitted ? (
                <div className="text-center py-16 px-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: "#F0FFF4"}}>
                    <CheckCircle2 className="w-10 h-10" style={{color: "#2D7D46"}} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-lg text-zinc-600 mb-2">Thank you for reaching out to Cincinnati Landworks.</p>
                  <p className="text-zinc-500">A member of our team will contact you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none" placeholder="(513) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject *</label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none" placeholder="e.g. Parking lot project, warehouse floor estimate..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none resize-none" placeholder="Tell us about your project - location, size, timeline, and any specific requirements..."></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full text-white py-4 rounded-lg text-lg font-medium flex items-center justify-center gap-2" style={{background: loading ? "#999999" : "#E8510A"}}>
                    <Send className="w-5 h-5" />
                    {loading ? "Submitting..." : "Send Message"}
                  </button>
                  <p className="text-sm text-zinc-500 text-center">* Required fields. We respond within 24 business hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="uppercase tracking-wider text-sm mb-2" style={{color: "#E8510A"}}>Service Area</div>
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
            <div className="p-8 rounded-lg text-center text-white" style={{background: "#E8510A"}}>
              <h3 className="text-2xl mb-4">Kentucky</h3>
              <ul className="space-y-2" style={{color: "#fde8d8"}}>
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
              <div className="uppercase tracking-wider text-sm mb-2" style={{color: "#E8510A"}}>FAQ</div>
              <h2 className="text-4xl md:text-5xl mb-4">Common Questions</h2>
            </div>
            <div className="space-y-6">
              {[
                { question: "How long does commercial concrete take to cure?", answer: "Commercial concrete typically reaches initial set in 24-48 hours, but full cure time is 28 days. We can provide fast-track options with special additives for projects requiring quicker timelines." },
                { question: "Do you work with general contractors as a concrete subcontractor?", answer: "Yes - Cincinnati Landworks is a trusted commercial concrete subcontractor for GCs across Ohio, Kentucky, and Indiana. We bring the crew, equipment, and expertise to keep your project on schedule." },
                { question: "How much does commercial concrete cost in Cincinnati?", answer: "Commercial concrete costs vary based on PSI requirements, thickness, site preparation, and finish. Contact us for a detailed free estimate based on your specific project needs." },
                { question: "Do you offer concrete maintenance contracts?", answer: "Yes - we offer commercial concrete maintenance contracts for businesses that need ongoing inspection, crack repair, and pavement maintenance across the Cincinnati Tri-State area." },
                { question: "What areas do you serve?", answer: "Cincinnati Landworks serves commercial and industrial clients across Hamilton County, Butler County, Warren County, and Clermont County in Ohio - plus Boone, Kenton, and Campbell Counties in Northern Kentucky - and Dearborn County in Southeast Indiana." }
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
