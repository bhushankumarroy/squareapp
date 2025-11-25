import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Lock, Server, ExternalLink } from 'lucide-react';

const Webmail: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-poppins">
      <PageHeader 
        title="Webmail Login" 
        bgImage="https://images.unsplash.com/photo-1555421689-49178386ad8d?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Visual */}
          <div className="md:w-1/2 bg-slate-900 p-10 flex flex-col justify-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
             <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                   <Server className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Secure Corporate Access</h3>
                <p className="text-slate-300 leading-relaxed">
                   Access your Square Acres Infra official email securely. Please ensure you are using a secure connection before logging in.
                </p>
                <div className="mt-8 flex items-center gap-3 text-sm text-slate-400 bg-black/20 p-3 rounded-lg">
                   <Lock className="w-4 h-4" /> 256-bit SSL Encrypted
                </div>
             </div>
          </div>

          {/* Right Side - Action */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center items-center text-center bg-slate-50">
             <div className="mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Mail className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Employee Login</h2>
                <p className="text-slate-500 mt-2">Redirect to Webmail Portal</p>
             </div>

             <a 
                href="https://webmail.squareacresinfra.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
             >
                Access Webmail <ExternalLink className="w-5 h-5" />
             </a>

             <p className="mt-6 text-xs text-slate-400">
                Having trouble logging in? Contact IT Support.
             </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Webmail;
