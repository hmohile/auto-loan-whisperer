
import { Lender } from '@/types/lender';

export interface UserProfile {
  user_id: string;
  avg_monthly_income: number;
  account_balance: number;
  employer: string;
  residence_state: string;
  loan_budget: number;
  credit_score_estimate: 'excellent' | 'good' | 'fair' | 'poor';
  employment_status: string;
  connected_at: string;
}

export interface MatchResult {
  lender_name: string;
  lender_id: string;
  match_status: '✅ Eligible' | '⚠️ Partial Match' | '❌ Ineligible';
  confidence_score: number;
  estimated_apr: string;
  term: string;
  monthly_payment: string;
  reason: string;
  lender_data: Lender;
}

export class LenderMatchingEngine {
  static analyzeMatch(userProfile: UserProfile, lender: Lender): MatchResult {
    const matchFactors = {
      income: false,
      state: false,
      loanAmount: false,
      creditScore: false
    };

    let confidence = 0;
    let reasons: string[] = [];

    // Check minimum income requirement
    const minIncomeStr = lender.eligibility_criteria.min_income;
    const minIncome = parseFloat(minIncomeStr.replace(/[^0-9.]/g, '')) || 0;
    
    if (userProfile.avg_monthly_income >= minIncome) {
      matchFactors.income = true;
      confidence += 30;
      reasons.push('meets income requirement');
    } else {
      reasons.push(`income below minimum ${minIncomeStr}`);
    }

    // Check state restriction
    const stateRestriction = lender.eligibility_criteria.location_restriction;
    if (stateRestriction === 'All states' || 
        stateRestriction.toLowerCase().includes(userProfile.residence_state.toLowerCase()) ||
        stateRestriction === 'Nationwide') {
      matchFactors.state = true;
      confidence += 25;
      reasons.push('location eligible');
    } else {
      reasons.push('state restrictions may apply');
    }

    // Check loan amount
    const minLoanStr = lender.rate_card.min_loan_amount;
    const minLoan = parseFloat(minLoanStr.replace(/[^0-9.]/g, '')) || 0;
    
    if (userProfile.loan_budget >= minLoan) {
      matchFactors.loanAmount = true;
      confidence += 25;
      reasons.push('loan amount acceptable');
    } else {
      reasons.push(`loan amount below minimum ${minLoanStr}`);
    }

    // Check credit score compatibility
    const creditTiers = lender.rate_card.credit_tiers;
    const userCreditScore = userProfile.credit_score_estimate;
    
    let estimatedApr = '';
    if (userCreditScore === 'excellent' && creditTiers['Excellent']) {
      matchFactors.creditScore = true;
      confidence += 20;
      estimatedApr = creditTiers['Excellent'];
      reasons.push('excellent credit match');
    } else if (userCreditScore === 'good' && (creditTiers['Good'] || creditTiers['Excellent'])) {
      matchFactors.creditScore = true;
      confidence += 15;
      estimatedApr = creditTiers['Good'] || creditTiers['Excellent'];
      reasons.push('good credit match');
    } else if (userCreditScore === 'fair' && (creditTiers['Fair'] || creditTiers['Good'])) {
      matchFactors.creditScore = true;
      confidence += 10;
      estimatedApr = creditTiers['Fair'] || creditTiers['Good'];
      reasons.push('fair credit considered');
    } else {
      // Use the APR range as fallback
      estimatedApr = lender.rate_card.apr_range.split(' - ')[1] || lender.rate_card.apr_range;
      reasons.push('credit review needed');
    }

    // Determine match status
    let matchStatus: MatchResult['match_status'];
    const eligibleFactors = Object.values(matchFactors).filter(Boolean).length;
    
    if (eligibleFactors >= 3) {
      matchStatus = '✅ Eligible';
    } else if (eligibleFactors >= 2) {
      matchStatus = '⚠️ Partial Match';
    } else {
      matchStatus = '❌ Ineligible';
    }

    // Calculate monthly payment estimate
    const loanAmount = userProfile.loan_budget;
    const apr = parseFloat(estimatedApr.replace('%', '')) / 100;
    const term = parseInt(lender.rate_card.terms[0]) || 60;
    const monthlyRate = apr / 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);

    return {
      lender_name: lender.lender_name,
      lender_id: lender.id,
      match_status: matchStatus,
      confidence_score: Math.min(confidence, 100),
      estimated_apr: estimatedApr,
      term: `${term} months`,
      monthly_payment: `$${monthlyPayment.toFixed(0)}`,
      reason: reasons.join(', '),
      lender_data: lender
    };
  }

  static rankMatches(matches: MatchResult[]): MatchResult[] {
    return matches.sort((a, b) => {
      // First sort by match status priority
      const statusPriority = {
        '✅ Eligible': 3,
        '⚠️ Partial Match': 2,
        '❌ Ineligible': 1
      };
      
      const statusDiff = statusPriority[b.match_status] - statusPriority[a.match_status];
      if (statusDiff !== 0) return statusDiff;
      
      // Then by confidence score
      return b.confidence_score - a.confidence_score;
    });
  }

  static matchUserWithLenders(userProfile: UserProfile, lenders: Lender[]): MatchResult[] {
    const matches = lenders.map(lender => this.analyzeMatch(userProfile, lender));
    return this.rankMatches(matches);
  }
}
