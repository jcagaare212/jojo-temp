import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPreRolledOpen, setIsPreRolledOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      {/* Top Row */}
      <div className={`container mx-auto px-6 flex items-center justify-between border-b border-slate-100 transition-all duration-500 ${isScrolled ? 'py-1.5' : 'py-4'}`}>
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Link to="/" className="flex flex-col items-center justify-center">
            <span className={`font-bold tracking-widest text-foreground font-display uppercase leading-none transition-all duration-500 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>JOJO</span>
            <span className={`font-medium tracking-[0.3em] text-foreground/80 uppercase mt-1 transition-all duration-500 ${isScrolled ? 'text-[0.6rem]' : 'text-[0.7rem]'}`}>PAPERS</span>
          </Link>
        </div>

        {/* Desktop Socials & CTA */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          <div className="flex items-center gap-4 text-slate-700">
            <a href="https://wa.me/919717927787" target="_blank" rel="noreferrer" className="flex items-center gap-2 group" aria-label="WhatsApp">
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 object-contain transition-transform group-hover:scale-110" />
              <span className="text-[15px] font-bold group-hover:text-[#25D366] transition-colors whitespace-nowrap">+91 97179 27787</span>
            </a>
            
            <div className="w-[1px] h-5 bg-slate-300 mx-1"></div>
            
            <a href="https://instagram.com/jojopapers.co" target="_blank" rel="noreferrer" className="flex items-center gap-2 group" aria-label="Instagram">
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 object-contain transition-transform group-hover:scale-110" />
              <span className="text-[15px] font-bold group-hover:text-[#E1306C] transition-colors whitespace-nowrap">@jojopapers.co</span>
            </a>

            <div className="w-[1px] h-5 bg-slate-300 mx-1"></div>

            <a href="mailto:info@jojopapers.com" className="flex items-center gap-2 hover:text-primary transition-colors group" aria-label="Email">
              <Mail className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors" />
            </a>
          </div>
          <Button asChild variant="default" className={`rounded-full tracking-wide font-bold shadow-md hover:shadow-lg transition-all ml-2 duration-500 ${isScrolled ? 'px-6 py-4 text-sm' : 'px-8 py-6 text-base'}`}>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground flex items-center justify-end"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Bottom Row - Desktop Nav */}
      <div className="hidden lg:flex container mx-auto px-6 h-14 bg-white/50 transition-all duration-500">
        <nav className="flex items-center justify-center gap-6 xl:gap-8 w-full text-[13px] xl:text-sm font-semibold tracking-wider uppercase">
          
          {/* Dropdown */}
          <div className="relative group h-full flex items-center"
               onMouseEnter={() => setIsPreRolledOpen(true)}
               onMouseLeave={() => setIsPreRolledOpen(false)}>
            <Link to="/pre-rolled-cones" className="flex items-center gap-1 hover:text-primary transition-colors h-full">
              Pre Rolled Cones <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
            </Link>
            
            {isPreRolledOpen && (
              <div className="absolute top-[90%] left-0 bg-white border border-slate-100 shadow-2xl rounded-b-xl w-64 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-5 py-2 font-black text-[10px] tracking-widest text-slate-400 uppercase">Sizes</div>
                <Link to="/pre-rolled-cones/dogwalker-mini" className="block px-5 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-primary transition-colors">Dogwalker Mini (70mm)</Link>
                <Link to="/pre-rolled-cones/mini" className="block px-5 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-primary transition-colors">Mini (78mm)</Link>
                <Link to="/pre-rolled-cones/1-1-4-size" className="block px-5 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-primary transition-colors">1 1/4 Size (84mm)</Link>
                <Link to="/pre-rolled-cones/98mm-special" className="block px-5 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-primary transition-colors">98mm Special (98mm)</Link>
                <Link to="/pre-rolled-cones/king-size" className="block px-5 py-2.5 text-sm font-medium hover:bg-slate-50 hover:text-primary transition-colors">King Size (109mm)</Link>
              </div>
            )}
          </div>

          <Link to="/bulk-cones" className="hover:text-primary transition-colors">Bulk Cones</Link>
          <Link to="/products/classic-papers" className="hover:text-primary transition-colors">Rolling Paper</Link>
          <Link to="/custom-branding" className="hover:text-primary transition-colors">Custom Branding</Link>
          <Link to="/private-label" className="hover:text-primary transition-colors">OEM & Private Label</Link>
          <Link to="/products/emergency-kit" className="hover:text-primary transition-colors">Retail Packaging Ideas</Link>
          <Link to="/consultation" className="hover:text-primary transition-colors">Consultation</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[85px] bottom-0 h-[calc(100vh-85px)] w-full bg-white z-40 lg:hidden animate-fade-in overflow-y-auto flex flex-col">
          <nav className="flex flex-col px-6 pt-2 pb-6">
            <div className="border-b border-slate-100">
              <div className="py-4">
                <div 
                  className="flex items-center justify-between font-semibold text-lg text-slate-900 cursor-pointer"
                  onClick={() => setIsPreRolledOpen(!isPreRolledOpen)}
                >
                  <span>Pre Rolled Cones</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isPreRolledOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                </div>
                {isPreRolledOpen && (
                  <div className="pl-4 mt-3 flex flex-col gap-3 text-slate-600 animate-in slide-in-from-top-1 fade-in">
                    <div className="font-bold text-xs tracking-wider text-slate-400 uppercase mb-1">Sizes</div>
                    <Link to="/pre-rolled-cones/dogwalker-mini" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium hover:text-primary transition-colors">Dogwalker Mini (70mm)</Link>
                    <Link to="/pre-rolled-cones/mini" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium hover:text-primary transition-colors">Mini (78mm)</Link>
                    <Link to="/pre-rolled-cones/1-1-4-size" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium hover:text-primary transition-colors">1 1/4 Size (84mm)</Link>
                    <Link to="/pre-rolled-cones/98mm-special" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium hover:text-primary transition-colors">98mm Special (98mm)</Link>
                    <Link to="/pre-rolled-cones/king-size" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium hover:text-primary transition-colors">King Size (109mm)</Link>
                  </div>
                )}
              </div>
            </div>
            
            <Link to="/bulk-cones" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900 border-b border-slate-100">Bulk Cones</Link>
            <Link to="/products/classic-papers" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900 border-b border-slate-100">Rolling Paper</Link>
            <Link to="/custom-branding" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900 border-b border-slate-100">Custom Branding</Link>
            <Link to="/private-label" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900 border-b border-slate-100">OEM & Private Label</Link>
            <Link to="/products/emergency-kit" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900 border-b border-slate-100">Retail Packaging Ideas</Link>
            <Link to="/consultation" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900 border-b border-slate-100">Consultation</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-4 text-lg font-semibold text-slate-900">About Us</Link>
          </nav>
          
          <div className="px-6 mt-auto pb-12 pt-6 flex flex-col gap-6 bg-slate-50 border-t border-slate-100">
            <div className="flex justify-center gap-8 text-slate-500">
              <a href="https://wa.me/919717927787" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110">
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 object-contain" />
              </a>
              <a href="mailto:info@jojopapers.com" className="hover:text-primary transition-colors hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/jojopapers" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110">
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
            </div>
            <Button asChild className="w-full rounded-full py-6 text-lg font-semibold shadow-md">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

