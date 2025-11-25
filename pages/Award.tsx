import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award as AwardIcon, Star, Trophy } from 'lucide-react';

const Award: React.FC = () => {
  const awards = [
    {
      title: "Real Estate Excellence Award 2024",
      organization: "Bihar Infrastructure Summit",
      description: "Awarded for outstanding contribution to residential development in Patna.",
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Most Trusted Developer 2023",
      organization: "Consumer Choice Awards",
      description: "Recognized for transparency, ethical practices, and customer satisfaction.",
      icon: AwardIcon,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Best Township Project 2022",
      organization: "Urban Development Forum",
      description: "For the 'Green Valley' project, showcasing sustainable and community-centric living.",
      icon: Star,
      color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Safety First Award",
        organization: "National Safety Council",
        description: "For implementing best-in-class safety standards at construction sites.",
        icon: AwardIcon,
        color: "bg-green-100 text-green-600"
      },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Awards & Recognition" 
        bgImage="https://images.unsplash.com/photo-1628329623724-5d5568113426?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             Our commitment to excellence has been recognized by industry leaders and our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {awards.map((item, index) => (
             <div key={index} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className={`p-8 md:w-1/3 flex items-center justify-center ${item.color} bg-opacity-50`}>
                   <item.icon className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                   <span className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4 block">{item.organization}</span>
                   <p className="text-slate-600">{item.description}</p>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Award;