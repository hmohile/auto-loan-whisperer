
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, DollarSign, Clock, FileText } from 'lucide-react';
import { Lender } from '@/types/lender';

interface LenderCardProps {
  lender: Lender;
  onViewDetails: (lender: Lender) => void;
}

const LenderCard = ({ lender, onViewDetails }: LenderCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-gray-900">
            {lender.lender_name}
          </CardTitle>
          <Badge className={getStatusColor(lender.status)}>
            {lender.status}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Calendar className="w-4 h-4 mr-1" />
          Updated: {lender.last_updated}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-sm font-medium">APR Range</p>
              <p className="text-lg font-bold text-green-600">{lender.rate_card.apr_range}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Terms</p>
              <p className="text-sm text-gray-600">
                {lender.rate_card.terms.join(', ')} months
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Min Loan: {lender.rate_card.min_loan_amount}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Vehicle Age: {lender.rate_card.vehicle_age_limit}</span>
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(lender.source_url, '_blank')}
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Visit Site
          </Button>
          <Button 
            onClick={() => onViewDetails(lender)}
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LenderCard;
