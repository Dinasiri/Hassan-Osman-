
import React from 'react';
import { 
  ClipboardCheck, 
  Database, 
  Headphones, 
  Search, 
  Mail, 
  FileText, 
  Share2 
} from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck />,
    title: 'Virtual Assistance & Admin Support',
    description: 'General administrative tasks to keep your business running smoothly.'
  },
  {
    icon: <Database />,
    title: 'Data Entry & Data Cleaning',
    description: 'Accurate and organized data management using Excel and Google Sheets.'
  },
  {
    icon: <Headphones />,
    title: 'Customer Support (Email & Chat)',
    description: 'Prompt and professional communication with your valuable clients.'
  },
  {
    icon: <Search />,
    title: 'Online Research & Data Collection',
    description: 'Deep-dive research and systematic data gathering for your projects.'
  },
  {
    icon: <Mail />,
    title: 'Email & Calendar Management',
    description: 'Inbox zero strategies and efficient scheduling to save your time.'
  },
  {
    icon: <FileText />,
    title: 'Document Formatting',
    description: 'Expert formatting in Word, Google Docs, and spreadsheet layouting.'
  },
  {
    icon: <Share2 />,
    title: 'Social Media Basic Support',
    description: 'Basic management and engagement for your social presence.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">What I Do</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Comprehensive VA Services</h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                {/* Fix: Explicitly type the cloned element to allow the className property */}
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
