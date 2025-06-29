# ThaiBridge Academy - Developer Guide

## 🚀 Quick Start

### Running the Website Locally

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎨 Color System Quick Reference

### Primary Colors

```css
/* Hero sections, main backgrounds */
.bg-thai-deep-forest     /* #2D5A27 */

/* Navigation, footer */
/* #2D5A27 */

/* Navigation, footer */
.bg-thai-darker-forest   /* #1E3A1A */

/* Cards, content areas */
.bg-thai-card-white      /* #FFFFFF */

/* Subtle sections */
.bg-thai-light-bg; /* #F7FAF7 */
```

### Interactive Colors

```css
/* Primary buttons, CTAs */
.bg-thai-button-fresh    /* #7FB069 */

/* Secondary buttons, borders */
/* #7FB069 */

/* Secondary buttons, borders */
.bg-thai-button-sage     /* #4A7C59 */

/* Highlights, badges */
.bg-thai-accent-gold; /* #D4A574 */
```

### Text Colors

```css
/* Headings on light backgrounds */
.text-thai-text-dark     /* #2C3E50 */

/* Body text */
/* #2C3E50 */

/* Body text */
.text-thai-button-sage   /* #4A7C59 */

/* Secondary text on dark backgrounds */
.text-thai-text-secondary; /* #A0B3A0 */
```

## 📝 Common Patterns

### Hero Section Template

```jsx
<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-thai-deep-forest">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Your Headline
    </h1>
    <p className="text-xl text-thai-text-secondary mb-8 leading-relaxed">
      Your subheadline text
    </p>
    <Button className="bg-thai-button-fresh hover:bg-thai-button-sage text-white px-8 py-3 rounded-full">
      CTA Button
    </Button>
  </div>
</section>
```

### Content Section Template

```jsx
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-thai-text-dark mb-6">
      Section Title
    </h2>
    <p className="text-lg text-thai-button-sage leading-relaxed">
      Section content
    </p>
  </div>
</section>
```

### Card Template

```jsx
<Card className="border-2 border-thai-button-sage/30 hover:border-thai-button-sage transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-thai-card-white">
  <CardContent className="p-6">
    <h3 className="text-xl font-semibold text-thai-text-dark mb-4">
      Card Title
    </h3>
    <p className="text-thai-button-sage leading-relaxed">Card content</p>
  </CardContent>
</Card>
```

### Button Patterns

```jsx
// Primary CTA
<Button className="bg-thai-button-fresh hover:bg-thai-button-sage text-white px-8 py-3 rounded-full">
  Primary Action
</Button>

// Secondary/Outline
<Button className="border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white px-8 py-3 rounded-full">
  Secondary Action
</Button>

// Accent
<Button className="bg-thai-accent-gold hover:bg-thai-button-sage text-white px-8 py-3 rounded-full">
  Special Action
</Button>
```

## 🔧 File Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Site navigation
│   ├── Footer.tsx          # Site footer
│   └── ui/                 # Reusable UI components
├── pages/
│   ├── Index.tsx           # Homepage
│   ├── About.tsx           # About page
│   ├── Courses.tsx         # Courses page
│   ├── Reviews.tsx         # Reviews page
│   ├── Contact.tsx         # Contact page
│   └── FAQ.tsx             # FAQ page
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── index.css               # Design system & styles
```

## 🎯 Component Guidelines

### Adding New Pages

1. Create new file in `src/pages/`
2. Import required components: `Navigation`, `Footer`
3. Follow the established color patterns
4. Add route in `App.tsx`

### Adding New Components

1. Create in `src/components/` or `src/components/ui/`
2. Use consistent color classes
3. Follow naming conventions
4. Add TypeScript types if needed

### Styling Best Practices

- Use CSS custom properties for colors (defined in `index.css`)
- Use utility classes for common patterns
- Maintain consistent spacing with Tailwind classes
- Test hover and focus states
- Ensure accessibility compliance

## 🔄 Making Changes

### Changing Colors

1. Update HSL values in `src/index.css` CSS custom properties
2. All components will automatically update
3. Test contrast ratios
4. Update documentation

### Adding New Colors

1. Add to CSS custom properties in `index.css`
2. Create utility classes (background, text, border)
3. Add hover states if needed
4. Update `DESIGN_SYSTEM.md`

### Modifying Layout

1. Use existing container classes: `container-thai-sm`, `container-thai-md`, `container-thai-lg`
2. Follow responsive design patterns
3. Test on mobile, tablet, and desktop
4. Maintain consistent spacing

## 🧪 Testing

### Visual Testing

- Test all pages on different screen sizes
- Verify hover and focus states
- Check color contrast ratios
- Test with reduced motion preferences

### Functionality Testing

- Test all navigation links
- Verify form submissions
- Check responsive behavior
- Test accessibility with screen readers

## 📚 Resources

- **Design System**: `DESIGN_SYSTEM.md`
- **Color Palette**: Defined in `src/index.css`
- **Component Library**: `src/components/ui/`
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/docs)
- **React Router**: [Documentation](https://reactrouter.com/)

## 🐛 Common Issues

### Colors Not Updating

- Check if using correct CSS custom property names
- Ensure Tailwind is rebuilding CSS
- Clear browser cache

### Layout Issues

- Verify container classes are applied correctly
- Check responsive breakpoints
- Ensure proper grid/flex classes

### Performance Issues

- Optimize images
- Use lazy loading for components
- Minimize bundle size
- Use React.memo for expensive components

## 📞 Support

For questions about the design system or development:

1. Check `DESIGN_SYSTEM.md` for detailed documentation
2. Review existing components for patterns
3. Follow established naming conventions
4. Test changes thoroughly before committing
