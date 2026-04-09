# jamespalfrey.com

Personal portfolio site for James Palfrey, CTO.

Built with **React**, **TypeScript**, **Vite**, and **Framer Motion**.

## Stack

| Layer      | Choice                  |
|------------|-------------------------|
| Framework  | React 19 + TypeScript   |
| Bundler    | Vite                    |
| Animations | Framer Motion           |
| Icons      | Lucide React            |
| Fonts      | Inter (Google Fonts)    |
| Styling    | Vanilla CSS (design tokens via custom properties) |

## Structure

```
src/
├── components/
│   ├── Nav.tsx          # Fixed nav, scroll-aware glass effect
│   ├── Hero.tsx         # Full-viewport hero with animated orbs
│   ├── Achievements.tsx # Tangible impact stats with count-up animation
│   ├── Work.tsx         # Selected project cards
│   ├── About.tsx        # Bio + skills
│   └── Contact.tsx      # Contact CTA + footer
├── App.tsx
├── main.tsx
└── index.css            # All styles (design tokens, layout, components)
```

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
