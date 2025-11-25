import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { HardHat, MapPin, ArrowRight, Clock, Activity, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
}

const Projects: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  
  // Define Status categories to match the dropdown
  const categories = [
    { name: 'All Projects', slug: 'all', icon: null },
    { name: 'Upcoming Projects', slug: 'upcoming', icon: Clock },
    { name: 'Ongoing Projects', slug: 'ongoing', icon: Activity },
    { name: 'Completed Projects', slug: 'completed', icon: CheckCircle },
  ];

  const [activeTab, setActiveTab] = useState(category || 'all');

  useEffect(() => {
    setActiveTab(category || 'all');
  }, [category]);

  const handleTabChange = (slug: string) => {
    setActiveTab(slug);
    navigate(slug === 'all' ? '/projects' : `/projects/${slug}`);
  };

  // Dummy Project Data
  const projects: Project[] = [
    // Residential
    {
      id: 1,
      title: "Green Valley Township",
      category: "Residential Real Estate",
      categorySlug: "residential",
      location: "Bihta, Patna",
      status: "Ongoing",
      description: "A 50-acre integrated township offering residential plots with modern amenities including parks, wide roads, and drainage systems.",
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Area", value: "50 Acres" }, { label: "Plots", value: "200+" }]
    },
    {
      id: 2,
      title: "Sunrise Heights",
      category: "Residential Real Estate",
      categorySlug: "residential",
      location: "Danapur, Patna",
      status: "Completed",
      description: "Premium residential complex featuring 3BHK apartments with club house and swimming pool facilities.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Units", value: "80 Flats" }, { label: "Sold Out", value: "100%" }]
    },
    
    // Commercial
    {
      id: 3,
      title: "Tech Park Plaza",
      category: "Commercial Real Estate",
      categorySlug: "commercial",
      location: "Bailey Road, Patna",
      status: "Upcoming",
      description: "State-of-the-art commercial complex designed for IT offices and corporate headquarters.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Floors", value: "12" }, { label: "Space", value: "2L Sq.ft" }]
    },
    {
      id: 4,
      title: "City Center Mall",
      category: "Commercial Real Estate",
      categorySlug: "commercial",
      location: "Kankarbagh, Patna",
      status: "Ongoing",
      description: "A modern shopping destination with retail spaces, food court, and multiplex cinema.",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Shops", value: "150+" }, { label: "Opening", value: "2025" }]
    },

    // Property Management
    {
      id: 5,
      title: "Lotus Society Management",
      category: "Property Management",
      categorySlug: "property-management",
      location: "Patliputra, Patna",
      status: "Completed",
      description: "Complete facility management for Lotus Society including security, housekeeping, and maintenance.",
      image: "https://images.unsplash.com/photo-1556912173-3db9963f6bee?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Residents", value: "500+" }, { label: "Service", value: "24/7" }]
    },

    // Investment
    {
      id: 6,
      title: "Highway Corridor Investment",
      category: "Real Estate Investment",
      categorySlug: "investment",
      location: "Patna-Dobhi Highway",
      status: "Ongoing",
      description: "Strategic land acquisition along the upcoming industrial corridor yielding high ROI for early investors.",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Growth", value: "15% PA" }, { label: "Lock-in", value: "3 Years" }]
    },

    // On Site Assistance
    {
      id: 7,
      title: "Mega Soil Testing Drive",
      category: "On Site Assistance",
      categorySlug: "on-site",
      location: "Multiple Locations",
      status: "Completed",
      description: "Conducted comprehensive soil analysis for over 50 clients to ensure structural safety of future homes.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      stats: [{ label: "Tests", value: "200+" }, { label: "Clients", value: "50" }]
    }
  ];

  // Filtering Logic: Filter by Status matching the active slug
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.status.toLowerCase() === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'Ongoing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Upcoming': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-poppins">
      <PageHeader 
        title="Our Projects" 
        bgImage="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1920&q=80" 
      />

      {/* Intro */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Shaping the Skyline of Bihar</h2>
        <p className="text-lg text-slate-600">
           Explore our diverse portfolio of residential, commercial, and investment projects. From plotted developments to high-rise apartments, we deliver quality and trust.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 px-4 max-w-7xl mx-auto overflow-x-auto hide-scrollbar">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 min-w-max md:min-w-0">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleTabChange(cat.slug)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === cat.slug
                  ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {cat.icon && <cat.icon className="w-4 h-4" />}
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredProjects.map((project, index) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                   {/* Image */}
                   <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 right-4">
                         <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(project.status)}`}>
                            {project.status}
                         </span>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-6 opacity-80">
                         <div className="flex items-center text-white gap-2">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium">{project.location}</span>
                         </div>
                      </div>
                   </div>

                   {/* Content */}
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                         <span className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1 block">{project.category}</span>
                         <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                         {project.description}
                      </p>

                      {/* Stats Grid */}
                      {project.stats && (
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                           {project.stats.map((stat, idx) => (
                              <div key={idx}>
                                 <p className="text-xs text-slate-500 font-bold uppercase">{stat.label}</p>
                                 <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                              </div>
                           ))}
                        </div>
                      )}

                      <button className="w-full py-3 rounded-xl border border-purple-100 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center gap-2 group/btn">
                         View Details <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>
             ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
             <div className="inline-flex items-center justify-center p-4 bg-slate-100 rounded-full mb-4">
                <HardHat className="w-8 h-8 text-slate-400" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">No Projects Found</h3>
             <p className="text-slate-500">We are currently updating our portfolio for this status.</p>
          </div>
        )}
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;