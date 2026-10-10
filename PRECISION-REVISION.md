# AquaCity precision revision

Static appearance only. Eleven fresh browser captures at 1536 × 1024 were compared against the original screenshots. RGB tolerance means every channel is within 10 of 255; it is not a perceptual accuracy percentage.

| Page | Earlier pixels within tolerance | Updated pixels within tolerance | Updated mean RGB error |
|---|---:|---:|---:|
| command | 63.52% | 66.51% | 13.66 |
| map | 51.13% | 51.81% | 12.21 |
| water | 58.08% | 57.84% | 14.75 |
| sanitation | 61.67% | 61.68% | 15.00 |
| planning | 64.87% | 65.61% | 12.27 |
| projects | 55.35% | 56.72% | 19.51 |
| crisis | 61.81% | 62.84% | 20.49 |
| missions | 70.17% | 71.46% | 12.82 |
| simulator | 65.38% | 65.46% | 17.85 |
| learning | 65.00% | 64.87% | 14.78 |
| progress | 61.13% | 61.33% | 16.95 |

## Implemented corrections
Project button bounds and description line breaks; district label wrapping and panel section positions; Water title and duplicate subtitle region; Sanitation KPI widths, tracks, reuse controls and chart markers; Planning heading, metric columns, selected-area layout, information symbol and tool icons; Crisis warning/stat styling; Mission icon size; Learning button typography; Progress title and return-control positions. Isolated reference icon assets replace several generic outline glyphs. Scenery strips around badges preserve separate graphic components.

## Remaining discrepancies
This revision is not certified 99.99% pixel equivalence. Header/overview scenery seams, baked annotations in image assets, exact font rendering, compare-handle image fragments, some chart curves and small component details still differ. These are visible reconstruction limitations, not backend issues. The source keeps native HTML text, tables and controls and does not use a full screenshot as a backdrop.

## Validation
All eleven template title/asset/route checks pass; browser console contains no errors in the capture pass. The four motion files are byte-for-byte unchanged.
