import { Check } from 'lucide-react';

const FormStepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-6 mb-8">
      <div className="flex items-center justify-between relative">
        {/* Connecting Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
        
        {/* Active Line Progress */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 rounded-full z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 transition-all duration-300
                  ${isActive ? 'bg-white border-blue-600 text-blue-600 shadow-lg shadow-blue-200 scale-110' : ''}
                  ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' : ''}
                  ${!isActive && !isCompleted ? 'bg-white border-slate-200 text-slate-400' : ''}
                `}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
              </div>
              <span 
                className={`absolute top-12 text-xs font-semibold whitespace-nowrap hidden sm:block
                  ${isActive ? 'text-blue-700' : ''}
                  ${isCompleted ? 'text-slate-700' : ''}
                  ${!isActive && !isCompleted ? 'text-slate-400' : ''}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormStepper;
