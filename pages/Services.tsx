import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Key, TrendingUp, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Residential Real Estate',
      description: 'Find your dream home with our premium plots and residential projects located in the most sought-after areas of Bihar.',
      icon: <Home className="w-8 h-8 text-white" />,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Commercial Real Estate',
      description: 'Strategic commercial spaces and land for businesses looking to expand their footprint in prime business districts.',
      icon: <Building2 className="w-8 h-8 text-white" />,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Property Management',
      description: 'End-to-end property management solutions including maintenance, tenant management, and legal compliance.',
      icon: <Key className="w-8 h-8 text-white" />,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'Real Estate Investment',
      description: 'Expert advice and high-ROI investment opportunities in the rapidly developing infrastructure sector.',
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      title: 'On Site Assistance',
      description: 'Professional site visits, surveys, and on-ground support to help you make informed decisions.',
      icon: <MapPin className="w-8 h-8 text-white" />,
      color: 'bg-sky-500',
      gradient: 'from-sky-500 to-sky-600'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageHeader 
        title="Our Services" 
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
      />

      {/* Intro Text */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Real Estate Solutions</h2>
         <p className="max-w-2xl mx-auto text-xl text-slate-500">
            We offer a full spectrum of real estate services tailored to meet your unique needs. From buying your first home to managing commercial assets, we are here to help.
         </p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br ${service.gradient} transform group-hover:rotate-6 transition-transform duration-300 relative z-10`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">{service.description}</p>
              
              <div className="pt-6 border-t border-slate-100 relative z-10">
                <Link to="/contact" className="text-slate-900 font-bold text-sm hover:text-purple-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Enquire Now <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-24 bg-[#0f0a24] text-white relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-10 md:mb-0 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Looking for something specific?</h2>
            <p className="text-indigo-200 text-lg">We understand that every requirement is unique. Let's discuss your specific real estate needs and how we can assist you.</p>
          </div>
          <Link to="/contact" className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
            Get a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;