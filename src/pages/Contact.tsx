import B2BForm from "@/components/B2BForm";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const Contact = () => {
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
        title="Contact JOJO Papers | Request Samples & OEM Sourcing Inquiries"
        description="Get in touch with JOJO Papers for sample requests, MOQ quotes, custom dielines, and contract manufacturing consultations."
        canonical="https://jojopapers.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact JOJO Papers",
          "description": "B2B sales, wholesale sample requests, and contract manufacturing consultations.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "JOJO Papers",
            "image": "https://jojopapers.com/images/products/cones/cones-hero-size-chart.webp",
            "telephone": "+91 99715 08200",
            "email": "info@jojopapers.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vasant Kunj",
              "addressLocality": "New Delhi",
              "addressRegion": "DL",
              "addressCountry": "IN"
            }
          }
        }}
      />
      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* PAGE HERO */}
      <section className="pt-8 pb-10 md:pt-12 md:pb-12 border-b border-border/60">
        <motion.div className="max-w-[800px] mx-auto text-center px-6" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="eyebrow center mb-3" variants={fadeInUp}>
            Direct Contact
          </motion.div>
          <motion.h1 className="text-[clamp(30px,4vw,46px)] leading-[1.1] mb-4 font-['Cormorant_Garamond'] font-medium" variants={fadeInUp}>
            Get In Touch
          </motion.h1>
          <motion.p className="text-[15.5px] text-muted-foreground max-w-[58ch] mx-auto leading-relaxed" variants={fadeInUp}>
            Whether you are looking to scale an existing brand or build a completely custom private label product line, our team is ready to engineer your solution.
          </motion.p>
        </motion.div>
      </section>

      {/* DIRECT CONTACT INFO */}
      <section className="py-10 md:py-12 border-b border-border bg-secondary/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div className="grid md:grid-cols-3 gap-[1px] bg-border border border-border" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            <motion.div className="bg-white p-6 md:p-8 text-center flex flex-col items-center justify-center" variants={fadeInUp}>
              <div className="font-sans text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase mb-2">Email</div>
              <h3 className="font-sans text-[16px] font-medium tracking-wide text-foreground mb-2"><a href="mailto:info@jojopapers.com" className="hover:text-muted-foreground transition-colors border-b border-transparent hover:border-muted-foreground pb-0.5">info@jojopapers.com</a></h3>
              <p className="text-[12.5px] text-muted-foreground">General inquiries & wholesale</p>
            </motion.div>
            
            <motion.div className="bg-white p-6 md:p-8 text-center flex flex-col items-center justify-center" variants={fadeInUp}>
              <div className="font-sans text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase mb-2">Phone</div>
              <h3 className="font-sans text-[16px] font-medium tracking-wide text-foreground mb-2"><a href="tel:+919971508200" className="hover:text-muted-foreground transition-colors border-b border-transparent hover:border-muted-foreground pb-0.5">+91 99715 08200</a></h3>
              <p className="text-[12.5px] text-muted-foreground">Wholesale inquiries only</p>
            </motion.div>

            <motion.div className="bg-white p-6 md:p-8 text-center flex flex-col items-center justify-center" variants={fadeInUp}>
              <div className="font-sans text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase mb-2">Headquarters</div>
              <h3 className="font-sans text-[16px] font-medium tracking-wide text-foreground mb-2 leading-tight">Vasant Kunj,<br/>New Delhi</h3>
              <p className="text-[12.5px] text-muted-foreground">India</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <B2BForm />
    </div>
  );
};

export default Contact;
