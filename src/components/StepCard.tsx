
import { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StepCardProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  delay?: number;
}

export const StepCard = ({ icon: Icon, step, title, description, delay = 0 }: StepCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`card-interactive relative transition-all duration-500 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 transition-all duration-300 group-hover:animate-pulse-glow">
            <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
            {step}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
