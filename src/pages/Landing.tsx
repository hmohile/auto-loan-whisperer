
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Brain, FileText, Shield, Target, MessageSquare, TrendingUp, User, CreditCard, Zap, Eye, BarChart3, ArrowRight, Mail, DollarSign, Clock, Users, Lock, Heart, Bell, Bot, Check, X, Star, Award, Verified, Twitter, Linkedin, Github, Sparkles, Banknote, Calculator, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import qualifiLogo from "@/assets/qualifi-logo.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { AIChatPreview } from "@/components/AIChatPreview";
import { StickyWaitlistCTA } from "@/components/StickyWaitlistCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [isWaitlistSuccess, setIsWaitlistSuccess] = useState(false);
  const navigate = useNavigate();

  // Analytics event tracking
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log(`Event: ${eventName}`, properties);
  };

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('waitlist_signup', { email });
    setIsWaitlistSuccess(true);
    setTimeout(() => setIsWaitlistSuccess(false), 4000);
    setEmail("");
  };

  const handleCTAClick = (ctaType: string) => {
    trackEvent('cta_click', { type: ctaType });
  };

  return (
    <>
      <div className="min-h-screen bg-background font-['Inter',_system-ui,_sans-serif] overflow-x-hidden">
        {/* Sticky Waitlist CTA */}
        <StickyWaitlistCTA />

        {/* Enhanced Header */}
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img src={qualifiLogo} alt="Qualifi AI Logo" className="h-10 w-10" />
                <span className="font-bold text-2xl text-slate-900">Qualifi AI</span>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-600 hover:text-primary font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#how-it-works" className="text-slate-600 hover:text-primary font-medium transition-colors duration-200">
                  How It Works
                </a>
                <a href="#ai-copilot" className="text-slate-600 hover:text-primary font-medium transition-colors duration-200">
                  AI Copilot
                </a>
                <a href="#pricing" className="text-slate-600 hover:text-primary font-medium transition-colors duration-200">
                  Pricing
                </a>
              </nav>

              {/* Enhanced CTA Buttons */}
              <div className="flex items-center space-x-3">
                <Link to="/auth">
                  <Button 
                    variant="ghost" 
                    className="text-slate-600 hover:text-primary font-medium transition-colors duration-200"
                    onClick={() => handleCTAClick('login')}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button 
                    className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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

        {/* Premium Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <Badge variant="secondary" className="bg-emerald-50 text-primary border-primary/20 px-4 py-2 font-medium">
                    <Verified className="h-4 w-4 mr-2" />
                    Trusted by 10,000+ borrowers
                  </Badge>
                  
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
                    Auto Loans.{" "}
                    <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                      Powered by AI.
                    </span>
                  </h1>
                  
                  <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                    One simple form connects you to multiple lenders for instant pre-approvals. 
                    No hard credit pulls, completely free, AI-optimized matching.
                  </p>
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/auth">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg px-8 py-4"
                      onClick={() => handleCTAClick('hero_get_preapproved')}
                    >
                      Get Pre-Approved Now
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-slate-200 hover:border-primary hover:bg-primary/5 text-slate-700 hover:text-primary transition-all duration-300 text-lg px-8 py-4"
                    onClick={() => {
                      handleCTAClick('hero_see_demo');
                      document.getElementById('ai-copilot')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    See AI Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-500">
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

              {/* Premium Hero Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative max-w-lg w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl transform rotate-6"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-primary/10 hover:shadow-3xl transition-shadow duration-500">
                    <img 
                      src={dashboardMockup} 
                      alt="Qualifi AI Dashboard Preview" 
                      className="rounded-2xl w-full h-auto filter brightness-105 contrast-105"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-primary/90 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                      Live Demo →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Why Choose Qualifi AI?
              </h2>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Stop jumping between lender websites. Get all your auto loan options in one place with AI-powered matching.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={FileText}
                title="One Form for All Lenders"
                description="Submit once and get matched with multiple lenders instantly. No more repetitive applications."
                delay={0}
              />
              <FeatureCard
                icon={Eye}
                title="Soft Credit Pre-Approval"
                description="See where you stand before you apply. No hard credit pulls that hurt your score."
                delay={100}
              />
              <FeatureCard
                icon={Brain}
                title="AI-Powered Matching"
                description="Our AI analyzes your profile to find optimal lender matches and the best rates for you."
                delay={200}
              />
              <FeatureCard
                icon={BarChart3}
                title="Compare & Apply Confidently"
                description="Review transparent comparisons with full details on rates, terms, and monthly payments."
                delay={300}
              />
              <FeatureCard
                icon={Shield}
                title="Always Free for Borrowers"
                description="Zero fees, no hidden costs. We're paid by lenders, not you. Complete transparency."
                delay={400}
              />
              <FeatureCard
                icon={MessageSquare}
                title="AI Copilot Assistant"
                description="Chat with our AI to understand your options and get personalized guidance."
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* Premium How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">How It Works</h2>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
                Get auto loan pre-approvals in four simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StepCard
                icon={User}
                step="01"
                title="Share Your Info"
                description="Tell us about your vehicle needs, income, and basic financial information."
                delay={0}
              />
              <StepCard
                icon={CreditCard}
                step="02"
                title="Soft Credit Check"
                description="We perform a soft pull (with your consent) to match you with eligible lenders."
                delay={100}
              />
              <StepCard
                icon={Zap}
                step="03"
                title="Get Pre-Approved"
                description="Receive ranked offers by APR, monthly payment, and match quality - instantly."
                delay={200}
              />
              <StepCard
                icon={Target}
                step="04"
                title="Compare & Choose"
                description="Pick the best option for you with transparent terms and clear comparisons."
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Premium AI Copilot Section */}
        <section id="ai-copilot" className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                  Meet Your AI Loan Copilot
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                  Get personalized guidance, understand complex loan terms, and make confident decisions with our AI assistant.
                </p>
                
                <div className="space-y-4">
                  <p className="text-lg text-slate-600 font-semibold">Ask questions like:</p>
                  <div className="space-y-3">
                    {[
                      "Which offer saves me the most money long-term?",
                      "Should I choose a shorter or longer loan term?",
                      "What's the real cost difference between these APRs?",
                      "Can I negotiate a better rate with this information?"
                    ].map((question, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/dashboard">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg px-8 py-4"
                      onClick={() => handleCTAClick('try_ai_copilot')}
                    >
                      <Sparkles className="mr-3 h-5 w-5" />
                      Try AI Copilot
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Premium AI Chat Preview */}
              <div className="flex justify-center">
                <AIChatPreview />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Comparison Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Traditional vs. Qualifi AI</h2>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
                See how we're solving the pain points of auto loan shopping
              </p>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="p-8 bg-slate-50/50">
                  <h3 className="font-semibold text-xl mb-6 text-slate-900">Comparison</h3>
                  <div className="space-y-6">
                    {[
                      "Multiple applications",
                      "Hard credit pulls", 
                      "Limited options",
                      "Scattered information",
                      "Cost to borrowers"
                    ].map((item, index) => (
                      <div key={index} className="py-4 border-b text-slate-600 text-base last:border-b-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 bg-slate-100">
                  <h3 className="font-semibold text-xl mb-6 text-slate-700">Traditional Shopping</h3>
                  <div className="space-y-6">
                    {[
                      "Fill out forms repeatedly",
                      "Hurts your credit score",
                      "Limited to few lenders", 
                      "Hard to compare offers",
                      "Sometimes fees apply"
                    ].map((item, index) => (
                      <div key={index} className="py-4 border-b flex items-center last:border-b-0">
                        <X className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 bg-emerald-50">
                  <h3 className="font-semibold text-xl mb-6 text-primary">Qualifi AI</h3>
                  <div className="space-y-6">
                    {[
                      "One simple form",
                      "Soft pulls only",
                      "AI-optimized matches",
                      "All in one dashboard", 
                      "Always free"
                    ].map((item, index) => (
                      <div key={index} className="py-4 border-b flex items-center last:border-b-0">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-primary text-base font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Premium Pricing/Trust Section */}
        <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Always Free for Borrowers</h2>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                We don't charge you anything. Lenders pay us a small success fee only when you get funded.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Banknote,
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
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200/50 bg-white/80 backdrop-blur-sm text-center p-8">
                  <CardContent className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                      <item.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-primary/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Trusted by Thousands</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Join over 10,000+ borrowers who have found better auto loan rates through our AI-powered platform.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { stat: "4.9⭐", label: "User Rating" },
                  { stat: "$2,847", label: "Avg. Savings" },
                  { stat: "2 min", label: "Approval Time" },
                  { stat: "50+", label: "Lender Partners" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{item.stat}</div>
                    <div className="text-base text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xl px-12 py-4"
                  onClick={() => handleCTAClick('pricing_cta')}
                >
                  Start Your Free Pre-Approval
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Premium Waitlist Section */}
        <section id="waitlist" className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <Mail className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join the Early Access List</h2>
            <p className="text-xl sm:text-2xl mb-4 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Be among the first to experience AI-powered auto loan matching.
            </p>
            <p className="text-lg mb-12 opacity-75">
              Get exclusive early access and priority support.
            </p>
            
            <Card className="bg-slate-900/95 backdrop-blur-sm border-slate-700/50 max-w-3xl mx-auto mb-12 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                {!isWaitlistSuccess ? (
                  <form onSubmit={handleWaitlistSignup} className="space-y-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white text-slate-800 border-2 border-slate-300 flex-1 h-14 text-lg placeholder:text-slate-500 rounded-xl shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                        required
                      />
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                      >
                        Get Early Access
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                      {[
                        { icon: Lock, text: "No spam ever" },
                        { icon: Heart, text: "No obligations" },
                        { icon: Bell, text: "Launch updates" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          <item.icon className="h-5 w-5 text-white/70" />
                          <span className="text-base text-white/80">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-sm text-white/60 text-center">
                      No spam. No obligations. Just better rates.
                    </p>
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

        {/* Premium Footer */}
        <footer className="bg-slate-900 text-white py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Company Info */}
              <div className="md:col-span-2 space-y-8">
                <div className="flex items-center space-x-3">
                  <img src={qualifiLogo} alt="Qualifi AI" className="h-12 w-12 brightness-0 invert" />
                  <span className="font-bold text-3xl">Qualifi AI</span>
                </div>
                <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                  AI-powered auto loan pre-approvals that connect borrowers to the best-fit lenders. 
                  Smart matching, transparent rates, always free for borrowers.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Github, href: "#" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex space-x-12">
                  {[
                    { stat: "10K+", label: "Users Served" },
                    { stat: "50+", label: "Lender Partners" },
                    { stat: "$50M+", label: "Loans Facilitated" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary">{item.stat}</div>
                      <div className="text-base text-slate-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Links */}
              <div className="space-y-6">
                <h4 className="font-semibold text-2xl text-white">Product</h4>
                <ul className="space-y-4 text-slate-300">
                  {[
                    { text: "Features", href: "#features" },
                    { text: "How It Works", href: "#how-it-works" },
                    { text: "AI Copilot", href: "#ai-copilot" },
                    { text: "Pricing", href: "#pricing" },
                    { text: "Get Started", href: "/auth" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-primary transition-colors text-lg">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company Links */}
              <div className="space-y-6">
                <h4 className="font-semibold text-2xl text-white">Company</h4>
                <ul className="space-y-4 text-slate-300">
                  {[
                    "About Us",
                    "Privacy Policy", 
                    "Terms of Service",
                    "Contact Support",
                    "Careers"
                  ].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="hover:text-primary transition-colors text-lg">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-slate-700 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex items-center space-x-8">
                  <p className="text-slate-300 text-lg">
                    © 2025 Qualifi AI Inc. All rights reserved.
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-slate-400 text-base max-w-md">
                    Qualifi AI is not a lender. We help users discover auto loan options based on their financial profile.
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    All loan offers are subject to lender approval and terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
