# My Portfolio

A personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. This project showcases portfolio sections, case studies, experience, projects, and contact details in a modern, responsive layout.

## Features

- Clean portfolio landing page with personal summary and technology stack
- Dedicated pages for About, Blog, Case Studies, Experience, Projects, and Contact
- Dynamic case study routing under `app/case-study/[id]/page.tsx`
- Theme-ready architecture via `next-themes`
- Custom UI components built with `shadcn/ui`, Radix UI primitives, and Tailwind
- Modern React 19 support with the Next.js App Router

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `next-themes`
- `shadcn/ui`
- Radix UI
- `lucide-react`
- `clsx` and `tailwind-merge`

## Pages

- `/` - Home landing page
- `/about` - About page
- `/blog` - Blog overview
- `/case-study/[id]` - Case study detail pages
- `/experience` - Experience and work history
- `/projects` - Project showcase
- `/contact` - Contact information

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in the browser.

## Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Run the production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI and layout components
- `data/` - JSON content for case studies, experience, projects, and contacts
- `lib/` - Utility functions and shared types
- `public/` - Static assets

## Notes

This repository is configured as a private portfolio project and uses the App Router architecture with server components by default.
