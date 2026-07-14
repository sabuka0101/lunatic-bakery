import React from "react";
import { motion } from "motion/react";
import { Flame, Sparkles, Heart, Coffee, BookOpen, Warehouse } from "lucide-react";

interface WhyChooseUsProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function WhyChooseUs({ lang, t }: WhyChooseUsProps) {
  const points = [
    {
      title: t("whyFreshBaking"),
      description: t("whyFreshBakingDesc"),
      icon: Flame,
    },
    {
      title: t("whyPremiumIngredients"),
      description: t("whyPremiumIngredientsDesc"),
      icon: Sparkles,
    },
    {
      title: t("whyHandmadeDesserts"),
      description: t("whyHandmadeDessertsDesc"),
      icon: Heart,
    },
    {
      title: t("whySpecialtyCoffee"),
      description: t("whySpecialtyCoffeeDesc"),
      icon: Coffee,
    },
    {
      title: t("whyUniqueRecipes"),
      description: t("whyUniqueRecipesDesc"),
      icon: BookOpen,
    },
    {
      title: t("whyCozyAtmosphere"),
      description: t("whyCozyAtmosphereDesc"),
      icon: Warehouse,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-warm/20 overflow-hidden relative border-t border-brand-dark/10">
      {/* Decorative curves */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-tan/5 rounded-full blur-3xl -z-10" />

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
            {lang === "en" ? "Uncompromised Quality" : "უკომპრომისო სტანდარტები"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark"
          >
            {t("whyTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-dark/60 font-semibold text-xs sm:text-sm uppercase tracking-widest max-w-lg mx-auto"
          >
            {t("whySubtitle")}
          </motion.p>
        </div>

        {/* Bento/Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-white rounded-none border border-brand-dark/10 hover:border-brand-dark hover:shadow-sm transition-all duration-300 flex flex-col items-start gap-5"
              >
                {/* Icon wrapper */}
                <div className="p-3.5 bg-brand-warm/60 text-brand-dark border border-brand-dark/10 rounded-none group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text description */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-brand-dark group-hover:text-brand-tan text-lg sm:text-xl transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-brand-dark/70 font-light text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
