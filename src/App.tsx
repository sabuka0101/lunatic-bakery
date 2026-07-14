import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations } from "./data/translations";

export default function App() {
  const [lang, setLang] = useState<"en" | "ge">("en");

  // Localized translator helper
  const t = (key: string): any => {
    return translations[lang]?.[key] || key;
  };

  return (
    <div className="bg-brand-cream font-sans text-brand-dark antialiased min-h-screen selection:bg-brand-tan/30 selection:text-brand-dark">
      {/* Dynamic Header & Sticky Navigation */}
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Main Single Page Content Blocks */}
      <main>
        {/* Hero Section */}
        <Hero lang={lang} t={t} />

        {/* Featured Best Sellers Section */}
        <Featured lang={lang} t={t} />

        {/* Interactive Menu Dashboard (Search, Category Filtration, Deliveries) */}
        <Menu lang={lang} t={t} />

        {/* Editorial Brand Story (About) */}
        <About lang={lang} t={t} />

        {/* Brand Value Pillars (Why Choose Us) */}
        <WhyChooseUs lang={lang} t={t} />

        {/* Custom Photorealistic Bento Gallery & Lightbox */}
        <Gallery lang={lang} t={t} />

        {/* Localized Testimonial Carousel Grid */}
        <Reviews lang={lang} t={t} />

        {/* Map Location & Contact Channels */}
        <Contact lang={lang} t={t} />
      </main>

      {/* Footer Branding & Trademark credits */}
      <Footer lang={lang} t={t} />
    </div>
  );
}
