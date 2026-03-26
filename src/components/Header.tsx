import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-serif tracking-widest font-bold text-luxury-black">Mehndi Artist</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium -mt-1">AFROZ</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-luxury-black hover:text-gold transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:7705090700"
            className="flex items-center space-x-2 bg-luxury-black text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-gold transition-colors"
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luxury-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream border-t border-gold/10 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-luxury-black hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:7705090700"
                className="flex items-center justify-center space-x-2 bg-luxury-black text-white py-4 rounded-lg text-sm uppercase tracking-widest"
              >
                <Phone size={18} />
                <span>Call 7705090700</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
