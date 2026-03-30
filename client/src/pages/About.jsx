import { ShieldCheck, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Mission at <span className="text-blue-600">SchemeScout</span>
          </h1>
          <p className="text-xl text-slate-600">
            Bridging the gap between government initiatives and the citizens who need them the most.
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-slate-700 mb-16">
          <p className="lead text-lg">
            Every year, hundreds of welfare schemes are launched by the Central and State Governments of India. Yet, millions of eligible citizens miss out on their benefits simply due to lack of awareness or complexity in understanding the eligibility criteria.
          </p>
          <p>
            SchemeScout was built to solve exactly this problem. We believe that access to government support should be straightforward, transparent, and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">The Problem</h3>
            <p className="text-slate-600">
              Information is scattered across hundreds of different departmental websites. The language is often complex, and determining whether you actually qualify for a scheme requires reading through dense official documents.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <Heart className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Solution</h3>
            <p className="text-slate-600">
              A unified, smart engine. By simply answering a few demographic and socioeconomic questions, our platform instantly filters and maps you to the exact schemes you can apply for right now.
            </p>
          </div>
        </div>

        <div className="text-center p-10 bg-slate-900 rounded-3xl text-white">
          <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Committed to Privacy & Integrity</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We do not store your personal identification data. The information you provide in the eligibility questionnaire is processed locally to find your matches. We are an independent facilitation platform and not officially affiliated with the Government of India.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
