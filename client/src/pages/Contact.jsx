import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about a scheme? Need technical support? Our team is here to help you navigate your benefits.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-600 mb-2">For general inquiries</p>
                <a href="mailto:support@schemescout.in" className="text-blue-600 font-semibold hover:underline">
                  support@schemescout.in
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600 mb-2">Mon-Fri from 9am to 6pm</p>
                <a href="tel:18001234567" className="text-green-600 font-semibold hover:underline">
                  1800-123-4567
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Office</h3>
                <p className="text-slate-600 leading-relaxed">
                  KCC Institutes, Greater Noida<br />
                  Noida, Uttar Pradesh, 201306
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Bug Report</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
