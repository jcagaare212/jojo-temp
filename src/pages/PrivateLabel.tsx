import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

interface StepOption {
  value: string;
  title: string;
  sub?: string;
  swatchClass?: string;
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
    visualImg: "/images/products/oem/builder/oem_img_1.png",
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
    visualImg: "/images/products/oem/builder/oem_img_2.png",
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
    desc: "This decides how the rolling paper becomes the individual retail product.",
    colsClass: "grid-cols-2 sm:grid-cols-3",
    visualImg: "/images/products/oem/builder/oem_img_4.jpg",
    options: [
      { value: "Standard Booklet", title: "Standard Booklet" },
      { value: "Premium Booklet", title: "Premium Booklet" },
      { value: "Magnetic Booklet", title: "Magnetic Booklet" },
      { value: "Papers + Tips", title: "Papers + Tips" },
      { value: "Compact / Value Pack", title: "Compact / Value Pack" },
    ],
  },
  {
    id: "paper-5",
    stepNumber: "05",
    field: "Filter Tips",
    title: "Do you want filter tips in the pack?",
    desc: "If the format is papers-only, choose Not Required. For combined formats, choose a tip construction.",
    colsClass: "grid-cols-1 sm:grid-cols-3",
    options: [
      { value: "Not Required", title: "Not Required" },
      { value: "Spiral", title: "Spiral" },
      { value: "M-Shape", title: "M-Shape" },
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
    title: "How should the finished booklet go to retail?",
    desc: "Choose the next packaging layer around the booklet.",
    colsClass: "grid-cols-2 sm:grid-cols-3",
    visualImg: "/images/products/oem/builder/oem_img_5.png",
    hasQuantityInput: true,
    options: [
      { value: "Individual Booklet", title: "Individual Booklet" },
      { value: "Counter Display", title: "Counter Display" },
      { value: "Hanging Retail Pack", title: "Hanging Retail Pack" },
      { value: "Multi-Pack", title: "Multi-Pack" },
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

  useEffect(() => {
    if (location.hash === "#cone-builder") {
      setActiveBuilder("cone");
      setTimeout(() => {
        document.getElementById("cone-builder")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else if (location.hash === "#paper-builder") {
      setActiveBuilder("paper");
      setTimeout(() => {
        document.getElementById("paper-builder")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.hash]);

  const openBuilder = (type: "cone" | "paper") => {
    setActiveBuilder(type);
    setTimeout(() => {
      document.getElementById(`${type}-builder`)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSelectOption = (
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

  return (
    <div className="pt-[73px] md:pt-[115px] bg-background text-foreground">
      <Breadcrumb items={[{ label: "Private Label & Branding" }]} />

      {/* HUB HERO */}
      <section className="py-16 md:py-20 border-b border-border bg-white">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 items-center mb-10">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-4 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
                OEM · Private Label · Guided Product Brief
              </div>
              <h1 className="text-[clamp(36px,5.2vw,62px)] font-medium leading-[1.02] tracking-tight mb-5 font-['Cormorant_Garamond']">
                Start With the Product You Want to Build.
              </h1>
              <p className="text-[16px] text-muted-foreground leading-relaxed max-w-[61ch]">
                Choose the product path below and build a practical OEM brief step by step. The same paper bases, colours, cone sizes, filter-tip options and retail formats shown across the JOJO website are used here, so the OEM process stays connected to the actual JOJO product range.
              </p>
            </div>

            <div className="border border-border p-2.5 bg-[#fafafa]">
              <img
                alt="Private label rolling papers, pre-rolled cones and custom packaging under Your Brand"
                src="/images/products/oem/builder/oem_img_0.jpg"
                className="w-full aspect-[16/9] object-cover block"
              />
            </div>
          </div>

          {/* DUAL PRODUCT PATHS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Cone Builder Card */}
            <button
              onClick={() => openBuilder("cone")}
              type="button"
              className="border border-border bg-white text-left p-6 md:p-8 grid grid-cols-[40px_1fr_auto] gap-4 items-center cursor-pointer transition-all duration-200 hover:bg-[#111] hover:text-white hover:border-[#111] group shadow-xs"
            >
              <span className="font-mono text-[10px] text-muted-foreground group-hover:text-[#bbb]">
                01
              </span>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground group-hover:text-[#bbb] mb-1">
                  Private Label
                </div>
                <h2 className="text-[26px] md:text-[30px] font-medium leading-tight mb-1 font-['Cormorant_Garamond']">
                  Pre-Rolled Cones
                </h2>
                <p className="text-[13px] text-muted-foreground group-hover:text-[#bbb] leading-snug">
                  Size &rarr; paper &rarr; colour &rarr; filter tip &rarr; tip print &rarr; packaging &rarr; route to market.
                </p>
              </div>
              <b className="font-mono text-[10px] uppercase font-medium tracking-wider whitespace-nowrap">
                Build Cone Brief &rarr;
              </b>
            </button>

            {/* Paper Builder Card */}
            <button
              onClick={() => openBuilder("paper")}
              type="button"
              className="border border-border bg-white text-left p-6 md:p-8 grid grid-cols-[40px_1fr_auto] gap-4 items-center cursor-pointer transition-all duration-200 hover:bg-[#111] hover:text-white hover:border-[#111] group shadow-xs"
            >
              <span className="font-mono text-[10px] text-muted-foreground group-hover:text-[#bbb]">
                02
              </span>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground group-hover:text-[#bbb] mb-1">
                  Private Label
                </div>
                <h2 className="text-[26px] md:text-[30px] font-medium leading-tight mb-1 font-['Cormorant_Garamond']">
                  Rolling Papers
                </h2>
                <p className="text-[13px] text-muted-foreground group-hover:text-[#bbb] leading-snug">
                  Size &rarr; paper &rarr; colour &rarr; booklet &rarr; tips &rarr; artwork &rarr; retail packaging.
                </p>
              </div>
              <b className="font-mono text-[10px] uppercase font-medium tracking-wider whitespace-nowrap">
                Build Paper Brief &rarr;
              </b>
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 pt-6 text-[13px] text-muted-foreground text-center">
            <span>Already have a complete specification?</span>
            <a
              href="#oem-enquiry"
              className="text-foreground font-medium pb-0.5 border-b border-foreground hover:text-muted-foreground transition-colors"
            >
              Skip the builder and send JOJO your brief &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CONE BUILDER SHELL */}
      <section
        id="cone-builder"
        className={`py-16 md:py-24 bg-[#fafafa] border-b border-border ${
          activeBuilder === "cone" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-4 before:h-px before:bg-foreground">
                OEM Builder · Pre-Rolled Cones
              </div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-tight font-['Cormorant_Garamond']">
                Build Your Private Label Cone Brief.
              </h2>
            </div>
            <button
              onClick={() => openBuilder("paper")}
              type="button"
              className="border-b border-foreground font-mono text-[10px] uppercase pb-0.5 text-left self-start sm:self-auto hover:text-muted-foreground transition-colors cursor-pointer"
            >
              Switch to Rolling Papers &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-start">
            {/* Main Steps Column */}
            <div className="min-w-0">
              {/* Stepper progress bar */}
              <div className="grid grid-cols-7 border border-border bg-white mb-4 overflow-x-auto shadow-xs">
                {coneSteps.map((step, idx) => {
                  const isActive = idx === coneCurrentStep;
                  const isComplete = idx < coneCurrentStep;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setConeCurrentStep(idx)}
                      type="button"
                      className={`p-3 text-center font-mono text-[9px] uppercase transition-colors border-r last:border-r-0 border-border cursor-pointer min-w-[70px] ${
                        isActive
                          ? "bg-[#111] text-white"
                          : isComplete
                          ? "bg-[#efefed] text-foreground font-medium"
                          : "bg-white text-muted-foreground hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className="block text-[8px] opacity-70 mb-0.5">
                        {step.stepNumber}
                      </span>
                      {step.field.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Panel */}
              {coneSteps.map((step, idx) => {
                if (idx !== coneCurrentStep) return null;
                return (
                  <div
                    key={step.id}
                    className="border border-border bg-white p-6 md:p-8 shadow-xs"
                  >
                    <div className="grid grid-cols-[34px_1fr] gap-3 mb-6">
                      <span className="font-mono text-[10px] text-muted-foreground pt-1.5">
                        {step.stepNumber}
                      </span>
                      <div>
                        <h3 className="text-[26px] md:text-[30px] font-medium leading-tight mb-1.5 font-['Cormorant_Garamond']">
                          {step.title}
                        </h3>
                        <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`grid gap-2.5 ${step.colsClass}`}>
                      {step.options.map((opt) => {
                        const isSelected = coneFields[step.field] === opt.value;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleSelectOption("cone", step.field, opt.value)}
                            type="button"
                            className={`border p-4 text-left cursor-pointer transition-all relative min-h-[82px] flex flex-col justify-center ${
                              opt.swatchClass ? "pt-9" : ""
                            } ${
                              isSelected
                                ? "border-foreground bg-[#fafafa] shadow-[inset_0_0_0_1px_#111]"
                                : "border-border bg-white hover:border-foreground/50"
                            }`}
                          >
                            {opt.swatchClass && (
                              <span
                                className={`absolute left-3.5 top-3.5 w-4 h-4 rounded-full border border-[#cfcfcf] ${opt.swatchClass}`}
                              />
                            )}
                            <span className="block text-[17px] leading-tight font-medium font-['Cormorant_Garamond'] text-foreground">
                              {opt.title}
                            </span>
                            {opt.sub && (
                              <small className="block mt-1 font-mono text-[8.5px] text-muted-foreground uppercase leading-tight">
                                {opt.sub}
                              </small>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {step.visualImg && (
                      <div className="mt-6 border border-border p-2 bg-[#fafafa]">
                        <img
                          alt=""
                          src={step.visualImg}
                          className="w-full max-h-[360px] object-contain block bg-white"
                        />
                      </div>
                    )}

                    {step.hasQuantityInput && (
                      <div className="mt-6 pt-5 border-t border-border">
                        <label className="block font-mono text-[9.5px] uppercase tracking-wider text-foreground mb-2">
                          Expected quantity{" "}
                          <span className="text-muted-foreground normal-case font-sans">
                            (if known)
                          </span>
                        </label>
                        <input
                          type="text"
                          value={coneFields["Expected Quantity"] || ""}
                          onChange={(e) =>
                            handleInputChange("cone", "Expected Quantity", e.target.value)
                          }
                          placeholder="e.g. estimated units / packs"
                          className="w-full border border-border bg-white p-3 font-sans text-[13.5px] outline-none focus:border-foreground"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-7 pt-5 border-t border-border">
                      <button
                        onClick={() => setConeCurrentStep((prev) => Math.max(0, prev - 1))}
                        disabled={coneCurrentStep === 0}
                        type="button"
                        className="border border-border bg-white px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary cursor-pointer"
                      >
                        &larr; Previous
                      </button>

                      {coneCurrentStep < coneSteps.length - 1 ? (
                        <button
                          onClick={() => setConeCurrentStep((prev) => Math.min(coneSteps.length - 1, prev + 1))}
                          type="button"
                          className="border border-foreground bg-foreground text-white px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-wider hover:bg-transparent hover:text-foreground cursor-pointer transition-all"
                        >
                          Next Step &rarr;
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            document
                              .getElementById("cone-summary-card")
                              ?.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}
                          type="button"
                          className="border border-foreground bg-foreground text-white px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-wider hover:bg-white hover:text-foreground cursor-pointer transition-all"
                        >
                          Review Cone Brief &rarr;
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sticky Sidebar Brief Panel */}
            <aside id="cone-summary-card" className="w-full">
              <div className="sticky top-[130px] border border-border bg-[#111] text-white p-6 shadow-sm">
                <div className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#aaa] mb-1">
                  Your Product Brief
                </div>
                <h3 className="text-[24px] text-white font-medium mb-3.5 font-['Cormorant_Garamond']">
                  Private Label Cone
                </h3>
                <div className="h-[140px] bg-white p-1 mb-4 flex items-center justify-center">
                  <img
                    alt="Cone Brief Preview"
                    src="/images/products/oem/builder/oem_img_3.png"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="border-t border-[#343434] divide-y divide-[#343434]">
                  {Object.entries(coneFields).filter(([, v]) => v && v.trim()).length === 0 ? (
                    <div className="text-[12px] text-[#888] py-4 leading-relaxed">
                      Select options to build your manufacturing brief.
                    </div>
                  ) : (
                    Object.entries(coneFields)
                      .filter(([, v]) => v && v.trim())
                      .map(([k, v]) => (
                        <div
                          key={k}
                          className="grid grid-cols-[100px_1fr] gap-2 py-2 text-[11.5px]"
                        >
                          <b className="font-mono text-[8px] uppercase tracking-wider text-[#8f8f8f] font-normal">
                            {k}
                          </b>
                          <span className="text-[#f0f0f0]">{v}</span>
                        </div>
                      ))
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                  <button
                    onClick={() => copyToClipboard("cone")}
                    type="button"
                    className="border border-[#555] bg-[#111] text-white py-2.5 px-2 font-mono text-[8.5px] uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all cursor-pointer text-center"
                  >
                    {coneCopied ? "Copied!" : "Copy Brief"}
                  </button>
                  <a
                    href={`mailto:info@jojopapers.com?subject=${encodeURIComponent(
                      "JOJO OEM Private Label Brief"
                    )}&body=${encodeURIComponent(generateBriefText("cone"))}`}
                    className="border border-[#555] bg-[#111] text-white py-2.5 px-2 font-mono text-[8.5px] uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all text-center flex items-center justify-center"
                  >
                    Email JOJO
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PAPER BUILDER SHELL */}
      <section
        id="paper-builder"
        className={`py-16 md:py-24 bg-[#fafafa] border-b border-border ${
          activeBuilder === "paper" ? "block" : "hidden"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-4 before:h-px before:bg-foreground">
                OEM Builder · Rolling Papers
              </div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-tight font-['Cormorant_Garamond']">
                Build Your Private Label Rolling Paper Brief.
              </h2>
            </div>
            <button
              onClick={() => openBuilder("cone")}
              type="button"
              className="border-b border-foreground font-mono text-[10px] uppercase pb-0.5 text-left self-start sm:self-auto hover:text-muted-foreground transition-colors cursor-pointer"
            >
              Switch to Pre-Rolled Cones &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-start">
            {/* Main Steps Column */}
            <div className="min-w-0">
              {/* Stepper progress bar */}
              <div className="grid grid-cols-7 border border-border bg-white mb-4 overflow-x-auto shadow-xs">
                {paperSteps.map((step, idx) => {
                  const isActive = idx === paperCurrentStep;
                  const isComplete = idx < paperCurrentStep;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setPaperCurrentStep(idx)}
                      type="button"
                      className={`p-3 text-center font-mono text-[9px] uppercase transition-colors border-r last:border-r-0 border-border cursor-pointer min-w-[70px] ${
                        isActive
                          ? "bg-[#111] text-white"
                          : isComplete
                          ? "bg-[#efefed] text-foreground font-medium"
                          : "bg-white text-muted-foreground hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className="block text-[8px] opacity-70 mb-0.5">
                        {step.stepNumber}
                      </span>
                      {step.field.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Panel */}
              {paperSteps.map((step, idx) => {
                if (idx !== paperCurrentStep) return null;
                return (
                  <div
                    key={step.id}
                    className="border border-border bg-white p-6 md:p-8 shadow-xs"
                  >
                    <div className="grid grid-cols-[34px_1fr] gap-3 mb-6">
                      <span className="font-mono text-[10px] text-muted-foreground pt-1.5">
                        {step.stepNumber}
                      </span>
                      <div>
                        <h3 className="text-[26px] md:text-[30px] font-medium leading-tight mb-1.5 font-['Cormorant_Garamond']">
                          {step.title}
                        </h3>
                        <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`grid gap-2.5 ${step.colsClass}`}>
                      {step.options.map((opt) => {
                        const isSelected = paperFields[step.field] === opt.value;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleSelectOption("paper", step.field, opt.value)}
                            type="button"
                            className={`border p-4 text-left cursor-pointer transition-all relative min-h-[82px] flex flex-col justify-center ${
                              opt.swatchClass ? "pt-9" : ""
                            } ${
                              isSelected
                                ? "border-foreground bg-[#fafafa] shadow-[inset_0_0_0_1px_#111]"
                                : "border-border bg-white hover:border-foreground/50"
                            }`}
                          >
                            {opt.swatchClass && (
                              <span
                                className={`absolute left-3.5 top-3.5 w-4 h-4 rounded-full border border-[#cfcfcf] ${opt.swatchClass}`}
                              />
                            )}
                            <span className="block text-[17px] leading-tight font-medium font-['Cormorant_Garamond'] text-foreground">
                              {opt.title}
                            </span>
                            {opt.sub && (
                              <small className="block mt-1 font-mono text-[8.5px] text-muted-foreground uppercase leading-tight">
                                {opt.sub}
                              </small>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {step.visualImg && (
                      <div className="mt-6 border border-border p-2 bg-[#fafafa]">
                        <img
                          alt=""
                          src={step.visualImg}
                          className="w-full max-h-[360px] object-contain block bg-white"
                        />
                      </div>
                    )}

                    {step.hasQuantityInput && (
                      <div className="mt-6 pt-5 border-t border-border">
                        <label className="block font-mono text-[9.5px] uppercase tracking-wider text-foreground mb-2">
                          Expected quantity{" "}
                          <span className="text-muted-foreground normal-case font-sans">
                            (if known)
                          </span>
                        </label>
                        <input
                          type="text"
                          value={paperFields["Expected Quantity"] || ""}
                          onChange={(e) =>
                            handleInputChange("paper", "Expected Quantity", e.target.value)
                          }
                          placeholder="e.g. estimated booklets / packs"
                          className="w-full border border-border bg-white p-3 font-sans text-[13.5px] outline-none focus:border-foreground"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-7 pt-5 border-t border-border">
                      <button
                        onClick={() => setPaperCurrentStep((prev) => Math.max(0, prev - 1))}
                        disabled={paperCurrentStep === 0}
                        type="button"
                        className="border border-border bg-white px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary cursor-pointer"
                      >
                        &larr; Previous
                      </button>

                      {paperCurrentStep < paperSteps.length - 1 ? (
                        <button
                          onClick={() => setPaperCurrentStep((prev) => Math.min(paperSteps.length - 1, prev + 1))}
                          type="button"
                          className="border border-foreground bg-foreground text-white px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-wider hover:bg-transparent hover:text-foreground cursor-pointer transition-all"
                        >
                          Next Step &rarr;
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            document
                              .getElementById("paper-summary-card")
                              ?.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}
                          type="button"
                          className="border border-foreground bg-foreground text-white px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-wider hover:bg-white hover:text-foreground cursor-pointer transition-all"
                        >
                          Review Rolling Paper Brief &rarr;
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sticky Sidebar Brief Panel */}
            <aside id="paper-summary-card" className="w-full">
              <div className="sticky top-[130px] border border-border bg-[#111] text-white p-6 shadow-sm">
                <div className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#aaa] mb-1">
                  Your Product Brief
                </div>
                <h3 className="text-[24px] text-white font-medium mb-3.5 font-['Cormorant_Garamond']">
                  Private Label Rolling Papers
                </h3>
                <div className="h-[140px] bg-white p-1 mb-4 flex items-center justify-center">
                  <img
                    alt="Paper Brief Preview"
                    src="/images/products/oem/builder/oem_img_6.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="border-t border-[#343434] divide-y divide-[#343434]">
                  {Object.entries(paperFields).filter(([, v]) => v && v.trim()).length === 0 ? (
                    <div className="text-[12px] text-[#888] py-4 leading-relaxed">
                      Select options to build your manufacturing brief.
                    </div>
                  ) : (
                    Object.entries(paperFields)
                      .filter(([, v]) => v && v.trim())
                      .map(([k, v]) => (
                        <div
                          key={k}
                          className="grid grid-cols-[100px_1fr] gap-2 py-2 text-[11.5px]"
                        >
                          <b className="font-mono text-[8px] uppercase tracking-wider text-[#8f8f8f] font-normal">
                            {k}
                          </b>
                          <span className="text-[#f0f0f0]">{v}</span>
                        </div>
                      ))
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                  <button
                    onClick={() => copyToClipboard("paper")}
                    type="button"
                    className="border border-[#555] bg-[#111] text-white py-2.5 px-2 font-mono text-[8.5px] uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all cursor-pointer text-center"
                  >
                    {paperCopied ? "Copied!" : "Copy Brief"}
                  </button>
                  <a
                    href={`mailto:info@jojopapers.com?subject=${encodeURIComponent(
                      "JOJO OEM Private Label Brief"
                    )}&body=${encodeURIComponent(generateBriefText("paper"))}`}
                    className="border border-[#555] bg-[#111] text-white py-2.5 px-2 font-mono text-[8.5px] uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all text-center flex items-center justify-center"
                  >
                    Email JOJO
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DIRECT SPECIFICATION ENQUIRY SECTION */}
      <section className="py-16 md:py-24 bg-[#111] text-white" id="oem-enquiry">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#aaa] before:content-[''] before:w-5 before:h-px before:bg-[#777]">
                Already Have a Complete Brief?
              </div>
              <h2 className="text-white text-[clamp(32px,4.2vw,50px)] font-medium leading-[1.05] mb-4 font-['Cormorant_Garamond']">
                Skip the builder and send the specification directly.
              </h2>
              <p className="text-[#c5c5c5] text-[14.5px] leading-relaxed max-w-[70ch]">
                Share the product, target market, size, paper direction, artwork or reference, packaging requirement and expected quantity if known.
              </p>
            </div>

            <div>
              <a
                href="mailto:info@jojopapers.com?subject=JOJO%20OEM%20Private%20Label%20Enquiry"
                className="bg-white text-[#111] px-7 py-5 flex items-center justify-between gap-6 font-mono text-[11px] tracking-[0.05em] uppercase transition-all hover:bg-[#222] hover:text-white border border-white whitespace-nowrap"
              >
                <span>Send Your OEM Brief</span>
                <b className="text-[19px] font-normal">&rarr;</b>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SITEMAP & CAPABILITIES CTA */}
      <section className="py-16 md:py-24 bg-[#0d0d0d] text-white text-center border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-2.5 mb-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 before:content-[''] before:w-5 before:h-px before:bg-white/60">
            Rolling Paper &amp; Pre-Rolled Cone Manufacturing
          </div>
          <h2 className="text-white text-[clamp(28px,4vw,44px)] font-medium max-w-[22ch] mx-auto mb-4 leading-tight font-['Cormorant_Garamond']">
            From product specification to a shelf-ready range.
          </h2>
          <p className="text-white/65 text-[15px] max-w-[48ch] mx-auto mb-9 leading-relaxed">
            Start with the paper base, colour and size. Then build the booklet, retail format and display system around the market you want to sell into.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/20 border border-white/20 max-w-[800px] mx-auto">
            <Link
              to="/rolling-papers"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Rolling Papers
            </Link>
            <Link
              to="/pre-rolled-cones"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Pre-Rolled Cones
            </Link>
            <Link
              to="/retail-packaging"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Retail &amp; Packaging
            </Link>
            <Link
              to="/contact"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Contact JOJO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
