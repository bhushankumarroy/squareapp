import React from 'react';
import PageHeader from '../components/PageHeader';
import { Linkedin, Twitter, Mail, Quote } from 'lucide-react';

const CoreManagement: React.FC = () => {
  const team = [
    {
      name: "Mr. Abhishek Kumar",
      role: "Director",
      image: "https://squareacresinfra.com/wp-content/uploads/2024/12/abhisek-kumar.jpg",
      bio: "Square acres infra Private Limited is founded on a vision which seeks to usher in a better tomorrow by providing people with improved quality of life and living standard. Under his leadership, the company aims to establish a national leadership position in all areas of business while adhering to specified norms of legal, environmental and ethical practices."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-poppins">
      <PageHeader 
        title="Our Core Management" 
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             Driven by passion and expertise, our leaders guide Square Acres Infra towards excellence and innovation.
          </p>
        </div>

        <div className="flex justify-center">
           {team.map((member, index) => (
             <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-300 max-w-4xl w-full flex flex-col md:flex-row">
                
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden h-96 md:h-auto">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                     style={{ objectPosition: 'top' }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/10"></div>
                </div>
                
                {/* Content Section */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                   <Quote className="absolute top-8 right-8 text-slate-100 w-20 h-20 -z-0" />
                   
                   <div className="relative z-10">
                       <h3 className="text-3xl font-bold text-slate-900 mb-1">{member.name}</h3>
                       <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                          {member.role}
                       </div>
                       
                       <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light italic">
                          "{member.bio}"
                       </p>
                       
                       <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                          <span className="text-sm font-bold text-slate-400 uppercase tracking-wide mr-2">Connect:</span>
                          <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                              <Linkedin className="w-5 h-5" />
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300">
                              <Twitter className="w-5 h-5" />
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300">
                              <Mail className="w-5 h-5" />
                          </a>
                       </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default CoreManagement;