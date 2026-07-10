import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-20">
          {/* Left column — brand + contact */}
          <div className="space-y-12">
            <h1 className="flex flex-col">
              <span className="text-3xl font-bold tracking-widest text-foreground font-display uppercase leading-none">JOJO</span>
              <span className="text-lg tracking-[0.4em] text-muted-foreground font-display uppercase mt-1">PAPERS</span>
            </h1>

            <div className="space-y-10">
              <div className="space-y-2">
                <h3 className="text-sm font-medium font-sans uppercase tracking-widest text-muted-foreground">Global Manufacturing</h3>
                <div className="flex flex-col gap-2 pt-2">
                  <p className="text-sm font-medium">Premium Rolling Essentials</p>
                  <p className="text-sm text-muted-foreground">High-Volume OEM & Private Label</p>
                  <a
                    href="mailto:info@jojopapers.com"
                    className="text-sm text-primary underline hover:text-primary/80 transition-colors w-fit mt-4 font-medium"
                  >
                    info@jojopapers.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — mission + image */}
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed">
              Jojo Papers is a premier manufacturing partner for the world's leading smoking brands. We specialize in high-volume OEM production, from ultra-thin bespoke rolling papers to custom-printed specialty cones and premium metal tins. With a monthly capacity exceeding [Client's Manufacturing Capacity], we engineer absolute consistency and unmatched quality for every brand we scale. What leaves our factory is designed to elevate the modern experience.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Image Section */}
      <div className="w-full">
        <img
          src="/images/jojo_assets/JOJO Website 26-06-2026/8.webp"
          alt="Jojo Papers Manufacturing and Layout"
          className="w-full h-auto object-cover transform-gpu backface-hidden [transform:translateZ(0)]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
