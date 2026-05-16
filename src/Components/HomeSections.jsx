import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, ArrowRight, Target, Zap, LayoutTemplate, GitMerge, Terminal, Cpu } from "lucide-react";
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

export default function HomeSections() {
  const techStack = [
    { name: "React", icon: <LayoutTemplate size={16} /> },
    { name: "Node.js", icon: <Database size={16} /> },
    { name: "Next.js", icon: <Globe size={16} /> },
    { name: "TypeScript", icon: <Code2 size={16} /> },
    { name: "MongoDB", icon: <Database size={16} /> },
    { name: "Tailwind CSS", icon: <LayoutTemplate size={16} /> },
    { name: "Express.js", icon: <Terminal size={16} /> },
    { name: "Framer Motion", icon: <Zap size={16} /> },
  ];

  const infiniteTechStack = [...techStack, ...techStack, ...techStack];

  const capabilities = [
    {
      title: "Data Pipelines",
      description: "We deploy efficient data infrastructures that enable brands to monitor user interaction layers, optimizing workflow automation and organic conversion.",
      icon: <Target className="text-[#ff2d78]" size={32} />
    },
    {
      title: "Modular Web Architecture",
      description: "Engineering scalable web applications tailored for modern business logic. Our core focus remains on modular codebases designed for consistent performance and seamless deployment.",
      icon: <Code2 className="text-[#00d4ff]" size={32} />
    },
    {
      title: "Operational Logic Systems",
      description: "Providing targeted software solutions that replace manual legacy workflows with automated digital protocols integrated directly into your existing infrastructure.",
      icon: <Zap className="text-[#7209b7]" size={32} />
    }
  ];

  return (
    <div className="bg-[#07090f] w-full text-white overflow-hidden pb-24 font-['Syne',sans-serif]">
      
      {/* 1. TECH STACK MARQUEE */}
      <section className="py-12 border-y border-white/[0.04] bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <p className="text-center text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Core Infrastructure Stack
          </p>
        </div>
        
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute inset-0 z-10 w-full pointer-events-none bg-gradient-to-r from-[#07090f] via-transparent to-[#07090f]" />
          
          <motion.div
            className="flex w-max gap-6 px-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {infiniteTechStack.map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0a0d17] border border-white/5 hover:border-white/20 transition-colors whitespace-nowrap"
              >
                <span className="text-white/40">{tech.icon}</span>
                <span className="text-[14px] font-semibold tracking-wider text-white/70">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. THE APPROACH - Removed Nationwide Claims */}
      <section className="py-28 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/[0.08] group">
                <div className="absolute inset-0 bg-[#0a0d17]/40 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Production Engineering" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#ff2d78] mb-6 uppercase">
                The Dyzen Standard
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8">
                Software solutions that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#00d4ff]">
                  execute reliably.
                </span>
              </h2>
              
              <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                <p>
                  Generic software often forces businesses to compromise their unique internal workflows. Dyzen Labs operates on the principle that technology and logic must be engineered to fit the specific operational reality of your startup, not the other way around.
                </p>
                <p>
                  From our headquarters in Jaipur, we partner with growing businesses to build scalable digital infrastructure. We manage the development lifecycle from technical scoping to deployment, ensuring our systems deliver measurable performance.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES - Removed "production-grade" & "enterprise" */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/[0.02] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#00d4ff] mb-4 uppercase">
                Product Ecosystem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Hardened tools engineered for reliable scaling.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="h-full p-8 rounded-2xl bg-[#0a0d17]/50 border border-white/[0.05] hover:bg-white/[0.02] transition-colors group">
                  <div className="mb-6 p-4 rounded-xl bg-white/[0.03] inline-block group-hover:scale-110 transition-transform duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white/90">{cap.title}</h3>
                  <p className="text-white/40 leading-relaxed text-[15px]">
                    {cap.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right" className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#7209b7] mb-6 uppercase">
                Operational Logic
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                How we engineer your technical infrastructure.
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1"><GitMerge className="text-[#00d4ff]" size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white/90 mb-2">Requirement Synthesis</h4>
                    <p className="text-white/40 text-[15px] leading-relaxed">We isolate the exact technical bottleneck within your stack before deployment. Our engineering focuses purely on logic-driven results.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Cpu className="text-[#ff2d78]" size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white/90 mb-2">Micro-Modular Deployment</h4>
                    <p className="text-white/40 text-[15px] leading-relaxed">Platforms are deployed using independent modules. As your business evolves, our architecture adapts to new data loads seamlessly.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2">
              <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] border border-white/[0.08] group">
                <div className="absolute inset-0 bg-[#00d4ff]/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cloud Architecture" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 5. THE COLLECTIVE - Removed Fake Team Image & Added Actual Evidence */}
      <section className="py-24 bg-[#0a0d17] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Engineering & Architecture</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12">
              Dyzen Labs is focused on building scalable software and automated workflows. We maintain a culture of pure, rapid execution and technical transparency, writing clean modular code from the ground up.
            </p>
            
            {/* Matte Code Terminal Evidence - Replaces Fake Stock Image */}
            <div className="w-full max-w-3xl mx-auto rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden text-left shadow-2xl">
              <div className="w-full h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                 <span className="ml-4 text-[11px] font-mono text-white/40">dyzen-api-router.js</span>
              </div>
              <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                  <p><span className="text-[#ff2d78]">import</span> {"{ Router }"} <span className="text-[#ff2d78]">from</span> <span className="text-[#00d4ff]">'express'</span>;</p>
                  <p><span className="text-[#ff2d78]">import</span> {"{ authMiddleware }"} <span className="text-[#ff2d78]">from</span> <span className="text-[#00d4ff]">'../middleware/auth'</span>;</p>
                  <p className="mt-4"><span className="text-[#7209b7]">const</span> router = Router();</p>
                  <p className="mt-4 text-white/40">{'// Initialize core data pipeline'}</p>
                  <p>router.<span className="text-[#00d4ff]">post</span>(<span className="text-[#ffbd2e]">"/api/v1/sync"</span>, authMiddleware, <span className="text-[#ff2d78]">async</span> (req, res) =&gt; {"{"}</p>
                  <p className="pl-4"><span className="text-[#7209b7]">try</span> {"{"}</p>
                  <p className="pl-8"><span className="text-[#7209b7]">const</span> payload = req.body;</p>
                  <p className="pl-8"><span className="text-[#7209b7]">const</span> status = <span className="text-[#ff2d78]">await</span> ProcessEngine.<span className="text-[#00d4ff]">execute</span>(payload);</p>
                  <p className="pl-8"><span className="text-[#7209b7]">return</span> res.<span className="text-[#00d4ff]">status</span>(200).<span className="text-[#00d4ff]">json</span>({"{"} success: <span className="text-[#ff5f56]">true</span>, status {"}"});</p>
                  <p className="pl-4">{"}"} <span className="text-[#7209b7]">catch</span> (error) {"{"}</p>
                  <p className="pl-8"><span className="text-[#7209b7]">return</span> res.<span className="text-[#00d4ff]">status</span>(500).<span className="text-[#00d4ff]">json</span>({"{"} error: <span className="text-[#ffbd2e]">"Logic exception"</span> {"}"});</p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"});"}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ff2d78]/10 to-[#00d4ff]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Built for operations that have <br /> outgrown standard templates.
            </h2>
            <p className="text-white/50 text-lg mb-12 max-w-2xl mx-auto">
              Our platforms provide a unified technical foundation for businesses looking to scale with logic-driven automation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-[15px] hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                Start Platform Integration <ArrowRight size={18} />
              </Link>
              <Link
                to="/platform"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-colors"
              >
                Explore Platform Features
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}