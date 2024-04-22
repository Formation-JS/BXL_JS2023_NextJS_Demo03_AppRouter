# Next JS - App Router

## Installation
```
pnpm create next-app@latest

> Option: 
What is your project named? ...                                  demo03-app
Would you like to use TypeScript? ...                            (No) /  Yes
Would you like to use ESLint? ...                                 No  / (Yes)
Would you like to use Tailwind CSS? ...                           No  / (Yes)
Would you like to use `src/` directory? ...                       No  / (Yes)
Would you like to use App Router? (recommended) ...               No  / (Yes)
Would you like to customize the default import alias (@/*)? ...  (No) /  Yes
```

## Routing
Contrairement au "Page Router", le "App Router" va rendre accessible uniquement les fichiers qui se nomme "page" dans le dossier "app"

### Convention de nommage des fichiers
- page : Page Web (accessible)
- layout: Composant de layoute de la page
- loading: Page de chargement (via l'utilisation de l'async/await)
- not-found: Page 404
- error: Page d'erreur général

Une hierarchie de composant est créer en fonction des fichiers créés dans le dossier de la route
![file convention](docs/file-conventions-component-hierarchy.avif)

### Penser en NextJS App
Il existe 2 types de composent avec le "App Router" : 
 - Composant serveur (Rendu depuis le serveur)
 - Composant client (Interaction de l'utilisateur possible)
 
 ![thinking in ppr](docs/thinking-in-ppr.avif)