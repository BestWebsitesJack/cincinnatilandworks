content = open('src/app/pages/Contact.tsx').read()

# Fix heading
content = content.replace(
    '<h2 className="text-3xl mb-6" style={{color: "#1A1A1A"}}>Request a Free Estimate</h2>',
    '<h2 className="text-3xl mb-6" style={{color: "#1A1A1A"}}>Get In Touch</h2>'
)

# Fix button text and loading state
content = content.replace(
    '{loading ? "Sending..." : "Request Free Estimate"}',
    '{loading ? "Submitting..." : "Send Message"}'
)

# Fix success state - make it more visible and permanent
content = content.replace(
    '''                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{color: "#2D7D46"}} />
                  <h3 className="text-2xl mb-2">Thank You!</h3>
                  <p className="text-zinc-600">We received your request and will be in touch within 24 business hours.</p>
                </div>''',
    '''                <div className="text-center py-16 px-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: "#F0FFF4"}}>
                    <CheckCircle2 className="w-10 h-10" style={{color: "#2D7D46"}} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3" style={{color: "#1A1A1A"}}>Message Sent!</h3>
                  <p className="text-lg text-zinc-600 mb-2">Thank you for reaching out to Cincinnati Landworks.</p>
                  <p className="text-zinc-500">A member of our team will contact you within 24 business hours to discuss your project.</p>
                </div>'''
)

open('src/app/pages/Contact.tsx', 'w').write(content)
print("Done")
