import { motion } from "framer-motion";
import { Play, Pause, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  { title: "Logo Sharelock Bang", src: "/videos/Logo_Sharelock_Bang.mp4", poster: "/videos/poster-sharelock.jpeg" },
  { title: "Animation 1", src: "/videos/Animation_1.mp4", poster: "/videos/poster-animation1.jpeg" },
  { title: "Animation 2", src: "/videos/Animation_2.mp4", poster: "/videos/poster-animation2.jpeg" },
  { title: "With SFX", src: "/videos/WITH_SFX.mp4", poster: "/videos/poster-sfx.jpeg" },
];


const VideoCard = ({ src, index, poster }: { title: string; src: string; index: number; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleHover = (enter: boolean) => {
    if (isMobile) return;
    setHovered(enter);
    if (enter) videoRef.current?.play();
    else {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease, delay: index * 0.1 }}
      className="relative aspect-video rounded-[24px] overflow-hidden cursor-pointer group"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 40px -10px rgba(0,0,0,0.5)" }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover transition-transform duration-500 ease-expo"
        style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        muted
        loop
        playsInline
        autoPlay={isMobile}
        preload="metadata"
      />

      {/* Dark overlay on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Default: centered play icon */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
        style={{ opacity: hovered || isMobile ? 0 : 0.35 }}
      >
        <div className="w-14 h-14 rounded-full bg-foreground/80 flex items-center justify-center">
          <Play size={22} className="text-background ml-0.5" fill="currentColor" />
        </div>
      </div>

      {/* Hover: small pause icon bottom-left */}
      {!isMobile && (
        <div
          className="absolute bottom-4 left-4 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          <div className="w-8 h-8 rounded-full bg-foreground/70 flex items-center justify-center">
            <Pause size={14} className="text-background" fill="currentColor" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-muted-foreground font-semibold tracking-widest uppercase mb-12 text-5xl"
        >
          PROJECTS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <VideoCard key={project.title} {...project} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium text-sm tracking-wide hover:bg-secondary/80 transition-colors duration-300"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;