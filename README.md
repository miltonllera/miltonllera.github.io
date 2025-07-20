# Academic Website - Milton Llera Montero, PhD

Personal academic website designed with [Astro](https://astro.build) and hosted on [GitHub Pages](https://pages.github.com/).

## 🌐 Site Structure

- **Landing Page (`/`)**:
  - Summary of research interests.
  - Three distinct lines of research:
    1. *Self-Organization, Morphogenesis & Artificial Life*
    2. *Combinatorial Generalization & Cognitive Vision*
    3. *Adaptive Neural Architectures & Bio-Inspired AI*
  - Profile image / placeholder with links to Google Scholar, GitHub, LinkedIn, ORCID, YouTube, and email.
  - Quick action buttons to view Publications, Workshops, and download CV.
- **Publications & Talks (`/publications`)**:
  - Peer-reviewed Journal Articles.
  - Conference Proceedings (ALife, GECCO, NeurIPS, ICLR).
  - Preprints & Working Papers.
  - Invited Talks & Panel Discussions.
  - Contributed Posters & Presentations.
- **Workshops & Special Sessions (`/workshops`)**:
  - Workshops and special sessions organized (ALICE 2027, ALife 2026, CCN 2026 GAC, ALICE 2026, SONI ALife 2025, GECCO 2025).
- **CV (PDF Download)**:
  - Downloadable from top navigation or landing page via `/cv.pdf`.
  - Stored statically in `public/cv.pdf` for manual updates whenever desired.
- **Blog (`/blog`)**:
  - Fully scaffolded; hidden from header navigation by default (`showBlog: false` in `src/data/cv.ts`).

## 🛠️ Local Development

### 1. Prerequisites
- Node.js (v18+)
- npm

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Build for Production
```bash
npm run build
```

## 🚀 GitHub Pages Deployment

The repository includes an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`):
- Whenever you push to the `main` branch, the site automatically builds and deploys to `https://miltonllera.github.io/`.
