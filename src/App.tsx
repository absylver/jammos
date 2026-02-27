import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import StoreTeaser from './components/StoreTeaser';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <About />
        <StoreTeaser />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
