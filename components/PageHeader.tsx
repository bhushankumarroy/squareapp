import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  bgImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, bgImage }) => {
  return (
    <div className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden font-poppins">
      {/* Background Image with Overlay and Animation */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
         <img 
            src={bgImage} 
            alt={title} 
            className="w-full h-full object-cover transform scale-100 animate-slow-zoom"
         />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <nav 
            className="inline-flex items-center space-x-2 text-sm md:text-base font-medium text-slate-200 bg-white/10 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
            aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4" /> 
            <span className="hidden sm:inline">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-white font-bold tracking-wide">
            {title}
          </span>
        </nav>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slow-zoom {
          animation: slowZoom 20s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default PageHeader;