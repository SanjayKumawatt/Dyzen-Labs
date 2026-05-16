import React from "react";
import { motion } from "framer-motion";
import { 
  Target, Hexagon, Triangle, MapPin, 
  ArrowRight, TerminalSquare, Layers, Cpu,
  Code2, Database, Zap, Activity, GitCommit,
  Terminal
} from "lucide-react";
import { Link } from "react-router-dom";

// Standard FadeIn for scannability
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

export default function Company() {
  const principles = [
    {
      title: "Execution > Ideation",
      desc: "We do not sell concepts or blueprints. We deploy hardened, functional software that integrates into your operational reality from day one. Code over slides.",
      icon: <TerminalSquare className="text-[#00d4ff]" size={32} />
    },
    {
      title: "Architecture > Aesthetics",
      desc: "While design matters, infrastructure scales. Our primary engineering hours are spent optimizing queries, reducing load times, and hardening security layers.",
      icon: <Layers className="text-[#ff2d78]" size={32} />
    },
    {
      title: "Logic > Templates",
      desc: "Standard SaaS forces your business to change its workflows. We engineer modular systems that adapt to your specific business logic, not the other way around.",
      icon: <Cpu className="text-[#7209b7]" size={32} />
    }
  ];

  return (
    <div className="bg-[#07090f] min-h-screen text-white font-['Syne',sans-serif] overflow-x-hidden pt-5">
      
      {/* 1. HERO SECTION - Honest Tech Startup Vibe */}
      <section className="relative py-24 lg:py-40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-[12px] font-bold tracking-[0.4em] text-white/30 uppercase mb-8">The Engineering Collective</p>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-10 max-w-5xl mx-auto">
              Engineering the standard <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#00d4ff]">for automated workflows.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-3xl mx-auto mb-16">
              Dyzen Labs was established with a singular directive: to replace rigid, manual legacy workflows with logic-driven automation engines. We build the infrastructure that scaling businesses run on.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-14 py-6 bg-white text-black font-black text-[14px] tracking-widest hover:bg-[#00d4ff] hover:text-white transition-all shadow-2xl">
                SPEAK WITH OUR TEAM
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE DYZEN PARADIGM (Replaced Stock Image with Code UI) */}
      <section className="py-32 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            {/* Matte Deployment Terminal */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl h-[400px] flex flex-col">
              <div className="w-full h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[11px] font-mono text-white/40 flex items-center gap-2">
                  <Terminal size={12} /> dyzen-core-build
                </div>
              </div>
              <div className="p-6 font-mono text-[11px] leading-loose text-white/60 flex-1 relative overflow-hidden">
                 <p className="text-[#00d4ff]">$ npm run build:production</p>
                 <p className="mt-2 text-white/80">&gt; dyzen-engine@1.2.0 build</p>
                 <p>&gt; tsc && vite build</p>
                 <br />
                 <p className="text-green-400">✓ Compiling operational modules...</p>
                 <p className="text-green-400">✓ Optimizing database schemas...</p>
                 <p className="text-green-400">✓ Hardening API endpoints...</p>
                 <br />
                 <p>dist/assets/logic-core.js   <span className="text-[#ffbd2e]">142.5 kB</span></p>
                 <p>dist/assets/webhook-sync.js <span className="text-[#ffbd2e]">64.2 kB</span></p>
                 <br />
                 <p className="text-[#00d4ff]">Build successful. Ready for deployment.</p>
                 <p className="mt-2 text-white/40 flex items-center gap-2">
                   <GitCommit size={14} className="text-[#ff2d78]" /> 
                   main branch - a2b4c6d
                 </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <p className="text-[12px] font-bold tracking-[0.3em] text-[#ff2d78] mb-6 uppercase">The Paradigm</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Software should adapt to reality.</h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                The traditional software industry has a habit of forcing businesses to adapt their unique operational workflows to fit rigid, pre-built templates. This creates friction and technical debt.
              </p>
              <p>
                At Dyzen Labs, we engineer from the ground up. We do not aggregate generic tools; we build modular, scalable systems that mirror your exact business logic. 
              </p>
              <p>
                Our systems are engineered for growing environments, automating data pipelines, backend infrastructure, and core administrative protocols with optimized efficiency.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. NEW SECTION: ENGINEERING CULTURE (Adds Length & Technical Depth) */}
      <section className="py-32 bg-[#0a0d17]/50 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Our Technical DNA.</h2>
              <p className="text-white/40 text-xl">
                We are a collective of developers, system architects, and logic designers. We believe in writing clean code, utilizing modern stacks, and keeping our infrastructure lightweight.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-10 rounded-3xl bg-[#07090f] border border-white/5">
                <Code2 className="text-[#00d4ff] mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4">Modern Stack Architecture</h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  We utilize the MERN stack (MongoDB, Express, React, Node.js) combined with modern tooling like Vite and Tailwind CSS to ensure our applications are fast, maintainable, and built on industry standards.
                </p>
                <div className="flex gap-2">
                   <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white/40 border border-white/10">React</span>
                   <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white/40 border border-white/10">Node.js</span>
                   <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white/40 border border-white/10">MongoDB</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-10 rounded-3xl bg-[#07090f] border border-white/5">
                <Database className="text-[#ff2d78] mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4">Data Integrity First</h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  Before we build UI, we structure the data. Our engineering process starts at the database level, ensuring schemas are optimized for quick retrieval and secure storage.
                </p>
                <div className="flex gap-2">
                   <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white/40 border border-white/10">Schema Design</span>
                   <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white/40 border border-white/10">Sanitization</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. OPERATING PRINCIPLES */}
      <section className="py-32 bg-white/[0.01] border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Operating Principles.</h2>
              <p className="text-white/40 text-xl max-w-2xl mx-auto">
                These are the strict engineering doctrines that govern every module we push to production.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-12 rounded-[2.5rem] bg-[#0a0d17] border border-white/5 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                  <div className="mb-8">{principle.icon}</div>
                  <h3 className="text-2xl font-black mb-4 text-white">{principle.title}</h3>
                  <p className="text-white/40 leading-relaxed text-[15px] flex-grow">
                    {principle.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HQ & OPERATIONS (Replaced Stock Image with Real Evidence) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-[12px] font-bold tracking-[0.3em] text-[#00d4ff] mb-6 uppercase">Base of Operations</p>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Headquartered in Jaipur.</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">
                Our central nervous system is based in Jaipur, Rajasthan. From here, our engineering collective monitors, maintains, and pushes updates to infrastructures supporting our partners.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-[14px] font-bold text-white/70">
                  <MapPin size={18} className="text-[#00d4ff]" /> Systems Engineering & Design
                </li>
                <li className="flex items-center gap-3 text-[14px] font-bold text-white/70">
                  <Activity size={18} className="text-[#00d4ff]" /> Active Telemetry Monitoring
                </li>
                <li className="flex items-center gap-3 text-[14px] font-bold text-white/70">
                  <Zap size={18} className="text-[#00d4ff]" /> Client Integration Support
                </li>
              </ul>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              {/* Matte UI: Jaipur Region Telemetry Dashboard */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl p-8">
                <img src="https://deepshikha.org/wp-content/uploads/2024/05/Best-B.-Tech-College-in-Jaipur.jpg" alt="" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-40 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d17] to-transparent pointer-events-none"></div>
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">Join the infrastructure.</h2>
            <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto">
              Whether you are a growing business looking to automate, or a developer looking to build at scale-connect with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link 
                to="/contact" 
                className="w-full sm:w-auto px-14 py-6 bg-white text-black font-black tracking-widest text-[14px] hover:bg-blue-500 hover:text-white transition-all shadow-xl"
               >
                 CONNECT WITH ENGINEERING
               </Link>
               <Link 
                to="/platform" 
                className="w-full sm:w-auto px-14 py-6 border border-white/20 text-white font-black tracking-widest text-[14px] hover:bg-white/10 transition-all"
               >
                 EXPLORE PLATFORM
               </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}