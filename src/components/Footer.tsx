import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const Footer = () => {
  return (
    <footer className="py-32 md:py-40 text-center" style={{ padding: "8rem clamp(1.5rem, 4vw, 4rem)" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-foreground font-semibold"
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
      >
        Let's Talk
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="mt-16 text-muted-foreground text-xs"
      >
        {`${new Date().getFullYear()} ©Rikho Marchelino. All rights reserved.`}
      </motion.p>
    </footer>
  );
};

export default Footer;
