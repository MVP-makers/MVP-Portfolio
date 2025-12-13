import { Link } from 'react-scroll';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-zinc-100 mb-2">MVP Makers</h3>
            <p className="text-sm text-zinc-400 mb-4 max-w-sm">
              Custom software development from Hyderabad, India. Web apps, desktop software, mobile apps, and AI solutions.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:contact@mvpmakers.in" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4" /> contact@mvpmakers.in
              </a>
              <a href="tel:+918125544202" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4" /> +91 8125544202
              </a>
              <span className="flex items-center gap-2 text-zinc-400">
                <MapPin className="h-4 w-4" /> Hyderabad, India
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-zinc-100 mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="services" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">Web Apps</Link></li>
              <li><Link to="services" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">Desktop Software</Link></li>
              <li><Link to="services" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">Mobile Apps</Link></li>
              <li><Link to="services" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-zinc-100 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="portfolio" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">Work</Link></li>
              <li><Link to="pawnbroker" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">Products</Link></li>
              <li><Link to="about" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">About</Link></li>
              <li><Link to="contact" spy smooth offset={-100} className="hover:text-emerald-400 cursor-pointer transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex justify-between items-center">
          <p className="text-xs text-zinc-500"> {new Date().getFullYear()} MVP Makers</p>
          <Link to="home" spy smooth offset={-100} className="flex items-center gap-1 text-xs text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">
            Top <ArrowUp className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;