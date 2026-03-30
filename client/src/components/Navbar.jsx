import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <ShieldCheck className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-xl text-slate-800 tracking-tight">Scheme<span className="text-blue-600">Scout</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.path) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/check-eligibility"
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95"
            >
              Check Eligibility
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-200">
          <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/check-eligibility"
              className="block w-full text-center mt-4 px-3 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
