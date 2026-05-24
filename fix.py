content = open('src/app/components/Footer.tsx').read()
content = content.replace(
    '<p>&copy; {new Date().getFullYear()} Cincinnati Landworks LLC. All rights reserved. | Powered by <a href="https://www.bestwebsites.tech" className="hover:text-orange-500 transition-colors">Best Websites LLC</a></p>',
    '<p>&copy; {new Date().getFullYear()} Cincinnati Landworks LLC. All rights reserved.</p><p className="mt-2">Built by <a href="https://www.bestwebsites.tech" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Best Websites LLC</a></p>'
)
open('src/app/components/Footer.tsx', 'w').write(content)
print("Done")
