import { motion } from "framer-motion";
import logoClient1 from "@/assets/logo-client1.png";
import logoTrans7 from "@/assets/logo-trans7.png";
import logoN1 from "@/assets/logo-n1.png";
import logoMyedspace from "@/assets/logo-myedspace.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

const logos = [
  { name: "Client 1", src: logoClient1 },
  { name: "Trans7", src: logoTrans7 },
  { name: "N1", src: logoN1 },
  { name: "MyEdSpace", src: logoMyedspace },
];

const LogoTicker = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-muted-foreground font-semibold tracking-widest uppercase mb-12 text-5xl px-6 md:px-12"
      >
        Client & Experience
      </motion.h2>

      <div className="ticker-mask">
        <div className="animate-ticker flex items-center gap-16 w-max">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted-foreground/70 select-none shrink-0 p-2"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
