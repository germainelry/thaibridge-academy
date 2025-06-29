
import { ChevronDown } from "lucide-react";

const ScrollDown = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('reviews-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        onClick={scrollToNext}
        className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
      >
        <span className="text-sm font-primary mb-2 opacity-90">Scroll Down</span>
        <div className="p-2 rounded-full border border-white/30 group-hover:border-white/60 transition-colors">
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
    </div>
  );
};

export default ScrollDown;
