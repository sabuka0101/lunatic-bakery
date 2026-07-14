import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Sparkles, Moon } from "lucide-react";

interface GalleryProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Gallery({ lang, t }: GalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: "/images/hero-bakery.webp",
      titleEn: "Our Tbilisi Sanctuary",
      titleGe: "ჩვენი თბილისური თავშესაფარი",
      categoryEn: "Interior",
      categoryGe: "ინტერიერი",
      size: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      image: "/images/pistachio-gooey.webp",
      titleEn: "Pistachio Gooey Cookies",
      titleGe: "ფსტას კრემოვანი ორცხობილები",
      categoryEn: "Signature",
      categoryGe: "ავტორული",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
      titleEn: "Barista Latte Art",
      titleGe: "ბარისტას ლატე არტი",
      categoryEn: "Coffee",
      categoryGe: "ყავა",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      image: "/images/cheesecake.webp",
      titleEn: "Burnt San Sebastian",
      titleGe: "სან სებასტიანის ჩიზქეიქი",
      categoryEn: "Cakes",
      categoryGe: "ჩიზქეიქები",
      size: "md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      image: "/images/croissants.webp",
      titleEn: "Crisp Laminations",
      titleGe: "ხრაშუნა ფენები",
      categoryEn: "Croissants",
      categoryGe: "კრუასანები",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
      titleEn: "Flour & Passion",
      titleGe: "ფქვილი და ვნება",
      categoryEn: "Baking",
      categoryGe: "გამოცხობა",
      size: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-cream relative border-t border-brand-dark/10">
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
            {lang === "en" ? "Visual Sanctuary" : "ვიზუალური გალერეა"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark"
          >
            {lang === "en" ? "Captured Moments" : "აღბეჭდილი წამები"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-dark/60 font-semibold text-xs sm:text-sm uppercase tracking-widest max-w-lg mx-auto"
          >
            {lang === "en"
              ? "Take a visual tour inside our bakery kitchen and cozy dine-in space in Tbilisi."
              : "იმოგზაურეთ ჩვენს მყუდრო სამზარეულოსა და თბილისურ დარბაზში."}
          </motion.p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[200px]">
          {galleryItems.map((item, idx) => {
            const title = lang === "en" ? item.titleEn : item.titleGe;
            const category = lang === "en" ? item.categoryEn : item.categoryGe;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setActiveImage(item.image)}
                className={`relative group overflow-hidden rounded-none shadow-xs hover:shadow-md border border-brand-dark/10 cursor-pointer ${item.size}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Glassmorphic Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="absolute top-4 right-4 bg-white p-2.5 rounded-none text-brand-dark transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="bg-brand-dark text-white px-5 py-3.5 rounded-none border border-brand-dark transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md w-full">
                    <span className="text-[9px] font-mono tracking-widest text-brand-tan font-bold uppercase block">
                      {category}
                    </span>
                    <span className="font-display font-bold italic text-white text-sm sm:text-base block mt-0.5">
                      {title}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-none bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all border border-white/10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="max-w-5xl max-h-[85vh] overflow-hidden rounded-none border border-brand-dark/30 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Enlarged gallery item"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain rounded-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
