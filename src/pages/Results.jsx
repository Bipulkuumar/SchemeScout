import { useEffect, useState, useMemo } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Layers, RefreshCw } from 'lucide-react';
import SchemeCard from '../components/SchemeCard';
import Skeleton from '../components/Skeleton';
import Filters from '../components/Filters';
import EmptyPage from '../components/EmptyPage';
import MatchMeter from '../components/MatchMeter';
import PageWrapper from '../components/PageWrapper';
import { mockSchemes } from '../services/schemesData';
import { rankSchemes } from '../services/helpers';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  const [loading, setLoading] = useState(true);
  const [schemes, setSchemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    if (!formData) {
      navigate('/check-eligibility');
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      // Rank schemes by eligibility match
      const ranked = rankSchemes(mockSchemes, formData);
      setSchemes(ranked);
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [formData, navigate]);

  // Filtered + sorted list
  const displaySchemes = useMemo(() => {
    let result = [...schemes];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeFilters.length > 0) {
      result = result.filter(s =>
        s.tags.some(tag => activeFilters.includes(tag))
      );
    }

    // Sort
    if (sortBy === 'deadline') {
      result.sort((a, b) => {
        if (a.deadline === 'Ongoing') return 1;
        if (b.deadline === 'Ongoing') return -1;
        return new Date(a.deadline) - new Date(b.deadline);
      });
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    // relevance is default sort (by matchPercent, already sorted)

    return result;
  }, [schemes, searchQuery, activeFilters, sortBy]);

  // Average match percentage
  const avgMatch = useMemo(() => {
    if (schemes.length === 0) return 0;
    return Math.round(schemes.reduce((sum, s) => sum + (s.matchPercent || 0), 0) / schemes.length);
  }, [schemes]);

  return (
    <PageWrapper>
      <div className="bg-slate-50 min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-slate-200">
            <div className="flex-1">
              <Link
                to="/check-eligibility"
                className="text-slate-400 hover:text-indigo-600 flex items-center gap-2 font-medium mb-4 transition-colors w-max text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Edit My Profile
              </Link>
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
                Your Eligible <span className="gradient-text">Schemes</span>
              </h1>
              {!loading && (
                <p className="text-slate-500">
                  We found <span className="font-bold text-slate-800">{displaySchemes.length}</span> schemes matching your criteria.
                </p>
              )}
            </div>

            {/* Eligibility meter */}
            {!loading && schemes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 lg:mt-0"
              >
                <MatchMeter percent={avgMatch} size={100} strokeWidth={8} />
              </motion.div>
            )}
          </div>

          {/* Search + Filters */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search schemes..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-sm font-medium outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/10 transition-all placeholder:text-slate-400"
                />
              </div>
              <Filters
                onFilter={setActiveFilters}
                onSort={setSortBy}
                activeFilters={activeFilters}
                activeSort={sortBy}
              />
            </motion.div>
          )}

          {/* Results grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <Skeleton key={i} />)}
            </div>
          ) : displaySchemes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displaySchemes.map((scheme, i) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  index={i}
                  matchPercent={scheme.matchPercent}
                />
              ))}
            </div>
          ) : (
            <EmptyPage
              icon={Layers}
              title="No schemes found"
              description="We couldn't find schemes matching your current filters. Try adjusting your search or filters."
              actionLabel="Retry with different details"
              actionIcon={RefreshCw}
              onAction={() => navigate('/check-eligibility')}
            />
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Results;
