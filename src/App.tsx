import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import WhyChoose from './components/WhyChoose';
import Instagram from './components/Instagram';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-cream selection:bg-gold selection:text-luxury-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Reviews />
        <WhyChoose />
        <Instagram />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Global Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#C5A059_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
    </div>
  );
}
