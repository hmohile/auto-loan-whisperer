import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Brain, FileText, Shield, Target, MessageSquare, TrendingUp, User, CreditCard, Zap, Eye, BarChart3, ArrowRight } from "lucide-react";
import qualifiLogo from "@/assets/qualifi-logo.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [email, setEmail] = useState("");

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement waitlist signup
    console.log("Waitlist signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={qualifiLogo} alt="Qualifi AI" className="h-8 w-8" />
            <span className="font-bold text-xl text-slate-accent">Qualifi AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <Link to="/auth">
            <Button className="bg-emerald-primary hover:bg-emerald-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-light-bg to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-slate-accent">
                Auto Loan Pre-Approvals.{" "}
                <span className="text-emerald-primary">Powered by AI.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                One form. Pre-approvals from top lenders. All in one place — with no hard credit pull.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-emerald-primary hover:bg-emerald-primary/90 text-white text-lg px-8 py-3">
                    Get Pre-Approved Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-emerald-primary text-emerald-primary hover:bg-emerald-primary/5">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-primary/20 to-emerald-primary/10 blur-3xl"></div>
                <img 
                  src={dashboardMockup} 
                  alt="Qualifi AI Dashboard" 
                  className="relative rounded-xl shadow-2xl border border-emerald-200/50 w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-accent">Why Choose Qualifi AI?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop jumping between lender websites. Get all your auto loan options in one place with AI-powered matching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-feature-border hover:shadow-lg transition-all duration-300 hover:border-emerald-primary/30 bg-feature-bg">
              <CardHeader>
                <FileText className="h-12 w-12 text-emerald-primary mb-4" />
                <CardTitle className="text-slate-accent">One Form for All Lenders</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  No more submitting the same info five times. One application gets you matched with multiple lenders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-lg transition-all duration-300 hover:border-emerald-primary/30 bg-feature-bg">
              <CardHeader>
                <Eye className="h-12 w-12 text-emerald-primary mb-4" />
                <CardTitle className="text-slate-accent">Soft Credit Pre-Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  See where you stand before you apply. No hard credit pulls that hurt your score.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-lg transition-all duration-300 hover:border-emerald-primary/30 bg-feature-bg">
              <CardHeader>
                <Brain className="h-12 w-12 text-emerald-primary mb-4" />
                <CardTitle className="text-slate-accent">AI-Powered Lender Match</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  Get options ranked by what's best for you. Our AI analyzes your profile for optimal matches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-lg transition-all duration-300 hover:border-emerald-primary/30 bg-feature-bg">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-emerald-primary mb-4" />
                <CardTitle className="text-slate-accent">Compare & Apply Confidently</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  Review side-by-side comparisons, then take action with full transparency on rates and terms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-lg transition-all duration-300 hover:border-emerald-primary/30 bg-feature-bg">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-primary mb-4" />
                <CardTitle className="text-slate-accent">Always Free for Borrowers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  We're paid by lenders, not you. Zero fees, no hidden costs, cancel anytime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-feature-border hover:shadow-lg transition-all duration-300 hover:border-emerald-primary/30 bg-feature-bg">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-emerald-primary mb-4" />
                <CardTitle className="text-slate-accent">AI Copilot Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  Chat with our AI to understand your options and get personalized guidance throughout the process.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-accent">Traditional vs. Qualifi AI</h2>
            <p className="text-xl text-muted-foreground">
              See how we're solving the pain points of auto loan shopping
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border-0">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="p-6 bg-muted/30">
                <h3 className="font-semibold text-lg mb-4 text-slate-accent">Feature</h3>
                <div className="space-y-4">
                  <div className="py-3 border-b text-muted-foreground">Multiple forms</div>
                  <div className="py-3 border-b text-muted-foreground">Hard pulls before offers</div>
                  <div className="py-3 border-b text-muted-foreground">Biased dealership terms</div>
                  <div className="py-3 border-b text-muted-foreground">One view of all lenders</div>
                  <div className="py-3 text-muted-foreground">Free for users</div>
                </div>
              </div>
              
              <div className="p-6 bg-red-50/80">
                <h3 className="font-semibold text-lg mb-4 text-red-800">Traditional Shopping</h3>
                <div className="space-y-4">
                  <div className="py-3 border-b flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-700">Yes, over and over</span>
                  </div>
                  <div className="py-3 border-b flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-700">Hurts your credit</span>
                  </div>
                  <div className="py-3 border-b flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-700">Limited options</span>
                  </div>
                  <div className="py-3 border-b flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-700">Scattered everywhere</span>
                  </div>
                  <div className="py-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-700">Yes</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-emerald-50/80">
                <h3 className="font-semibold text-lg mb-4 text-emerald-800">Qualifi AI</h3>
                <div className="space-y-4">
                  <div className="py-3 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-700">One simple form</span>
                  </div>
                  <div className="py-3 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-700">Soft pulls only</span>
                  </div>
                  <div className="py-3 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-700">AI-optimized matches</span>
                  </div>
                  <div className="py-3 border-b flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-700">All in one dashboard</span>
                  </div>
                  <div className="py-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-700">Always free</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-accent">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get pre-approved for auto loans in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-emerald-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-accent">Answer a Few Questions</h3>
              <p className="text-muted-foreground">Vehicle, loan need, income, location, and basic info.</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-emerald-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-accent">Soft Credit Check</h3>
              <p className="text-muted-foreground">With your consent - used to match you to eligible lenders.</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-emerald-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-accent">Get Pre-Approved Offers</h3>
              <p className="text-muted-foreground">Ranked by APR, monthly payment, and match fit - instantly.</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-accent">Compare & Choose</h3>
              <p className="text-muted-foreground">Pick what suits you - all options in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-emerald-50/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-accent">Always Free for Borrowers</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't charge you anything. Lenders pay us a small success fee (10–30 bps) only when a funded loan is closed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="text-lg py-2 px-6 bg-emerald-primary text-white hover:bg-emerald-primary/90">
              ✅ Zero Fees
            </Badge>
            <Badge className="text-lg py-2 px-6 bg-emerald-primary text-white hover:bg-emerald-primary/90">
              ✅ No Hard Pulls
            </Badge>
            <Badge className="text-lg py-2 px-6 bg-emerald-primary text-white hover:bg-emerald-primary/90">
              ✅ Cancel Anytime
            </Badge>
          </div>

          <Link to="/auth">
            <Button size="lg" className="bg-emerald-primary hover:bg-emerald-primary/90 text-white text-lg px-8 py-3">
              Start Your Free Pre-Approval
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* AI Copilot Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-accent">Chat with Your Loan Copilot</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI assistant helps you understand your pre-approvals and answer questions — so you can make the right choice.
              </p>
              <Link to="/auth">
                <Button size="lg" className="bg-emerald-primary hover:bg-emerald-primary/90 text-white text-lg px-8 py-3">
                  Try the Copilot
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Card className="bg-white border-emerald-200/50 shadow-xl max-w-md w-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-accent">
                    <MessageSquare className="h-5 w-5 text-emerald-primary" />
                    AI Copilot Chat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-slate-accent">You:</p>
                    <p className="text-sm text-muted-foreground">Which one has the lowest APR?</p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200/50">
                    <p className="text-sm font-medium text-emerald-primary flex items-center gap-1">
                      <Brain className="h-3 w-3" />
                      AI Copilot:
                    </p>
                    <p className="text-sm text-emerald-700 mt-1">
                      Based on your profile, Capital One Auto offers the lowest APR at 5.49%. 
                      You have a 94% match confidence with them.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-slate-accent">You:</p>
                    <p className="text-sm text-muted-foreground">What about monthly payments?</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 bg-emerald-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-xl mb-8 opacity-90">
            Be the first to try Qualifi AI and get early access to AI-powered auto loan approvals.
          </p>
          
          <form onSubmit={handleWaitlistSignup} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-slate-accent border-0 flex-1 h-12 text-base"
                required
              />
              <Button type="submit" variant="secondary" size="lg" className="bg-white text-emerald-primary hover:bg-gray-100 h-12 px-8">
                Get Early Access
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No spam. No obligations. Get notified when we launch.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-accent text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={qualifiLogo} alt="Qualifi AI" className="h-8 w-8 brightness-0 invert" />
                <span className="font-bold text-2xl">Qualifi AI</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                AI-powered auto loan pre-approvals that connect borrowers to the best-fit lenders. Always free for borrowers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Copilot</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Qualifi AI Inc. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-4 md:mt-0">
              Qualifi AI is not a lender. We help users discover auto loan options based on their profile.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;