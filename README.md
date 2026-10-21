This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
| `NEXT_PUBLIC_WORDPRESS_API_URL` | GraphQL endpoint of the WordPress backend. Update the URL if your local WordPress runs on a different path or port. |

Notes:

- The local WordPress site (e.g. via WAMP) must be running, or the app will not be able to fetch data.
- Restart the dev server after creating or editing `.env.local`. Next.js reads env files only at startup.
- Never commit `.env.local`. Ask the team for production or staging values.

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying, add `NEXT_PUBLIC_WORDPRESS_API_URL` under **Project → Settings → Environment Variables** and point it to your hosted WordPress GraphQL URL (not `localhost`).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.