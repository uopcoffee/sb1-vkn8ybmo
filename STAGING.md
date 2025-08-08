# Staging/Preview Environment Setup

This document explains how to work on the website redesign without affecting the live site.

## Branch Setup

Create a feature branch for the redesign:
```bash
git checkout -b feature/website-redesign
```

## Environment Variables

### Local Development
Create `.env.preview` (not committed to git):
```
VITE_ENV=preview
VITE_CANONICAL_HOST=ballastfinancial.com
```

### Deployment Platform
Set these environment variables in your deployment platform (Vercel/Netlify):
- `VITE_ENV=preview`
- `VITE_CANONICAL_HOST=ballastfinancial.com`

## Scripts

- `npm run dev:preview` - Run development server with preview environment
- `npm run build:preview` - Build for preview deployment

## SEO Safety

The preview environment automatically:
- Sets `noindex, nofollow` meta tags
- Points canonical URLs to `ballastfinancial.com`
- Prevents search engines from indexing preview deployments

## Deployment

### Vercel/Netlify
1. Connect your GitHub repository
2. Enable "Preview Deployments" or "Deploy Previews"
3. Set environment variables for the preview environment
4. Optional: Point a custom domain (e.g., `preview.ballastfinancial.com`) to the preview environment

### Workflow
1. Work on `feature/website-redesign` branch
2. Push changes → automatic preview deployment
3. Test on preview URL
4. When ready, merge to `main` for production deployment

## Testing

Run tests to ensure changes are safe:
```bash
npm test
npm run build:preview
```
