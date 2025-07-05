
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { mockLenders } from '@/data/mockLenders';
import { LenderMatchingEngine, MatchResult, UserProfile } from '@/utils/matchingEngine';
import MatchedLenderCard from '@/components/MatchedLenderCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Target, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const PersonalizedMatches = () => {
  const { user } = useAuth();
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProfileAndMatches();
    }
  }, [user]);

  const fetchUserProfileAndMatches = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user?.id)
        .eq('status', 'ready_for_matching')
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setLoading(false);
        return;
      }

      const profile: UserProfile = {
        user_id: data.user_id,
        avg_monthly_income: data.avg_monthly_income || 0,
        account_balance: data.account_balance || 0,
        employer: data.employer || '',
        residence_state: data.residence_state || '',
        loan_budget: data.loan_budget || 0,
        credit_score_estimate: data.credit_score_estimate || 'fair',
        employment_status: data.employment_status || '',
        connected_at: data.connected_at || ''
      };

      setUserProfile(profile);

      // Perform matching with available lenders
      const matchResults = LenderMatchingEngine.matchUserWithLenders(profile, mockLenders);
      setMatches(matchResults);

      console.log('Generated matches:', matchResults);
    } catch (error: any) {
      console.error('Error fetching profile and generating matches:', error);
      toast.error('Error loading personalized matches');
    } finally {
      setLoading(false);
    }
  };

  const handleContinueApplication = (match: MatchResult) => {
    // Log the selection for learning loop
    console.log('User selected lender:', match.lender_name);
    
    // In a real implementation, this would redirect to the lender's application
    toast.success(`Redirecting to ${match.lender_name} application...`);
    window.open(match.lender_data.source_url, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Finding your best matches...</span>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
            <CardTitle>Complete Your Profile</CardTitle>
          </div>
          <CardDescription>
            Connect your bank account to see personalized loan matches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            To see lenders that match your financial profile, please complete your profile setup.
          </p>
          <a 
            href="/profile" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Complete Profile
          </a>
        </CardContent>
      </Card>
    );
  }

  const eligibleMatches = matches.filter(m => m.match_status === '✅ Eligible');
  const partialMatches = matches.filter(m => m.match_status === '⚠️ Partial Match');
  const avgConfidence = matches.length > 0 ? 
    Math.round(matches.reduce((sum, m) => sum + m.confidence_score, 0) / matches.length) : 0;

  return (
    <div className="space-y-6">
      {/* Match Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Eligible Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{eligibleMatches.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Partial Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{partialMatches.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Avg Match Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{avgConfidence}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Match Results */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Personalized Matches</h2>
        <p className="text-gray-600 mb-6">
          Based on your financial profile: ${userProfile.avg_monthly_income.toLocaleString()}/month income, 
          ${userProfile.loan_budget.toLocaleString()} budget, {userProfile.credit_score_estimate} credit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <MatchedLenderCard
              key={match.lender_id}
              match={match}
              onContinueApplication={handleContinueApplication}
            />
          ))}
        </div>

        {matches.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No matches found</h3>
              <p className="text-gray-500">
                Try updating your profile or check back later for new lenders
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PersonalizedMatches;
