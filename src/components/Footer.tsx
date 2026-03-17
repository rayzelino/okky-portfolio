import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-32 md:py-40 text-center">
      <motion.h2
        {...fadeUp}
        className="text-foreground font-semibold"
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
      >
        Let's Talk
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="mt-16 text-muted-foreground text-xs"
      >
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
