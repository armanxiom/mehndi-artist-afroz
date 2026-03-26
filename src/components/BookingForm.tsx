import React from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, MapPin, User, Phone, MessageCircle, Sparkles } from 'lucide-react';

export default function BookingForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.querySelector('input[placeholder="Full Name"]') as HTMLInputElement).value;
    const phone = (document.querySelector('input[placeholder="Phone Number"]') as HTMLInputElement).value;
    const event = (document.querySelector('select') as HTMLSelectElement).value;
    const date = (document.querySelector('input[type="date"]') as HTMLInputElement).value;
    const location = (document.querySelector('input[placeholder="Location in Mumbai"]') as HTMLInputElement).value;
    const message = (document.querySelector('textarea') as HTMLTextAreaElement).value;

    const text = `Hello AFROZ Mehndi Artist,
I want to book a mehndi appointment.

Name: ${name}
Phone: ${phone}
Event: ${event}
Date: ${date}
Location: ${location}

Message: ${message}`;

    const url = "https://wa.me/917705090700?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-luxury-black rounded-[3rem] overflow-hidden shadow-2xl border border-gold/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Form Side */}
            <div className="p-8 md:p-16">

              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                Reserve Your Date
              </span>

              <h2 className="text-4xl md:text-5xl text-white mb-10 leading-tight">
                Book Your <span className="italic text-gold-gradient">Appointment</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="relative group">
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" size={18} />
                    <select
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-gold focus:outline-none transition-all appearance-none"
                    >
                      <option value="" className="bg-luxury-black">Event Type</option>
                      <option value="bridal" className="bg-luxury-black">Bridal Mehndi</option>
                      <option value="arabic" className="bg-luxury-black">Arabic Mehndi</option>
                      <option value="minimal" className="bg-luxury-black">Minimal Mehndi</option>
                      <option value="festival" className="bg-luxury-black">Festival Mehndi</option>
                      <option value="other" className="bg-luxury-black">Other</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="date"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                </div>

                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" size={18} />
                  <input
                    type="text"
                    placeholder="Location in Mumbai"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>

                <div className="relative group">
                  <MessageCircle className="absolute left-4 top-4 text-white/30 group-focus-within:text-gold transition-colors" size={18} />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-white text-luxury-black py-5 rounded-2xl text-sm uppercase tracking-widest font-bold transition-all relative flex items-center justify-center transform hover:scale-[1.02]" 
                >
                  <span>Book Mehndi Appointment</span>
                  <Send size={18} className="absolute right-6 hidden md:block" />
                </button>

              </form>
            </div>

            {/* Image Side */}
            <div className="relative hidden lg:block">
              <img
                src="https://i.postimg.cc/FKkkWJqt/8a366bc9bc5ede879ee7666d88de77a4.jpg"
                alt="Afroz Mehndi Booking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}