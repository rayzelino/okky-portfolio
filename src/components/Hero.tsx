import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroPhoto from "@/assets/hero-photo.png";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-[1200px] w-full mx-auto py-32 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-foreground font-semibold text-8xl"
            style={{ fontSize: "clamp(1.5rem, 8vw, 4.5rem)" }}>
            {"Motion Graphic Designer"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="mt-4 md:mt-8 text-muted-foreground text-base md:text-xl max-w-xl">
            Okky Iskandar
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-6 md:mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium text-xs md:text-sm tracking-wide transition-colors">
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="flex-shrink-0 self-center sm:self-auto">
          <div className="w-28 h-36 sm:w-48 sm:h-60 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg shadow-foreground/5 bg-card border border-border/50">
            <img
              src={heroPhoto}
              alt="Okky Iskandar"
              className="w-full h-full object-top object-contain" />
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;