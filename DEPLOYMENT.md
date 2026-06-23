# Deployment

This project is deployed as a Vite React app from the `app/` folder.

## Vercel Settings

- Framework preset: Vite
- Build command: `cd app && npm ci && npm run build`
- Output directory: `app/dist`
- Install command: `cd app && npm ci`

The root `vercel.json` includes a rewrite so client-side routes such as
`/dashboard`, `/price-index`, and `/marketplace/2` work on refresh.

