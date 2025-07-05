
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Building, DollarSign, User, MapPin, Briefcase } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface BankConnectionProps {
  onComplete: () => void;
}

const BankConnection = ({ onComplete }: BankConnectionProps) => {
  const { user } = useAuth();
  const [step, setStep] = useState<'consent' | 'connect' | 'manual'>('consent');
  const [loading, setLoading] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    bank_name: '',
    account_balance: '',
    avg_monthly_income: '',
    monthly_expenses: '',
    employer: '',
    employment_status: '',
    residence_state: '',
    loan_budget: '',
    credit_score_estimate: ''
  });

  const handleConsentContinue = () => {
    if (consentGiven) {
      setStep('connect');
    }
  };

  const handlePlaidConnect = () => {
    // Simulate Plaid connection
    toast.info('Plaid integration would be implemented here. Proceeding with manual entry for demo.');
    setStep('manual');
  };

  const handleMXConnect = () => {
    // Simulate MX connection
    toast.info('MX integration would be implemented here. Proceeding with manual entry for demo.');
    setStep('manual');
  };

  const handleManualEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('user_profiles')
        .insert({
          user_id: user.id,
          bank_name: formData.bank_name,
          account_balance: parseFloat(formData.account_balance) || null,
          avg_monthly_income: parseFloat(formData.avg_monthly_income) || null,
          monthly_expenses: parseFloat(formData.monthly_expenses) || null,
          employer: formData.employer,
          employment_status: formData.employment_status,
          residence_state: formData.residence_state,
          loan_budget: parseFloat(formData.loan_budget) || null,
          credit_score_estimate: formData.credit_score_estimate,
          connection_method: 'manual',
          data_source: 'user_input',
          status: 'ready_for_matching',
          consent_given: true
        });

      if (error) throw error;

      toast.success('Profile created successfully! Ready for loan matching.');
      onComplete();
    } catch (error: any) {
      toast.error('Error saving profile: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (step === 'consent') {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-6 h-6 text-blue-600" />
            <CardTitle>Privacy & Consent</CardTitle>
          </div>
          <CardDescription>
            Your financial data security is our top priority
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">How we protect your data:</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Bank-grade 256-bit encryption</li>
              <li>• Read-only access to your accounts</li>
              <li>• No account credentials stored</li>
              <li>• SOC 2 Type II compliant</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Data Usage Agreement</h3>
            <p className="text-sm text-gray-600">
              By connecting your bank account, you consent to share your financial information 
              solely for the purpose of pre-qualifying for auto loans. We will use this data to:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Match you with relevant lenders</li>
              <li>• Calculate loan pre-approval amounts</li>
              <li>• Verify income and employment status</li>
              <li>• Estimate your credit profile</li>
            </ul>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="consent" 
              checked={consentGiven}
              onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
            />
            <Label htmlFor="consent" className="text-sm">
              I agree to share my financial information solely for auto loan pre-qualification purposes
            </Label>
          </div>

          <Button 
            onClick={handleConsentContinue} 
            disabled={!consentGiven}
            className="w-full"
          >
            Continue to Bank Connection
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (step === 'connect') {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Connect Your Bank Account</CardTitle>
          <CardDescription>
            Choose your preferred secure connection method
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              We use industry-standard encryption via Plaid and MX. Your login credentials are never stored.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4">
            <Button 
              onClick={handlePlaidConnect}
              variant="outline" 
              className="p-6 h-auto flex items-center gap-4"
            >
              <Building className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold">Connect with Plaid</div>
                <div className="text-sm text-gray-500">Trusted by millions, supports 11,000+ banks</div>
              </div>
            </Button>

            <Button 
              onClick={handleMXConnect}
              variant="outline" 
              className="p-6 h-auto flex items-center gap-4"
            >
              <Building className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <div className="font-semibold">Connect with MX</div>
                <div className="text-sm text-gray-500">Secure alternative, supports major banks</div>
              </div>
            </Button>

            <Button 
              onClick={() => setStep('manual')}
              variant="ghost" 
              className="text-gray-600"
            >
              Enter information manually instead
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Complete Your Financial Profile</CardTitle>
        <CardDescription>
          Help us match you with the best auto loan offers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleManualEntry} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bank_name">Bank Name</Label>
              <Input
                id="bank_name"
                placeholder="e.g., Chase, Bank of America"
                value={formData.bank_name}
                onChange={(e) => setFormData({...formData, bank_name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="account_balance">Account Balance ($)</Label>
              <Input
                id="account_balance"
                type="number"
                placeholder="5000"
                value={formData.account_balance}
                onChange={(e) => setFormData({...formData, account_balance: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="avg_monthly_income">Monthly Income ($)</Label>
              <Input
                id="avg_monthly_income"
                type="number"
                placeholder="4500"
                value={formData.avg_monthly_income}
                onChange={(e) => setFormData({...formData, avg_monthly_income: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monthly_expenses">Monthly Expenses ($)</Label>
              <Input
                id="monthly_expenses"
                type="number"
                placeholder="2800"
                value={formData.monthly_expenses}
                onChange={(e) => setFormData({...formData, monthly_expenses: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employer">Employer</Label>
              <Input
                id="employer"
                placeholder="Company Name"
                value={formData.employer}
                onChange={(e) => setFormData({...formData, employer: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="employment_status">Employment Status</Label>
              <Select 
                value={formData.employment_status} 
                onValueChange={(value) => setFormData({...formData, employment_status: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employed">Employed</SelectItem>
                  <SelectItem value="self_employed">Self-employed</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="residence_state">State</Label>
              <Input
                id="residence_state"
                placeholder="e.g., California"
                value={formData.residence_state}
                onChange={(e) => setFormData({...formData, residence_state: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="loan_budget">Vehicle Budget ($)</Label>
              <Input
                id="loan_budget"
                type="number"
                placeholder="25000"
                value={formData.loan_budget}
                onChange={(e) => setFormData({...formData, loan_budget: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="credit_score_estimate">Credit Score Estimate</Label>
            <Select 
              value={formData.credit_score_estimate} 
              onValueChange={(value) => setFormData({...formData, credit_score_estimate: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">Excellent (750+)</SelectItem>
                <SelectItem value="good">Good (670-749)</SelectItem>
                <SelectItem value="fair">Fair (580-669)</SelectItem>
                <SelectItem value="poor">Poor (Below 580)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Saving Profile...' : 'Complete Profile & Find Loans'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BankConnection;
