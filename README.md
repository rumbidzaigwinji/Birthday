# Birthday Site

A small static birthday website that can be deployed with GitHub Pages.

## Run locally

Open `index.html` in your browser.

## Add or update memories

This site now reads the photos and videos that are already in `media/`.

If you replace, rename, or add more files later, the HTML may need a quick
update so the page points at the new filenames. After changing media, commit
and push again so GitHub Pages includes it:

```powershell
git add .
git commit -m "Add birthday video"
git push
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Add your remote:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

3. Commit and push:

```powershell
git add .
git commit -m "Initial birthday site"
git push -u origin main
```

4. On GitHub, open `Settings` > `Pages`.
5. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Save, then wait for GitHub Pages to publish the site.

Your site URL will usually be:

`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
