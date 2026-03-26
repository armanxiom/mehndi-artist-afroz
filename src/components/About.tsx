import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Detailed intricate patterns",
    "Premium quality mehndi cones",
    "Dark stain guaranteed",
    "Long lasting designs",
    "Home service in Mumbai",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/pdkqdPmb/362c63dc245d941a14a33119d7bcae10.jpg"
                alt="Mehndi Artist Afroz"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-gold rounded-tl-3xl z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-gold rounded-br-3xl z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              The Artist Behind the Patterns
            </span>
            <h2 className="text-4xl md:text-6xl text-luxury-black mb-8 leading-tight">
              About Mehndi Artist  <br />
              <span className="italic text-gold-gradient">Afroz</span>
            </h2>
            <p className="text-luxury-black/70 text-lg mb-8 leading-relaxed font-light">
              Afroz is a professional mehndi artist based in Mumbai specializing in bridal, Arabic and minimal mehndi designs. With detailed intricate patterns and premium mehndi cones, Afroz provides high-quality mehndi services for weddings, engagements, festivals and special occasions.
            </p>
            <p className="text-luxury-black/90 font-medium mb-10 text-xl italic border-l-4 border-gold pl-6">
              "Dark stain guaranteed with long lasting designs."
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center space-x-3 text-luxury-black/80">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
