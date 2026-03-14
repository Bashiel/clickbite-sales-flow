import { motion } from "framer-motion";
import { MessageSquare, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contanos",
    desc: "Decinos qué necesitás por WhatsApp. Sin formularios, sin vueltas.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Diseñamos",
    desc: "Creamos y publicamos tu sitio personalizado con tu marca.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Vendés",
    desc: "Empezás a vender en 48 horas. Sin comisiones, para siempre.",
  },
];

const HowItWorks = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto">
    <p className="section-label mb-3 text-center">El Proceso</p>
    <h2
      className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-16"
      style={{ textWrap: "balance" } as React.CSSProperties}
    >
      Online en <span className="gradient-text">48 Horas</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
          className="text-center flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mb-6 relative z-10">
            <s.icon className="w-8 h-8 text-accent" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
            Paso {s.step}
          </span>
          <h3 className="text-xl font-bold mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground max-w-xs">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
