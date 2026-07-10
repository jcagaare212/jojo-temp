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
  "pink-series": {
    id: "pink-series",
    name: "The Pink Series",
    subtitle: "[Client Subtitle]",
    description:
      "[Client to provide detailed product description here. This space is reserved for product copy that highlights key features.]",
    specs: [
      "[Specification 1]",
      "[Specification 2]",
      "[Specification 3]",
      "[Specification 4]",
    ],
    specGroups: [
      { label: "[Category 1]", values: ["[Detail A]", "[Detail B]"] },
      { label: "[Category 2]", values: ["[Detail C]", "[Detail D]"] },
      { label: "[Category 3]", values: ["[Detail E]", "[Detail F]"] },
    ],
    specImage: "/images/jojo_assets/JOJO Website 26-06-2026/33.webp",
    gallery: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/33.webp", alt: "The Pink Series Packaging" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/34.webp", alt: "Pink Cones Detail" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/32.webp", alt: "Pink Papers Display" },
    ],
    usageImages: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/33.webp", alt: "Retail Ready", caption: "[Caption Placeholder]" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/32.webp", alt: "Perfect Roll", caption: "[Caption Placeholder]" },
    ],
    careNotes: [
      "[Care instruction placeholder 1]",
      "[Care instruction placeholder 2]",
    ],
    craftNote: "[Client craft note placeholder\nLine 2 placeholder]",
  },
  "signature-series": {
    id: "signature-series",
    name: "The Signature Series",
    subtitle: "[Client Subtitle]",
    description:
      "[Client to provide detailed product description here. This space is reserved for product copy that highlights key features.]",
    specs: [
      "[Specification 1]",
      "[Specification 2]",
      "[Specification 3]",
      "[Specification 4]",
    ],
    specGroups: [
      { label: "[Category 1]", values: ["[Detail A]", "[Detail B]"] },
      { label: "[Category 2]", values: ["[Detail C]", "[Detail D]"] },
    ],
    specImage: "/images/jojo_assets/JOJO Website 26-06-2026/21.webp",
    gallery: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/21.webp", alt: "Signature Series Box" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/19.webp", alt: "Booklet Detail" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/20.webp", alt: "Open Booklet" },
    ],
    usageImages: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/21.webp", alt: "Luxury Packaging", caption: "[Caption Placeholder]" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/19.webp", alt: "Foil Detail", caption: "[Caption Placeholder]" },
    ],
    careNotes: [
      "[Care instruction placeholder 1]",
      "[Care instruction placeholder 2]",
    ],
    craftNote: "[Client craft note placeholder\nLine 2 placeholder]",
  },
  "classic-papers": {
    id: "classic-papers",
    name: "Classic Rolling Papers",
    subtitle: "[Client Subtitle]",
    description:
      "[Client to provide detailed product description here. This space is reserved for product copy that highlights key features.]",
    specs: [
      "[Specification 1]",
      "[Specification 2]",
      "[Specification 3]",
      "[Specification 4]",
    ],
    specGroups: [
      { label: "[Category 1]", values: ["[Detail A]", "[Detail B]"] },
      { label: "[Category 2]", values: ["[Detail C]", "[Detail D]"] },
    ],
    specImage: "/images/jojo_assets/JOJO Website 26-06-2026/18.webp",
    gallery: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/18.webp", alt: "Classic Papers" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/17.webp", alt: "Classic Booklet" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/16.webp", alt: "Paper Detail" },
    ],
    usageImages: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/18.webp", alt: "Reliable Quality", caption: "[Caption Placeholder]" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/16.webp", alt: "Clean Burn", caption: "[Caption Placeholder]" },
    ],
    careNotes: [
      "[Care instruction placeholder 1]",
      "[Care instruction placeholder 2]",
    ],
    craftNote: "[Client craft note placeholder\nLine 2 placeholder]",
  },
  "protective-tubes": {
    id: "protective-tubes",
    name: "Protective Tubes",
    subtitle: "[Client Subtitle]",
    description:
      "[Client to provide detailed product description here. This space is reserved for product copy that highlights key features.]",
    specs: [
      "[Specification 1]",
      "[Specification 2]",
      "[Specification 3]",
      "[Specification 4]",
    ],
    specGroups: [
      { label: "[Category 1]", values: ["[Detail A]", "[Detail B]"] },
      { label: "[Category 2]", values: ["[Detail C]", "[Detail D]"] },
    ],
    specImage: "/images/jojo_assets/JOJO Website 26-06-2026/13.webp",
    gallery: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/13.webp", alt: "Protective Tubes Array" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/14.webp", alt: "Tube Detail" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/15.webp", alt: "Packaging Box" },
    ],
    usageImages: [
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/13.webp", alt: "Color Array", caption: "[Caption Placeholder]" },
      { src: "/images/jojo_assets/JOJO Website 26-06-2026/14.webp", alt: "Secure Seal", caption: "[Caption Placeholder]" },
    ],
    careNotes: [
      "[Care instruction placeholder 1]",
      "[Care instruction placeholder 2]",
    ],
    craftNote: "[Client craft note placeholder\nLine 2 placeholder]",
  }
};

export const allProductsList = Object.values(products);
