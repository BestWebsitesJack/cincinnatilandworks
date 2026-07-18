content = open('index.html').read()

# Update meta keywords with all new high-value terms
content = content.replace(
    'content="commercial concrete contractor Cincinnati, commercial concrete contractors Cincinnati Ohio, industrial concrete contractor Cincinnati, concrete contractors Cincinnati, Cincinnati concrete company, concrete flatwork Cincinnati, commercial concrete Cincinnati OH, commercial parking lot concrete Cincinnati, concrete contractor Northern Kentucky, commercial concrete subcontractor Cincinnati, industrial concrete floor Cincinnati, concrete services Cincinnati, commercial concrete company Cincinnati, Cincinnati concrete contractors, loading dock installation Cincinnati, warehouse concrete floor Cincinnati, commercial concrete drainage Cincinnati, concrete replacement Cincinnati"',
    'content="commercial concrete contractor Cincinnati, concrete contractor Cincinnati, commercial concrete contractors Cincinnati Ohio, industrial concrete contractor Cincinnati, concrete contractors Cincinnati, Cincinnati concrete company, commercial concrete Cincinnati, cincinnati commercial contractor, concrete flatwork contractor Cincinnati, commercial concrete Northern Kentucky, kentucky commercial concrete, cincinnati industrial contractor, commercial concrete company Cincinnati OH, concrete services Cincinnati, commercial concrete subcontractor Cincinnati, industrial concrete floor Cincinnati, loading dock installation Cincinnati, warehouse concrete floor Cincinnati, commercial concrete drainage Cincinnati, concrete replacement Cincinnati, concrete sidewalks Cincinnati, flatwork contractor Cincinnati, commercial concrete contractors Southern Ohio, concrete companies Cincinnati Ohio"'
)

open('index.html', 'w').write(content)
print("index.html done")

# Update Services page H1 and descriptions to hit new keywords
services = open('src/app/pages/Services.tsx').read()
services = services.replace(
    'Cincinnati Landworks provides expert commercial and industrial concrete services across Cincinnati, OH, Northern KY, and SE Indiana. From concrete flatwork and loading docks to parking lot replacement and drainage — 100% commercial focus.',
    'Cincinnati Landworks is a trusted concrete contractor serving Cincinnati OH, Northern KY, and SE Indiana. From concrete flatwork and loading docks to parking lot replacement, commercial sidewalks, and drainage — 100% commercial and industrial focus. Serving Hamilton County, Boone County, and the greater Cincinnati Tri-State area.'
)
open('src/app/pages/Services.tsx', 'w').write(services)
print("Services.tsx done")

# Update Projects/Industries page to hit KY and industrial terms
projects = open('src/app/pages/Projects.tsx').read()
projects = projects.replace(
    'Cincinnati Landworks serves commercial and industrial clients across Ohio, Kentucky, and Indiana. From warehouses and manufacturing plants to retail centers, municipalities, and general contractors — we are the commercial concrete contractor Cincinnati businesses trust.',
    'Cincinnati Landworks serves commercial and industrial clients across Ohio, Kentucky, and Indiana. From warehouses and manufacturing plants in Cincinnati to retail centers in Northern Kentucky and industrial facilities in Southeast Indiana — we are the commercial concrete contractor and Cincinnati industrial contractor businesses across the Tri-State area trust.'
)
open('src/app/pages/Projects.tsx', 'w').write(projects)
print("Projects.tsx done")

# Update Home page subheading to hit new terms
home = open('src/app/pages/Home.tsx').read()
home = home.replace(
    'Specialized commercial concrete solutions for businesses across Cincinnati, OH, KY & IN',
    'Trusted concrete contractor serving Cincinnati OH, Northern Kentucky, and SE Indiana — commercial and industrial only'
)
open('src/app/pages/Home.tsx', 'w').write(home)
print("Home.tsx done")

print("All done!")
