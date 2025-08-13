[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15527658&assignment_repo_type=AssignmentRepo)
# Utvecklingsmiljö

## Installera webbeditorn VS Code

* Installera [VS Code](https://code.visualstudio.com)
* Installera [git-scm](https://git-scm.com)

Vi kan även installera via terminalen:

```powershell
winget install Microsoft.VisualStudioCode
winget install git.git
```
### Intro till *VS Code*

*VS Code* är en fantastisk editor som är gratis och som fungerar på alla plattformar:
https://www.youtube.com/watch?v=B-s71n0dHUk&list=PLj6YeMhvp2S5UgiQnBfvD7XgOMKs3O_G6

### Kortare prompt i Powershell

I terminalen i *VS Code* blir prompten väldigt lång.  
Gör följande för att korta ned prompten i Terminalen/Konsolen i *VS Code*.

* *Öppna* **terminalen** och *skriv/kör* dessa rader:

```powershell
test-path $profile
new-item -path $profile -itemtype file -force
code $profile
```

* I **textfönstret** *Skriv in* följande och spara:

```powershell
function prompt {
   $p = Split-Path -leaf -path (Get-Location)
   "$p> "
}
```

* I **terminalen** *skriv/kör*:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

* Starta om *VS Code*

[Hur man får en kort prompt i terminalen](https://superuser.com/questions/446827/configure-windows-powershell-to-display-only-the-current-folder-name-in-the-shel)

## Komma igång med github

Github är en tjänst för att lagra och dela kod. Du kommer att använda github för att lagra dina projekt och för att lämna in labbar och prov.

* Skapa ett konto på [github.com](https://github.com)
  * Döp kontot till: klass-förnamn-efternamn
  * Valfritt lösenord
  * Använd din skolmail

