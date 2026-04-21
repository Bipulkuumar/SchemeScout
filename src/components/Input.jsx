import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  icon: Icon,
  helperText,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 rounded-xl border bg-white text-slate-800
            placeholder:text-slate-400
            transition-all duration-200
            focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none
            ${Icon ? 'pl-10' : ''}
            ${error 
              ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' 
              : 'border-slate-200 hover:border-slate-300'
            }
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-rose-500 font-medium">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-xs text-slate-400">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
