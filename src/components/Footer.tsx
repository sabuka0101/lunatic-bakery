import React from "react";
import { Moon, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import { ORDER_LINKS } from "../config";

interface FooterProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Footer({ lang, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navFeatured"), href: "#featured" },
    { label: t("navMenu"), href: "#menu" },
    { label: t("navAbout"), href: "#about" },
    { label: t("navWhyUs"), href: "#why-us" },
    { label: t("navReviews"), href: "#reviews" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <footer className="bg-brand-dark text-brand-cream/80 py-16 border-t border-brand-dark/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Section 1: Logo & Tagline */}
          <div className="md:col-span-4 space-y-6">
            <a href="#hero" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 rounded-none bg-brand-cream flex items-center justify-center text-brand-dark transition-transform duration-500 group-hover:rotate-180">
                <Moon className="w-5 h-5 fill-brand-dark text-brand-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-black italic tracking-widest text-white">
                  LUNATIC
                </span>
                <span className="text-[9px] tracking-[0.25em] text-brand-tan font-mono -mt-1 uppercase font-bold">
                  Artisan Bakery
                </span>
              </div>
            </a>
            <p className="text-brand-cream/60 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              {t("footerText")}
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-tan hover:text-brand-dark text-brand-cream transition-colors"
                aria-label="Instagram link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-tan hover:text-brand-dark text-brand-cream transition-colors"
                aria-label="Facebook link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white font-mono">
              {lang === "en" ? "Explore" : "ნავიგაცია"}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-cream/60 hover:text-brand-tan text-xs sm:text-sm font-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info Summary */}
          <div className="md:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white font-mono">
              {lang === "en" ? "Visit" : "მისამართი"}
            </h4>
            <div className="space-y-2 text-brand-cream/60 font-light">
              <p className="hover:text-brand-tan transition-colors cursor-pointer leading-snug">
                {t("contactAddress")}
              </p>
              <p className="leading-snug">{t("contactHours")}</p>
            </div>
          </div>

          {/* Section 4: Instant Order redirect */}
          <div className="md:col-span-2 space-y-4 text-xs sm:text-sm">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white font-mono">
              {lang === "en" ? "Order" : "შეკვეთა"}
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={ORDER_LINKS.wolt || "https://wolt.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-brand-tan text-brand-cream/60 font-light"
              >
                Wolt Tbilisi
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-cream/40" />
              </a>
              <a
                href={ORDER_LINKS.glovo || "https://glovoapp.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-brand-tan text-brand-cream/60 font-light"
              >
                Glovo Tbilisi
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-cream/40" />
              </a>
            </div>
          </div>

        </div>

        {/* Section 5: Copyright and trademark credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-brand-cream/40 font-mono tracking-widest uppercase">
          <p>{t("allRightsReserved")}</p>
          <div className="flex items-center gap-2">
            <span>{lang === "en" ? "LUNATIC BAKERY TBILISI" : "საცხობი ლუნატიკი თბილისი"}</span>
            <span className="w-1 h-1 bg-brand-cream/20 rounded-full" />
            <span>{currentYear}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
