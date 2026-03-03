# Asset Conventions (Programmatic Page Build)

This repo uses section-based and intent-based foldering so dynamic pages can be generated safely.

## Public Asset Structure

```text
public/
  brand/
    logos/
  hero/
    home/
    services/
    use-cases/
    locations/
    brands/
  capabilities/
    icons/
  projects/
    tiles/
  testimonials/
    avatars/
    references/
  final-cta/
    media/
```

## Naming Rules
- Use lowercase kebab-case file names.
- Prefer semantic names over random numbers when possible.
- Keep one source of truth path in data files.

## Path Rules in Data
- Always use absolute public paths in page data, e.g.:
  - `/hero/services/hero-car.png`
  - `/capabilities/icons/system-audit.svg`
- Never hardcode section assets inside multiple components.

## Dynamic Page Contract
A dynamic page should be renderable with data only:
- `hero` (heading, subheading, description, image, CTA)
- `ctaBand` (heading, subheading, CTA)
- `capabilities[]` (title, subtitle, icon/image)
- `services` (heading, points[], CTA)
- `finalCta` (heading, subheading, CTA)

If all required fields are present, page should render with no component edits.

## Add-New-Page Checklist
1. Add page object to `data/seo-pages.json`.
2. Ensure image paths exist under `public/<section>/<intent>/...`.
3. Run `npm run seo:validate`.
4. Visit route and verify rendering.

## Add-New-Asset Checklist
1. Put asset in the correct section folder.
2. Update data path (not component hardcoded paths).
3. Keep path stable to avoid route regressions.
