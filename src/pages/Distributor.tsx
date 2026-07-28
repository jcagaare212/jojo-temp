import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const Distributor = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [verificationError, setVerificationError] = useState("");

  useEffect(() => {
    // Generate random numbers between 1 and 10 on mount
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationError("");

    if (parseInt(userAnswer) !== num1 + num2) {
      setVerificationError("Incorrect answer. Please try again.");
      setUserAnswer("");
      // Regenerate
      setNum1(Math.floor(Math.random() * 10) + 1);
      setNum2(Math.floor(Math.random() * 10) + 1);
      return;
    }

    if (formRef.current) {
      setIsSubmitting(true);
      formRef.current.submit();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative flex flex-col justify-center py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jojo_assets/JOJO Website 26-06-2026/27.webp"
          alt="JOJO Cones Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-white/80 hover:text-white font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="px-8 py-12 md:px-16 md:py-16">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                Welcome to the JOJO Distributor Application
              </h1>
              <p className="text-lg text-slate-600">
                Thank you for your interest in partnering with JOJO Papers.<br className="hidden md:block"/>
                Please complete the form below so we can review your business profile.
              </p>
            </div>

            <form 
              ref={formRef}
              action="https://formsubmit.co/info@jojopapers.com" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Distributor Application!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href + "?success=true"} />

              {/* Section 1: Company Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Company Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company Name <span className="text-red-500">*</span></label>
                    <input type="text" name="Company Name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Company Website</label>
                    <input type="url" name="Company Website" placeholder="https://" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Please select your country <span className="text-red-500">*</span></label>
                  <select name="Country" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all">
                    <option value="">Please Select</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Business Type <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Dispensary', 'Wholesaler', 'Distributor', 'Grower', 'Smoke Shop / Head Shop', 'Online Retailer', 'Other'].map((type) => (
                      <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                        <input type="radio" name="Business Type" value={type} required className="text-primary focus:ring-primary h-4 w-4" />
                        <span className="text-sm text-slate-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Contact Details */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Contact Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                    <input type="text" name="First Name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" name="Last Name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Job Title <span className="text-red-500">*</span></label>
                    <input type="text" name="Job Title" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company Email <span className="text-red-500">*</span></label>
                    <input type="email" name="Email" required placeholder="example@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" name="Phone" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all" />
                  </div>
                </div>
              </div>

              {/* Section 3: Inquiry Details */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Partnership Interest</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Which business option are you interested in? <span className="text-red-500">*</span></label>
                  <select name="Business Option Interest" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all">
                    <option value="">Please Select</option>
                    <option value="JOJO Bulk Cones">JOJO Bulk Cones</option>
                    <option value="JOJO Retails">JOJO Retails</option>
                    <option value="JOJO Co-branding">JOJO Co-branding</option>
                    <option value="JOJO Custom Cones">JOJO Custom Cones</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Estimated Order Quantity per month (in pcs) <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Below 10,000 pcs', '10,000 - 49,999 pcs', '50,000 - 99,999 pcs', '100,000 - 499,999 pcs', '500,000 - 999,999 pcs', '1,000,000+ pcs'].map((qty) => (
                      <label key={qty} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                        <input type="radio" name="Monthly Volume" value={qty} required className="text-primary focus:ring-primary h-4 w-4" />
                        <span className="text-sm text-slate-700">{qty}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Inquiry Details</label>
                  <p className="text-xs text-slate-500 mb-2">Cone sizes and type, specific requirements, etc.</p>
                  <textarea name="Inquiry Details" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white transition-all resize-none"></textarea>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">How did you hear about us? <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Google', 'Friends', 'Digital Media News', 'Trade Show', 'Social Media', 'Other'].map((source) => (
                      <label key={source} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                        <input type="radio" name="Source" value={source} required className="text-primary focus:ring-primary h-4 w-4" />
                        <span className="text-sm text-slate-700">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Human Verification Section */}
              <div className="pt-6">
                <div className={`p-6 rounded-xl border transition-colors ${verificationError ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50/50'} flex flex-col md:flex-row items-center justify-between gap-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#1B4D3E] shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Human Verification</h4>
                      <p className={`text-sm ${verificationError ? 'text-red-600 font-medium' : 'text-slate-500'}`}>
                        {verificationError || 'Please solve the math problem to continue.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="px-4 py-3 bg-white border border-slate-200 rounded-lg text-lg font-bold text-slate-800 shadow-sm whitespace-nowrap min-w-[80px] text-center">
                      {num1} + {num2} =
                    </div>
                    <input 
                      type="number" 
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      required
                      placeholder="?" 
                      className="w-20 px-4 py-3 bg-white border border-slate-200 rounded-lg text-lg font-bold text-slate-800 shadow-sm text-center focus:ring-2 focus:ring-[#1B4D3E] focus:border-[#1B4D3E] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-8 border-t border-slate-200 flex justify-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#1B4D3E] text-white font-bold tracking-widest text-sm uppercase px-16 py-5 rounded-full hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
