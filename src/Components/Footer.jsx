import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#04060c] relative overflow-hidden pt-32 pb-12 font-['Syne',sans-serif]">
      
      {/* --- ADVANCED ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes laserMove {
          0% { transform: translateX(-100%) skewX(-45deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(200%) skewX(-45deg); opacity: 0; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}} />

      {/* 1. Background Laser Beam (Moving Effect) */}
      <div className="absolute top-0 left-0 w-full h-1 z-0 overflow-hidden">
        <div 
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#e63946] to-transparent"
          style={{ animation: 'laserMove 8s linear infinite' }}
        />
      </div>

      {/* 2. Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-10" />

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* UPPER SECTION: Focused Branding & Direct Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <Link to="/" className="flex mb-5 items-center select-none group">
              <span
                className="text-3xl flex items-center gap-2 font-black tracking-[0.25em] transition-all duration-300 group-hover:tracking-[0.35em]"
                style={{
                  letterSpacing: "0.25em"
                }}
              >
                <img src={logo} className="h-14" alt="Dyzen Labs Logo" />
                
                {/* Fallback gradient text if image fails */}
                {/* <span
                  style={{
                    background: "linear-gradient(to right, #ff2d78, #00d4ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  DYZEN LABS
                </span> */}
              </span>
            </Link>
            
            <h3 className="text-2xl md:text-3xl text-white font-bold leading-tight mb-4">
              Building the future of software, <br/> 
              <span className="text-white/40">focusing on clean execution.</span>
            </h3>
            <p className="text-white/30 text-lg font-medium max-w-md">
              Based in Jaipur, setting up frameworks to handle modern digital scale.
            </p>
          </div>

          {/* Direct CTA/Email Box */}
          <div className="w-full lg:w-auto">
            <Link 
              to={"/contact"}
              className="group flex items-center justify-between gap-8 p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Send a Message</span>
                <Link to={"/contact"} className="text-lg font-bold text-white flex items-center gap-2">
                  <Mail size={16} className="text-[#e63946]" /> 
                  contact@dyzenlabsdigital.in
                </Link>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#e63946] flex items-center justify-center transition-transform group-hover:rotate-[-45deg]">
                <ArrowRight color="white" size={20} />
              </div>
            </Link>
          </div>
        </div>

        {/* MIDDLE SECTION: Horizontal Links Bar (Modern Layout) */}
        <div className="flex flex-wrap items-center justify-between gap-8 py-10 border-y border-white/[0.05]">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <Link
              className="text-[13px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00d4ff] transition-colors"
              to={"/"}
            >
              Home
            </Link>
            
            {/* Using the updated unique page names from the Header */}
            {[
              { label: "Our Builds", path: "/builds" },
              { label: "Capabilities", path: "/capabilities" },
              { label: "The Dyzen Story", path: "/story" },
              { label: "Join Dyzen", path: "/careers" },
              { label: "Reach Us", path: "/contact" }
            ].map((item) => (
              <Link 
                key={item.label}
                to={item.path}
                className="text-[13px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00d4ff] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white/30">
              <MapPin size={14} color="#e63946" />
              <span className="text-[12px] font-bold tracking-wider uppercase">Jaipur, India</span>
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <Globe size={14} color="#e63946" />
              <span className="text-[12px] font-bold tracking-wider uppercase">dyzenlabsdigital.in</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center pt-10 gap-6">
          <p className="text-[11px] text-white/20 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} DYZEN LABS PRIVATE LIMITED
          </p>
          
        </div>

      </div>

      {/* Decorative Gradient Blob (Bottom Left) */}
      <div 
        className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ 
            background: 'radial-gradient(circle, rgba(255,45,120,0.1) 0%, transparent 70%)',
            animation: 'pulseSlow 8s ease-in-out infinite' 
        }}
      />
    </footer>
  );
}