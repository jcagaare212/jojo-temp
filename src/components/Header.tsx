import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Phone, Mail, Instagram, ChevronDown } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    setExpandedMobileMenu(prev => prev === name ? null : name);
  };

  const navLinks = [
    { 
      name: 'Pre-Rolled Cones', 
      href: '/pre-rolled-cones',
      dropdown: [
        { name: 'DogWalker (70mm)', href: '/pre-rolled-cones/dogwalker' },
        { name: 'Mini (78mm)', href: '/pre-rolled-cones/mini' },
        { name: '1 ¼ Size (84mm)', href: '/pre-rolled-cones/1-1-4-size' },
        { name: '98mm Special (98mm)', href: '/pre-rolled-cones/98mm-special' },
        { name: 'King Size (109mm)', href: '/pre-rolled-cones/king-size' },
      ]
    },
    { name: 'Bulk Cones', href: '/bulk-cones' },
    { name: 'Rolling Papers', href: '/rolling-papers' },
    { name: 'Filter Tips', href: '/filters' },
    { 
      name: 'Retail & Packaging', 
      href: '/retail-packaging/pre-rolled-cones',
      dropdown: [
        { name: 'Pre-Rolled Cones', href: '/retail-packaging/pre-rolled-cones' },
        { name: 'Rolling Papers', href: '/retail-packaging/rolling-papers' },
      ]
    },
    { name: 'Private Label & Branding', href: '/private-label' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'About', href: '/about' },
  ];

  // Animation variants
  const headerVariants: Variants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/40 backdrop-blur-sm'}`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
      {/* Top Bar - Now visible on scroll as requested */}
      <motion.div variants={itemVariants} className="hidden md:flex justify-between items-center max-w-[1400px] mx-auto px-6 md:px-12 py-3 border-b border-border transition-all duration-300">
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
          <a href="tel:+919971508200" className="flex items-center gap-1.5 hover:text-foreground transition-colors group">
            <Phone size={12} className="text-emerald-600 group-hover:scale-110 transition-transform" />
            +91 99715 08200
          </a>
          <a href="mailto:info@jojopapers.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors group">
            <Mail size={12} className="text-blue-500 group-hover:scale-110 transition-transform" />
            info@jojopapers.com
          </a>
          <a href="https://instagram.com/jojopapers.co" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors group">
            <Instagram size={12} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
            @jojopapers.co
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
          MADE IN INDIA · SINCE 2014
        </div>
      </motion.div>

      <div className={`max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link to="/" className="flex flex-col relative z-50 group">
            <span className="font-['Cormorant_Garamond'] text-3xl md:text-[34px] font-semibold leading-none tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">JOJO</span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.35em] text-muted-foreground mt-1 ml-0.5">PAPERS</span>
          </Link>
        </motion.div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-8">
          {navLinks.map((link) => (
            <motion.div 
              key={link.name} 
              variants={itemVariants}
              className="relative group"
            >
              {link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link to={link.href} className="text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors py-4 inline-block">
                  {link.name}
                  <span className="absolute bottom-3 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a href={link.href} className="text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors py-4 inline-block">
                  {link.name}
                  <span className="absolute bottom-3 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
              
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-white border border-border shadow-xl min-w-[200px] flex flex-col py-2">
                    {link.dropdown.map(dropItem => (
                      <Link 
                        key={dropItem.name} 
                        to={dropItem.href}
                        className="px-6 py-2.5 text-[13px] text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors whitespace-nowrap"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </nav>
        
        {/* Contact Button */}
        <motion.div variants={itemVariants} className="hidden lg:flex items-center">
          <Link to="/contact" className="btn-premium-solid py-2.5 px-6 text-[11px]">
            Contact Us
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button 
          variants={itemVariants}
          className="lg:hidden text-foreground relative z-10 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col pt-32 px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-5 items-center text-center overflow-y-auto pb-20 w-full">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center w-full">
                  {link.dropdown ? (
                    <>
                      <button 
                        type="button"
                        className="flex items-center justify-center gap-2.5 py-1 text-2xl font-['Cormorant_Garamond'] text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
                        onClick={() => toggleMobileSubmenu(link.name)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-muted-foreground transition-transform duration-300 ${expandedMobileMenu === link.name ? 'rotate-180 text-foreground' : ''}`} 
                        />
                      </button>

                      <AnimatePresence>
                        {expandedMobileMenu === link.name && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="flex flex-col items-center gap-2.5 mt-3 mb-1 bg-secondary/35 w-full py-4 border-y border-border overflow-hidden"
                          >
                            <Link 
                              to={link.href}
                              className="text-[13.5px] font-semibold text-foreground hover:text-muted-foreground transition-colors pb-1 border-b border-border/70"
                              onClick={() => { setMobileMenuOpen(false); setExpandedMobileMenu(null); }}
                            >
                              All {link.name} →
                            </Link>
                            {link.dropdown.map(dropItem => (
                              <Link 
                                key={dropItem.name}
                                to={dropItem.href}
                                className="text-[14px] text-foreground/80 hover:text-foreground transition-colors py-0.5"
                                onClick={() => { setMobileMenuOpen(false); setExpandedMobileMenu(null); }}
                              >
                                {dropItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link 
                        to={link.href}
                        className="text-2xl font-['Cormorant_Garamond'] text-foreground hover:text-muted-foreground transition-colors py-1"
                        onClick={() => { setMobileMenuOpen(false); setExpandedMobileMenu(null); }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-2xl font-['Cormorant_Garamond'] text-foreground hover:text-muted-foreground transition-colors py-1"
                        onClick={() => { setMobileMenuOpen(false); setExpandedMobileMenu(null); }}
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </div>
              ))}
              <Link 
                to="/contact"
                className="bg-foreground text-background text-[13px] font-semibold uppercase tracking-widest px-8 py-4 w-full max-w-sm mt-6"
                onClick={() => { setMobileMenuOpen(false); setExpandedMobileMenu(null); }}
              >
                Contact Us
              </Link>
              
              <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border w-full max-w-sm text-sm text-foreground/80">
                <a href="tel:+919971508200" className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  +91 99715 08200
                </a>
                <a href="mailto:info@jojopapers.com" className="flex items-center justify-center gap-2">
                  <Mail size={14} />
                  info@jojopapers.com
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

