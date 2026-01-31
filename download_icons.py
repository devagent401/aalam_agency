
import os
import urllib.request
import urllib.error

# Tech Map: Display Name -> { devicon: "devicon_name", simpleicon: "simpleicon_slug", file: "final_filename_base" }
tech_map = [
    # Backend
    {"name": "Node.js", "devicon": "nodejs", "simpleicon": "nodedotjs", "file": "nodejs"},
    {"name": "Python", "devicon": "python", "simpleicon": "python", "file": "python"},
    {"name": "Go", "devicon": "go", "simpleicon": "go", "file": "go"},
    {"name": "PostgreSQL", "devicon": "postgresql", "simpleicon": "postgresql", "file": "postgresql"},
    {"name": "Redis", "devicon": "redis", "simpleicon": "redis", "file": "redis"},
    
    # Databases
    {"name": "MongoDB", "devicon": "mongodb", "simpleicon": "mongodb", "file": "mongodb"},
    {"name": "Pinecone", "devicon": "pinecone", "simpleicon": "pinecone", "file": "pinecone"},
    {"name": "Supabase", "devicon": "supabase", "simpleicon": "supabase", "file": "supabase"},
    {"name": "Firebase", "devicon": "firebase", "simpleicon": "firebase", "file": "firebase"},
    
    # QA
    {"name": "Jest", "devicon": "jest", "simpleicon": "jest", "file": "jest"},
    {"name": "Cypress", "devicon": "cypressio", "simpleicon": "cypress", "file": "cypress"},
    {"name": "Playwright", "devicon": "playwright", "simpleicon": "playwright", "file": "playwright"},
    
    # Design
    {"name": "Figma", "devicon": "figma", "simpleicon": "figma", "file": "figma"},
    {"name": "Adobe XD", "devicon": "xd", "simpleicon": "adobexd", "file": "adobexd"},
    {"name": "Canva", "devicon": "canva", "simpleicon": "canva", "file": "canva"},
    
    # Monitoring
    {"name": "Sentry", "devicon": "sentry", "simpleicon": "sentry", "file": "sentry"},
    {"name": "Datadog", "devicon": "datadog", "simpleicon": "datadog", "file": "datadog"},
    {"name": "New Relic", "devicon": "newrelic", "simpleicon": "newrelic", "file": "newrelic"},
    
    # Deployment
    {"name": "Vercel", "devicon": "vercel", "simpleicon": "vercel", "file": "vercel"},
    {"name": "Docker", "devicon": "docker", "simpleicon": "docker", "file": "docker"},
    {"name": "Kubernetes", "devicon": "kubernetes", "simpleicon": "kubernetes", "file": "kubernetes"},
    
    # Cloud
    {"name": "AWS", "devicon": "amazonwebservices", "simpleicon": "amazonaws", "file": "aws"},
    {"name": "GCP", "devicon": "googlecloud", "simpleicon": "googlecloud", "file": "gcp"},
    {"name": "Azure", "devicon": "azure", "simpleicon": "azure", "file": "azure"},
]

target_dir = r"d:\Dev\parvej\aalam_agency\public\files\technology"
if not os.path.exists(target_dir):
    os.makedirs(target_dir)

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
    except urllib.error.HTTPError as e:
        print(f"FAILED: {e.code} {url}")
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
         f"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{d_key}/{d_key}-plain.svg",
         f"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{d_key}/{d_key}-original-wordmark.svg"
    ]
    
    for url in d_urls:
        if download(url, os.path.join(target_dir, f"{file_base}.svg")):
            success = True
            break
            
    # 2. Try SimpleIcons if Devicon failed
    if not success:
        s_key = tech["simpleicon"]
        url = f"https://cdn.simpleicons.org/{s_key}"
        if download(url, os.path.join(target_dir, f"{file_base}.svg")):
            success = True

    # 3. Fallback to UI Avatars (PNG)
    if not success:
        url = f"https://ui-avatars.com/api/?name={name.replace(' ', '+')}&background=05CA3C&color=fff&size=128"
        download(url, os.path.join(target_dir, f"{file_base}.png")) # Different extension!

