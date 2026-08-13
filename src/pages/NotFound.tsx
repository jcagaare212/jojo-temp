import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background text-foreground px-6 py-24">
      <motion.div 
        className="text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="eyebrow center mb-6 text-muted-foreground before:bg-muted-foreground">404 Error</div>
        <h1 className="mb-6 text-[clamp(40px,6vw,80px)] font-['Cormorant_Garamond'] font-medium leading-[1.05]">
          Lost in the smoke.
        </h1>
        <p className="mb-10 text-[16px] text-muted-foreground leading-relaxed max-w-md mx-auto">
          The page you are looking for doesn't exist, has been moved, or is currently being rolled.
        </p>
        <Link to="/" className="btn-premium inline-block">
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
