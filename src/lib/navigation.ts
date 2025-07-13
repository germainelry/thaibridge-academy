// Professional Navigation Utility with Auto-Scrolling
// Handles both same-page and cross-page navigation with smooth scrolling

export interface NavigationOptions {
  /** Offset from top in pixels (useful for fixed headers) */
  offset?: number;
  /** Scroll behavior - 'smooth' or 'auto' */
  behavior?: ScrollBehavior;
  /** Delay before scrolling (useful for page transitions) */
  delay?: number;
  /** Custom scroll duration in milliseconds */
  duration?: number;
}

export interface NavigationTarget {
  /** The route path (e.g., '/about', '/courses') */
  path: string;
  /** Optional section ID to scroll to (e.g., 'team', 'pricing') */
  section?: string;
  /** Navigation options */
  options?: NavigationOptions;
}

class NavigationManager {
  private defaultOptions: NavigationOptions = {
    offset: 80, // Account for fixed header
    behavior: 'smooth',
    delay: 100,
    duration: 800
  };

  /**
   * Navigate to a route with optional section scrolling
   */
  public navigate = (target: NavigationTarget | string): void => {
    const navigationTarget = typeof target === 'string' 
      ? { path: target } 
      : target;

    const { path, section, options = {} } = navigationTarget;
    const finalOptions = { ...this.defaultOptions, ...options };

    // Check if we're navigating to the same page
    const currentPath = window.location.pathname;
    const isSamePage = currentPath === path;

    if (isSamePage && section) {
      // Same page, just scroll to section
      this.scrollToSection(section, finalOptions);
    } else if (!isSamePage) {
      // Different page navigation
      const targetUrl = section ? `${path}#${section}` : path;
      
      // Store scroll target for after page load
      if (section) {
        sessionStorage.setItem('scrollTarget', section);
        sessionStorage.setItem('scrollOptions', JSON.stringify(finalOptions));
      }
      
      window.location.href = targetUrl;
    } else {
      // Same page, no section - scroll to top
      this.scrollToTop(finalOptions);
    }
  };

  /**
   * Scroll to a specific section on the current page
   */
  public scrollToSection = (sectionId: string, options: NavigationOptions = {}): void => {
    const finalOptions = { ...this.defaultOptions, ...options };
    
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const offsetTop = elementTop - finalOptions.offset!;
        
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: finalOptions.behavior
        });
      }
    };

    if (finalOptions.delay! > 0) {
      setTimeout(performScroll, finalOptions.delay);
    } else {
      performScroll();
    }
  };

  /**
   * Scroll to top of page
   */
  public scrollToTop = (options: NavigationOptions = {}): void => {
    const finalOptions = { ...this.defaultOptions, ...options };
    
    const performScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: finalOptions.behavior
      });
    };

    if (finalOptions.delay! > 0) {
      setTimeout(performScroll, finalOptions.delay);
    } else {
      performScroll();
    }
  };

  /**
   * Handle hash navigation on page load
   */
  public handleHashNavigation = (): void => {
    // Handle URL hash on page load
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        this.scrollToSection(hash);
      }, 150);
    }

    // Handle stored scroll target from cross-page navigation
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    const scrollOptions = sessionStorage.getItem('scrollOptions');
    
    if (scrollTarget) {
      const options = scrollOptions ? JSON.parse(scrollOptions) : {};
      setTimeout(() => {
        this.scrollToSection(scrollTarget, options);
      }, 200);
      
      // Clean up
      sessionStorage.removeItem('scrollTarget');
      sessionStorage.removeItem('scrollOptions');
    }
  };

  /**
   * Create a click handler for navigation
   */
  public createClickHandler = (target: NavigationTarget | string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      this.navigate(target);
    };
  };

  /**
   * Generate navigation URL (for href attributes)
   */
  public generateUrl = (target: NavigationTarget | string): string => {
    const navigationTarget = typeof target === 'string' 
      ? { path: target } 
      : target;

    const { path, section } = navigationTarget;
    return section ? `${path}#${section}` : path;
  };
}

// Export singleton instance
export const navigationManager = new NavigationManager();

// Convenience functions for common use cases
export const navigate = navigationManager.navigate;
export const scrollToSection = navigationManager.scrollToSection;
export const scrollToTop = navigationManager.scrollToTop;
export const handleHashNavigation = navigationManager.handleHashNavigation;
export const createClickHandler = navigationManager.createClickHandler;
export const generateUrl = navigationManager.generateUrl;

// Common navigation targets (add more as needed)
export const NAVIGATION_TARGETS = {
  home: { path: '/' },
  about: { path: '/about' },
  aboutTeam: { path: '/about', section: 'team' },
  courses: { path: '/courses' },
  coursePrivate: { path: '/courses', section: 'private-coaching' },
  courseCorporate: { path: '/courses', section: 'corporate-training' },
  reviews: { path: '/reviews' },
  contact: { path: '/contact' },
  contactForm: { path: '/contact', section: 'contact-form' },
  faq: { path: '/faq' },
  policy: { path: '/policy' },
} as const; 