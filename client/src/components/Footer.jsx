import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl text-white tracking-tight">Scheme<span className="text-blue-500">Scout</span></span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Find Government Schemes You Actually Qualify For. Empowering citizens through accessible information and smart matching.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/check-eligibility" className="text-sm hover:text-blue-400 transition-colors">Check Eligibility</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>support@schemescout.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>1800-123-4567 (Toll Free)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>KCC Institutes, Greater Noida, Uttar Pradesh, 201306</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SchemeScout. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Citizens of India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
