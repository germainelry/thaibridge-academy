import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { handleHashNavigation } from '@/lib/navigation';

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const location = useLocation();

  // Initialize navigation on mount and route changes
  useEffect(() => {
    // Handle hash navigation with a small delay to ensure page is loaded
    const timer = setTimeout(() => {
      handleHashNavigation();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        handleHashNavigation();
      }, 50);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return <>{children}</>;
}; 