import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Generate Google-compliant schema.org BreadcrumbList
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jojopapers.com"
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://jojopapers.com${item.href}` } : {})
      }))
    ];

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };

    const existingScript = document.getElementById("breadcrumb-json-ld");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "breadcrumb-json-ld";
    script.type = "application/ld+json";
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("breadcrumb-json-ld");
      if (s) s.remove();
    };
  }, [items, pathname]);

  return (
    <div className="border-b border-border bg-white">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-3.5">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-2 flex-wrap">
          <Link
            to="/"
            className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground"
          >
            Home
          </Link>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <span className="text-muted-foreground/50">/</span>
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{item.label}</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
