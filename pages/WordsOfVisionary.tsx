import React from 'react';
import PageHeader from '../components/PageHeader';
import { Quote } from 'lucide-react';

const WordsOfVisionary: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Words of Visionary" 
        bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
          {/* Decorative Quote Mark */}
          <div className="absolute top-0 right-0 opacity-[0.05] transform translate-x-1/4 -translate-y-1/4">
             <Quote className="w-96 h-96 text-indigo-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            {/* Image Section */}
            <div className="md:col-span-5">
              <div className="relative group">
                 <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
                 <img 
                   src="https://squareacresinfra.com/wp-content/uploads/2024/12/abhisek-kumar.jpg" 
                   alt="Mr. Abhishek Kumar" 
                   className="relative rounded-2xl shadow-lg w-full object-cover h-[500px]"
                 />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-7 space-y-8">
              <div>
                 <h4 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">Message from the Director</h4>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Building a Better Tomorrow</h2>
              </div>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                 <p>
                   "Square acres infra Private Limited is founded on a vision which seeks to usher in a better tomorrow by providing people with improved quality of life and living standard. Recognizing the basic needs to approach the issue of planned development and growth across the Residential, Commercial and Retail segments of the Real Estate Industry."
                 </p>
                 <p>
                   "We at Square acres infra Private Limited believe that the key element of this transformation is change – a change from within for outside world."
                 </p>
                 <p>
                   "Guided by the profound thought expressed by the Father of the Nation, each of us must be the change we want to see in the world, we have endeavoured to commit ourselves to provide comprehensive solutions to all our valued customers across the Real Estate Industry, solutions that combine high-end technologies, designs and aesthetics and to meet customer aspirations and expectations through superior standard of performance and service."
                 </p>
                 <p>
                   "With this philosophy, the Group is confident to establish a national leadership position in all areas of business. Keeping business growth apart, the Group is also intensely committed to play a key role in discharging its social obligations by adhering to specified norms of legal, environmental and ethical practices. The aim for Square Acres Infra as Group is to be professional and responsible corporate entity, which positively transforms the quality of life of society at large."
                 </p>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-slate-900">Mr. Abhishek Kumar</h3>
                 <p className="text-slate-500">Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordsOfVisionary;