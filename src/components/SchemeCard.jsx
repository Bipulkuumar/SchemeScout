import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Bookmark, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

const tagColorMap = {
  'Agriculture': 'success',
  'Education': 'primary',
  'Scholarship': 'info',
  'Women': 'warning',
  'Housing': 'danger',
  'Employment': 'info',
  'Financial Assistance': 'warning',
  'General Welfare': 'default',
  'SC/ST': 'primary',
};

const SchemeCard = ({ scheme, index = 0, matchPercent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all duration-300 flex flex-col h-full overflow-hidden hover-lift"
    >
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 flex flex-col flex-grow">
        {/* Header: Tags + Bookmark */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-wrap gap-1.5">
            {scheme.tags.map((tag, idx) => (
              <Badge key={idx} color={tagColorMap[tag] || 'default'} size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          <button className="p-1.5 rounded-lg text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 transition-colors" aria-label="Bookmark scheme">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
          {scheme.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm mb-5 flex-grow line-clamp-2 leading-relaxed">
          {scheme.description}
        </p>

        {/* Match indicator (if provided) */}
        {matchPercent !== undefined && (
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-indigo-50 border border-emerald-100/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Eligibility Match
              </span>
              <span className="text-sm font-bold text-emerald-700">{matchPercent}%</span>
            </div>
            <div className="h-1.5 bg-emerald-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${matchPercent}%` }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Deadline */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-5 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <Calendar className="w-4 h-4 text-amber-500" />
          <span className="font-medium text-slate-600">Deadline:</span>
          <span className="text-slate-800 font-semibold">{scheme.deadline}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Link
            to={`/scheme/${scheme.id}`}
            className="flex-1 text-center py-2.5 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
          >
            View Details
          </Link>
          <Link
            to={`/scheme/${scheme.id}`}
            className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-1.5 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200 active:scale-[0.98]"
          >
            Apply <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SchemeCard;
