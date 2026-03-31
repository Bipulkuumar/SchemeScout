export const mockSchemes = [
  {
    id: 1,
    title: 'PM Kisan Samman Nidhi',
    description: 'Financial support of ₹6,000 per year to all landholding farmer families.',
    tags: ['Agriculture', 'Financial Assistance'],
    deadline: '2026-12-31',
    benefits: ['₹6,000 per year paid in three equal installments', 'Direct benefit transfer to bank accounts', 'Reduces dependence on moneylenders'],
    criteria: ['Must be a landholding farmer family', 'Must possess valid Aadhaar card', 'Should have a bank account'],
    steps: ['Visit the official PM Kisan portal', 'Click on New Farmer Registration', 'Enter Aadhaar number and captcha', 'Fill in the required details', 'Submit the form and save the reference number'],
    link: 'https://pmkisan.gov.in/'
  },
  {
    id: 2,
    title: 'Post Matric Scholarship',
    description: 'Scholarship for students belonging to Scheduled Castes/Scheduled Tribes to study at post-matriculation level.',
    tags: ['Education', 'Scholarship', 'SC/ST'],
    deadline: '2026-10-15',
    benefits: ['Covers maintenance allowance', 'Reimbursement of compulsory non-refundable fees', 'Study tour charges', 'Thesis typing/printing charges'],
    criteria: ['Must belong to SC/ST category', 'Family income should not exceed ₹2.5 Lakh per annum', 'Must be studying at post-matriculation level'],
    steps: ['Register on the National Scholarship Portal', 'Fill out the application form', 'Upload the necessary documents like caste certificate and income proof', 'Submit the application'],
    link: 'https://scholarships.gov.in/'
  },
  {
    id: 3,
    title: 'Beti Bachao Beti Padhao',
    description: 'Aims to generate awareness and improve the efficiency of welfare services intended for girls.',
    tags: ['Women', 'Education'],
    deadline: 'Ongoing',
    benefits: ['Promotes girls education', 'Financial incentives for girl children', 'Improves child sex ratio'],
    criteria: ['Family with a girl child', 'Girl child under the age of 10 for Sukanya Samriddhi account opening'],
    steps: ['Open a Sukanya Samriddhi Account in a post office or authorized bank', 'Provide birth certificate of the girl child', 'Provide identity and address proof of the parent'],
    link: 'https://wcd.nic.in/bbbp-schemes'
  },
  {
    id: 4,
    title: 'Pradhan Mantri Awas Yojana',
    description: 'Housing for all scheme providing affordable housing to the urban poor.',
    tags: ['Housing', 'General Welfare'],
    deadline: '2026-11-30',
    benefits: ['Interest subsidy on home loans', 'Financial assistance for house construction', 'Slum rehabilitation'],
    criteria: ['Must not own a pucca house anywhere in India', 'Annual household income criteria as per EWS/LIG/MIG category', 'At least one adult female member must be the co-owner of the property'],
    steps: ['Visit the official PMAY portal', 'Select "Citizen Assessment"', 'Enter Aadhaar details', 'Fill the application form', 'Save the assessment ID for tracking'],
    link: 'https://pmaymis.gov.in/'
  },
  {
    id: 5,
    title: 'National Rural Employment Guarantee Act',
    description: 'Guarantees 100 days of wage employment in a financial year to a rural household.',
    tags: ['Employment', 'General Welfare'],
    deadline: 'Ongoing',
    benefits: ['100 days of guaranteed wage employment', 'Unemployment allowance if work is not provided within 15 days', 'Equal wages for men and women'],
    criteria: ['Must be a citizen of India residing in a rural area', 'Must be 18 years of age or older', 'Must be willing to do unskilled manual work'],
    steps: ['Apply for a Job Card at the local Gram Panchayat', 'Submit photograph and identification details', 'Receive the Job Card within 15 days', 'Demand work when needed'],
    link: 'https://nrega.nic.in/'
  }
];

export const getSchemeById = (id) => {
  return mockSchemes.find(scheme => scheme.id.toString() === id?.toString());
};
