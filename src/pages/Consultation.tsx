import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

export default function Consultation() {
  const stagger: Variants = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="pt-[73px] md:pt-[115px] bg-background text-foreground overflow-hidden font-sans">
      <SEO
        title="Quality Control Consultation & QC Review Framework in India"
        description="Independent first-level quality control reviews and pre-shipment inspections in India. Verify paper grammage, burn rate, tolerances, and packaging before goods move."
        canonical="https://jojopapers.com/consultation"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Quality Control Consultation and Sourcing Review",
          "provider": {
            "@type": "Organization",
            "name": "JOJO Papers"
          },
          "serviceType": "Quality Control & Sourcing Inspection"
        }}
      />
      <Breadcrumb items={[{ label: "Consultation" }]} />

      {/* PAGE HERO */}
      <section className="pt-8 pb-10 md:pt-12 md:pb-12 border-b border-border/60">
        <motion.div className="max-w-[800px] mx-auto text-center px-6" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="eyebrow center mb-3" variants={fadeInUp}>
            Complimentary Support
          </motion.div>
          <motion.h1 className="text-[clamp(30px,4vw,46px)] leading-[1.1] mb-4 font-['Cormorant_Garamond'] font-medium" variants={fadeInUp}>
            Your Second Eye in India, Before Goods Move.
          </motion.h1>
          <motion.p className="text-[15.5px] text-muted-foreground max-w-[58ch] mx-auto leading-relaxed" variants={fadeInUp}>
            JOJO acts as an independent first-level reviewer for overseas buyers sourcing from India, checking product, packaging and dispatch-readiness before goods move — even when another approved supplier is manufacturing the order.
          </motion.p>
        </motion.div>
      </section>

      {/* GUARANTEE & OVERVIEW */}
      <section className="py-10 md:py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div 
            className="bg-foreground text-background p-8 md:p-12 flex flex-col gap-5 rounded-none"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="inline-block font-sans text-[10.5px] tracking-[0.08em] uppercase px-3 py-1.5 border border-white/35 text-white/85 self-start">
              Complimentary Buyer Support
            </div>
            <h2 className="text-[clamp(20px,2.4vw,28px)] font-['Cormorant_Garamond'] font-medium text-white max-w-3xl leading-snug">
              A practical quality review in India, even when another supplier is manufacturing the order.
            </h2>
            <div className="text-white/70 text-[14px] md:text-[14.5px] max-w-3xl leading-relaxed flex flex-col gap-3">
              <p>For overseas buyers, distance can make it difficult to physically review a product, sample, batch or final shipment before goods move. JOJO can help close that gap with a practical India-side review based on the scope agreed with you.</p>
              <p>The service is available whether the order is being manufactured by JOJO or by another approved supplier you already work with in India.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-[12px] text-white/50 font-mono uppercase tracking-wider mr-1">Key Markets:</span>
              {['USA', 'Canada', 'Europe', 'Other Markets'].map((flag) => (
                <span key={flag} className="font-sans text-[11.5px] bg-white/10 border border-white/20 px-3.5 py-1.5 text-white/90">
                  {flag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE CAN REVIEW */}
      <section className="py-12 md:py-14 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div className="text-center max-w-[600px] mx-auto mb-10" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center mb-2">What We Can Review</div>
            <h2 className="text-[clamp(24px,2.8vw,32px)] font-['Cormorant_Garamond'] font-medium">Five areas we check, on request.</h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-[1px] bg-border border border-border" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            {[
              { title: 'Product & Specifications', desc: 'We review the product against the buyer-approved specification, including relevant dimensions, paper, colour and filter-tip construction, and flag visible differences or workmanship concerns. Where agreed, this can include an in-person factory or warehouse review.' },
              { title: 'Import Labelling & Artwork Review', desc: 'We carry out a visual, advisory review against the destination-market requirements provided for the project and flag visible labelling, placement or artwork concerns before print is locked. This does not replace specialist regulatory or legal certification.' },
              { title: 'Sample or Batch Review', desc: 'We check samples or a batch of your order against what was approved. This can mean our team visiting the factory for a spot check, or the factory sending us a mixed batch to review directly.' },
              { title: 'Final Packing & Dispatch Check', desc: 'Before goods move, we review available carton counts, outer-carton labelling, visible packing condition and general dispatch readiness against the agreed scope.' },
              { title: 'Packaging Protection & Drop-Test Check', desc: 'Where appropriate, we can carry out a basic handling or drop check on sample packaging and share visible observations. This is an advisory check and does not replace certified transport or laboratory testing.', full: true }
            ].map((item, i) => (
              <motion.div key={i} className={`bg-white p-6 md:p-8 flex flex-col justify-center ${item.full ? 'md:col-span-2 bg-secondary/30 items-center text-center' : ''}`} variants={fadeInUp}>
                <h4 className="font-['Cormorant_Garamond'] font-medium text-[19px] mb-2">{item.title}</h4>
                <p className={`text-[14px] text-muted-foreground leading-relaxed ${item.full ? 'max-w-3xl' : ''}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* DISCLAIMER CALLOUT INLINE */}
          <motion.div 
            className="border border-border/80 p-5 md:p-6 flex gap-4 items-start bg-secondary/40 mt-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="font-['Cormorant_Garamond'] text-2xl leading-none text-foreground flex-shrink-0 font-bold mt-0.5">!</div>
            <div>
              <h4 className="font-medium text-[15px] mb-1 font-['Cormorant_Garamond'] text-lg text-foreground">Practical review, not certification.</h4>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                Our team carries out a hands-on, advisory review directly, even if you do not manufacture with JOJO. It does not replace certified laboratory testing, specialist legal advice or formal regulatory certification. Where certified testing is required, it can be arranged separately as a quoted service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-16 bg-secondary/50 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div className="text-center max-w-[600px] mx-auto mb-10" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center mb-2">How the Support Works</div>
            <h2 className="text-[clamp(24px,2.8vw,32px)] font-['Cormorant_Garamond'] font-medium">Five steps, from brief to next move.</h2>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto flex flex-col bg-white border border-border px-6 md:px-10 divide-y divide-border" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            {[
              { num: '01', title: 'Share the Brief', desc: 'Send the approved specification, product images, packaging requirements and supplier details.' },
              { num: '02', title: 'Agree the Scope', desc: 'JOJO confirms what can be reviewed, the access required and any travel or testing involved.' },
              { num: '03', title: 'Review the Product or Batch', desc: 'A practical review is carried out on the agreed product, packaging or batch stage.' },
              { num: '04', title: 'Receive the Review Summary', desc: 'Visible observations, concerns and practical next-step guidance are shared in a clear review summary.' },
              { num: '05', title: 'Move Forward', desc: 'Use the feedback to approve, revise, escalate or proceed with dispatch more confidently.' }
            ].map((step, i) => (
              <motion.div key={i} className="grid grid-cols-[45px_1fr] md:grid-cols-[65px_1fr] gap-4 py-5 items-baseline" variants={fadeInUp}>
                <div className="font-['Cormorant_Garamond'] text-2xl text-muted-foreground font-medium">{step.num}</div>
                <div>
                  <h4 className="font-['Cormorant_Garamond'] font-medium text-[18px] mb-1 text-foreground">{step.title}</h4>
                  <p className="text-[13.5px] text-muted-foreground max-w-[56ch] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COSTS & SCOPE */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div className="text-center max-w-[800px] mx-auto mb-10" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center mb-2">Costs & Scope</div>
            <h2 className="text-[clamp(22px,2.6vw,28px)] font-['Cormorant_Garamond'] font-medium mb-3 leading-snug">The QC review is complimentary. Travel and certified lab testing are separate only when required.</h2>
            <p className="text-[14.5px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">The agreed practical QC review and review summary are provided at no charge. Two items sit outside the complimentary scope when they are required:</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-[1px] bg-border border border-border max-w-4xl mx-auto" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            <motion.div className="bg-white p-7 md:p-9" variants={fadeInUp}>
              <h4 className="font-['Cormorant_Garamond'] font-medium text-lg mb-2">Travel, If It's Needed</h4>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">If the review can be done within our team's reachable range, there's no travel charge at all. If a site visit needs travel beyond that, we charge only the actual cost incurred, against invoice, with no markup and no flat fee.</p>
            </motion.div>
            <motion.div className="bg-white p-7 md:p-9" variants={fadeInUp}>
              <h4 className="font-['Cormorant_Garamond'] font-medium text-lg mb-2">Lab Testing, If You Want It</h4>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">Our review is hands-on and practical, not a certified lab test. If you need certified lab testing on top of it, we can arrange that too. We'll share a separate quotation first, and nothing proceeds until you approve it.</p>
            </motion.div>
          </motion.div>

          <motion.p className="text-center text-[12.5px] text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            Travel costs are billed at actuals against invoice when required. Certified lab testing only proceeds after you approve the quotation.
          </motion.p>
        </div>
      </section>

      {/* QC FRAMEWORK */}
      <section id="qc-framework" className="py-12 md:py-16 bg-secondary/50 border-b border-border">
        <div className="max-w-[950px] mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-[1.15fr_0.85fr] gap-0 border border-border bg-white shadow-sm"
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="eyebrow mb-3">Our QC Framework</div>
              <h2 className="text-[clamp(22px,2.6vw,28px)] font-['Cormorant_Garamond'] font-medium mb-3 leading-snug">See How JOJO Structures a QC Review.</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-[40ch] text-[14px]">
                We use a structured, 28-point inspection checklist covering paper integrity, cone shape, glue lines, filter fit, tipping finish and secondary packaging.
              </p>
              <div>
                <a href="/JOJO-QC-Inspection-Template.pdf" download target="_blank" rel="noreferrer" className="btn-premium-solid text-[12px] py-3 px-6">Download Sample QC Checklist</a>
              </div>
            </div>
            <div className="bg-foreground text-background p-8 md:p-10 min-h-[260px] flex flex-col justify-between m-2">
              <div>
                <div className="font-sans text-[10px] tracking-[0.12em] uppercase text-white/55 mb-6">JOJO Papers</div>
                <div className="font-['Cormorant_Garamond'] text-3xl md:text-4xl leading-[1.1] font-medium text-white">QC Review<br/>Framework</div>
              </div>
              <div className="font-sans text-[10.5px] text-white/55 tracking-widest uppercase">Your Second Eye in India</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 md:py-16 bg-foreground text-background text-center">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center center-white text-white/60 mb-4 before:bg-white/60">Next Step</div>
            <h2 className="text-[clamp(24px,3.2vw,36px)] font-['Cormorant_Garamond'] font-medium max-w-[20ch] mx-auto mb-4 leading-[1.15] text-white">Request a complimentary QC review before your next shipment.</h2>
            <p className="text-white/65 max-w-[46ch] mx-auto mb-8 text-[15px]">
              Whether we produce it or another supplier does, we can verify the specifications before you approve final shipment.
            </p>
            
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/contact" className="btn-premium-solid bg-background text-foreground hover:bg-white/90 text-[12.5px]">Request a QC Review</Link>
              <a href="/JOJO-QC-Inspection-Template.pdf" download target="_blank" rel="noreferrer" className="btn-premium bg-transparent text-background hover:bg-background hover:text-foreground border-background/40 text-[12.5px]">Download QC Framework</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
