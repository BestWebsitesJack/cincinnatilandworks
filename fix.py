for filepath in [
    'src/app/pages/Services.tsx',
    'src/app/pages/Projects.tsx',
    'src/app/pages/Contact.tsx',
]:
    content = open(filepath).read()
    content = content.replace(
        'className="max-w-3xl bg-zinc-900/60 p-8 rounded-lg backdrop-blur-sm"',
        'className="max-w-3xl bg-zinc-900/60 p-8 rounded-lg backdrop-blur-sm text-white"'
    )
    content = content.replace(
        'className="text-xl text-zinc-400"',
        'className="text-xl text-zinc-300"'
    )
    open(filepath, 'w').write(content)
    print(f"Fixed: {filepath}")
