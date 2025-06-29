# ThaiBridge Academy - Comprehensive Design System

## Overview

This design system provides a complete, scalable foundation for the ThaiBridge Academy website. It includes a comprehensive color system, typography hierarchy, component library, and utility classes that ensure consistency, maintainability, and professional appearance across all pages.

## 🎨 Color System

### Primary Color Palette

The primary color system uses a 10-step scale (50-950) for maximum flexibility:

```css
/* Primary Colors - Forest Green Theme */
--color-primary-50: 126 35% 98%; /* #F7FAF7 - Lightest */
--color-primary-100: 126 35% 95%; /* #E8F5E8 - Very light */
--color-primary-200: 126 35% 85%; /* #C7E5C7 - Light */
--color-primary-300: 126 35% 70%; /* #A3D1A3 - Medium light */
--color-primary-400: 126 35% 55%; /* #7FB069 - Medium (button-fresh) */
--color-primary-500: 126 35% 40%; /* #5A8A4A - Primary */
--color-primary-600: 126 35% 25%; /* #2D5A27 - Deep forest */
--color-primary-700: 126 37% 20%; /* #2A4A24 - Darker */
--color-primary-800: 126 37% 16%; /* #1E3A1A - Darker forest */
--color-primary-900: 126 37% 12%; /* #152A13 - Darkest */
--color-primary-950: 126 37% 8%; /* #0C1A0A - Very darkest */
```

### Secondary Color Palette

```css
/* Secondary Colors - Sage Green Theme */
--color-secondary-50: 134 25% 98%; /* #F7FAF7 - Lightest */
--color-secondary-100: 134 25% 95%; /* #E8F5E8 - Very light */
--color-secondary-200: 134 25% 85%; /* #C7E5C7 - Light */
--color-secondary-300: 134 25% 70%; /* #A3D1A3 - Medium light */
--color-secondary-400: 134 25% 55%; /* #7FB069 - Medium */
--color-secondary-500: 134 25% 41%; /* #4A7C59 - Button sage */
--color-secondary-600: 134 25% 30%; /* #3A5F47 - Dark */
--color-secondary-700: 134 25% 22%; /* #2A4533 - Darker */
--color-secondary-800: 134 25% 16%; /* #1E321F - Darkest */
--color-secondary-900: 134 25% 12%; /* #152415 - Very darkest */
```

### Accent Color Palette

```css
/* Accent Colors - Gold Theme */
--color-accent-50: 38 37% 98%; /* #FEFCF9 - Lightest */
--color-accent-100: 38 37% 95%; /* #FDF8F0 - Very light */
--color-accent-200: 38 37% 85%; /* #F9E8D1 - Light */
--color-accent-300: 38 37% 75%; /* #F5D8B2 - Medium light */
--color-accent-400: 38 37% 64%; /* #D4A574 - Accent gold */
--color-accent-500: 38 37% 55%; /* #B8945F - Medium */
--color-accent-600: 38 37% 45%; /* #9A7A4A - Dark */
--color-accent-700: 38 37% 35%; /* #7C603A - Darker */
--color-accent-800: 38 37% 25%; /* #5E462A - Darkest */
--color-accent-900: 38 37% 15%; /* #402C1A - Very darkest */
```

### Neutral Color Palette

```css
/* Neutral Colors - Gray Scale */
--color-neutral-50: 0 0% 98%; /* #FAFAFA - Lightest */
--color-neutral-100: 0 0% 96%; /* #F5F5F5 - Very light */
--color-neutral-200: 0 0% 90%; /* #E5E5E5 - Light */
--color-neutral-300: 0 0% 80%; /* #CCCCCC - Medium light */
--color-neutral-400: 0 0% 70%; /* #B3B3B3 - Medium */
--color-neutral-500: 0 0% 60%; /* #999999 - Neutral */
--color-neutral-600: 0 0% 50%; /* #808080 - Medium dark */
--color-neutral-700: 0 0% 40%; /* #666666 - Dark */
--color-neutral-800: 0 0% 30%; /* #4D4D4D - Darker */
--color-neutral-900: 0 0% 20%; /* #333333 - Darkest */
--color-neutral-950: 0 0% 10%; /* #1A1A1A - Very darkest */
```

### Status Colors

```css
/* Success Colors */
--color-success-500: 142 76% 36%; /* #22C55E - Success */
--color-success-50: 142 76% 97%; /* #F0FDF4 - Light success */

/* Warning Colors */
--color-warning-500: 38 92% 50%; /* #F59E0B - Warning */
--color-warning-50: 38 92% 97%; /* #FFFBEB - Light warning */

/* Error Colors */
--color-error-500: 0 84% 60%; /* #EF4444 - Error */
--color-error-50: 0 84% 97%; /* #FEF2F2 - Light error */

/* Info Colors */
--color-info-500: 199 89% 48%; /* #3B82F6 - Info */
--color-info-50: 199 89% 97%; /* #EFF6FF - Light info */
```

### Interactive State Colors

```css
/* Link Colors */
--color-link-primary: 217 91% 60%; /* #3B82F6 - Primary link */
--color-link-hover: 217 91% 50%; /* #2563EB - Link hover */
--color-link-active: 217 91% 40%; /* #1D4ED8 - Link active */

/* Focus Colors */
--color-focus-primary: 126 35% 40%; /* #5A8A4A - Primary focus */
--color-focus-secondary: 134 25% 41%; /* #4A7C59 - Secondary focus */
--color-focus-accent: 38 37% 64%; /* #D4A574 - Accent focus */

/* Disabled Colors */
--color-disabled-bg: 0 0% 96%; /* #F5F5F5 - Disabled background */
--color-disabled-text: 0 0% 60%; /* #999999 - Disabled text */
--color-disabled-border: 0 0% 90%; /* #E5E5E5 - Disabled border */
```

## 📝 Typography System

### Font Families

```css
/* Font Families */
--font-family-primary: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-display: "Playfair Display", Georgia, "Times New Roman", serif;
--font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas,
  "Courier New", monospace;
```

### Font Sizes (Modular Scale - 1.25 ratio)

```css
/* Font Sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
--text-7xl: 4.5rem; /* 72px */
--text-8xl: 6rem; /* 96px */
--text-9xl: 8rem; /* 128px */
```

### Font Weights

```css
/* Font Weights */
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

### Line Heights

```css
/* Line Heights */
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Letter Spacing

```css
/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0em;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

## 🧩 Component System

### Button Components

#### Base Button Classes

```css
.btn                    /* Base button styles */
/* Base button styles */
.btn-xs, .btn-sm, .btn-md, .btn-lg, .btn-xl  /* Button sizes */
.btn-primary, .btn-secondary, .btn-accent    /* Button variants */
.btn-outline, .btn-ghost, .btn-destructive   /* Button styles */
.btn-loading; /* Loading state */
```

#### Usage Examples

```html
<!-- Primary Button -->
<button class="btn btn-primary btn-lg">Get Started</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-md">Learn More</button>

<!-- Outline Button -->
<button class="btn btn-outline btn-sm">Cancel</button>

<!-- Loading Button -->
<button class="btn btn-primary btn-loading">Loading...</button>
```

### Form Components

#### Form Elements

```css
.form-container         /* Form wrapper */
/* Form wrapper */
.form-group            /* Form field group */
.form-label            /* Form label */
.form-input            /* Text input */
.form-textarea         /* Textarea */
.form-select           /* Select dropdown */
.form-checkbox         /* Checkbox */
.form-radio            /* Radio button */
.form-error            /* Error message */
.form-help; /* Help text */
```

#### Usage Examples

```html
<div class="form-container">
  <div class="form-group">
    <label class="form-label required">Email Address</label>
    <input type="email" class="form-input" placeholder="Enter your email" />
    <p class="form-help">We'll never share your email with anyone else.</p>
  </div>

  <div class="form-group">
    <label class="form-label">Course Level</label>
    <select class="form-input form-select">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>
  </div>

  <div class="form-checkbox">
    <input type="checkbox" id="newsletter" />
    <label for="newsletter">Subscribe to newsletter</label>
  </div>
</div>
```

### Card Components

#### Card Elements

```css
.card                  /* Base card */
/* Base card */
.card-header           /* Card header */
.card-title            /* Card title */
.card-subtitle         /* Card subtitle */
.card-content          /* Card content */
.card-footer           /* Card footer */
.card-elevated         /* Elevated card */
.card-interactive; /* Interactive card */
```

#### Usage Examples

```html
<div class="card card-elevated">
  <div class="card-header">
    <h3 class="card-title">Beginner Thai Course</h3>
    <p class="card-subtitle">Perfect for complete beginners</p>
  </div>
  <div class="card-content">
    <p>Learn the basics of Thai language and culture...</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Enroll Now</button>
  </div>
</div>
```

### Badge Components

#### Badge Variants

```css
.badge                 /* Base badge */
/* Base badge */
.badge-primary, .badge-secondary, .badge-accent  /* Color variants */
.badge-success, .badge-warning, .badge-error, .badge-info  /* Status variants */
.badge-sm, .badge-md, .badge-lg; /* Badge sizes */
```

#### Usage Examples

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-success badge-lg">Completed</span>
<span class="badge badge-warning">Pending</span>
```

### Alert Components

#### Alert Variants

```css
.alert                 /* Base alert */
/* Base alert */
.alert-info, .alert-success, .alert-warning, .alert-error  /* Alert types */
.alert-icon            /* Alert icon */
.alert-content         /* Alert content */
.alert-title           /* Alert title */
.alert-description; /* Alert description */
```

#### Usage Examples

```html
<div class="alert alert-success">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <h4 class="alert-title">Success!</h4>
    <p class="alert-description">Your course has been enrolled successfully.</p>
  </div>
</div>
```

## 🎯 Utility Classes

### Color Utilities

#### Background Colors

```css
.bg-primary-50,
.bg-primary-100,
...,
.bg-primary-950 .bg-secondary-50,
.bg-secondary-100,
...,
.bg-secondary-900 .bg-accent-50,
.bg-accent-100,
...,
.bg-accent-900 .bg-neutral-50,
.bg-neutral-100,
...,
.bg-neutral-950 .bg-success-50,
.bg-success-500 .bg-warning-50,
.bg-warning-500 .bg-error-50,
.bg-error-500 .bg-info-50,
.bg-info-500;
```

#### Text Colors

```css
.text-primary-50,
.text-primary-100,
...,
.text-primary-950 .text-secondary-50,
.text-secondary-100,
...,
.text-secondary-900 .text-accent-50,
.text-accent-100,
...,
.text-accent-900 .text-neutral-50,
.text-neutral-100,
...,
.text-neutral-950 .text-success-500,
.text-warning-500,
.text-error-500,
.text-info-500;
```

#### Border Colors

```css
.border-primary-50,
.border-primary-100,
...,
.border-primary-950 .border-secondary-50,
.border-secondary-100,
...,
.border-secondary-900 .border-accent-50,
.border-accent-100,
...,
.border-accent-900 .border-neutral-50,
.border-neutral-100,
...,
.border-neutral-950;
```

### Typography Utilities

#### Font Families

```css
.font-primary          /* Source Sans Pro */
/* Source Sans Pro */
.font-display          /* Playfair Display */
.font-mono; /* Monospace */
```

#### Font Sizes

```css
.text-xs,
.text-sm,
.text-base,
.text-lg,
.text-xl .text-2xl,
.text-3xl,
.text-4xl,
.text-5xl,
.text-6xl .text-7xl,
.text-8xl,
.text-9xl;
```

#### Font Weights

```css
.font-thin,
.font-extralight,
.font-light,
.font-normal .font-medium,
.font-semibold,
.font-bold,
.font-extrabold,
.font-black;
```

#### Line Heights

```css
.leading-none,
.leading-tight,
.leading-snug .leading-normal,
.leading-relaxed,
.leading-loose;
```

#### Letter Spacing

```css
.tracking-tighter,
.tracking-tight,
.tracking-normal .tracking-wide,
.tracking-wider,
.tracking-widest;
```

### Spacing Utilities

#### Padding & Margin

```css
.p-0,
.p-1,
.p-2,
.p-3,
.p-4,
.p-5,
.p-6,
.p-8,
.p-10,
.p-12,
.p-16,
.p-20,
.p-24,
.p-32 .m-0,
.m-1,
.m-2,
.m-3,
.m-4,
.m-5,
.m-6,
.m-8,
.m-10,
.m-12,
.m-16,
.m-20,
.m-24,
.m-32;
```

### Border Radius Utilities

```css
.rounded-none,
.rounded-sm,
.rounded,
.rounded-md .rounded-lg,
.rounded-xl,
.rounded-2xl,
.rounded-3xl,
.rounded-full;
```

### Shadow Utilities

```css
.shadow-sm,
.shadow,
.shadow-md,
.shadow-lg,
.shadow-xl,
.shadow-2xl,
.shadow-inner;
```

### Transition Utilities

```css
.transition-fast,
.transition-base,
.transition-slow,
.transition-slower;
```

## 📱 Responsive Design

### Mobile-First Typography

The design system automatically adjusts typography for different screen sizes:

```css
/* Desktop (default) */
--text-hero: 3rem; /* 48px */
--text-h1: 2.25rem; /* 36px */
--text-h2: 1.5rem; /* 24px */

/* Tablet (768px and below) */
@media (max-width: 768px) {
  --text-hero: 2rem; /* 32px */
  --text-h1: 1.75rem; /* 28px */
  --text-h2: 1.25rem; /* 20px */
}

/* Mobile (480px and below) */
@media (max-width: 480px) {
  --text-hero: 1.75rem; /* 28px */
  --text-h1: 1.5rem; /* 24px */
  --text-h2: 1.125rem; /* 18px */
}
```

### Container Classes

```css
.container-thai-sm     /* max-w-4xl - Small content */
/* max-w-4xl - Small content */
.container-thai-md     /* max-w-6xl - Medium content */
.container-thai-lg; /* max-w-7xl - Large content */
```

## ♿ Accessibility Features

### Focus Management

All interactive elements have visible focus indicators:

```css
.btn:focus-visible,
.form-input:focus-visible,
.form-select:focus-visible {
  outline: 2px solid hsl(var(--color-focus-primary));
  outline-offset: 2px;
}
```

### High Contrast Support

```css
@media (prefers-contrast: high) {
  .btn {
    border-width: 2px;
  }
  .form-input {
    border-width: 2px;
  }
  .card {
    border-width: 2px;
  }
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up,
  .animate-scale-in {
    animation: none;
  }

  .transition-all,
  .transition-colors {
    transition: none;
  }
}
```

### Screen Reader Support

- Semantic HTML structure
- Proper ARIA labels
- Focus management
- Color contrast compliance (WCAG AA standards)

## 🎬 Animation System

### Built-in Animations

```css
.animate-fade-in       /* Fade in from bottom */
/* Fade in from bottom */
.animate-slide-up      /* Slide up from bottom */
.animate-scale-in      /* Scale in effect */
.animate-slide-in-left /* Slide in from left */
.animate-slide-in-right /* Slide in from right */
.animate-pulse         /* Pulse animation */
.animate-bounce; /* Bounce animation */
```

### Custom Keyframes

```css
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 🔧 Implementation Guidelines

### Color Usage Best Practices

1. **Primary Colors**: Use for main CTAs, navigation, and brand elements
2. **Secondary Colors**: Use for secondary actions and supporting elements
3. **Accent Colors**: Use sparingly for highlights and special elements
4. **Neutral Colors**: Use for text, borders, and backgrounds
5. **Status Colors**: Use consistently for success, warning, error, and info states

### Typography Hierarchy

1. **Display Font**: Use for hero headlines and main page titles
2. **Primary Font**: Use for body text, buttons, and general content
3. **Monospace Font**: Use for code, technical content, or structured data

### Component Usage

1. **Consistency**: Always use the same component variants for similar purposes
2. **Accessibility**: Ensure all interactive elements have proper focus states
3. **Responsive**: Test components on all screen sizes
4. **Performance**: Use CSS custom properties for easy theming

### Migration from Legacy Classes

The design system maintains backward compatibility with legacy classes:

```css
/* Legacy classes still work */
.bg-thai-deep-forest
.text-thai-text-dark
.btn-thai-primary
.card-thai-default

/* New system classes (recommended) */
.bg-primary-600
.text-neutral-900
.btn btn-primary
.card card-elevated;
```

## 🚀 Future Development

### Adding New Colors

1. Add the color to CSS custom properties in `src/index.css`
2. Create utility classes for background, text, and border
3. Add hover states if needed
4. Update this documentation

### Adding New Components

1. Create component-specific styles in `src/index.css`
2. Follow the naming convention: `component-variant`
3. Document the component in this file
4. Provide usage examples

### Theme Customization

To create a new theme:

1. Update the HSL values in CSS custom properties
2. All components will automatically update
3. Test contrast ratios for accessibility
4. Update this documentation

## 📋 Maintenance Checklist

When updating the design system:

- [ ] Update CSS custom properties in `src/index.css`
- [ ] Test all color combinations for contrast
- [ ] Verify hover and focus states work correctly
- [ ] Update this documentation
- [ ] Test on different screen sizes
- [ ] Check reduced motion preferences
- [ ] Validate accessibility with screen readers
- [ ] Test in high contrast mode
- [ ] Verify print styles

## 🎨 Color Psychology

The Thai-inspired color palette reflects:

- **Forest Greens**: Growth, learning, nature, Thailand's lush landscapes
- **Gold Accents**: Thai culture, prosperity, warmth, authenticity
- **Clean Whites**: Clarity, professionalism, modern learning
- **Sage Greens**: Balance, harmony, cultural connection

This color scheme creates a sophisticated, trustworthy, and culturally authentic brand identity that appeals to language learners seeking authentic cultural experiences.
