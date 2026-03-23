import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const About = () => {
  return (
    <section className="px-6 md:px-12 py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}>
          
          <p className="text-foreground/85 text-xl md:text-2xl leading-relaxed font-normal max-w-[65ch]" style={{ wordBreak: "normal", overflowWrap: "break-word", hyphens: "auto" }}>
            I'm Okky Iskandar, a professional motion graphic designer specializing in motion graphics and video editing using After Effects and Premiere Pro. Working remotely with local and international clients, I focus on creating visually engaging and impactful motion visuals that strengthen brand storytelling and digital presence.



          </p>
        </motion.div>
      </div>
    </section>);};
export default About;