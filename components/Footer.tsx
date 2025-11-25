import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, Hexagon, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom Brand Icons (Stable replacements for Lucide)
  const FacebookIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );
  
  const TwitterIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
  );

  const InstagramIcon = ({ className }: { className?: string }) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  );

  const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  );

  const socialLinks = [
    { Icon: FacebookIcon, href: '#' },
    { Icon: TwitterIcon, href: '#' },
    { Icon: InstagramIcon, href: '#' },
    { Icon: LinkedinIcon, href: '#' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/917488619330' },
  ];

  return (
    <footer className="relative bg-[#0f0a24] text-slate-300 font-poppins pt-20 pb-8 overflow-hidden text-[16px] mx-[10px] rounded-t-[50px] shadow-2xl mt-10">
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column - Delay 0ms */}
          <div className="space-y-6 animate-fade-up">
            <Link to="/" className="flex items-center space-x-2 group">
              <Hexagon className="w-8 h-8 text-purple-400 fill-purple-500/10" />
              <span className="text-2xl font-bold text-white tracking-tight">SQUARE ACRES</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              We create digital experiences that transform brands. Join us in building the future of technology and design.
            </p>
          </div>

          {/* Quick Links - Delay 100ms */}
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center hover:text-purple-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-purple-400 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Delay 200ms */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Retail', 'Commercial', 'Residential', 'Land', 'Warehouse', 'Investment'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="group flex items-center hover:text-purple-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-purple-400 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Delay 300ms */}
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-white text-lg font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <span>Dayanand Traders 3rd Floor, Rupaspur Digha Nahar Road, Near Buddha Center, Danapur Patna - 801503</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>+91 7488619330</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>info@squareacresinfra.com</span>
              </li>
            </ul>

            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom - Delay 400ms */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; 2025 Square acres infra private limited. All Rights Reserved. | Developed By : Adhiraj Infotech
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-purple-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition-all duration-300 z-50 transform hover:-translate-y-1 ${
          showScroll ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;