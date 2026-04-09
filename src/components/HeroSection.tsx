import { motion } from "framer-motion";
import logo from "@/assets/ULA_WH.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-hero px-4 pb-16 pt-20 sm:pb-20 sm:pt-28">
        {/* Floating shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-20 h-40 w-40 animate-float rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-10 bottom-10 h-60 w-60 animate-float rounded-full bg-white/10 blur-3xl" style={{ animationDelay: "1s" }} />
          <div className="absolute left-1/2 top-10 h-32 w-32 animate-float rounded-full bg-white/5 blur-xl" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              UNITE-LA Resource Guide 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Your Future,{" "}
            <span className="italic">Your Resources</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg"
          >
            Free and low-cost services for young adults in Los Angeles — mental health, housing, food, tech, legal help and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-8 max-w-lg"
          >
            <p className="text-lg font-semibold text-white sm:text-xl">
              👇 Tap a category below to get started!
            </p>
            <p className="mt-2 text-sm text-white/60">
              Click any emoji to filter resources by type
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full fill-background" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
