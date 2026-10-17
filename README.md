# Pranav Sahu — Portfolio

A 3D portfolio website for Pranav Sahu, a B.Pharm student at RGS College of Pharmacy, Lucknow (AKTU).
It combines a 3D star background and a blackhole hero with a clean, professional layout.

## Sections

- Hero
- About me (name, college, career objective, languages)
- Skills
- Education
- Certifications
- Activities and participation (college seminars, awareness programs and more)
- Interests and strengths

The career objective, activities and social icons are optional: each one appears only when its content is filled in `constants/index.ts`.

## Tech stack

Next.js (App Router), React, TypeScript, Tailwind CSS, Three.js (`@react-three/fiber`, `@react-three/drei`), Framer Motion and React Icons.

## Getting started

This project uses pnpm (see `pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

Other commands: `pnpm build`, `pnpm start`, `pnpm lint`.

## Editing the content

All text content lives in `constants/index.ts`:

| What | Where |
| --- | --- |
| Name, title, college | `PROFILE` |
| Career objective | `CAREER_OBJECTIVE` |
| Skills | `SKILLS` |
| Education | `EDUCATION` |
| Certifications (and optional certificate links) | `CERTIFICATIONS` |
| Activities and participation | `ACTIVITIES` |
| Interests, strengths, languages | `INTERESTS`, `STRENGTHS`, `LANGUAGES` |
| Social links | `SOCIALS` |

Site title, description and keywords are in `config/index.ts`.

## Credits and license

Based on the open-source [space-portfolio](https://github.com/sanidhyy/space-portfolio) template by Sanidhya Kumar Verma, released under the MIT License. See `LICENSE`.
