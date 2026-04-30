import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, X, Check, Target, Layers, Workflow, Fingerprint, Zap } from "lucide-react";
import { Link } from "react-router-dom";

// Scroll Reveal Component
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0 
    },
    visible: { opacity: 1, y: 0, x: 0 }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Capabilities() {
  const contrastPairs = [
    {
      industry: "Selling pre-packaged software that forces you to change your existing workflows.",
      dyzen: "Engineering custom logic that adapts entirely to how your business already operates."
    },
    {
      industry: "Treating digital marketing as a black box with vague vanity metrics and zero attribution.",
      dyzen: "Developing transparent tracking frameworks where every rupee of ad spend can be traced."
    },
    {
      industry: "Building monolithic applications that require a complete rewrite when user traffic surges.",
      dyzen: "Structuring modular, scalable codebases utilizing React and Node.js ecosystems."
    }
  ];

  const coreCapabilities = [
    {
      title: "Digital Growth & Marketing",
      icon: <Target size={32} className="text-[#ff2d78]" />,
      description: "We are designing performance marketing infrastructures focused on raw ROI. Instead of chasing generic awareness, our intent is to build systems that capture data, analyze user behavior, and deploy targeted campaigns that will yield measurable conversions.",
      tags: ["Attribution Modeling", "Campaign Architecture", "Conversion Logic"],
      image: "https://images.pexels.com/photos/7412038/pexels-photo-7412038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Custom IT Infrastructure",
      icon: <Layers size={32} className="text-[#00d4ff]" />,
      description: "Template sites cannot handle enterprise-level demands. Dyzen Labs is focused on constructing secure, high-load web applications from the ground up. Our development methodology is designed to ensure your technical foundation remains stable as your operations scale.",
      tags: ["React/Node.js Frameworks", "Database Structuring", "Custom Web Apps"],
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Process & API Automation",
      icon: <Workflow size={32} className="text-[#7209b7]" />,
      description: "Manual data entry is an outdated growth strategy. We are actively developing custom script bridges designed to connect your fragmented business tools. By automating repetitive administrative tasks, we intend to give your team thousands of hours back.",
      tags: ["Workflow Scripting", "API Integration", "Data Synchronization"],
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const targetAudiences = [
    {
      sector: "Logistics & Supply Chain",
      need: "If you are managing shipments and need a unified dashboard to replace scattered Excel sheets."
    },
    {
      sector: "Healthcare & Clinics",
      need: "If you require a secure, custom patient management architecture that standard SaaS won't support."
    },
    {
      sector: "E-Commerce & Retail",
      need: "If you are looking to construct a high-converting digital storefront with deep marketing attribution."
    },
    {
      sector: "Recruitment & HR",
      need: "If your firm is planning to build an automated candidate screening and onboarding portal."
    }
  ];

  return (
    <div className="bg-[#04060c] min-h-screen text-white font-['Syne',sans-serif]">
      
      {/* 1. TYPOGRAPHY-FOCUSED HERO (Different from Builds page) */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        {/* Abstract Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[#00d4ff]/10 to-[#ff2d78]/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-end justify-between gap-12">
          <FadeIn className="w-full lg:w-2/3">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
              Defining our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#ff2d78]">
                operational bandwidth.
              </span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              A breakdown of the specific digital marketing and IT engineering capabilities Dyzen Labs is structured to provide. We focus solely on domains where we can execute cleanly and logically.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="w-full lg:w-1/3 flex lg:justify-end">
            <div className="flex items-center gap-4 text-white/30 border-l-2 border-white/10 pl-6">
              <Fingerprint size={32} className="text-[#00d4ff]" />
              <span className="text-sm font-bold uppercase tracking-widest">Scope & Execute</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. CONTRAST PAIRS SECTION (New Format per Guidelines) */}
      <section className="py-24 border-y border-white/[0.05] bg-[#07090f]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">The Industry vs The Dyzen Standard</h2>
          </FadeIn>

          <div className="space-y-6">
            {contrastPairs.map((pair, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/[0.05]">
                  {/* Industry Box */}
                  <div className="w-full md:w-1/2 bg-[#04060c] p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.05]">
                    <div className="flex items-center gap-3 mb-4 text-white/40">
                      <X size={20} className="text-[#e63946]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Standard Agency Approach</span>
                    </div>
                    <p className="text-lg text-white/60 leading-relaxed">{pair.industry}</p>
                  </div>
                  {/* Dyzen Box */}
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 blur-3xl rounded-full"></div>
                    <div className="flex items-center gap-3 mb-4 text-white/90">
                      <Check size={20} className="text-[#00d4ff]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4ff]">Our Commitment</span>
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed relative z-10">{pair.dyzen}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEEP DIVE CAPABILITIES (Detailed rows with images) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-[11px] font-bold tracking-[0.3em] text-[#ff2d78] mb-16 uppercase text-center">
              Core Technical Offerings
            </h2>
          </FadeIn>

          <div className="space-y-24">
            {coreCapabilities.map((cap, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                {/* Text Side */}
                <FadeIn className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="mb-6 inline-block p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                    {cap.icon}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{cap.title}</h3>
                  <p className="text-lg text-white/50 leading-relaxed mb-8">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {cap.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-white/60 text-[13px] font-semibold bg-[#0a0d17]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeIn>

                {/* Image Side */}
                <FadeIn className="w-full lg:w-1/2 order-1 lg:order-2" delay={0.2}>
                  <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] group border border-white/10">
                    <div className="absolute inset-0 bg-[#04060c]/40 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                    <img 
                      src={cap.image} 
                      alt={cap.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </FadeIn>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "IF YOU ARE..." TARGETING SECTION (Guideline Rule 4) */}
      <section className="py-24 bg-[#0a0d17] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who we intend to partner with.</h2>
              <p className="text-white/50 text-lg max-w-2xl">
                We are building our infrastructure to support businesses that require specific logic. We do not claim to serve these industries yet, but our platforms are being engineered to solve their exact bottlenecks.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudiences.map((target, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-[#04060c] border border-white/[0.05] h-full flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={18} className="text-[#00d4ff]" />
                    <h4 className="text-white/90 font-bold uppercase tracking-wider text-sm">{target.sector}</h4>
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    {target.need}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060c] to-[#0a0d17] z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Require a specific capability?</h2>
            <p className="text-white/50 text-lg mb-10">
              If your required technical framework or marketing strategy is not outlined above, we are open to scoping custom architectural builds.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-[15px] hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Request a Capability Audit <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}