import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      preTitle: "Welcome to Square Acres Infra",
      title: "Premium Residential",
      highlight: "Plots for Sale",
      description: "Discover prime locations in Patna. Legally verified, road-connected, and ready for immediate possession. Start building your dream home today.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      preTitle: "End-to-End Construction",
      title: "We Build Your",
      highlight: "Dream Home",
      description: "From architectural planning to key handover, we provide world-class construction services with zero compromise on quality and timelines.",
      image: "https://images.unsplash.com/photo-1600596542815-e32870e10cf2?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      preTitle: "Smart Investment",
      title: "Secure Your",
      highlight: "Future Wealth",
      description: "Invest in the rapidly developing corridors of Bihar. High ROI, secure transactions, and complete transparency in every deal.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[750px] overflow-hidden bg-slate-900 text-white group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 overflow-hidden">
              <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                      index === currentSlide ? 'scale-110' : 'scale-100'
                  }`}
              />
              <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/80" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
            <div className="overflow-hidden">
                <span className={`inline-block py-1.5 px-4 rounded-full bg-white/10 text-indigo-200 font-bold text-xs md:text-sm mb-6 uppercase tracking-[0.2em] backdrop-blur-md border border-white/20 transition-all duration-1000 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                {slide.preTitle}
                </span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight transition-all duration-1000 delay-100 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {slide.title} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 filter drop-shadow-lg">
                {slide.highlight}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-medium leading-relaxed text-shadow transition-all duration-1000 delay-200 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {slide.description}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-5 transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-primary to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/40 transform hover:-translate-y-1"
              >
                Enquire Now
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-4 sm:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
              onClick={prevSlide}
              className="pointer-events-auto p-4 rounded-full bg-black/30 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-md group hover:scale-110"
              aria-label="Previous slide"
          >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
              onClick={nextSlide}
              className="pointer-events-auto p-4 rounded-full bg-black/30 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all backdrop-blur-md group hover:scale-110"
              aria-label="Next slide"
          >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
          {slides.map((_, index) => (
              <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentSlide ? 'w-10 bg-primary' : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
              />
          ))}
      </div>
    </section>
  );
};

export default HeroSlider;