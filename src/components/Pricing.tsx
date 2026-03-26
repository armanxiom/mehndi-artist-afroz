import { motion } from 'motion/react';
import { Tag, Sparkles } from 'lucide-react';

export default function Pricing() {
  const pricingData = [
    {
      title: "Bridal Mehndi",
      price: "₹5000 – ₹15000",
      description: "Full bridal mehndi designs for weddings and engagements.",
      isPopular: true,
    },
    {
      title: "Full Hand Mehndi",
      price: "₹1000 – ₹3000",
      description: "Detailed designs covering full hands.",
      isPopular: false,
    },
    {
      title: "Arabic Mehndi",
      price: "₹500 – ₹1500",
      description: "Modern stylish Arabic mehndi designs.",
      isPopular: false,
    },
    {
      title: "Festival Mehndi",
      price: "₹300 – ₹800",
      description: "Karva Chauth, Eid, Diwali, Teej and other festivals.",
      isPopular: false,
    },
    {
      title: "Kids Mehndi",
      price: "₹100 – ₹300",
      description: "Cute mehndi designs for children.",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 border border-gold rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
            Our <span className="italic text-gold-gradient">Packages</span>
          </h2>
          <p className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto font-light tracking-wide">
            Premium quality mehndi services at competitive prices in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                item.isPopular ? 'border-gold bg-gold/5' : 'border-white/10 bg-white/5'
              } hover:border-gold transition-all group`}
            >
              {item.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-luxury-black text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full flex items-center space-x-1">
                  <Sparkles size={10} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="flex items-baseline space-x-2 mb-8">
                <span className="text-3xl font-serif text-gold">{item.price}</span>
              </div>

              <a
                href="#booking"
                className={`w-full block text-center py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                  item.isPopular
                    ? 'bg-gold text-luxury-black hover:bg-white'
                    : 'border border-white/20 text-white hover:bg-white hover:text-luxury-black'
                }`}
              >
                Book This Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
