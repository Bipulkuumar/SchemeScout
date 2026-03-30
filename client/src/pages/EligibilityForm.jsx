import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Briefcase, IndianRupee, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import FormStepper from '../components/FormStepper';

const EligibilityForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    state: '',
    occupation: '',
    income: '',
    category: ''
  });

  const steps = [
    { label: "Personal" },
    { label: "Location & Prep" },
    { label: "Financials" }
  ];

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      navigate('/results', { state: { formData } });
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepValid = () => {
    if (currentStep === 0) return formData.age && formData.gender;
    if (currentStep === 1) return formData.state && formData.occupation;
    if (currentStep === 2) return formData.income && formData.category;
    return false;
  };

  const states = [
    "Andhra Pradesh", "Assam", "Bihar", "Delhi", "Gujarat", "Haryana", 
    "Karnataka", "Kerala", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal"
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Your <span className="text-blue-600">Eligibility</span>
          </h1>
          <p className="text-slate-600 mt-3 text-lg">
            Let us find schemes tailored to your exact profile.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-100 relative overflow-hidden">
          
          <FormStepper steps={steps} currentStep={currentStep} />

          <div className="mt-8 relative z-10 transition-all duration-300">
            {/* Step 1: Personal */}
            {currentStep === 0 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-8">
                  <User className="text-blue-500" /> Basic Details
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    min="1"
                    max="120"
                    placeholder="E.g., 25"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Gender</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Male', 'Female', 'Transgender', 'Other'].map((gender) => (
                      <button
                        key={gender}
                        onClick={() => setFormData({ ...formData, gender })}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                          formData.gender === gender 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50'
                        }`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location & Occupation */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-8">
                  <MapPin className="text-blue-500" /> Location & Work
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">State of Residence</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white"
                  >
                    <option value="" disabled>Select your state</option>
                    {states.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Current Occupation
                  </label>
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white"
                  >
                    <option value="" disabled>Select occupation type</option>
                    <option value="Student">Student</option>
                    <option value="Farmer">Farmer / Agriculture</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Self-Employed">Self-Employed / Business</option>
                    <option value="Salaried">Salaried Employee</option>
                    <option value="Homemaker">Homemaker</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Financials */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-8">
                  <IndianRupee className="text-blue-500" /> Financials & Category
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Household Income</label>
                  <select
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white"
                  >
                    <option value="" disabled>Select income bracket</option>
                    <option value="below_1L">Below ₹1,00,000</option>
                    <option value="1L_to_2.5L">₹1,00,001 - ₹2,50,000</option>
                    <option value="2.5L_to_5L">₹2,50,001 - ₹5,00,000</option>
                    <option value="5L_to_8L">₹5,00,001 - ₹8,00,000</option>
                    <option value="above_8L">Above ₹8,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center justify-between">
                    <span>Social Category</span>
                    <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" title="Used strictly to match affirmative action schemes." />
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['General', 'OBC', 'SC', 'ST'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                          formData.category === cat 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-2 font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2"
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {currentStep === steps.length - 1 ? 'Find Schemes' : 'Continue'} 
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
