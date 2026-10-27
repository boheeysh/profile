---
name: Modern Personal Portfolio
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5c3f40'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0037'
  primary: '#b80035'
  on-primary: '#ffffff'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb3b6'
  secondary: '#b90538'
  on-secondary: '#ffffff'
  secondary-container: '#dc2c4f'
  on-secondary-container: '#fffbff'
  tertiary: '#8c4651'
  on-tertiary: '#ffffff'
  tertiary-container: '#a95e68'
  on-tertiary-container: '#fffaff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b7'
  on-secondary-fixed: '#40000d'
  on-secondary-fixed-variant: '#92002a'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#ffb2bb'
  on-tertiary-fixed: '#3b0613'
  on-tertiary-fixed-variant: '#73323d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 24px
  margin: 32px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 48px
  space-2xl: 80px
---

## Brand & Style

This design system establishes a refined, contemporary aesthetic tailored for high-end personal portfolios and creative profiles. The brand personality is modern, elegant, and understated yet striking through calculated bursts of color. It bridges professional polish with artistic personality, evoking a sense of curated taste, clarity, and quiet confidence.

The visual style is anchored in **Minimalism** with subtle **Tactile / Modern** touches—featuring clean, generous whitespace, immaculate typography hierarchy, and structured card layouts. Interactions are smooth and purposeful, designed to direct focus entirely to the portfolio content while maintaining a memorable visual rhythm.

## Colors

The color palette is deliberately restrained to let the content breathe. A canvas of clean white and soft slate-gray (#f8fafc) provides a pristine, high-end foundation. The primary accent is driven by a sophisticated rose-pink (#e11d48) paired with a vibrant rose (#f43f5e) for interactive states and focal points. A softer blush tint (#fda4af) serves as a tertiary tone for subtle highlights, active states, and delicate background containers. Neutral text relies on deep charcoal tones for optimal readability against light surfaces.

## Typography

The typography system relies on **Plus Jakarta Sans** for its geometric yet soft, welcoming character. It delivers crisp legibility at small sizes while offering striking presence in large display scales. 

Scale adjustments are carefully balanced: for viewports under 768px, scale down `display-lg` to 36px and `display-md` to 30px to maintain proportion and prevent awkward wrapping. Ensure tight letter-spacing on headlines to enhance the modern, editorial feel.

## Layout & Spacing

The layout utilizes a **Fluid grid** model structured around a 12-column setup on desktop, scaling down to 6 columns on tablet and 4 columns on mobile. 

Generous outer margins and expansive vertical spacing (`space-2xl` between major sections) create an uncluttered, high-end editorial atmosphere. Content containers are capped at a maximum width to ensure optimal reading line lengths, while cards and grid items flex fluidly within the available canvas.

## Elevation & Depth

Elevation is handled primarily through **Low-contrast outlines** and subtle **Ambient shadows**, avoiding heavy or harsh drops. 

Surfaces utilize crisp, ultra-clean cards on soft gray backgrounds, differentiated by delicate borders (`1px solid rgba(0, 0, 0, 0.06)`) and ultra-soft, diffused shadows (`0 4px 20px rgba(0, 0, 0, 0.03)`). Hover states elevate cards with slightly crisper shadows and a smooth translateY transition, giving tactile feedback without cluttering the pristine aesthetic.

## Shapes

The design system adopts a **Rounded** shape language (`rounded` level 2), featuring a base 0.5rem (8px) border radius for standard UI elements like inputs and buttons, scaling up to 1rem (`rounded-lg`) and 1.5rem (`rounded-xl`) for content cards and containers. This creates a friendly yet sophisticated silhouette that feels approachable and contemporary.

## Components

### Buttons
- **Primary:** Solid rose background (`#e11d48`), white text, medium weight, rounded corners, with a subtle hover darken effect and scale transition.
- **Secondary / Ghost:** Transparent background with a soft border or subtle surface fill, utilizing primary text color for less prominent actions.

### Chips & Tags
- Pill-shaped or softly rounded micro-elements used for skills, categories, or status indicators. Styled with very light rose background tints (`#fda4af` at low opacity) and primary text.

### Cards
- The core container of the portfolio. Features pure white surfaces against the soft gray background, clean border outlines, generous internal padding (`space-xl`), and subtle hover elevation. Used for project showcases, experience items, and testimonials.

### Input Fields & Forms
- Clean, border-driven input elements with light gray backgrounds or clean white fills, 1px neutral borders, and a rose-pink focus ring (`#f43f5e`). Incorporate floating or clear top-labels for a refined form experience.

### Checkboxes & Radio Buttons
- Minimalist custom styling with crisp square/circular containers, filling with the primary rose accent upon selection.

### Additional Profile Components
- **Timeline / Experience Stream:** Vertical line with refined milestone nodes highlighting career or education history.
- **Project Gallery Grid:** Asymmetric or balanced multi-column card layouts showcasing visual case studies with image zoom on hover.
- **Social / Contact Bar:** Minimalist icon buttons with smooth hover state transitions to secondary contact channels.