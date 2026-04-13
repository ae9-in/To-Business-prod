import Navbar from '@/components/Navbar';
import TickerStrip from '@/components/TickerStrip';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#374151] font-sans selection:bg-indigo-500/30 selection:text-indigo-900">
      <Navbar />
      <main>
        <TickerStrip />
        <HeroSection />
        <HowItWorks />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
