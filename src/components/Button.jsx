import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg hover:shadow-indigo-500/25 active:shadow-sm',
  secondary: 'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-slate-300 shadow-sm',
  accent: 'bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg hover:shadow-amber-500/25',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-600',
  danger: 'bg-rose-500 hover:bg-rose-600 text-white shadow-md hover:shadow-lg hover:shadow-rose-500/25',
  success: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg hover:shadow-emerald-500/25',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-8 py-3.5 text-base rounded-xl gap-2',
  xl: 'px-10 py-4 text-lg rounded-2xl gap-2.5',
};

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  iconRight: IconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  return (
    <motion.button
      ref={ref}
      type={type}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-semibold
        transition-all duration-200 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
          <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
        </svg>
      ) : Icon ? (
        <Icon className="w-4 h-4 flex-shrink-0" />
      ) : null}
      {children}
      {IconRight && !loading && <IconRight className="w-4 h-4 flex-shrink-0" />}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;
