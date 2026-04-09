import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Check Eligibility', path: '/check-eligibility' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', path: '#' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Cookie Policy', path: '#' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top wave separator */}
      <div className="bg-slate-950 pt-16 pb-10">
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Scheme<span className="text-indigo-400">Scout</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Empowering Indian citizens to discover government schemes they truly qualify for. Smart matching, verified data, zero hassle.
              </p>
              <div className="flex gap-3">
                {[
                  { label: 'Twitter', icon: '𝕏' },
                  { label: 'GitHub', icon: '⊡' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-indigo-500/20 border border-slate-700/50 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all duration-200 text-xs font-bold"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.path} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-slate-400">support@schemescout.in</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-slate-400">1800-123-4567 (Toll Free)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-slate-400">KCC Institutes, Greater Noida, UP 201306</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} SchemeScout. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for Citizens of India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
