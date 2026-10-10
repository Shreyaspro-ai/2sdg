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

AquaCity is currently delivered as a **static front end** in the `dist/` directory.

- **HTML** provides the page structure.
- **CSS** provides layout, styling, and responsive scaling.
- **JavaScript** handles view navigation and front-end interactions.
- **SVG and HTML elements** are used for interface components such as charts, panels, and controls.
- **Local assets** provide artwork and imagery.

The current repository snapshot does not include a separate application source tree, dependency manifest, automated build pipeline, database, or server-side API. No package installation or compilation step is required to view the existing prototype.

## 🚀 Run locally

### Requirements

- A modern web browser.
- Python 3, or another static HTTP server, for the recommended serving option.

### Option 1: Open the HTML file

1. Clone or download this repository.
2. Open `dist/index.html` in your browser.

Some browsers restrict certain asset-loading behaviour when a page is opened directly from the filesystem. If anything fails to load, use the local-server option below.

### Option 2: Start a local HTTP server

Clone the repository and move into its directory:

```bash
git clone https://github.com/Shreyaspro-ai/2sdg.git
cd 2sdg
```

Start a server that serves the `dist/` folder:

```bash
python -m http.server 8000 --directory dist
```

If your system uses the `python3` command, run:

```bash
python3 -m http.server 8000 --directory dist
```

Open [http://localhost:8000](http://localhost:8000) in your browser. Stop the server with `Ctrl+C` in the terminal.

## 🗂️ Repository structure

```text
2sdg/
├── dist/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── assets/
│   ├── vendor/
│   └── supporting JavaScript and CSS files
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

The simplest way to explore or modify the current prototype is to edit the relevant files in `dist/` and reload the site in your browser.

When making changes:

1. Keep the distinction between demonstration UI and real functionality clear.
2. Avoid presenting sample values as live or independently verified data.
3. Check navigation and the affected view after each change.
4. Test at more than one browser width.
5. Prefer accessible labels, keyboard-operable controls, and clear feedback for interactive elements.
6. Document new actions and any backend assumptions.

Because the repository snapshot does not include a defined build or test command, do not assume that a package-manager build or automated test suite is available.

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
