content = open('src/app/pages/Home.tsx').read()
content = content.replace(
    'from-zinc-900/80 via-zinc-900/50 to-transparent',
    'from-zinc-900/90 via-zinc-900/70 to-zinc-900/20'
)
content = content.replace(
    'className="text-xl text-zinc-300 mb-8 max-w-2xl"',
    'className="text-xl text-zinc-300 mb-8 max-w-2xl" style={{textShadow: "1px 1px 4px rgba(0,0,0,0.9)"}}'
)
open('src/app/pages/Home.tsx', 'w').write(content)
print("Done")
