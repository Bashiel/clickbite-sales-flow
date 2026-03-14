import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/542265407060?text=Hola%20ClickBite!%20Quiero%20consultar%20por%20una%20p%C3%A1gina%20para%20mi%20negocio.";

const FinalCTA = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold tracking-tighter mb-6"
      style={{ textWrap: "balance" } as React.CSSProperties}
    >
      ¿Todavía vendés solo por Instagram?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
    >
      Dejá de perder plata en comisiones. Tené un sitio que trabaje por vos
      24/7 — sin comisiones, sin complicaciones.
    </motion.p>

    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="gradient-btn px-10 py-5 text-lg inline-block"
    >
      Lanzá Tu Web Ahora
    </motion.a>
  </section>
);

export default FinalCTA;
