import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Private Label", href: "/private-label" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold tracking-widest text-foreground font-display uppercase leading-none">JOJO</span>
            <span className="text-[0.65rem] font-medium tracking-[0.3em] text-foreground/80 uppercase mt-1">PAPERS</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-none absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons + Mobile Toggle */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); alert('JotForm Integration Coming Soon!'); }}
            className="hidden lg:flex bg-transparent border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-5 py-2 rounded-md font-semibold tracking-wide text-sm transition-colors"
          >
            Become Our Distributor
          </a>
          <Button asChild variant="default" className="rounded-full px-6 tracking-wide hidden sm:flex">
            <Link to="/contact">Contact Us</Link>
          </Button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[64px] bottom-0 h-[calc(100vh-64px)] w-full bg-white z-40 md:hidden animate-fade-in overflow-y-auto flex flex-col">
          <nav className="flex flex-col px-6 pt-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100">
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-5 text-xl font-medium text-slate-900"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
          
          <div className="px-6 mt-8 pb-12 flex flex-col gap-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); alert('JotForm Integration Coming Soon!'); }}
              className="w-full text-center bg-transparent border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white rounded-md py-4 text-lg font-semibold transition-colors"
            >
              Become Our Distributor
            </a>
            <Button asChild className="w-full rounded-full py-6 text-lg shadow-md">
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
