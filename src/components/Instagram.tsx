import { motion } from 'motion/react';
import { Instagram as InstagramIcon, Heart, MessageCircle } from 'lucide-react';

export default function Instagram() {
  const posts = [
    { id: 1, url: "https://i.postimg.cc/9FZGgctw/sa-ka-ra-nasa-ta-2026-03-26-224704.png", likes: "1.2k", comments: "45" },
    { id: 2, url: "https://i.postimg.cc/Fsr98Z00/sa-ka-ra-nasa-ta-2026-03-26-225000.png", likes: "850", comments: "32" },
    { id: 3, url: "https://i.postimg.cc/jSWrYk26/sa-ka-ra-nasa-ta-2026-03-26-225127.png", likes: "2.1k", comments: "88" },
    { id: 4, url: "https://i.postimg.cc/YCBLjSyM/b82acd061c8b71b0e05222d26675c238.jpg", likes: "940", comments: "21" },
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <InstagramIcon size={48} className="text-gold mx-auto mb-6" />
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
            Follow Our Journey
          </span>
          <h2 className="text-4xl md:text-6xl text-luxury-black mb-6 leading-tight">
            Latest <span className="italic text-gold-gradient">Instagram</span> Posts
          </h2>
          <a
            href="https://instagram.com/mehndi_artist_afroz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-black/50 hover:text-gold transition-colors text-lg font-light tracking-widest"
          >
            @mehndi_artist_afroz
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.url}
                alt={`Instagram Post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <Heart size={20} className="fill-white" />
                  <span className="text-sm font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle size={20} className="fill-white" />
                  <span className="text-sm font-bold">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="https://instagram.com/mehndi_artist_afroz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-luxury-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
