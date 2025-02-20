import os
import sys

def create_project_structure():
    # Create client/public directory if it doesn't exist
    os.makedirs('client/public', exist_ok=True)

    # Create index.html in public folder
    index_html = '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>'''

    # Create 404.html in public folder
    not_found_html = '''<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    const path = window.location.pathname;
    const repoName = 'demandelectric';
    const cleanPath = path.replace(`/${repoName}`, '') || '/';
    localStorage.setItem('redirectPath', cleanPath);
    window.location.href = `/demandelectric/`;
  </script>
</head>
<body>
  Redirecting...
</body>
</html>'''

    # Write the files
    with open('client/public/index.html', 'w') as f:
        f.write(index_html)

    with open('client/public/404.html', 'w') as f:
        f.write(not_found_html)

    print("Created:")
    print("- client/public/index.html")
    print("- client/public/404.html")

if __name__ == "__main__":
    create_project_structure()