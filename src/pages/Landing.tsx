
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Brain, FileText, Shield, Target, MessageSquare, TrendingUp, User, CreditCard, Zap, Eye, BarChart3, ArrowRight, Mail, DollarSign, Clock, Users, Lock, Heart, Bell, Bot, Check, X, Star, Award, Verified, Twitter, Linkedin, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import qualifiLogo from "@/assets/qualifi-logo.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [isWaitlistSuccess, setIsWaitlistSuccess] = useState(false);
  const navigate = useNavigate();

  // Analytics event tracking
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Placeholder for analytics tracking
    console.log(`Event: ${eventName}`, properties);
    // gtag('event', eventName, properties);
  };

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('waitlist_signup', { email });
    setIsWaitlistSuccess(true);
    setTimeout(() => setIsWaitlistSuccess(false), 3000);
    setEmail("");
  };

  const handleCTAClick = (ctaType: string) => {
    trackEvent('cta_click', { type: ctaType });
  };

  return (
    <div className="min-h-screen bg-background font-['Inter',_system-ui,_sans-serif] overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={qualifiLogo} alt="Qualifi AI Logo" className="h-10 w-10" />
              <span className="font-bold text-2xl text-slate-accent">Qualifi AI</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                How It Works
              </a>
              <a href="#ai-copilot" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                AI Copilot
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Pricing
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link to="/auth">
                <Button 
                  variant="ghost" 
                  className="text-slate-accent hover:text-primary font-medium"
                  onClick={() => handleCTAClick('login')}
                >
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-primary/20 hover:ring-primary/30"
                  onClick={() => handleCTAClick('get_started')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-bg to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-trust-bg text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                  <Verified className="h-4 w-4 mr-2" />
                  Trusted by 10,000+ borrowers
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-accent tracking-tight">
                  Auto Loan Pre-Approvals.{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Powered by AI.
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  One simple form connects you to multiple lenders for instant pre-approvals. 
                  No hard credit pulls, completely free, AI-optimized matching.
                </p>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/auth">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => handleCTAClick('hero_get_preapproved')}
                  >
                    Get Pre-Approved Now
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-lg px-8 py-4 border-primary text-primary hover:bg-primary/5 font-semibold"
                  onClick={() => {
                    handleCTAClick('hero_see_demo');
                    document.getElementById('ai-copilot')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See AI Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <span>No Hard Credit Pull</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Free Forever</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end animate-float">
              <div className="relative max-w-lg w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl transform rotate-6"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-primary/10">
                  <img 
                    src={dashboardMockup} 
                    alt="Qualifi AI Dashboard Preview" 
                    className="rounded-xl w-full h-auto filter brightness-105 contrast-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-accent">Why Choose Qualifi AI?</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stop jumping between lender websites. Get all your auto loan options in one place with AI-powered matching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: FileText,
                title: "One Form for All Lenders",
                description: "Submit once and get matched with multiple lenders instantly. No more repetitive applications."
              },
              {
                icon: Eye,
                title: "Soft Credit Pre-Approval",
                description: "See where you stand before you apply. No hard credit pulls that hurt your score."
              },
              {
                icon: Brain,
                title: "AI-Powered Matching",
                description: "Our AI analyzes your profile to find optimal lender matches and the best rates for you."
              },
              {
                icon: BarChart3,
                title: "Compare & Apply Confidently",
                description: "Review transparent comparisons with full details on rates, terms, and monthly payments."
              },
              {
                icon: Shield,
                title: "Always Free for Borrowers",
                description: "Zero fees, no hidden costs. We're paid by lenders, not you. Complete transparency."
              },
              {
                icon: MessageSquare,
                title: "AI Copilot Assistant",
                description: "Chat with our AI to understand your options and get personalized guidance."
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-primary/40 bg-white cursor-pointer hover:scale-105">
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-accent font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light-bg to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-accent">How It Works</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Get auto loan pre-approvals in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: User,
                step: "01",
                title: "Share Your Info",
                description: "Tell us about your vehicle needs, income, and basic financial information."
              },
              {
                icon: CreditCard,
                step: "02", 
                title: "Soft Credit Check",
                description: "We perform a soft pull (with your consent) to match you with eligible lenders."
              },
              {
                icon: Zap,
                step: "03",
                title: "Get Pre-Approved",
                description: "Receive ranked offers by APR, monthly payment, and match quality - instantly."
              },
              {
                icon: Target,
                step: "04",
                title: "Compare & Choose",
                description: "Pick the best option for you with transparent terms and clear comparisons."
              }
            ].map((step, index) => (
              <Card key={index} className="group text-center p-6 bg-white hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-105">
                <CardContent className="space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary transition-all">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-slate-accent">{step.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Copilot Section */}
      <section id="ai-copilot" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-accent">Meet Your AI Loan Copilot</h2>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                Get personalized guidance, understand complex loan terms, and make confident decisions with our AI assistant.
              </p>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">Ask questions like:</p>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>"Which offer saves me the most money long-term?"</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>"Should I choose a shorter or longer loan term?"</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>"What's the real cost difference between these APRs?"</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/dashboard">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 font-semibold shadow-lg"
                    onClick={() => handleCTAClick('try_ai_copilot')}
                  >
                    Try AI Copilot
                    <MessageSquare className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* AI Chat Preview */}
            <div className="flex justify-center">
              <Card className="bg-white border-primary/20 shadow-xl max-w-lg w-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-accent text-xl">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    AI Copilot Chat
                    <Badge variant="secondary" className="ml-auto text-xs bg-primary/10 text-primary">Live</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-slate-accent flex items-center gap-2 mb-2">
                      <User className="h-4 w-4" />
                      You:
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I'm comparing a 3.9% APR for 60 months vs 4.2% APR for 72 months on a $28,000 car loan. Which option saves me more money?
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary flex items-center gap-2 mb-2">
                      <Bot className="h-4 w-4" />
                      AI Copilot:
                    </p>
                    <p className="text-sm text-primary/80 leading-relaxed">
                      Great question! Let me break this down for you:<br/><br/>
                      
                      <strong>60-month loan (3.9% APR):</strong><br/>
                      • Monthly payment: $516<br/>
                      • Total interest: $2,960<br/>
                      • Total cost: $30,960<br/><br/>
                      
                      <strong>72-month loan (4.2% APR):</strong><br/>
                      • Monthly payment: $436<br/>
                      • Total interest: $3,392<br/>
                      • Total cost: $31,392<br/><br/>
                      
                      💡 <strong>The 60-month loan saves you $432</strong> despite the lower monthly payment option. However, if cash flow is tight, the 72-month option gives you $80/month breathing room.
                      
                      Would you like me to explore other term options or discuss your budget priorities?
                    </p>
                  </div>
                  <div className="text-center py-2">
                    <Link 
                      to="/dashboard"
                      className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1"
                      onClick={() => handleCTAClick('chat_demo_cta')}
                    >
                      Start your conversation →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light-bg to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-accent">Traditional vs. Qualifi AI</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See how we're solving the pain points of auto loan shopping
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border-0">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="p-8 bg-muted/30">
                <h3 className="font-semibold text-xl mb-6 text-slate-accent">Comparison</h3>
                <div className="space-y-6">
                  <div className="py-4 border-b text-muted-foreground text-base">Multiple applications</div>
                  <div className="py-4 border-b text-muted-foreground text-base">Hard credit pulls</div>
                  <div className="py-4 border-b text-muted-foreground text-base">Limited options</div>
                  <div className="py-4 border-b text-muted-foreground text-base">Scattered information</div>
                  <div className="py-4 text-muted-foreground text-base">Always free</div>
                </div>
              </div>
              
              <div className="p-8 bg-slate-100">
                <h3 className="font-semibold text-xl mb-6 text-slate-700">Traditional Shopping</h3>
                <div className="space-y-6">
                  <div className="py-4 border-b flex items-center">
                    <X className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-base">Fill out forms repeatedly</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <X className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-base">Hurts your credit score</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <X className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-base">Limited to few lenders</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <X className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-base">Hard to compare offers</span>
                  </div>
                  <div className="py-4 flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-base">No cost to borrowers</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/5">
                <h3 className="font-semibold text-xl mb-6 text-primary">Qualifi AI</h3>
                <div className="space-y-6">
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">One simple form</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">Soft pulls only</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">AI-optimized matches</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">All in one dashboard</span>
                  </div>
                  <div className="py-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">Always free</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing/Trust Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-accent">Always Free for Borrowers</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We don't charge you anything. Lenders pay us a small success fee only when you get funded.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Zero Fees",
                description: "No upfront costs, no hidden charges, no surprises. Completely free forever for borrowers."
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "Your data is protected with enterprise-level encryption and security protocols."
              },
              {
                icon: Award,
                title: "No Commitments",
                description: "Explore offers with no obligations. You're in complete control of your decisions."
              }
            ].map((item, index) => (
              <Card key={index} className="group text-center p-8 bg-white hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-105">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary transition-all">
                    <item.icon className="h-10 w-10 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-accent">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-trust-bg rounded-2xl p-8 lg:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-slate-accent">Trusted by Thousands</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join over 10,000+ borrowers who have found better auto loan rates through our AI-powered platform.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9⭐</div>
                <div className="text-base text-muted-foreground">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">$2,847</div>
                <div className="text-base text-muted-foreground">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2 min</div>
                <div className="text-base text-muted-foreground">Approval Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-base text-muted-foreground">Lender Partners</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-4 font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => handleCTAClick('pricing_cta')}
              >
                Start Your Free Pre-Approval
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join the Early Access List</h2>
          <p className="text-xl sm:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Be among the first to experience AI-powered auto loan matching. Get exclusive early access and priority support.
          </p>
          
          <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700/50 max-w-3xl mx-auto mb-12">
            <CardContent className="p-8 lg:p-10">
              {!isWaitlistSuccess ? (
                <form onSubmit={handleWaitlistSignup} className="space-y-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/95 text-slate-800 border-2 border-slate-300 flex-1 h-14 text-lg placeholder:text-gray-500 rounded-xl shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Early Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Lock className="h-5 w-5 text-white/70" />
                      <span className="text-base text-white/80">No spam ever</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className="h-5 w-5 text-white/70" />
                      <span className="text-base text-white/80">No obligations</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Bell className="h-5 w-5 text-white/70" />
                      <span className="text-base text-white/80">Launch updates</span>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Welcome to the list!</h3>
                  <p className="text-white/80 text-lg">We'll notify you as soon as early access is available.</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <p className="text-xl opacity-80">
            Join <span className="font-semibold">2,500+</span> people already on the waitlist
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center space-x-3">
                <img src={qualifiLogo} alt="Qualifi AI" className="h-12 w-12 brightness-0 invert" />
                <span className="font-bold text-3xl">Qualifi AI</span>
              </div>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                AI-powered auto loan pre-approvals that connect borrowers to the best-fit lenders. 
                Smart matching, transparent rates, always free for borrowers.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-base text-gray-400">Users Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-base text-gray-400">Lender Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$50M+</div>
                  <div className="text-base text-gray-400">Loans Facilitated</div>
                </div>
              </div>
            </div>
            
            {/* Product Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-2xl text-white">Product</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#features" className="hover:text-primary transition-colors text-lg">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors text-lg">How It Works</a></li>
                <li><a href="#ai-copilot" className="hover:text-primary transition-colors text-lg">AI Copilot</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors text-lg">Pricing</a></li>
                <li><Link to="/auth" className="hover:text-primary transition-colors text-lg">Get Started</Link></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-2xl text-white">Company</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors text-lg">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Contact Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Careers</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-8">
                <p className="text-gray-300 text-lg">
                  © 2025 Qualifi AI Inc. All rights reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-base max-w-md">
                  Qualifi AI is not a lender. We help users discover auto loan options based on their financial profile.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  All loan offers are subject to lender approval and terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
