import React from 'react';
import PageHeader from '../components/PageHeader';
import { Video, PlayCircle } from 'lucide-react';

const VideoGallery: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "Project Walkthrough: Green Valley",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Customer Testimonial: The Singh Family",
      thumbnail: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80",
      duration: "2:10"
    },
    {
      id: 3,
      title: "Construction Update: Jan 2024",
      thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      duration: "5:30"
    },
    {
      id: 4,
      title: "Square Acres Annual Meet 2023",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      duration: "10:15"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Video Gallery" 
        bgImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-16 bg-white border-b border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full text-red-600 mb-4">
                <Video className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Watch Our Story</h2>
            <p className="text-xl text-slate-500 font-light">
               Explore project walkthroughs, customer stories, and event highlights.
            </p>
         </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <div key={video.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                 <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                 
                 {/* Play Button */}
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <PlayCircle className="w-8 h-8 text-white fill-white" />
                    </div>
                 </div>

                 <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                 </div>
              </div>
              
              <div className="p-6">
                 <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;