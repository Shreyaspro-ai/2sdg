# AquaCity 💧🏙️
### A water-smart city planning prototype for UN Sustainable Development Goals 6 & 11

AquaCity is an interactive, browser-based city management prototype exploring how water infrastructure, sanitation, urban planning, and emergency preparedness can work together to support more sustainable communities.

It brings water and city systems into one visual interface so users can explore districts, inspect infrastructure, review sample indicators, and navigate planning and crisis-response workflows.

> **Project status:** Front-end prototype. The interface and navigation are implemented, but the displayed metrics are static reference/demo values. It is not connected to live sensors, a database, or a working simulation backend.

---

## 🌍 Why AquaCity?

Cities depend on reliable water supply, safe sanitation, resilient infrastructure, and thoughtful planning. AquaCity presents these connected challenges through a simulated city dashboard.

### UN Sustainable Development Goal alignment

- **[SDG 6 — Clean Water and Sanitation](https://sdgs.un.org/goals/goal6):** explores water availability, distribution, leakage, sanitation, treatment, and reuse.
- **[SDG 11 — Sustainable Cities and Communities](https://sdgs.un.org/goals/goal11):** explores district planning, infrastructure resilience, emergency preparedness, and city-wide progress.

These are the project's intended areas of alignment; the prototype is an educational planning interface, not evidence of measured real-world impact.

## ✨ What you can explore

The website contains **11 views**:

| View | What it covers |
| --- | --- |
| City Command | City overview, sample indicators, priorities, and progress |
| City Map | District exploration and map-layer controls |
| Water Supply | Reservoir, distribution, pipeline, and allocation interface |
| Sanitation | Sanitation and treatment information |
| City Planning | District planning tools |
| Projects | Infrastructure project interface |
| Crisis Center | Emergency and crisis-response interface |
| Missions | Guided city challenges |
| Planning Simulator | Planning controls and simulation interface |
| Learning Lab | Sustainability learning content |
| City Progress | Summary of simulated city progress |

Some controls are interface demonstrations or navigation shortcuts. A visual control should not be interpreted as a live operational system unless a real backend is added.

## 🚀 Run it locally

**Requirements:** A modern web browser. No package installation or build step is required for the current static prototype.

### Option 1 — Open the page

1. Download or clone this repository.
2. Open `dist/index.html` in a modern browser.

### Option 2 — Serve it locally (recommended)

Serving the `dist` directory over HTTP is more reliable for browser asset loading.

```bash
git clone https://github.com/Shreyaspro-ai/2sdg.git
cd 2sdg
python -m http.server 8000 --directory dist
```

Then open **http://localhost:8000** in your browser. If Python is installed as `python3` on your system, use `python3 -m http.server 8000 --directory dist`.

To stop the local server, press `Ctrl+C` in the terminal.

## 🗂️ Repository layout

```text
2sdg/
├── dist/
│   ├── index.html             # Website entry point
│   ├── app.js                 # Page rendering and interaction handling
│   ├── styles.css             # Main styles
│   ├── assets/                # Local artwork and image assets
│   └── ...                    # Supporting styles and scripts
├── AquaCity-website-precision-revision.zip
├── WEBSITE-README.md          # Website implementation notes
├── PRECISION-REVISION.md      # Visual revision and validation notes
├── VISUAL-AUDIT.md            # Detailed visual audit
└── README.md
```

The website is currently organised as a static front end under `dist/`; a separate application source tree, dependency manifest, and automated build pipeline are not included in this repository snapshot.

## 🧪 Current functionality and limitations

- Navigation between the 11 views uses local hash links.
- District panels, modal states, charts, tables, and controls are rendered as interface elements rather than one full-page screenshot.
- Artwork is loaded from local assets.
- Displayed figures are static reference values, not live measurements.
- Planning, repair, crisis, and allocation controls do **not** perform real-world actions or calculate verified outcomes.
- Backend-oriented controls dispatch an `aquacity:action` custom event for future integration. They do not themselves provide a backend.
- No user accounts, database persistence, live sensor feed, or server-side API is included.

For the detailed list of implemented actions and known constraints, see [WEBSITE-README.md](WEBSITE-README.md).

## 🧭 Project notes

- [Precision revision notes](PRECISION-REVISION.md)
- [Visual audit](VISUAL-AUDIT.md)
- [Website implementation notes](WEBSITE-README.md)

## 🔭 Possible next steps

1. Connect interface actions to a documented backend API.
2. Replace demonstration figures with clearly sourced, verifiable data.
3. Add input validation and meaningful feedback for planning controls.
4. Test keyboard navigation, mobile layouts, and accessibility.
5. Add automated checks for navigation and core interactions.
6. Document data sources, assumptions, and limitations for each sustainability indicator.

## 📄 License and attribution

No license file is currently included in this repository. Unless a license is added, reuse and redistribution of this project's code and assets are not automatically granted. Verify the permissions for any third-party assets before redistributing them.

---

**AquaCity — explore the connection between clean water and sustainable cities.**
