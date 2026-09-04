# Homerton ED FY2 X-ray Teaching — GitHub Pages

This folder is ready to publish as a static GitHub Pages website.

## How to publish
1. Sign in to GitHub.
2. Create a new repository, e.g. `homerton-fy2-xray-teaching`.
3. Upload everything in this folder, keeping the `assets` folder intact.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
7. Click **Save**.
8. GitHub will then display the public website address.

## Included
- Homepage
- Topic navigation
- Case library
- Five real radiograph MCQ cases
- Instant feedback
- Teaching points after answering
- Results page
- About / image credits page
- Mobile-responsive design

## Important
The radiographs are loaded from Wikimedia Commons, so the site needs internet access.
This is an educational prototype. Before official departmental use, confirm local governance, branding and clinical content requirements.

## Adding more cases
Edit `assets/app.js`. Cases are stored in the `cases` array at the top of the file.
Copy an existing case object and change the image URL, answer options and teaching content.
