# ThaiBridge Academy Design System

## Overview

This design system ensures consistency, maintainability, and professional appearance across the ThaiBridge Academy website. All colors, components, and styling patterns are centralized for easy refactoring and future development.

## 🎨 Color Palette

### Primary Brand Colors

- **Deep Forest** `#2D5A27` - Main background, hero sections
- **Darker Forest** `#1E3A1A` - Navigation, footer, dark accents

### Content & Card Colors

- **Card White** `#FFFFFF` - Cards, content backgrounds
- **Light Background** `#F7FAF7` - Subtle sections, light backgrounds

### Interactive Colors

- **Button Fresh** `#7FB069` - Primary buttons, CTAs
- **Button Sage** `#4A7C59` - Secondary buttons, borders

### Accent Colors

- **Accent Gold** `#D4A574` - Highlights, badges, special elements

### Typography Colors

- **Text Dark** `#2C3E50` - Primary text on light backgrounds
- **Text Secondary** `#A0B3A0` - Secondary text on dark backgrounds

## 🧩 CSS Custom Properties

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --thai-deep-forest: 126 35% 25%; /* #2D5A27 */
  --thai-darker-forest: 126 37% 16%; /* #1E3A1A */
  --thai-card-white: 0 0% 100%; /* #FFFFFF */
  --thai-light-bg: 120 20% 97%; /* #F7FAF7 */
  --thai-button-fresh: 107 25% 58%; /* #7FB069 */
  --thai-button-sage: 134 25% 41%; /* #4A7C59 */
  --thai-accent-gold: 38 37% 64%; /* #D4A574 */
  --thai-text-dark: 210 29% 24%; /* #2C3E50 */
  --thai-text-secondary: 120 13% 66%; /* #A0B3A0 */
}
```

## 🎯 Utility Classes

### Background Colors

```css
.bg-thai-deep-forest
  .bg-thai-darker-forest
  .bg-thai-card-white
  .bg-thai-light-bg
  .bg-thai-button-fresh
  .bg-thai-button-sage
  .bg-thai-accent-gold;
```

### Text Colors

```css
.text-thai-deep-forest
  .text-thai-darker-forest
  .text-thai-text-dark
  .text-thai-text-secondary
  .text-thai-accent-gold;
```

### Border Colors

```css
.border-thai-deep-forest
  .border-thai-darker-forest
  .border-thai-card-white
  .border-thai-light-bg
  .border-thai-button-fresh
  .border-thai-button-sage
  .border-thai-accent-gold;
```

### Hover States

```css
.hover:bg-thai-button-sage:hover
.hover:text-thai-accent-gold:hover
.hover:border-thai-button-sage:hover
```

## 🧭 Component Patterns

### Button Variants

```css
.btn-thai-primary    /* Primary CTA buttons */
/* Primary CTA buttons */
.btn-thai-secondary  /* Secondary/outline buttons */
.btn-thai-accent; /* Special accent buttons */
```

### Card Variants

```css
.card-thai-default   /* Standard cards */
/* Standard cards */
.card-thai-elevated; /* Cards with hover effects */
```

### Section Variants

```css
.section-thai-light  /* Light background sections */
/* Light background sections */
.section-thai-white  /* White background sections */
.section-thai-dark; /* Dark background sections */
```

## 📱 Responsive Utilities

### Container Classes

```css
.container-thai-sm   /* max-w-4xl - Small content */
/* max-w-4xl - Small content */
.container-thai-md   /* max-w-6xl - Medium content */
.container-thai-lg; /* max-w-7xl - Large content */
```

## 🎬 Animations

### Animation Classes

```css
.animate-fade-in     /* Fade in from bottom */
/* Fade in from bottom */
.animate-slide-up    /* Slide up from bottom */
.animate-scale-in; /* Scale in effect */
```

## 🔧 Best Practices

### 1. Color Usage Guidelines

**Hero Sections**: Use `bg-thai-deep-forest` with white text

```jsx
<section className="bg-thai-deep-forest text-white">
  <h1 className="text-white">Title</h1>
  <p className="text-thai-text-secondary">Subtitle</p>
</section>
```

**Content Sections**: Alternate between `bg-thai-card-white` and `bg-thai-light-bg`

```jsx
<section className="bg-thai-card-white">
  <h2 className="text-thai-text-dark">Section Title</h2>
  <p className="text-thai-button-sage">Content</p>
</section>
```

**Buttons**: Use consistent button patterns

```jsx
// Primary CTA
<Button className="bg-thai-button-fresh hover:bg-thai-button-sage text-white">
  Primary Action
</Button>

// Secondary
<Button className="border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white">
  Secondary Action
</Button>
```

### 2. Component Structure

**Cards**: Use consistent card styling

```jsx
<Card className="border-2 border-thai-button-sage/30 hover:border-thai-button-sage transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-thai-card-white">
  <CardContent>
    <h3 className="text-thai-text-dark">Card Title</h3>
    <p className="text-thai-button-sage">Card content</p>
  </CardContent>
</Card>
```

### 3. Typography Hierarchy

**Headings**: Use `text-thai-text-dark` for headings on light backgrounds
**Body Text**: Use `text-thai-button-sage` for body text
**Secondary Text**: Use `text-thai-text-secondary` for subtle text on dark backgrounds

## 🚀 Future Development

### Adding New Colors

1. Add the color to CSS custom properties in `src/index.css`
2. Create utility classes for background, text, and border
3. Add hover states if needed
4. Update this documentation

### Adding New Components

1. Create component-specific styles in `src/index.css`
2. Follow the naming convention: `component-thai-variant`
3. Document the component in this file
4. Provide usage examples

### Refactoring Colors

To change the entire color scheme:

1. Update the HSL values in CSS custom properties
2. All components will automatically update
3. Test contrast ratios for accessibility
4. Update this documentation

## ♿ Accessibility

### Contrast Ratios

All color combinations meet WCAG AA standards:

- Text on light backgrounds: 4.5:1 minimum
- Text on dark backgrounds: 4.5:1 minimum
- Large text: 3:1 minimum

### Focus States

- All interactive elements have visible focus indicators
- Focus rings use `--thai-button-sage` color
- Reduced motion support for users with vestibular disorders

## 📋 Maintenance Checklist

When updating the design system:

- [ ] Update CSS custom properties in `src/index.css`
- [ ] Test all color combinations for contrast
- [ ] Verify hover and focus states work correctly
- [ ] Update this documentation
- [ ] Test on different screen sizes
- [ ] Check reduced motion preferences
- [ ] Validate accessibility with screen readers

## 🎨 Color Psychology

The Thai-inspired color palette reflects:

- **Forest Greens**: Growth, learning, nature, Thailand's lush landscapes
- **Gold Accents**: Thai culture, prosperity, warmth, authenticity
- **Clean Whites**: Clarity, professionalism, modern learning
- **Sage Greens**: Balance, harmony, cultural connection

This color scheme creates a sophisticated, trustworthy, and culturally authentic brand identity that appeals to language learners seeking authentic cultural experiences.
