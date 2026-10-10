# AquaCity front end

Open `dist/index.html` directly, or serve the `dist` folder with any static web server. No installation or build step is required.

The site contains 11 views based on the supplied images: City Command, City Map, Water Supply, Sanitation, City Planning, Projects, Crisis Center, Missions, Planning Simulator, Learning Lab and City Progress. The references show pages 2–12; no Welcome design was supplied. Duplicate reference images are represented as modal states, not extra pages. Welcome is retained as a visible non-interactive label because no Welcome page was supplied; redundant pagination arrows are omitted.

Navigation uses local hash links. Cards, labels, tables, chart graphics, forms and modal content are separate HTML/SVG elements. Scenic artwork and thumbnails are extracted image assets. The page does not use a complete screenshot as a backdrop or place invisible links over a screenshot.

## Backend integration

All displayed figures are static reference values. The site does not simulate, repair pipelines, spend funds or save a plan. Range inputs only update their displayed input value.

Backend controls dispatch a custom event on `document`:

```js
document.addEventListener('aquacity:action', ({ detail }) => {
  // detail.page, detail.action and detail.values (when supplied)
  // Connect your API here.
});
```

Actions include `run-simulation`, `run-crisis`, `activate-response`, `apply-allocation`, `apply-reuse`, `select-scale`, `select-planning-tool`, `change-layer` and `select-crisis`. Backend hooks intentionally produce no calculated results.

The shown confirmation buttons return to existing views. Start Project opens Missions; Confirm Repair opens Projects; Confirm Plan opens City Command. Project status tabs with no supplied separate content open Missions. Drought and Contamination emit hooks for future backend content; the supplied Flood design is preserved.

## Reference fidelity

Typography, layout, colours, content and component positions are reconstructed rather than flattened screenshots. Exact pixel equivalence is not claimed: platform fonts vary, and uncovered scenery cannot be recovered exactly from images with overlapping panels. Photograph regions use source coordinates rather than repeated/scaled panorama strips. See VISUAL-AUDIT.md for precise measurements and remaining differences. Some cropped artwork contains original map annotations; those are a remaining asset limitation. The 1536 × 1024 reference canvas scales proportionally with the browser width.

No AI usage messages are logged by this website or this build.
