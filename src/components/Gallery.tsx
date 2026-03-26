import { motion } from 'motion/react';
import { Instagram, Search } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      url: "https://i.postimg.cc/cJr7mwDN/pxbee-2026-03-26-22-57-53.jpg",
      title: "Arabic Style",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/pdkqdPmb/362c63dc245d941a14a33119d7bcae10.jpg",
      title: "Intricate Patterns",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/kXX8nWWf/7e5390a92a05a4b420b7d5c8e148d97b.jpg",
      title: "bridal",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/28DYvxHk/784ee6a84c4e79b906f492606fe15340.jpgs",
      title: "Minimal Design",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/MG81JN5M/396535a7471e932e0b2c1ccc408b579b.jpg",
      title: "Full Hand Mehndi",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/VNcXPpgt/e5e7b82af8885d694d7a41d3e3c047cc.jpg",
      title: "Festival Special",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl text-luxury-black mb-6 leading-tight">
              Recent Mehndi <span className="italic text-gold-gradient">Designs</span>
            </h2>
            <p className="text-luxury-black/50 text-sm md:text-lg font-light tracking-wide">
              Explore our latest intricate patterns and bridal masterpieces.
            </p>
          </div>
          <a
            href="https://instagram.com/mehndi_artist_afroz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-luxury-black hover:text-gold transition-colors group"
          >
            <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-bold">Follow on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group aspect-square rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                <Search size={32} className="text-gold mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <h3 className="text-white text-2xl font-serif mb-2">{image.title}</h3>
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold">View Design</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
