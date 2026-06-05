for filepath, bg_image in [
    ('src/app/pages/Services.tsx', "url('/services-hero.png')"),
    ('src/app/pages/Projects.tsx', "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')"),
    ('src/app/pages/Contact.tsx', "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')"),
]:
    content = open(filepath).read()
    old = 'section className="bg-zinc-900 text-white py-20">'
    new = f'''section className="relative py-32 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-zinc-900/20 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{{{backgroundImage: "{bg_image}"}}}}></div>'''
    if old in content:
        content = content.replace(old, new, 1)
        open(filepath, 'w').write(content)
        print(f"Fixed: {filepath}")
    else:
        print(f"Already updated: {filepath}")
