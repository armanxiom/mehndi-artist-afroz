import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      value: "7705090700",
      href: "tel:7705090700",
      icon: <Phone size={24} className="text-gold" />,
    },
    {
      title: "Email",
      value: "mehndiartistafroz@gmail.com",
      href: "mailto:mehndiartistafroz@gmail.com",
      icon: <Mail size={24} className="text-gold" />,
    },
    {
      title: "Location",
      value: "Mumbai, Maharashtra, India",
      href: "https://maps.google.com/?q=Mumbai+Maharashtra+India",
      icon: <MapPin size={24} className="text-gold" />,
    },
    {
      title: "Instagram",
      value: "@mehndi_artist_afroz",
      href: "https://instagram.com/mehndi_artist_afroz",
      icon: <Instagram size={24} className="text-gold" />,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl text-luxury-black mb-10 leading-tight">
              Contact <span className="italic text-gold-gradient">Afroz</span>
            </h2>
            <p className="text-luxury-black/60 text-lg mb-12 leading-relaxed font-light">
              Ready to adorn your hands with beautiful patterns? Reach out to us for bookings and inquiries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-6 group"
                >
                  <div className="p-4 bg-white rounded-2xl group-hover:bg-gold transition-colors duration-300 group-hover:text-white shadow-sm border border-gold/10">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-black/40 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lg font-serif text-luxury-black group-hover:text-gold transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-3xl border border-gold/10 shadow-sm flex items-center space-x-6">
              <div className="p-4 bg-cream rounded-2xl text-gold">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-black/40 mb-1">
                  Working Hours
                </h3>
                <p className="text-lg font-serif text-luxury-black">
                  Mon - Sun: 9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711465000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Afroz Mehndi Artist Mumbai Location"
              ></iframe>
            </div>
            {/* Decorative Gold Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
