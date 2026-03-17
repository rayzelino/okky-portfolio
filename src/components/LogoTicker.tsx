const logos = [
  "Spotify", "Adobe", "Stripe", "Notion", "Figma",
  "Vercel", "Linear", "Raycast", "Arc", "Framer",
];

const LogoTicker = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="ticker-mask">
        <div className="animate-ticker flex items-center gap-16 w-max">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-muted-foreground/70 text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
