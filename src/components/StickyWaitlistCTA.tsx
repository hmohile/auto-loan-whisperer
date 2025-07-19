
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

export const StickyWaitlistCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport
      
      setIsVisible(scrolled > threshold && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 p-4 flex items-center gap-3 max-w-sm">
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900 mb-1">Join Early Access</p>
          <p className="text-xs text-slate-600">Private beta launching soon</p>
        </div>
        <Button 
          onClick={scrollToWaitlist}
          size="sm" 
          className="btn-primary text-xs px-4 py-2 h-auto"
        >
          Join Now
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
        <button
          onClick={handleDismiss}
          className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
};
