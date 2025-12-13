import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'AI Tutoring Platform',
    description: 'Intelligent tutoring with AI agents, RAG architecture, and real-time streaming responses.',
    tech: ['React', 'FastAPI', 'LangChain', 'PostgreSQL'],
    category: 'AI'
  },
  {
    title: 'Wardrobe AI',
    description: 'Mobile wardrobe management with AI outfit suggestions and AWS S3 image storage.',
    tech: ['React Native', 'FastAPI', 'AWS S3'],
    category: 'Mobile'
  },
  {
    title: 'Court Booking System',
    description: 'Sports facility booking platform with scheduling and reservation management.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Web'
  },
  {
    title: 'Interview Prep App',
    description: 'Visa interview preparation platform with practice questions and tips.',
    tech: ['React', 'TypeScript'],
    category: 'Web'
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Recent work</h2>
          <p className="text-zinc-400 max-w-xl">Projects we've built for clients and ourselves.</p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <span className="text-xs text-emerald-400 font-medium">{project.category}</span>
              <h3 className="text-lg font-semibold text-zinc-100 mt-1 mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
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

export default Portfolio;