import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Filter, ArrowLeft, RefreshCw, Layers } from 'lucide-react';
import SchemeCard from '../components/SchemeCard';
import Skeleton from '../components/Skeleton';
import { mockSchemes } from '../services/Data';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  const [loading, setLoading] = useState(true);
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    // If no data, redirect back
    if (!formData) {
      navigate('/check-eligibility');
      return;
    }

    // Simulate API match delay
    const fetchMatches = () => {
      setLoading(true);
      setTimeout(() => {
        // Very basic mock filtering (in reality handled by backend)
        const matched = mockSchemes.filter(s => {
          if (formData.occupation === 'Student' && s.tags.includes('Education')) return true;
          if (formData.gender === 'Female' && s.tags.includes('Women')) return true;
          if (formData.category === 'SC' || formData.category === 'ST') return true;
          if (formData.occupation === 'Farmer' && s.tags.includes('Agriculture')) return true;
          return s.tags.includes('General Welfare');
        });

        // Ensure we always show something in prototype
        setSchemes(matched.length > 0 ? matched : mockSchemes.slice(0, 3));
        setLoading(false);
      }, 2000);
    };

    fetchMatches();
  }, [formData, navigate]);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
          <div>
            <Link to="/check-eligibility" className="text-slate-500 hover:text-blue-600 flex items-center gap-2 font-medium mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Edit My Profile
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">
              Your Eligible <span className="text-blue-600">Schemes</span>
            </h1>
            {!loading && (
              <p className="text-slate-600 mt-2">
                We found <span className="font-bold text-slate-800">{schemes.length}</span> schemes matching your criteria.
              </p>
            )}
          </div>

          {!loading && schemes.length > 0 && (
            <div className="mt-6 md:mt-0 flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Sort by: Deadline
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : schemes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <Layers className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No exact matches found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              We couldn't find active schemes exactly matching this specific combination right now. Check back later or adjust your details.
            </p>
            <Link
              to="/check-eligibility"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              <RefreshCw className="w-4 h-4" /> Retry with different details
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Results;
