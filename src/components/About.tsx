import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const About = () => {
  return (
    <section className="px-6 md:px-12 py-28 md:py-36">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-muted-foreground font-semibold tracking-widest uppercase mb-12 text-5xl">
          
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, x: [0, -6, 6, 0] }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.5, ease },
            y: { duration: 0.5, ease },
            x: { duration: 3, ease: "linear", repeat: Infinity, repeatType: "mirror", delay: 0.8 }
          }}>
          
          <p className="text-foreground/85 text-xl md:text-2xl leading-relaxed font-normal">I'm Okky Iskandar, Im a professional motion graphic designer specializing in motion graphics and video editing using After Effects and Premiere Pro.Working remotely with local and international clients,im focuses on creating visually engaging and impactful motion visuals that strengthen brand storytelling and digital presence.







          </p>
        </motion.div>
      </div>
    </section>);};
export default About;