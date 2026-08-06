import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";

const BulkCones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ed] pb-24 pt-24 md:pt-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#c1ad94] tracking-[0.3em] uppercase text-sm font-bold mb-4">
            Wholesale & Manufacturing
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#2a2927] mb-8">
            Bulk Cones
          </h1>
          <p className="text-[#645f5a] font-serif text-xl italic mb-8">
            Engineered for scale. Ideal for dispensaries, mass producers, and large-scale manufacturing facilities requiring volume without compromising quality.
          </p>
          <div className="h-px bg-[#d5c6b4] w-full max-w-md mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 items-start mb-24 min-h-[50vh]">
          {/* Content temporarily removed as requested */}
        </div>

      </div>
    </div>
  );
};

export default BulkCones;
