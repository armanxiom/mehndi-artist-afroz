import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610173826014-699763776269?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Mehndi Design"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/60 to-luxury-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold text-xs md:text-sm uppercase tracking-[0.5em] font-medium mb-4 block">
            Premium Bridal Mehndi Artist in Mumbai
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Professional <span className="italic text-gold-gradient">Mehndi Artist</span> in Mumbai
          </h1>
          <p className="text-cream/80 text-sm md:text-lg mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Bridal • Arabic • Minimal Mehndi Designs with Dark Stain Guarantee
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-luxury-black px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Book Now</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#gallery"
              className="w-full sm:w-auto border border-white/30 hover:border-white text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all backdrop-blur-sm"
            >
              View Mehndi Designs
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
