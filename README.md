# Uppstride Homepage

A Vite + React + Tailwind project assembled from the 12 component files.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New Project** → import that repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

**Option B — via Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; it will detect the Vite setup automatically.

## Section order on the page (src/App.jsx)
Navbar → Hero → Problems → Solutions → Framework → Industries →
CaseStudies → WhyUppstride → Insights → FAQ → CTA → Footer

Reorder by editing the JSX in `src/App.jsx`.

## Notes
- Update the placeholder Calendly link (`https://calendly.com/your-link`) in `CTA.jsx` and `Footer.jsx` before deploying.
- Icons come from `lucide-react`, already listed in `package.json`.
