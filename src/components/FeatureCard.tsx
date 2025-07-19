
import { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`card-interactive transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
          <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="space-y-2">
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
