## Emulating Stripe for Ballast: Build Checklist

Reference patterns and IA from https://stripe.com/.

### Navigation and IA
- [x] **Mega‑menu header** in `src/components/layout/Header.tsx`
  - [x] Groups: Products (3 service lanes), Solutions (by stage/industry), Resources (case studies, blog), Pricing, Contact
  - [x] Hoverable panels (open on hover/focus, close on blur/ESC)
  - [x] Keyboard navigation (Tab/Shift+Tab, Arrow keys, ESC)
  - [x] Persistent CTAs (“Start now”, “Contact sales”)
  - [x] ARIA roles and focus management

### Hero pattern
- [x] **Benefits‑first headline** in `src/components/home/Hero.tsx`
  - [x] Dual CTAs: “Start now” and “Contact sales”
  - [x] Add slim stat bar: e.g., “Board‑ready financials monthly • 70% less admin • Audit‑friendly systems”
  - [ ] Trust bar with logos or key metrics

### Modular product suite
- [x] **Bento grid** in `src/components/home/ServicesGrid.tsx`
  - [x] Cards: Recurring Ops, Advisory, Transformation
  - [x] Icons, short copy, “Learn more” links
  - [x] Subtle gradients, elevation, motion on hover/scroll

### Proof and customer stories
- [x] **Case studies row** on `src/pages/Services.tsx` using `src/components/services/CaseStudies.tsx`
- [ ] **Trust section** in `src/components/home/TrustSection.tsx`
  - [ ] Real logos (replace placeholders)
  - [ ] Compact carousel (accessible)

### Pricing (Stripe‑style transparency)
- [x] Create `src/components/common/PricingTable.tsx`
  - [x] Packages or “from $/mo + hourly”
  - [x] Feature bullets and “Talk to sales” path
  - [x] Surface on Home (`src/pages/Home.tsx`) and Services (`src/pages/Services.tsx`)

### “For developers” analogue
- [x] Create `src/components/common/CodeBlock.tsx` (syntax‑highlighted UI)
  - [x] Use inside `src/components/home/HowItWorks.tsx` to show process snippets (e.g., close checklist JSON, sample KPI table)

### Motion and visuals
- [ ] Adopt Stripe‑like gradients and depth across sections
- [ ] Respect `prefers-reduced-motion`
- [ ] Add staggered entrances and gentle hover lifts (Framer Motion)

### Design system adjustments
- [x] Colors in `tailwind.config.js`
  - [x] Primary: deep navy (e.g., #0A2540)
  - [x] Accent: electric blue (e.g., #635BFF)
  - [x] Soft gray backgrounds; preserve brand feel
- [x] Typography in `index.html`
  - [x] Use Inter (system‑ui fallback)
  - [x] Increase heading tracking and weight

### Components to add (common)
- [x] `src/components/common/MegaMenu.tsx`
- [x] `src/components/common/BentoGrid.tsx`
- [x] `src/components/common/StatBar.tsx`
- [x] `src/components/common/PricingTable.tsx`
- [x] `src/components/common/CodeBlock.tsx`

### Content cadence and CTAs
- [ ] Mirror Stripe cadence: hero CTA → mid‑page CTA → bottom CTA
- [ ] Reuse `src/components/services/ServicesCTA.tsx` on Home and Services pages

### Performance and accessibility
- [x] Keyboard and screen‑reader support for mega‑menu (roles, labels, focus)
- [ ] Maintain 4.5:1 contrast ratios
- [ ] Lazy‑load heavy sections/media
- [ ] Keep LCP < 2.5s (check Lighthouse)

### Suggested implementation order
- [x] 1) Header mega‑menu + color/typography tokens
- [x] 2) Hero refresh + StatBar
- [x] 3) Services bento grid
- [ ] 4) Trust + case studies row
- [x] 5) Pricing table (optional)
- [x] 6) Process “CodeBlock” showcase
- [ ] 7) Polish motion, accessibility, performance

### Notes
- Keep edits scoped and incremental; validate keyboard/a11y on each step.
- Use meaningful variable and component names; follow repository code style.