import { ChevronDown } from "lucide-react";

interface ScrollDownProps {
  targetId?: string;
  className?: string;
}

export function ScrollDown({ targetId = "courses", className = "" }: ScrollDownProps) {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={`group flex flex-col items-center gap-2 animate-bounce-gentle ${className}`}
      aria-label="Scroll down"
    >
      <span className="text-sm text-thai-text-secondary group-hover:text-white transition-thai">
        Scroll to explore
      </span>
      <div className="w-8 h-8 rounded-full border-2 border-thai-text-secondary group-hover:border-white transition-thai flex items-center justify-center">
        <ChevronDown className="w-4 h-4 text-thai-text-secondary group-hover:text-white transition-thai" />
      </div>
    </button>
  );
}