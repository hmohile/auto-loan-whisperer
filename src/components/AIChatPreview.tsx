
import { useState, useEffect } from 'react';
import { MessageSquare, Bot, User, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const chatMessages = [
  {
    id: 1,
    type: 'user' as const,
    message: "I'm comparing offers from three lenders - Chase at 4.2% APR, Wells Fargo at 4.5% APR, and a local credit union at 3.9% APR. All are 60-month terms for a $32,000 loan. Which saves me the most money?"
  },
  {
    id: 2,
    type: 'ai' as const,
    message: "Excellent question! Let me break down the total costs for you:\n\n**Credit Union (3.9% APR):**\n• Monthly payment: $590\n• Total interest: $3,400\n• Total cost: $35,400\n\n**Chase (4.2% APR):**\n• Monthly payment: $598\n• Total interest: $3,880\n• Total cost: $35,880\n\n**Wells Fargo (4.5% APR):**\n• Monthly payment: $606\n• Total interest: $4,360\n• Total cost: $36,360\n\n💡 **The credit union saves you $960 compared to Wells Fargo!** That's like getting 16 months of payments back.\n\nWould you like me to check if you qualify for any additional rate discounts?"
  }
];

export const AIChatPreview = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisibleMessages([1]);
    }, 800);

    const timer2 = setTimeout(() => {
      setIsTyping(true);
    }, 1500);

    const timer3 = setTimeout(() => {
      setIsTyping(false);
      setVisibleMessages([1, 2]);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <Card className="bg-white border-primary/20 shadow-xl max-w-2xl w-full hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="pb-4 border-b border-slate-100">
        <CardTitle className="flex items-center gap-3 text-slate-900">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl">AI Copilot</span>
          <Badge variant="secondary" className="ml-auto text-xs bg-emerald-50 text-primary border-primary/20 animate-pulse-glow">
            Live Demo
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6 max-h-96 overflow-y-auto">
        {visibleMessages.includes(1) && (
          <div className="animate-slide-in-right">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-slate-600" />
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-sm max-w-sm">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {chatMessages[0].message}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {isTyping && (
          <div className="flex items-start gap-3 animate-fade-in-up">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/90 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl rounded-tl-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        {visibleMessages.includes(2) && (
          <div className="animate-slide-in-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/90 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl rounded-tl-sm max-w-lg">
                <div className="text-sm text-primary/90 leading-relaxed whitespace-pre-line">
                  {chatMessages[1].message}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center py-2">
          <a 
            href="/dashboard"
            className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Start your conversation
            <MessageSquare className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
