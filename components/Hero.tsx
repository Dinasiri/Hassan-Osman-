
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-400 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-300 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 hover:bg-blue-200 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Available for New Projects</span>
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Reliable Virtual Assistant Helping Businesses <span className="text-blue-600">Save Time and Grow</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Organized, detail-oriented, and committed to delivering high-quality remote support tailored to your unique business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 active:scale-95"
            >
              Hire Me <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 text-lg font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center hover:border-blue-200 active:scale-95"
            >
              View Services
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 grayscale opacity-70">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl text-blue-500">✓</span> Reliable
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl text-blue-500">✓</span> Accurate
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl text-blue-500">✓</span> Efficient
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
