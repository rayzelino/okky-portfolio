import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
{ title: "Brand Film — Nova", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
{ title: "Product Launch — Arc", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
{ title: "Campaign — Drift", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
{ title: "Editorial — Form", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" }];


const VideoCard = ({ title, src, index }: {title: string;src: string;index: number;}) => {
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
    if (enter) videoRef.current?.play();else
    {
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
      onMouseLeave={() => handleHover(false)}>
      
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-500 ease-expo group-hover:scale-105"
        muted
        loop
        playsInline
        autoPlay={isMobile}
        preload="metadata" />
      
      {!isMobile &&
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{
          backgroundColor: hovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0)",
          opacity: hovered ? 1 : 0
        }}>
        
          <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center">
            <Play size={24} className="text-background ml-1" fill="currentColor" />
          </div>
        </div>
      }
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-foreground text-sm font-medium tracking-wide">{title}</p>
      </div>
    </motion.div>);

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
          className="text-muted-foreground font-semibold tracking-widest uppercase mb-12 text-5xl">PROJECT


        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) =>
          <VideoCard key={project.title} {...project} index={i} />
          )}
        </div>
      </div>
    </section>);

};

export default Projects;