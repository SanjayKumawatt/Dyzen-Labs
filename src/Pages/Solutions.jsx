import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, Workflow, Globe2, ShieldCheck, Zap, ArrowRight, CheckCircle2,
  Users2, HardDrive, CloudCog, Network, Database, Lock, TerminalSquare, Layers
} from "lucide-react";
import { Link } from "react-router-dom";

// Standard FadeIn for scannability
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0 
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

export default function Solutions() {
  const deepSolutions = [
    {
      title: "Operational Automation Core",
      subtitle: "Logic-Based Workflow Execution",
      description: "We deploy comprehensive automation logic that directly replaces manual administrative and operational workflows. By integrating directly into your ERP and CRM environments, this solution handles asynchronous task orchestration, ensuring that data moves across your organization with zero human intervention and zero latency.",
      executionLogic: "Utilizes event-driven webhooks to trigger multi-step protocols the second a data point changes in your system.",
      features: ["Cross-Platform Data Sync", "Automated Approval Pipelines", "Dynamic Resource Allocation"],
      icon: <Workflow className="text-[#00d4ff]" size={40} />
    },
    {
      title: "Autonomous Marketing & Conversion",
      subtitle: "Data-Driven Acquisition Engine",
      description: "Our marketing infrastructure doesn't just track clicks; it executes automated acquisition logic. We implement hardened data pipelines that monitor user telemetry in real-time, automatically adjusting campaign parameters, lead scoring, and automated outreach without requiring daily manual oversight from your team.",
      executionLogic: "Processes millions of user interaction events through a unified API to adjust ad-spend and engagement logic dynamically.",
      features: ["Predictive Lead Scoring", "Real-Time Attribution Tracking", "Automated Retention Sequences"],
      icon: <BarChart3 className="text-[#ff2d78]" size={40} />
    },
    {
      title: "Enterprise Data Orchestration",
      subtitle: "Unified Intelligence Dashboards",
      description: "Fragmented data creates operational blind spots. We deploy robust data lakes and orchestration middleware that pulls raw signals from every tool in your tech stack. This data is sanitized, structured, and pushed into a unified, high-concurrency dashboard, giving your executive team real-time visibility into the entire business.",
      executionLogic: "Runs continuous ETL (Extract, Transform, Load) pipelines deployed on scalable microservices architecture.",
      features: ["Raw Signal Sanitization", "Multi-Source API Aggregation", "Live Telemetry Dashboards"],
      icon: <Database className="text-[#7209b7]" size={40} />
    }
  ];

  return (
    <div className="bg-[#07090f] min-h-screen text-white font-['Syne',sans-serif] overflow-x-hidden pt-5">
      
      {/* 1. HERO SECTION - Massive & Text Heavy */}
      <section className="relative py-24 lg:py-40 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d17] to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <FadeIn>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-10 max-w-6xl mx-auto">
              Hardened Solutions <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] via-[#00d4ff] to-[#7209b7]">
                For Complex Scale.
              </span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-3xl mx-auto mb-16">
              Dyzen Labs engineers deployable, logic-driven systems that solve specific operational bottlenecks. We bypass generic templates to provide your enterprise with high-performance, asynchronous software infrastructure that executes flawlessly under massive load.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-14 py-6 bg-white text-black font-black text-[14px] tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-2xl">
                REQUEST ARCHITECTURE AUDIT
              </Link>
              <Link to="/docs" className="px-14 py-6 border border-white/20 text-white font-black text-[14px] tracking-widest hover:bg-white/10 transition-all">
                EXPLORE TECHNICAL DOCS
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. DEEP DIVE SOLUTION STACKS - Heavy Content Blocks */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-24">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Deployed Logic Ecosystems.</h2>
              <p className="text-white/40 text-xl max-w-3xl leading-relaxed">
                Our solutions are not theoretical frameworks. They are active, production-grade microservices that integrate directly into your operational stack to execute complex business logic at machine speed.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {deepSolutions.map((sol, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className="p-10 lg:p-16 rounded-[3rem] bg-[#0a0d17] border border-white/[0.06] hover:border-white/15 transition-all duration-500 grid lg:grid-cols-12 gap-16 items-center group">
                  
                  {/* Left: Text Heavy */}
                  <div className="lg:col-span-7">
                    <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] w-fit group-hover:bg-white/[0.06] transition-colors">
                      {sol.icon}
                    </div>
                    <h4 className="text-[12px] font-bold tracking-[0.2em] text-[#00d4ff] uppercase mb-4">{sol.subtitle}</h4>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight">{sol.title}</h3>
                    <p className="text-white/50 leading-relaxed text-lg mb-8">
                      {sol.description}
                    </p>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-8">
                      <p className="text-[11px] font-bold tracking-widest text-[#ff2d78] uppercase mb-2">Execution Logic</p>
                      <p className="text-white/70 text-[15px] leading-relaxed">{sol.executionLogic}</p>
                    </div>
                    <Link to="/docs" className="inline-flex items-center gap-2 text-[13px] font-bold text-white/60 hover:text-white transition-all pb-1 border-b border-white/20 hover:border-white">
                      VIEW API INTEGRATION SPECS <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Right: Feature List & Visuals */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="w-full h-48 rounded-3xl overflow-hidden border border-white/10 relative">
                       <img 
                        src={`https://images.pexels.com/photos/${i === 0 ? '546819' : i === 1 ? '3183150' : '1181675'}/pexels-photo-${i === 0 ? '546819' : i === 1 ? '3183150' : '1181675'}.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2`} 
                        alt={sol.title} 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d17] to-transparent"></div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                      <p className="text-[11px] font-bold tracking-widest text-white/30 uppercase mb-6">Core Capabilities</p>
                      <ul className="space-y-5">
                        {sol.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-[14px] font-bold text-white/80">
                            <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" /> 
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTEGRATION ARCHITECTURE - High Technical Density */}
      <section className="py-32 bg-[#0a0d17]/50 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <p className="text-[12px] font-bold tracking-[0.3em] text-[#ff2d78] mb-6 uppercase">System Interoperability</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Plugs directly into your existing operational stack.</h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              We do not force you to abandon your current software. Our solutions are engineered with API-first architecture, allowing our execution engines to run seamlessly on top of your legacy databases, CRMs, and ERPs.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <TerminalSquare className="text-[#00d4ff]" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-1">RESTful & GraphQL APIs</h4>
                  <p className="text-[13px] text-white/40">Secure, documented endpoints for custom data pushing.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <Network className="text-[#7209b7]" size={28} />
                <div>
                  <h4 className="font-bold text-white mb-1">Event-Driven Webhooks</h4>
                  <p className="text-[13px] text-white/40">Instantaneous execution triggered by your system events.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative rounded-[3rem] p-10 bg-[#07090f] border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-[#ff2d78]/50 to-transparent"></div>
              <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-6">Integration Pipeline</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex gap-6">
                  <div className="text-[10px] font-mono mt-1 text-white/30">01</div>
                  <div>
                    <h5 className="font-bold text-white mb-2">Auth & Handshake</h5>
                    <p className="text-sm text-white/40">Secure token exchange via OAuth 2.0 protocols.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[10px] font-mono mt-1 text-white/30">02</div>
                  <div>
                    <h5 className="font-bold text-white mb-2">Data Ingestion</h5>
                    <p className="text-sm text-white/40">High-throughput payload processing via Kafka clusters.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[10px] font-mono mt-1 text-white/30">03</div>
                  <div>
                    <h5 className="font-bold text-white mb-2">Logic Execution</h5>
                    <p className="text-sm text-white/40">Sub-millisecond processing inside our core engine.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. SECURITY & GOVERNANCE - Heavy Enterprise Trust */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Enterprise-Grade Governance.</h2>
            <p className="text-white/40 text-xl max-w-3xl mx-auto mb-20 leading-relaxed">
              When executing automated logic at scale, security is not optional. Our entire infrastructure is wrapped in a Zero-Trust security model, ensuring your proprietary operational data remains impenetrable.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-10 rounded-3xl border border-white/5 text-left">
                <Lock className="text-green-500 mb-6" size={36} />
                <h4 className="text-xl font-bold mb-4">AES-256 Encryption</h4>
                <p className="text-white/40 text-[15px] leading-relaxed">All data is encrypted both in transit and at rest. We utilize military-grade cryptographic standards to ensure data integrity across all nodes.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-10 rounded-3xl border border-white/5 text-left">
                <ShieldCheck className="text-[#00d4ff]" size={36} />
                <h4 className="text-xl font-bold mb-4">Zero-Trust Architecture</h4>
                <p className="text-white/40 text-[15px] leading-relaxed">Continuous verification protocols. Every microservice within our ecosystem requires explicit cryptographic authentication before data exchange.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-10 rounded-3xl border border-white/5 text-left">
                <Layers className="text-[#ff2d78]" size={36} />
                <h4 className="text-xl font-bold mb-4">Isolated Deployment</h4>
                <p className="text-white/40 text-[15px] leading-relaxed">Your logic runs in logically isolated container environments, ensuring that high-load spikes do not cause cross-tenant performance degradation.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. MEASURABLE ROI MATRIX */}
      

      {/* 6. FINAL CTA - Direct and Professional */}
      <section className="py-40 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7209b7]/10 pointer-events-none"></div>
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">Deploy Hardened Logic <br/> Into Your Business.</h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
              Stop relying on fragmented manual processes. Let Dyzen Labs engineer a unified, logic-driven technical foundation for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/contact" className="w-full sm:w-auto px-16 py-6 bg-white text-black font-black tracking-widest text-[14px] hover:bg-[#ff2d78] hover:text-white transition-all shadow-2xl">
                REQUEST TECHNICAL AUDIT
              </Link>
              <Link to="/docs" className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white font-black tracking-widest text-[14px] hover:bg-white/10 transition-all">
                VIEW PLATFORM SPECS
              </Link>
            </div>
            <p className="mt-12 text-white/20 text-[11px] font-bold tracking-[0.4em] uppercase">Engineered & Maintained in Jaipur, India</p>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}