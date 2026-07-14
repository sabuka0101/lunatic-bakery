import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Menu, X, ShoppingBag, Globe } from "lucide-react";
import { translations } from "../data/translations";

interface NavbarProps {
  lang: "en" | "ge";
  setLang: (lang: "en" | "ge") => void;
  t: (key: string) => any;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navFeatured"), href: "#featured" },
    { label: t("navMenu"), href: "#menu" },
    { label: t("navAbout"), href: "#about" },
    { label: t("navWhyUs"), href: "#why-us" },
    { label: t("navReviews"), href: "#reviews" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/90 backdrop-blur-md shadow-xs border-b border-brand-dark/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-cream transition-transform duration-500 group-hover:rotate-180">
              <Moon className="w-5 h-5 fill-brand-cream" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black italic tracking-tighter text-brand-dark leading-none">
                LUNATIC
              </span>
              <span className="text-[9px] tracking-[0.25em] text-brand-tan font-mono -mt-1 uppercase">
                Artisan Bakery
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brand-dark/70 hover:text-brand-dark text-xs font-bold tracking-widest uppercase transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language & Order Button */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center bg-brand-warm/40 rounded-full p-1 border border-brand-dark/10">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  lang === "en"
                    ? "bg-brand-dark text-white"
                    : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ge")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  lang === "ge"
                    ? "bg-brand-dark text-white"
                    : "text-brand-dark/60 hover:text-brand-dark"
                }`}
              >
                GE
              </button>
            </div>

            {/* Order Now Trigger */}
            <a
              href="#menu"
              className="bg-brand-dark hover:bg-brand-dark/95 text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 transition-all duration-300 flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {t("heroOrderNow")}
            </a>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ge" : "en")}
              className="p-2 rounded-full bg-brand-warm/50 hover:bg-brand-warm text-brand-dark flex items-center gap-1 text-xs font-bold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "GE" : "EN"}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:text-brand-dark/80 rounded-full hover:bg-brand-warm/30 transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-brand-cream border-b border-brand-dark/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xs text-brand-dark/80 hover:bg-brand-warm/40 hover:text-brand-dark font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-dark/10 flex flex-col gap-3">
                {/* Mobile Order Button */}
                <a
                  href="#menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-brand-dark hover:bg-brand-dark/95 text-white text-center py-3.5 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {t("heroOrderNow")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
