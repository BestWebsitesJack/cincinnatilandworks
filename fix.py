content = open('src/app/pages/Home.tsx').read()
content = content.replace(
    'src="/kroger.JPG" alt="Cincinnati Landworks commercial concrete parking lot and sidewalk Kroger Marketplace Cincinnati OH" className="absolute inset-0 w-full h-full object-cover"',
    'src="/kroger.JPG" alt="Cincinnati Landworks commercial concrete parking lot and sidewalk Kroger Marketplace Cincinnati OH" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: "center bottom"}}'
)
open('src/app/pages/Home.tsx', 'w').write(content)
print("Done")
