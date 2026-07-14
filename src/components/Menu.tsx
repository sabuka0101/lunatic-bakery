import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowUpRight, Heart, X, Sparkles } from "lucide-react";
import { products } from "../data/products.js";
import { ORDER_LINKS } from "../config";

interface MenuProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Menu({ lang, t }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product: any) => product.category))) as string[]
  ];

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product: any) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    const name = (lang === "en" ? product.nameEn : product.nameGe).toLowerCase();
    const description = (lang === "en" ? product.descriptionEn : product.descriptionGe).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = name.includes(query) || description.includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] bg-brand-dark text-white px-3 py-1 rounded-xs font-mono font-bold tracking-widest uppercase inline-block"
          >
            {lang === "en" ? "Fresh Daily Selection" : "ყოველდღიური ასორტიმენტი"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark"
          >
            {t("menuTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-dark/60 font-semibold text-xs sm:text-sm uppercase tracking-widest max-w-lg mx-auto"
          >
            {t("menuSubtitle")}
          </motion.p>
        </div>

        {/* Filters and Search Dashboard */}
        <div className="flex flex-col gap-6 mb-16">
          {/* Search Bar (Centered, sharp typography design) */}
          <div className="max-w-md w-full mx-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brand-dark/40 group-focus-within:text-brand-dark transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-brand-dark/15 focus:border-brand-dark text-brand-dark text-xs font-bold tracking-wider uppercase rounded-none transition-all duration-300 outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-brand-dark/40 hover:text-brand-dark transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categories Horizontal Scrolling Container */}
          <div className="w-full overflow-x-auto no-scrollbar py-2 -mx-4 px-4 flex justify-center md:overflow-visible">
            <div className="flex gap-2 shrink-0 md:flex-wrap md:justify-center">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                const translationKey = category === "All" ? "categoryAll" : `category${category.replace(/\s+/g, "")}`;
                const label = t(translationKey);

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-none text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-brand-dark text-white border-brand-dark"
                        : "bg-brand-warm/30 hover:bg-brand-warm/60 text-brand-dark/70 hover:text-brand-dark border-brand-dark/10"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Menu Grid with Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: any) => {
              const name = lang === "en" ? product.nameEn : product.nameGe;
              const description = lang === "en" ? product.descriptionEn : product.descriptionGe;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="group bg-white rounded-none overflow-hidden border border-brand-dark/10 hover:border-brand-dark hover:shadow-sm transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-video overflow-hidden bg-brand-cream shrink-0 border-b border-brand-dark/10">
                    {/* Badge for featured item */}
                    {product.featured && (
                      <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest uppercase bg-brand-dark text-white border border-brand-dark flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-brand-tan" />
                        {lang === "en" ? "Signature" : "ავტორული"}
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Body details */}
                  <div className="p-6 flex flex-col flex-grow bg-[#FDFCFB]">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="font-display font-black italic text-brand-dark group-hover:text-brand-tan transition-colors text-lg leading-snug">
                        {name}
                        {product.quantityInfo && (
                          <span className="not-italic font-mono text-[9px] font-bold text-brand-dark/40 bg-brand-dark/5 border border-brand-dark/5 px-1.5 py-0.5 ml-2 uppercase align-middle">
                            {product.quantityInfo}
                          </span>
                        )}
                      </h3>
                      <span className="font-mono text-xs font-bold text-brand-dark bg-brand-warm/60 px-2.5 py-1 rounded-none border border-brand-dark/10 shrink-0">
                        {product.price.toFixed(2)} {t("currency")}
                      </span>
                    </div>

                    <p className="text-brand-dark/70 font-light text-xs sm:text-sm line-clamp-2 mb-6 leading-relaxed flex-grow">
                      {description}
                    </p>

                    {/* Ordering Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-dark/10">
                      <a
                        href={ORDER_LINKS.wolt || "https://wolt.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-2.5 px-3 rounded-none border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-warm/20 text-brand-dark transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00c2e8]" />
                        Wolt
                        <ArrowUpRight className="w-3 h-3 text-brand-dark/40" />
                      </a>

                      <a
                        href={ORDER_LINKS.glovo || "https://glovoapp.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-2.5 px-3 rounded-none border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-warm/20 text-brand-dark transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc010]" />
                        Glovo
                        <ArrowUpRight className="w-3 h-3 text-brand-dark/40" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-brand-warm/15 rounded-none border border-brand-dark/10"
          >
            <p className="text-brand-dark/60 text-xs sm:text-sm font-bold uppercase tracking-widest">
              {t("noProducts")}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
