# GetCitedin Landing Page

Landing page for GetCitedin, built with Next.js, React, Tailwind CSS, Framer Motion, GSAP, and Lucide icons.

## Requirements

- Node.js 20 or newer
- npm

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server on port 3000:

```bash
npm run dev
```

Open the site in your browser:

```text
http://localhost:3000
```

## Available Scripts

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

## Project Structure

```text
src/app
  App Router pages, layout, and global styles

src/components
  Layout, section, provider, and UI components

src/lib
  Site constants and shared utilities

public/images
  Static image and SVG assets
```

## Notes

- The development server is configured in `package.json` to run on port `3000`.
- The main landing page is composed from section components in `src/components/sections`.
- Navbar and footer branding use `LOGO.png` from the project root.
