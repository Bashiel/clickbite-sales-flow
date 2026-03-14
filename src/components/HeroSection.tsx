import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/542265407060?text=Hola%20ClickBite!%20Quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

const HeroSection = () => (
  <section className="min-h-svh flex flex-col justify-center px-6 py-24 max-w-7xl mx-auto">
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-label mb-6"
    >
      Digital Agency for Local Business
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05] max-w-5xl"
      style={{ textWrap: "balance" } as React.CSSProperties}
    >
      Sites that Sell:{" "}
      <span className="gradient-text">100% Commissions-Free</span> Websites
      for Your Local Business.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
      style={{ textWrap: "pretty" } as React.CSSProperties}
    >
      Affordable, Fast, & Organized websites direct to your WhatsApp.
    </motion.p>

    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="gradient-btn w-full md:w-fit px-8 py-4 text-center text-lg inline-block"
    >
      Launch My Website on WhatsApp
    </motion.a>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-6 text-sm text-muted-foreground"
    >
      Join 50+ local businesses saving $1,200+/mo in commissions.
    </motion.p>
  </section>
);

export default HeroSection;
