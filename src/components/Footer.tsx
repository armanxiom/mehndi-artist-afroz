import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 border border-gold rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-8">
              <span className="text-3xl font-serif tracking-widest font-bold text-white">Mehndi Artist</span>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium -mt-1">AFROZ</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-light tracking-wide">
              Professional bridal mehndi artist in Mumbai specializing in intricate patterns and dark stain guarantee.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mehndi_artist_afroz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:7705090700"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:mehndiartistafroz@gmail.com"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-8 border-b border-gold/20 pb-4 inline-block">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Pricing', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 hover:text-gold transition-colors text-sm uppercase tracking-widest font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif text-white mb-8 border-b border-gold/20 pb-4 inline-block">Our Services</h3>
            <ul className="space-y-4">
              {['Bridal Mehndi', 'Arabic Mehndi', 'Minimal Mehndi', 'Festival Mehndi', 'Kids Mehndi'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-gold transition-colors text-sm uppercase tracking-widest font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-white mb-8 border-b border-gold/20 pb-4 inline-block">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone size={18} className="text-gold mt-1" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:7705090700" className="text-white hover:text-gold transition-colors font-medium">7705090700</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail size={18} className="text-gold mt-1" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:mehndiartistafroz@gmail.com" className="text-white hover:text-gold transition-colors font-medium">mehndiartistafroz@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-gold mt-1" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">Mumbai, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium text-center md:text-left">
            © {new Date().getFullYear()} Mehndi Artist Afroz. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-3 text-white/30 hover:text-gold transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-bold">Back to Top</span>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
