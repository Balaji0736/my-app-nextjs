# Portfolio – Next.js + Headless WordPress

A [Next.js](https://nextjs.org) portfolio site that fetches its content from a headless WordPress backend using [WPGraphQL](https://www.wpgraphql.com/).

| Part | Where it runs |
| --- | --- |
| Frontend (this repo) | Local for development, [Vercel](https://vercel.com) in production |
| Backend (WordPress + WPGraphQL) | Local (e.g. WAMP) for development, a hosted WordPress site in production |

## Prerequisites

- Node.js (current LTS) and npm
- A running WordPress site with the **WPGraphQL** plugin installed and activated
- Pretty permalinks enabled in WordPress (**Settings → Permalinks**, anything except "Plain"), so the `/graphql` endpoint works

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

The `.env.local` file is git-ignored, so it is **not** included when you clone the repo. Create it manually in the project root (same level as `package.json`):

```bash
# macOS / Linux / Git Bash
touch .env.local

# Windows CMD
type nul > .env.local
```

Add the following content:

```dotenv
NEXT_PUBLIC_WORDPRESS_API_URL=http://localhost/wordpress-7.0/graphql
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_WORDPRESS_API_URL` | GraphQL endpoint of the WordPress backend. Change it if your WordPress runs on a different path or port. |

Notes:

- The local WordPress site (e.g. via WAMP) must be running, or the app cannot fetch data.
- Restart the dev server after creating or editing `.env.local`. Next.js reads env files only at startup.
- Variables starting with `NEXT_PUBLIC_` are visible in the browser. Only put public values in them, never passwords or private tokens.
- Never commit `.env.local`.

### 3. Allow WordPress images

`next/image` only loads images from hosts listed in `next.config.ts`. Open it and check that `images.remotePatterns` includes your WordPress host:

- Local development: `localhost` with the path your local WordPress uses (for example `/wordpress-7.0/wp-content/uploads/**`)
- Production: your hosted WordPress domain over `https` with the path `/wp-content/uploads/**`

If you change the WordPress domain, update this list too.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `app/page.tsx`. The page updates automatically as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

### 5. Test a production build

Before deploying, make sure the production build works:

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo.
3. Under **Project → Settings → Environment Variables**, add `NEXT_PUBLIC_WORDPRESS_API_URL` for the Production environment and point it to your hosted WordPress GraphQL URL (not `localhost`), for example:

   ```dotenv
   NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
   ```

4. Make sure `next.config.ts` is committed and includes your production WordPress host (see step 3 above).
5. Deploy. Every push to `main` redeploys automatically.

Environment variable changes apply only to new deployments, so redeploy after changing them.

## Troubleshooting

| Problem | Likely cause |
| --- | --- |
| Build fails or no content shows on Vercel | `NEXT_PUBLIC_WORDPRESS_API_URL` is missing or still points to `localhost`, or the WordPress site is down |
| `/graphql` returns 404 | WPGraphQL is not active, or permalinks are set to "Plain" |
| Images do not load | The WordPress host is missing from `images.remotePatterns` in `next.config.ts`, or the image URLs in the database still point to the old local address |
| Changes in WordPress do not appear on the site | The page is cached or built at deploy time. Redeploy or use revalidation |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [WPGraphQL Documentation](https://www.wpgraphql.com/docs/introduction)
- [Deploying Next.js](https://nextjs.org/docs/app/building-your-application/deploying)