import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Layers, Terminal, ShieldCheck, Zap, Activity, 
  Cloud, Settings2, ArrowRight, CheckCircle2, 
  Database, Share2, BarChart3, Globe2, GitBranch, Play
} from "lucide-react";
import { Link } from "react-router-dom";

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

export default function Platform() {
  const coreModules = [
    {
      title: "Core Logic Engine (v1.2)",
      description: "Our execution environment optimized for asynchronous task orchestration. It handles operational requests efficiently with reliable logic processing.",
      icon: <Cpu className="text-[#ff2d78]" size={28} />,
      status: "Active"
    },
    {
      title: "Data Intelligence Layer",
      description: "A specialized intelligence module that sanitizes and structures fragmented incoming data. It transforms raw business signals into actionable datasets.",
      icon: <Database className="text-[#00d4ff]" size={28} />,
      status: "Deployed"
    },
    {
      title: "API Gateway & Middleware",
      description: "Robust RESTful endpoints designed for scalable web environments. Our middleware ensures secure, encrypted communication between your existing stack and our core.",
      icon: <Share2 className="text-[#7209b7]" size={28} />,
      status: "Stable"
    },
    {
      title: "Real-time Telemetry Stack",
      description: "A continuous monitoring layer that provides visibility into automated workflows. It tracks performance metrics and system health without overhead.",
      icon: <Activity className="text-[#e63946]" size={28} />,
      status: "Live"
    },
    {
      title: "Cloud Infrastructure Sync",
      description: "Native integration for multi-cloud environments. Our platform maintains state-consistency across major cloud providers, ensuring continuous operations.",
      icon: <Cloud className="text-[#00d4ff]" size={28} />,
      status: "Operational"
    },
    {
      title: "Automated Governance",
      description: "Security protocols integrated at the root. This module enforces encryption across data transfers, maintaining strict protection standards.",
      icon: <ShieldCheck className="text-green-500" size={28} />,
      status: "Hardened"
    }
  ];

  return (
    <div className="bg-[#07090f] min-h-screen text-white font-['Syne',sans-serif] overflow-x-hidden pt-5">
      
      {/* 1. HERO SECTION - Product Evidence Instead of Stock Image */}
      <section className="relative py-20 lg:py-40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-10 tracking-tighter">
                The Engine for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#00d4ff] to-[#7209b7]">
                  Scaling Operations.
                </span>
              </h1>
              <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl">
                Dyzen Labs provides a modular technical environment for growing digital operations. This is a live, micro-modular stack engineered to replace fragmented processes with unified automation.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/contact" className="px-12 py-5 bg-white text-black font-black text-[14px] tracking-widest hover:bg-gray-200 transition-all">
                  START INTEGRATION
                </Link>
                <Link to="/docs" className="px-12 py-5 border border-white/10 text-white font-black text-[14px] tracking-widest hover:bg-white/5 transition-all">
                  VIEW FULL DOCUMENTATION
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              {/* UI Mockup: Core Logic Engine v1.2 Builder */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl">
                <div className="w-full h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[11px] font-mono text-white/40">Core Logic Engine v1.2</div>
                  <Play size={14} className="text-green-400" />
                </div>
                
                {/* Visual Workflow Canvas */}
                <div className="h-[350px] p-6 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent">
                  {/* Grid Background */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Nodes */}
                  <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute top-10 left-10 w-40 bg-[#161b22] border border-white/10 p-3 rounded-lg shadow-lg z-10">
                    <div className="text-[10px] text-[#00d4ff] font-bold mb-1 uppercase tracking-wider">Webhook In</div>
                    <div className="text-xs text-white/60 font-mono">/api/v1/ingest</div>
                  </motion.div>

                  {/* SVG Connection Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <motion.path 
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: 1 }} 
                      transition={{ duration: 1.5, delay: 0.8 }}
                      d="M 200 60 C 250 60, 250 160, 300 160" 
                      stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="4 4"
                    />
                    <motion.path 
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: 1 }} 
                      transition={{ duration: 1.5, delay: 1.2 }}
                      d="M 460 160 C 500 160, 500 260, 550 260" 
                      stroke="#4b5563" strokeWidth="2" fill="none" strokeDasharray="4 4"
                    />
                  </svg>

                  <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="absolute top-32 left-[300px] w-40 bg-[#161b22] border border-[#ff2d78]/30 p-3 rounded-lg shadow-lg z-10">
                    <div className="text-[10px] text-[#ff2d78] font-bold mb-1 uppercase tracking-wider">Logic Parser</div>
                    <div className="text-xs text-white/60 font-mono">sanitize_payload()</div>
                  </motion.div>

                  <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="absolute top-56 left-[550px] max-md:left-10 max-md:top-64 w-40 bg-[#161b22] border border-green-500/30 p-3 rounded-lg shadow-lg z-10">
                    <div className="text-[10px] text-green-400 font-bold mb-1 uppercase tracking-wider">Database Sync</div>
                    <div className="text-xs text-white/60 font-mono">MongoDB Commit</div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL SPECIFICATIONS TABLE - Uptime Fixed */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/10 rounded-2xl overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-6 text-left text-[12px] font-bold tracking-widest uppercase text-white/40">Category</th>
                    <th className="p-6 text-left text-[12px] font-bold tracking-widest uppercase text-white/40">Deployment Standard</th>
                    <th className="p-6 text-left text-[12px] font-bold tracking-widest uppercase text-white/40">Performance Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { cat: "Infrastructure", standard: "Cloud-Native Modules", metric: "Engineered for high availability & resilient scaling" },
                    { cat: "Security", standard: "Data Encryption Protocols", metric: "Strict Access Control" },
                    { cat: "Integration", standard: "RESTful API / Webhooks", metric: "Optimized Data Routing" },
                    { cat: "Architecture", standard: "Containerized Environments", metric: "Ready for Auto-Scaling" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 font-bold text-white/80">{row.cat}</td>
                      <td className="p-6 text-white/50">{row.standard}</td>
                      <td className="p-6 font-mono text-[#00d4ff] text-sm">{row.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. CORE MODULES GRID - Kept as is (cleaned descriptions above) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Proprietary Modules.</h2>
              <p className="text-white/40 text-xl">Our platform is structured across primary logical layers, engineered to perform operational functions efficiently.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreModules.map((module, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group h-full p-12 rounded-[2.5rem] bg-[#0a0d17] border border-white/[0.06] hover:border-white/20 transition-all duration-500">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-6 rounded-2xl bg-white/[0.03] group-hover:bg-[#ff2d78]/10 transition-all duration-500">
                      {module.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full border border-green-500/30 text-green-400 bg-green-500/5 uppercase">
                      {module.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-white tracking-tight">{module.title}</h3>
                  <p className="text-white/40 leading-relaxed mb-10 text-[15px]">
                    {module.description}
                  </p>
                  <Link to="/docs" className="flex items-center gap-2 text-[12px] font-bold text-white/40 group-hover:text-white transition-all">
                    TECHNICAL DOCS <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATION WORKFLOW */}
      <section className="py-32 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-20 text-center">Seamless Integration Pipeline</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Logic Audit", desc: "We review your current operational bottlenecks to identify where automation brings value." },
              { step: "02", title: "Module Selection", desc: "Based on the audit, we activate specific platform modules to optimize your business logic." },
              { step: "03", title: "API Handshake", desc: "Our team facilitates secure connections between your current systems and our endpoints." },
              { step: "04", title: "Deployment", desc: "Live deployment of automated workflows with ongoing telemetry and performance monitoring." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative p-10 rounded-3xl bg-white/[0.02] border border-white/5">
                  <span className="text-5xl font-black text-white/5 absolute top-6 right-8">{item.step}</span>
                  <h4 className="text-xl font-bold mb-5 text-[#00d4ff]">{item.title}</h4>
                  <p className="text-white/30 leading-relaxed text-[14px]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE SECTION - Fake Image replaced with Real Evidence */}
      <section className="py-32 bg-[#0a0d17]/50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="right">
            <p className="text-[12px] font-bold tracking-[0.3em] text-[#ff2d78] mb-8 uppercase">Infrastructure Integrity</p>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Prepared for Production. <br/> Built for Continuity.</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-3">System Resilience</h4>
                  <p className="text-white/40 leading-relaxed">Our platform relies on stable architectures, ensuring that your operations remain continuous without unexpected data loss.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-3">Modular Architecture</h4>
                  <p className="text-white/40 leading-relaxed">Dyzen Labs allows for structured scaling. You can increase capacity smoothly without disrupting your core business logic.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-3">Data Security</h4>
                  <p className="text-white/40 leading-relaxed">We utilize secure handshakes at module entry points, maintaining a protected environment for your operational data.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            {/* UI Mockup: Deployment / Telemetry Logs */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#07090f] shadow-2xl h-[450px] flex flex-col">
              <div className="w-full h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[11px] font-mono text-white/40 flex items-center gap-2">
                  <GitBranch size={12} /> main-deployment
                </div>
              </div>
              <div className="p-6 font-mono text-[12px] leading-loose text-white/60 overflow-hidden flex-1 relative">
                 <p className="text-[#00d4ff] mb-4">Dyzen Labs Infrastructure Node // v1.2.0</p>
                 <p>[sys] Initiating boot sequence...</p>
                 <p>[auth] Verified admin: <span className="text-white/90 font-bold">sanjay_k</span></p>
                 <p>[db] Connecting to primary cluster...</p>
                 <p className="text-green-400">[db] Connection established successfully.</p>
                 <p>[sys] Loading core modules...</p>
                 <p>[module] LogicEngine initialized.</p>
                 <p>[module] APIGateway listening on port 8080.</p>
                 <p className="text-blue-400">[telemetry] Routing optimal paths...</p>
                 <motion.div 
                   animate={{ opacity: [1, 0] }} 
                   transition={{ repeat: Infinity, duration: 0.8 }}
                   className="mt-2 w-2 h-4 bg-white/80"
                 />
                 <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#07090f] to-transparent"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FINAL ACTION SECTION */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e63946]/5 pointer-events-none"></div>
        <FadeIn>
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">Replace Fragmentation <br/> With Unified Logic.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/contact" className="w-full sm:w-auto px-16 py-6 bg-white text-black font-black tracking-widest text-[14px] hover:bg-gray-200 transition-all shadow-2xl">
                REQUEST INTEGRATION AUDIT
              </Link>
              <Link to="/docs" className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white font-black tracking-widest text-[14px] hover:bg-white/10 transition-all">
                EXPLORE API SPECS
              </Link>
            </div>
            <p className="mt-12 text-white/30 text-[11px] font-bold tracking-[0.4em] uppercase">Built & Deployed by Dyzen Labs · Jaipur, Rajasthan</p>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}