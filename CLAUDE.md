# wwddaienkai

WWD 大演会 2026 page/app built with Vite, React, Tailwind CDN support, and motion components.

## Stack

- React 18 + TypeScript + Vite
- Framer Motion
- lucide-react
- Vite build outputs to `static_site/`

## Key commands

- `npm run dev` - Vite dev server
- `npm run build` - `tsc && vite build`
- `npm run preview` - Vite preview

## Structure

- `App.tsx`, `index.tsx` - app entry
- `components/` - Hero, navigation, concept, floor guide, timetable, sponsor, ticket sections
- `components/ui/` - shared UI components
- `static_site/` - generated/static deploy output
- `metadata.json`, `types.ts`, `tailwindcdn.js` - app metadata/types/CDN helper

## Notes

- README is the AI Studio starter text and references a Gemini API key, but the observed package dependencies contain no Gemini SDK.
- `vite.config.ts` sets `base: "./"` and `outDir: "static_site"` for static hosting.
