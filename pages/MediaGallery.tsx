import React from 'react';
import PageHeader from '../components/PageHeader';
import { Newspaper, ExternalLink } from 'lucide-react';

const MediaGallery: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Square Acres Launches New Township in Bihta",
      source: "Dainik Bhaskar",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      snippet: "Square Acres Infra Pvt Ltd announces its ambitious 50-acre integrated township project..."
    },
    {
      id: 2,
      title: "Real Estate Boom in Patna: Expert Opinion",
      source: "Hindustan Times",
      date: "Jan 10, 2024",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      snippet: "Managing Director Mr. Amit Singh discusses the future of infrastructure development in Bihar."
    },
    {
      id: 3,
      title: "Award Ceremony Coverage",
      source: "Prabhat Khabar",
      date: "Dec 05, 2023",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80",
      snippet: "Square Acres receives the 'Most Trusted Developer' award at the annual summit."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Media Gallery" 
        bgImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-16 bg-white border-b border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Newspaper className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">In The News</h2>
            <p className="text-xl text-slate-500 font-light">
               Read about our latest announcements, press coverage, and industry insights.
            </p>
         </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Press Release
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                 <div className="flex justify-between items-center mb-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">{item.title}</h3>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.snippet}
                 </p>
                 <button className="mt-auto inline-flex items-center text-blue-600 font-bold text-sm hover:underline gap-2">
                    Read Full Article <ExternalLink className="w-4 h-4" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaGallery;