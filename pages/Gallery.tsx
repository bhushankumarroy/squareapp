import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Image, ZoomIn, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// Define Photo Type
interface Photo {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
}

const Gallery: React.FC = () => {
  // 1. Generate Dummy Data (24 items)
  const allPhotos: Photo[] = Array.from({ length: 24 }).map((_, i) => {
    const categories = ['Residential', 'Commercial', 'Site Visit', 'Handover'];
    const locations = ['Bihta, Patna', 'Danapur, Patna', 'Phulwari Sharif', 'Saguna More'];
    return {
      id: i,
      title: `Project View ${i + 1}`,
      category: categories[i % 4],
      location: locations[i % 4],
      image: `https://picsum.photos/800/600?random=${i + 100}`,
    };
  });

  // 2. State Management
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. Filtering Logic
  const filteredPhotos = activeCategory === 'All' 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === activeCategory);

  // 4. Pagination Logic
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  // 5. Lightbox Logic
  const openLightbox = (index: number) => {
    // Find the true index in the filtered array to ensure navigation works correctly contextually
    // However, since we are clicking an item from 'currentPhotos', we need to find its index in 'filteredPhotos'
    // Actually, simpler to pass the photo object or ID, but let's stick to index within filtered list for navigation
    const photoId = currentPhotos[index].id;
    const globalIndex = filteredPhotos.findIndex(p => p.id === photoId);
    setCurrentImageIndex(globalIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const categories = ['All', 'Residential', 'Commercial', 'Site Visit', 'Handover'];

  return (
    <div className="bg-white min-h-screen font-poppins">
      {/* Breadcrumb Header */}
      <PageHeader 
        title="Photo Gallery" 
        bgImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1920&q=80" 
      />

      {/* Intro Section */}
      <section className="py-16 bg-white border-b border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full text-purple-600 mb-4 animate-bounce">
                <Image className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Capturing Milestones</h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
               Take a visual tour through our premium developments, construction updates, and moments of joy with our customers.
            </p>
         </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px]">
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPhotos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 mx-auto hover:bg-purple-600 transition-colors">
                        <ZoomIn className="w-6 h-6" />
                     </div>
                     <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-3">
                        {photo.category}
                     </span>
                     <h3 className="text-xl font-bold text-white mb-1">{photo.title}</h3>
                     <p className="text-slate-300 text-sm flex items-center justify-center gap-1">
                       <MapPin className="w-3 h-3" /> {photo.location}
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 text-lg">
             No photos found in this category.
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border border-slate-200 transition-all ${
                currentPage === 1 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-sm'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                    currentPage === i + 1
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-110'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border border-slate-200 transition-all ${
                currentPage === totalPages 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-sm'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={prevLightboxImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white hover:bg-purple-600 hover:text-white transition-all z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
             <img 
               src={filteredPhotos[currentImageIndex].image} 
               alt={filteredPhotos[currentImageIndex].title} 
               className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
             />
             <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{filteredPhotos[currentImageIndex].title}</h3>
                <p className="text-slate-400 flex items-center justify-center gap-2">
                   <span className="px-2 py-0.5 bg-purple-600/30 border border-purple-500/50 rounded text-purple-200 text-xs uppercase tracking-wider">
                      {filteredPhotos[currentImageIndex].category}
                   </span>
                   <span className="flex items-center gap-1 text-sm"><MapPin className="w-3 h-3" /> {filteredPhotos[currentImageIndex].location}</span>
                </p>
                <p className="text-slate-500 text-xs mt-3">
                   Image {currentImageIndex + 1} of {filteredPhotos.length}
                </p>
             </div>
          </div>

          <button 
            onClick={nextLightboxImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white hover:bg-purple-600 hover:text-white transition-all z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Gallery;