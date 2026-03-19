import {
  SiSpotify,
  SiStripe,
  SiNotion,
  SiFigma,
  SiVercel,
  SiLinear,
  SiRaycast,
  SiFramer,
} from "react-icons/si";
import { Hexagon, CircleDot } from "lucide-react";

const logos = [
  { name: "Spotify", icon: SiSpotify },
  { name: "Adobe", icon: Hexagon },
  { name: "Stripe", icon: SiStripe },
  { name: "Notion", icon: SiNotion },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "Linear", icon: SiLinear },
  { name: "Raycast", icon: SiRaycast },
  { name: "Arc", icon: CircleDot },
  { name: "Framer", icon: SiFramer },
];

const LogoTicker = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="ticker-mask">
        <div className="animate-ticker flex items-center gap-16 w-max">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted-foreground/70 select-none shrink-0"
            >
              <logo.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
