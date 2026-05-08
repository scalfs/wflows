# WFlows Website UI Kit

Interactive marketing-site recreation built from the WFlows brand system.

## Run

Open `index.html` directly. All assets are local; no build step.

## Components

| File | Notes |
|---|---|
| `Nav.jsx` | Sticky nav with scroll-shadow. Pill primary CTA. |
| `Hero.jsx` | Two-column hero — headline + 3-cell bento visual + ghost shapes. |
| `Stats.jsx` | Stat-pill row on a dark "room." |
| `Bento.jsx` | 6-column asymmetric feature grid with brand/dark/white variants. |
| `Testimonial.jsx` | Customer quote + product screenshot card on cream "room." |
| `CTA.jsx` | Closing block on a brand-blue "room." |
| `Footer.jsx` | Dark footer with brand + 3 link columns. |
| `Modal.jsx` | "Build your flow" 3-step capture flow — opens from any primary CTA. |

## Design notes

- Sections alternate "rooms": cool → dark → cool → cream → blue → dark.
- Every CTA triggers the same modal — demonstrates the click-thru flow.
- Cards on different-color sections use **no shadow** (per system rules); cards on same-color sections use `--wf-shadow-rest`.
- Icons use the node/connector motif (2px stroke, rounded). Subbed for a real WFlows icon set when shipped.

## Caveats

- Logos are the placeholder SVGs from `assets/`. Swap when real artwork lands.
- Mini chart and screenshot card are abstracted geometric stand-ins, not real product UI.
- No mobile breakpoints in this kit yet — designed for ~1200px+ viewports.
