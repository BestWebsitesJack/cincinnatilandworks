import re

for filepath in [
    'src/app/pages/Services.tsx',
    'src/app/pages/Projects.tsx', 
    'src/app/pages/Contact.tsx',
]:
    content = open(filepath).read()
    content = content.replace(
        '<div className="max-w-3xl">',
        '<div className="max-w-3xl bg-zinc-900/60 p-8 rounded-lg backdrop-blur-sm">',
        1
    )
    open(filepath, 'w').write(content)
    print(f"Fixed: {filepath}")
