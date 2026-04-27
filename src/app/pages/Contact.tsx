import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-zinc-400">
              Request a free consultation and quote for your commercial concrete project. Our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a 
                    href="tel:513-555-0100"
                    className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className="bg-orange-500 text-white p-3 rounded-lg group-hover:bg-orange-600 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-600 mb-1">Call Us</div>
                      <div className="text-lg">(513) 555-0100</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@cincinnaticoncrete.com"
                    className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className="bg-orange-500 text-white p-3 rounded-lg group-hover:bg-orange-600 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-600 mb-1">Email Us</div>
                      <div className="text-lg break-all">info@cincinnaticoncrete.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div className="bg-orange-500 text-white p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-600 mb-1">Service Area</div>
                      <div className="text-lg">Cincinnati Tri-State Area</div>
                      <div className="text-sm text-zinc-600 mt-1">OH, KY, IN</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div className="bg-orange-500 text-white p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-600 mb-1">Business Hours</div>
                      <div className="text-lg">Mon-Fri: 7AM-6PM</div>
                      <div className="text-sm text-zinc-600">Sat: 8AM-4PM</div>
                      <div className="text-sm text-zinc-600">Sun: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 text-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">24/7 Emergency Service</h3>
                <p className="text-orange-100 mb-4">
                  Need urgent concrete repair? We offer 24/7 emergency service for commercial clients.
                </p>
                <a 
                  href="tel:513-555-0199"
                  className="bg-white text-orange-500 hover:bg-orange-50 px-6 py-3 rounded inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency Line
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl mb-6">Request a Quote</h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl mb-2">Thank You!</h3>
                    <p className="text-zinc-600">
                      We've received your request and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="(513) 555-0100"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select a project type</option>
                        <option value="warehouse">Warehouse Flooring</option>
                        <option value="foundation">Foundation Work</option>
                        <option value="parking">Parking Lot/Garage</option>
                        <option value="repair">Concrete Repair</option>
                        <option value="sidewalk">Sidewalks/Pavement</option>
                        <option value="drainage">Drainage System</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        placeholder="Please provide details about your project including size, timeline, and any specific requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      Send Request
                    </button>

                    <p className="text-sm text-zinc-600 text-center">
                      * Required fields. We'll respond within 24 business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
              Service Area
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Cincinnati Tri-State Coverage
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We proudly serve commercial clients throughout Ohio, Kentucky, and Indiana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">Ohio</h3>
              <ul className="space-y-2 text-zinc-600">
                <li>Cincinnati</li>
                <li>Mason</li>
                <li>West Chester</li>
                <li>Blue Ash</li>
                <li>Sharonville</li>
                <li>Norwood</li>
              </ul>
            </div>

            <div className="bg-orange-500 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">Kentucky</h3>
              <ul className="space-y-2 text-orange-100">
                <li>Covington</li>
                <li>Newport</li>
                <li>Florence</li>
                <li>Fort Thomas</li>
                <li>Alexandria</li>
                <li>Highland Heights</li>
              </ul>
            </div>

            <div className="bg-zinc-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">Indiana</h3>
              <ul className="space-y-2 text-zinc-600">
                <li>Lawrenceburg</li>
                <li>Aurora</li>
                <li>Greendale</li>
                <li>Dillsboro</li>
                <li>Versailles</li>
                <li>Milan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-orange-500 uppercase tracking-wider text-sm mb-2">
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does commercial concrete take to cure?",
                  answer: "Commercial concrete typically reaches initial set in 24-48 hours, but full cure time is 28 days. We can provide fast-track options with special additives for projects requiring quicker timelines."
                },
                {
                  question: "Do you offer emergency concrete repair services?",
                  answer: "Yes, we offer 24/7 emergency service for commercial clients. Call our emergency line at (513) 555-0199 for urgent repairs to loading docks, warehouse floors, or safety hazards."
                },
                {
                  question: "What's the cost of commercial concrete per square foot?",
                  answer: "Commercial concrete costs vary based on PSI requirements, thickness, site preparation, and finish. Typical range is $8-15 per square foot. Contact us for a detailed quote based on your specific needs."
                },
                {
                  question: "Do you work with general contractors and architects?",
                  answer: "Absolutely. We regularly collaborate with GCs, architects, and project managers on commercial projects. We provide detailed specifications and work within your project timeline."
                }
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
