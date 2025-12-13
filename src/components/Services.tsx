import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Monitor, Smartphone, Cpu } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Full-stack web apps with React, Next.js, and FastAPI. From landing pages to complex SaaS platforms.',
    tech: ['React', 'Next.js', 'Node.js', 'FastAPI']
  },
  {
    icon: Monitor,
    title: 'Desktop Software',
    description: 'Cross-platform desktop apps with Electron. Business management tools with offline capability.',
    tech: ['Electron', 'React', 'SQLite', 'Windows/Mac']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'iOS and Android apps with React Native. Native performance with cross-platform efficiency.',
    tech: ['React Native', 'Expo', 'iOS', 'Android']
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'AI integration for your products. Chatbots, automation, and intelligent systems.',
    tech: ['OpenAI', 'LangChain', 'RAG', 'Python']
  }
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">What we build</h2>
          <p className="text-zinc-400 max-w-xl">End-to-end development across platforms. We handle everything from design to deployment.</p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <service.icon className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;