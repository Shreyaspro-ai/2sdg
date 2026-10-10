# AquaCity 💧🏙️

### An interactive water-smart city planning prototype for UN Sustainable Development Goals 6 and 11

AquaCity is a browser-based front-end prototype that brings water infrastructure, sanitation, district planning, and emergency preparedness into one city-management interface. It is designed to help people explore how these systems relate to one another and how sustainability decisions might be presented in a city dashboard.

The project focuses on the **experience of exploring and planning**: navigating city views, inspecting sample indicators, and interacting with controls that represent possible planning workflows.

> **Project status:** Front-end prototype for demonstration and learning. Figures are static reference values, and several controls are interface demonstrations only. AquaCity is not connected to live sensors, a database, or an operational simulation/backend service.

---

## Contents

- [Project goals](#-project-goals)
- [Features and views](#-features-and-views)
- [Technology and architecture](#️-technology-and-architecture)
- [Run locally](#-run-locally)
- [Repository structure](#-repository-structure)
- [How interactions work](#-how-interactions-work)
- [Current limitations](#-current-limitations)
- [Development and contribution](#-development-and-contribution)
- [Roadmap](#-roadmap)
- [Project documentation](#-project-documentation)
- [License and attribution](#-license-and-attribution)

## 🌍 Project goals

Urban water management connects public health, infrastructure, environmental protection, and resilience. AquaCity presents these themes through a single visual interface, with the aim of making city systems easier to explore and discuss.

The project is intended to support learning, prototyping, and discussion. It does **not** claim to measure real-world sustainability performance or produce verified engineering recommendations.

### Alignment with the UN Sustainable Development Goals

- **[SDG 6 — Clean Water and Sanitation](https://sdgs.un.org/goals/goal6):** water availability and distribution, leakage, sanitation, treatment, and reuse.
- **[SDG 11 — Sustainable Cities and Communities](https://sdgs.un.org/goals/goal11):** district planning, infrastructure resilience, emergency preparedness, and city-wide progress.

These are areas of thematic alignment, not a certification or a claim of demonstrated real-world impact.

## ✨ Features and views

The website contains **11 views**. They are different areas of the same prototype, rather than separate deployed applications.

| View | Purpose |
| --- | --- |
| **City Command** | A city-wide overview with sample indicators, priorities, and progress information. |
| **City Map** | A district-oriented view with map-layer controls. |
| **Water Supply** | An interface for exploring reservoirs, distribution, pipelines, and water allocation. |
| **Sanitation** | Information and interface elements related to sanitation and treatment. |
| **City Planning** | Controls and panels representing district-planning workflows. |
| **Projects** | An interface for viewing infrastructure project-related content. |
| **Crisis Center** | A set of emergency and crisis-response interface elements. |
| **Missions** | Guided city challenges and related navigation. |
| **Planning Simulator** | Controls representing planning scenarios and simulation workflows. |
| **Learning Lab** | Sustainability learning content. |
| **City Progress** | A summary view of the prototype's sample city-progress indicators. |

### Interface elements

Depending on the view, the prototype uses navigation links, district panels, cards, charts, tables, forms, range inputs, and modal states. These are built as interface elements so that the page can be explored and extended without treating a single screenshot as the entire application.

Artwork and thumbnails are loaded from local assets.

## 🛠️ Technology and architecture

### Agreed application stack

The intended stack for the application is:

- **React.js** — component-based UI and reusable views.
- **Vite** — development server and production build tooling.
- **Tailwind CSS** — utility-first styling for layout, spacing, responsive behaviour, and common visual patterns.
- **Custom CSS** — project-specific styling and details that are clearer to maintain outside utility classes.
- **JavaScript (and JSX)** — application logic and React components.

React, Vite, Tailwind CSS, and custom CSS are the **planned application stack**. The current committed website in `dist/` is still a static front-end artifact: this repository snapshot does not yet contain a React source tree, `package.json`, Tailwind/Vite configuration, or an automated build pipeline. The documentation distinguishes the intended stack from what is currently present so it does not imply that the migration has already been completed.

Once the React/Vite application is set up, its source code should live separately from generated build output (for example, in `src/`), and Vite's production output can be generated into `dist/`. Generated files should not be treated as the main source of truth for application development.

## 🚀 Run locally

### Current static prototype

For the currently committed version, a modern browser is enough. You can open `dist/index.html` directly, or serve the existing static files with Python:

```bash
git clone https://github.com/Shreyaspro-ai/2sdg.git
cd 2sdg
python -m http.server 8000 --directory dist
```

Then open [http://localhost:8000](http://localhost:8000). If your system uses `python3`, replace `python` with `python3`. Stop the server with `Ctrl+C`.

### Planned React + Vite development setup

The commands below describe the intended workflow **after** the React/Vite app and its configuration files have been added; they will not work in the current repository snapshot yet.

The future development workflow will be:

1. Install a supported Node.js LTS release.
2. Install the project's npm dependencies.
3. Start Vite's development server.
4. Use the production build command to generate the deployable `dist/` output.

Once implemented, the exact commands will be documented from the scripts in `package.json` (typically `npm install`, `npm run dev`, and `npm run build`). Tailwind CSS must be configured for the chosen version of Vite/Tailwind before those commands can be considered ready.

## 🗂️ Repository structure

```text
2sdg/
├── dist/                     # Current static website/build artifact
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── assets/
│   ├── vendor/
│   └── supporting JavaScript and CSS files
├── src/                       # Planned React components and application source
├── package.json               # Planned npm scripts and dependencies
├── vite.config.js             # Planned Vite configuration
├── tailwind.config.js         # Configuration may vary by Tailwind version
├── AquaCity-website-precision-revision.zip
├── WEBSITE-README.md
├── PRECISION-REVISION.md
├── VISUAL-AUDIT.md
└── README.md
```

| Path | Role |
| --- | --- |
| `dist/index.html` | Entry point for the website. |
| `dist/app.js` | Main front-end rendering and interaction logic. |
| `dist/styles.css` | Main visual styling. |
| `dist/assets/` | Local artwork and image assets. |
| `dist/vendor/` | Supporting vendor files. |
| Other files in `dist/` | Additional scripts, styles, and reference data used by the interface. |
| `WEBSITE-README.md` | Additional implementation details and backend integration notes. |
| `PRECISION-REVISION.md` | Notes about visual revision work. |
| `VISUAL-AUDIT.md` | Visual review and known fidelity differences. |
| `AquaCity-website-precision-revision.zip` | Packaged project artefact. |

## 🔌 How interactions work

Navigation between views uses local hash links. Interface controls can update visible UI state or emit a custom event for future backend integration.

The front end can dispatch an `aquacity:action` event on `document`. A future integration can listen for the event and connect it to an API or other service:

```js
document.addEventListener("aquacity:action", ({ detail }) => {
  // Example event payload fields:
  // detail.page
  // detail.action
  // detail.values (when supplied)
  //
  // Add validated backend integration here.
});
```

The event is an integration hook, **not a backend implementation**. It does not make a request, save data, repair infrastructure, or calculate a verified result by itself.

Examples of action names used by the interface include `run-simulation`, `run-crisis`, `activate-response`, `apply-allocation`, `apply-reuse`, `select-scale`, `select-planning-tool`, `change-layer`, and `select-crisis`.

## ⚠️ Current limitations

- **Demo data:** displayed figures are static reference values, not live measurements.
- **No persistent storage:** the current prototype does not include database persistence or user accounts.
- **No live integrations:** there is no live sensor feed or server-side API.
- **No verified simulation:** planning, repair, allocation, and crisis-response controls do not calculate validated outcomes or trigger real-world actions.
- **Limited automated verification:** an automated test suite or build pipeline is not included in this repository snapshot.
- **Visual fidelity:** typography, layouts, colours, and component positions are reconstructed from visual references. Exact pixel-for-pixel equivalence is not guaranteed across browsers and operating systems.
- **Asset constraints:** some source artwork may contain annotations or details that cannot be cleanly recovered from the available reference images.

Treat all displayed metrics and workflow outcomes as illustrative until they are connected to documented data sources and tested logic.

## 🧑‍💻 Development and contribution

For the current static prototype, the files in `dist/` can be inspected and served directly. For ongoing feature development, the intended direction is to move application work into React components and use Vite for development and builds, with Tailwind CSS plus custom CSS for styling. The React/Vite setup is not present in the repository snapshot yet.

When implementing the planned stack:

1. Keep reusable UI and page views in React components under `src/`.
2. Use Vite for the local development server and production build.
3. Configure Tailwind CSS explicitly and keep custom CSS for project-specific styling.
4. Treat `dist/` as generated output once the build pipeline exists; avoid hand-editing generated files as the normal development workflow.
5. Keep demonstration UI clearly distinguished from real functionality.
6. Avoid presenting sample values as live or independently verified data.
7. Check navigation and affected views after changes, including responsive layouts.
8. Prefer accessible labels, keyboard-operable controls, and clear feedback.
9. Document new actions, data sources, and backend assumptions.

Until the application scaffold and scripts are committed, there is no verified npm build or automated test command to run.

## 🔭 Roadmap

Potential next steps for evolving AquaCity include:

- [ ] Define a backend API contract for planning and crisis actions.
- [ ] Connect controls to real, validated application logic.
- [ ] Replace sample metrics with traceable data sources and explain their assumptions.
- [ ] Add input validation, loading states, error handling, and useful confirmation messages.
- [ ] Add automated checks for navigation and key interactions.
- [ ] Review accessibility, keyboard navigation, and mobile layouts.
- [ ] Document how each sustainability indicator is calculated and what it does—and does not—represent.

These are proposed improvements, not claims that the functionality already exists.

## 🧭 Project documentation

- [Website implementation notes](WEBSITE-README.md)
- [Precision revision notes](PRECISION-REVISION.md)
- [Visual audit](VISUAL-AUDIT.md)

## 📄 License and attribution

No license file is currently included in this repository. Unless a license is added, permission to reuse or redistribute the project's code and assets is not automatically granted. Check the terms for any third-party assets before redistributing them.

---

**AquaCity — explore the connection between clean water and sustainable cities.**
