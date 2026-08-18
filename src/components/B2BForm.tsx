import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const B2BForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== num1 + num2) {
      setError("Incorrect security answer. Please try again.");
      generateCaptcha();
      return;
    }
    setError("");
    
    const formData = new FormData(e.currentTarget);
    
    // Send form data via AJAX to FormSubmit
    fetch("https://formsubmit.co/ajax/info@jojopapers.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSuccess(true);
    })
    .catch(error => {
      console.log(error);
      setError("Failed to send inquiry. Please try again.");
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div className="text-center mb-16" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}>
          <div className="eyebrow center mb-4">Start Your Custom Build</div>
          <h3 className="font-['Cormorant_Garamond'] text-[clamp(24px,3vw,32px)] font-medium mb-4 text-foreground leading-snug">Partner with JOJO Papers to scale your brand globally.</h3>
        </motion.div>

        <motion.form 
          className="space-y-8" 
          onSubmit={handleSubmit}
          initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New B2B Inquiry - JOJO Papers" />
            
            <div className="space-y-3">
              <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground block">Full Name</label>
              <input type="text" name="name" className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground text-[14px] focus:outline-none focus:border-foreground transition-colors" placeholder="John Doe" required />
            </div>
            <div className="space-y-3">
              <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground block">Company Name</label>
              <input type="text" name="company" className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground text-[14px] focus:outline-none focus:border-foreground transition-colors" placeholder="JOJO Papers" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground block">Estimated Monthly Volume</label>
              <select name="volume" className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground text-[14px] focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer" required>
                <option value="">Select volume...</option>
                <option value="10k-50k">10,000 - 50,000 units</option>
                <option value="50k-250k">50,000 - 250,000 units</option>
                <option value="250k+">250,000+ units</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground block">Primary Product Interest</label>
              <select name="product" className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground text-[14px] focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer" required>
                <option value="">Select product...</option>
                <option value="cones">Pre-Rolled Cones</option>
                <option value="booklets">Rolling Paper Booklets</option>
                <option value="packaging">Custom Packaging / Tins</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <label className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground block">Project Details</label>
            <textarea name="details" rows={5} className="w-full bg-secondary/50 border border-border px-4 py-3 text-foreground text-[14px] focus:outline-none focus:border-foreground transition-colors resize-none" placeholder="Tell us about your requirements..." required></textarea>
          </div>
          
          {/* Minimalist Captcha Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 border-y border-border py-6 my-8">
            <div className="flex-1">
              <p className="font-['Cormorant_Garamond'] text-[18px] font-medium text-foreground mb-1">Human Verification</p>
              <p className="font-sans text-[12px] text-muted-foreground">Please solve the simple math problem.</p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <span className="font-sans text-[14px] text-foreground tracking-widest bg-secondary px-4 py-2 border border-border min-w-[100px] text-center">
                {num1} + {num2} = 
              </span>
              <input 
                type="number" 
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-20 bg-secondary/50 border border-border px-2 py-2 text-[14px] text-foreground focus:outline-none focus:border-foreground transition-colors text-center" 
                placeholder="?"
                required
              />
            </div>
          </div>
          
          {error && <p className="text-red-500 font-sans text-[12px] uppercase tracking-widest text-center">{error}</p>}
          {success && <p className="text-foreground border border-foreground font-sans text-[12px] uppercase tracking-widest text-center py-4 bg-secondary">Inquiry submitted successfully. We will be in touch soon.</p>}

          <div className="pt-4 text-center">
            <button type="submit" disabled={success} className={`btn-premium-solid w-full sm:w-auto px-12 py-4 text-[12px] ${success ? 'opacity-50 cursor-not-allowed hover:bg-foreground hover:text-background border border-foreground' : ''}`}>
              {success ? "Submitted" : "Submit Inquiry"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default B2BForm;
