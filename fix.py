for filepath in [
    'src/app/pages/Services.tsx',
    'src/app/pages/Projects.tsx',
    'src/app/pages/Contact.tsx',
]:
    content = open(filepath).read()
    content = content.replace(
        'className="max-w-3xl bg-zinc-900/60 p-8 rounded-lg backdrop-blur-sm text-white"',
        'className="max-w-3xl bg-zinc-900/75 p-8 rounded-lg text-white"'
    )
    content = content.replace(
        'className="text-5xl md:text-6xl mb-6"',
        'className="text-5xl md:text-6xl mb-6 text-white font-bold"',
        1
    )
    open(filepath, 'w').write(content)
    print(f"Fixed: {filepath}")
