import { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, MapPin, Phone } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail('');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="bg-neutral-950 text-white p-8 sm:p-16 mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-900 to-black pointer-events-none" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium tracking-wide uppercase mb-4">
              <Mail className="w-3.5 h-3.5" />
              Join The Inner Circle
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4">
              Get Early Access To Limited Drops
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base mb-8 font-light">
              Subscribe to receive private sale links, lookbook releases, and exclusive restock alerts from {STORE_INFO.name}.
            </p>

            {newsletterSubmitted ? (
              <div className="flex items-center justify-center gap-2 text-emerald-400 bg-neutral-900 py-4 px-6 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="font-semibold text-sm">You are subscribed. Welcome to the collective.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 px-5 py-4 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors w-full sm:w-80"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-neutral-950 px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="bg-white p-8 sm:p-12 shadow-sm border border-neutral-200">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
              Direct Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-neutral-600 text-sm mb-8">
              Have questions regarding sizing, shipping, or wholesale partnerships? Send us a message and our team will respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="bg-neutral-50 border border-neutral-200 p-6 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-neutral-900 mx-auto" />
                <h4 className="font-bold uppercase text-neutral-900 text-sm">Message Sent Successfully</h4>
                <p className="text-xs text-neutral-600">Thank you for reaching out. We will get back to your inbox shortly.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider underline text-neutral-900 hover:text-neutral-600 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Alex Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Inquiry about sizing for heavyweight boxy tee..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 p-4 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-950 hover:bg-neutral-800 text-white py-4 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Quick Store Info & Hours Summary */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="bg-white p-8 sm:p-12 shadow-sm border border-neutral-200">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
                Flagship Store
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
                Store Hours & Info
              </h2>

              <div className="space-y-6 text-sm text-neutral-700">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-neutral-900 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-neutral-900 uppercase tracking-wider text-xs mb-1">Vienna Flagship</h4>
                    <p className="text-neutral-600">{STORE_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-neutral-900 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-neutral-900 uppercase tracking-wider text-xs mb-1">Telephone</h4>
                    <p className="text-neutral-600 font-mono">{STORE_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-5 h-5 text-neutral-900 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-neutral-900 uppercase tracking-wider text-xs mb-1">Customer Support</h4>
                    <p className="text-neutral-600 font-mono">{STORE_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h4 className="font-bold text-neutral-900 uppercase tracking-wider text-xs mb-4">Opening Schedule</h4>
                <ul className="space-y-2 text-sm">
                  {STORE_INFO.hours.map((h, i) => (
                    <li key={i} className="flex justify-between">
                      <span className="text-neutral-600">{h.days}</span>
                      <span className="font-mono font-semibold text-neutral-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-neutral-900 text-neutral-400 p-6 text-xs uppercase tracking-wider font-mono flex items-center justify-between">
              <span>{STORE_INFO.name}</span>
              <span className="text-white">Est. 2024 / Vienna</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
