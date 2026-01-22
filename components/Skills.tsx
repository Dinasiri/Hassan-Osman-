
import React from 'react';

const skillList = [
  'Data Entry',
  'Customer Support',
  'Microsoft Office',
  'Google Workspace',
  'Internet Research',
  'Time Management',
  'Communication Skills',
  'Problem Solving'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-bold">Skills & Proficiencies</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-800 hover:border-blue-500 transition-all cursor-default group"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mb-4 group-hover:scale-150 transition-transform"></div>
              <span className="font-semibold text-lg">{skill}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-blue-600 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Ready to optimize your workflow?</h4>
            <p className="text-blue-100">I'm just one message away from helping you scale.</p>
          </div>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
