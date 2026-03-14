import { motion } from "framer-motion";
import { MessageSquare, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Brief",
    desc: "Tell us your needs via WhatsApp. No forms, no friction.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Build",
    desc: "We design & deploy your custom site with your branding.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Bank",
    desc: "You start selling in 48 hours. Zero commissions, forever.",
  },
];

const HowItWorks = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto">
    <p className="section-label mb-3 text-center">The Process</p>
    <h2
      className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-16"
      style={{ textWrap: "balance" } as React.CSSProperties}
    >
      Live in <span className="gradient-text">48 Hours</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Connector line */}
      <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mb-6 relative z-10">
            <s.icon className="w-8 h-8 text-accent" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
            Step {s.step}
          </span>
          <h3 className="text-xl font-bold mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground max-w-xs">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
