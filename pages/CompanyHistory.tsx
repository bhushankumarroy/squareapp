import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, Flag, TrendingUp, Building2, Target, Heart, Users, ShieldCheck, Home, CheckCircle } from 'lucide-react';

const CompanyHistory: React.FC = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Inception',
      description: 'Square Acres Infra Pvt. Ltd. was founded with a vision to revolutionize the real estate landscape in Bihar.',
      icon: Flag,
    },
    {
      year: '2014',
      title: 'First Major Project',
      description: 'Successfully delivered "Green Valley", a 50-acre residential township in Danapur, housing 200+ families.',
      icon: Building2,
    },
    {
      year: '2018',
      title: 'Expansion & Growth',
      description: 'Expanded operations to 3 new districts. Reached a milestone of 1000+ satisfied customers.',
      icon: TrendingUp,
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      description: 'Introduced online booking and transparency systems. Awarded "Most Trusted Real Estate Brand in Bihar".',
      icon: Calendar,
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Aiming to develop smart eco-townships and expanding our footprint to neighboring states.',
      icon: Flag,
    },
  ];

  return (
    <div className="bg-white min-h-screen font-poppins">
      <PageHeader 
        title="Our Journey & Vision" 
        bgImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80" 
      />

      {/* Main Content Sections with Animations */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            
            {/* Section 1: Expertise */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
                <div className="lg:w-1/2 animate-fade-in-left opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                            alt="Real Estate Expertise" 
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] transform transition-transform duration-700 group-hover:scale-105"
                        />
                         <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <Target className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Focus</p>
                                <p className="text-sm font-bold text-slate-900">Comprehensive Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 animate-fade-in-right opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 relative">
                        Comprehensive Real Estate Solutions
                        <span className="block h-1.5 w-20 bg-purple-600 mt-3 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        At <span className="font-bold text-slate-800">Square Acres Infra Private Limited</span>, we specialize in providing comprehensive real estate solutions for buying and selling plots of land. With a focus on residential, commercial, and investment properties, we offer our clients unmatched expertise and guidance in navigating the land market.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Whether you’re looking to purchase the perfect plot to build your dream home or sell your land at the best value, we are here to help you every step of the way.
                    </p>
                </div>
            </div>

            {/* Section 2: Integrity & Network (Reversed Layout) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
                <div className="lg:w-1/2 animate-fade-in-right opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                            alt="Integrity and Teamwork" 
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <ShieldCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Core Value</p>
                                <p className="text-sm font-bold text-slate-900">100% Transparency</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 animate-fade-in-left opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 relative">
                        Integrity & Extensive Network
                        <span className="block h-1.5 w-20 bg-blue-600 mt-3 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        At Square Acres Infra Private Limited, integrity, transparency, and client satisfaction are at the core of everything we do. We believe in building lasting relationships based on trust.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed flex items-start gap-3">
                        <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <span>With an extensive network of landowners, buyers, and investors, we are able to connect you with the best opportunities in the market. Our goal is to make the process of buying and selling plots as efficient and hassle-free as possible.</span>
                    </p>
                </div>
            </div>

            {/* Section 3: Design & Passion */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
                 <div className="lg:w-1/2 animate-fade-in-left opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl transform -rotate-2 transition-transform group-hover:rotate-0"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                            alt="Dream Home Design" 
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] transform transition-transform duration-700 group-hover:scale-105"
                        />
                         <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <Home className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Quality</p>
                                <p className="text-sm font-bold text-slate-900">Uncompromised</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 animate-fade-in-right opacity-0" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 relative">
                        Crafting Masterpieces
                        <span className="block h-1.5 w-20 bg-emerald-600 mt-3 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Every house or the living space shall be a masterpiece and uniquely designed as per the client's preference and our understanding of it. We even provide construction consultancy because we know best what our client needs.
                    </p>
                    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mb-6">
                        <p className="text-emerald-800 font-medium flex items-start gap-2">
                             <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                             We ensure that the materials used in the project should be top notch and we do not compromise with the quality of the materials.
                        </p>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
                        "At Square Acres Infra Private Limited, we understand that having a place of our own is everyone’s dream and helping our clients fulfill their dream is our passion. So thereby we welcome you all to join hands and support us in our initiative."
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Key Milestones</span>
               <h2 className="text-3xl font-bold text-slate-900 mt-2">A Legacy of Excellence</h2>
            </div>

            <div className="relative border-l-4 border-indigo-100 ml-4 md:ml-1/2 space-y-12">
            {milestones.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                {/* Dot */}
                <div className="absolute top-0 left-[-1.3rem] w-10 h-10 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center z-10 shadow-md">
                    <item.icon className="w-4 h-4 text-indigo-600" />
                </div>

                <div className="md:flex items-center justify-between group">
                    <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                        <span className="text-5xl font-extrabold text-slate-200 group-hover:text-indigo-200 transition-colors duration-300">{item.year}</span>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-12">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1">
                        <span className="md:hidden text-4xl font-extrabold text-slate-200 mb-2 block">{item.year}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CompanyHistory;