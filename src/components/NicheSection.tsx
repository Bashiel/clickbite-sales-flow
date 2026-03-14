import { motion } from "framer-motion";
import { Utensils, Scissors, Trophy, ShoppingBag } from "lucide-react";

const WA_LINK =
  "https://wa.me/542265407060?text=Hola%20ClickBite!%20Quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

const niches = [
  {
    icon: Utensils,
    title: "GastroFlow",
    subtitle: "Restaurantes y Locales Gastronómicos",
    benefits: [
      "Pedidos Online sin Comisiones",
      "Menú Digital con Código QR",
      "Pedidos Directo a WhatsApp",
    ],
    cta: "Activar GastroFlow",
    glowColor: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: Scissors,
    title: "BarberSync",
    subtitle: "Peluquerías y Estéticas",
    benefits: [
      "Reservas Automáticas 24/7",
      "Reducí Ausencias un 60%",
      "Catálogo de Servicios y Precios",
    ],
    cta: "Activar BarberSync",
    glowColor: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: Trophy,
    title: "Book Courts",
    subtitle: "Canchas y Espacios Deportivos",
    benefits: [
      "Disponibilidad en Tiempo Real",
      "Calendario de Reservas Organizado",
      "Confirmación Instantánea por WA",
    ],
    cta: "Reservar Canchas Online",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    icon: ShoppingBag,
    title: "ShopLine",
    subtitle: "Tiendas de Ropa e Indumentaria",
    benefits: [
      "Catálogo Online con Fotos y Talles",
      "Pedidos y Consultas por WhatsApp",
      "Sin Comisiones por Venta",
    ],
    cta: "Activar ShopLine",
    glowColor: "rgba(245, 158, 11, 0.15)",
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
      Una Plataforma, <span className="gradient-text">Cuatro Nichos</span>
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
          className="glass-card p-8 flex flex-col"
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 animate-float"
            style={{ background: n.glowColor }}
          >
            <n.icon className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-1">{n.title}</h3>
          <p className="text-sm text-muted-foreground mb-5">{n.subtitle}</p>
          <ul className="space-y-3 mb-8 flex-1">
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
