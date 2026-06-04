import os
import re

brand_orange = "#E8510A"

files_to_fix = [
    "src/app/pages/Home.tsx",
    "src/app/pages/Services.tsx",
    "src/app/pages/Projects.tsx",
    "src/app/pages/About.tsx",
    "src/app/pages/Contact.tsx",
    "src/app/components/Footer.tsx",
    "src/app/components/Layout.tsx",
]

for filepath in files_to_fix:
    if os.path.exists(filepath):
        content = open(filepath).read()
        content = content.replace("bg-orange-500", "bg-[#E8510A]")
        content = content.replace("hover:bg-orange-600", "hover:bg-[#C8420A]")
        content = content.replace("text-orange-500", "text-[#E8510A]")
        content = content.replace("hover:text-orange-600", "hover:text-[#C8420A]")
        content = content.replace("border-orange-500", "border-[#E8510A]")
        content = content.replace("text-orange-100", "text-orange-100")
        open(filepath, 'w').write(content)
        print(f"Fixed: {filepath}")

content = open("src/app/components/Header.tsx").read()
content = content.replace(
    '{ path: "/projects", label: "Markets We Serve" }',
    '{ path: "/projects", label: "Industries" }'
)
open("src/app/components/Header.tsx", 'w').write(content)
print("Fixed: Header nav label")

layout = open("src/app/components/Layout.tsx").read()
if "sticky-call-bar" not in layout:
    layout = layout.replace(
        '<Footer />',
        '''<Footer />
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#E8510A] p-3 flex items-center justify-center gap-3">
        <a href="tel:5136732888" className="text-white font-semibold text-base flex items-center gap-2" id="sticky-call-bar">
          📞 Call Now — (513) 673-2888
        </a>
      </div>'''
    )
    open("src/app/components/Layout.tsx", 'w').write(layout)
    print("Fixed: Layout sticky mobile bar")

print("All done!")
