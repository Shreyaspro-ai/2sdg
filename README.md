# AquaCity

**Better water. Better cities.**

AquaCity is a hackathon prototype that connects **SDG 6 — Clean Water and Sanitation** with **SDG 11 — Sustainable Cities and Communities**. Users explore a visual city, make water and planning decisions, and review feedback and saved progress.

[Visit the website](https://aquacity-shreyas-interface.sprymelon1.chatgpt.site/) · [Open the Lovable project](https://lovable.dev/projects/58777912-bf92-4805-832b-ee9fa41f77ee)

The website link is the deployment supplied in the project conversation; it may differ from the latest repository revision.

## What the project includes

- A welcome page with account and sign-in flows.
- City Command and City Map for exploring city indicators and districts.
- Water Supply and Sanitation controls for allocation, leak repairs and reuse.
- City Planning, Projects, Crisis Center and Planning Simulator views.
- Missions, Learning Lab quizzes and City Progress.
- Supabase integration for authentication, personal city state, action evaluation, activity records and quiz attempts.

## How it works

1. A user signs in through the welcome page.
2. The dashboard loads the user’s city state from Supabase.
3. The user chooses an action or changes a planning input.
4. A PostgreSQL function evaluates supported actions and saves their results.
5. The interface displays feedback and applies saved changes. Lessons record quiz attempts and contribute to progress.

The current city values and action rules are illustrative model behaviour. They are not verified measurements or forecasts for a real city. Citizen issue reporting, community verification and measured real-world impact require further development.

## Technology

| Layer | Tools |
| --- | --- |
| AquaCity interface | HTML, CSS, JavaScript and local image assets |
| Application shell | React, TypeScript, TanStack Start and Router |
| Build and styling | Vite, Tailwind CSS |
| Backend | Supabase Auth, PostgreSQL and Supabase JavaScript client |
| Database tooling | SQL migrations and Drizzle |
| Development | Lovable, GitHub, ESLint, Prettier and Vitest |

## Main files

| Location | Purpose |
| --- | --- |
| `public/aquacity/welcome.html`, `welcome.css`, `welcome.js` | Welcome interface and account controls |
| `public/aquacity/index.html`, `app.js`, `styles.css` | Main dashboard interface, interactions and base styling |
| `public/aquacity/backend.js` | Supabase authentication, saved state and action integration |
| `public/aquacity/reference*` and `precision.css` | Reference layouts, values, charts and visual refinements |
| `src/routes/` | Application routing; the root redirects to the welcome page |
| `src/integrations/supabase/` | Supabase client and database types |
| `supabase/` and `drizzle/` | Database configuration, schema and migrations |
| `public/aquacity/PHOTO-CREDITS.md` | Photograph attribution |
| `ai_log.md` | Curated record of AI assistance and user requests |

## Run locally

Use a Node.js version compatible with Vite 8 and npm.

```sh
git clone https://github.com/Shreyaspro-ai/2sdg.git
cd 2sdg
npm install
npm run dev
```

Open the local address printed by Vite. The root route opens `/aquacity/welcome.html`.

```sh
npm run build
npm run preview
npm run lint
npm run test
```

These commands are available in the project; their presence does not establish that every check passes.

## Supabase setup

Configure the Supabase project URL and publishable key for the integration client (`VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`). The standalone dashboard also defines its connection in `public/aquacity/backend.js`; keep both configurations aligned when switching projects.

Apply the relevant database migrations in dependency order to your Supabase project. Configure enabled authentication providers and redirect URLs for local development and deployment. Review row-level security and test sign-in, action saving and refresh persistence before a public demonstration. Never put service-role keys or database passwords in browser code.

## Why SDG 6 and SDG 11 connect

Water access, wastewater treatment and efficient water use are central to [SDG 6](https://sdgs.un.org/goals/goal6). Urban planning, resilience and inclusive communities are central to [SDG 11](https://sdgs.un.org/goals/goal11). AquaCity explores their connection: decisions about drainage, housing, green space and infrastructure affect both water security and the quality of urban life.

## Development and ownership

This repository is connected to Lovable. Pushed changes can sync to the Lovable editor; preserve published Git history.

The project uses AI/Lovable assistance for implementation and refinement. Team members should describe their actual contributions and distinguish their own work from assisted work. `ai_log.md` records selected interactions, with its exclusions stated explicitly; Git history provides the change record.
