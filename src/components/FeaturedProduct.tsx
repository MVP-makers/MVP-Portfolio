import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Package, Receipt, BarChart3, CheckCircle, Send, Monitor } from 'lucide-react';

const features = [
  { icon: Users, title: 'Customers', desc: 'Profiles, Aadhaar/PAN, history' },
  { icon: Package, title: 'Pledges', desc: 'Items, photos, interest calc' },
  { icon: Receipt, title: 'Billing', desc: 'Receipts, PDF, payments' },
  { icon: BarChart3, title: 'Reports', desc: 'Business analytics' }
];

const FeaturedProduct = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pawn Broker Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`);
    window.location.href = `mailto:contact@mvpmakers.in?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="pawnbroker" className="section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <span className="text-xs text-emerald-400 font-medium">Desktop Software</span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mt-1 mb-4">Pawn Broker Management</h2>
          <p className="text-zinc-400 max-w-xl">Complete desktop application for pawn broker operations. Customer management, pledge tracking, billing, and reports.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <f.icon className="h-6 w-6 text-emerald-500 mb-2" />
                  <h4 className="font-medium text-zinc-100 text-sm">{f.title}</h4>
                  <p className="text-xs text-zinc-500">{f.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="h-5 w-5 text-emerald-500" />
                <span className="font-medium text-zinc-100">Requirements</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> Windows 10+</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> 4GB RAM</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> 1GB disk</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> 1200x700</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-zinc-900 border border-zinc-800"
          >
            <h3 className="text-lg font-semibold text-zinc-100 mb-1">Interested?</h3>
            <p className="text-sm text-zinc-400 mb-6">Get pricing and demo details.</p>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
                <p className="text-zinc-100 font-medium">Sent! We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="input"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="input"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone *"
                  required
                  value={formData.phone}
                  onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  className="input"
                />
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="textarea"
                />
                <button type="submit" className="btn-primary w-full">
                  Request Demo <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
