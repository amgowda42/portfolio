# Application Instructions

These instructions apply to the entire repository.

## Application overview

- This repository is a single-page personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS 4.
- `app/page.tsx` composes the page in this order: Navbar, Bio, Experience, Skills, Projects, BeyondCode, and Contact.
- `app/layout.tsx` owns document metadata, Geist fonts, global styles, Vercel Analytics, and Speed Insights.
- `app/globals.css` contains the site-wide visual system and global responsive styling.
- `components/` contains the page sections and navigation. Keep each section focused on its own presentation and interaction.
- `lib/data.ts` contains structured portfolio experience data and its TypeScript types.
- `public/` contains static images and icons served from the site root.
- `.github/` contains repository automation or configuration when present.

## Technology and commands

- Use the existing versions and conventions in `package.json`; do not replace the framework or styling system without a direct requirement.
- Run the local development server with `npm run dev`.
- Run static checks with `npm run lint`.
- Create a production build with `npm run build`; run it when the requested change needs build validation or the user asks for it.
- Use TypeScript and the existing `@/*` path alias for imports from the repository root.
- Use `lucide-react` for icons when a suitable icon exists in the installed dependency.
- Avoid adding dependencies for small features that can use the existing stack.

## Implementation rules

- Inspect the target files and their neighboring components before changing behavior or appearance.
- Keep changes focused on the requested outcome. Preserve existing content, visual identity, and working behavior unless the request calls for changing them.
- Prefer reusable, clearly named React components and data-driven rendering when the same structure repeats.
- Keep content and presentation separate when practical; put shared portfolio records in `lib/data.ts` rather than duplicating them across sections.
- Add explicit TypeScript types for shared or non-obvious data shapes. Avoid `any` and unsafe type assertions.
- Use semantic HTML elements and meaningful heading order. Use links for navigation and actions, and buttons for state-changing interactions.
- Keep client components limited to places that need browser APIs, event-driven state, or client-only libraries. Preserve server components elsewhere.
- Use the existing Tailwind utilities and CSS variables/styles in `app/globals.css`. Do not introduce a second styling framework or duplicate global rules.
- Keep user-facing copy accurate to the portfolio data. Do not invent employers, projects, dates, metrics, contact details, or links.
- Keep secrets and private values out of source control. Public assets belong in `public/` and are referenced by root-relative paths.

## Responsive design and accessibility

- Build mobile behavior as the baseline, then add breakpoint-specific refinements with the Tailwind conventions already in use.
- Prefer flexible grids, flex layouts, wrapping, and fluid sizing over fixed widths that can overflow. Check long text, cards, navigation, and controls at narrow widths.
- Avoid horizontal page scrolling unless the content genuinely requires it.
- Preserve keyboard access, visible focus states, sufficient contrast, readable text, and useful accessible names for controls and icons.
- Use descriptive alternative text for meaningful images; mark purely decorative imagery so assistive technology can ignore it.
- Respect reduced-motion preferences for nonessential animation and avoid adding JavaScript solely to implement responsive layout.
- Do not alter content, data, or unrelated sections while fixing a responsive issue unless the request requires it.

## Change workflow

1. Identify the relevant route, component, data, and styles before editing.
2. Check nearby patterns and reuse them where they fit.
3. Make the smallest coherent change that fully addresses the request.
4. Review the resulting diff and avoid overwriting unrelated or pre-existing user edits.
5. Run checks only when requested or when needed to verify the requested work; report the commands and outcomes accurately.

## Reporting

- Summarize the files and behavior changed in plain language.
- State which checks were run and their results. Do not claim a check passed if it was not run.
- Mention material assumptions or unresolved limitations briefly.
