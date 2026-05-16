import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Mail, Loader2, Check, TerminalSquare } from "lucide-react";

// Smooth Scroll Reveal Wrapper
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0 
    },
    visible: { opacity: 1, y: 0, x: 0 }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      e.target.reset(); // Clear the form

      // Hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="bg-[#04060c] min-h-screen text-white font-['Syne',sans-serif] selection:bg-[#00d4ff] selection:text-black relative">
      
      {/* MODERN PREMIUM TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-[#0a0d17] border border-[#00d4ff]/30 text-white px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,212,255,0.1)] flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 flex items-center justify-center">
              <Check size={18} className="text-[#00d4ff]" />
            </div>
            <div>
              <h4 className="font-bold text-[15px] mb-0.5">Transmission Successful</h4>
              <p className="text-white/50 text-[13px]">Our engineering team will review your specs and respond shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION - Honest Startup Vibe */}
      <section className="pt-40 pb-12 px-8 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <TerminalSquare size={16} className="text-[#00d4ff]" />
              <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Integration Request</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Integration.
              </span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Our engineering team is ready to review your technical bottlenecks and discuss how our modular logic can scale your operations. Submit your core requirements below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. DIRECT LAYOUT: INFO & FORM */}
      <section className="py-20 pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Clean Contact Details */}
            <div className="w-full lg:w-4/12 flex flex-col gap-12">
              <FadeIn direction="right">
                <div>
                  <h3 className="text-2xl font-bold mb-8">Engineering Support</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-2">Direct Channel</h4>
                      <div className="flex items-center gap-3 text-lg font-bold text-white">
                        <Mail className="text-[#e63946]" size={20} />
                        contact@dyzenlabs.com
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-white/[0.05]">
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-3">Response Time</h4>
                      <p className="text-[#00d4ff] font-bold text-[15px]">Technical audit responses typically within 48-72 hours.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="pt-8 border-t border-white/[0.05]">
                  <h3 className="text-2xl font-bold mb-6">Headquarters</h3>
                  <div className="flex items-start gap-4 text-white/70 leading-relaxed bg-[#0a0d17] p-6 rounded-2xl border border-white/[0.05]">
                    <MapPin className="text-[#e63946] mt-1 shrink-0" size={24} />
                    <p className="text-[15px]">
                      <strong className="text-white block mb-1">DYZEN LABS PRIVATE LIMITED</strong>
                      C-111, Narayan Vihar, <br/>
                      Near Happy Children Park, <br/>
                      Mansarovar, Jaipur, <br/>
                      Rajasthan, India, 302020.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: THE STARTUP-HONEST FORM */}
            <div className="w-full lg:w-8/12">
              <FadeIn direction="left">
                <div className="p-8 md:p-12 rounded-[2rem] bg-[#0a0d17] border border-white/[0.05]">
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold tracking-wider text-white/50 uppercase ml-1">Point of Contact</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-[#04060c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold tracking-wider text-white/50 uppercase ml-1">Work Email</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-[#04060c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[12px] font-bold tracking-wider text-white/50 uppercase ml-1">Current Scale</label>
                      <select 
                        required
                        className="w-full bg-[#04060c] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#00d4ff]/50 transition-colors cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>Select your current operational tier</option>
                        <option value="scaling_saas">Scaling Tech Platform / SaaS</option>
                        <option value="agency">Digital Agency / High Volume</option>
                        <option value="startup">Early-Stage Startup</option>
                        <option value="custom">Custom Operations / Retail</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[12px] font-bold tracking-wider text-white/50 uppercase ml-1">Technical Requirements</label>
                      <textarea 
                        required
                        rows="5"
                        className="w-full bg-[#04060c] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                        placeholder="Detail your current tech stack and the specific bottlenecks you need automated..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-4 flex items-center justify-center gap-3 w-full bg-white text-black font-black text-[14px] tracking-widest py-6 rounded-xl hover:bg-[#00d4ff] hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin text-current" />
                          TRANSMITTING DATA...
                        </>
                      ) : (
                        <>
                          SUBMIT REQUIREMENTS
                          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}