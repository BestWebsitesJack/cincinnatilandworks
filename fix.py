content = open('src/app/pages/Contact.tsx').read()
content = content.replace('kyle@cincinnatilandworks.com/div>', 'kyle@cincinnatilandworks.com</div>')
open('src/app/pages/Contact.tsx', 'w').write(content)
print("Done")
