# Assets and Brand Elements

This project is image-driven and uses a small set of imported assets to support the page layout.

## Image assets

- Images are imported from `src/imports/Responsive` and referenced directly in `src/App.tsx`.
- Key image roles:
  - `imgBg12` — full-page background image.
  - `imgHero` — hero section photography.
  - `imgAboutMain` / `imgAboutSecond` — about section image collage.
  - Service images for each treatment card.
  - `imgFooterBg` — CTA footer background image.
  - `imgLogo2` — brand logo in the contact section.

## Fonts

- `Roboto Condensed` is loaded from Google Fonts in `src/index.css`.
- The project does not use a local font file.
- The app sets the font family globally on `html, body, #root`.

## Figma Make integration

- `.figma/make/site.json` carries metadata such as the page title and description.
- Vite plugins in `vite.config.ts` use these values to inject document metadata and preview behavior.
- The app is structured as a responsive Figma Make web preview rather than a separate design library.

## Asset conventions

- Use `object-cover` for photo assets to preserve cropping and fill containers.
- Use `rounded-[12px]` on image cards for consistency.
- Prefer inline SVGs for crisp iconography, styled with current theme fills.
- Keep decorative accents subtle and anchored to the existing brand palette.
