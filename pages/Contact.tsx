import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      }, 1500);
    }
  };

  return (
     <div className="bg-slate-50 min-h-screen font-poppins">
      {/* Breadcrumb Header */}
      <PageHeader 
        title="Contact Us" 
        bgImage="https://images.unsplash.com/photo-1423666639041-f142fcb9632f?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards (Left Side - 1 Col) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Our Office</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Dayanand Traders 3rd Floor,<br />
                  Rupaspur Digha Nahar Road<br />
                  Near Buddha Center,<br />
                  Danapur Patna - 801503
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
                <p className="text-slate-500 text-sm break-all">
                  info@squareacresinfra.com
                </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-500 text-sm">
                  +91 7488619330
                </p>
            </div>
          </div>

          {/* Enquiry Form (Right Side - 2 Cols) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 h-full">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Send us a Message</h2>
                    <p className="text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-xl border ${errors.name ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-slate-200 bg-slate-50 focus:border-purple-500 focus:ring-purple-200'} focus:ring-4 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                    </div>

                     {/* Phone */}
                     <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-slate-200 bg-slate-50 focus:border-purple-500 focus:ring-purple-200'} focus:ring-4 outline-none transition-all`}
                        placeholder="+91 9876543210"
                      />
                       {errors.phone && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-slate-200 bg-slate-50 focus:border-purple-500 focus:ring-purple-200'} focus:ring-4 outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                       {errors.email && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                    </div>

                     {/* Subject */}
                     <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-xl border ${errors.subject ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-slate-200 bg-slate-50 focus:border-purple-500 focus:ring-purple-200'} focus:ring-4 outline-none transition-all`}
                        placeholder="Project Enquiry"
                      />
                       {errors.subject && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Your Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl border ${errors.message ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-slate-200 bg-slate-50 focus:border-purple-500 focus:ring-purple-200'} focus:ring-4 outline-none transition-all resize-none`}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                     {errors.message && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold text-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg ${status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/30'}`}
                  >
                    {status === 'submitting' ? (
                        <>Processing...</>
                    ) : (
                        <>
                            Send Message <Send className="w-5 h-5" />
                        </>
                    )}
                  </button>
                  
                  {/* Success Message */}
                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <div>
                            <p className="font-bold">Message Sent!</p>
                            <p className="text-sm">Thank you for contacting us. We will get back to you shortly.</p>
                        </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 w-full grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://maps.google.com/maps?q=Dayanand+Traders+3rd+Floor+Rupaspur+Digha+Nahar+Road+Danapur+Patna&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;