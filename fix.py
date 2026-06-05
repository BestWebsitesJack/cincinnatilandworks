content = open('src/app/pages/Services.tsx').read()

content = content.replace(
    'https://images.unsplash.com/photo-1772305595483-6b058aff40f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwaW5kdXN0cmlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzE2ODA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    '/Flooring.png'
)

content = content.replace(
    'https://images.unsplash.com/photo-1625337905408-7b6fe970e187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3MzE1MzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    '/concretefoundations.jpg'
)

content = content.replace(
    'https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjb25jcmV0ZSUyMGZsb29yaW5nJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzMxNjgwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    '/Maintenance.jpg'
)

content = content.replace(
    'https://images.unsplash.com/photo-1673977597037-f0373625156e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzczMTY4MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    '/sidewalk.jpg'
)

open('src/app/pages/Services.tsx', 'w').write(content)
print("Done")
