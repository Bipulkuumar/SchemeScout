import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSchemeById } from '../services/Data';
import { ArrowLeft, ExternalLink, ShieldAlert, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import Loader from '../components/Loader';

const SchemeDetails = () => {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setScheme(getSchemeById(id));
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) return <div className="min-h-screen pt-32"><Loader message="Loading official details..." /></div>;

  if (!scheme) return (
    <div className="min-h-screen pt-32 text-center">
      <h2 className="text-2xl font-bold text-slate-800">Scheme not found</h2>
      <Link to="/results" className="text-blue-600 underline mt-4 inline-block">Go back</Link>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">

      {/* Header Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/results" className="text-slate-400 hover:text-white flex items-center gap-2 font-medium mb-6 transition-colors w-max">
            <ArrowLeft className="w-4 h-4" /> Back to matches
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {scheme.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800 text-blue-400 text-xs font-semibold rounded-full border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {scheme.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            {scheme.description}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8 relative items-start">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-6 h-6" /> Key Benefits
              </h2>
              <ul className="space-y-4">
                {scheme.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed">{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldAlert className="text-orange-500 w-6 h-6" /> Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                {scheme.criteria.map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-500 w-6 h-6" /> How to Apply
              </h2>
              <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
                {scheme.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 w-7 h-7 bg-blue-50 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs shadow-sm shadow-blue-100">
                      {idx + 1}
                    </div>
                    <p className="text-slate-700 font-medium pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6">

              <div className="pb-6 border-b border-slate-100 mb-6">
                <span className="block text-sm font-semibold text-slate-500 mb-1">Application Deadline</span>
                <span className="text-xl font-bold text-slate-900">{scheme.deadline}</span>
              </div>

              <a
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 mb-4"
              >
                Apply on Official Portal <ExternalLink className="w-5 h-5" />
              </a>

              <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3" /> You will be redirected to an external government site.
              </p>
            </div>

            <div className="mt-6 bg-blue-50 rounded-2xl border border-blue-100 p-6 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-1">Keep Documents Ready</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Have your Aadhaar Card, PAN, and Income Certificates handy before starting the application.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SchemeDetails;
