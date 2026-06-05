content = open('index.html').read()
favicon_tags = '''    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" href="/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">'''
content = content.replace(
    '<link rel="canonical" href="https://www.cincinnatilandworks.com/" />',
    '<link rel="canonical" href="https://www.cincinnatilandworks.com/" />\n' + favicon_tags
)
open('index.html', 'w').write(content)
print("Done")
