for filepath in [
    'src/app/pages/Services.tsx',
    'src/app/pages/Projects.tsx',
    'src/app/pages/Contact.tsx',
]:
    content = open(filepath).read()
    content = content.replace(
        'from-zinc-900/90 via-zinc-900/70 to-zinc-900/20',
        'from-zinc-900/75 via-zinc-900/50 to-zinc-900/10'
    )
    open(filepath, 'w').write(content)
    print(f"Fixed: {filepath}")
