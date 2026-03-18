import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-[1200px] w-full mx-auto py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-foreground font-semibold text-8xl"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
          {"Motion Graphic Designer"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-xl">Okky Iskandar



        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="mt-12">
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-foreground text-background px-8 py-4 rounded-xl font-medium text-sm tracking-wide transition-colors">
            
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>);

};

export default Hero;