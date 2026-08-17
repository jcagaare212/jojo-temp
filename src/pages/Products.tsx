import { Link } from "react-router-dom";
import { allProductsList } from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";

const Products = () => {
  return (
    <div className="pt-[73px] md:pt-[115px] bg-background min-h-screen">
      <Breadcrumb items={[{ label: "Products" }]} />
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display mb-4 tracking-tight">
            Our Catalog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our flagship manufacturing lines. Each product can be fully customized for your brand's specific requirements at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allProductsList.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group block bg-slate-50 border border-border/50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#ebe4d8] flex items-center justify-center p-6">
                <img
                  src={product.specImage}
                  alt={`${product.name} ${product.subtitle}`}
                  className="w-full h-full object-contain mix-blend-multiply transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8">
                <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
                  {product.subtitle}
                </p>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  {product.name}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  View Specifications <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
