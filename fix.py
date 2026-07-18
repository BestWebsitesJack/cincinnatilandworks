content = open('index.html').read()

# Fix phone in schema
content = content.replace('"telephone": "+15136732888"', '"telephone": "+15136144190"')

# Fix email in schema
content = content.replace('"email": "michelle@cincinnatilandworks.com"', '"email": "michele@cincinnatilandworks.com"')

# Fix old phone in description
content = content.replace('(513) 673-2888', '(513) 614-4190')

# Update keywords with new emerging terms
content = content.replace(
    'content="commercial concrete contractor Cincinnati, industrial concrete contractor Cincinnati, concrete flatwork Cincinnati, commercial concrete Cincinnati OH, commercial parking lot concrete Cincinnati, concrete contractor Northern Kentucky, commercial concrete subcontractor Cincinnati, industrial concrete floor Cincinnati"',
    'content="commercial concrete contractor Cincinnati, commercial concrete contractors Cincinnati Ohio, industrial concrete contractor Cincinnati, concrete contractors Cincinnati, Cincinnati concrete company, concrete flatwork Cincinnati, commercial concrete Cincinnati OH, commercial parking lot concrete Cincinnati, concrete contractor Northern Kentucky, commercial concrete subcontractor Cincinnati, industrial concrete floor Cincinnati, concrete services Cincinnati, commercial concrete company Cincinnati, Cincinnati concrete contractors, loading dock installation Cincinnati, warehouse concrete floor Cincinnati, commercial concrete drainage Cincinnati, concrete replacement Cincinnati"'
)

open('index.html', 'w').write(content)
print("Done")
