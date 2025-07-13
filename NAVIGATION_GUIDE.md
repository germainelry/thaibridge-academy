# Auto-Scrolling Navigation System - Developer Guide

## Overview

This navigation system provides professional auto-scrolling functionality for both same-page and cross-page navigation, following modern web design standards. It handles smooth scrolling, focus management, and provides a consistent user experience across the entire application.

## 🏗️ System Architecture

### File Structure

```
src/
├── lib/
│   └── navigation.ts           # Core navigation logic
├── hooks/
│   └── use-navigation.ts       # React hooks for components
├── components/
│   └── NavigationProvider.tsx  # Global provider
├── App.tsx                     # Provider setup
└── index.css                   # Smooth scrolling styles
```

### How It Works

1. **NavigationProvider**: Wraps the entire app to provide navigation context
2. **Navigation Manager**: Core class that handles routing and scrolling logic
3. **React Hooks**: Easy-to-use hooks for components
4. **Session Storage**: Preserves navigation state across page changes

## 🚀 Implementation Guide

### Step 1: Verify Setup (Already Done)

The navigation system is already implemented. Verify it's working:

```tsx
// In App.tsx - Should already be wrapped
<NavigationProvider>
  <Routes>{/* Your routes */}</Routes>
</NavigationProvider>
```

### Step 2: Add Navigation to New Pages

When creating a new page, follow this pattern:

```tsx
// Example: src/pages/NewPage.tsx
import { useNavigation } from "@/hooks/use-navigation";

export default function NewPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <h1>New Page</h1>
      </section>

      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
      </section>

      {/* CTA Section */}
      <section id="cta">
        <h2>Get Started</h2>
        <button onClick={() => navigate({ path: "/about", section: "team" })}>
          Meet Our Team
        </button>
      </section>
    </div>
  );
}
```

### Step 3: Create Navigation Links

Use the `useNavigationLink` hook for links:

```tsx
// Navigation Menu Component
function NavigationMenu() {
  const NavigationLink = ({ href, children, className = "" }) => {
    const navigationProps = useNavigationLink(href);
    return (
      <a {...navigationProps} className={className}>
        {children}
      </a>
    );
  };

  return (
    <nav>
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
      <NavigationLink href={{ path: "/about", section: "team" }}>
        Our Team
      </NavigationLink>
    </nav>
  );
}
```

## 🔧 Development Workflow

### Adding New Section Navigation

**1. Add ID to Target Section**

```tsx
// In your page component
<section id="new-section">
  <h2>New Section</h2>
  {/* Content */}
</section>
```

**2. Create Navigation Link**

```tsx
// In your navigation component
<NavigationLink href={{ path: "/page", section: "new-section" }}>
  New Section
</NavigationLink>
```

**3. Test Navigation**

```bash
# Start dev server
npm run dev

# Test the link manually
# Should navigate to: /page#new-section
```

### Common Development Tasks

#### Task 1: Add Footer Link

```tsx
// In Footer.tsx
const footerLinks = {
  company: [
    { name: "New Link", href: "/new-page" },
    { name: "New Section", href: { path: "/page", section: "section" } },
  ],
};
```

#### Task 2: Add Navigation Button

```tsx
// In any component
function MyComponent() {
  const { navigate } = useNavigation();

  return (
    <button onClick={() => navigate({ path: "/courses", section: "pricing" })}>
      View Pricing
    </button>
  );
}
```

#### Task 3: Create Call-to-Action

```tsx
// CTA with navigation
function CTASection() {
  const { navigate } = useNavigation();

  return (
    <section>
      <h2>Ready to Start?</h2>
      <button onClick={() => navigate("/contact")}>Get Started</button>
      <button onClick={() => navigate({ path: "/about", section: "team" })}>
        Meet Our Team
      </button>
    </section>
  );
}
```

## 📋 Maintenance Guide

### Regular Maintenance Tasks

#### 1. Verify All Navigation Links (Monthly)

```bash
# Create a test file
touch test-navigation.js
```

```javascript
// test-navigation.js
const links = [
  { path: "/", section: null },
  { path: "/about", section: null },
  { path: "/about", section: "team" },
  { path: "/courses", section: null },
  { path: "/contact", section: null },
  // Add all your navigation targets
];

links.forEach((link) => {
  const url = link.section ? `${link.path}#${link.section}` : link.path;
  console.log(`Testing: ${url}`);
  // Manually test each link
});
```

#### 2. Update Navigation Offsets

If you change header height, update scroll offsets:

```typescript
// In src/lib/navigation.ts
const DEFAULT_MOBILE_OFFSET = 60; // Update this
const DEFAULT_DESKTOP_OFFSET = 80; // Update this
```

#### 3. Add New Page to Navigation

When adding a new page:

1. **Add Route in App.tsx**

```tsx
<Route path="/new-page" element={<NewPage />} />
```

2. **Add Navigation Links**

```tsx
// In Navigation.tsx or Footer.tsx
<NavigationLink href="/new-page">New Page</NavigationLink>
```

3. **Test Navigation**

```bash
npm run dev
# Manually test the new navigation
```

### Troubleshooting Common Issues

#### Issue 1: Navigation Not Scrolling

**Problem**: Link goes to page but doesn't scroll to section
**Solution**:

1. Check if element has correct ID
2. Verify NavigationProvider is set up
3. Check console for errors

```tsx
// Debug the element
const element = document.getElementById("target-section");
console.log("Element found:", !!element);
```

#### Issue 2: Wrong Scroll Position

**Problem**: Scrolls to wrong position (content hidden under header)
**Solution**: Adjust offset in navigation options

```tsx
// Temporary fix for specific link
navigate({
  path: "/about",
  section: "team",
  options: { offset: 120 }, // Increase offset
});
```

#### Issue 3: Hash URLs Not Working

**Problem**: Direct hash URLs like `/about#team` don't work
**Solution**: Check NavigationProvider setup and hash handling

```tsx
// In NavigationProvider.tsx - should handle hash on load
useEffect(() => {
  handleHashNavigation();
}, [location.pathname]);
```

## 🧪 Testing Guide

### Manual Testing Checklist

**Before each release, test:**

- [ ] All footer links navigate correctly
- [ ] All navigation menu items work
- [ ] Cross-page navigation (e.g., from home to about#team)
- [ ] Same-page navigation (e.g., sections on same page)
- [ ] Mobile responsiveness (different scroll offsets)
- [ ] Keyboard navigation (Tab key)
- [ ] Direct hash URLs (e.g., `/about#team`)

### Testing Script

```javascript
// Manual test script - run in browser console
function testNavigation() {
  const tests = [
    { path: "/", section: null, description: "Homepage" },
    { path: "/about", section: null, description: "About page" },
    { path: "/about", section: "team", description: "About team section" },
    { path: "/courses", section: null, description: "Courses page" },
    { path: "/contact", section: null, description: "Contact page" },
  ];

  tests.forEach((test) => {
    const url = test.section ? `${test.path}#${test.section}` : test.path;
    console.log(`✓ Test: ${test.description} - ${url}`);
  });
}

testNavigation();
```

## 🎯 Best Practices for Developers

### 1. Consistent ID Naming

```tsx
// ✅ Good - Use kebab-case
<section id="hero-section">
<section id="about-team">
<section id="course-pricing">

// ❌ Avoid - Mixed cases
<section id="Hero">
<section id="about_team">
<section id="coursePricing">
```

### 2. Semantic HTML Structure

```tsx
// ✅ Good - Proper semantic structure
<main>
  <section id="hero">
    <h1>Page Title</h1>
  </section>

  <section id="content">
    <h2>Section Title</h2>
  </section>
</main>

// ❌ Avoid - Generic divs
<div id="hero">
  <div>Page Title</div>
</div>
```

### 3. Navigation Component Pattern

```tsx
// ✅ Good - Reusable pattern
const NavigationLink = ({ href, children, className = "" }) => {
  const navigationProps = useNavigationLink(href);
  return (
    <a {...navigationProps} className={className}>
      {children}
    </a>
  );
};

// ❌ Avoid - Inline navigation logic
<a
  href="/about"
  onClick={(e) => {
    /* complex logic */
  }}
>
  About
</a>;
```

### 4. Error Handling

```tsx
// ✅ Good - Handle navigation errors
const { navigate } = useNavigation();

const handleNavigation = (target) => {
  try {
    navigate(target);
  } catch (error) {
    console.error("Navigation failed:", error);
    // Fallback navigation
    window.location.href = typeof target === "string" ? target : target.path;
  }
};
```

## 📖 API Reference

### Core Functions

#### `useNavigation()` Hook

```tsx
const {
  navigate, // Main navigation function
  scrollToSection, // Scroll to section on current page
  scrollToTop, // Scroll to top of page
  createClickHandler, // Create click handler for navigation
  generateUrl, // Generate URL for navigation target
  currentPath, // Current pathname
  currentHash, // Current hash
} = useNavigation();
```

#### `useNavigationLink()` Hook

```tsx
const { href, onClick } = useNavigationLink(target);
```

### Navigation Options

```tsx
interface NavigationOptions {
  offset?: number; // Scroll offset (default: 80 desktop, 60 mobile)
  behavior?: "smooth" | "auto"; // Scroll behavior (default: 'smooth')
  delay?: number; // Delay before scrolling (default: 100ms)
  duration?: number; // Custom duration (default: 800ms)
}
```

### Navigation Target Types

```tsx
// String target
navigate("/about");

// Object target
navigate({
  path: "/about",
  section: "team",
  options: { offset: 120 },
});
```

## 🔍 Advanced Usage

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

### Programmatic Navigation with Callbacks

```tsx
function ComplexNavigation() {
  const { navigate } = useNavigation();

  const handleComplexNavigation = async () => {
    // Do something before navigation
    await saveFormData();

    // Navigate with callback
    navigate({ path: "/thank-you", section: "confirmation" });

    // Do something after navigation
    trackAnalytics("navigation_completed");
  };

  return <button onClick={handleComplexNavigation}>Submit & Continue</button>;
}
```

## 🚨 Common Pitfalls to Avoid

### 1. Missing Section IDs

```tsx
// ❌ Bad - No ID for navigation target
<section>
  <h2>Our Team</h2>
</section>

// ✅ Good - ID for navigation
<section id="team">
  <h2>Our Team</h2>
</section>
```

### 2. Incorrect Hash Navigation

```tsx
// ❌ Bad - Manual hash navigation
window.location.hash = "#team";

// ✅ Good - Use navigation system
navigate({ path: "/about", section: "team" });
```

### 3. Missing NavigationProvider

```tsx
// ❌ Bad - Using hooks without provider
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// ✅ Good - Wrapped with NavigationProvider
function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}
```

## 🎨 Styling Considerations

### Scroll Behavior CSS

```css
/* In src/index.css - Already implemented */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Desktop offset */
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 60px; /* Mobile offset */
  }
}
```

### Focus Management

```css
/* Focus outline for keyboard navigation only */
:focus-visible {
  outline: 2px solid hsl(var(--thai-gold));
  outline-offset: 2px;
}

/* Remove outline for mouse interactions */
:focus:not(:focus-visible) {
  outline: none;
}
```

## 📊 Performance Considerations

- **Memoization**: All navigation functions are memoized
- **Lazy Loading**: Navigation logic is loaded only when needed
- **Session Storage**: Efficiently stores navigation state
- **Reduced Motion**: Respects user's motion preferences
- **Memory Management**: Proper cleanup in useEffect hooks

## 🎯 Future Enhancements

### Planned Features

- [ ] Navigation history tracking
- [ ] Breadcrumb integration
- [ ] Animation customization
- [ ] Progressive web app support

### How to Contribute

1. **Update this documentation** when adding new features
2. **Test thoroughly** before deploying changes
3. **Follow the established patterns** for consistency
4. **Consider accessibility** in all navigation changes

---

This navigation system provides a professional, maintainable, and accessible solution for smooth scrolling navigation throughout your application. When in doubt, refer to this guide or examine existing implementations in the codebase.
