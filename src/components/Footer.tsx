import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
      {/* Global CTA Section (Hidden on Contact Page) */}
      {!isContactPage && (
        <section className="bg-white py-24 border-t border-slate-100 relative overflow-hidden">
          {/* Abstract decorative graphics simulating the screenshot */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-80 opacity-10 pointer-events-none -translate-x-1/4">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 stroke-current" fill="none" strokeWidth="0.5">
              <path d="M0,30 L90,45 L0,50 Z" />
              <path d="M0,45 L95,50 L0,55 Z" />
              <path d="M0,55 L90,55 L0,65 Z" />
            </svg>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-80 opacity-10 pointer-events-none translate-x-1/4 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 stroke-current" fill="none" strokeWidth="0.5">
              <path d="M0,30 L90,45 L0,50 Z" />
              <path d="M0,45 L95,50 L0,55 Z" />
              <path d="M0,55 L90,55 L0,65 Z" />
            </svg>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-4 font-medium">Tell us about your project</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed font-sans max-w-2xl mx-auto">
              Our product range is designed to meet market demand and fully customizable to your needs. Our dedicated sales and design teams are waiting to hear from you.
            </p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-300">
              Get in touch
            </Link>
          </div>
        </section>
      )}

      <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold tracking-widest text-white font-display uppercase leading-none block">JOJO</span>
              <span className="text-sm tracking-[0.4em] text-slate-400 font-display uppercase mt-1 block">PAPERS</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted manufacturing partner for custom rolling papers and pre-rolled cones. We build and supply products for brands around the world.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link to="/private-label" className="text-slate-400 hover:text-white transition-colors text-sm">Wholesale Manufacturing</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Custom Rolling Papers</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Pre-Rolled Cones</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Custom Packaging</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link to="/private-label" className="text-slate-400 hover:text-white transition-colors text-sm">Private Label</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert('JotForm Integration Coming Soon!'); }} className="text-slate-400 hover:text-white transition-colors text-sm">Become Our Distributor</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm">Global Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <a href="mailto:info@jojopapers.com" className="text-slate-400 hover:text-white transition-colors text-sm">info@jojopapers.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">Vasant Kunj, New Delhi, Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Jojo Papers Manufacturing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
