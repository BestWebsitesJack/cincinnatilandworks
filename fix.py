content = open('src/app/pages/Services.tsx').read()
old_hero = '''      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
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
      </section>'''

new_hero = '''      <section className="relative py-32 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/20 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/services-hero.png')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white bg-zinc-900/50 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Commercial & Industrial Concrete Services in Cincinnati
            </h1>
            <p className="text-xl text-zinc-300">
              Cincinnati Landworks provides expert commercial and industrial concrete services across Cincinnati, OH, Northern KY, and SE Indiana. From concrete flatwork and loading docks to parking lot replacement and drainage — 100% commercial focus.
            </p>
          </div>
        </div>
      </section>'''

content = content.replace(old_hero, new_hero)
open('src/app/pages/Services.tsx', 'w').write(content)
print("Done")
