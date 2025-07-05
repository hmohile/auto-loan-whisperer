
export interface CreditTier {
  [key: string]: string;
}

export interface RateCard {
  apr_range: string;
  terms: string[];
  min_loan_amount: string;
  vehicle_age_limit: string;
  new_vs_used_diff: string;
  credit_tiers: CreditTier;
}

export interface EligibilityCriteria {
  min_income: string;
  employment_status: string;
  location_restriction: string;
  required_docs: string[];
}

export interface Lender {
  id: string;
  lender_name: string;
  source_url: string;
  last_updated: string;
  rate_card: RateCard;
  eligibility_criteria: EligibilityCriteria;
  status: 'active' | 'pending' | 'error';
}
