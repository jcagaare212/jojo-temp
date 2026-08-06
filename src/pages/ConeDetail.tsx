import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const coneData: Record<string, any> = {
  "dogwalker-mini": {
    sizeNum: "SIZE 01",
    name: "Dogwalker Mini",
    tagline: "Quick, discreet, ready in a pinch — built for the walk, not the wait.",
    description: "The Dogwalker Mini is perfect for a quick, personal smoke. Its compact size ensures you can enjoy a fresh, flavorful experience in a fraction of the time, making it ideal for those on the go.",
    specs: {
      "OVERALL LENGTH": "70 MM",
      "TIP LENGTH": "20 MM",
      "TIP DIAMETER": "Ø5.0 MM",
      "CONE DIAMETER": "Ø8.5 MM",
      "TIP STYLE": "M/W SHAPE & SPIRAL",
      "BRANDING": "CUSTOM BRANDING AVAILABLE",
      "PACKAGING": "CONFIGURED TO ORDER — OEM"
    },
    img: "/images/products/cones/dogwalker-mini-70mm.png"
  },
  "mini": {
    sizeNum: "SIZE 02",
    name: "Mini",
    tagline: "Compact and clean — a shorter session without cutting the experience.",
    description: "Slightly longer than the Dogwalker, the Mini offers a comfortable draw and a smooth burn. It's the perfect middle ground for a solo session that lasts just a bit longer.",
    specs: {
      "OVERALL LENGTH": "78 MM",
      "TIP LENGTH": "20 MM",
      "TIP DIAMETER": "Ø5.0 MM",
      "CONE DIAMETER": "Ø9.0 MM",
      "TIP STYLE": "M/W SHAPE & SPIRAL",
      "BRANDING": "CUSTOM BRANDING AVAILABLE",
      "PACKAGING": "CONFIGURED TO ORDER — OEM"
    },
    img: "/images/products/cones/mini-78mm.png"
  },
  "1-1-4-size": {
    sizeNum: "SIZE 03",
    name: "1 1/4 Size",
    tagline: "The everyday classic — balanced, familiar, built to move volume.",
    description: "The 1 1/4 Size is the most popular and versatile cone in the market. It strikes the perfect balance between capacity and burn time, making it a reliable choice for everyday use.",
    specs: {
      "OVERALL LENGTH": "84 MM",
      "TIP LENGTH": "26 MM",
      "TIP DIAMETER": "Ø5.5 MM",
      "CONE DIAMETER": "Ø10.0 MM",
      "TIP STYLE": "M/W SHAPE & SPIRAL",
      "BRANDING": "CUSTOM BRANDING AVAILABLE",
      "PACKAGING": "CONFIGURED TO ORDER — OEM"
    },
    img: "/images/products/cones/1-1-4-size-84mm.png"
  },
  "98mm-special": {
    sizeNum: "SIZE 04",
    name: "98mm Special",
    tagline: "A little more room, a little more burn — the specialist's choice.",
    description: "Designed for those who want a bit more out of their session, the 98mm Special provides an extended burn and holds enough volume for a satisfying solo experience or sharing with friends.",
    specs: {
      "OVERALL LENGTH": "98 MM",
      "TIP LENGTH": "26 MM",
      "TIP DIAMETER": "Ø5.5 MM",
      "CONE DIAMETER": "Ø11.5 MM",
      "TIP STYLE": "M/W SHAPE & SPIRAL",
      "BRANDING": "CUSTOM BRANDING AVAILABLE",
      "PACKAGING": "CONFIGURED TO ORDER — OEM"
    },
    img: "/images/products/cones/98mm-special.png"
  },
  "king-size": {
    sizeNum: "SIZE 05",
    name: "King Size",
    tagline: "Built for longer sessions and sharing — the largest in the JOJO lineup.",
    description: "The King Size is crafted for maximum capacity. Whether you're passing it around with friends or enjoying an extended session, this cone delivers a slow, even, and consistent burn from start to finish.",
    specs: {
      "OVERALL LENGTH": "109 MM",
      "TIP LENGTH": "26 MM",
      "TIP DIAMETER": "Ø5.5 MM",
      "CONE DIAMETER": "Ø12.5 MM",
      "TIP STYLE": "M/W SHAPE & SPIRAL",
      "BRANDING": "CUSTOM BRANDING AVAILABLE",
      "PACKAGING": "CONFIGURED TO ORDER — OEM"
    },
    img: "/images/products/cones/king-size-109mm.png"
  }
};

const ConeDetail = () => {
  const { sizeId } = useParams();
  const data = coneData[sizeId || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sizeId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f4ed]">
        <h1 className="text-2xl text-slate-800">Size not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f4ed] pb-24 pt-12 md:pt-20">
      <div className="container mx-auto max-w-5xl px-6">
        
        {/* Back navigation */}
        <Link to="/pre-rolled-cones" className="inline-flex items-center gap-2 text-[#a89680] hover:text-[#8a7b69] transition-colors mb-12 font-medium tracking-wider uppercase text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to All Sizes
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <p className="text-[#c1ad94] tracking-[0.3em] uppercase text-sm font-bold mb-4">
            Pre-Rolled Cones
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#2a2927] mb-8">
            Size Specifications
          </h1>
          <div className="h-px bg-[#d5c6b4] w-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 bg-white rounded-md p-4 md:p-8 shadow-sm border border-[#ede9e1] flex items-center justify-center"
          >
            <img 
              src={data.img} 
              alt={data.name} 
              className="w-full h-auto object-contain mix-blend-multiply scale-110" 
            />
          </motion.div>

          {/* Right: Specifications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-1/2 pt-4"
          >
            <div className="mb-8">
              <p className="text-[#a89680] uppercase tracking-widest text-sm mb-2 font-medium">
                {data.sizeNum}
              </p>
              <h2 className="font-serif text-4xl text-[#2a2927] mb-4">
                {data.name}
              </h2>
              <div className="h-px bg-[#d5c6b4] w-full max-w-md mb-6"></div>
              <p className="text-[#645f5a] font-serif text-lg italic mb-4">
                {data.tagline}
              </p>
              {data.description && (
                <p className="text-[#4a4743] font-sans leading-relaxed">
                  {data.description}
                </p>
              )}
            </div>

            {/* Specs Table */}
            <div className="space-y-4">
              {Object.entries(data.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-baseline border-b border-[#ede9e1] pb-3 last:border-0">
                  <span className="text-[#c1ad94] uppercase tracking-widest text-sm font-medium sm:w-48 shrink-0 mb-1 sm:mb-0">
                    {key} <span className="hidden sm:inline-block mx-2">—</span>
                  </span>
                  <span className="text-[#2a2927] uppercase tracking-wider font-medium text-[15px]">
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Paper Options Section */}
        <div className="mt-20 border-t border-[#d5c6b4]/50 pt-16">
          <h3 className="font-serif text-3xl text-[#2a2927] mb-8">Paper Options</h3>
          
          <div className="flex flex-col gap-10 items-start mb-8">
            <div className="w-full bg-white p-2 md:p-4 rounded-xl border border-[#ede9e1] shadow-sm">
              <img 
                src="/images/jojo_assets/JOJO Website 26-06-2026/6.webp" 
                alt="Paper Colors and Types" 
                className="w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500 scale-110" 
              />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#a89680] uppercase tracking-widest text-sm font-medium mb-2">Types of Paper</h4>
                <p className="text-[#4a4743] font-sans text-lg">Wood pulp, Rice paper, Hemp paper, and Flax paper.</p>
              </div>
              <div>
                <h4 className="text-[#a89680] uppercase tracking-widest text-sm font-medium mb-2">Available Colors</h4>
                <p className="text-[#4a4743] font-sans text-lg leading-relaxed">
                  Bleached (White), Unbleached (Brown), Pink, Green, Purple, Black, and Blue. Custom colors available upon request to match your brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tips Section */}
        <div className="mt-16 border-t border-[#d5c6b4]/50 pt-16">
          <h3 className="font-serif text-3xl text-[#2a2927] mb-6">Filter Tips</h3>
          <p className="text-[#645f5a] font-sans mb-8 leading-relaxed max-w-2xl">
            Available in various styles including M/W shape and spiral configurations. We offer complete customization to meet your specific brand requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#ede9e1] group">
              <img src="/images/tips/tip-1.jpeg" alt="Tip Style 1" className="w-full h-auto object-contain scale-[1.03] group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#ede9e1] group">
              <img src="/images/tips/tip-2.jpeg" alt="Tip Style 2" className="w-full h-auto object-contain scale-[1.03] group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConeDetail;
