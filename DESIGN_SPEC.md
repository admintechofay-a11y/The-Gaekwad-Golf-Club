# Golf Website — St Andrews-Inspired Design Specification

Reference:
https://www.standrews.com/play/courses/old-course

This document describes the observable information architecture, navigation, component hierarchy,
responsive behavior, and visual direction needed to build a golf-course website with the same
overall UX pattern as the reference. Replace the reference brand, logo, copy, photography,
icons, and other protected assets with your own golf-course brand/assets.

## 1. Overall experience

- Premium heritage-golf visual language.
- Full-width editorial photography/video.
- Large typography with generous whitespace.
- Dark/navy and off-white base palette, with restrained green/golf accents.
- Strong full-width hero.
- Clear booking CTA.
- Desktop-first composition that collapses cleanly to mobile.
- Sticky/overlay header behavior.
- Large navigation/mega-menu treatment.
- Content blocks alternate between full-bleed media and structured text.
- Footer is information-heavy and organized into navigation columns.

## 2. Header

Top utility strip:
- Newsletter/sign-up message.
- Small utility links such as live webcam / account or ticket links.

Primary header:
- Golf-course logo at left.
- Main navigation:
  - Golf
  - Academy
  - Offers & Packages
  - Dining
  - Explore
  - About / The Home of Golf
- Prominent "Book a tee time" CTA.
- Mobile hamburger/menu trigger.

Mobile:
- Compact header.
- Logo centered/left.
- Hamburger opens a full-height navigation drawer.
- Primary CTA remains highly visible.

## 3. Hero

Use a 16:9 or taller full-viewport course photograph/video.

Layering:
1. Full-bleed image/video.
2. Dark translucent gradient for text readability.
3. Small eyebrow/category label.
4. Large course name.
5. Short one-line descriptor.
6. Primary CTA: "Book a tee time".
7. Secondary CTA: "Explore course" / "View 360° tour".

Hero should feel immersive, not like a conventional card.

## 4. Course introduction

Immediately after hero:
- Large editorial heading.
- 1–2 short paragraphs.
- Optional location/course metadata.

Suggested metadata cards:
- Holes
- Par
- Yardage
- Course type
- Location
- Opening/history

Use oversized numerals and small uppercase labels.

## 5. Split editorial sections

Repeat a premium two-column pattern:
- 50% image / 50% text on desktop.
- Stack image then text on mobile.
- Alternate image position left/right.
- Text includes:
  - Small uppercase eyebrow
  - Large serif/editorial heading
  - Short body copy
  - Text link or button

Recommended sections:
- The course
- Heritage/history
- Signature holes
- Golf experience
- Facilities
- Caddie/services
- Visitor information

## 6. Course/holes section

Create a visual course overview:
- Large course-map image or interactive map.
- Hole selector from 1–18.
- Selected-hole panel:
  - Hole number
  - Par
  - Yardage
  - Description
  - Image

On mobile use horizontal scrolling tabs or a compact dropdown.

## 7. 360° / interactive experience

Large full-width visual section:
- Background aerial/course image.
- Centered play/360 icon.
- Heading such as "Explore the course".
- CTA opens a dedicated 360° viewer.

Implementation option:
- Dedicated `/tour` route.
- Embed a third-party 360 viewer or use a WebGL panorama component.

## 8. Booking CTA

Use a high-contrast full-width section near the lower half and again near the footer.

Elements:
- Heading: "Book your round"
- Supporting copy.
- Date/player selector if booking functionality is implemented.
- Primary button.
- Secondary information link.

## 9. Related content

Editorial cards:
- Latest news
- Course updates
- Events/tournaments
- Golf packages
- Dining
- Academy
- Guided tours

Cards should use large photography, minimal text, and hover movement.

## 10. Newsletter

Full-width dark section:
- Heading.
- Short supporting copy.
- Email field.
- Sign-up button.
- Privacy/consent note.

## 11. Footer

Four-column desktop footer:
- Golf
- Academy
- Offers & Packages
- Dining
- Explore
- About
- Contact
- Social links

Bottom row:
- Copyright
- Privacy
- Accessibility
- Terms
- Cookie settings

## 12. Typography

Recommended pairing:
- Display/editorial serif for major headings.
- Clean sans-serif for navigation, buttons and body text.

Suggested implementation:
- CSS variables for font families.
- Headings use clamp() for responsive sizing.
- Body line-height around 1.5–1.7.
- Buttons use uppercase or compact sentence case with generous tracking.

## 13. Motion

Keep motion premium and restrained:
- Hero image slow scale/parallax.
- Fade/slide-up content reveal.
- Navigation drawer slide-in.
- Image hover scale ~1.03.
- Button arrow movement on hover.
- Avoid excessive bouncing or flashy animation.

Respect `prefers-reduced-motion`.

## 14. Responsive breakpoints

- Mobile: < 768px
- Tablet: 768–1199px
- Desktop: >= 1200px
- Large desktop: >= 1600px

Use CSS Grid/Flexbox and `clamp()` instead of fixed pixel layouts wherever possible.

## 15. Accessibility

- Semantic header/nav/main/footer.
- Keyboard-accessible menus.
- Visible focus states.
- Alt text for meaningful images.
- Decorative images marked appropriately.
- Proper heading hierarchy.
- WCAG-conscious contrast.
- Reduced-motion support.

## 16. Recommended routes

/
 /courses
 /courses/[slug]
 /courses/[slug]/holes
 /courses/[slug]/tour
 /booking
 /academy
 /packages
 /dining
 /news
 /about
 /contact

## 17. Important implementation note

Do not copy the St Andrews Links logo, exact brand identity, copyrighted photography, or page copy.
Use the same type of layout, interaction patterns and information architecture while supplying
your own golf-course name, logo, photography, content and booking system.
