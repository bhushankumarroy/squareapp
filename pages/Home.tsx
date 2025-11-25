import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Building, ShieldCheck, Star, MonitorCheck, Gem, Rocket, Clock, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: ShieldCheck,
      title: "Safe Money Transaction",
      description: "No Advance. Contractor is paid only once the work is complete. Your investment is 100% secure with us.",
      color: "text-emerald-400",
      border: "group-hover:border-emerald-500/50",
      bg: "group-hover:bg-emerald-500/10",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: MonitorCheck,
      title: "Absolute Transparency",
      description: "Clear and Detailed Quotation. Online tracking of projects. We believe in keeping you informed at every step.",
      color: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      bg: "group-hover:bg-blue-500/10",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Gem,
      title: "Assured Quality Control",
      description: "470+ Quality (QASCON) Checks performed by team of experts. We don't just build structures; we build excellence.",
      color: "text-purple-400",
      border: "group-hover:border-purple-500/50",
      bg: "group-hover:bg-purple-500/10",
      gradient: "from-purple-600 to-violet-600"
    },
    {
      icon: Rocket,
      title: "Zero Delays",
      description: "Zero tolerance for delays. We value your time and commitment, ensuring timely delivery of every project.",
      color: "text-rose-400",
      border: "group-hover:border-rose-500/50",
      bg: "group-hover:bg-rose-500/10",
      gradient: "from-rose-600 to-pink-600"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Suresh Sinha",
      role: "Plot Owner, Danapur",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Buying land is usually stressful, but Square Acres made it transparent and easy. The 'No Advance' policy is a game changer in Patna's real estate market.",
      rating: 5
    },
    {
      id: 2,
      name: "Anjali Gupta",
      role: "IT Professional",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I was looking for a secure investment for my parents. The team's professionalism and the legal clarity of the project documents gave me total peace of mind.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Ravi Shankar",
      role: "Civil Surgeon",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      quote: "The location advantage suggested by their team has already yielded great appreciation. A trustworthy partner for anyone looking to build their dream home.",
      rating: 5
    },
    {
      id: 4,
      name: "Amit Verma",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "Professionalism at its best. The team guided me through every step, and the transaction was seamless. Highly recommended!",
      rating: 5
    },
    {
      id: 5,
      name: "Priya Singh",
      role: "Architect",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "As an architect, I appreciate the planning and location selection. Great infrastructure development and attention to detail.",
      rating: 4
    },
    {
      id: 6,
      name: "Rajesh Kumar",
      role: "Investor",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "Transparency is their biggest asset. I have invested in two plots with Square Acres and I am very happy with the returns and growth.",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const itemWidth = scrollRef.current.children[0].clientWidth;
        scrollRef.current.scrollBy({ left: direction === 'left' ? -itemWidth : itemWidth, behavior: 'smooth' });
    }
  };
  
   useEffect(() => {
    const interval = setInterval(() => {
        if (scrollRef.current) {
             const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
             // Check if we can scroll more, with a small buffer
             if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
                 scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
             } else {
                 scroll('right');
             }
        }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Styles for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero Slider Component */}
      <HeroSlider />

      {/* Enhanced Introduction Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div className="mb-16 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-8">
                <Building className="w-4 h-4" /> Real Estate Excellence
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Square Acres <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Infra Private Limited
                </span>
              </h2>

              <div className="bg-white p-8 rounded-2xl shadow-lg shadow-indigo-100 border-l-4 border-indigo-600 mb-8 transform transition-all hover:-translate-y-1">
                <p className="text-xl text-slate-700 font-medium italic relative z-10">
                  "If you are looking for a Plot in Patna, We have the perfect solutions for everything."
                </p>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-base mb-8">
                <p>
                  At <span className="font-semibold text-slate-900">Square acres infra private limited</span>, we understand that your home is more than just bricks and mortar; it’s a sanctuary, a reflection of your lifestyle, and the backdrop to life’s precious moments. As your trusted partner in real estate, we are committed to helping you find not just a house but your ideal home.
                </p>
                <p>
                  Ready to embark on your real estate journey in Patna? Contact us today to explore our latest listings, schedule a site visit, and turn your property aspirations into reality.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                 {[
                   { icon: CheckCircle, text: "Premium Locations", color: "text-green-600", bg: "bg-green-100" },
                   { icon: ShieldCheck, text: "Legally Verified", color: "text-blue-600", bg: "bg-blue-100" },
                   { icon: Star, text: "Trusted by 500+ Families", color: "text-yellow-600", bg: "bg-yellow-100" },
                   { icon: Clock, text: "Fast Development", color: "text-purple-600", bg: "bg-purple-100" },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`p-2 rounded-full ${item.bg} ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{item.text}</span>
                   </div>
                 ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Contact Us Today
                </Link>
                <div className="hidden sm:flex items-center gap-3 px-4 py-4 text-slate-500 font-semibold italic">
                   Square acres infra private limited – Where Tradition Meets Tomorrow!
                </div>
              </div>
            </div>

            {/* Image Composition Column */}
            <div className="relative lg:h-[700px] flex items-center justify-center lg:justify-end">
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
               <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

               {/* Main Image Card */}
               <div className="relative z-20 w-full lg:w-11/12">
                 <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 group">
                    <img
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern Real Estate"
                      className="w-full h-[400px] lg:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                       <p className="text-sm font-bold uppercase tracking-wider mb-2 text-indigo-300">Featured Property</p>
                       <h3 className="text-2xl md:text-3xl font-bold">Patna's Finest Plots</h3>
                    </div>
                 </div>
               </div>

               {/* Overlapping Secondary Card */}
               <div className="absolute top-10 lg:top-20 -left-4 lg:left-0 z-30 w-64 md:w-72 animate-float hidden md:block">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 transform -rotate-3 hover:rotate-0 transition-all duration-300">
                     <img 
                       src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                       alt="Development" 
                       className="w-full h-40 object-cover rounded-xl mb-4"
                     />
                     <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                           <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                           <p className="text-xs text-slate-500 font-bold uppercase">Status</p>
                           <p className="text-sm font-bold text-slate-900">Ready for Possession</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Square Acres Infra Section - Redesigned (Hover Reveal) */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e50a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b0764,transparent)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Our Promise</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Why Square acres infra?</h3>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
              We redefine real estate standards with safety, transparency, and uncompromised quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 min-h-[320px] transition-all duration-500 hover:-translate-y-2 ${feature.border} ${feature.bg}`}
              >
                {/* Background Gradient Fade In */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Glowing Orb Effect */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-${feature.color.split('-')[1]}-500/30`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {feature.title}
                  </h4>

                  {/* Description - Always Visible, Color change on hover */}
                  <div className="relative">
                     <p className="text-slate-400 text-sm font-medium leading-relaxed transition-colors duration-300 group-hover:text-white">
                        {feature.description}
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Carousel Layout) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Client Stories</span>
             <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Trusted by Families</h2>
             <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mt-6 rounded-full mx-auto"></div>
             <p className="mt-4 text-slate-500 text-lg">Hear what our satisfied customers have to say about their journey with us.</p>
          </div>

          <div className="relative -mx-4 group/slider">
             {/* Slider Container */}
             <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-0 pb-12 px-4"
             >
                {testimonials.map((t) => (
                   <div key={t.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] snap-center px-4 flex">
                      <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 flex flex-col items-center text-center h-full w-full relative group hover:-translate-y-2">
                         
                         {/* Decorative Quote Icon */}
                         <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-12 h-12 text-purple-600 fill-purple-600" />
                         </div>

                         {/* 1. Image (Top) */}
                         <div className="relative mb-6">
                            <div className="p-1 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
                                <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full object-cover border-4 border-white" />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white"></div>
                         </div>
                         
                         {/* 2. Name & Designation */}
                         <h4 className="font-bold text-slate-900 text-xl mb-1">{t.name}</h4>
                         <p className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-4">{t.role}</p>
                         
                         {/* 3. Rating (Below Name/Designation) */}
                         <div className="flex gap-1 mb-6 bg-yellow-50 px-3 py-1.5 rounded-full">
                                {Array(5).fill(0).map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-300 text-slate-300'}`} />
                                ))}
                         </div>

                         {/* 4. Quote */}
                         <p className="text-slate-600 italic leading-relaxed flex-grow relative z-10">"{t.quote}"</p>
                      </div>
                   </div>
                ))}
             </div>
             
             {/* Desktop Navigation Buttons */}
             <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 bg-white border border-slate-200 text-slate-600 p-3 rounded-full shadow-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all z-20 hidden md:block"
             >
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 bg-white border border-slate-200 text-slate-600 p-3 rounded-full shadow-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all z-20 hidden md:block"
             >
                <ChevronRight className="w-6 h-6" />
             </button>

             {/* Mobile Controls */}
             <div className="flex justify-center gap-4 md:hidden mt-4">
                <button 
                  onClick={() => scroll('left')}
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Stats/Proof */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
            <div className="p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-slate-400 font-medium">Plots Sold</div>
            </div>
            <div className="p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-slate-400 font-medium">Happy Clients</div>
            </div>
            <div className="p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-slate-400 font-medium">Years Experience</div>
            </div>
            <div className="p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-slate-400 font-medium">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Ready to find your dream plot?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life. Our team is ready to help you find the perfect location in Patna.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;