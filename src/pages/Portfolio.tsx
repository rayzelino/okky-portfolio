import { motion } from "framer-motion";
import FloatingMenu from "@/components/FloatingMenu";
import Footer from "@/components/Footer";
import PortfolioVideoCard, { type CategoryCard } from "@/components/PortfolioVideoCard";

const ease = [0.22, 1, 0.36, 1] as const;

const portfolioCategories: CategoryCard[] = [
  {
    category: "Brand Film",
    videos: [
      { label: "Nova", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { label: "Ember", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    ],
  },
  {
    category: "Product Launch",
    videos: [
      { label: "Arc", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    ],
  },
  {
    category: "Poster Design",
    videos: [
      { label: "Poster", src: "/videos/Poster.mov", poster: "/videos/Poster.jpeg" },
    ],
  },
  {
    category: "Interactive Video",
    videos: [
      { label: "Meglio", src: "/videos/Meglio.mov", poster: "/videos/Meglio.jpeg" },
    ],
  },
  {
    category: "Reel",
    videos: [
      { label: "Pulse", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    ],
  },
  {
    category: "Short Film",
    videos: [
      { label: "Ember", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    ],
  },
];

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

      {/* Video Grid — structured pattern */}
      <section
        className="pb-28 md:pb-36"
        style={{ padding: "0 clamp(1.5rem, 4vw, 4rem) 7rem" }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 portfolio-grid">
          {portfolioCategories.map((card, i) => (
            <PortfolioVideoCard key={card.category} card={card} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
