import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  navigate, 
  scrollToSection, 
  scrollToTop, 
  handleHashNavigation, 
  createClickHandler, 
  generateUrl,
  NavigationTarget,
  NavigationOptions
} from '@/lib/navigation';

export const useNavigation = () => {
  const location = useLocation();

  // Handle hash navigation on route changes
  useEffect(() => {
    handleHashNavigation();
  }, [location.pathname]);

  // Memoized navigation functions
  const navigateTo = useCallback((target: NavigationTarget | string) => {
    navigate(target);
  }, []);

  const scrollTo = useCallback((sectionId: string, options?: NavigationOptions) => {
    scrollToSection(sectionId, options);
  }, []);

  const scrollToTopOfPage = useCallback((options?: NavigationOptions) => {
    scrollToTop(options);
  }, []);

  const createNavClickHandler = useCallback((target: NavigationTarget | string) => {
    return createClickHandler(target);
  }, []);

  const createNavUrl = useCallback((target: NavigationTarget | string) => {
    return generateUrl(target);
  }, []);

  return {
    // Navigation functions
    navigate: navigateTo,
    scrollToSection: scrollTo,
    scrollToTop: scrollToTopOfPage,
    
    // Helper functions
    createClickHandler: createNavClickHandler,
    generateUrl: createNavUrl,
    
    // Current route info
    currentPath: location.pathname,
    currentHash: location.hash,
  };
};

// Custom hook for creating navigation links
export const useNavigationLink = (target: NavigationTarget | string) => {
  const { createClickHandler, generateUrl } = useNavigation();

  return {
    href: generateUrl(target),
    onClick: createClickHandler(target),
  };
}; 