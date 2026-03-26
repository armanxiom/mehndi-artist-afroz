import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      review: "Beautiful bridal mehndi with very dark stain. Afroz is very patient and detailed with her work.",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      review: "Highly professional mehndi artist in Mumbai. The patterns were so intricate and unique.",
      rating: 5,
    },
    {
      name: "Sana Khan",
      review: "Very neat and detailed mehndi designs. Perfect for my engagement ceremony.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl text-luxury-black mb-6 leading-tight">
            Happy <span className="italic text-gold-gradient">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gold/10 relative group"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors" size={48} />
              
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-luxury-black/70 text-lg italic mb-8 leading-relaxed font-light">
                "{review.review}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cream rounded-full mb-4 flex items-center justify-center text-gold font-serif text-xl border border-gold/20">
                  {review.name.charAt(0)}
                </div>
                <h3 className="text-xl font-serif text-luxury-black">{review.name}</h3>
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Verified Client</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
