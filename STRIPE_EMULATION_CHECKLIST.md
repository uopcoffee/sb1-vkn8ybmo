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
- [ ] **Benefits‑first headline** in `src/components/home/Hero.tsx`
  - [ ] Dual CTAs: “Start now” and “Contact sales”
  - [ ] Add slim stat bar: e.g., “Board‑ready financials monthly • 70% less admin • Audit‑friendly systems”
  - [ ] Trust bar with logos or key metrics

### Modular product suite
- [ ] **Bento grid** in `src/components/home/ServicesGrid.tsx`
  - [ ] Cards: Recurring Ops, Advisory, Transformation
  - [ ] Icons, short copy, “Learn more” links
  - [ ] Subtle gradients, elevation, motion on hover/scroll

### Proof and customer stories
- [ ] **Case studies row** on `src/pages/Services.tsx` using `src/components/services/CaseStudies.tsx`
- [ ] **Trust section** in `src/components/home/TrustSection.tsx`
  - [ ] Real logos (replace placeholders)
  - [ ] Compact carousel (accessible)

### Pricing (Stripe‑style transparency)
- [ ] Create `src/components/common/PricingTable.tsx`
  - [ ] Packages or “from $/mo + hourly”
  - [ ] Feature bullets and “Talk to sales” path
  - [ ] Surface on Home (`src/pages/Home.tsx`) and Services (`src/pages/Services.tsx`)

### “For developers” analogue
- [ ] Create `src/components/common/CodeBlock.tsx` (syntax‑highlighted UI)
  - [ ] Use inside `src/components/home/HowItWorks.tsx` to show process snippets (e.g., close checklist JSON, sample KPI table)

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
- [ ] `src/components/common/BentoGrid.tsx`
- [ ] `src/components/common/StatBar.tsx`
- [ ] `src/components/common/PricingTable.tsx`
- [ ] `src/components/common/CodeBlock.tsx`

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
- [ ] 2) Hero refresh + StatBar
- [ ] 3) Services bento grid
- [ ] 4) Trust + case studies row
- [ ] 5) Pricing table (optional)
- [ ] 6) Process “CodeBlock” showcase
- [ ] 7) Polish motion, accessibility, performance

### Notes
- Keep edits scoped and incremental; validate keyboard/a11y on each step.
- Use meaningful variable and component names; follow repository code style.