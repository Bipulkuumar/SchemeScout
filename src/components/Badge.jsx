const colorMap = {
  default: 'bg-slate-100 text-slate-600 border-slate-200',
  primary: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger: 'bg-rose-50 text-rose-700 border-rose-200',
  info: 'bg-sky-50 text-sky-700 border-sky-200',
};

const sizeMap = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

const Badge = ({ 
  children, 
  color = 'default', 
  size = 'md',
  icon: Icon,
  dot = false,
  className = '' 
}) => {
  return (
    <span className={`
      inline-flex items-center gap-1.5 font-semibold rounded-full border
      ${colorMap[color]}
      ${sizeMap[size]}
      ${className}
    `}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${
          color === 'success' ? 'bg-emerald-500' :
          color === 'warning' ? 'bg-amber-500' :
          color === 'danger' ? 'bg-rose-500' :
          color === 'primary' ? 'bg-indigo-500' :
          color === 'info' ? 'bg-sky-500' :
          'bg-slate-400'
        }`} />
      )}
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
};

export default Badge;
