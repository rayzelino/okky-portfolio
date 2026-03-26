import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export interface VideoItem {
  label: string;
  src: string;
  poster?: string;
}

export interface CategoryCard {
  category: string;
  videos: VideoItem[];
  orientation?: "horizontal" | "vertical"; // ✅ NEW
}

interface PortfolioVideoCardProps {
  card: CategoryCard;
  index: number;
}

const PortfolioVideoCard = ({ card, index }: PortfolioVideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = card.videos[activeIndex];

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
    const onFSChange = () => setExpanded(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFSChange);
    return () => document.removeEventListener("fullscreenchange", onFSChange);
  }, []);

  const handleThumbnailClick = (idx: number) => {
    if (idx === activeIndex) return;
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.currentTime = 0;
    }
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden bg-card flex flex-col"
      style={{
        boxShadow:
          "0 0 0 1px hsl(var(--border)), 0 20px 40px -10px rgba(0,0,0,0.4)",
      }}
    >
      {/* VIDEO */}
      <div
        className={`relative overflow-hidden cursor-pointer ${
          card.orientation === "vertical"
            ? "aspect-[9/16]"
            : "aspect-video"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={activeVideo.src}
          poster={activeVideo.poster}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: hovered || playing ? "scale(1.04)" : "scale(1)",
          }}
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-400 pointer-events-none"
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            backdropFilter:
              hovered && !playing ? "blur(2px)" : "blur(0px)",
            opacity: hovered && !playing ? 1 : 0,
          }}
        />

        {/* Play */}
        <AnimatePresence>
          {!playing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-foreground/70">
                <Play size={22} className="text-background ml-0.5" fill="currentColor" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <AnimatePresence>
          {playing && (
            <>
              <div className="absolute bottom-3 left-3">
                <div className="w-8 h-8 rounded-full bg-foreground/70 flex items-center justify-center">
                  <Pause size={14} className="text-background" fill="currentColor" />
                </div>
              </div>

              <div
                className="absolute bottom-3 right-3 z-10 cursor-pointer"
                onClick={toggleExpand}
              >
                <div className="w-8 h-8 rounded-full bg-foreground/70 flex items-center justify-center">
                  {expanded ? (
                    <Minimize2 size={14} className="text-background" />
                  ) : (
                    <Maximize2 size={14} className="text-background" />
                  )}
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* TEXT + THUMBNAIL */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-foreground font-semibold text-lg">
          {card.category}
        </h3>

        {card.videos.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {card.videos.map((video, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  handleThumbnailClick(idx);
                }}
                className="rounded-lg overflow-hidden"
                style={{
                  width: card.orientation === "vertical" ? 56 : 72,
                  height: card.orientation === "vertical" ? 100 : 44,
                  opacity: idx === activeIndex ? 1 : 0.5,
                  border:
                    idx === activeIndex
                      ? "2px solid hsl(var(--primary))"
                      : "2px solid transparent",
                }}
              >
                {video.poster ? (
                  <img
                    src={video.poster}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Play size={12} />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioVideoCard;
