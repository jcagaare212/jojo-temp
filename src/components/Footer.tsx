import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/15">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 pr-4">
            <Link to="/" className="flex flex-col inline-block mb-6 group">
              <span className="font-['Cormorant_Garamond'] text-4xl font-semibold leading-none tracking-tight text-background group-hover:text-background/80 transition-colors">JOJO</span>
              <span className="font-sans text-[10px] tracking-[0.35em] text-background/60 mt-1.5 ml-0.5">PAPERS</span>
            </Link>
            <p className="text-sm text-background/60 max-w-[32ch] leading-relaxed">
              The premier OEM manufacturing partner for dispensaries, distributors, and luxury private-label brands. Precision craftsmanship, made in India since 2014.
            </p>
          </div>
          
          <div>
            <h5 className="font-sans text-xs tracking-[0.2em] uppercase text-background mb-6 font-semibold">Products</h5>
            <ul className="flex flex-col gap-4">
              <li><Link to="/pre-rolled-cones" className="text-sm text-background/60 hover:text-background transition-colors">Pre-Rolled Cones</Link></li>
              <li><Link to="/bulk-cones" className="text-sm text-background/60 hover:text-background transition-colors">Bulk Cones</Link></li>
              <li><Link to="/filters" className="text-sm text-background/60 hover:text-background transition-colors">Filter Tips</Link></li>
              <li><a href="/#paper" className="text-sm text-background/60 hover:text-background transition-colors">Rolling Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-sans text-xs tracking-[0.2em] uppercase text-background mb-6 font-semibold">Services</h5>
            <ul className="flex flex-col gap-4">
              <li><Link to="/private-label" className="text-sm text-background/60 hover:text-background transition-colors">Private Label & OEM</Link></li>
              <li><Link to="/consultation" className="text-sm text-background/60 hover:text-background transition-colors">Consultation</Link></li>
              <li><a href="/JOJO-QC-Inspection-Template.pdf" download target="_blank" rel="noreferrer" className="text-sm text-background/60 hover:text-background transition-colors">Quality Control</a></li>
              <li><Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">Our Story</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-sans text-xs tracking-[0.2em] uppercase text-background mb-6 font-semibold">Connect</h5>
            <ul className="flex flex-col gap-4">
              <li><Link to="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact Us</Link></li>
              <li><a href="mailto:info@jojopapers.com" className="text-sm text-background/60 hover:text-background transition-colors">info@jojopapers.com</a></li>
              <li><a href="tel:+919971508200" className="text-sm text-background/60 hover:text-background transition-colors">+91 99715 08200</a></li>
              <li className="text-sm text-background/60 mt-2">Vasant Kunj, New Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-background/40 gap-6">
          <span className="text-center md:text-left">&copy; {new Date().getFullYear()} JOJO Papers. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
            <a href="https://wa.me/919971508200" target="_blank" rel="noreferrer" className="hover:text-background transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
