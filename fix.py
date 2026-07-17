content = open('src/app/pages/Contact.tsx').read()

old_import = 'import { Phone, Mail, MapPin, Clock } from "lucide-react";'
new_import = 'import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";\nimport { useState } from "react";'

content = content.replace(old_import, new_import)

old_func = 'export function Contact() {\n  return ('
new_func = '''export function Contact() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", projectType: "", message: ""
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
          subject: "New Quote Request — Cincinnati Landworks",
          from_name: "Cincinnati Landworks Website",
          ...formData
        })
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", company: "", email: "", phone: "", projectType: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return ('''

content = content.replace(old_func, new_func)

old_contact_info = '''          <div className="max-w-3xl mx-auto space-y-6">'''
new_contact_info = '''          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">'''

content = content.replace(old_contact_info, new_contact_info)

form_html = '''
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl mb-6" style={{color: "#1A1A1A"}}>Request a Free Estimate</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{color: "#2D7D46"}} />
                  <h3 className="text-2xl mb-2">Thank You!</h3>
                  <p className="text-zinc-600">We received your request and will be in touch within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2" style={{focusRingColor: "#E8510A"}} placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2" placeholder="Your Company" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2" placeholder="(513) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Type *</label>
                    <select name="projectType" required value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2">
                      <option value="">Select a project type</option>
                      <option value="Industrial Warehouse Flooring">Industrial Warehouse Flooring</option>
                      <option value="Commercial Concrete Footings & Foundations">Commercial Concrete Footings & Foundations</option>
                      <option value="Commercial Parking Lot & Pavement">Commercial Parking Lot & Pavement</option>
                      <option value="Loading Dock Installation & Repair">Loading Dock Installation & Repair</option>
                      <option value="Commercial Flatwork & Sidewalks">Commercial Flatwork & Sidewalks</option>
                      <option value="Concrete Crack Repair & Replacement">Concrete Crack Repair & Replacement</option>
                      <option value="Commercial Drainage Systems">Commercial Drainage Systems</option>
                      <option value="Curb and Gutter">Curb and Gutter</option>
                      <option value="Concrete Maintenance Contract">Concrete Maintenance Contract</option>
                      <option value="Other Commercial Concrete">Other Commercial Concrete</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Details *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 resize-none" placeholder="Describe your project — location, size, timeline, and any specific requirements..."></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full text-white py-4 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition-colors" style={{background: loading ? "#999" : "#E8510A"}}>
                    <Send className="w-5 h-5" />
                    {loading ? "Sending..." : "Request Free Estimate"}
                  </button>
                  <p className="text-sm text-zinc-500 text-center">* Required fields. We respond within 24 business hours.</p>
                </form>
              )}
            </div>
          </div>'''

old_close = '''          </div>
        </div>
      </section>

      <section className="py-20">'''

content = content.replace(old_close, form_html + '''
        </div>
      </section>

      <section className="py-20">''', 1)

open('src/app/pages/Contact.tsx', 'w').write(content)
print("Done")
