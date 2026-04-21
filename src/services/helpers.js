/**
 * Calculate an eligibility match percentage based on user profile vs scheme.
 * This is a simplified scoring engine for the prototype.
 */
export const calculateEligibility = (formData, scheme) => {
  let score = 0;
  let maxScore = 0;

  // Occupation match
  maxScore += 30;
  if (formData.occupation === 'Farmer' && scheme.tags.includes('Agriculture')) score += 30;
  else if (formData.occupation === 'Student' && scheme.tags.includes('Education')) score += 30;
  else if (scheme.tags.includes('General Welfare')) score += 20;
  else score += 10;

  // Gender match
  maxScore += 20;
  if (formData.gender === 'Female' && scheme.tags.includes('Women')) score += 20;
  else if (!scheme.tags.includes('Women')) score += 15;
  else score += 5;

  // Category match
  maxScore += 25;
  if ((formData.category === 'SC' || formData.category === 'ST') && scheme.tags.includes('SC/ST')) score += 25;
  else if (!scheme.tags.includes('SC/ST')) score += 20;
  else score += 5;

  // Income match (simplified)
  maxScore += 25;
  const lowIncome = ['below_1L', '1L_to_2.5L'];
  if (lowIncome.includes(formData.income)) score += 25;
  else if (formData.income === '2.5L_to_5L') score += 20;
  else score += 12;

  return Math.min(100, Math.round((score / maxScore) * 100));
};

/**
 * Sort schemes by eligibility score
 */
export const rankSchemes = (schemes, formData) => {
  return schemes
    .map(scheme => ({
      ...scheme,
      matchPercent: calculateEligibility(formData, scheme),
    }))
    .sort((a, b) => b.matchPercent - a.matchPercent);
};
