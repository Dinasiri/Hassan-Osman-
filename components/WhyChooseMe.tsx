
import React from 'react';
import { ShieldCheck, Zap, MessageSquare, Clock, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Zap />,
    title: 'Strong attention to detail',
    description: 'Accuracy is my top priority. I ensure every task is error-free.'
  },
  {
    icon: <Clock />,
    title: 'On-time delivery',
    description: 'Reliable and consistent. Deadlines are non-negotiable for me.'
  },
  {
    icon: <MessageSquare />,
    title: 'Professional communication',
    description: 'Clear, concise, and professional updates on all projects.'
  },
  {
    icon: <ShieldCheck />,
    title: 'Confidential and reliable',
    description: 'Your data and business information are treated with strict privacy.'
  },
  {
    icon: <Users />,
    title: 'Client-focused service',
    description: 'My goal is your success. I adapt to your specific workflow.'
  }
];

const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Why Me?</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              A Dedicated Partner You Can Trust With Your Business
            </h3>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {/* Fix: Explicitly type the cloned element to allow the className property */}
                    {React.cloneElement(reason.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{reason.title}</h4>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl rotate-3 transform translate-x-4">
              <img 
                src="https://picsum.photos/id/20/800/1000" 
                alt="Detailed work" 
                className="w-full h-full object-cover opacity-90 -rotate-3 scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
