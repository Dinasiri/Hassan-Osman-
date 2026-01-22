
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Hassan is reliable, accurate, and always delivers tasks on time.",
    author: "Business Owner",
    role: "International Client"
  },
  {
    text: "Excellent communication and professional work. Highly recommended.",
    author: "Marketing Manager",
    role: "E-commerce Agency"
  },
  {
    text: "Very dependable virtual assistant with strong attention to detail.",
    author: "Project Lead",
    role: "Consultancy Firm"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">What Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm relative border border-blue-100">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-100" />
              <p className="text-slate-700 italic mb-8 relative z-10 text-lg">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
