content = open('src/app/pages/Home.tsx').read()
content = content.replace(
    'className="max-w-3xl text-white bg-zinc-900/50 p-8 rounded-lg backdrop-blur-sm"',
    'className="max-w-lg text-white bg-zinc-900/50 p-6 rounded-lg backdrop-blur-sm"'
)
open('src/app/pages/Home.tsx', 'w').write(content)
print("Done")
