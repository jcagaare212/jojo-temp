import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const stagger: Variants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.12 } }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="pt-[73px] md:pt-[115px] bg-white text-[#0a0a0a] font-sans antialiased min-h-screen overflow-x-hidden selection:bg-[#a97922]/20">
      <SEO
        title="About JOJO Papers | Made in India Since 2014"
        description="Discover JOJO Papers — made in India since 2014, with pre-rolled cones, rolling papers, and filter tips manufactured for global B2B buyers."
        canonical="https://jojopapers.com/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About JOJO Papers",
          "description": "Discover JOJO Papers — made in India since 2014, with pre-rolled cones, rolling papers, and filter tips manufactured for global B2B buyers.",
          "mainEntity": {
            "@type": "Organization",
            "name": "JOJO Papers",
            "foundingDate": "2014",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Delhi",
              "addressCountry": "IN"
            }
          }
        }}
      />

      <Breadcrumb items={[{ label: "About JOJO" }]} />

      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-10 md:py-16 border-b border-border bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 items-center">
            
            {/* Left Main Title */}
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#a97922] mb-4">
                <span className="w-4 h-px bg-[#a97922]" />
                About JOJO · Made in India since 2014
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[clamp(46px,6.8vw,100px)] font-['Cormorant_Garamond'] font-normal leading-[0.9] tracking-[-0.03em] text-[#0a0a0a]"
              >
                We’ve been<br />
                <span className="italic">rolling since</span><br />
                <span className="text-[#a97922]">2014.</span>
              </motion.h1>
            </motion.div>

            {/* Right Copy & Meta Stats */}
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-[560px]"
            >
              <motion.p variants={fadeInUp} className="text-[17px] sm:text-[19px] text-[#4e4e4e] leading-relaxed font-light mb-6">
                JOJO began in India with a simple focus: make rolling products with greater consistency, better presentation and attention to detail. More than a decade later, that idea continues to shape every product we build.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 border-t border-border pt-5 divide-x divide-border bg-white">
                <div className="pr-4">
                  <span className="block font-['Cormorant_Garamond'] text-[30px] sm:text-[36px] font-medium leading-none mb-1 text-[#111]">
                    2014
                  </span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Our beginning
                  </span>
                </div>
                <div className="px-4">
                  <span className="block font-['Cormorant_Garamond'] text-[30px] sm:text-[36px] font-medium leading-none mb-1 text-[#111]">
                    10M+
                  </span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Cones produced
                  </span>
                </div>
                <div className="pl-4">
                  <span className="block font-['Cormorant_Garamond'] text-[30px] sm:text-[36px] font-medium leading-none mb-1 text-[#111]">
                    India
                  </span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#777]">
                    Made here
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 01: OUR STORY & TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 border-b border-border bg-white" id="story">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start mb-10">
            <div>
              <div className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#777] mb-2">
                01 · Our Story
              </div>
            </div>
            <div>
              <h2 className="text-[clamp(36px,4.5vw,72px)] font-['Cormorant_Garamond'] font-normal leading-[0.96] tracking-tight mb-4 text-[#111]">
                More than a decade<br />in every roll.
              </h2>
              <p className="text-[16.5px] sm:text-[18px] text-[#4f4f4f] leading-relaxed font-light max-w-[720px]">
                JOJO Papers has spent more than a decade developing pre-rolled cones, rolling papers and filter tips. What began as a focus on the product itself has grown into a broader understanding of how construction, consistency and presentation work together.
              </p>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="border-t border-border divide-y divide-border">
            {[
              {
                year: "2014",
                title: "Started in India.",
                desc: "JOJO begins with rolling products and a belief that even a simple product deserves careful construction and repeatable quality."
              },
              {
                year: "Then",
                title: "Built the craft.",
                desc: "Hands-on production, trained artisans and a sharper focus on dimensions, paper, tips and finishing turn craft into a more controlled system."
              },
              {
                year: "Next",
                title: "Expanded the range.",
                desc: "Pre-rolled cones grow into a connected product family including rolling papers, filter tips and branded presentation."
              },
              {
                year: "Today",
                title: "Still building.",
                desc: "JOJO continues to work with wholesale, retail and private-label buyers while keeping the same focus on detail that shaped the brand at the beginning."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="grid grid-cols-1 sm:grid-cols-[130px_1fr] lg:grid-cols-[150px_1fr_1.1fr] gap-4 lg:gap-10 py-6 items-start"
              >
                <div className="font-['Cormorant_Garamond'] text-[30px] sm:text-[36px] font-medium text-[#111] leading-none">
                  {item.year}
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-['Cormorant_Garamond'] font-medium text-[#111] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#666] leading-relaxed max-w-[540px] font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02: MADE IN INDIA (DARK LUXURY) */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-[#111] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-end mb-8">
            <div>
              <div className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#d2b476] mb-2">
                02 · Made in India
              </div>
              <h2 className="text-[clamp(38px,4.8vw,76px)] font-['Cormorant_Garamond'] font-normal leading-[0.94] text-white">
                Born here.<br />Built for everywhere.
              </h2>
            </div>
            <p className="text-[16.5px] sm:text-[18px] text-[#bcbcbc] leading-relaxed font-light max-w-[620px]">
              JOJO is rooted in India, where our products are developed and made. The work is local; the outlook is international. We build for buyers who need products that can move confidently from an Indian production floor into markets around the world.
            </p>
          </div>

          {/* Clean, Non-Colliding Responsive Route Display */}
          <div className="border-y border-[#333] py-8 md:py-10 my-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 relative">
            
            {/* INDIA block */}
            <div className="text-center md:text-left shrink-0">
              <span className="font-['Cormorant_Garamond'] text-[clamp(36px,4.8vw,68px)] tracking-tight text-white font-normal block leading-none">
                INDIA
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-widest text-[#d2b476] mt-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d2b476]" />
                Made here
              </span>
            </div>

            {/* Connecting line */}
            <div className="flex-1 w-full max-w-[450px] relative px-4 flex items-center my-2 md:my-0">
              <div className="w-full h-[1px] bg-[#444] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d2b476] via-[#f5dfaa] to-[#d2b476] shadow-[0_0_12px_rgba(210,180,118,0.5)]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#d2b476]/30" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#d2b476]/30" />
              </div>
            </div>

            {/* WORLD block */}
            <div className="text-center md:text-right shrink-0">
              <span className="font-['Cormorant_Garamond'] text-[clamp(36px,4.8vw,68px)] tracking-tight text-white font-normal block leading-none">
                WORLD
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-widest text-[#d2b476] mt-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d2b476]" />
                Built for global B2B
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: WHAT JOJO STANDS FOR */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 border-b border-border bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-6 lg:gap-14 items-start mb-8">
            <div className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#777]">
              03 · What JOJO stands for
            </div>
            <p className="text-[16.5px] sm:text-[18px] text-[#5d5d5d] leading-relaxed font-light max-w-[700px]">
              We keep the values simple. They are not slogans; they are the ideas that should be visible in the product, the way we develop it and the way we work.
            </p>
          </div>

          <div className="border-t border-border divide-y divide-border">
            {[
              {
                no: "01",
                title: "Precision",
                desc: "Consistency in construction, dimensions, finishing and repeatability across millions of units."
              },
              {
                no: "02",
                title: "Craft",
                desc: "Skilled hands remain an essential part of how JOJO pre-rolled cones are shaped and inspected."
              },
              {
                no: "03",
                title: "Curiosity",
                desc: "Keep developing products, formats and presentation instead of standing still."
              },
              {
                no: "04",
                title: "Partnership",
                desc: "Build relationships around clarity, direct communication and long-term product development."
              }
            ].map((val, idx) => (
              <motion.div
                key={val.no}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[100px_1fr_1fr] items-center gap-4 lg:gap-10 py-6 px-4 sm:px-6 transition-colors duration-300 hover:bg-[#111] hover:text-white"
              >
                <div className="font-mono text-[12px] uppercase tracking-widest text-[#999] group-hover:text-[#aaa] font-medium">
                  {val.no}
                </div>
                <h3 className="text-[clamp(32px,4vw,58px)] font-['Cormorant_Garamond'] font-medium leading-none text-[#111] group-hover:text-white transition-colors">
                  {val.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#666] group-hover:text-[#ccc] leading-relaxed font-light transition-colors max-w-[480px]">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04: JOJO TODAY & PRODUCT SUITE */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-[#fafaf8] border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-end mb-8">
            <div>
              <div className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#a97922] mb-2">
                04 · JOJO today
              </div>
              <h2 className="text-[clamp(36px,4.5vw,72px)] font-['Cormorant_Garamond'] font-normal leading-[0.96] text-[#111]">
                Still rolling.<br />Still building.
              </h2>
            </div>
            <p className="text-[16.5px] sm:text-[18px] text-[#5c5c5c] leading-relaxed font-light max-w-[600px]">
              JOJO today is a Made-in-India rolling-paper business with more than a decade of manufacturing experience and a product range built around pre-rolled cones, rolling papers and filter tips.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-border divide-x divide-border bg-white mb-10">
            {[
              { stat: "2014", label: "Manufacturing since" },
              { stat: "10M+", label: "Cones produced & counting" },
              { stat: "3", label: "Core product families" },
              { stat: "India", label: "Made in" }
            ].map((s, idx) => (
              <div key={idx} className="p-6 sm:p-8 text-left">
                <span className="block font-['Cormorant_Garamond'] text-[clamp(32px,4vw,54px)] font-normal text-[#111] leading-none mb-1">
                  {s.stat}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#777] font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Product Suite Feature Note - Fully visible image without cropping */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] text-[#777] mb-2">
                A small look at what we make
              </div>
              <h3 className="text-[clamp(28px,3.5vw,50px)] font-['Cormorant_Garamond'] font-normal leading-[1] text-[#111] mb-4">
                The product is part of the story.
              </h3>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#5f5f5f] leading-relaxed font-light mb-6 max-w-[560px]">
                Pre-rolled cones, rolling papers and filter tips are the three core families behind JOJO. Detailed specifications, bulk formats and private-label development live on their own pages.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/pre-rolled-cones"
                  className="px-5 py-2.5 rounded-full border border-border bg-white text-[11.5px] font-mono uppercase tracking-wider font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  Pre-Rolled Cones &rarr;
                </Link>
                <Link
                  to="/rolling-papers"
                  className="px-5 py-2.5 rounded-full border border-border bg-white text-[11.5px] font-mono uppercase tracking-wider font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  Rolling Papers &rarr;
                </Link>
                <Link
                  to="/filters"
                  className="px-5 py-2.5 rounded-full border border-border bg-white text-[11.5px] font-mono uppercase tracking-wider font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  Filter Tips &rarr;
                </Link>
              </div>
            </div>

            {/* Fully visible product collection image */}
            <div className="border border-border bg-white p-4 sm:p-6 flex items-center justify-center shadow-xs">
              <img
                src="/images/about/product_collection.png"
                alt="JOJO rolling papers and pre-rolled cone product collection"
                className="w-full max-h-[420px] object-contain hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL DIRECT CTA */}
      {/* ========================================================================= */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden border-t border-border">
        {/* Subtle, Centered Background Watermark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Cormorant_Garamond'] font-bold text-[clamp(120px,18vw,280px)] text-black/[0.025] select-none pointer-events-none tracking-tight leading-none">
          JOJO
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-12 items-center">
            <div>
              <div className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#a97922] mb-2">
                JOJO Papers · Since 2014
              </div>
              <h2 className="text-[clamp(36px,4.5vw,68px)] font-['Cormorant_Garamond'] font-normal leading-[0.94] text-[#111]">
                Still rolling.<br />Still building.
              </h2>
            </div>

            <div>
              <p className="text-[16.5px] sm:text-[18px] text-[#5b5b5b] leading-relaxed font-light mb-6 max-w-[520px]">
                If you are building a product range, expanding an existing line or simply want to understand what JOJO can make, start with a conversation.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@jojopapers.com?subject=JOJO%20Project%20Enquiry"
                  className="px-7 py-3.5 rounded-full bg-[#111] text-white font-mono text-[11.5px] font-bold uppercase tracking-[0.1em] hover:bg-black transition-transform hover:-translate-y-0.5 shadow-sm"
                >
                  Work With JOJO &rarr;
                </a>
                <Link
                  to="/private-label"
                  className="px-7 py-3.5 rounded-full bg-white text-[#111] border border-border font-mono text-[11.5px] font-bold uppercase tracking-[0.1em] hover:bg-[#fafafa] transition-transform hover:-translate-y-0.5"
                >
                  OEM Builder &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
