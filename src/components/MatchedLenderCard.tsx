
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { MatchResult } from '@/utils/matchingEngine';

interface MatchedLenderCardProps {
  match: MatchResult;
  onContinueApplication: (match: MatchResult) => void;
}

const MatchedLenderCard = ({ match, onContinueApplication }: MatchedLenderCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '✅ Eligible': return 'bg-green-100 text-green-800';
      case '⚠️ Partial Match': return 'bg-yellow-100 text-yellow-800';
      case '❌ Ineligible': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-gray-900">
            {match.lender_name}
          </CardTitle>
          <Badge className={getStatusColor(match.match_status)}>
            {match.match_status}
          </Badge>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-1 text-blue-600" />
            <span className={`text-sm font-medium ${getConfidenceColor(match.confidence_score)}`}>
              {match.confidence_score}% Match
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-sm font-medium">Estimated APR</p>
              <p className="text-lg font-bold text-green-600">{match.estimated_apr}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Term</p>
              <p className="text-sm text-gray-600">{match.term}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-900">Est. Monthly Payment</span>
            <span className="text-xl font-bold text-blue-900">{match.monthly_payment}</span>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p className="font-medium mb-1">Match Reason:</p>
          <p>{match.reason}</p>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(match.lender_data.source_url, '_blank')}
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Visit Site
          </Button>
          <Button 
            onClick={() => onContinueApplication(match)}
            className="flex-1"
            disabled={match.match_status === '❌ Ineligible'}
          >
            Continue Application
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchedLenderCard;
