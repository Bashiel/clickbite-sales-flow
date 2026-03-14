import { motion } from "framer-motion";
import { Utensils, Scissors, Trophy } from "lucide-react";

const WA_LINK =
  "https://wa.me/542265407060?text=Hola%20ClickBite!%20Quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

const niches = [
  {
    icon: Utensils,
    title: "GastroFlow",
    subtitle: "Restaurants & Food Joints",
    benefits: [
      "Zero-Commission Online Ordering",
      "Digital Menu with QR Codes",
      "Orders Direct to WhatsApp",
    ],
    cta: "Start GastroFlow",
    glowColor: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: Scissors,
    title: "BarberSync",
    subtitle: "Salons & Beauty Studios",
    benefits: [
      "24/7 Automated Booking",
      "Reduce No-Shows by 60%",
      "Service Catalog & Pricing",
    ],
    cta: "Activate BarberSync",
    glowColor: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: Trophy,
    title: "Book Courts",
    subtitle: "Sports & Facilities",
    benefits: [
      "Real-time Court Availability",
      "Organized Bookings Calendar",
      "Instant Confirmation via WA",
    ],
    cta: "Book Courts Online",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

const NicheSection = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto">
    <p className="section-label mb-3 text-center">Our Solutions</p>
    <h2
      className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-16"
      style={{ textWrap: "balance" } as React.CSSProperties}
    >
      One Platform, <span className="gradient-text">Three Niches</span>
    </h2>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {niches.map((n) => (
        <motion.div
          key={n.title}
          variants={item}
          className="glass-card p-8 flex flex-col"
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 animate-float"
            style={{ background: n.glowColor }}
          >
            <n.icon className="w-7 h-7 gradient-text" style={{ color: "transparent", fill: "none", stroke: "url(#icon-grad)" }} />
            {/* Fallback: use accent color */}
            <n.icon className="w-7 h-7 text-accent absolute opacity-0" />
          </div>
          <h3 className="text-xl font-bold mb-1">{n.title}</h3>
          <p className="text-sm text-muted-foreground mb-5">{n.subtitle}</p>
          <ul className="space-y-3 mb-8 flex-1">
            {n.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-6 py-3 text-center text-sm"
          >
            {n.cta}
          </a>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default NicheSection;
