/**
 * Home Page - Rita Salles Advocacia
 * Design: Professional law firm website with hero, experience, legal thesis, FAQ, and contact sections
 * Features: Responsive layout, smooth scrolling, SEO-optimized
 * Senior Refactor: Standardizing component injection and ensuring global floating CTA availability.
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import LegalThesis from '@/components/LegalThesis';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <LegalThesis />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
