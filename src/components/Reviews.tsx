import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface ReviewsProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Reviews({ lang, t }: ReviewsProps) {
  const reviewsList = t("reviews") || [];

  return (
    <section id="reviews" className="py-24 bg-brand-warm/15 overflow-hidden relative border-t border-brand-dark/10">
      {/* Decorative curves */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-tan/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] bg-brand-dark text-white px-3 py-1 rounded-xs font-mono font-bold tracking-widest uppercase inline-block"
          >
            {lang === "en" ? "Guest Testimonials" : "სტუმრების შეფასებები"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark"
          >
            {t("reviewsTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-dark/60 font-semibold text-xs sm:text-sm uppercase tracking-widest max-w-lg mx-auto"
          >
            {t("reviewsSubtitle")}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((review: any, idx: number) => {
            return (
              <motion.div
                key={review.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="p-8 sm:p-10 bg-white rounded-none border border-brand-dark/10 hover:border-brand-dark hover:shadow-sm transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-warm/60 pointer-events-none" />

                <div className="space-y-6">
                  {/* Stars rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-tan text-brand-tan" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-brand-dark/80 font-serif italic text-sm sm:text-base leading-relaxed">
                    “{review.text}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-brand-dark/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-brand-dark flex items-center justify-center font-display font-bold text-brand-cream text-xs border border-brand-dark">
                    {review.author.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-dark text-sm">
                      {review.author}
                    </h4>
                    <p className="text-brand-dark/50 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
