# Components and Patterns

This project uses a small set of reusable UI patterns rather than a fully abstracted component library.

## CTA buttons

- Primary CTA button style:
  - Background: `#1e726f`
  - Text: `#ffffff`
  - Padding: `px-[40px] py-[10px]`
  - Border radius: `rounded-[1000px]`
  - Hover: darker teal `#175f5d`
  - Active: `scale-95` for a subtle press effect

## Cards and panels

- Content panels use a translucent white fill `rgba(255,255,255,0.24)`.
- Panel corners are `rounded-[16px]`.
- Internal spacing is usually `24px` for padding and `24px` for vertical gaps.
- Decorative cards often stack a white image card with a colored border offset behind it.

## Accordion / expandable list

- Service list items are rendered as full-width button headers.
- Each accordion header includes a title and rotateable chevron icon.
- The content body expands via `max-height` transition and contains an image, price text, and description block.
- Separator: bottom border `border-b border-[#ccc]` between items.

## Carousel

- Testimonials use a horizontal `overflow-x-auto` container with `snap-x snap-mandatory`.
- Each slide has `min-w-full snap-center`.
- A dot indicator row reflects the active slide.
- Touch swipe logic navigates based on horizontal drag distance.

## Iconography

- Icons are custom SVG components coded directly in `src/App.tsx`.
- Default icon size is `27px` for UI icons and `24px` for small footer icon.
- Icons are monochrome and adapt their fill/stroke color based on context.

## Imagery

- Backgrounds and hero images use full-bleed placement with `object-cover`.
- Content images are often inside `rounded-[12px] overflow-hidden` containers.
- Photo cards are layered with decorative frames and subtle borders.

## Contact pattern

- The contact section uses grouped info blocks with an icon, bold label, and body text.
- Working hours, address, and phone are presented in vertically stacked card-style sections.
- Footer stamp uses a dark teal bar with `#ccc` text for legal and copyright messaging.
