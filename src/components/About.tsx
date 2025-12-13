import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Understand requirements' },
  { num: '02', title: 'Design', desc: 'Architecture & UI' },
  { num: '03', title: 'Build', desc: 'Iterative development' },
  { num: '04', title: 'Launch', desc: 'Deploy & support' }
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">About us</h2>
            <p className="text-zinc-400 mb-6">
              We're a software development company based in Hyderabad, India. We build custom solutions 
              from concept to deployment — web apps, desktop software, mobile apps, and AI integrations.
            </p>
            <p className="text-zinc-400 mb-8">
              Work directly with developers, not account managers. Fast communication, clean code, 
              and a focus on shipping products that work.
            </p>
            <div className="flex gap-3">
              <Link to="contact" spy smooth offset={-100} duration={500} className="btn-primary cursor-pointer">
                Start a Project
              </Link>
              <Link to="portfolio" spy smooth offset={-100} duration={500} className="btn-outline cursor-pointer">
                View Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-zinc-900 border border-zinc-800"
          >
            <h3 className="text-lg font-semibold text-zinc-100 mb-6">How we work</h3>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-emerald-500 font-mono text-sm">{step.num}</span>
                  <div>
                    <p className="font-medium text-zinc-100">{step.title}</p>
                    <p className="text-xs text-zinc-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;