import re

for filepath in ['src/app/pages/Services.tsx', 'src/app/pages/Home.tsx']:
    try:
        content = open(filepath).read()
        
        content = re.sub(
            r'https://images\.unsplash\.com/photo-1772305595483[^"]*',
            '/Flooring.png', content
        )
        content = re.sub(
            r'https://images\.unsplash\.com/photo-1625337905408[^"]*',
            '/Concretefoundations.png', content
        )
        content = re.sub(
            r'https://images\.unsplash\.com/photo-1772209415876[^"]*',
            '/Maintenance.jpeg', content
        )
        content = re.sub(
            r'https://images\.unsplash\.com/photo-1673977597037[^"]*',
            '/sidewalk.JPG', content
        )
        content = re.sub(
            r'https://images\.unsplash\.com/photo-1762537766077[^"]*',
            '/kroger.JPG', content
        )
        content = re.sub(
            r'https://images\.unsplash\.com/photo-1772299121503[^"]*',
            '/kroger.JPG', content
        )

        open(filepath, 'w').write(content)
        print(f"Fixed: {filepath}")
    except:
        print(f"Skipped: {filepath}")
