import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, ArrowRight, Sparkles, Send, ShieldCheck, Layers, FileText, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

interface StepOption {
  value: string;
  title: string;
  sub?: string;
  swatchClass?: string;
  combinedOnly?: boolean;
}

interface StepConfig {
  id: string;
  stepNumber: string;
  field: string;
  title: string;
  desc: string;
  colsClass: string;
  options: StepOption[];
  visualImg?: string;
  hasQuantityInput?: boolean;
}

const coneSteps: StepConfig[] = [
  {
    id: "cone-1",
    stepNumber: "01",
    field: "Cone Size",
    title: "Choose the cone size.",
    desc: "These are the same standard cone formats used on the JOJO Pre-Rolled Cones page.",
    colsClass: "grid-cols-2 sm:grid-cols-3",
    options: [
      { value: "DogWalker — 70 mm", title: "DogWalker", sub: "70 mm" },
      { value: "Mini — 78 mm", title: "Mini", sub: "78 mm" },
      { value: "1¼ Size — 84 mm", title: "1¼ Size", sub: "84 mm" },
      { value: "98 mm Special — 98 mm", title: "98 mm Special", sub: "98 mm" },
      { value: "King Size — 109 mm", title: "King Size", sub: "109 mm" },
      { value: "Custom cone size", title: "Custom Requirement", sub: "Discuss with JOJO" },
    ],
  },
  {
    id: "cone-2",
    stepNumber: "02",
    field: "Paper Base",
    title: "Choose the paper base.",
    desc: "Select the paper family for the cone.",
    colsClass: "grid-cols-2 sm:grid-cols-4",
    options: [
      { value: "Wood Pulp", title: "Wood Pulp" },
      { value: "Rice", title: "Rice" },
      { value: "Hemp", title: "Hemp" },
      { value: "Flax", title: "Flax" },
    ],
  },
  {
    id: "cone-3",
    stepNumber: "03",
    field: "Paper Colour",
    title: "Choose the paper colour.",
    desc: "Colour directions match the JOJO rolling paper and cone range.",
    colsClass: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-7",
    visualImg: "/images/products/oem_refined/cones_color_range.png",
    options: [
      { value: "Bleached", title: "Bleached", swatchClass: "bg-[#f5f5ef]" },
      { value: "Unbleached", title: "Unbleached", swatchClass: "bg-[#cba574]" },
      { value: "Pink", title: "Pink", swatchClass: "bg-[#ef9bb2]" },
      { value: "Blue", title: "Blue", swatchClass: "bg-[#94c4e6]" },
      { value: "Green", title: "Green", swatchClass: "bg-[#a8c887]" },
      { value: "Purple", title: "Purple", swatchClass: "bg-[#ad91d4]" },
      { value: "Black", title: "Black", swatchClass: "bg-[#333333]" },
    ],
  },
  {
    id: "cone-4",
    stepNumber: "04",
    field: "Filter Tip",
    title: "Choose the filter-tip construction.",
    desc: "JOJO currently offers Spiral and M-Shape constructions.",
    colsClass: "grid-cols-1 sm:grid-cols-2",
    options: [
      { value: "Spiral", title: "Spiral", sub: "Rolled spiral construction" },
      { value: "M-Shape", title: "M-Shape", sub: "Folded M construction" },
    ],
  },
  {
    id: "cone-5",
    stepNumber: "05",
    field: "Tip Print",
    title: "Choose what goes on the tip.",
    desc: "Keep it simple or make the tip part of the brand language.",
    colsClass: "grid-cols-2 sm:grid-cols-4",
    options: [
      { value: "Logo Only", title: "Logo Only" },
      { value: "Logo + Text", title: "Logo + Text" },
      { value: "Custom Pattern", title: "Custom Pattern" },
      { value: "Plain / No Print", title: "Plain / No Print" },
    ],
  },
  {
    id: "cone-6",
    stepNumber: "06",
    field: "Packaging",
    title: "Choose the packaging direction.",
    desc: "Final dimensions and pack counts are developed around the approved cone specification.",
    colsClass: "grid-cols-2 sm:grid-cols-3",
    visualImg: "/images/products/oem_refined/cones_packaging_formats.png",
    options: [
      { value: "Retail Box", title: "Retail Box" },
      { value: "Drawer Box", title: "Drawer Box" },
      { value: "Paper Tube", title: "Paper Tube" },
      { value: "Metal Tin", title: "Metal Tin" },
      { value: "Counter Display", title: "Counter Display" },
      { value: "Bulk / Master Pack", title: "Bulk / Master Pack" },
    ],
  },
  {
    id: "cone-7",
    stepNumber: "07",
    field: "Route to Market",
    title: "How do you plan to sell or use the product?",
    desc: "This helps JOJO understand the retail or operational structure around the cone.",
    colsClass: "grid-cols-2 sm:grid-cols-3",
    hasQuantityInput: true,
    options: [
      { value: "Individual Retail", title: "Individual Retail" },
      { value: "Counter Display", title: "Counter Display" },
      { value: "Hanging Retail Pack", title: "Hanging Retail Pack" },
      { value: "Bulk Filling Operation", title: "Bulk Filling Operation" },
      { value: "Distributor / Wholesale", title: "Distributor / Wholesale" },
    ],
  },
];

const paperSteps: StepConfig[] = [
  {
    id: "paper-1",
    stepNumber: "01",
    field: "Paper Size",
    title: "Choose the rolling paper size.",
    desc: "1¼ and King Size Slim are the two core formats highlighted on the JOJO Rolling Papers page.",
    colsClass: "grid-cols-1 sm:grid-cols-3",
    options: [
      { value: "1¼ — 78 × 44 mm", title: "1¼", sub: "78 × 44 mm" },
      { value: "King Size Slim — 108 × 44 mm", title: "King Size Slim", sub: "108 × 44 mm" },
      { value: "Other / custom rolling paper size", title: "Other / Custom", sub: "Discuss with JOJO" },
    ],
  },
  {
    id: "paper-2",
    stepNumber: "02",
    field: "Paper Base",
    title: "Choose the paper base.",
    desc: "The same four paper bases used across the JOJO rolling paper range.",
    colsClass: "grid-cols-2 sm:grid-cols-4",
    options: [
      { value: "Wood Pulp", title: "Wood Pulp" },
      { value: "Rice", title: "Rice" },
      { value: "Hemp", title: "Hemp" },
      { value: "Flax", title: "Flax" },
    ],
  },
  {
    id: "paper-3",
    stepNumber: "03",
    field: "Paper Colour",
    title: "Choose the paper colour.",
    desc: "Use one colour or plan a coordinated colour series later.",
    colsClass: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-7",
    options: [
      { value: "Bleached", title: "Bleached", swatchClass: "bg-[#f5f5ef]" },
      { value: "Unbleached", title: "Unbleached", swatchClass: "bg-[#cba574]" },
      { value: "Pink", title: "Pink", swatchClass: "bg-[#ef9bb2]" },
      { value: "Blue", title: "Blue", swatchClass: "bg-[#94c4e6]" },
      { value: "Green", title: "Green", swatchClass: "bg-[#a8c887]" },
      { value: "Purple", title: "Purple", swatchClass: "bg-[#ad91d4]" },
      { value: "Black", title: "Black", swatchClass: "bg-[#333333]" },
    ],
  },
  {
    id: "paper-4",
    stepNumber: "04",
    field: "Booklet Format",
    title: "Choose the booklet format.",
    desc: "Choose the booklet construction first. Whether the finished product includes tips is selected separately in the next step.",
    colsClass: "grid-cols-2 sm:grid-cols-4",
    options: [
      { value: "Standard Booklet", title: "Standard Booklet" },
      { value: "Premium Booklet", title: "Premium Booklet" },
      { value: "Magnetic Booklet", title: "Magnetic Booklet" },
      { value: "Compact / Value Pack", title: "Compact / Value Pack" },
    ],
  },
  {
    id: "paper-5",
    stepNumber: "05",
    field: "Pack Composition",
    title: "Do you need papers only, or papers with tips?",
    desc: "No tip construction is selected here. If you need tips, JOJO can finalise the tip specification separately during development and sampling.",
    colsClass: "grid-cols-1 sm:grid-cols-2",
    options: [
      { value: "Papers Only", title: "Papers Only", sub: "Rolling-paper booklet without filter tips" },
      { value: "Papers + Tips", title: "Papers + Tips", sub: "Tip specification finalised separately with JOJO" },
    ],
  },
  {
    id: "paper-6",
    stepNumber: "06",
    field: "Artwork Stage",
    title: "How developed is the branding?",
    desc: "JOJO can start from finished files, a reference, or an early design direction.",
    colsClass: "grid-cols-1 sm:grid-cols-3",
    options: [
      { value: "Finished Artwork", title: "Finished Artwork", sub: "Logo / files ready" },
      { value: "Reference / Inspiration", title: "Reference / Inspiration", sub: "Image or sample to work from" },
      { value: "Need Design Development", title: "Need Design Development", sub: "Start from direction + brief" },
    ],
  },
  {
    id: "paper-7",
    stepNumber: "07",
    field: "Retail Packaging",
    title: "Choose the retail packaging direction.",
    desc: "For papers + tips, JOJO can also develop the compact India-format 4+4 and 3+3 concepts. These options appear only when 'Papers + Tips' is selected.",
    colsClass: "grid-cols-2 sm:grid-cols-3",
    visualImg: "/images/products/oem_refined/papers_packaging_formats.png",
    hasQuantityInput: true,
    options: [
      { value: "Individual Booklet", title: "Individual Booklet" },
      { value: "Counter Display", title: "Counter Display" },
      { value: "Hanging Retail Pack", title: "Hanging Retail Pack" },
      { value: "Multi-Pack", title: "Multi-Pack" },
      { value: "India 4+4 — 4 Papers + 4 Tips", title: "4 + 4", sub: "4 papers + 4 tips · India-format concept", combinedOnly: true },
      { value: "India 3+3 — 3 Papers + 3 Tips", title: "3 + 3", sub: "3 papers + 3 tips · India-format concept", combinedOnly: true },
      { value: "Master / Outer Packaging", title: "Master / Outer Packaging" },
    ],
  },
];

export default function PrivateLabel() {
  const location = useLocation();
  const [activeBuilder, setActiveBuilder] = useState<"cone" | "paper" | null>(null);

  // Cone State
  const [coneCurrentStep, setConeCurrentStep] = useState(0);
  const [coneFields, setConeFields] = useState<Record<string, string>>({});
  const [coneCopied, setConeCopied] = useState(false);

  // Paper State
  const [paperCurrentStep, setPaperCurrentStep] = useState(0);
  const [paperFields, setPaperFields] = useState<Record<string, string>>({});
  const [paperCopied, setPaperCopied] = useState(false);

  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    company: '',
    email: '',
    market: '',
    product: 'Pre-Rolled Cones',
    qty: '',
    message: ''
  });

  useEffect(() => {
    if (location.hash === "#cone-builder") {
      setActiveBuilder("cone");
      setTimeout(() => {
        document.getElementById("cone-builder")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else if (location.hash === "#paper-builder") {
      setActiveBuilder("paper");
      setTimeout(() => {
        document.getElementById("paper-builder")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else if (location.hash === "#quotation") {
      setTimeout(() => {
        document.getElementById("quotation")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [location.hash]);

  const openBuilder = (type: "cone" | "paper") => {
    setActiveBuilder(type);
    setTimeout(() => {
      document.getElementById(`${type}-builder`)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const handleSelectOption = (
    type: "cone" | "paper",
    field: string,
    value: string
  ) => {
    if (type === "cone") {
      setConeFields((prev) => ({ ...prev, [field]: value }));
    } else {
      setPaperFields((prev) => {
        const next = { ...prev, [field]: value };
        // If composition changes away from Papers + Tips, clear combined-only options
        if (field === "Pack Composition" && value !== "Papers + Tips") {
          if (next["Retail Packaging"]?.includes("4+4") || next["Retail Packaging"]?.includes("3+3")) {
            next["Retail Packaging"] = "Individual Booklet";
          }
        }
        return next;
      });
    }
  };

  const handleInputChange = (
    type: "cone" | "paper",
    field: string,
    value: string
  ) => {
    if (type === "cone") {
      setConeFields((prev) => ({ ...prev, [field]: value }));
    } else {
      setPaperFields((prev) => ({ ...prev, [field]: value }));
    }
  };

  const generateBriefText = (type: "cone" | "paper") => {
    const isCone = type === "cone";
    const fields = isCone ? coneFields : paperFields;
    const lines = [
      "JOJO OEM PRIVATE LABEL BRIEF",
      isCone
        ? "Product: Private Label Pre-Rolled Cones"
        : "Product: Private Label Rolling Papers",
    ];
    Object.entries(fields).forEach(([k, v]) => {
      if (v && v.trim()) lines.push(`${k}: ${v.trim()}`);
    });
    return lines.join("\n");
  };

  const copyToClipboard = async (type: "cone" | "paper") => {
    const text = generateBriefText(type);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    if (type === "cone") {
      setConeCopied(true);
      setTimeout(() => setConeCopied(false), 1500);
    } else {
      setPaperCopied(true);
      setTimeout(() => setPaperCopied(false), 1500);
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `JOJO OEM Quotation Request — ${quoteForm.company || quoteForm.name || 'New Buyer'}`;
    const body = [
      'JOJO OEM / PRIVATE LABEL QUOTATION REQUEST',
      '',
      `Name: ${quoteForm.name}`,
      `Company / Brand: ${quoteForm.company}`,
      `Email: ${quoteForm.email}`,
      `Country / Target Market: ${quoteForm.market}`,
      `Product: ${quoteForm.product}`,
      `Expected Quantity: ${quoteForm.qty}`,
      '',
      'Requirement:',
      quoteForm.message,
      '',
      'Please review the above requirement and share the applicable specification, MOQ, sampling requirements, pricing and lead time.'
    ].join('\n');

    window.location.href = `mailto:info@jojopapers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const hasCombinedTips = paperFields["Pack Composition"] === "Papers + Tips";

  return (
    <div className="pt-[73px] md:pt-[115px] bg-[#fff] text-[#0d0d0d] font-sans antialiased min-h-screen selection:bg-[#a97922]/20">
      <SEO
        title="OEM Rolling Papers & Private Label Cones Builder | JOJO Papers"
        description="Build private-label pre-rolled cones and rolling papers around your own product specification with JOJO. Choose size, paper, colour, filter tips, branding and retail packaging."
        canonical="https://jojopapers.com/private-label-branding"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "OEM Rolling Paper and Private Label Manufacturing",
          "provider": {
            "@type": "Organization",
            "name": "JOJO Papers",
            "url": "https://jojopapers.com/",
            "email": "info@jojopapers.com",
            "telephone": "+91 99715 08200"
          },
          "serviceType": [
            "Private label rolling papers",
            "Custom pre-rolled cones",
            "Custom filter tips",
            "Custom rolling paper packaging"
          ],
          "areaServed": "Worldwide"
        }}
      />

      <Breadcrumb items={[{ label: "Private Label & OEM" }]} />

      {/* HERO SECTION */}
      <section className="border-b border-border bg-white overflow-hidden" id="top">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 min-h-[460px] items-center py-8 lg:py-12">
            
            {/* Left Copy */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2.5 font-mono text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#777] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#a97922] shadow-[0_0_0_4px_rgba(169,121,34,0.15)] animate-pulse inline-block" />
                OEM manufacturing · Made in India since 2014
              </div>

              <h1 className="text-[clamp(38px,5.2vw,74px)] font-normal leading-[0.92] tracking-[-0.035em] mb-4 font-['Cormorant_Garamond'] text-[#0a0a0a]">
                Your Brand.<br />
                <span className="text-[#a97922] italic">Built by JOJO.</span>
              </h1>

              <p className="text-[16px] md:text-[17.5px] text-muted-foreground leading-relaxed max-w-[560px] mb-6 font-light">
                Build private-label pre-rolled cones and rolling papers around your own product specification — then carry the same direction into tip branding, artwork, retail packaging and the quotation brief.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={() => openBuilder("cone")}
                  className="px-7 py-3.5 rounded-full bg-[#111] text-white text-[12px] font-mono tracking-[0.08em] uppercase font-semibold hover:bg-black transition-transform hover:-translate-y-0.5 cursor-pointer shadow-sm"
                >
                  Build Pre-Rolled Cones
                </button>
                <button
                  onClick={() => openBuilder("paper")}
                  className="px-7 py-3.5 rounded-full bg-white text-[#111] border border-border text-[12px] font-mono tracking-[0.08em] uppercase font-semibold hover:bg-[#fafafa] transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Build Rolling Papers
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-border/80 font-mono text-[11px] md:text-[12px] tracking-[0.1em] uppercase text-[#777]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
                  Product + Packaging
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
                  Guided OEM Builder
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
                  Quotation Ready Brief
                </span>
              </div>
            </div>

            {/* Right Hero Visual with floating card */}
            <div className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] rounded-sm overflow-hidden border border-border bg-[#faf9f6]">
              <img
                src="/images/products/oem_refined/hero_oem_system.jpg"
                alt="Private label rolling papers, pre-rolled cones and custom packaging under Your Brand"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/10 pointer-events-none" />

              {/* Floating Private Label System Card */}
              <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-[min(340px,90%)] bg-white/95 backdrop-blur-md border border-border/90 p-5 shadow-xl">
                <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#777] mb-2 pb-1 border-b border-border">
                  Private Label System
                </div>
                <div className="grid grid-cols-[28px_1fr] items-center py-2 border-b border-border/60">
                  <span className="font-mono text-[11.5px] font-bold text-[#a97922]">01</span>
                  <span className="font-['Cormorant_Garamond'] text-[18px] font-medium">Choose product</span>
                </div>
                <div className="grid grid-cols-[28px_1fr] items-center py-2 border-b border-border/60">
                  <span className="font-mono text-[11.5px] font-bold text-[#a97922]">02</span>
                  <span className="font-['Cormorant_Garamond'] text-[18px] font-medium">Build specification</span>
                </div>
                <div className="grid grid-cols-[28px_1fr] items-center py-2 border-b border-border/60">
                  <span className="font-mono text-[11.5px] font-bold text-[#a97922]">03</span>
                  <span className="font-['Cormorant_Garamond'] text-[18px] font-medium">Define packaging</span>
                </div>
                <div className="grid grid-cols-[28px_1fr] items-center py-2">
                  <span className="font-mono text-[11.5px] font-bold text-[#a97922]">04</span>
                  <span className="font-['Cormorant_Garamond'] text-[18px] font-medium">Request quotation</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Strip */}
        <div className="border-t border-border bg-[#fafaf8]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-border text-center">
            {['Pre-Rolled Cones', 'Rolling Papers', 'Filter Tips', 'Custom Packaging', 'OEM / Private Label'].map((item, idx) => (
              <div key={idx} className="py-3.5 px-3 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-[#444]">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Dual Interactive Launch Cards */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8" id="oem-paths">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Cones Card */}
            <button
              onClick={() => openBuilder("cone")}
              type="button"
              className="group border border-border bg-white p-6 sm:p-7 text-left grid grid-cols-[36px_1fr_auto] gap-4 items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[12.5px] font-bold text-[#a97922] group-hover:text-black transition-colors">
                01
              </span>
              <div>
                <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-0.5">
                  Private Label
                </div>
                <h2 className="text-[26px] sm:text-[32px] font-['Cormorant_Garamond'] font-medium leading-none mb-1.5 text-[#111]">
                  Pre-Rolled Cones
                </h2>
                <p className="text-[13.5px] md:text-[14px] text-muted-foreground leading-relaxed">
                  Size &rarr; paper &rarr; colour &rarr; filter tip &rarr; tip print &rarr; packaging &rarr; market.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#111] group-hover:text-[#a97922] transition-colors">
                <span>Build Cone Brief</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Papers Card */}
            <button
              onClick={() => openBuilder("paper")}
              type="button"
              className="group border border-border bg-white p-6 sm:p-7 text-left grid grid-cols-[36px_1fr_auto] gap-4 items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[12.5px] font-bold text-[#a97922] group-hover:text-black transition-colors">
                02
              </span>
              <div>
                <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-0.5">
                  Private Label
                </div>
                <h2 className="text-[26px] sm:text-[32px] font-['Cormorant_Garamond'] font-medium leading-none mb-1.5 text-[#111]">
                  Rolling Papers
                </h2>
                <p className="text-[13.5px] md:text-[14px] text-muted-foreground leading-relaxed">
                  Size &rarr; paper &rarr; colour &rarr; booklet &rarr; papers only / tips &rarr; artwork &rarr; packaging.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#111] group-hover:text-[#a97922] transition-colors">
                <span>Build Paper Brief</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 font-mono text-[11.5px] text-muted-foreground">
            <span>Already have a complete specification?</span>
            <a href="#quotation" className="text-[#111] font-semibold border-b border-[#a97922] pb-0.5 hover:text-[#a97922] transition-colors">
              Skip the builder and request a quotation &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRE-ROLLED CONES BUILDER */}
      {/* ========================================================================= */}
      <section
        id="cone-builder"
        className={`border-b border-border bg-[#fafaf8] py-10 md:py-14 transition-all duration-300 ${
          activeBuilder === "cone" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                <span className="w-4 h-px bg-[#a97922]" />
                OEM Builder · Pre-Rolled Cones
              </div>
              <h2 className="text-[34px] sm:text-[46px] font-['Cormorant_Garamond'] font-normal leading-[1.02] text-[#111]">
                Build Your Private Label Cone Brief.
              </h2>
            </div>
            <button
              onClick={() => openBuilder("paper")}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.09em] text-[#111] border-b border-[#a97922] pb-1 w-max hover:text-[#a97922] transition-colors cursor-pointer"
            >
              Switch to Rolling Papers &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
            
            {/* Main Builder Steps Column */}
            <div className="min-w-0">
              {/* Progress Steps Tabs */}
              <div className="grid grid-cols-4 sm:grid-cols-7 border border-border bg-white overflow-hidden mb-5">
                {coneSteps.map((step, idx) => {
                  const isActive = coneCurrentStep === idx;
                  const isDone = Boolean(coneFields[step.field]);
                  return (
                    <button
                      key={step.id}
                      onClick={() => setConeCurrentStep(idx)}
                      className={`p-3.5 text-left border-r last:border-r-0 border-border transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#111] text-white"
                          : isDone
                          ? "bg-[#f4f4f1] text-[#111]"
                          : "bg-white text-muted-foreground hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className={`block font-mono text-[10px] font-bold ${isActive ? 'text-[#d2b476]' : 'text-[#a97922]'}`}>
                        {step.stepNumber}
                      </span>
                      <span className="block font-mono text-[10.5px] uppercase tracking-wider font-semibold truncate">
                        {step.field.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Panel */}
              <div className="border border-border bg-white p-6 sm:p-10">
                {coneSteps.map((step, idx) => {
                  if (idx !== coneCurrentStep) return null;
                  const selectedVal = coneFields[step.field] || "";

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="grid grid-cols-[38px_1fr] gap-3 mb-7">
                        <span className="font-mono text-[12px] font-bold text-[#a97922] pt-1">
                          {step.stepNumber}
                        </span>
                        <div>
                          <h3 className="text-[28px] sm:text-[34px] font-['Cormorant_Garamond'] font-normal leading-tight mb-1 text-[#111]">
                            {step.title}
                          </h3>
                          <p className="text-[14.5px] md:text-[15.5px] text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Options Grid */}
                      <div className={`grid gap-3 ${step.colsClass}`}>
                        {step.options.map((opt) => {
                          const isSelected = selectedVal === opt.value;
                          return (
                            <button
                              key={opt.value}
                              onClick={() => handleSelectOption("cone", step.field, opt.value)}
                              className={`p-4 border text-left transition-all relative cursor-pointer min-h-[88px] flex flex-col justify-center ${
                                isSelected
                                  ? "border-[#a97922] bg-[#fffdfa] ring-1 ring-[#a97922]"
                                  : "border-border bg-white hover:border-black/40"
                              }`}
                            >
                              {opt.swatchClass && (
                                <span
                                  className={`w-4 h-4 rounded-full border border-black/15 mb-2.5 ${opt.swatchClass}`}
                                />
                              )}
                              <span className="font-['Cormorant_Garamond'] text-[20px] sm:text-[22px] font-medium leading-none block text-[#111]">
                                {opt.title}
                              </span>
                              {opt.sub && (
                                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5 block">
                                  {opt.sub}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Visual Reference if Available */}
                      {step.visualImg && (
                        <div className="mt-6 border border-border p-2 bg-[#faf9f6]">
                          <img
                            src={step.visualImg}
                            alt="Visual reference"
                            className="w-full max-h-[360px] object-contain bg-white mx-auto block"
                          />
                        </div>
                      )}

                      {/* Quantity Input for Last Step */}
                      {step.hasQuantityInput && (
                        <div className="mt-7 pt-6 border-t border-border">
                          <label className="block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2">
                            Expected quantity <span className="text-muted-foreground font-normal lowercase">(if known)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 50,000 cones / 500 master cartons"
                            value={coneFields["Expected Quantity"] || ""}
                            onChange={(e) => handleInputChange("cone", "Expected Quantity", e.target.value)}
                            className="w-full border border-border bg-white p-3.5 text-[14px] outline-none focus:border-black font-mono"
                          />
                        </div>
                      )}

                      {/* Step Navigation Buttons */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                        <button
                          disabled={coneCurrentStep === 0}
                          onClick={() => setConeCurrentStep((prev) => Math.max(0, prev - 1))}
                          className="px-6 py-3 rounded-full border border-border text-[11px] font-mono font-bold uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f4f4f1] transition-colors"
                        >
                          &larr; Previous
                        </button>
                        {coneCurrentStep < coneSteps.length - 1 ? (
                          <button
                            onClick={() => setConeCurrentStep((prev) => Math.min(coneSteps.length - 1, prev + 1))}
                            className="px-7 py-3 rounded-full bg-[#111] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-black transition-colors"
                          >
                            Next Step &rarr;
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              document.querySelector('[data-builder-summary="cone"]')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-7 py-3 rounded-full bg-[#a97922] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-[#8e651c] transition-colors"
                          >
                            Review Cone Brief &rarr;
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Sticky Live Quotation Summary Box */}
            <aside className="sticky top-28 border border-border bg-white p-6 shadow-md" data-builder-summary="cone">
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#a97922] mb-1">
                Your Quotation Brief
              </div>
              <h3 className="text-[26px] font-['Cormorant_Garamond'] font-medium mb-4 text-[#111]">
                Private Label Cone
              </h3>

              <div className="h-[140px] border border-border bg-[#faf9f6] p-2 mb-4 flex items-center justify-center">
                <img
                  src="/images/products/oem_refined/cones_preview.png"
                  alt="Cone preview"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="border-t border-border pt-3 divide-y divide-border/60 text-[13.5px]">
                {Object.entries(coneFields).filter(([, v]) => v).length === 0 ? (
                  <div className="py-4 text-muted-foreground font-mono text-[11.5px] leading-relaxed text-center">
                    Select options from the steps to build your custom cone brief.
                  </div>
                ) : (
                  Object.entries(coneFields)
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k} className="py-2.5 grid grid-cols-[115px_1fr] gap-2 items-start">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#777] font-semibold">{k}</span>
                        <span className="font-medium text-[#111] leading-tight">{v}</span>
                      </div>
                    ))
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-border">
                <button
                  onClick={() => copyToClipboard("cone")}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full border border-border text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-[#fafafa] cursor-pointer"
                >
                  {coneCopied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{coneCopied ? "Copied" : "Copy Brief"}</span>
                </button>
                <a
                  href={`mailto:info@jojopapers.com?subject=${encodeURIComponent(
                    "JOJO OEM Quotation Request — Pre-Rolled Cones Brief"
                  )}&body=${encodeURIComponent(generateBriefText("cone"))}`}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#111] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-black text-center cursor-pointer"
                >
                  <span>Request Quote</span>
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ROLLING PAPERS BUILDER */}
      {/* ========================================================================= */}
      <section
        id="paper-builder"
        className={`border-b border-border bg-[#fafaf8] py-10 md:py-14 transition-all duration-300 ${
          activeBuilder === "paper" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                <span className="w-4 h-px bg-[#a97922]" />
                OEM Builder · Rolling Papers
              </div>
              <h2 className="text-[34px] sm:text-[46px] font-['Cormorant_Garamond'] font-normal leading-[1.02] text-[#111]">
                Build Your Private Label Rolling Paper Brief.
              </h2>
            </div>
            <button
              onClick={() => openBuilder("cone")}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.09em] text-[#111] border-b border-[#a97922] pb-1 w-max hover:text-[#a97922] transition-colors cursor-pointer"
            >
              Switch to Pre-Rolled Cones &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
            
            {/* Main Builder Steps Column */}
            <div className="min-w-0">
              {/* Progress Steps Tabs */}
              <div className="grid grid-cols-4 sm:grid-cols-7 border border-border bg-white overflow-hidden mb-5">
                {paperSteps.map((step, idx) => {
                  const isActive = paperCurrentStep === idx;
                  const isDone = Boolean(paperFields[step.field]);
                  return (
                    <button
                      key={step.id}
                      onClick={() => setPaperCurrentStep(idx)}
                      className={`p-3.5 text-left border-r last:border-r-0 border-border transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#111] text-white"
                          : isDone
                          ? "bg-[#f4f4f1] text-[#111]"
                          : "bg-white text-muted-foreground hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className={`block font-mono text-[10px] font-bold ${isActive ? 'text-[#d2b476]' : 'text-[#a97922]'}`}>
                        {step.stepNumber}
                      </span>
                      <span className="block font-mono text-[10.5px] uppercase tracking-wider font-semibold truncate">
                        {step.field.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Panel */}
              <div className="border border-border bg-white p-6 sm:p-10">
                {paperSteps.map((step, idx) => {
                  if (idx !== paperCurrentStep) return null;
                  const selectedVal = paperFields[step.field] || "";

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="grid grid-cols-[38px_1fr] gap-3 mb-7">
                        <span className="font-mono text-[12px] font-bold text-[#a97922] pt-1">
                          {step.stepNumber}
                        </span>
                        <div>
                          <h3 className="text-[28px] sm:text-[34px] font-['Cormorant_Garamond'] font-normal leading-tight mb-1 text-[#111]">
                            {step.title}
                          </h3>
                          <p className="text-[14.5px] md:text-[15.5px] text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Options Grid */}
                      <div className={`grid gap-3 ${step.colsClass}`}>
                        {step.options
                          .filter((opt) => !opt.combinedOnly || hasCombinedTips)
                          .map((opt) => {
                            const isSelected = selectedVal === opt.value;
                            return (
                              <button
                                key={opt.value}
                                onClick={() => handleSelectOption("paper", step.field, opt.value)}
                                className={`p-4 border text-left transition-all relative cursor-pointer min-h-[88px] flex flex-col justify-center ${
                                  isSelected
                                    ? "border-[#a97922] bg-[#fffdfa] ring-1 ring-[#a97922]"
                                    : "border-border bg-white hover:border-black/40"
                                }`}
                              >
                                {opt.swatchClass && (
                                  <span
                                    className={`w-4 h-4 rounded-full border border-black/15 mb-2.5 ${opt.swatchClass}`}
                                  />
                                )}
                                <span className="font-['Cormorant_Garamond'] text-[20px] sm:text-[22px] font-medium leading-none block text-[#111]">
                                  {opt.title}
                                </span>
                                {opt.sub && (
                                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5 block">
                                    {opt.sub}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                      </div>

                      {/* Visual Reference if Available */}
                      {step.visualImg && (
                        <div className="mt-6 border border-border p-2 bg-[#faf9f6]">
                          <img
                            src={step.visualImg}
                            alt="Visual reference"
                            className="w-full max-h-[360px] object-contain bg-white mx-auto block"
                          />
                        </div>
                      )}

                      {/* Quantity Input for Last Step */}
                      {step.hasQuantityInput && (
                        <div className="mt-7 pt-6 border-t border-border">
                          <label className="block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2">
                            Expected quantity <span className="text-muted-foreground font-normal lowercase">(if known)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 10,000 booklets / 200 display boxes"
                            value={paperFields["Expected Quantity"] || ""}
                            onChange={(e) => handleInputChange("paper", "Expected Quantity", e.target.value)}
                            className="w-full border border-border bg-white p-3.5 text-[14px] outline-none focus:border-black font-mono"
                          />
                        </div>
                      )}

                      {/* Step Navigation Buttons */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                        <button
                          disabled={paperCurrentStep === 0}
                          onClick={() => setPaperCurrentStep((prev) => Math.max(0, prev - 1))}
                          className="px-6 py-3 rounded-full border border-border text-[11px] font-mono font-bold uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f4f4f1] transition-colors"
                        >
                          &larr; Previous
                        </button>
                        {paperCurrentStep < paperSteps.length - 1 ? (
                          <button
                            onClick={() => setPaperCurrentStep((prev) => Math.min(paperSteps.length - 1, prev + 1))}
                            className="px-7 py-3 rounded-full bg-[#111] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-black transition-colors"
                          >
                            Next Step &rarr;
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              document.querySelector('[data-builder-summary="paper"]')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-7 py-3 rounded-full bg-[#a97922] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-[#8e651c] transition-colors"
                          >
                            Review Rolling Paper Brief &rarr;
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Sticky Live Quotation Summary Box */}
            <aside className="sticky top-28 border border-border bg-white p-6 shadow-md" data-builder-summary="paper">
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#a97922] mb-1">
                Your Quotation Brief
              </div>
              <h3 className="text-[26px] font-['Cormorant_Garamond'] font-medium mb-4 text-[#111]">
                Private Label Rolling Papers
              </h3>

              <div className="h-[140px] border border-border bg-[#faf9f6] p-2 mb-4 flex items-center justify-center">
                <img
                  src="/images/products/oem_refined/papers_preview.jpg"
                  alt="Paper preview"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="border-t border-border pt-3 divide-y divide-border/60 text-[13.5px]">
                {Object.entries(paperFields).filter(([, v]) => v).length === 0 ? (
                  <div className="py-4 text-muted-foreground font-mono text-[11.5px] leading-relaxed text-center">
                    Select options from the steps to build your custom paper brief.
                  </div>
                ) : (
                  Object.entries(paperFields)
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k} className="py-2.5 grid grid-cols-[115px_1fr] gap-2 items-start">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#777] font-semibold">{k}</span>
                        <span className="font-medium text-[#111] leading-tight">{v}</span>
                      </div>
                    ))
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-border">
                <button
                  onClick={() => copyToClipboard("paper")}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full border border-border text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-[#fafafa] cursor-pointer"
                >
                  {paperCopied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{paperCopied ? "Copied" : "Copy Brief"}</span>
                </button>
                <a
                  href={`mailto:info@jojopapers.com?subject=${encodeURIComponent(
                    "JOJO OEM Quotation Request — Rolling Papers Brief"
                  )}&body=${encodeURIComponent(generateBriefText("paper"))}`}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#111] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-black text-center cursor-pointer"
                >
                  <span>Request Quote</span>
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROCESS SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 border-b border-border bg-white" id="oem-process">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-14 items-end mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#777] mb-2">
                <span className="w-5 h-px bg-[#a97922]" />
                From Brief to Production
              </div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-['Cormorant_Garamond'] font-normal leading-[0.98] text-[#111]">
                A clear route from idea to approved production.
              </h2>
            </div>
            <p className="text-[15.5px] md:text-[16.5px] text-muted-foreground leading-relaxed">
              The builder defines what you want to make. JOJO then reviews the specification, packaging direction, quantity and commercial requirements before quotation and sampling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border bg-white">
            {[
              { num: "01", title: "Specify", desc: "Choose product, size, paper, colour, tips and format." },
              { num: "02", title: "Brand", desc: "Define tip print, artwork stage and packaging direction." },
              { num: "03", title: "Quote", desc: "Quantity, scope and requirements are reviewed for quotation." },
              { num: "04", title: "Sample", desc: "Required samples, proofs or artwork checks are confirmed." },
              { num: "05", title: "Approve", desc: "Specification and commercial terms are approved before production." },
              { num: "06", title: "Produce", desc: "Manufacturing, QC, packing and dispatch follow the approved brief." },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`p-6 md:p-8 border-b lg:border-b-0 border-border ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i >= 3 ? "lg:border-t" : ""}`}
              >
                <span className="font-mono text-[11.5px] font-bold text-[#a97922] block mb-3">
                  {step.num}
                </span>
                <h3 className="text-[24px] font-['Cormorant_Garamond'] font-medium mb-2 text-[#111]">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUALITY ASSURANCE SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 border-b border-border bg-[#fafaf8]" id="quality">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-14 items-end mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#777] mb-2">
                <span className="w-5 h-px bg-[#a97922]" />
                Quality Built Into the Brief
              </div>
              <h2 className="text-[clamp(32px,4vw,56px)] font-['Cormorant_Garamond'] font-normal leading-[0.98] text-[#111]">
                The product has to work before the packaging can sell it.
              </h2>
            </div>
            <p className="text-[15.5px] md:text-[16.5px] text-muted-foreground leading-relaxed">
              Quality requirements are tied to the selected specification. Documentation, testing and approvals can then be discussed according to the product and buyer requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border bg-white">
            {[
              { num: "01", title: "Material Specification", desc: "Paper base, colour and selected construction are confirmed against the project brief." },
              { num: "02", title: "Dimension Control", desc: "Relevant size and construction details are checked against the approved specification." },
              { num: "03", title: "Print & Packaging", desc: "Brand placement, pack count, artwork and packaging details are checked before release." },
              { num: "04", title: "Final Packing", desc: "Finished goods are packed against the agreed retail or bulk supply format." },
            ].map((qc, i) => (
              <div
                key={qc.num}
                className={`p-6 sm:p-7 border-b lg:border-b-0 border-border ${
                  i < 3 ? "sm:border-r" : ""
                }`}
              >
                <span className="font-mono text-[11.5px] font-bold text-[#a97922] block mb-3">
                  {qc.num}
                </span>
                <h3 className="text-[22px] font-['Cormorant_Garamond'] font-medium mb-1.5 text-[#111]">
                  {qc.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {qc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUOTATION FORM SECTION */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-[#111] text-white" id="quotation">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.84fr_1.16fr] gap-10 lg:gap-14 items-start">
            
            {/* Left Info */}
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#aaa] mb-2">
                <span className="w-5 h-px bg-[#d2b476]" />
                Request a Quotation
              </div>
              <h2 className="text-[clamp(32px,4vw,54px)] font-['Cormorant_Garamond'] font-normal leading-[0.98] text-white mb-4">
                Already know what you need?
              </h2>
              <p className="text-[15.5px] text-[#c9c9c9] leading-relaxed mb-6">
                Send JOJO the commercial brief directly. If you used the builder above, use the <strong>Request Quotation</strong> button inside your live brief and your selected options will be carried into the email automatically.
              </p>

              <div className="grid grid-cols-2 gap-x-4 border-t border-[#333] pt-1">
                {[
                  'Product / format',
                  'Paper / colour',
                  'Packaging',
                  'Expected quantity',
                  'Target market',
                  'Artwork stage'
                ].map((tag, i) => (
                  <div key={i} className="py-3 border-b border-[#333] font-mono text-[11px] font-bold uppercase tracking-wider text-[#bbb]">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quote Form */}
            <form onSubmit={handleQuoteSubmit} className="bg-white text-[#111] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xl">
              <div>
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Company / Brand
                </label>
                <input
                  type="text"
                  placeholder="Company or brand"
                  value={quoteForm.company}
                  onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Country / Target Market
                </label>
                <input
                  type="text"
                  placeholder="e.g. USA / UK / India"
                  value={quoteForm.market}
                  onChange={(e) => setQuoteForm({ ...quoteForm, market: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Product
                </label>
                <select
                  value={quoteForm.product}
                  onChange={(e) => setQuoteForm({ ...quoteForm, product: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                >
                  <option>Pre-Rolled Cones</option>
                  <option>Rolling Papers</option>
                  <option>Filter Tips</option>
                  <option>Packaging / Multi-Product Project</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Expected Quantity
                </label>
                <input
                  type="text"
                  placeholder="Estimated units / packs"
                  value={quoteForm.qty}
                  onChange={(e) => setQuoteForm({ ...quoteForm, qty: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#666] mb-1.5">
                  Requirement Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Size, paper, colour, packaging, artwork/reference or any other requirement"
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="w-full border border-border bg-white p-3 text-[14px] outline-none focus:border-[#a97922]"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#111] text-white font-mono text-[11.5px] font-bold uppercase tracking-[0.1em] hover:bg-black transition-colors cursor-pointer"
                >
                  Prepare Quotation Request &rarr;
                </button>
                <p className="mt-2.5 font-mono text-[10px] text-[#777] text-center">
                  This prepares your quotation request directly for info@jojopapers.com.
                </p>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL DIRECT CTA */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-14 border-t border-border bg-[#fafaf8]" id="oem-enquiry">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#777] mb-1.5">
              <span className="w-5 h-px bg-[#a97922]" />
              Already Have a Complete Brief?
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-['Cormorant_Garamond'] font-normal text-[#111]">
              Skip the builder and send the specification directly.
            </h2>
            <p className="text-[14.5px] md:text-[15.5px] text-muted-foreground mt-1 max-w-[680px]">
              Share the product, target market, size, paper direction, artwork or reference, packaging requirement and expected quantity if known.
            </p>
          </div>
          <a
            href="mailto:info@jojopapers.com?subject=JOJO%20OEM%20Private%20Label%20Enquiry"
            className="whitespace-nowrap px-8 py-4 rounded-full bg-[#111] text-white font-mono text-[11.5px] font-bold uppercase tracking-[0.09em] hover:bg-black transition-transform hover:-translate-y-0.5 cursor-pointer shadow-sm"
          >
            Send Your OEM Brief &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
