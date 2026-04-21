import { motion } from 'framer-motion';

const MatchMeter = ({ percent = 0, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const getColor = (p) => {
    if (p >= 75) return { stroke: '#10b981', bg: '#ecfdf5', text: '#065f46' };
    if (p >= 50) return { stroke: '#f59e0b', bg: '#fffbeb', text: '#92400e' };
    return { stroke: '#f43f5e', bg: '#fff1f2', text: '#9f1239' };
  };

  const colors = getColor(percent);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors.stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-2xl font-extrabold"
            style={{ color: colors.text }}
          >
            {percent}%
          </motion.span>
          <span className="text-xs font-medium text-slate-400">Match</span>
        </div>
      </div>
    </div>
  );
};

export default MatchMeter;
