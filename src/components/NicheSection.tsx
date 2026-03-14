import { motion } from "framer-motion";
import { Utensils, Scissors, Trophy, ShoppingBag } from "lucide-react";

const niches = [
  {
    icon: Utensils,
    title: "GastroFlow",
    subtitle: "Hamburgueserías y Cafés",
    benefits: [
      "Pedidos Online sin Comisiones",
      "Menú Digital con Código QR",
      "Pedidos Directo a la Cocina",
    ],
    price: "Bonificado",
    priceLabel: "Armado inicial",
    monthly: "$80.000",
    monthlyLabel: "Suscripción mensual",
    cta: "Solicitar GastroFlow",
    glowColor: "rgba(245, 158, 11, 0.2)",
    waText: "Hola ClickBite! Quiero ver una demo de GastroFlow para mi local gastronómico."
  },
  {
    icon: Scissors,
    title: "BarberSync",
    subtitle: "Peluquerías y Estéticas",
    benefits: [
      "Reservas Automáticas 24/7",
      "Recordatorios Anti-Faltas",
      "Catálogo de Servicios",
    ],
    price: "Bonificado",
    priceLabel: "Armado inicial",
    monthly: "$60.000",
    monthlyLabel: "Suscripción mensual",
    cta: "Activar BarberSync",
    glowColor: "rgba(139, 92, 246, 0.2)",
    waText: "Hola ClickBite! Quiero automatizar los turnos de mi barbería/salón con BarberSync."
  },
  {
    icon: Trophy,
    title: "Book Courts",
    subtitle: "Canchas y Espacios Deportivos",
    benefits: [
      "Disponibilidad en Tiempo Real",
      "Calendario de Reservas",
      "Confirmación por WhatsApp",
    ],
    price: "Bonificado",
    priceLabel: "Armado inicial",
    monthly: "$60.000",
    monthlyLabel: "Suscripción mensual",
    cta: "Reservar Canchas Online",
    glowColor: "rgba(139, 92, 246, 0.15)",
    waText: "Hola ClickBite! Me interesa el sistema de reservas para mi complejo deportivo."
  },
  {
    icon: ShoppingBag,
    title: "ShopLine",
    subtitle: "Tiendas de Indumentaria",
    benefits: [
      "Catálogo Online con Talles",
      "Pedidos Directos",
      "Sin Comisiones por Venta",
    ],
    price: "Bonificado",
    priceLabel: "Armado inicial",
    monthly: "$80.000",
    monthlyLabel: "Suscripción mensual",
    cta: "Activar ShopLine",
    glowColor: "rgba(245, 158, 11, 0.15)",
    waText: "Hola ClickBite! Quiero armar mi catálogo digital con ShopLine."
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
    },
  },
};

const NicheSection = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto">
    <p className="section-label mb-3 text-center">Nuestras Soluciones</p>
    <h2
      className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-16"
      style={{ textWrap: "balance" } as React.CSSProperties}
    >
      Sistemas a Medida de <span className="gradient-text">Tu Rubro</span>
    </h2>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {niches.map((n) => (
        <motion.div
          key={n.title}
          variants={item}
          className="glass-card p-6 sm:p-8 flex flex-col"
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 animate-float"
            style={{ background: n.glowColor }}
          >
            <n.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-1">{n.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{n.subtitle}</p>
          <ul className="space-y-2.5 mb-6 flex-1">
            {n.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-foreground/80"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mb-6 p-4 rounded-xl bg-secondary/50 space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">{n.priceLabel}</span>
              <span className="text-sm font-bold text-accent">{n.price}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">{n.monthlyLabel}</span>
              <span className="text-lg font-bold gradient-text">{n.monthly}</span>
            </div>
          </div>
          <a
            href={`https://wa.me/5492265407060?text=${encodeURIComponent(n.waText)}`}
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
