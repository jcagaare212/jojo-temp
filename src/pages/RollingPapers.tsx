import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

interface ColourInfo {
  key: string;
  name: string;
  sub: string;
  title: string;
  desc: string;
  img: string;
}

const colourData: Record<string, ColourInfo> = {
  unbleached: {
    key: "unbleached",
    name: "Unbleached",
    sub: "Natural Brown",
    title: "Unbleached",
    desc: "Natural brown paper direction for buyers looking for a classic unbleached presentation.",
    img: "/images/products/rolling-papers/colours/unbleached.png",
  },
  bleached: {
    key: "bleached",
    name: "Bleached",
    sub: "White",
    title: "Bleached",
    desc: "Clean white paper direction for classic rolling-paper ranges and neutral packaging concepts.",
    img: "/images/products/rolling-papers/colours/bleached.png",
  },
  pink: {
    key: "pink",
    name: "Pink",
    sub: "Colour Paper",
    title: "Pink",
    desc: "A soft colour-paper direction for brands building a more expressive or collection-led range.",
    img: "/images/products/rolling-papers/colours/pink.png",
  },
  blue: {
    key: "blue",
    name: "Blue",
    sub: "Colour Paper",
    title: "Blue",
    desc: "A light blue paper direction for colour-led collections and differentiated retail concepts.",
    img: "/images/products/rolling-papers/colours/blue.png",
  },
  green: {
    key: "green",
    name: "Green",
    sub: "Colour Paper",
    title: "Green",
    desc: "A light green paper direction that can be developed as part of a broader colour range.",
    img: "/images/products/rolling-papers/colours/green.png",
  },
  purple: {
    key: "purple",
    name: "Purple",
    sub: "Colour Paper",
    title: "Purple",
    desc: "A light purple paper direction for brands looking to extend beyond standard paper colours.",
    img: "/images/products/rolling-papers/colours/purple.png",
  },
  black: {
    key: "black",
    name: "Black",
    sub: "Colour Paper",
    title: "Black",
    desc: "A charcoal-black paper direction for a stronger visual identity and premium collection concepts.",
    img: "/images/products/rolling-papers/colours/black.png",
  },
};

const RollingPapers = () => {
  const [selectedKey, setSelectedKey] = useState<string>("unbleached");
  const activeColour = colourData[selectedKey] || colourData.unbleached;

  return (
    <div className="pt-[73px] md:pt-[115px] bg-background text-foreground">
      <Breadcrumb items={[{ label: "Rolling Papers" }]} />

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-border text-center bg-white" id="paper">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="inline-flex items-center gap-2.5 mb-4 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
            Rolling Papers · B2B Manufacturing
          </div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-medium leading-[1.03] tracking-tight mb-5 font-['Cormorant_Garamond']">
            Rolling Papers, Made for Your Market.
          </h1>
          <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed max-w-[58ch] mx-auto mb-8">
            JOJO manufactures rolling papers in four paper bases, seven colours and multiple standard or custom sizes. Choose the paper specification, then take it to market as a simple booklet, premium pack, display-ready range or custom retail format.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#paper-types"
              className="inline-flex items-center font-mono text-[12.5px] tracking-[0.07em] uppercase px-[26px] py-[15px] border border-foreground bg-foreground text-background transition-all hover:bg-transparent hover:text-foreground"
            >
              Explore Paper Options
            </a>
            <a
              href="#core-sizes"
              className="inline-flex items-center font-mono text-[12.5px] tracking-[0.07em] uppercase px-[26px] py-[15px] border border-foreground bg-transparent text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              View Core Sizes
            </a>
          </div>
        </div>
      </section>

      {/* DEFINITION SECTION */}
      <section className="py-16 md:py-20 bg-white" id="what-is-rolling-paper">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2.5 mb-3.5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
              What Is Rolling Paper?
            </div>
            <h2 className="text-[clamp(32px,4.2vw,48px)] font-medium leading-[1.05] mb-4 font-['Cormorant_Garamond']">
              Flat sheets. Rolled by the end user.
            </h2>
            <p className="text-[15.5px] text-muted-foreground leading-relaxed max-w-[69ch]">
              Rolling papers are thin, flat sheets supplied in booklets for hand rolling. Unlike a pre-rolled cone, the paper arrives unformed, giving the end user control over the final roll. For a brand, the sheet itself — its paper base, colour and size — is the starting point of the product.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — PAPER TYPES */}
      <section id="paper-types" className="py-16 md:py-22 border-t border-border bg-white">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-3.5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
              01 — Paper Types
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.08] mb-4 font-['Cormorant_Garamond']">
              Four paper bases. Built around the brief.
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              JOJO works with Wood Pulp, Rice, Hemp and Flax. Select the base that suits the product direction and target market, then carry it across the required size and packaging format.
            </p>
          </div>

          {/* Connected 4-box horizontal strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-y md:divide-y-0 md:divide-x divide-border bg-white mb-9 max-w-[960px] mx-auto shadow-sm">
            <div className="py-5 px-4 text-center font-mono text-[12px] tracking-[0.05em] uppercase text-foreground font-medium">
              Wood Pulp
            </div>
            <div className="py-5 px-4 text-center font-mono text-[12px] tracking-[0.05em] uppercase text-foreground font-medium">
              Rice
            </div>
            <div className="py-5 px-4 text-center font-mono text-[12px] tracking-[0.05em] uppercase text-foreground font-medium">
              Hemp
            </div>
            <div className="py-5 px-4 text-center font-mono text-[12px] tracking-[0.05em] uppercase text-foreground font-medium">
              Flax
            </div>
          </div>

          <p className="text-center text-[14.5px] text-muted-foreground max-w-[720px] mx-auto">
            Paper selection can be aligned with the final product brief, target market and retail presentation.
          </p>
        </div>
      </section>

      {/* 02 — PAPER COLOURS */}
      <section className="py-16 md:py-22 border-t border-b border-border bg-[#fafafa]" id="paper-colours">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-3.5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
              02 — Paper Colours
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.08] mb-4 font-['Cormorant_Garamond']">
              Seven colours. One coordinated paper range.
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Choose a classic Bleached or Unbleached paper, or build a more distinctive collection with Pink, Blue, Green, Purple or Black. The colour direction can then be carried consistently across the wider product range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] border border-border bg-white shadow-sm overflow-hidden">
            {/* Left Image Stage */}
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border flex items-center justify-center bg-white min-h-[380px] md:min-h-[460px]">
              <img
                alt={`JOJO ${activeColour.name} rolling paper`}
                src={activeColour.img}
                className="w-full max-h-[390px] object-contain transition-all duration-300"
              />
            </div>

            {/* Right Panel */}
            <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
              <div className="inline-flex items-center gap-2.5 mb-2.5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-4 before:h-px before:bg-foreground">
                Select a Paper Colour
              </div>
              <h3 className="text-[28px] md:text-[32px] font-medium leading-tight mb-2 font-['Cormorant_Garamond']">
                {activeColour.title}
              </h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-6">
                {activeColour.desc}
              </p>

              {/* 2-column color buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.values(colourData).map((c) => {
                  const isActive = selectedKey === c.key;
                  return (
                    <button
                      key={c.key}
                      onClick={() => setSelectedKey(c.key)}
                      className={`border p-3 text-left transition-all cursor-pointer ${
                        isActive
                          ? "border-foreground bg-[#fafafa] shadow-xs"
                          : "border-border bg-white hover:border-foreground/40"
                      }`}
                    >
                      <b className="block text-[13px] font-medium text-foreground">{c.name}</b>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        {c.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — CORE ROLLING PAPER SIZES */}
      <section id="core-sizes" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[820px] mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2.5 mb-3.5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
              03 — Core Rolling Paper Sizes
            </div>
            <h2 className="text-[clamp(34px,4.6vw,52px)] font-medium leading-[1.03] mb-4 font-['Cormorant_Garamond']">
              Two core formats buyers come back to.
            </h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed max-w-[70ch] mx-auto">
              Across more than a decade of manufacturing and international buyer conversations, JOJO has seen 1¼ and King Size Slim appear again and again in new rolling-paper briefs. We treat them as the most practical starting point for range planning, while keeping manufacturing flexible for other standard dimensions and custom rolling paper sizes built around the buyer’s market, booklet format or private-label requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-7">
            {/* Format 1: 1 1/4 */}
            <article className="grid grid-cols-1 md:grid-cols-[1.32fr_0.68fr] border border-border bg-white overflow-hidden shadow-sm min-h-[380px]">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border flex items-center justify-center bg-white">
                <img
                  alt="JOJO 1 1/4 rolling paper size 78 by 44 mm"
                  src="/images/products/rolling-papers/rp_img_1.jpg"
                  className="w-full h-full min-h-[260px] max-h-[360px] object-contain"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <div className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase mb-3">
                  Lead Format 01 · Compact Everyday
                </div>
                <h3 className="text-[clamp(28px,3.2vw,38px)] font-medium leading-[1.08] mb-3 font-['Cormorant_Garamond']">
                  1¼ — 78 × 44 mm
                </h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed">
                  A practical core size for brands building an everyday rolling-paper SKU. The shorter 78 mm length keeps the format compact while retaining the familiar 44 mm width used across many booklet ranges.
                </p>
              </div>
            </article>

            {/* Format 2: King Size Slim */}
            <article className="grid grid-cols-1 md:grid-cols-[0.68fr_1.32fr] border border-border bg-white overflow-hidden shadow-sm min-h-[380px]">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white order-2 md:order-1 border-t md:border-t-0 md:border-r border-border">
                <div className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase mb-3">
                  Lead Format 02 · Longer Slim
                </div>
                <h3 className="text-[clamp(28px,3.2vw,38px)] font-medium leading-[1.08] mb-3 font-['Cormorant_Garamond']">
                  King Size Slim — 108 × 44 mm
                </h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed">
                  A longer-format paper that keeps the same 44 mm width. It is frequently developed alongside 1¼ when a buyer wants a two-size range with a clear compact and longer-slim option.
                </p>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-center bg-white order-1 md:order-2">
                <img
                  alt="JOJO King Size Slim rolling paper size 108 by 44 mm"
                  src="/images/products/rolling-papers/rp_img_2.jpg"
                  className="w-full h-full min-h-[260px] max-h-[360px] object-contain"
                />
              </div>
            </article>
          </div>

          {/* Experience note */}
          <div className="border border-border bg-[#fafafa] p-6 md:p-7 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-start">
            <div className="text-[20px] md:text-[22px] leading-snug font-medium text-foreground font-['Cormorant_Garamond']">
              Start with the core. Expand around the market.
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed m-0">
              1¼ and King Size Slim are lead references, not a fixed catalogue. Other standard dimensions or buyer-specific sizes can be developed through JOJO’s OEM and private-label rolling paper program.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — ADDITIONAL & CUSTOM SIZES */}
      <section className="py-16 md:py-22 border-t border-b border-border bg-[#fafafa]" id="other-sizes">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3.5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
                04 — Additional &amp; Custom Sizes
              </div>
              <h2 className="text-[clamp(30px,3.4vw,42px)] font-medium leading-[1.08] mb-4 font-['Cormorant_Garamond']">
                Need a different size? Build it around your market.
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                The two lead sizes above are our starting point, not our limit. JOJO can manufacture additional standard formats and review custom dimensions for OEM and private-label programs. Share the length and width you need, or begin with one of the formats shown here.
              </p>
              <Link
                to="/private-label"
                className="inline-flex items-center font-mono text-[12.5px] tracking-[0.07em] uppercase px-[26px] py-[15px] border border-foreground bg-foreground text-background transition-all hover:bg-transparent hover:text-foreground"
              >
                Discuss a Different Size
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-white shadow-sm">
              <div className="grid grid-cols-1 divide-y divide-border">
                <div className="p-6 bg-white flex flex-col justify-center min-h-[92px]">
                  <b className="block text-[21px] font-medium font-['Cormorant_Garamond'] mb-1">70 × 36 mm</b>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Regular / Single Wide</span>
                </div>
                <div className="p-6 bg-white flex flex-col justify-center min-h-[92px]">
                  <b className="block text-[21px] font-medium font-['Cormorant_Garamond'] mb-1">98 × 44 mm</b>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">King Size</span>
                </div>
              </div>
              <div className="grid grid-cols-1 divide-y divide-border">
                <div className="p-6 bg-white flex flex-col justify-center min-h-[92px]">
                  <b className="block text-[21px] font-medium font-['Cormorant_Garamond'] mb-1">78 × 60 mm</b>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">1½ Format</span>
                </div>
                <div className="p-6 bg-white flex flex-col justify-center min-h-[92px]">
                  <b className="block text-[21px] font-medium font-['Cormorant_Garamond'] mb-1">98 × 53 mm</b>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">King Size Wide</span>
                </div>
              </div>
              <div className="sm:col-span-2 p-6 bg-white border-t border-border flex flex-col justify-center">
                <b className="block text-[21px] font-medium font-['Cormorant_Garamond'] mb-1">Custom Length × Width</b>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Developed against your OEM / private-label brief</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — RETAIL & PACKAGING */}
      <section className="py-16 md:py-24 bg-[#fafafa]" id="retail">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 md:gap-16 items-end mb-10">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3.5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-foreground">
                05 — Retail &amp; Packaging
              </div>
              <h2 className="text-[clamp(34px,4.5vw,54px)] font-medium leading-[1.02] font-['Cormorant_Garamond']">
                Build a pack people can spot, stock and reorder.
              </h2>
            </div>
            <div>
              <p className="text-[15.5px] text-muted-foreground leading-relaxed mb-3">
                Once the paper is defined, the commercial job changes. On shelf, the pack has to make the SKU clear and give the retailer a practical way to present the range. JOJO develops custom rolling paper packaging for wholesale buyers, distributors and private-label brands — from booklets and papers + tips formats to counter displays and coordinated retail systems.
              </p>
              <p className="text-[15.5px] text-muted-foreground leading-relaxed">
                Here are three examples. The dedicated Retail &amp; Packaging page goes much deeper into formats, pack counts, displays and outer packaging.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-7">
            {/* Row 1 */}
            <article className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] border border-border bg-white shadow-sm min-h-[350px]">
              <div className="p-6 md:p-8 bg-[#f8f8f8] border-b lg:border-b-0 lg:border-r border-border flex items-center justify-center">
                <img
                  alt="JOJO custom rolling paper booklet collection"
                  src="/images/products/rolling-papers/rp_img_3.jpg"
                  className="w-full h-full max-h-[390px] object-contain bg-white"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <div className="font-mono text-[9.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2.5">
                  Custom Rolling Paper Booklets
                </div>
                <h3 className="text-[clamp(26px,3vw,36px)] font-medium leading-[1.08] mb-3 font-['Cormorant_Garamond']">
                  Turn several SKUs into one coordinated collection.
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  One booklet structure can carry different paper colours, artwork directions or stories while the range still reads as one retail family.
                </p>
              </div>
            </article>

            {/* Row 2 (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] border border-border bg-white shadow-sm min-h-[350px]">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-border">
                <div className="font-mono text-[9.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2.5">
                  Counter Display Packaging
                </div>
                <h3 className="text-[clamp(26px,3vw,36px)] font-medium leading-[1.08] mb-3 font-['Cormorant_Garamond']">
                  Design for the shelf, not just the booklet.
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  The booklet, display box and outer packing can be planned together so the range arrives ready to present, replenish and organise at retail.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-[#f8f8f8] flex items-center justify-center order-1 lg:order-2">
                <img
                  alt="JOJO rolling paper counter display packaging"
                  src="/images/products/rolling-papers/rp_img_4.jpg"
                  className="w-full h-full max-h-[390px] object-contain bg-white"
                />
              </div>
            </article>

            {/* Row 3 */}
            <article className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] border border-border bg-white shadow-sm min-h-[350px]">
              <div className="p-6 md:p-8 bg-[#f8f8f8] border-b lg:border-b-0 lg:border-r border-border flex items-center justify-center">
                <img
                  alt="JOJO rolling papers and filter tips packaging"
                  src="/images/products/rolling-papers/rp_img_5.jpg"
                  className="w-full h-full max-h-[390px] object-contain bg-white"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <div className="font-mono text-[9.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2.5">
                  Papers + Tips Retail Formats
                </div>
                <h3 className="text-[clamp(26px,3vw,36px)] font-medium leading-[1.08] mb-3 font-['Cormorant_Garamond']">
                  Build another retail format around the same paper.
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  Papers + tips can be developed in compact packs, larger booklet programs or display-ready formats around the buyer's market and pack-count requirement.
                </p>
              </div>
            </article>
          </div>

          {/* Next Section Banner */}
          <div className="bg-[#111] text-white p-8 md:p-11 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#aaa] before:content-[''] before:w-5 before:h-px before:bg-[#777]">
                Continue to Retail &amp; Packaging
              </div>
              <h3 className="text-white text-[clamp(26px,3.5vw,40px)] font-medium leading-[1.05] mb-3 font-['Cormorant_Garamond']">
                See the retail formats we have not shown here.
              </h3>
              <p className="text-[#c7c7c7] text-[13.5px] leading-relaxed max-w-[78ch]">
                The dedicated Rolling Paper Retail &amp; Packaging page goes deeper into standard and magnetic booklets, 2+2 / 3+3 / 4+4 packs, hanging retail formats, coordinated colour series, counter displays and outer/master packaging — with each system shown in more detail.
              </p>
            </div>
            <div>
              <Link
                to="/retail-packaging"
                className="bg-white text-[#111] border border-white px-6 py-5 flex items-center justify-between gap-6 font-mono text-[11px] tracking-[0.05em] uppercase transition-all hover:bg-[#111] hover:text-white"
              >
                <span>Explore Rolling Paper<br />Retail &amp; Packaging</span>
                <b className="text-[20px] font-normal">&rarr;</b>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-[#0d0d0d] text-white text-center">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-2.5 mb-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 before:content-[''] before:w-5 before:h-px before:bg-white/60">
            Rolling Paper Manufacturing
          </div>
          <h2 className="text-white text-[clamp(28px,4vw,44px)] font-medium max-w-[20ch] mx-auto mb-4 leading-tight font-['Cormorant_Garamond']">
            From paper specification to a shelf-ready range.
          </h2>
          <p className="text-white/65 text-[15px] max-w-[48ch] mx-auto mb-9 leading-relaxed">
            Start with the paper base, colour and size. Then build the booklet, retail format and display system around the market you want to sell into.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/20 border border-white/20 max-w-[800px] mx-auto">
            <a
              href="#paper-types"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Paper Types
            </a>
            <a
              href="#core-sizes"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Core Sizes
            </a>
            <Link
              to="/private-label"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[12px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              OEM / Private Label
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
};

export default RollingPapers;
