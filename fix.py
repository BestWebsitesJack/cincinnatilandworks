content = open('src/app/pages/Home.tsx').read()
content = content.replace('src="/Commercial_Crane.png"', 'src="/kroger.JPG"')
content = content.replace(
    'alt="Cincinnati Landworks commercial concrete pump truck pour Cincinnati OH"',
    'alt="Cincinnati Landworks commercial concrete parking lot and sidewalk Kroger Marketplace Cincinnati OH"'
)
open('src/app/pages/Home.tsx', 'w').write(content)
print("Done")
