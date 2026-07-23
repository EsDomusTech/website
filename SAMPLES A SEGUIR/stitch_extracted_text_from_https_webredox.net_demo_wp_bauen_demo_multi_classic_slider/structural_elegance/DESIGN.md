---
name: Structural Elegance
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#7b581f'
  on-secondary: '#ffffff'
  secondary-container: '#fdcc89'
  on-secondary-container: '#78551d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffddb2'
  secondary-fixed-dim: '#eebf7c'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#604008'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  pure-white: '#FFFFFF'
  muted-gray: '#999999'
  architectural-gold: '#BE9355'
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 90px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Libre Franklin
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  label-caps:
    fontFamily: Oswald
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.2em
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-padding: 120px
---

## Brand & Style
The design system is rooted in the "Minimalist Architecture" movement, prioritizing structural clarity, spatial awareness, and a high-end editorial feel. It is designed for high-end portfolios and architectural firms where the content (imagery) needs a sophisticated, quiet frame.

The aesthetic is characterized by **Minimalism** mixed with **Corporate Modern** refinements. It utilizes expansive whitespace (negative space) as a functional element to guide the eye, creating an atmosphere of calm, precision, and luxury. The emotional response should be one of "effortless authority"—modern, clean, and uncompromisingly professional.

## Colors
The palette is monochromatic and high-contrast, punctuated by a singular metallic accent. 

- **Primary (#1B1B1B):** A deep, "off-black" used for high-impact typography and structural lines.
- **Secondary (#BE9355):** A sophisticated gold/bronze used sparingly for accents, active states, and call-to-action highlights.
- **Neutral (#F8F8F8):** The primary canvas color. It is warmer than pure white, reducing eye strain and feeling more "premium."
- **Tertiary (#999999):** Used for meta-data, secondary labels, and subtle borders.

Pure white (#FFFFFF) is reserved strictly for card backgrounds or specific UI containers to create a subtle "lift" against the #F8F8F8 page background.

## Typography
The typography strategy relies on the tension between the condensed, architectural weight of **Oswald** and the clean, functional legibility of **Libre Franklin** (selected as a more versatile and refined alternative to Didact Gothic).

- **Headlines:** Use Oswald in uppercase exclusively. Increased letter spacing is required for the "Display" and "Headline" levels to evoke a luxury editorial feel.
- **Body:** Use Libre Franklin with a light weight (300) for large blocks of text to maintain the "airy" feel. Line heights are intentionally generous (approx 1.6x-1.7x) to ensure the layout feels breathable.
- **Labels:** Meta-information and small labels use Oswald with heavy tracking (0.2em) to differentiate them from body copy.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy within a fluid container. 

- **Grid:** A 12-column grid with wide 32px gutters.
- **Section Spacing:** Generous vertical padding (120px+) between sections is mandatory to preserve the minimalist aesthetic.
- **Asymmetry:** Content should often be offset—for example, using 8 columns for primary content and leaving 4 columns empty—to create a dynamic, modern architectural flow.
- **Mobile:** Margins shrink to 24px, and section padding reduces to 64px. Elements typically collapse to a single-column stack.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than shadows. The design should remain "flat" in the traditional sense, using contrast and overlapping elements to suggest hierarchy.

- **Surface Tiers:** Backgrounds are #F8F8F8. Floating elements or cards use #FFFFFF with a 1px solid border of #EEEEEE (or a very faint version of the neutral).
- **Overlays:** Images may use a 10-20% black tint overlay to ensure white text remains legible.
- **Shadows:** Avoid drop shadows. If depth is absolutely required, use a "Sharp Shadow" approach—a 1px solid primary-color offset—rather than a soft blur.

## Shapes
The shape language is **Strictly Sharp (0)**. 

Architectural precision is communicated through 90-degree angles. Buttons, input fields, image containers, and cards must have a 0px border radius. Circular elements should be avoided unless used for specific interactive indicators (like a play button or a custom cursor).

## Components
- **Buttons:** Rectangular with 0px radius. Primary buttons are #1B1B1B with #FFFFFF text. Hover states shift to #BE9355. Ghost buttons use a 1px border.
- **Inputs:** Minimalist bottom-border only or a light 1px frame. Focus state is a transition to the secondary accent color.
- **Cards:** No shadows. Use "Full Image" cards where text is overlaid on a darkened architectural photo, or "Clean" cards with a #FFFFFF background and generous internal padding (40px).
- **Navigation:** Transparent or #F8F8F8 background. Use the `label-caps` style for links. Include a "line-draw" animation for hover states rather than a color change.
- **Classic Slider:** High-impact, full-bleed images. Navigational arrows should be thin, large, and high-contrast (Primary color or White).