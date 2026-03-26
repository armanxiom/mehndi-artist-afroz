import { motion } from 'motion/react';
import { ShieldCheck, Droplets, UserCheck, Wallet, Home } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      title: "Dark Stain Guarantee",
      description: "We use premium quality mehndi that ensures a deep, dark stain every time.",
      icon: <Droplets size={32} className="text-gold" />,
    },
    {
      title: "Premium Mehndi Cones",
      description: "Our cones are freshly prepared with natural ingredients for the best results.",
      icon: <ShieldCheck size={32} className="text-gold" />,
    },
    {
      title: "Professional Experience",
      description: "Years of experience in creating intricate bridal and Arabic designs.",
      icon: <UserCheck size={32} className="text-gold" />,
    },
    {
      title: "Affordable Pricing",
      description: "Luxury mehndi services that fit your budget without compromising quality.",
      icon: <Wallet size={32} className="text-gold" />,
    },
    {
      title: "Home Service in Mumbai",
      description: "Enjoy professional mehndi services in the comfort of your home.",
      icon: <Home size={32} className="text-gold" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                Why Choose Us
              </span>

              <h2 className="text-4xl md:text-6xl text-luxury-black mb-10 leading-tight">
                The Afroz <span className="italic text-gold-gradient">Difference</span>
              </h2>

              <p className="text-luxury-black/60 text-lg mb-12 leading-relaxed font-light">
                We believe every bride deserves a masterpiece. Our commitment to quality and detail sets us apart as the leading mehndi artist in Mumbai.
              </p>

              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="p-4 bg-cream rounded-2xl group-hover:bg-gold transition-colors duration-300 group-hover:text-white">
                      {reason.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-luxury-black mb-2 group-hover:text-gold transition-colors">
                        {reason.title}
                      </h3>

                      <p className="text-luxury-black/50 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>

                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

          {/* RIGHT SLIDER */}
          <div className="relative hidden lg:flex justify-center">

            <div className="w-[420px] h-[520px] rounded-[40px] overflow-hidden shadow-2xl relative">

              <motion.img
                src="https://i.postimg.cc/tgGncgHq/06fd861d29f2720ac2b5353e64789992.jpg"
                className="absolute w-full h-full object-cover"
                animate={{ opacity: [1,0,0,0,1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <motion.img
                src="https://i.postimg.cc/ZqzvQqhN/0eb1ef40f1dc06d5c9c82220474d23d8.jpg"
                className="absolute w-full h-full object-cover"
                animate={{ opacity: [0,1,0,0,0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <motion.img
                src="https://i.postimg.cc/8CgfYCVM/cb20aa61ed38bd0b8087e0d19e886982.jpg"
                className="absolute w-full h-full object-cover"
                animate={{ opacity: [0,0,1,0,0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <motion.img
                src="https://i.postimg.cc/mrW1nrGH/d3e8c9652da495e6d41e83068d21d256.jpg
"
                className="absolute w-full h-full object-cover"
                animate={{ opacity: [0,0,0,1,0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}