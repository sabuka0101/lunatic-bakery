import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Clock, MapPin } from "lucide-react";

interface HeroProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Hero({ lang, t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-cream pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Decorative ambient background curves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-tan/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-brand-warm/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1.5 bg-brand-dark text-white text-[10px] uppercase tracking-[0.2em] rounded-xs w-fit"
            >
              <span className="font-mono font-bold">
                {lang === "en" ? "Artisan Bakery & Coffee" : "ავთენტური საცხობი და ყავა"}
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-[90px] leading-[0.95] font-black italic tracking-tighter text-brand-dark"
              >
                {t("heroTitle")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-brand-dark/70 text-sm sm:text-base font-medium max-w-md leading-relaxed"
              >
                {t("heroSubtitle")}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#menu"
                className="bg-brand-dark hover:bg-opacity-90 text-white font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-none transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                {t("heroExploreMenu")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-tan" />
              </a>

              <a
                href="#contact"
                className="border border-brand-dark hover:bg-brand-dark hover:text-white text-brand-dark font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-none transition-all duration-300 cursor-pointer"
              >
                {lang === "en" ? "Find Us" : "დაგვიკავშირდით"}
              </a>
            </motion.div>

            {/* Quick Badges / Micro Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-brand-dark/15 grid grid-cols-2 gap-6 max-w-md"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-warm/60 text-brand-dark border border-brand-dark/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">
                    {lang === "en" ? "Location" : "მისამართი"}
                  </h4>
                  <p className="text-xs text-brand-dark font-semibold mt-1">
                    {lang === "en" ? "7 Kavsadze St, Tbilisi" : "ყავშაძის 7, თბილისი"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-warm/60 text-brand-dark border border-brand-dark/10">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">
                    {lang === "en" ? "Opening Hours" : "სამუშაო საათები"}
                  </h4>
                  <p className="text-xs text-brand-dark font-semibold mt-1">
                    {lang === "en" ? "Daily, 10:00–22:00" : "ყოველდღე, 10:00–22:00"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Showcase (Framed Artwork) */}
          <div className="lg:col-span-5 relative flex justify-center py-8">
            {/* The background overlay graphics */}
            <div className="absolute inset-0 bg-brand-warm/40 rounded-3xl flex items-center justify-center overflow-hidden -z-10">
              <div className="w-[140%] h-[120%] rotate-6 bg-brand-tan/10 rounded-[100px] border border-brand-dark/5"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 sm:w-80 aspect-3/4 rounded-t-full shadow-2xl overflow-hidden border-[8px] border-white bg-brand-warm flex flex-col justify-end"
            >
              {/* Main Image */}
              <img
                src="images/hero-bakery.webp"
                alt="Lunatic Bakery Interior"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* L. decorative letter */}
              <div className="absolute top-8 left-8 text-white font-serif text-6xl opacity-30 italic font-black pointer-events-none select-none">L.</div>

              {/* High contrast overlay badge */}
              <div className="relative z-10 w-full bg-brand-dark text-white p-5 flex flex-col justify-between h-2/5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-tan font-bold">
                    {lang === "en" ? "Featured Today" : "დღის რჩეული"}
                  </p>
                  <p className="text-lg font-serif italic mt-0.5">
                    {lang === "en" ? "Pistachio Cream Dream" : "ფსტას კრემ-ოცნება"}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs font-mono tracking-wider">12.00 GEL</p>
                  <span className="text-[9px] uppercase tracking-widest bg-brand-tan text-brand-dark px-2 py-0.5 font-bold">100% ARTISAN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
