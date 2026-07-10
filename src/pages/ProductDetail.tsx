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
                <div className="overflow-hidden rounded-3xl bg-slate-100 border border-border/50">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transform-gpu backface-hidden [transform:translateZ(0)] will-change-transform"
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

      {/* Specs Section */}
      <FadeIn>
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Spec image */}
            <div className="overflow-hidden rounded-3xl border border-border/50">
              <img
                src={product.specImage}
                alt={`${product.name} details`}
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1200}
                height={1200}
              />
            </div>

            {/* Spec groups */}
            <div className="py-4">
              <div className="border-t border-border pt-6 mb-10">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Manufacturing Details
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {product.specGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                      {group.label}
                    </p>
                    <div className="space-y-2">
                      {group.values.map((val, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                          {val}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Usage Images with Captions */}
      <FadeIn>
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-border pt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.usageImages.map((img, i) => (
                  <div key={i} className="space-y-4">
                    <div className="overflow-hidden rounded-3xl bg-slate-100 border border-border/50">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                    </div>
                    <p className="text-sm text-foreground font-medium text-center">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Craft Note / Bottom Callout */}
      <FadeIn>
        <div className="container mx-auto px-6 py-16 pb-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block p-4 rounded-full bg-slate-50 border border-border">
              <TriangleAlert className="w-6 h-6 text-primary" />
            </div>
            
            <div className="space-y-2">
              {product.craftNote.split("\n").map((line, i) => (
                <h4 key={i} className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {line}
                </h4>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                Global Shipping Available
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProductDetail;
