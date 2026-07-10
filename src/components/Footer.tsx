import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
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
              Global leaders in premium rolling paper manufacturing. Scaling the world's top smoking brands with absolute precision and uncompromised quality.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link to="/private-label" className="text-slate-400 hover:text-white transition-colors text-sm">High-Volume OEM</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Private Label Booklets</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Custom Pre-Rolled Cones</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Bespoke Metal Packaging</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Our Factory</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Sustainability</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Partner Network</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
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
  );
};

export default Footer;
