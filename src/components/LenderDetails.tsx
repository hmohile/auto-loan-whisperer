
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, DollarSign, Clock, FileText, Users, MapPin, CheckCircle } from 'lucide-react';
import { Lender } from '@/types/lender';

interface LenderDetailsProps {
  lender: Lender | null;
  isOpen: boolean;
  onClose: () => void;
}

const LenderDetails = ({ lender, isOpen, onClose }: LenderDetailsProps) => {
  if (!lender) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            {lender.lender_name}
            <Badge className={lender.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
              {lender.status}
            </Badge>
          </DialogTitle>
          <p className="text-sm text-gray-500">
            Last updated: {lender.last_updated} | 
            <a 
              href={lender.source_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-blue-600 hover:underline inline-flex items-center"
            >
              Source <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Rate Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Rate Card
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">APR Range</p>
                  <p className="text-2xl font-bold text-green-600">{lender.rate_card.apr_range}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Min Loan Amount</p>
                  <p className="text-lg font-semibold">{lender.rate_card.min_loan_amount}</p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Available Terms</p>
                <div className="flex flex-wrap gap-2">
                  {lender.rate_card.terms.map((term) => (
                    <Badge key={term} variant="secondary">
                      {term} months
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">Vehicle Age Limit</p>
                <p className="text-sm text-gray-600">{lender.rate_card.vehicle_age_limit}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">New vs Used Rates</p>
                <p className="text-sm text-gray-600">
                  {lender.rate_card.new_vs_used_diff === 'Yes' ? 'Different rates apply' : 'Same rates for both'}
                </p>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Credit Tier Rates</p>
                <div className="space-y-2">
                  {Object.entries(lender.rate_card.credit_tiers).map(([tier, rate]) => (
                    <div key={tier} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">{tier}</span>
                      <span className="text-sm font-bold text-green-600">{rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligibility Criteria */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Minimum Income</p>
                    <p className="text-sm text-gray-600">{lender.eligibility_criteria.min_income}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Employment Status</p>
                    <p className="text-sm text-gray-600">{lender.eligibility_criteria.employment_status}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Location Restriction</p>
                    <p className="text-sm text-gray-600">{lender.eligibility_criteria.location_restriction}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Required Documents
                  </p>
                  <ul className="space-y-1">
                    {lender.eligibility_criteria.required_docs.map((doc, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LenderDetails;
