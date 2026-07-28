export interface SpecGroup {
  label: string;
  values: string[];
}

export interface UsageImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  specs: string[];
  specGroups: SpecGroup[];
  gallery: { src: string; alt: string }[];
  usageImages: UsageImage[];
  specImage: string;
  careNotes: string[];
  craftNote: string;
}

export const products: Record<string, ProductData> = {
  "bulk-cones": {
    id: "bulk-cones",
    name: "Bulk Pre-Rolled Cones",
    subtitle: "Mass Volume OEM",
    description:
      "Available in ultra-thin white, unbleached brown, pink, and custom color editions. Designed for perfect airflow and a slow, even burn. Delivered in 100-pack to 300-pack retail boxes or mass-volume bulk packaging for dispensaries and brands.",
    specs: [
      "Available in 1 1/4 and King Size",
      "Custom printed crutches available",
      "Ultra-thin, slow-burning paper",
      "FSC Certified materials",
    ],
    specGroups: [
      { label: "Color Options", values: ["Unbleached Brown", "Classic White", "Pink Edition", "Blue Edition"] },
      { label: "Packaging", values: ["100-Pack Retail Boxes", "300-Pack Tower Boxes", "Wholesale Bulk Cases"] },
    ],
    specImage: "/images/products/bulk-pink-cones.png",
    gallery: [
      { src: "/images/products/bulk-pink-cones.png", alt: "Pink Edition Cones" },
      { src: "/images/about/bulk-brown-cones.png", alt: "Unbleached Brown Cones" },
      { src: "/images/about/bulk-multi-cones.png", alt: "Multi-Color Bulk Box" },
    ],
    usageImages: [
      { src: "/images/products/bulk-pink-cones.png", alt: "Retail Ready", caption: "Perfect for dispensary shelves" },
    ],
    careNotes: [
      "Store in a cool, dry place to maintain humidity.",
      "Keep away from direct sunlight to prevent paper discoloration.",
    ],
    craftNote: "Every cone is hand-rolled and rigorously inspected for perfect shape and glue-line consistency.",
  },
  "signature-series": {
    id: "signature-series",
    name: "The Signature Series",
    subtitle: "Premium Unbleached",
    description:
      "Our highest tier of pre-rolled cones. Crafted from premium unbleached natural fibers and finished with luxurious gold-foil branding on the crutch. The ultimate statement for high-end brands.",
    specs: [
      "Unbleached natural paper",
      "Gold-foil stamped crutches",
      "Luxury tactile packaging",
      "Clean, ashless burn",
    ],
    specGroups: [
      { label: "Paper Blend", values: ["100% Unbleached Natural Fibers", "Chlorine-Free"] },
      { label: "Finishing", values: ["Premium Gold Foil Stamping", "Precision-cut Crutch"] },
    ],
    specImage: "/images/products/signature-series.png",
    gallery: [
      { src: "/images/products/signature-series.png", alt: "Signature Series Box" },
    ],
    usageImages: [
      { src: "/images/products/signature-series.png", alt: "Luxury Packaging", caption: "The ultimate premium unbleached cone." },
    ],
    careNotes: [
      "Handle with care to maintain crutch foil integrity.",
    ],
    craftNote: "The gold foil is applied using a proprietary heat-stamping process ensuring it never flakes or compromises the draw.",
  },
  "emergency-kit": {
    id: "emergency-kit",
    name: "Emergency Kits & Displays",
    subtitle: "Point-Of-Sale Ready",
    description:
      "The Original JOJO Emergency Kit. Complete retail-ready packaging solutions designed for maximum shelf appeal. Sleek black design with custom inserts for cones and matches.",
    specs: [
      "Matte black finish with foil accents",
      "Custom internal tray designs",
      "Integrated match strike strip options",
      "Compact pocket-friendly dimensions",
    ],
    specGroups: [
      { label: "Design", values: ["Matte Black Soft-Touch Finish", "Gold or Silver Foil Stamping"] },
      { label: "Contents", values: ["Custom Pre-Roll Inserts", "Match Striker Strip"] },
    ],
    specImage: "/images/products/emergency-kit-box.png",
    gallery: [
      { src: "/images/products/emergency-kit-box.png", alt: "Emergency Kit Box" },
      { src: "/images/products/emergency-kit-fanned.png", alt: "Emergency Kit Fanned Display" },
    ],
    usageImages: [
      { src: "/images/products/emergency-kit-fanned.png", alt: "Point of Sale", caption: "High-impact retail displays." },
    ],
    careNotes: [
      "Store displays in dry conditions to preserve the matte finish.",
    ],
    craftNote: "The rigid box construction is designed to withstand pocket-wear while keeping the cones inside perfectly intact.",
  },
  "cone-loader": {
    id: "cone-loader",
    name: "Cone Loaders & Accessories",
    subtitle: "Custom Hardware",
    description:
      "Precision-engineered loading tools and accessories. Designed to streamline the packing process while adding a premium touch to your retail offerings. The JOJO Cone Loader ensures a perfect pack every time.",
    specs: [
      "Ergonomic design",
      "Durable material construction",
      "Custom branding available",
      "Available as standalone or kit inserts",
    ],
    specGroups: [
      { label: "Materials", values: ["Premium Molded ABS", "Satin Finish"] },
      { label: "Customization", values: ["Embossed Logos", "Custom Color Matching"] },
    ],
    specImage: "/images/products/cone-loader.png",
    gallery: [
      { src: "/images/products/cone-loader.png", alt: "JOJO Cone Loader" },
    ],
    usageImages: [
      { src: "/images/products/cone-loader.png", alt: "Precision Loading", caption: "Streamline the packing process." },
    ],
    careNotes: [
      "Wipe clean with a damp cloth.",
      "Do not expose to extreme heat.",
    ],
    craftNote: "Engineered with exact tolerances to perfectly match our standard cone dimensions for a seamless loading experience.",
  },
  "classic-papers": {
    id: "classic-papers",
    name: "Classic Rolling Papers",
    subtitle: "Heritage Collection",
    description:
      "Our heritage line of classic rolling papers. Engineered for a clean, even burn and a pure flavor profile. Available in multiple sizes including 1 1/4 and King Size Slim.",
    specs: [
      "Ultra-thin translucent paper",
      "Natural Arabic gum line",
      "Slow-burning watermark",
      "Available in booklets of 32 or 50",
    ],
    specGroups: [
      { label: "Paper Options", values: ["Classic White", "Unbleached Brown", "Hemp Blend"] },
      { label: "Packaging", values: ["Standard Booklets", "Magnetic Closure Booklets", "Double Window Displays"] },
    ],
    specImage: "/images/jojo_assets/JOJO Website 26-06-2026/18.webp",
    gallery: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/18.webp", alt: "Classic Papers" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/17.webp", alt: "Classic Booklet" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/16.webp", alt: "Paper Detail" },
    ],
    usageImages: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/18.webp", alt: "Reliable Quality", caption: "The classic standard." },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/16.webp", alt: "Clean Burn", caption: "Patented slow-burn watermark." },
    ],
    careNotes: [
      "Store in a dry environment to prevent gum line sticking.",
    ],
    craftNote: "Every booklet features our signature interlocking weave watermark to prevent runs and ensure a smooth burn.",
  },
  "protective-tubes": {
    id: "protective-tubes",
    name: "Protective Tubes",
    subtitle: "Single Packaging",
    description:
      "Airtight, moisture-resistant single packaging designed to keep individual pre-rolls fresh on the go. Available in glass or premium BPA-free plastics.",
    specs: [
      "Child-resistant pop-top or screw cap",
      "Airtight and moisture-resistant",
      "Custom shrink-sleeve branding available",
      "Available in multiple colors and opacities",
    ],
    specGroups: [
      { label: "Materials", values: ["Borosilicate Glass", "Recyclable Polypropylene"] },
      { label: "Cap Styles", values: ["Child-Resistant Pop-Top", "Aluminum Screw Cap", "Cork Stopper"] },
    ],
    specImage: "/images/jojo_assets/JOJO Website 26-06-2026/13.webp",
    gallery: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/13.webp", alt: "Protective Tubes Array" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/14.webp", alt: "Tube Detail" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/15.webp", alt: "Packaging Box" },
    ],
    usageImages: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/13.webp", alt: "Color Array", caption: "Available in any brand color." },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/14.webp", alt: "Secure Seal", caption: "Airtight freshness seal." },
    ],
    careNotes: [
      "Clean glass variants with isopropyl alcohol.",
    ],
    craftNote: "Our child-resistant caps are rigorously tested to meet global compliance standards while remaining accessible for adults.",
  }
};

export const allProductsList = Object.values(products);
