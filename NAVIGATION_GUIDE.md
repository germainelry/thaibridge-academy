# Auto-Scrolling Navigation System Guide

## Overview

This navigation system provides professional auto-scrolling functionality for both same-page and cross-page navigation, following modern web design standards. It handles smooth scrolling, focus management, and provides a consistent user experience across the entire application.

## Features

✅ **Smooth Auto-Scrolling**: Professional smooth scrolling with configurable options
✅ **Cross-Page Navigation**: Navigate to specific sections on other pages
✅ **Hash Support**: Full support for URL hash navigation (e.g., `/about#team`)
✅ **Mobile Responsive**: Different scroll offsets for mobile and desktop
✅ **Accessibility**: Proper focus management and keyboard navigation
✅ **TypeScript Support**: Full TypeScript support with proper types
✅ **Customizable**: Configurable scroll behavior, offsets, and timing

## Quick Start

### Basic Usage

```tsx
import { useNavigation } from "@/hooks/use-navigation";

function MyComponent() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Navigate to a page */}
      <button onClick={() => navigate("/about")}>About Us</button>

      {/* Navigate to a section on the same page */}
      <button onClick={() => navigate({ path: "/about", section: "team" })}>
        Our Team
      </button>

      {/* Navigate to a section on a different page */}
      <button
        onClick={() =>
          navigate({ path: "/courses", section: "private-coaching" })
        }
      >
        Private Coaching
      </button>
    </div>
  );
}
```

### Using Navigation Links

```tsx
import { useNavigationLink } from "@/hooks/use-navigation";

function NavigationMenu() {
  const aboutLink = useNavigationLink("/about");
  const teamLink = useNavigationLink({ path: "/about", section: "team" });

  return (
    <nav>
      <a {...aboutLink}>About Us</a>
      <a {...teamLink}>Our Team</a>
    </nav>
  );
}
```

## API Reference

### `useNavigation()` Hook

The main hook for navigation functionality.

```tsx
const {
  navigate, // Navigate to a page or section
  scrollToSection, // Scroll to a section on current page
  scrollToTop, // Scroll to top of current page
  createClickHandler, // Create a click handler for navigation
  generateUrl, // Generate URL for navigation target
  currentPath, // Current pathname
  currentHash, // Current hash
} = useNavigation();
```

### `useNavigationLink()` Hook

Hook for creating navigation links with proper href and click handlers.

```tsx
const { href, onClick } = useNavigationLink("/about");
// or
const { href, onClick } = useNavigationLink({
  path: "/about",
  section: "team",
});
```

### Navigation Functions

#### `navigate(target, options?)`

Navigate to a route with optional section scrolling.

```tsx
// Simple navigation
navigate("/about");

// Navigation with section
navigate({ path: "/about", section: "team" });

// Navigation with custom options
navigate({
  path: "/about",
  section: "team",
  options: {
    offset: 100,
    delay: 200,
    behavior: "smooth",
  },
});
```

#### `scrollToSection(sectionId, options?)`

Scroll to a section on the current page.

```tsx
scrollToSection("team");
scrollToSection("team", { offset: 120, behavior: "smooth" });
```

#### `scrollToTop(options?)`

Scroll to the top of the current page.

```tsx
scrollToTop();
scrollToTop({ behavior: "auto" });
```

## Configuration Options

### NavigationOptions

```tsx
interface NavigationOptions {
  offset?: number; // Offset from top in pixels (default: 80)
  behavior?: ScrollBehavior; // 'smooth' or 'auto' (default: 'smooth')
  delay?: number; // Delay before scrolling in ms (default: 100)
  duration?: number; // Custom scroll duration in ms (default: 800)
}
```

### NavigationTarget

```tsx
interface NavigationTarget {
  path: string; // The route path (e.g., '/about')
  section?: string; // Optional section ID (e.g., 'team')
  options?: NavigationOptions; // Navigation options
}
```

## Implementation Examples

### 1. Button Navigation

```tsx
function CTAButton() {
  const { navigate } = useNavigation();

  return (
    <button
      onClick={() => navigate({ path: "/contact", section: "contact-form" })}
    >
      Contact Us
    </button>
  );
}
```

### 2. Navigation Menu

```tsx
function NavigationMenu() {
  const { navigate, currentPath } = useNavigation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/about", section: "team" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.section ? `${item.path}#${item.section}` : item.path}
          onClick={(e) => {
            e.preventDefault();
            navigate(
              item.section
                ? { path: item.path, section: item.section }
                : item.path
            );
          }}
          className={currentPath === item.path ? "active" : ""}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
```

### 3. Footer Links

```tsx
function FooterLinks() {
  const NavigationLink = ({ href, children, className = "" }) => {
    const navigationProps = useNavigationLink(href);
    return (
      <a {...navigationProps} className={className}>
        {children}
      </a>
    );
  };

  return (
    <footer>
      <NavigationLink href="/about">About Us</NavigationLink>
      <NavigationLink href="/courses">Our Courses</NavigationLink>
      <NavigationLink href="/contact">Contact Us</NavigationLink>
    </footer>
  );
}
```

## Setting Up Sections for Navigation

### 1. Add IDs to Sections

```tsx
function AboutPage() {
  return (
    <div>
      <section id="hero">
        <h1>About Us</h1>
      </section>

      <section id="team">
        <h2>Our Team</h2>
        {/* Team content */}
      </section>

      <section id="values">
        <h2>Our Values</h2>
        {/* Values content */}
      </section>
    </div>
  );
}
```

### 2. Update Navigation Targets

```tsx
// In your navigation utility file
export const NAVIGATION_TARGETS = {
  home: { path: "/" },
  about: { path: "/about" },
  aboutTeam: { path: "/about", section: "team" },
  aboutValues: { path: "/about", section: "values" },
  courses: { path: "/courses" },
  contact: { path: "/contact" },
  contactForm: { path: "/contact", section: "contact-form" },
} as const;
```

## Advanced Usage

### Custom Navigation Component

```tsx
interface SmartLinkProps {
  to: string | NavigationTarget;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

function SmartLink({
  to,
  children,
  className = "",
  activeClassName = "",
}: SmartLinkProps) {
  const { navigate, currentPath, generateUrl } = useNavigation();

  const target = typeof to === "string" ? { path: to } : to;
  const isActive = currentPath === target.path;

  return (
    <a
      href={generateUrl(target)}
      onClick={(e) => {
        e.preventDefault();
        navigate(target);
      }}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </a>
  );
}
```

### Navigation with Custom Animations

```tsx
function AnimatedNavigation() {
  const { navigate } = useNavigation();

  const navigateWithAnimation = (target: NavigationTarget) => {
    // Add custom animation before navigation
    document.body.style.opacity = "0.8";

    setTimeout(() => {
      navigate(target);
      document.body.style.opacity = "1";
    }, 150);
  };

  return (
    <button
      onClick={() => navigateWithAnimation({ path: "/about", section: "team" })}
    >
      Go to Team (Animated)
    </button>
  );
}
```

## Best Practices

### 1. Consistent ID Naming

Use consistent naming for section IDs:

```tsx
// Good
<section id="hero">
<section id="about-team">
<section id="course-pricing">

// Avoid
<section id="Hero">
<section id="about_team">
<section id="coursePricing">
```

### 2. Proper Semantic HTML

```tsx
// Good - Proper semantic structure
<main>
  <section id="hero">
    <h1>Page Title</h1>
  </section>

  <section id="content">
    <h2>Section Title</h2>
  </section>
</main>

// Avoid - Generic divs
<div id="hero">
  <div>Page Title</div>
</div>
```

### 3. Accessibility Considerations

```tsx
// Add skip links for keyboard navigation
<a href="#main-content" className="skip-link">Skip to main content</a>

// Use proper heading hierarchy
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

// Ensure focus management
<section id="team" tabIndex={-1}>
  <h2>Our Team</h2>
</section>
```

## Migration Guide

### From Old Navigation System

**Before:**

```tsx
// Old way
<button onClick={() => window.location.href = '/about'}>About</button>
<a href="/courses">Courses</a>
```

**After:**

```tsx
// New way
<button onClick={() => navigate('/about')}>About</button>
<a {...useNavigationLink('/courses')}>Courses</a>
```

### Updating Existing Components

1. **Import the hook:**

   ```tsx
   import { useNavigation } from "@/hooks/use-navigation";
   ```

2. **Replace window.location.href:**

   ```tsx
   // Before
   onClick={() => window.location.href = '/about'}

   // After
   const { navigate } = useNavigation();
   onClick={() => navigate('/about')}
   ```

3. **Update anchor tags:**

   ```tsx
   // Before
   <a href="/about">About</a>

   // After
   <a {...useNavigationLink('/about')}>About</a>
   ```

## Troubleshooting

### Common Issues

1. **Scrolling not working:** Ensure the target element has the correct ID
2. **Wrong scroll position:** Adjust the offset option for your header height
3. **Navigation not smooth:** Check if `scroll-behavior: smooth` is applied in CSS
4. **Hash not working:** Ensure NavigationProvider is properly set up in App.tsx

### Debug Tips

```tsx
// Enable debug mode
const { navigate } = useNavigation();

// Check if element exists
const element = document.getElementById("target-section");
console.log("Element exists:", !!element);

// Check scroll position
console.log("Current scroll position:", window.scrollY);
```

## Performance Considerations

- Navigation functions are memoized for optimal performance
- Smooth scrolling is disabled for users with `prefers-reduced-motion: reduce`
- Session storage is used efficiently for cross-page navigation
- No memory leaks with proper cleanup in useEffect hooks

This navigation system provides a professional, accessible, and maintainable solution for smooth scrolling navigation throughout your application.
