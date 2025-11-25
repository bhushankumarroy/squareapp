import React from 'react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  const teamMembers = [
    { name: 'Sarah Jenkins', role: 'CEO & Founder', img: 'https://picsum.photos/400/400?random=10' },
    { name: 'David Chen', role: 'Creative Director', img: 'https://picsum.photos/400/400?random=11' },
    { name: 'Marcus Johnson', role: 'Lead Developer', img: 'https://picsum.photos/400/400?random=12' },
    { name: 'Emily Davis', role: 'Marketing Head', img: 'https://picsum.photos/400/400?random=13' },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <PageHeader 
        title="About Us" 
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
      />

      {/* Intro Text */}
      <section className="py-16 bg-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              We are a collective of thinkers, makers, and problem solvers dedicated to building digital products that matter.
            </p>
         </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-30 group-hover:opacity-50 blur-lg transition duration-1000"></div>
              <img
                className="relative rounded-2xl shadow-2xl w-full"
                src="https://picsum.photos/800/600?random=14"
                alt="Office working environment"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-purple-600 tracking-widest uppercase mb-2">Our Vision</h2>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Building Tomorrow's Digital Landscape</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Nova, our mission is simple: to empower businesses with the tools and strategies they need to thrive in the digital age. We believe that great design is not just about aesthetics—it's about functionality, user experience, and driving real business results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2010, we've grown from a small design studio to a full-service digital agency. Our passion for innovation keeps us constantly exploring new technologies and methodologies to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Meet The Team</h2>
            <p className="mt-4 text-slate-500 text-lg">The brilliant minds behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-72">
                   <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={member.img} alt={member.name} />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center border border-slate-100 border-t-0 rounded-b-xl relative bg-white">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium mt-1 uppercase text-xs tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;