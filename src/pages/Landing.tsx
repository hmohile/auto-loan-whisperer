import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  X, 
  Brain, 
  BarChart3, 
  Bot, 
  PenTool, 
  Car,
  ArrowRight,
  Shield,
  Zap,
  MessageCircle
} from "lucide-react";
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-foreground">Qualifi AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/auth" className="text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary">
                  <Zap className="w-3 h-3 mr-1" />
                  AI-Powered Matching
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Auto Loan Pre-Approvals.{" "}
                  <span className="text-primary">Powered by AI.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Qualifi AI compares your financial profile against top lenders to find the best auto loan — in minutes, with no hard credit pull.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Pre-Approved Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Demo Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="bg-card rounded-lg border shadow-sm p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Your Best Matches</h3>
                    <Badge className="bg-primary/10 text-primary">3 Lenders</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Capital One Auto</p>
                        <p className="text-sm text-muted-foreground">5.49% APR • 60 months</p>
                      </div>
                      <Badge variant="secondary" className="text-green-600">94% Match</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Wells Fargo Auto</p>
                        <p className="text-sm text-muted-foreground">6.25% APR • 60 months</p>
                      </div>
                      <Badge variant="secondary" className="text-green-600">89% Match</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Chase Auto Finance</p>
                        <p className="text-sm text-muted-foreground">6.99% APR • 60 months</p>
                      </div>
                      <Badge variant="secondary" className="text-yellow-600">72% Match</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Qualifi AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop filling out multiple loan applications. Our AI does the heavy lifting for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">One Form for All Lenders</h3>
                <p className="text-sm text-muted-foreground">
                  No more filling 5 different applications
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Lender Pre-Approval</h3>
                <p className="text-sm text-muted-foreground">
                  Soft pulls + profile matching
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">AI Auto Loan Copilot</h3>
                <p className="text-sm text-muted-foreground">
                  We guide you through the best options
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Negotiate + Apply</h3>
                <p className="text-sm text-muted-foreground">
                  Auto-fill apps, save time
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Choose the Best Deal</h3>
                <p className="text-sm text-muted-foreground">
                  See all offers, not just dealer push
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Traditional vs. Qualifi AI
            </h2>
            <p className="text-xl text-muted-foreground">
              See why thousands of borrowers choose us over traditional loan shopping
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold text-muted-foreground">Traditional</th>
                      <th className="text-center p-6 font-semibold text-primary bg-primary/5">Qualifi AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-6 font-medium">Fill multiple forms</td>
                      <td className="text-center p-6">
                        <X className="w-5 h-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-primary/5">
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 font-medium">Soft credit pull only</td>
                      <td className="text-center p-6">
                        <X className="w-5 h-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-primary/5">
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 font-medium">All offers in one view</td>
                      <td className="text-center p-6">
                        <X className="w-5 h-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-primary/5">
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 font-medium">AI guidance</td>
                      <td className="text-center p-6">
                        <X className="w-5 h-5 text-destructive mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-primary/5">
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Free for users</td>
                      <td className="text-center p-6">
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-primary/5">
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Always Free for Borrowers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                You pay nothing. Lenders pay us a small fee (10–30 bps) when you take a loan through us — that's it. No hidden costs. No obligations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Zero Fees
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                No Hard Pulls
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <X className="w-4 h-4 mr-2" />
                Cancel Anytime
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* AI Copilot Teaser */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Want to Chat with Your Loan Copilot?
              </h2>
              <p className="text-xl text-muted-foreground">
                Our agentic AI helps you understand loan options, match your profile, and even auto-fill your application.
              </p>
              <Link to="/auth">
                <Button size="lg">
                  Try the AI Copilot
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Hi! I found 3 pre-approved offers for you. Based on your income and credit, I recommend Capital One at 5.49% APR. Would you like to see the details?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Yes, show me the Capital One offer and how it compares to the others.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Perfect! Here's your comparison table. Capital One saves you $847 over 5 years compared to your next best option...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Be the First to Try Qualifi AI
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the waitlist and get early access to AI-powered auto loan approvals.
              </p>
            </div>
            <form onSubmit={handleWaitlistSignup} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="whitespace-nowrap">
                  Join the Waitlist
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No spam. No obligations.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">Q</span>
                </div>
                <span className="text-xl font-bold text-foreground">Qualifi AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered auto loan matching for smarter borrowing decisions.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <div className="space-y-2">
                <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link to="/auth" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Qualifi AI. All rights reserved. Qualifi AI is not a lender. We help users compare options.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;