services = open('src/app/pages/Services.tsx').read()
idx = services.find('<section className="relative py-32')
end = services.find('</section>', idx) + len('</section>')
new_services_hero = '''<section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-10" style={{background: "rgba(0,0,0,0.65)"}}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/services-hero.png')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div style={{color: "#E8510A"}} className="uppercase tracking-wider text-sm mb-4">Our Services</div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{color: "#ffffff"}}>Commercial & Industrial Concrete Services in Cincinnati</h1>
            <p className="text-xl" style={{color: "#e0e0e0"}}>Cincinnati Landworks provides expert commercial and industrial concrete services across Cincinnati, OH, Northern KY, and SE Indiana. From concrete flatwork and loading docks to parking lot replacement and drainage — 100% commercial focus.</p>
          </div>
        </div>
      </section>'''
services = services[:idx] + new_services_hero + services[end:]
open('src/app/pages/Services.tsx', 'w').write(services)
print("Services done")

projects = open('src/app/pages/Projects.tsx').read()
idx = projects.find('<section className="relative py-32')
end = projects.find('</section>', idx) + len('</section>')
new_projects_hero = '''<section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-10" style={{background: "rgba(0,0,0,0.65)"}}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div style={{color: "#E8510A"}} className="uppercase tracking-wider text-sm mb-4">Who We Serve</div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{color: "#ffffff"}}>Markets We Serve — Commercial & Industrial Concrete Cincinnati</h1>
            <p className="text-xl" style={{color: "#e0e0e0"}}>Cincinnati Landworks serves commercial and industrial clients across Ohio, Kentucky, and Indiana. From warehouses and manufacturing plants to retail centers, municipalities, and general contractors — we are the commercial concrete contractor Cincinnati businesses trust.</p>
          </div>
        </div>
      </section>'''
projects = projects[:idx] + new_projects_hero + projects[end:]
open('src/app/pages/Projects.tsx', 'w').write(projects)
print("Projects done")

contact = open('src/app/pages/Contact.tsx').read()
idx = contact.find('<section className="relative py-32')
end = contact.find('</section>', idx) + len('</section>')
new_contact_hero = '''<section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-10" style={{background: "rgba(0,0,0,0.65)"}}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div style={{color: "#E8510A"}} className="uppercase tracking-wider text-sm mb-4">Free Estimate</div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{color: "#ffffff"}}>Contact Cincinnati Landworks</h1>
            <p className="text-xl" style={{color: "#e0e0e0"}}>Request a free estimate for your commercial or industrial concrete project in Cincinnati, OH, Northern KY, or SE Indiana. Call or email us directly.</p>
          </div>
        </div>
      </section>'''
contact = contact[:idx] + new_contact_hero + contact[end:]
open('src/app/pages/Contact.tsx', 'w').write(contact)
print("Contact done")
