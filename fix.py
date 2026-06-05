content = open('src/app/pages/Projects.tsx').read()
old_hero = '''      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-orange-500 uppercase tracking-wider text-sm mb-4">
              Who We Serve
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Markets We Serve — Commercial & Industrial Concrete Cincinnati
            </h1>
            <p className="text-xl text-zinc-400">
              Cincinnati Landworks serves commercial and industrial clients across Ohio, Kentucky, and Indiana. From warehouses and manufacturing plants to retail centers, municipalities, and general contractors — we are the commercial concrete contractor Cincinnati businesses trust.
            </p>
          </div>
        </div>
      </section>'''

new_hero = '''      <section className="relative py-32 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/20 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/Commercial_Crane.png')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white bg-zinc-900/50 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-[#E8510A] uppercase tracking-wider text-sm mb-4">
              Who We Serve
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Markets We Serve — Commercial & Industrial Concrete Cincinnati
            </h1>
            <p className="text-xl text-zinc-300">
              Cincinnati Landworks serves commercial and industrial clients across Ohio, Kentucky, and Indiana. From warehouses and manufacturing plants to retail centers, municipalities, and general contractors — we are the commercial concrete contractor Cincinnati businesses trust.
            </p>
          </div>
        </div>
      </section>'''

content = content.replace(old_hero, new_hero)
open('src/app/pages/Projects.tsx', 'w').write(content)
print("Done")
