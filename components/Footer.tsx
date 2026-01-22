
import React from 'react';
import { Mail, MessageCircle, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white tracking-tight">Hassan Osman</span>
              <span className="text-blue-500 font-medium">| Virtual Assistant</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Helping businesses and individuals stay organized and productive through professional remote assistance.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:hassan.osman@example.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/254724465463" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 Hassan Osman | All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
