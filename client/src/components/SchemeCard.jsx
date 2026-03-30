import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchemeCard = ({ scheme }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
      
      {/* Decorative gradient blur at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div className="flex flex-wrap gap-2 mb-4">
        {scheme.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
        {scheme.title}
      </h3>
      
      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
        {scheme.description}
      </p>

      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
        <Calendar className="w-4 h-4 text-orange-500" />
        <span className="font-medium">Deadline:</span>
        <span className="text-slate-800">{scheme.deadline}</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <Link 
          to={`/scheme/${scheme.id}`} 
          className="flex-1 text-center py-2.5 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors"
        >
          View Details
        </Link>
        <button className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95">
          Apply Now <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SchemeCard;
