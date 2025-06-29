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

## 🎨 Comprehensive Design System

### Color System Quick Reference

#### Primary Colors (Forest Green Theme)

```css
/* Hero sections, main backgrounds */
.bg-primary-600          /* #2D5A27 - Deep forest */

/* Navigation, footer */
/* #2D5A27 - Deep forest */

/* Navigation, footer */
.bg-primary-800          /* #1E3A1A - Darker forest */

/* Cards, content areas */
.bg-neutral-50           /* #FFFFFF - White */

/* Subtle sections */
.bg-neutral-100; /* #F5F5F5 - Light gray */
```

#### Secondary Colors (Sage Green Theme)

```css
/* Primary buttons, CTAs */
.bg-secondary-500        /* #4A7C59 - Button sage */

/* Secondary buttons, borders */
/* #4A7C59 - Button sage */

/* Secondary buttons, borders */
.bg-secondary-400        /* #7FB069 - Medium sage */

/* Highlights, badges */
.bg-accent-400; /* #D4A574 - Accent gold */
```

#### Text Colors

```css
/* Headings on light backgrounds */
.text-neutral-900        /* #333333 - Dark text */

/* Body text */
/* #333333 - Dark text */

/* Body text */
.text-neutral-700        /* #666666 - Medium text */

/* Secondary text on dark backgrounds */
.text-neutral-300; /* #CCCCCC - Light text */
```

#### Status Colors

```css
/* Success states */
.bg-success-500          /* #22C55E - Success */
/* #22C55E - Success */
.text-success-500        /* Success text */

/* Warning states */
.bg-warning-500          /* #F59E0B - Warning */
.text-warning-500        /* Warning text */

/* Error states */
.bg-error-500            /* #EF4444 - Error */
.text-error-500          /* Error text */

/* Info states */
.bg-info-500             /* #3B82F6 - Info */
.text-info-500; /* Info text */
```

## 📝 Typography System

### Font Families

```css
.font-primary            /* Source Sans Pro - Body text */
/* Source Sans Pro - Body text */
.font-display            /* Playfair Display - Headlines */
.font-mono; /* Monospace - Code, data */
```

### Font Sizes (Modular Scale)

```css
.text-xs                 /* 12px */
/* 12px */
.text-sm                 /* 14px */
.text-base               /* 16px */
.text-lg                 /* 18px */
.text-xl                 /* 20px */
.text-2xl                /* 24px */
.text-3xl                /* 30px */
.text-4xl                /* 36px */
.text-5xl                /* 48px */
.text-6xl                /* 60px */
.text-7xl                /* 72px */
.text-8xl                /* 96px */
.text-9xl; /* 128px */
```

### Font Weights

```css
.font-thin               /* 100 */
/* 100 */
.font-extralight         /* 200 */
.font-light              /* 300 */
.font-normal             /* 400 */
.font-medium             /* 500 */
.font-semibold           /* 600 */
.font-bold               /* 700 */
.font-extrabold          /* 800 */
.font-black; /* 900 */
```

### Line Heights

```css
.leading-none            /* 1 */
/* 1 */
.leading-tight           /* 1.25 */
.leading-snug            /* 1.375 */
.leading-normal          /* 1.5 */
.leading-relaxed         /* 1.625 */
.leading-loose; /* 2 */
```

## 🧩 Component System

### Button Components

#### Basic Button Usage

```html
<!-- Primary Button -->
<button class="btn btn-primary btn-lg">Get Started</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-md">Learn More</button>

<!-- Outline Button -->
<button class="btn btn-outline btn-sm">Cancel</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">Skip</button>

<!-- Destructive Button -->
<button class="btn btn-destructive">Delete</button>

<!-- Loading Button -->
<button class="btn btn-primary btn-loading">Loading...</button>
```

#### Button Sizes

```css
.btn-xs                  /* Extra small - 1.5rem height */
/* Extra small - 1.5rem height */
.btn-sm                  /* Small - 2rem height */
.btn-md                  /* Medium - 2.5rem height (default) */
.btn-lg                  /* Large - 3rem height */
.btn-xl; /* Extra large - 3.5rem height */
```

### Form Components

#### Form Structure

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

  <div class="form-group">
    <label class="form-label">Message</label>
    <textarea
      class="form-input form-textarea"
      placeholder="Tell us about your goals"
    ></textarea>
  </div>

  <div class="form-checkbox">
    <input type="checkbox" id="newsletter" />
    <label for="newsletter">Subscribe to newsletter</label>
  </div>

  <div class="form-radio">
    <input type="radio" id="individual" name="type" />
    <label for="individual">Individual</label>
  </div>
  <div class="form-radio">
    <input type="radio" id="group" name="type" />
    <label for="group">Group</label>
  </div>
</div>
```

### Card Components

#### Card Structure

```html
<div class="card card-elevated">
  <div class="card-header">
    <h3 class="card-title">Beginner Thai Course</h3>
    <p class="card-subtitle">Perfect for complete beginners</p>
  </div>
  <div class="card-content">
    <p>
      Learn the basics of Thai language and culture with our comprehensive
      beginner course.
    </p>
    <ul>
      <li>Basic greetings and introductions</li>
      <li>Essential vocabulary</li>
      <li>Cultural insights</li>
    </ul>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Enroll Now</button>
    <button class="btn btn-outline">Learn More</button>
  </div>
</div>
```

#### Card Variants

```css
.card                    /* Base card */
/* Base card */
.card-elevated           /* Elevated with shadow */
.card-interactive; /* Interactive with hover effects */
```

### Badge Components

#### Badge Usage

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-success badge-lg">Completed</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-neutral">Default</span>
```

#### Badge Sizes

```css
.badge-sm                /* Small badge */
/* Small badge */
.badge-md                /* Medium badge (default) */
.badge-lg; /* Large badge */
```

### Alert Components

#### Alert Usage

```html
<div class="alert alert-success">
  <svg class="alert-icon">✓</svg>
  <div class="alert-content">
    <h4 class="alert-title">Success!</h4>
    <p class="alert-description">Your course has been enrolled successfully.</p>
  </div>
</div>

<div class="alert alert-warning">
  <svg class="alert-icon">⚠</svg>
  <div class="alert-content">
    <h4 class="alert-title">Warning</h4>
    <p class="alert-description">Please complete your profile information.</p>
  </div>
</div>

<div class="alert alert-error">
  <svg class="alert-icon">✕</svg>
  <div class="alert-content">
    <h4 class="alert-title">Error</h4>
    <p class="alert-description">
      Unable to process your request. Please try again.
    </p>
  </div>
</div>
```

## 📱 Responsive Design Patterns

### Hero Section Template

```html
<section class="bg-primary-600 text-white py-24">
  <div class="container-thai-md">
    <div class="text-center">
      <h1
        class="font-display text-5xl md:text-6xl font-bold mb-6 animate-fade-in"
      >
        Speak Thai. Connect Deeper.
      </h1>
      <p
        class="text-xl text-neutral-200 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in"
      >
        Master the beautiful Thai language with authentic cultural insights and
        expert guidance.
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
      >
        <button class="btn btn-accent btn-lg">Start Learning</button>
        <button
          class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600"
        >
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</section>
```

### Content Section Template

```html
<section class="py-16 bg-neutral-50">
  <div class="container-thai-md">
    <div class="text-center mb-12">
      <h2 class="font-display text-4xl font-bold text-neutral-900 mb-4">
        Why Choose ThaiBridge Academy?
      </h2>
      <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
        Discover what makes our approach to Thai language learning unique and
        effective.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="card card-elevated">
        <div class="card-content text-center">
          <div
            class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="card-title">Personalized Learning</h3>
          <p class="text-neutral-600">
            Tailored curriculum based on your goals and learning style.
          </p>
        </div>
      </div>

      <div class="card card-elevated">
        <div class="card-content text-center">
          <div
            class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">🏛️</span>
          </div>
          <h3 class="card-title">Cultural Immersion</h3>
          <p class="text-neutral-600">
            Learn not just the language, but the rich Thai culture.
          </p>
        </div>
      </div>

      <div class="card card-elevated">
        <div class="card-content text-center">
          <div
            class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-2xl">👥</span>
          </div>
          <h3 class="card-title">Expert Teachers</h3>
          <p class="text-neutral-600">
            Native speakers with years of teaching experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Testimonial Section Template

```html
<section class="py-16 bg-white">
  <div class="container-thai-md">
    <div class="text-center mb-12">
      <h2 class="font-display text-4xl font-bold text-neutral-900 mb-4">
        What Our Students Say
      </h2>
      <p class="text-lg text-neutral-600">
        Join over 200 satisfied students who have transformed their Thai
        language skills.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="card">
        <div class="card-content">
          <div class="flex items-center mb-4">
            <img
              src="/avatar1.jpg"
              alt="Sarah Johnson"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 class="font-semibold text-neutral-900">Sarah Johnson</h4>
              <p class="text-sm text-neutral-600">Beginner Course</p>
            </div>
          </div>
          <p class="text-neutral-700 mb-4">
            "The cultural context makes learning so much more meaningful. I can
            now have basic conversations with Thai locals!"
          </p>
          <div class="flex text-accent-400">
            <span>★★★★★</span>
          </div>
        </div>
      </div>

      <!-- More testimonials... -->
    </div>
  </div>
</section>
```

## 🎯 Common Patterns

### Navigation Pattern

```html
<nav class="bg-primary-800 text-white py-4">
  <div class="container-thai-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h1 class="font-display text-xl font-bold">ThaiBridge Academy</h1>
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="hover:text-accent-400 transition-colors">Home</a>
        <a href="/courses" class="hover:text-accent-400 transition-colors"
          >Courses</a
        >
        <a href="/about" class="hover:text-accent-400 transition-colors"
          >About</a
        >
        <a href="/contact" class="hover:text-accent-400 transition-colors"
          >Contact</a
        >
      </div>

      <div class="flex items-center space-x-4">
        <button
          class="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-primary-600"
        >
          Login
        </button>
        <button class="btn btn-accent btn-sm">Sign Up</button>
      </div>
    </div>
  </div>
</nav>
```

### Footer Pattern

```html
<footer class="bg-primary-900 text-white py-12">
  <div class="container-thai-md">
    <div class="grid md:grid-cols-4 gap-8">
      <div>
        <h3 class="font-display text-xl font-bold mb-4">ThaiBridge Academy</h3>
        <p class="text-neutral-300">
          Bridging cultures through the beautiful Thai language.
        </p>
      </div>

      <div>
        <h4 class="font-semibold mb-4">Courses</h4>
        <ul class="space-y-2 text-neutral-300">
          <li>
            <a href="#" class="hover:text-white transition-colors">Beginner</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors"
              >Intermediate</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Advanced</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-4">Resources</h4>
        <ul class="space-y-2 text-neutral-300">
          <li>
            <a href="#" class="hover:text-white transition-colors">Blog</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">FAQ</a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">Support</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-4">Contact</h4>
        <p class="text-neutral-300 mb-2">info@thaibridge.com</p>
        <p class="text-neutral-300">+66 2 123 4567</p>
      </div>
    </div>

    <div
      class="border-t border-primary-700 mt-8 pt-8 text-center text-neutral-300"
    >
      <p>&copy; 2024 ThaiBridge Academy. All rights reserved.</p>
    </div>
  </div>
</footer>
```

## 🔄 Making Changes

### Adding New Colors

1. Add the color to CSS custom properties in `src/index.css`:

   ```css
   --color-new-500: 200 50% 50%; /* Your new color */
   ```

2. Create utility classes:

   ```css
   .bg-new-500 {
     background-color: hsl(var(--color-new-500));
   }
   .text-new-500 {
     color: hsl(var(--color-new-500));
   }
   .border-new-500 {
     border-color: hsl(var(--color-new-500));
   }
   ```

3. Add hover states if needed:

   ```css
   .hover:bg-new-500:hover {
     background-color: hsl(var(--color-new-500));
   }
   ```

4. Update documentation in `DESIGN_SYSTEM.md`

### Adding New Components

1. Create component styles in `src/index.css`:

   ```css
   .new-component {
     /* Base styles */
   }

   .new-component-variant {
     /* Variant styles */
   }
   ```

2. Follow naming conventions:

   - Use kebab-case for class names
   - Use semantic names that describe purpose
   - Include size variants if applicable

3. Document the component in `DESIGN_SYSTEM.md`

4. Provide usage examples

### Modifying Layout

1. Use existing container classes:

   ```css
   .container-thai-sm   /* max-w-4xl - Small content */
   /* max-w-4xl - Small content */
   .container-thai-md   /* max-w-6xl - Medium content */
   .container-thai-lg; /* max-w-7xl - Large content */
   ```

2. Follow responsive design patterns:

   ```css
   .grid md:grid-cols-2 lg:grid-cols-3 gap-8
   .flex flex-col md:flex-row gap-4
   .text-center md:text-left
   ```

3. Test on mobile, tablet, and desktop

## 🧪 Testing

### Visual Testing

- Test all pages on different screen sizes (320px, 768px, 1024px, 1440px)
- Verify hover and focus states work correctly
- Check color contrast ratios (minimum 4.5:1 for normal text)
- Test with reduced motion preferences
- Verify high contrast mode support

### Functionality Testing

- Test all navigation links
- Verify form submissions and validation
- Check responsive behavior
- Test accessibility with screen readers
- Verify keyboard navigation

### Performance Testing

- Check CSS bundle size
- Verify image optimization
- Test loading performance
- Check for unused CSS

## 📚 Resources

- **Design System**: `DESIGN_SYSTEM.md`
- **Color Palette**: Defined in `src/index.css`
- **Component Library**: `src/components/ui/`
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/docs)
- **React Router**: [Documentation](https://reactrouter.com/)
- **Accessibility**: [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- **Color Contrast**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 🎨 Design Principles

1. **Consistency**: Use the same patterns and components throughout
2. **Accessibility**: Ensure all users can access and use the site
3. **Performance**: Optimize for fast loading and smooth interactions
4. **Maintainability**: Use CSS custom properties for easy theming
5. **Scalability**: Design components that can grow with the project
6. **Cultural Authenticity**: Reflect Thai culture and values in design choices
