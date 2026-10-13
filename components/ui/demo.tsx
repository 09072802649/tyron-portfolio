import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { Sparkles } from "lucide-react";

// Curated high-res Unsplash stock images
const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
    alt: "Minimalist curved 3D wave architecture in teal and blue",
  },
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1000&auto=format&fit=crop&q=80",
    alt: "Vibrant abstract acrylic fluid wave texture",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80",
    alt: "Cybersecurity digital encrypted data matrix code stream",
  },
  {
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&auto=format&fit=crop&q=80",
    alt: "Deep neon cyan and emerald glowing synthwave gradient",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
    alt: "Macro electronic motherboard circuit board processors",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80",
    alt: "Yosemite National Park scenic valley with reflective river",
  },
  {
    src: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1000&auto=format&fit=crop&q=80",
    alt: "Misty evergreen alpine pine forest wrapped in mountain clouds",
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1000&auto=format&fit=crop&q=80",
    alt: "Vintage computer hardware and terminal glowing green",
  },
];

export default function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={IMAGES}
      className="h-[560px] w-full rounded-2xl border border-border bg-background"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center pointer-events-none">
        <div className="px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Curved Cylindrical 3D Viewport</span>
          </div>
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Every frame,
            <br />
            brought into focus.
          </h1>
        </div>
        <p className="max-w-md text-balance px-6 text-sm text-muted-foreground font-mono">
          Images curve in from one edge, flatten out at the centre, then fade
          away round the other.
        </p>
      </div>
    </TiltedGridHero>
  );
}
