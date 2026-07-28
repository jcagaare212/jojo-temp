import { useParams, Navigate, Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { products } from "@/data/products";
import { TriangleAlert, ShieldCheck } from "lucide-react";

const FadeIn = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId] : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Hero: Product info left (sticky), Gallery right (scrolling) */}
      <div className="container mx-auto px-6 pt-32 lg:pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Product Info — Sticky Left Column */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                {product.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="bg-slate-50 border border-border/50 rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Key Specifications</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/private-label#inquiry" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
              >
                Request Wholesale Quote
              </Link>
            </div>
          </div>

          {/* Gallery — Vertical scroll, right column */}
          <div className="space-y-4 order-1 lg:order-2">
            {product.gallery.map((img, i) => (
              <FadeIn key={i}>
                <div className="overflow-hidden rounded-3xl bg-[#ebe4d8] border border-border/50 flex items-center justify-center p-8">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain mix-blend-multiply transform-gpu backface-hidden [transform:translateZ(0)] will-change-transform"
                    loading={i > 0 ? "lazy" : undefined}
                    width={1200}
                    height={1200}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Manufacturing Details (No Image, just clean grid) */}
      <FadeIn>
        <div className="bg-white border-t border-border/50">
          <div className="container mx-auto px-6 py-16 lg:py-24 max-w-6xl">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Manufacturing Details
              </h3>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Comprehensive specifications and options for {product.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.specGroups.map((group) => (
                <div key={group.label} className="bg-slate-50 rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
                    {group.label}
                  </p>
                  <ul className="space-y-4">
                    {group.values.map((val, i) => (
                      <li key={i} className="text-sm text-slate-600 font-medium flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* The JOJO Standard (Replaces repeating usage images with the brand infographic) */}
      <FadeIn>
        <div className="bg-[#f6f3eb] py-24 border-t border-border/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="inline-block p-4 rounded-2xl bg-white shadow-sm border border-border/50">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-sm tracking-[0.3em] uppercase text-slate-500 font-bold">The JOJO Standard</h2>
                  {product.craftNote.split("\n").map((line, i) => (
                    <h3 key={i} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-slate-900">
                      {line}
                    </h3>
                  ))}
                </div>
                
                <div className="pt-8">
                  <Link 
                    to="/about"
                    className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors uppercase tracking-widest text-sm"
                  >
                    Read Our Philosophy <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative flex items-center justify-center p-8 bg-white/40 rounded-3xl border border-white/60 shadow-sm aspect-square md:aspect-[4/3]">
                  <img
                    src="/images/about/jojo-standard.png"
                    alt="The JOJO Standard Infographic"
                    className="w-full h-full object-contain mix-blend-multiply transform-gpu hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProductDetail;
