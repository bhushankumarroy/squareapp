import React from 'react';
import PageHeader from '../components/PageHeader';
import { Briefcase, GraduationCap, Building } from 'lucide-react';

const OtherVentures: React.FC = () => {
  const ventures = [
    {
      title: "Square Education Trust",
      description: "Empowering the next generation through affordable and high-quality education. We operate two public schools in rural Patna.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Square Hospitality",
      description: "Redefining luxury and comfort. Our upcoming boutique hotel in Bodh Gaya aims to serve tourists with world-class amenities.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Agro Ventures",
      description: "Investing in sustainable agriculture and organic farming practices to promote healthy living and support local farmers.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Other Ventures" 
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Diversified Portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             Beyond infrastructure, we are committed to contributing to society through education, hospitality, and agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {ventures.map((venture, index) => (
             <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden relative">
                   <img 
                     src={venture.image} 
                     alt={venture.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                      <venture.icon className="w-5 h-5 text-indigo-600" />
                   </div>
                </div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{venture.title}</h3>
                   <p className="text-slate-600 leading-relaxed text-sm">
                      {venture.description}
                   </p>
                   <button className="mt-6 text-indigo-600 font-bold text-sm hover:underline">Learn More &rarr;</button>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default OtherVentures;