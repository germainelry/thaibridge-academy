import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  sectionIndex: number;
  variant?: 'hero' | 'cta' | 'gradient' | 'auto';
  className?: string;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

/**
 * SectionWrapper - Industry standard 2-color alternating pattern
 * 
 * Pattern Logic:
 * - Even sections (2, 4, 6...): White background (bg-background)
 * - Odd sections (1, 3, 5...): Light accent (bg-thai-light-tint)
 * - Hero sections: Dark background (bg-thai-forest-deep)
 * - CTA sections: Dark background (bg-thai-forest-deep)
 * - Special sections: Gradient backgrounds
 * 
 * This follows industry best practices for:
 * - Visual rhythm and readability
 * - Accessibility and contrast
 * - Maintainable design systems
 * - Cross-platform consistency
 */
export function SectionWrapper({ 
  children, 
  sectionIndex, 
  variant = 'auto',
  className = '',
  paddingY = 'lg'
}: SectionWrapperProps) {
  
  const getPaddingClass = () => {
    switch (paddingY) {
      case 'sm': return 'py-12';
      case 'md': return 'py-16';
      case 'lg': return 'py-20';
      case 'xl': return 'py-24';
      case 'none': return '';
      default: return 'py-20';
    }
  };

  const getBackgroundAndTextClasses = () => {
    // Semantic variants override the pattern
    switch (variant) {
      case 'hero':
        return 'bg-thai-forest-deep text-white';
      case 'cta':
        return 'bg-thai-forest-deep text-white';
      case 'gradient':
        return 'bg-gradient-to-br from-primary/5 to-thai-gold/5 text-thai-text-dark';
      case 'auto':
      default:
        // Industry standard 2-color alternating pattern
        // Even sections: white, Odd sections: light accent
        const isEven = sectionIndex % 2 === 0;
        return isEven 
          ? 'bg-background text-thai-text-dark'
          : 'bg-thai-light-tint text-thai-text-dark';
    }
  };

  return (
    <section className={cn(
      getBackgroundAndTextClasses(),
      getPaddingClass(),
      className
    )}>
      {children}
    </section>
  );
}

/**
 * Hook for managing section indices automatically
 * Simplifies section counting in page components
 */
export function useSectionIndex(startIndex: number = 1) {
  const indexRef = React.useRef(startIndex);
  
  const getNextIndex = () => {
    const nextIndex = indexRef.current;
    indexRef.current += 1;
    return nextIndex;
  };
  
  const resetIndex = () => {
    indexRef.current = startIndex;
  };
  
  return {
    currentIndex: indexRef.current,
    getNextIndex,
    resetIndex
  };
}

/**
 * Utility function to get appropriate heading color for any background
 */
export function getHeadingColorClass(variant?: 'hero' | 'cta' | 'gradient' | 'auto', sectionIndex?: number) {
  if (variant === 'hero' || variant === 'cta') {
    return 'text-white';
  }
  if (variant === 'gradient' || variant === 'auto') {
    return 'text-thai-text-dark';
  }
  // Fallback for manual usage
  return 'text-thai-text-dark';
}

/**
 * Utility function to get appropriate body text color for any background
 */
export function getBodyTextColorClass(variant?: 'hero' | 'cta' | 'gradient' | 'auto', sectionIndex?: number) {
  if (variant === 'hero' || variant === 'cta') {
    return 'text-thai-text-secondary';
  }
  if (variant === 'gradient' || variant === 'auto') {
    return 'text-muted-foreground';
  }
  // Fallback for manual usage
  return 'text-muted-foreground';
} 