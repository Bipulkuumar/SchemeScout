import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Users, Sparkles, Globe, Award, TrendingUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '50,000+', label: 'Citizens Helped' },
    { icon: <Globe className="w-5 h-5" />, value: '28+', label: 'States Covered' },
    { icon: <Award className="w-5 h-5" />, value: '500+', label: 'Schemes Listed' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '98%', label: 'Satisfaction Rate' },
  ];

  const team = [
    { name: 'Bipul Kumar', role: 'Frontend Developer', color: 'from-indigo-400 to-purple-500' },
    { name: 'Divyam Kumar', role: 'UI/UX Designer', color: 'from-pink-400 to-rose-500' },
    { name: 'Deepanshu', role: 'Backend Engineer', color: 'from-emerald-400 to-teal-500' },
    { name: 'Ayush Raja', role: 'Data Analyst', color: 'from-amber-400 to-orange-500' },
  ];

  return (
    <PageWrapper>
      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} custom={0}>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 border border-indigo-100">
                <Sparkles className="w-3.5 h-3.5" /> Our Story
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5"
            >
              Our Mission at <span className="gradient-text">SchemeScout</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance"
            >
              Bridging the gap between government initiatives and the citizens who need them most.
            </motion.p>
          </motion.div>

          {/* The story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-lg space-y-4 mb-20"
          >
            <p>
              Every year, hundreds of welfare schemes are launched by Central and State Governments across India. Yet, <strong className="text-slate-800">millions of eligible citizens miss out</strong> simply due to lack of awareness or the complexity of eligibility criteria.
            </p>
            <p>
              SchemeScout was built to solve exactly this problem. We believe that access to government support should be <strong className="text-slate-800">straightforward, transparent, and hassle-free</strong> for every Indian citizen.
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl border border-rose-100/60 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                  <Target className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Problem</h3>
                <p className="text-slate-600 leading-relaxed">
                  Information is scattered across hundreds of departmental websites. Complex language and dense official documents make it nearly impossible for ordinary citizens to determine their eligibility.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100/60 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Solution</h3>
                <p className="text-slate-600 leading-relaxed">
                  A unified, intelligent platform. Answer a few questions about your background, and our engine instantly filters and maps you to the exact schemes you can apply for right now.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover-lift transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-indigo-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                The People Behind SchemeScout
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900">Meet Our Team</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover-lift transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{member.name}</h4>
                  <p className="text-xs text-slate-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Privacy section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Committed to Privacy & Integrity
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
                We do not store personal identification data. The information you provide is processed locally to find your matches. We are an independent facilitation platform, not officially affiliated with the Government of India.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
