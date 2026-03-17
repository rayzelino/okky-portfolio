import { motion } from "framer-motion";
import { Home, FolderOpen, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", icon: Home, action: "home" },
  { label: "Projects", icon: FolderOpen, action: "projects" },
  { label: "Contact", icon: Mail, action: "contact" },
];

const FloatingMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (action: string) => {
    if (action === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (action === "projects") {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    if (action === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (action === "projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 h-12 px-6 rounded-full bg-glass backdrop-blur-md shadow-2xl flex items-center gap-6"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.5)" }}
    >
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleClick(item.action)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-250 text-sm font-medium tracking-wide"
        >
          <item.icon size={18} strokeWidth={1.5} />
          <span>{item.label}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default FloatingMenu;
