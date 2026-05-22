content = open('src/app/pages/Home.tsx').read()
content = content.replace('className="absolute inset-0 z-10"', 'className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-zinc-900/50 to-transparent z-10"')
open('src/app/pages/Home.tsx', 'w').write(content)
print("Done")
