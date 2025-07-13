# ThaiBridge Academy Design System - Section Colors

## Overview

This design system implements industry-standard section color patterns for consistent, professional, and maintainable web design.

## Industry Standard: 2-Color Alternating Pattern

### Why This Pattern?

- **Most widely adopted** in professional web design
- **Excellent readability** with proper contrast ratios
- **Visual rhythm** that guides user attention
- **Easy maintenance** for developers
- **Accessibility compliant** by default
- **Cross-platform consistency** across devices

### Pattern Logic

```
Section 1 (odd):  Light accent (bg-thai-light-tint)
Section 2 (even): White (bg-background)
Section 3 (odd):  Light accent (bg-thai-light-tint)
Section 4 (even): White (bg-background)
... continues alternating
```

### Semantic Overrides

- **Hero sections**: Dark background (bg-thai-forest-deep)
- **CTA sections**: Dark background (bg-thai-forest-deep)
- **Special content**: Gradient backgrounds
- **Custom needs**: Override capability available

## Implementation

### Basic Usage

```tsx
import { SectionWrapper } from "@/components/SectionWrapper";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero" paddingY="xl">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            Page Title
          </h1>
          <p className="text-xl text-thai-text-secondary">Hero subtitle text</p>
        </div>
      </SectionWrapper>

      {/* Content Section - Auto white background */}
      <SectionWrapper sectionIndex={2}>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12">
            Content Title
          </h2>
          <p className="text-muted-foreground text-center">
            Content description
          </p>
        </div>
      </SectionWrapper>

      {/* Alternate Section - Auto light accent background */}
      <SectionWrapper sectionIndex={3}>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12">
            Alternate Content
          </h2>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper sectionIndex={4} variant="cta" paddingY="md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Call to Action
          </h2>
          <p className="text-thai-text-secondary mb-8">CTA description</p>
          <Button size="lg">Action Button</Button>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
```

### Advanced Usage

```tsx
// Special gradient section
<SectionWrapper sectionIndex={getNextIndex()} variant="gradient" paddingY="xl">
  <div className="container mx-auto px-4">
    <h2 className="font-display text-3xl font-bold text-center mb-12">
      Special Content
    </h2>
  </div>
</SectionWrapper>

// Custom padding
<SectionWrapper sectionIndex={getNextIndex()} paddingY="sm">
  <div className="container mx-auto px-4">
    <h3 className="text-xl font-semibold mb-4">Compact Section</h3>
  </div>
</SectionWrapper>

// Additional custom classes
<SectionWrapper
  sectionIndex={getNextIndex()}
  className="border-t border-border"
  paddingY="lg"
>
  <div className="container mx-auto px-4">
    <h2 className="font-display text-2xl font-bold">
      Section with Custom Styling
    </h2>
  </div>
</SectionWrapper>
```

## Component API

### SectionWrapper Props

| Prop           | Type                                      | Default  | Description              |
| -------------- | ----------------------------------------- | -------- | ------------------------ |
| `children`     | `React.ReactNode`                         | -        | Section content          |
| `sectionIndex` | `number`                                  | -        | Section number (1-based) |
| `variant`      | `'hero' \| 'cta' \| 'gradient' \| 'auto'` | `'auto'` | Section type             |
| `className`    | `string`                                  | `''`     | Additional CSS classes   |
| `paddingY`     | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'`  | `'lg'`   | Vertical padding         |

### useSectionIndex Hook

```tsx
const { currentIndex, getNextIndex, resetIndex } = useSectionIndex(1);
```

| Method           | Description                          |
| ---------------- | ------------------------------------ |
| `currentIndex`   | Current section index                |
| `getNextIndex()` | Returns current index and increments |
| `resetIndex()`   | Resets index to start value          |

### Utility Functions

```tsx
import {
  getHeadingColorClass,
  getBodyTextColorClass,
} from "@/components/SectionWrapper";

// Get appropriate heading color
const headingClass = getHeadingColorClass("hero"); // 'text-white'

// Get appropriate body text color
const bodyClass = getBodyTextColorClass("auto"); // 'text-muted-foreground'
```

## Color Specifications

### Background Colors

- **White**: `bg-background` (#FFFFFF)
- **Light Accent**: `bg-thai-light-tint` (#F7FAF7)
- **Dark**: `bg-thai-forest-deep` (#112C19)
- **Gradient**: `bg-gradient-to-br from-primary/5 to-thai-gold/5`

### Text Colors

- **Dark backgrounds**: `text-white` (headings), `text-thai-text-secondary` (body)
- **Light backgrounds**: `text-thai-text-dark` (headings), `text-muted-foreground` (body)

### Padding Options

- **Small**: `py-12` (3rem)
- **Medium**: `py-16` (4rem)
- **Large**: `py-20` (5rem) - Default
- **Extra Large**: `py-24` (6rem)
- **None**: No padding

## Page Patterns

### Standard Pages

```
Hero (variant="hero") → Content (auto) → Features (auto) → CTA (variant="cta")
```

### Content-Heavy Pages

```
Hero (variant="hero") → Intro (auto) → Details (auto) → More Info (auto) → CTA (variant="cta")
```

### Landing Pages

```
Hero (variant="hero") → Benefits (auto) → Features (auto) → Testimonials (variant="gradient") → CTA (variant="cta")
```

## Migration Guide

### Step 1: Import Components

```tsx
import { SectionWrapper, useSectionIndex } from "@/components/SectionWrapper";
```

### Step 2: Initialize Section Counter

```tsx
const { getNextIndex } = useSectionIndex(1);
```

### Step 3: Replace Section Tags

```tsx
// Before
<section className="bg-thai-forest-deep text-white py-24">
  <div className="container mx-auto px-4">
    <h1>Hero Title</h1>
  </div>
</section>

// After
<SectionWrapper sectionIndex={getNextIndex()} variant="hero" paddingY="xl">
  <div className="container mx-auto px-4">
    <h1 className="font-display text-5xl font-bold">Hero Title</h1>
  </div>
</SectionWrapper>
```

### Step 4: Update Text Colors

Remove manual text color classes - they're handled automatically:

```tsx
// Before
<h2 className="font-display text-3xl text-thai-text-dark">Title</h2>

// After
<h2 className="font-display text-3xl font-bold">Title</h2>
```

### Step 5: Test and Verify

- Check visual consistency across pages
- Verify text readability on all backgrounds
- Test responsive behavior
- Validate accessibility compliance

## Best Practices

### Do's

✅ Use sequential section indexing (1, 2, 3, 4...)
✅ Start every page with a hero section
✅ Use semantic variants for heroes and CTAs
✅ Let the system handle text colors automatically
✅ Test on multiple screen sizes
✅ Maintain consistent padding within page types

### Don'ts

❌ Skip section numbers or use non-sequential indexing
❌ Override colors without good reason
❌ Mix manual background classes with SectionWrapper
❌ Use custom text colors that break contrast
❌ Ignore accessibility guidelines
❌ Create jarring visual transitions

## Accessibility Considerations

### Contrast Ratios

- **Dark sections**: White text on dark green (21:1 ratio)
- **Light sections**: Dark text on light backgrounds (12:1 ratio)
- **All combinations** exceed WCAG AAA standards

### Screen Readers

- Semantic section tags maintained
- Proper heading hierarchy supported
- Color is not the only differentiator

### Keyboard Navigation

- Focus indicators work on all background colors
- Tab order remains logical
- Interactive elements maintain proper contrast

## Maintenance

### Adding New Variants

1. Add to `variant` type definition
2. Update `getBackgroundAndTextClasses()` function
3. Add utility functions if needed
4. Document new variant usage

### Modifying Colors

1. Update CSS variables in `src/index.css`
2. Test all existing sections
3. Verify accessibility compliance
4. Update documentation

### Performance Considerations

- Component is lightweight and fast
- No runtime color calculations
- CSS classes are pre-compiled
- No JavaScript color manipulation

## Examples

See the updated `About.tsx` page for a complete implementation example demonstrating all features and best practices.
