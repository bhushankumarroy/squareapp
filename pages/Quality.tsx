import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle, Shield, PenTool, ClipboardCheck } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Quality Assurance" 
        bgImage="https://images.unsplash.com/photo-1581094794329-cd1361ddee25?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Uncompromised Quality</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
               At Square Acres, quality is not just a checklist; it's our culture. We employ rigorous testing standards (QASCON) to ensure every square foot we build stands the test of time.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
               <img 
                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                 alt="Construction Site Quality Check" 
                 className="rounded-2xl shadow-2xl w-full"
               />
            </div>
            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                     <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">470+ Quality Checks</h3>
                     <p className="text-slate-600">Our proprietary QASCON system involves over 470 distinct quality checks at various stages of construction, from soil testing to final finishing.</p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                     <Shield className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Materials</h3>
                     <p className="text-slate-600">We source only the highest grade cement, steel, and fittings from certified vendors. No compromises, no shortcuts.</p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                     <PenTool className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Supervision</h3>
                     <p className="text-slate-600">Every site is supervised by experienced civil engineers and architects who ensure adherence to architectural drawings and safety codes.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Quality Promise</h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
               "We build homes we would be proud to live in. If it doesn't meet our standards, it doesn't reach you."
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full border border-white/20">
               <CheckCircle className="w-5 h-5 text-green-400" />
               <span className="font-bold tracking-wide">ISO 9001:2015 Certified</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Quality;