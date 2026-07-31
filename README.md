# Jack Zhou — Personal Portfolio

A modern, responsive portfolio presenting Jack Zhou's experience across banking, fintech, government, and operational analytics.

## The rebuild

This release replaces the original Create React App timeline with a complete portfolio experience built around a clearer professional narrative:

- Editorial, responsive design with coordinated light and dark themes
- Structured experience, education, technical toolkit, and contact sections
- Outcome-led career content updated from the latest résumé
- Accessible navigation, semantic content, theme controls, and reduced-motion support
- Bespoke social-sharing artwork and updated page metadata
- React 19 and Vite 8 for a smaller, faster modern build
- Automated GitHub Pages deployment from `main`

## Local development

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages whenever `main` changes. The Vite base path is configured for `/timelineResume/`.
