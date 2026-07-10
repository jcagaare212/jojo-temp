import { Link } from "react-router-dom";
import B2BForm from "@/components/B2BForm";

const PrivateLabel = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/jojo_assets/JOJO Website 26-06-2026/11.webp" 
            alt="Factory Layout" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            End-to-End <br className="md:hidden" /> Custom Manufacturing
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your brand with world-class OEM capabilities. From custom watermarked papers to luxury printed tins, we build premium smoking essentials at global scale.
          </p>
          <a href="#inquiry" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Start Your Custom Build
          </a>
        </div>
      </section>

      {/* Capabilities Breakdown (Bento Style) */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">OEM Capabilities</h3>
            <p className="text-muted-foreground text-lg max-w-2xl">We don't just print logos. We engineer products from the pulp up to meet the exacting standards of the world's top brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capability 1 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/24.webp" alt="Custom Watermarks" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">[Client Capability 1]</h4>
                <p className="text-slate-200 text-sm max-w-md">[Client to provide detailed description of capability 1 here. E.g., specific materials, watermarks, etc.]</p>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/4.webp" alt="Luxury Packaging" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">[Client Capability 2]</h4>
                <p className="text-slate-200 text-sm max-w-md">[Client to provide detailed description of capability 2 here. E.g., specific printing methods, foils, closures, etc.]</p>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/30.webp" alt="Pre-rolled Cones" className="w-full h-full object-cover object-top transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">[Client Capability 3]</h4>
                <p className="text-slate-200 text-sm max-w-md">[Client to provide detailed description of capability 3 here. E.g., cone rolling specifics, sizes, crutches.]</p>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/28.webp" alt="Retail Displays" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">[Client Capability 4]</h4>
                <p className="text-slate-200 text-sm max-w-md">[Client to provide detailed description of capability 4 here. E.g., retail displays, metal packaging features.]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The OEM Pipeline */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">The Manufacturing Pipeline</h3>
            <p className="text-muted-foreground text-lg">A seamless, proven process to take your brand from concept to global distribution.</p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "[Pipeline Step 1]",
                desc: "[Client to describe the first step of the manufacturing pipeline, such as design, consultation, or requirements gathering.]"
              },
              {
                step: "02",
                title: "[Pipeline Step 2]",
                desc: "[Client to describe the second step, such as prototyping, sampling, or sign-offs.]"
              },
              {
                step: "03",
                title: "[Pipeline Step 3]",
                desc: "[Client to describe the third step, such as mass production, automated manufacturing details.]"
              },
              {
                step: "04",
                title: "[Pipeline Step 4]",
                desc: "[Client to describe the final step, such as quality control, delivery, and logistics.]"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Callout */}
      <section className="py-16 bg-slate-900 text-slate-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Wholesale & OEM Inquiries</h3>
          <p className="text-slate-400 mb-8">
            Due to our high-volume automated manufacturing processes, our standard Minimum Order Quantities (MOQs) apply. Please reach out via the form below with your project details and estimated volume, and our sales team will provide a tailored quote.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div id="inquiry">
        <B2BForm />
      </div>
    </div>
  );
};

export default PrivateLabel;
