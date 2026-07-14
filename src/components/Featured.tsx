import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ShoppingCart } from "lucide-react";
import { products } from "../data/products.js";
import { ORDER_LINKS } from "../config";

interface FeaturedProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Featured({ lang, t }: FeaturedProps) {
  // Filter for featured products only
  const featuredProducts = products.filter((p: any) => p.featured);

  return (
    <section id="featured" className="py-24 bg-brand-warm/15 relative overflow-hidden border-t border-brand-dark/10">
      {/* Accent graphics */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-tan/5 rounded-full blur-2xl -z-10" />

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
            {lang === "en" ? "Selected Delicacies" : "რჩეული ნუგბარი"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark"
          >
            {t("featuredTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-dark/60 font-semibold text-xs sm:text-sm uppercase tracking-widest max-w-lg mx-auto"
          >
            {t("featuredSubtitle")}
          </motion.p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product: any, idx: number) => {
            const name = lang === "en" ? product.nameEn : product.nameGe;
            const description = lang === "en" ? product.descriptionEn : product.descriptionGe;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-none overflow-hidden shadow-xs hover:shadow-md border border-brand-dark/10 hover:border-brand-dark flex flex-col h-full transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-brand-cream border-b border-brand-dark/10">
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[9px] font-mono tracking-widest font-bold uppercase bg-brand-dark text-white border border-brand-dark">
                    {lang === "en" ? product.category : t(`category${product.category.replace(" ", "")}`)}
                  </span>

                  <img
                    src={product.image}
                    alt={name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle black overlay on hover */}
                  <div className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow bg-[#FDFCFB]">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-display font-black italic text-brand-dark group-hover:text-brand-tan transition-colors duration-250 text-lg sm:text-xl leading-tight">
                      {name}
                      {product.quantityInfo && (
                        <span className="not-italic font-mono text-[9px] font-bold text-brand-dark/40 bg-brand-dark/5 border border-brand-dark/5 px-1.5 py-0.5 ml-2 uppercase align-middle">
                          {product.quantityInfo}
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-xs font-bold text-brand-cream bg-brand-dark px-2 py-1 rounded-none border border-brand-dark shrink-0">
                      {product.price.toFixed(2)} {t("currency")}
                    </span>
                  </div>

                  <p className="text-brand-dark/70 font-light text-xs sm:text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
                    {description}
                  </p>

                  <div className="space-y-2 mt-auto pt-4 border-t border-brand-dark/10">
                    <a
                      href={ORDER_LINKS.wolt || "https://wolt.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-none border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-warm/20 text-brand-dark transition-all duration-250"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00c2e8]" />
                        {t("orderWolt")}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-dark/40" />
                    </a>

                    <a
                      href={ORDER_LINKS.glovo || "https://glovoapp.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-none border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-warm/20 text-brand-dark transition-all duration-250"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc010]" />
                        {t("orderGlovo")}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-dark/40" />
                    </a>
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
