content = open('src/app/pages/Services.tsx').read()
print("Current images in Services.tsx:")
import re
imgs = re.findall(r'image: "[^"]*"', content)
for img in imgs:
    print(img)
