import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight,
  Users, 
  Phone,
  Mail,
  History,
  Lightbulb,
  Award,
  ShieldCheck,
  Globe,
  Home,
  Building2,
  Key,
  TrendingUp,
  MapPin,
  Image,
  Newspaper,
  Video,
  Clock,
  Activity,
  CheckCircle,
  Calculator,
  Lock
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Company History', path: '/company-history', icon: History },
        { name: 'Words of Visionary', path: '/words-of-visionary', icon: Lightbulb },
        { name: 'Our Core Management', path: '/core-management', icon: Users },
        { name: 'Award', path: '/awards', icon: Award },
        { name: 'Quality', path: '/quality', icon: ShieldCheck },
        { name: 'Other Ventures', path: '/other-ventures', icon: Globe },
      ]
    },
    {
      name: 'Projects',
      path: '/projects',
      dropdown: [
        { name: 'Upcoming Projects', path: '/projects/upcoming', icon: Clock },
        { name: 'Ongoing Projects', path: '/projects/ongoing', icon: Activity },
        { name: 'Completed Projects', path: '/projects/completed', icon: CheckCircle },
      ]
    },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Residential Real Estate', path: '/services', icon: Home },
        { name: 'Commercial Real Estate', path: '/services', icon: Building2 },
        { name: 'Property Management', path: '/services', icon: Key },
        { name: 'Real Estate Investment', path: '/services', icon: TrendingUp },
        { name: 'On Site Assistance', path: '/services', icon: MapPin },
      ]
    },
    {
      name: 'Map',
      path: '/map',
      dropdown: [
        { name: 'Buddha City Rajgir', path: '/map#buddha-city-rajgir', icon: MapPin },
        { name: 'Big Dream Home', path: '/map#big-dream-home', icon: MapPin },
        { name: 'Khusrupur', path: '/map#khusrupur', icon: MapPin },
        { name: 'Shikarpur', path: '/map#shikarpur', icon: MapPin },
      ]
    },
    {
      name: 'Resource',
      path: '/resource/emi-calculator',
      dropdown: [
        { name: 'EMI Calculator', path: '/resource/emi-calculator', icon: Calculator },
        { name: 'Webmail Login', path: '/resource/webmail', icon: Lock },
      ]
    },
    { 
      name: 'Gallery', 
      path: '/gallery/photos',
      dropdown: [
        { name: 'Photo Gallery', path: '/gallery/photos', icon: Image },
        { name: 'Media Gallery', path: '/gallery/media', icon: Newspaper },
        { name: 'Video Gallery', path: '/gallery/videos', icon: Video },
      ]
    },
  ];

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Social Icons Components for Mobile Menu
  const FacebookIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );
  const TwitterIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
  );
  const InstagramIcon = ({ className }: { className?: string }) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  );
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  );

  return (
    <header className="font-poppins w-full z-50 fixed top-0 left-0 right-0">
      <nav 
        className={`w-full transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg h-[80px] text-slate-800' 
            : 'bg-transparent h-[90px] text-white bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
          
          {/* 1. LOGO SECTION (Left) */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-indigo-50' : 'bg-white/10 backdrop-blur-md border border-white/10'}`}>
              <img 
                src="/logo/logo.png" 
                alt="Square Acres" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-extrabold tracking-tight leading-none transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                SQUARE ACRES
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${scrolled ? 'text-purple-600' : 'text-indigo-200'}`}>
                Infra Private Limited
              </span>
            </div>
          </Link>

          {/* 2. DESKTOP MENU (Right) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.some(sub => location.pathname.startsWith(sub.path)));
              
              return (
                <div key={item.name} className="relative group/menu h-full flex items-center">
                  <Link
                    to={item.path}
                    className={`
                      relative px-3 py-2 rounded-lg text-[13px] xl:text-[14px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1
                      ${isActive 
                        ? (scrolled ? 'text-purple-600 bg-purple-50' : 'text-white bg-white/20 backdrop-blur-sm shadow-sm border border-white/10')
                        : (scrolled ? 'text-slate-600 hover:text-purple-600 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/10')
                      }
                    `}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover/menu:rotate-180 opacity-70`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-full right-0 pt-6 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 transform group-hover/menu:translate-y-0 translate-y-2 z-50">
                      <div className="w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200">
                        <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-center gap-3 px-4 py-3.5 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-purple-700 transition-all group/item"
                            >
                              <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover/item:bg-purple-100 group-hover/item:text-purple-600 transition-colors border border-slate-100 group-hover/item:border-purple-200">
                                <subItem.icon className="w-4 h-4" />
                              </div>
                              <span className="font-bold text-xs uppercase tracking-wider">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="ml-2 pl-4 border-l border-white/20 h-10 flex items-center">
              <Link 
                to="/contact" 
                className={`flex items-center gap-2 px-6 py-3 text-[12px] font-bold uppercase tracking-widest rounded-full transition-all shadow-lg transform hover:-translate-y-0.5 ${
                  scrolled 
                    ? 'bg-slate-900 text-white hover:bg-purple-600 hover:shadow-purple-500/30' 
                    : 'bg-white text-slate-900 hover:bg-indigo-50 hover:shadow-white/20'
                }`}
              >
                Get a Quote <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. MOBILE TOGGLE (Right) */}
          <div className="lg:hidden flex items-center gap-4">
             {/* Mobile CTA (Icon only) */}
             <Link 
                to="/contact" 
                className={`p-2.5 rounded-full transition-colors ${scrolled ? 'bg-purple-50 text-purple-600' : 'bg-white/20 text-white backdrop-blur-md'}`}
              >
                <Mail className="w-5 h-5" />
              </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 transition-colors focus:outline-none rounded-xl ${
                scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10 backdrop-blur-md'
              }`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] flex">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col ml-auto">
              
              {/* Sidebar Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-900">
                <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm">
                      <img src="/logo/logo.png" alt="Logo" className="w-8 h-auto" />
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-white tracking-tight leading-none">SQUARE ACRES</span>
                        <span className="block text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Infra Pvt Ltd</span>
                    </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Links */}
              <div className="flex-grow overflow-y-auto py-4">
                <div className="px-4 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-slate-50 last:border-0">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          onClick={() => !item.dropdown && setIsOpen(false)}
                          className={`flex-grow py-3.5 px-2 text-[14px] font-bold uppercase tracking-wider transition-colors ${
                            location.pathname === item.path ? 'text-purple-600' : 'text-slate-700 hover:text-purple-600'
                          }`}
                        >
                          {item.name}
                        </Link>
                        {item.dropdown && (
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className={`p-3 text-slate-400 hover:text-purple-600 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      {/* Mobile Dropdown Items */}
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="pl-2 pr-2 pb-3 space-y-1 animate-in slide-in-from-top-2">
                           <div className="bg-slate-50 rounded-xl p-2 border border-slate-100">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white text-slate-600 hover:text-purple-600 transition-all border border-transparent hover:border-slate-100 hover:shadow-sm"
                                >
                                  <div className="p-1.5 bg-white text-slate-400 rounded-lg border border-slate-100 shadow-sm">
                                    <subItem.icon className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="text-xs font-bold uppercase tracking-wide">{subItem.name}</span>
                                </Link>
                              ))}
                           </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                  <div className="space-y-3 mb-6">
                       <a href="tel:+917488619330" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-purple-200 transition-colors group">
                           <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                               <Phone className="w-4 h-4" />
                           </div>
                           <span className="text-sm font-bold text-slate-700">+91 7488619330</span>
                       </a>
                       <a href="mailto:info@squareacresinfra.com" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-purple-200 transition-colors group">
                           <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                               <Mail className="w-4 h-4" />
                           </div>
                           <span className="text-sm font-bold text-slate-700 truncate">info@squareacresinfra.com</span>
                       </a>
                  </div>

                  <div className="flex justify-between gap-2">
                    {[
                         { Icon: FacebookIcon, href: "#" },
                         { Icon: TwitterIcon, href: "#" },
                         { Icon: InstagramIcon, href: "#" },
                         { Icon: WhatsAppIcon, href: "https://wa.me/917488619330" },
                    ].map((social, idx) => (
                         <a 
                           key={idx} 
                           href={social.href} 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex-1 py-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm"
                         >
                            <social.Icon className="w-4 h-4" />
                         </a>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;