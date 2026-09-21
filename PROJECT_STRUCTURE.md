# Golf Website — Recommended Project Structure

Recommended stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Optional: Mapbox/Google Maps
- Optional: 360 panorama viewer
- Optional backend: Node.js/Next.js API + PostgreSQL

```text
golf-course/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── courses/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       ├── holes/
│   │       │   └── page.tsx
│   │       └── tour/
│   │           └── page.tsx
│   │
│   ├── booking/
│   │   └── page.tsx
│   ├── academy/
│   │   └── page.tsx
│   ├── packages/
│   │   └── page.tsx
│   ├── dining/
│   │   └── page.tsx
│   ├── news/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── UtilityBar.tsx
│   │   ├── Header.tsx
│   │   ├── DesktopNav.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Footer.tsx
│   │   └── Newsletter.tsx
│   │
│   ├── hero/
│   │   ├── CourseHero.tsx
│   │   └── HeroMedia.tsx
│   │
│   ├── course/
│   │   ├── CourseStats.tsx
│   │   ├── CourseIntro.tsx
│   │   ├── CourseStory.tsx
│   │   ├── HoleSelector.tsx
│   │   ├── HoleCard.tsx
│   │   ├── CourseMap.tsx
│   │   └── CourseTour.tsx
│   │
│   ├── booking/
│   │   ├── BookingCTA.tsx
│   │   ├── BookingForm.tsx
│   │   ├── DatePicker.tsx
│   │   └── PlayerSelector.tsx
│   │
│   ├── content/
│   │   ├── EditorialSplit.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── ContentGrid.tsx
│   │   └── SectionHeading.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── IconButton.tsx
│       ├── Modal.tsx
│       ├── Container.tsx
│       └── Image.tsx
│
├── data/
│   ├── site.ts
│   ├── navigation.ts
│   ├── courses.ts
│   ├── holes.ts
│   └── content.ts
│
├── lib/
│   ├── utils.ts
│   ├── booking.ts
│   └── cms.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── courses/
│   │   ├── holes/
│   │   ├── facilities/
│   │   └── news/
│   ├── icons/
│   ├── logos/
│   └── video/
│
├── types/
│   ├── course.ts
│   ├── booking.ts
│   └── content.ts
│
├── .env.local
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Component hierarchy

```text
RootLayout
└── SiteShell
    ├── UtilityBar
    ├── Header
    │   ├── Logo
    │   ├── DesktopNav
    │   ├── BookTeeTimeButton
    │   └── MobileNav
    │
    ├── Main
    │   └── CoursePage
    │       ├── CourseHero
    │       ├── CourseStats
    │       ├── CourseIntro
    │       ├── EditorialSplit
    │       ├── CourseMap
    │       ├── HoleSelector
    │       ├── EditorialSplit
    │       ├── CourseTour
    │       ├── RelatedContent
    │       ├── BookingCTA
    │       └── Newsletter
    │
    └── Footer
```

## Data model

```ts
type Course = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  holes: number;
  par: number;
  yardage: number;
  heroImage: string;
  mapImage?: string;
  tourUrl?: string;
  description: string;
};

type Hole = {
  id: number;
  par: number;
  yardage: number;
  title: string;
  description: string;
  image: string;
};
```

## Build order

1. Global fonts, colors and spacing.
2. Utility bar + responsive header.
3. Hero.
4. Course statistics.
5. Editorial split sections.
6. Course map + hole selector.
7. 360° tour section.
8. Booking CTA/form.
9. Related content.
10. Newsletter + footer.
11. Mobile navigation.
12. Animations and accessibility.
13. CMS/database integration.
14. Booking/payment integration.

## Visual fidelity checklist

- Full-bleed hero image.
- Overlay navigation.
- Large editorial headings.
- Alternating image/text sections.
- Generous whitespace.
- High-quality course photography.
- Large CTA buttons.
- Minimal card borders.
- Subtle image/scroll animations.
- Strong mobile menu.
- Long-form editorial page rather than a dashboard-style layout.
