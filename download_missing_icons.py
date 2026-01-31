
import os
import urllib.request
import urllib.error

tech_map = [
    {"name": "TypeScript", "devicon": "typescript", "simpleicon": "typescript", "file": "typescript"},
    {"name": "Tailwind CSS", "devicon": "tailwindcss", "simpleicon": "tailwindcss", "file": "tailwindcss"},
    {"name": "Framer Motion", "devicon": "framermotion", "simpleicon": "framer", "file": "framer"},
]

target_dir = r"d:\Dev\parvej\aalam_agency\public\files\technology"

def download(url, filepath):
    try:
        print(f"Trying {url}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as r:
            content = r.read()
            if len(content) > 0:
                with open(filepath, 'wb') as f:
                    f.write(content)
                print(f"SUCCESS: Saved to {filepath}")
                return True
    except Exception as e:
        print(f"ERROR: {e}")
    return False

for tech in tech_map:
    name = tech["name"]
    file_base = tech["file"]
    
    # 1. Try Devicon
    d_key = tech["devicon"]
    success = False
    d_urls = [
         f"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{d_key}/{d_key}-original.svg",
         f"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{d_key}/{d_key}-plain.svg"
    ]
    for url in d_urls:
        if download(url, os.path.join(target_dir, f"{file_base}.svg")):
            success = True
            break
            
    # 2. Try SimpleIcons
    if not success:
        s_key = tech["simpleicon"]
        url = f"https://cdn.simpleicons.org/{s_key}"
        if download(url, os.path.join(target_dir, f"{file_base}.svg")):
            success = True

    # 3. Fallback
    if not success:
        url = f"https://ui-avatars.com/api/?name={name.replace(' ', '+')}&background=05CA3C&color=fff&size=128"
        download(url, os.path.join(target_dir, f"{file_base}.png"))

