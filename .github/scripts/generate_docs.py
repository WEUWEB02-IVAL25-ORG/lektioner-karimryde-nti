import os
import subprocess
import json
from google import genai
import datetime

# Konfigurera Gemini
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Inget GEMINI_API_KEY hittades. Avbryter.")
    exit(1)

MODEL = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")
client = genai.Client(api_key=GEMINI_API_KEY)

def get_git_info():
    # Hämta commit-meddelande och diff för senaste commiten
    commit_msg = subprocess.check_output(['git', 'log', '-1', '--pretty=%B']).decode('utf-8')
    diff = subprocess.check_output(['git', 'diff', 'HEAD~1', 'HEAD']).decode('utf-8', errors='ignore')
    files_changed = subprocess.check_output(['git', 'diff', '--name-only', 'HEAD~1', 'HEAD']).decode('utf-8').splitlines()
    
    # Identifiera vilka mappar som ändrats (ignorera rot-filer och .github-mappen)
    folders = set()
    for f in files_changed:
        if '/' in f and not f.startswith('.github'):
            folders.add(os.path.dirname(f))
            
    return commit_msg, diff, list(folders)

def read_file(path):
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    return ""

def write_file(path, content):
    os.makedirs(os.path.dirname(path) if os.path.dirname(path) else '.', exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    commit_msg, diff, folders = get_git_info()
    
    if not folders:
        print("Inga lektionsmappar ändrades. Behöver inte generera dagböcker.")
        # Vi kan ändå vilja uppdatera history.md om rotfiler ändrats, men oftast är de kopplade.
        if not diff:
            return

    history_content = read_file('history.md')
    today = datetime.datetime.now().strftime("%Y-%m-%d")

    prompt = f"""
    Du är en pedagogisk assistent för en gymnasielärare i webbutveckling/programmering.
    Din uppgift är att skriva dokumentation baserat på lärarens senaste kod-commit. Svara ENDAST med ett giltigt JSON-objekt, ingen annan text runtom.

    Här är dagens datum: {today}
    Här är commit-meddelandet: {commit_msg}
    Här är kod-ändringarna (git diff):
    {diff}

    Här är nuvarande innehåll i history.md:
    {history_content}

    Dina uppgifter för JSON-objektet som ska returneras:
    1. "dagbok_updates": En array av objekt med "folder" och "content". För varje mapp som ändrats, skriv en dagbok.md. 
       - Ton: Neutral och pedagogisk ("I den här lektionen gick vi igenom...").
       - Innehåll: Lista nya begrepp snyggt med förklaringar (t.ex. HTML-taggar, arrayer).
       - Exempel: Skapa korta, relevanta kodsnuttar som demonstrerar det nya (absolut INGA massiva blockdumpar av koden).
    
    2. "history_update": Det nya, fullständiga innehållet för history.md (i roten).
       - Språk: Riktat direkt till gymnasieeleverna. Korrekt svenska.
       - Struktur: Överst en snabb summeringstabell (Datum | Kapitel | Lektionsnamn). Undre sektionen ska heta "Detaljerad tidslinje" och vara en löpande, peppande berättelse månad för månad från "den allra första HTML-sidan" fram till nu. Integrera den nya lektionen smidigt i den befintliga historiken.

    JSON-format att returnera:
    {{
      "dagbok_updates": [
        {{ "folder": "mappnamn", "content": "# Dagbok\\n..." }}
      ],
      "history_update": "# Vår kodresa\\n..."
    }}
    """

    print("Skickar data till Gemini...")
    response = client.models.generate_content(model=MODEL, contents=prompt)
    
    # Rensa bort eventuella markdown-kodblock från svaret (```json ... ```)
    response_text = response.text.strip()
    if response_text.startswith("```json"):
        response_text = response_text[7:]
    if response_text.startswith("```"):
        response_text = response_text[3:]
    if response_text.endswith("```"):
        response_text = response_text[:-3]

    try:
        data = json.loads(response_text)
        
        # Spara dagböcker
        for update in data.get("dagbok_updates", []):
            folder = update.get("folder")
            if folder in folders: # Verifiera att det är en ändrad mapp
                dagbok_path = os.path.join(folder, 'dagbok.md')
                write_file(dagbok_path, update.get("content"))
                print(f"Uppdaterade {dagbok_path}")

        # Spara history.md
        if data.get("history_update"):
            write_file("history.md", data.get("history_update"))
            print("Uppdaterade history.md")

    except json.JSONDecodeError as e:
        print("Kunde inte tolka svaret från Gemini som JSON.")
        print("Svar var:", response.text)

if __name__ == "__main__":
    main()
