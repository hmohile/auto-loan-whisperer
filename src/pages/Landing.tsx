
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Brain, FileText, Shield, Target, MessageSquare, TrendingUp, User, CreditCard, Zap, Eye, BarChart3, ArrowRight, Mail, DollarSign, Clock, Users, Lock, Heart, Bell, Bot, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import qualifiLogo from "@/assets/qualifi-logo.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement waitlist signup
    console.log("Waitlist signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background font-['Inter',_system-ui,_sans-serif]">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={qualifiLogo} alt="Qualifi AI" className="h-10 w-10" />
            <span className="font-bold text-2xl text-slate-accent">Qualifi AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-slate-accent hover:text-emerald-primary font-medium">
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl ring-2 ring-emerald-500 ring-opacity-20 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-slate-accent tracking-tight">
                Auto Loan Pre-Approvals.{" "}
                <span className="text-emerald-primary bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  Powered by AI.
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-xl">
                One form. Pre-approvals from top lenders. All in one place — with no hard credit pull.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-emerald-primary hover:bg-emerald-primary/90 text-white text-xl px-10 py-4 font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get Pre-Approved Now
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="text-xl px-10 py-4 border-emerald-primary text-emerald-primary hover:bg-emerald-primary/5 font-semibold">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 blur-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-white to-emerald-50/50 p-4 rounded-2xl shadow-2xl border border-emerald-200/30">
                  <img 
                    src={dashboardMockup} 
                    alt="Qualifi AI Dashboard" 
                    className="rounded-xl w-full max-w-lg filter brightness-105 contrast-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl font-bold text-slate-accent">Why Choose Qualifi AI?</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stop jumping between lender websites. Get all your auto loan options in one place with AI-powered matching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-feature-border hover:shadow-xl transition-all duration-300 hover:border-emerald-primary/40 bg-feature-bg group hover:scale-105">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-accent font-semibold">One Form for All Lenders</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  No more submitting the same info five times. One application gets you matched with multiple lenders instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-xl transition-all duration-300 hover:border-emerald-primary/40 bg-feature-bg group hover:scale-105">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-accent font-semibold">Soft Credit Pre-Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  See where you stand before you apply. No hard credit pulls that hurt your score or leave marks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-xl transition-all duration-300 hover:border-emerald-primary/40 bg-feature-bg group hover:scale-105">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-accent font-semibold">AI-Powered Lender Match</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Get options ranked by what's best for you. Our AI analyzes your profile for optimal matches and rates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-xl transition-all duration-300 hover:border-emerald-primary/40 bg-feature-bg group hover:scale-105">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-accent font-semibold">Compare & Apply Confidently</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Review side-by-side comparisons with full transparency on rates, terms, and monthly payments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-xl transition-all duration-300 hover:border-emerald-primary/40 bg-feature-bg group hover:scale-105">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-accent font-semibold">Always Free for Borrowers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  We're paid by lenders, not you. Zero fees, no hidden costs, cancel anytime. Complete transparency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-xl transition-all duration-300 hover:border-emerald-primary/40 bg-feature-bg group hover:scale-105">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-accent font-semibold">AI Copilot Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Chat with our AI to understand your options and get personalized guidance throughout the process.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50/30 to-emerald-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-slate-accent">Traditional vs. Qualifi AI</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              See how we're solving the pain points of auto loan shopping
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border-0">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="p-8 bg-muted/30">
                <h3 className="font-semibold text-xl mb-6 text-slate-accent">Feature</h3>
                <div className="space-y-6">
                  <div className="py-4 border-b text-muted-foreground text-lg">Multiple forms</div>
                  <div className="py-4 border-b text-muted-foreground text-lg">Hard pulls before offers</div>
                  <div className="py-4 border-b text-muted-foreground text-lg">Biased dealership terms</div>
                  <div className="py-4 border-b text-muted-foreground text-lg">One view of all lenders</div>
                  <div className="py-4 text-muted-foreground text-lg">Free for users</div>
                </div>
              </div>
              
              <div className="p-8 bg-slate-100/80">
                <h3 className="font-semibold text-xl mb-6 text-slate-800">Traditional Shopping</h3>
                <div className="space-y-6">
                  <div className="py-4 border-b flex items-center">
                    <X className="h-6 w-6 text-slate-500 mr-3" />
                    <span className="text-slate-700 text-lg">Yes, over and over</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <X className="h-6 w-6 text-slate-500 mr-3" />
                    <span className="text-slate-700 text-lg">Hurts your credit</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <X className="h-6 w-6 text-slate-500 mr-3" />
                    <span className="text-slate-700 text-lg">Limited options</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <X className="h-6 w-6 text-slate-500 mr-3" />
                    <span className="text-slate-700 text-lg">Scattered everywhere</span>
                  </div>
                  <div className="py-4 flex items-center">
                    <Check className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-emerald-700 text-lg">Yes</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-emerald-50/80">
                <h3 className="font-semibold text-xl mb-6 text-emerald-800">Qualifi AI</h3>
                <div className="space-y-6">
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-emerald-700 text-lg">One simple form</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-emerald-700 text-lg">Soft pulls only</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-emerald-700 text-lg">AI-optimized matches</span>
                  </div>
                  <div className="py-4 border-b flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-emerald-700 text-lg">All in one dashboard</span>
                  </div>
                  <div className="py-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-emerald-700 text-lg">Always free</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-emerald-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-slate-accent">How It Works</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Get pre-approved for auto loans in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-slate-accent">Answer a Few Questions</h3>
                <p className="text-muted-foreground text-base leading-relaxed">Vehicle, loan need, income, location, and basic info.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-slate-accent">Soft Credit Check</h3>
                <p className="text-muted-foreground text-base leading-relaxed">With your consent - used to match you to eligible lenders.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-slate-accent">Get Pre-Approved Offers</h3>
                <p className="text-muted-foreground text-base leading-relaxed">Ranked by APR, monthly payment, and match fit - instantly.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-slate-accent">Compare & Choose</h3>
                <p className="text-muted-foreground text-base leading-relaxed">Pick what suits you - all options in one place.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl font-bold text-slate-accent">Always Free for Borrowers</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We don't charge you anything. Lenders pay us a small success fee (10–30 bps) only when a funded loan is closed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-accent">Zero Fees</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">No upfront costs, no hidden charges, no surprises ever - completely free forever</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-accent">No Hard Pulls</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Protect your credit score with soft inquiries only - no damage to your credit</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:scale-105 group">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-700 transition-colors">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-accent">Cancel Anytime</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">No obligations, no contracts, complete freedom - explore at your own pace</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-12 mb-12">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-16 w-16 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-slate-accent text-center">Trusted by Thousands</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-center leading-relaxed">
              Join over 10,000+ borrowers who have found better auto loan rates through our AI-powered platform.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">4.9★</div>
                <div className="text-base text-muted-foreground">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">$2,847</div>
                <div className="text-base text-muted-foreground">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2 min</div>
                <div className="text-base text-muted-foreground">Approval Time</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/auth">
              <Button size="lg" className="bg-emerald-primary hover:bg-emerald-primary/90 text-white text-xl px-12 py-4 font-semibold shadow-lg">
                Start Your Free Pre-Approval
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Copilot Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-50/30 to-slate-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-slate-accent">Chat with Your Loan Copilot</h2>
              <p className="text-2xl text-muted-foreground leading-relaxed">
                Our AI assistant helps you understand your pre-approvals and answer questions — so you can make the right choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-emerald-primary hover:bg-emerald-primary/90 text-white text-xl px-10 py-4 font-semibold shadow-lg">
                    Start Chatting Now
                    <MessageSquare className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" variant="outline" className="text-xl px-10 py-4 border-emerald-primary text-emerald-primary hover:bg-emerald-primary/5 font-semibold">
                    Try the Copilot
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="bg-white border-emerald-200/50 shadow-xl max-w-lg w-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-accent text-xl">
                    <MessageSquare className="h-6 w-6 text-emerald-primary" />
                    AI Copilot Chat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-base font-medium text-slate-accent flex items-center gap-2 mb-2">
                      <User className="h-5 w-5" />
                      You:
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">What's the difference between a 4.2% APR for 60 months versus 3.8% APR for 72 months on a $30,000 loan? Which saves me more money overall?</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200/50">
                    <p className="text-base font-medium text-emerald-primary flex items-center gap-2 mb-2">
                      <Bot className="h-5 w-5" />
                      AI Copilot:
                    </p>
                    <p className="text-base text-emerald-700 leading-relaxed">
                      Great question! The <strong>60-month loan at 4.2%</strong> saves you <strong>$1,847 in total interest</strong> despite the higher rate. Here's why: <br/><br/>
                      • 60 months = $558/month, total interest: $3,480<br/>
                      • 72 months = $470/month, total interest: $5,327<br/><br/>
                      The shorter term wins by $1,847. Would you like me to show you other term options?
                    </p>
                  </div>
                  <div className="text-center py-2">
                    <button 
                      onClick={() => navigate('/dashboard')}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-base"
                    >
                      Start Chatting Now →
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Mail className="h-20 w-20 text-white/80" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Join the Waitlist</h2>
          <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Be the first to try Qualifi AI and get early access to AI-powered auto loan approvals.
          </p>
          
          <Card className="bg-slate-800 backdrop-blur-sm border-slate-700 max-w-3xl mx-auto mb-12">
            <CardContent className="p-10">
              <form onSubmit={handleWaitlistSignup} className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-slate-800 border-2 border-slate-300 flex-1 h-16 text-lg placeholder:text-gray-500 rounded-xl shadow-sm"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white h-16 px-12 text-lg font-semibold rounded-xl shadow-lg"
                  >
                    Get Early Access
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Lock className="h-5 w-5 text-white/70" />
                    <span className="text-base text-white/80">No spam</span>
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
            </CardContent>
          </Card>
          
          <p className="text-xl opacity-80">
            Join <span className="font-semibold">2,500+</span> people already on the waitlist
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center space-x-3">
                <img src={qualifiLogo} alt="Qualifi AI" className="h-12 w-12 brightness-0 invert" />
                <span className="font-bold text-3xl">Qualifi AI</span>
              </div>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                AI-powered auto loan pre-approvals that connect borrowers to the best-fit lenders. 
                Smart matching, transparent rates, always free for borrowers.
              </p>
              <div className="flex space-x-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">10K+</div>
                  <div className="text-base text-gray-400">Users Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">50+</div>
                  <div className="text-base text-gray-400">Lender Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">$50M+</div>
                  <div className="text-base text-gray-400">Loans Facilitated</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-semibold text-2xl text-white">Product</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors text-lg">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors text-lg">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors text-lg">Pricing</a></li>
                <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors text-lg">AI Copilot</Link></li>
                <li><Link to="/auth" className="hover:text-emerald-400 transition-colors text-lg">Get Started</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-semibold text-2xl text-white">Company</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Contact Support</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Careers</a></li>
              </ul>
            </div>
          </div>
          
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
