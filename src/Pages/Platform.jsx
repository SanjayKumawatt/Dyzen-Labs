import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Layers, Terminal, ShieldCheck, Zap, Activity, 
  Cloud, Settings2, ArrowRight, CheckCircle2, 
  Database, Share2, BarChart3, Globe2 
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
      description: "Our proprietary execution environment optimized for asynchronous task orchestration. It handles concurrent operational requests with high-performance throughput and zero-latency logic processing.",
      icon: <Cpu className="text-[#ff2d78]" size={28} />,
      status: "Active"
    },
    {
      title: "Data Intelligence Layer",
      description: "A specialized intelligence module that sanitizes and structures fragmented incoming data. It transforms raw business signals into actionable datasets for your operational dashboards.",
      icon: <Database className="text-[#00d4ff]" size={28} />,
      status: "Deployed"
    },
    {
      title: "API Gateway & Middleware",
      description: "Robust RESTful endpoints designed for high-concurrency environments. Our middleware ensures secure, encrypted communication between your existing stack and our automation cores.",
      icon: <Share2 className="text-[#7209b7]" size={28} />,
      status: "Stable"
    },
    {
      title: "Real-time Telemetry Stack",
      description: "A continuous monitoring layer that provides instant visibility into every automated workflow. It tracks performance metrics, error rates, and system health in real-time without overhead.",
      icon: <Activity className="text-[#e63946]" size={28} />,
      status: "Live"
    },
    {
      title: "Cloud Infrastructure Sync",
      description: "Native integration for multi-cloud environments. Our platform maintains state-consistency across AWS, Azure, and GCP, ensuring your operations remain continuous and fail-safe.",
      icon: <Cloud className="text-[#00d4ff]" size={28} />,
      status: "Operational"
    },
    {
      title: "Automated Governance",
      description: "Security and compliance are automated at the root. This module enforces zero-trust protocols across all data transfers, maintaining enterprise-grade protection standards globally.",
      icon: <ShieldCheck className="text-green-500" size={28} />,
      status: "Hardened"
    }
  ];

  return (
    <div className="bg-[#07090f] min-h-screen text-white font-['Syne',sans-serif] overflow-x-hidden pt-5">
      
      {/* 1. HERO SECTION - Massive & Operational */}
      <section className="relative py-20 lg:py-40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-10 tracking-tighter">
                The Engine of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#00d4ff] to-[#7209b7]">
                  Modern Enterprise.
                </span>
              </h1>
              <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl">
                Dyzen Labs facilitates a hardened technical environment for scaling digital operations. This is not a blueprint-it is a live, micro-modular stack engineered to replace fragmented legacy processes with unified, data-driven automation.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/contact" className="px-12 py-5 bg-white text-black font-black text-[14px] tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                  START INTEGRATION
                </Link>
                <Link to="/docs" className="px-12 py-5 border border-white/10 text-white font-black text-[14px] tracking-widest hover:bg-white/5 transition-all">
                  VIEW FULL DOCUMENTATION
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ff2d78]/20 to-[#00d4ff]/20 blur-3xl opacity-50"></div>
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Infrastructure Preview" 
                  className="relative z-10 rounded-[2.5rem] border border-white/10 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL SPECIFICATIONS TABLE - Professional Proof */}
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
                    <th className="p-6 text-left text-[12px] font-bold tracking-widest uppercase text-white/40">Performance Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { cat: "Infrastructure", standard: "Cloud-Native Microservices", metric: "99.98% Guaranteed Uptime" },
                    { cat: "Security", standard: "AES-256 End-to-End Encryption", metric: "Zero-Trust Architecture" },
                    { cat: "Integration", standard: "RESTful API / Webhooks", metric: "Sub-100ms Latency" },
                    { cat: "Concurrency", standard: "Dockerized Containerization", metric: "Auto-Scaling Ready" }
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

      {/* 3. CORE MODULES GRID - Extended Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Proprietary Modules.</h2>
              <p className="text-white/40 text-xl">Our platform is structured across six primary logical layers, each engineered to perform a specific enterprise function with maximum efficiency.</p>
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

      {/* 4. INTEGRATION WORKFLOW - Step by Step Detail */}
      <section className="py-32 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-20 text-center">Seamless Integration Pipeline</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Logic Audit", desc: "We perform a deep-level audit of your current operational bottlenecks to isolate where automation delivers maximum ROI." },
              { step: "02", title: "Module Selection", desc: "Based on audit data, we activate the specific platform modules required to optimize your unique business logic." },
              { step: "03", title: "API Handshake", desc: "Our technical team facilitates the secure connection between your legacy systems and our platform endpoints." },
              { step: "04", title: "Final Deployment", desc: "Live deployment of automated workflows with continuous telemetry and performance monitoring established." }
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

      {/* 5. ARCHITECTURE SECTION - Heavy Detail */}
      <section className="py-32 bg-[#0a0d17]/50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="right">
            <p className="text-[12px] font-bold tracking-[0.3em] text-[#ff2d78] mb-8 uppercase">Infrastructure Integrity</p>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Hardened for Production. <br/> Built for Continuity.</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-3">Enterprise-Grade Resilience</h4>
                  <p className="text-white/40 leading-relaxed">Our platform implements multi-node redundancy, ensuring that if one cloud provider experiences downtime, your operations instantly shift to alternate infrastructure without data loss.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-3">Modular Scalability</h4>
                  <p className="text-white/40 leading-relaxed">Unlike rigid software, Dyzen Labs allows for horizontal scaling. You can increase operational capacity by 10x or 100x without altering a single line of your core business logic.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-3">High-Fidelity Security</h4>
                  <p className="text-white/40 leading-relaxed">We utilize proprietary encryption handshakes at every module entry point, maintaining a zero-trust environment that protects your sensitive operational data 24/7.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Architecture Setup" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FINAL ACTION SECTION */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e63946]/5 pointer-events-none"></div>
        <FadeIn>
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">Replace Fragmentation <br/> With High-Performance Logic.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/contact" className="w-full sm:w-auto px-16 py-6 bg-white text-black font-black tracking-widest text-[14px] hover:bg-[#00d4ff] hover:text-white transition-all shadow-2xl">
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