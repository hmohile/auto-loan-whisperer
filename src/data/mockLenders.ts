
import { Lender } from '@/types/lender';

export const mockLenders: Lender[] = [
  {
    id: '1',
    lender_name: 'Capital One Auto Finance',
    source_url: 'https://www.capitalone.com/cars/financing/',
    last_updated: '2025-01-05',
    status: 'active',
    rate_card: {
      apr_range: '4.95% - 13.99%',
      terms: ['36', '48', '60', '72', '84'],
      min_loan_amount: '$4,000',
      vehicle_age_limit: 'up to 12 years old',
      new_vs_used_diff: 'Yes',
      credit_tiers: {
        'Excellent (720+)': '4.95%',
        'Good (660-719)': '7.49%',
        'Fair (620-659)': '10.99%',
        'Poor (<620)': '13.99%'
      }
    },
    eligibility_criteria: {
      min_income: '$1,800/month',
      employment_status: 'Stable employment required',
      location_restriction: 'Available in all 50 states',
      required_docs: ['Proof of income', 'Vehicle details', 'Driver\'s license', 'Insurance information']
    }
  },
  {
    id: '2',
    lender_name: 'Bank of America Auto Loans',
    source_url: 'https://www.bankofamerica.com/auto-loans/',
    last_updated: '2025-01-05',
    status: 'active',
    rate_card: {
      apr_range: '5.49% - 14.79%',
      terms: ['36', '48', '60', '72'],
      min_loan_amount: '$7,500',
      vehicle_age_limit: 'up to 10 years old',
      new_vs_used_diff: 'Yes',
      credit_tiers: {
        'Excellent (720+)': '5.49%',
        'Good (660-719)': '8.99%',
        'Fair (620-659)': '11.49%',
        'Poor (<620)': '14.79%'
      }
    },
    eligibility_criteria: {
      min_income: '$2,000/month',
      employment_status: 'Stable full-time job preferred',
      location_restriction: 'Must reside in approved states',
      required_docs: ['Proof of income', 'Vehicle details', 'Driver\'s license', 'Bank statements']
    }
  },
  {
    id: '3',
    lender_name: 'Chase Auto Loans',
    source_url: 'https://www.chase.com/personal/auto-loans',
    last_updated: '2025-01-05',
    status: 'active',
    rate_card: {
      apr_range: '5.99% - 15.49%',
      terms: ['36', '48', '60', '72', '84'],
      min_loan_amount: '$4,000',
      vehicle_age_limit: 'up to 15 years old',
      new_vs_used_diff: 'Yes',
      credit_tiers: {
        'Excellent (720+)': '5.99%',
        'Good (660-719)': '8.49%',
        'Fair (620-659)': '11.99%',
        'Poor (<620)': '15.49%'
      }
    },
    eligibility_criteria: {
      min_income: '$2,500/month',
      employment_status: 'Full-time employment required',
      location_restriction: 'Available nationwide',
      required_docs: ['Tax returns', 'Pay stubs', 'Vehicle information', 'Valid ID']
    }
  },
  {
    id: '4',
    lender_name: 'Wells Fargo Auto Loans',
    source_url: 'https://www.wellsfargo.com/auto-loans/',
    last_updated: '2025-01-05',
    status: 'active',
    rate_card: {
      apr_range: '6.24% - 16.99%',
      terms: ['36', '48', '60', '72'],
      min_loan_amount: '$5,000',
      vehicle_age_limit: 'up to 12 years old',
      new_vs_used_diff: 'Yes',
      credit_tiers: {
        'Excellent (720+)': '6.24%',
        'Good (660-719)': '9.49%',
        'Fair (620-659)': '12.99%',
        'Poor (<620)': '16.99%'
      }
    },
    eligibility_criteria: {
      min_income: '$2,200/month',
      employment_status: 'Steady employment history',
      location_restriction: 'Select states only',
      required_docs: ['Income verification', 'Vehicle specs', 'Credit application', 'Insurance proof']
    }
  },
  {
    id: '5',
    lender_name: 'Ally Auto',
    source_url: 'https://www.ally.com/auto/',
    last_updated: '2025-01-05',
    status: 'active',
    rate_card: {
      apr_range: '4.49% - 18.99%',
      terms: ['36', '48', '60', '72', '84'],
      min_loan_amount: '$3,000',
      vehicle_age_limit: 'up to 20 years old',
      new_vs_used_diff: 'Yes',
      credit_tiers: {
        'Excellent (720+)': '4.49%',
        'Good (660-719)': '7.99%',
        'Fair (620-659)': '12.49%',
        'Poor (<620)': '18.99%'
      }
    },
    eligibility_criteria: {
      min_income: '$1,500/month',
      employment_status: 'Any employment acceptable',
      location_restriction: 'Available in all states',
      required_docs: ['Pay stubs', 'Vehicle details', 'ID verification']
    }
  },
  {
    id: '6',
    lender_name: 'Navy Federal Credit Union',
    source_url: 'https://www.navyfederal.org/loans-cards/auto-loans/',
    last_updated: '2025-01-05',
    status: 'active',
    rate_card: {
      apr_range: '3.79% - 12.99%',
      terms: ['36', '48', '60', '72', '84'],
      min_loan_amount: '$5,000',
      vehicle_age_limit: 'up to 20 years old',
      new_vs_used_diff: 'Yes',
      credit_tiers: {
        'Excellent (720+)': '3.79%',
        'Good (660-719)': '5.99%',
        'Fair (620-659)': '8.49%',
        'Poor (<620)': '12.99%'
      }
    },
    eligibility_criteria: {
      min_income: '$1,800/month',
      employment_status: 'Military or eligible family member',
      location_restriction: 'Membership required',
      required_docs: ['Military ID', 'Income proof', 'Vehicle information']
    }
  }
];
