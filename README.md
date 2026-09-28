# Muhammad Mishbahul Huda — Portfolio

Next.js + Tailwind CSS portfolio website with a dark-tech / industrial engineering visual style.

## Included

- Responsive portfolio homepage
- Dark / light mode toggle
- Hero section with supplied field photo
- Project showcase
- Experience timeline
- Technical skills
- Education and certifications
- Contact section
- Downloadable CV
- Vercel-ready configuration

## Run locally

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build check

```bash
npm run build
```

## Deploy to Vercel

### Option 1 — GitHub

1. Create a new GitHub repository.
2. Upload all files in this folder.
3. Push the repository.
4. Import the repository in Vercel.
5. Vercel will detect Next.js automatically.
6. Deploy.

No environment variables are required for this version.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

## Updating project photos

Add project images to `public/projects/` and replace the placeholder project cards in `app/page.tsx` with `next/image` components.

## Main personal assets

- `public/profile.jpg` — supplied profile/field photo
- `public/Muhammad-Mishbahul-Huda-CV.pdf` — supplied CV
