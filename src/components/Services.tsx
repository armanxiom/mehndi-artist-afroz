import { motion } from 'motion/react';
import { Heart, Stars, Sparkles, Calendar, Baby } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Bridal Mehndi",
      description: "Full bridal mehndi designs for weddings and engagements.",
      icon: <Heart size={32} className="text-gold" />,
      image: "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Arabic Mehndi",
      description: "Modern stylish Arabic mehndi designs.",
      icon: <Stars size={32} className="text-gold" />,
      image: "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Minimal Mehndi",
      description: "Elegant and trendy minimal mehndi designs.",
      icon: <Sparkles size={32} className="text-gold" />,
      image: "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Festival Mehndi",
      description: "Karva Chauth, Eid, Diwali, Teej and other festivals.",
      icon: <Calendar size={32} className="text-gold" />,
      image: "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Kids Mehndi",
      description: "Cute mehndi designs for children.",
      icon: <Baby size={32} className="text-gold" />,
      image: "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl text-luxury-black mb-6 leading-tight">
            Mehndi <span className="italic text-gold-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gold/10 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-cream rounded-2xl w-fit group-hover:bg-gold transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-luxury-black mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-luxury-black/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-xs uppercase tracking-widest font-bold text-luxury-black group-hover:text-gold transition-colors">
                  <span>Learn More</span>
                  <motion.div
                    className="ml-2 h-px w-6 bg-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: 24 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
