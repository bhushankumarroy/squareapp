import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { MapPin, Navigation } from 'lucide-react';

const SiteMaps: React.FC = () => {
  const { hash } = useLocation();

  // Handle auto-scrolling to hash section on load or hash change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const locations = [
    {
      id: 'buddha-city-rajgir',
      title: 'Buddha City Rajgir',
      address: 'Rajgir, Nalanda, Bihar',
      description: 'A serene township located near the historic city of Rajgir, offering peaceful living amidst nature and heritage.',
      mapSrc: "https://maps.google.com/maps?q=Rajgir+Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 'big-dream-home',
      title: 'Big Dream Home',
      address: 'Patna, Bihar',
      description: 'Our flagship residential project designed for modern families, featuring state-of-the-art amenities and connectivity.',
      mapSrc: "https://maps.google.com/maps?q=Patna+Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 'khusrupur',
      title: 'Khusrupur Project',
      address: 'Khusrupur, Bihar',
      description: 'Strategic land investments in the developing industrial belt of Khusrupur, promising high returns.',
      mapSrc: "https://maps.google.com/maps?q=Khusrupur+Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 'shikarpur',
      title: 'Shikarpur Enclave',
      address: 'Shikarpur, Bihar',
      description: 'Affordable plots with excellent road connectivity, ideal for long-term investment and residential construction.',
      mapSrc: "https://maps.google.com/maps?q=Shikarpur+Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-poppins">
      <PageHeader 
        title="Project Locations" 
        bgImage="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Us on the Map</h2>
        <p className="text-lg text-slate-600">
           Explore the exact locations of our ongoing and upcoming projects. We choose prime locations to ensure the best value for your investment.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {locations.map((loc, index) => (
          <div 
            key={loc.id} 
            id={loc.id}
            className={`flex flex-col lg:flex-row gap-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Map Section */}
            <div className="w-full lg:w-2/3 h-[400px] bg-slate-100 relative group">
               <iframe 
                 src={loc.mapSrc} 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title={loc.title}
                 className="grayscale group-hover:grayscale-0 transition-all duration-700"
               ></iframe>
               <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50"></div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
               <div className="inline-flex items-center gap-2 text-purple-600 font-bold uppercase tracking-wider text-xs mb-3">
                  <MapPin className="w-4 h-4" /> Project Location
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.title}</h3>
               <p className="text-slate-500 font-medium mb-6 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-slate-400" /> {loc.address}
               </p>
               <p className="text-slate-600 leading-relaxed mb-8">
                  {loc.description}
               </p>
               <a 
                 href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-purple-500/30"
               >
                 Get Directions <Navigation className="ml-2 w-4 h-4" />
               </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteMaps;
