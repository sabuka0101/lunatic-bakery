import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface AboutProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function About({ lang, t }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-brand-cream overflow-hidden relative border-t border-brand-dark/10">
      {/* Decorative backing circle */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-warm/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Editorial Image (Flour dusting, kneading) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-72 sm:w-80 aspect-3/4 rounded-t-full overflow-hidden shadow-xl border-[8px] border-white bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
                alt="Flour Dusting & Artisan Kneading"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay with subtle text */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-[9px] font-mono tracking-widest uppercase opacity-80 text-brand-tan font-bold">
                  {lang === "en" ? "Daily Ritual" : "ყოველდღიური რიტუალი"}
                </p>
                <p className="font-serif italic font-bold text-base mt-1">
                  {lang === "en" ? "Ovens pre-heated since 05:00" : "ღუმელები ცხელია 05:00-დან"}
                </p>
              </div>
            </motion.div>

            {/* Backing structural panel to give dimension */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-tan/5 rounded-full blur-xl -z-10" />
          </div>

          {/* Column 2: Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[10px] bg-brand-dark text-white px-3 py-1 rounded-xs font-mono font-bold tracking-widest uppercase inline-block"
              >
                {t("aboutTitle")}
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark leading-none"
              >
                {t("aboutSubtitle")}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-brand-dark/70 font-light text-sm sm:text-base leading-relaxed"
            >
              <p>{t("aboutText1")}</p>
              <p>{t("aboutText2")}</p>
            </motion.div>

            {/* Premium Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 bg-brand-warm/30 border-l-4 border-brand-dark rounded-none"
            >
              <Quote className="absolute top-4 right-6 w-16 h-16 text-brand-dark/5 pointer-events-none" />
              <p className="font-serif italic font-medium text-brand-dark text-sm sm:text-base leading-relaxed relative z-10">
                {t("aboutQuote")}
              </p>
              <span className="block mt-4 text-[9px] font-bold text-brand-dark/50 uppercase tracking-widest">
                — {lang === "en" ? "Head Pastry Baker, Tbilisi" : "მთავარი კონდიტერი, თბილისი"}
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
