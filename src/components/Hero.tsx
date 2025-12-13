import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container-custom">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-6">
              Software Development Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 leading-[1.1] mb-6"
          >
            We build software
            <br />
            <span className="text-zinc-400">that works.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400 mb-8 max-w-xl"
          >
            End-to-end custom development for web apps, desktop software, 
            mobile apps, and AI solutions. From idea to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              to="contact"
              spy smooth
              offset={-100}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="portfolio"
              spy smooth
              offset={-100}
              duration={500}
              className="btn-outline cursor-pointer"
            >
              View Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 text-sm"
          >
            <a 
              href="mailto:contact@mvpmakers.in" 
              className="flex items-center text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              contact@mvpmakers.in
            </a>
            <a 
              href="tel:+918125544202" 
              className="flex items-center text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              +91 8125544202
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;