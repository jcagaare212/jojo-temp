import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

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
    // TODO: Replace 'your@email.com' with the actual client email address
    fetch("https://formsubmit.co/ajax/your@email.com", {
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

  return (
    <section className="py-24 bg-white text-foreground border-b border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Start Your Custom Build</h3>
          <p className="text-muted-foreground text-lg">Partner with Jojo Papers to scale your brand globally.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New B2B Inquiry - Jojo Papers" />
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <input type="text" name="name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company Name</label>
              <input type="text" name="company" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Jojo Papers" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Estimated Monthly Volume</label>
              <select name="volume" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none" required>
                <option value="">Select volume...</option>
                <option value="10k-50k">10,000 - 50,000 units</option>
                <option value="50k-250k">50,000 - 250,000 units</option>
                <option value="250k+">250,000+ units</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Primary Product Interest</label>
              <select name="product" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none" required>
                <option value="">Select product...</option>
                <option value="cones">Pre-Rolled Cones</option>
                <option value="booklets">Rolling Paper Booklets</option>
                <option value="packaging">Custom Packaging / Tins</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Project Details</label>
            <textarea name="details" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Tell us about your requirements..." required></textarea>
          </div>
          {/* Enhanced Captcha Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50/80 border border-slate-200 rounded-xl p-4 mt-8 shadow-sm">
            <div className="flex items-center gap-3 text-slate-700 flex-1 w-full">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Human Verification</p>
                <p className="text-xs text-slate-500">Please solve the math problem to continue.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="font-display font-bold text-lg bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm shrink-0">
                {num1} + {num2} = 
              </span>
              <input 
                type="number" 
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-20 bg-white border border-slate-200 rounded-lg px-2 py-2 text-foreground font-bold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-center shadow-sm" 
                placeholder="?"
                required
              />
            </div>
          </div>
          
          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
          {success && <p className="text-emerald-600 text-sm font-medium text-center bg-emerald-50 py-3 rounded-md">Inquiry submitted successfully! We will be in touch soon.</p>}

          <div className="pt-4 text-center">
            <button type="submit" disabled={success} className={`bg-primary text-primary-foreground px-12 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 ${success ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90 hover:scale-105 active:scale-95'}`}>
              {success ? "Submitted" : "Submit Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default B2BForm;
