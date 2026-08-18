import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_TITLE = "JOJO Papers — B2B OEM Rolling Papers & Pre-Rolled Cones Manufacturer";
const DEFAULT_DESCRIPTION = "JOJO Papers is a premier OEM manufacturing partner for pre-rolled cones, rolling papers, filter tips, and custom retail packaging. Made in India since 2014.";
const BASE_URL = "https://jojopapers.com";
const DEFAULT_OG_IMAGE = "https://jojopapers.com/images/products/cones/cones-hero-size-chart.webp";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
}: SEOProps) {
  const { pathname } = useLocation();
  const canonicalUrl = canonical || `${BASE_URL}${pathname === '/' ? '' : pathname}`;
  const fullTitle = title ? (title.includes("JOJO") ? title : `${title} | JOJO Papers`) : DEFAULT_TITLE;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set/update meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(attr);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // OpenGraph
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:site_name", "JOJO Papers", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Dynamic JSON-LD Structured Data
    const existingScript = document.getElementById("page-json-ld");
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById("page-json-ld");
      if (s) s.remove();
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, jsonLd]);

  return null;
}
