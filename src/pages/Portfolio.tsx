import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import FloatingMenu from "@/components/FloatingMenu";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

const portfolioProjects = [
  { title: "Brand Film — Nova", description: "A cinematic brand film exploring identity and motion.", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { title: "Product Launch — Arc", description: "Dynamic product reveal with fluid transitions.", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { title: "Campaign — Drift", description: "Visual storytelling for a lifestyle campaign.", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
  { title: "Editorial — Form", description: "Abstract motion design for editorial content.", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { title: "Reel — Pulse", description: "A high-energy montage of recent works.", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  { title: "Short Film — Ember", description: "Experimental short exploring light and texture.", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
];

const PortfolioVideoCard = ({
  title,
  description,
  src,
  index,
}: {
  title: string;
  description: string;
  src: string;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }, [playing]);

  const toggleExpand = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!expanded) {
      videoRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, [expanded]);

  useEffect(() => {
    const onFSChange = () => {
      setExpanded(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFSChange);
    return () => document.removeEventListener("fullscreenchange", onFSChange);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden bg-card"
      style={{ boxShadow: "0 0 0 1px hsl(var(--border)), 0 20px 40px -10px rgba(0,0,0,0.4)" }}
    >
      {/* Video container */}
      <div
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: hovered || playing ? "scale(1.04)" : "scale(1)" }}
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Hover blur + dim overlay */}
        <div
          className="absolute inset-0 transition-all duration-400 ease-in-out pointer-events-none"
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            backdropFilter: hovered && !playing ? "blur(2px)" : "blur(0px)",
            opacity: hovered && !playing ? 1 : 0,
          }}
        />

        {/* Center play icon — visible when not playing */}
        <AnimatePresence>
          {!playing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: hovered ? "hsl(var(--foreground))" : "hsl(var(--foreground) / 0.5)",
                }}
              >
                <Play
                  size={22}
                  className="ml-0.5 transition-colors duration-300"
                  style={{ color: hovered ? "hsl(var(--background))" : "hsl(var(--background) / 0.9)" }}
                  fill="currentColor"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Playing controls: pause bottom-left, expand bottom-right */}
        <AnimatePresence>
          {playing && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-3 left-3 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-full bg-foreground/70 flex items-center justify-center">
                  <Pause size={14} className="text-background" fill="currentColor" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-3 right-3 z-10"
                onClick={toggleExpand}
              >
                <div className="w-8 h-8 rounded-full bg-foreground/70 flex items-center justify-center cursor-pointer hover:bg-foreground/90 transition-colors">
                  {expanded ? (
                    <Minimize2 size={14} className="text-background" />
                  ) : (
                    <Maximize2 size={14} className="text-background" />
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Text below video */}
      <div className="p-5 md:p-6">
        <h3 className="text-foreground font-semibold text-lg tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <FloatingMenu />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-4 text-muted-foreground text-lg md:text-xl max-w-xl"
        >
          A curated collection of motion design, brand films, and visual experiments.
        </motion.p>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-12 pb-28 md:pb-36">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioProjects.map((project, i) => (
            <PortfolioVideoCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
