import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:contact@mvpmakers.in?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Get in touch</h2>
            <p className="text-zinc-400 mb-8">Have a project in mind? Let's talk about it.</p>

            <div className="space-y-4">
              <a href="mailto:contact@mvpmakers.in" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span>contact@mvpmakers.in</span>
              </a>
              <a href="tel:+918125544202" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 8125544202</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="h-5 w-5" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-zinc-900 border border-zinc-800"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
                <p className="text-zinc-100 font-medium">Message sent!</p>
                <p className="text-sm text-zinc-400">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="textarea"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;