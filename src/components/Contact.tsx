import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from "lucide-react";
import { ORDER_LINKS } from "../config";

interface ContactProps {
  lang: "en" | "ge";
  t: (key: string) => any;
}

export default function Contact({ lang, t }: ContactProps) {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.437452668516!2d44.75704127653521!3d41.71324707126046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d421d0a5cf%3A0xbb8a04ea6015b6b1!2s7%20Lado%20Kavsadze%20St%2C%20Tbilisi!5e0!3m2!1sen!2sge!4v1710000000000";

  return (
    <section
      id="contact"
      className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-dark/10"
    >
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-tan/5 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[10px] bg-brand-dark text-white px-3 py-1 rounded-xs font-mono font-bold tracking-widest uppercase inline-block"
              >
                {lang === "en" ? "Visit Our Sanctuary" : "გვესტუმრეთ საცხობში"}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark leading-none"
              >
                {t("contactTitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-brand-dark/70 font-light text-sm sm:text-base leading-relaxed"
              >
                {t("contactSubtitle")}
              </motion.p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Location card */}
              <motion.a
                href="https://maps.app.goo.gl/bb8a04ea6015b6b1"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 p-5 rounded-none border border-brand-dark/10 bg-white hover:bg-brand-warm/10 hover:border-brand-dark transition-all duration-300"
              >
                <div className="p-3 rounded-none bg-brand-dark text-brand-cream mt-1 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark font-mono">
                    {t("contactAddressLabel")}
                  </h4>
                  <p className="text-brand-dark/80 text-sm sm:text-base mt-1 font-light leading-snug">
                    {t("contactAddress")}
                  </p>
                </div>
              </motion.a>

              {/* Hours card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex items-start gap-4 p-5 rounded-none border border-brand-dark/10 bg-white"
              >
                <div className="p-3 rounded-none bg-brand-dark text-brand-cream mt-1 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark font-mono">
                    {t("contactHoursLabel")}
                  </h4>
                  <p className="text-brand-dark/80 text-sm sm:text-base mt-1 font-light leading-snug">
                    {t("contactHours")}
                  </p>
                </div>
              </motion.div>

              {/* Phone/Email card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-5 rounded-none border border-brand-dark/10 bg-white"
              >
                <div className="p-3 rounded-none bg-brand-dark text-brand-cream mt-1 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark font-mono">
                    {lang === "en" ? "Get in Touch" : "დაგვიკავშირდით"}
                  </h4>
                  <a
                    href="tel:+995592 74 00 77"
                    className="block text-brand-dark/80 text-sm sm:text-base hover:text-brand-tan transition-colors font-light"
                  >
                    +995 592 74 00 77
                  </a>
                  <a
                    href="mailto:hello@lunaticbakery.ge"
                    className="block text-brand-dark/50 text-xs hover:text-brand-tan transition-colors font-mono"
                  >
                    hello@lunaticbakery.ge
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Delivery Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-6 rounded-none bg-brand-warm/30 border border-brand-dark/10 space-y-4"
            >
              <div>
                <h4 className="font-display font-bold italic text-brand-dark text-base">
                  {t("contactOrderOnline")}
                </h4>
                <p className="text-xs text-brand-dark/60 font-light mt-1 leading-relaxed">
                  {t("contactOrderOnlineDesc")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={ORDER_LINKS.wolt || "https://wolt.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 rounded-none bg-white border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-warm/20 text-brand-dark transition-all"
                >
                  Wolt Delivery
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-dark/40" />
                </a>

                <a
                  href={ORDER_LINKS.glovo || "https://glovoapp.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 rounded-none bg-white border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-warm/20 text-brand-dark transition-all"
                >
                  Glovo Delivery
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-dark/40" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 h-[450px] sm:h-[500px] w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full rounded-none overflow-hidden border-[10px] border-white shadow-md bg-brand-cream"
            >
              <iframe
                title="Lunatic Bakery Map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
