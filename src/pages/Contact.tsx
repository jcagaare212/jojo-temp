import B2BForm from "@/components/B2BForm";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const bgImg = "/images/jojo_assets/JOJO Website 26-06-2026/27.webp";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Contact Header */}
      <section className="bg-slate-900 border-b border-slate-800 text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 px-6 py-24 md:py-32 lg:py-48 lg:px-16 xl:px-24 flex flex-col justify-center max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Whether you are looking to scale an existing brand or build a completely custom private label product line, our team is ready to engineer your solution.
            </p>
          </div>
          <div className="flex-1 relative min-h-[400px] lg:min-h-auto">
            <img 
              src={bgImg} 
              alt="JOJO Papers Products" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
          </div>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-16 bg-slate-50 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Email</h3>
              <a href="mailto:info@jojopapers.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@jojopapers.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                +91 XXXX XXXXXX<br />
                <span className="text-xs opacity-70">Wholesale inquiries only</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Headquarters</h3>
              <p className="text-muted-foreground">
                Vasant Kunj, New Delhi, Delhi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distributorship Callout */}
      <section className="py-16 bg-white border-b border-border/50 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-4">Partner Network</h2>
          <p className="text-muted-foreground mb-8 text-lg">Interested in joining our global distribution network or finding a supplier near you?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/distributor"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-[#1B4D3E] text-[#1B4D3E] px-8 py-3 rounded-md font-semibold tracking-wide hover:bg-[#1B4D3E] hover:text-white transition-colors"
            >
              Become Our Distributor
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <B2BForm />
    </div>
  );
};

export default Contact;
