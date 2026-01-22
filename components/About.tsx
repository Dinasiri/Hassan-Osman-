
import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-blue-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/1/800/800" 
                alt="Hassan Osman - Working" 
                className="w-full h-full object-cover"
              />
            </div>
            <a 
              href="#contact"
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block hover:bg-blue-700 hover:scale-105 transition-all active:scale-95 cursor-pointer z-10"
            >
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm font-medium opacity-90">Work Accuracy</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-75">Click to Hire</p>
            </a>
          </div>

          <div>
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">About Me</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Your Professional Partner in Productivity
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              My name is Hassan Osman, a professional Virtual Assistant with strong skills in data entry, customer support, online research, email management, and administrative support.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              I am reliable, honest, fast-learning, and focused on accuracy and meeting deadlines. Currently, I am pursuing my degree in **Mathematics and Physics** at **Mount Kenya University (MKU)** through DIBEL distance learning, which allows me to maintain a flexible and committed remote work schedule.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">My Goal</h4>
                  <p className="text-slate-600">To help clients stay organized, reduce workload, and significantly increase daily productivity.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Education</h4>
                  <p className="text-slate-600">BSc Mathematics & Physics - Mount Kenya University (DIBEL)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Core Focus</h4>
                  <p className="text-slate-600">Accuracy, reliability, and clear communication in every task.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
