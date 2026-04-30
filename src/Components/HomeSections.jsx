import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, ArrowRight, Target, Zap, LayoutTemplate, GitMerge, Terminal, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

// Reusable scroll-reveal animation wrapper
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
  // Array duplicated for seamless infinite scroll
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

  // We double the array so the marquee loop never breaks
  const infiniteTechStack = [...techStack, ...techStack, ...techStack];

  const capabilities = [
    {
      title: "Digital Marketing Frameworks",
      description: "We are designing data-driven marketing infrastructures that will allow brands to track user journeys clearly, aimed at reducing wasted ad spend and maximizing organic reach.",
      icon: <Target className="text-[#ff2d78]" size={32} />
    },
    {
      title: "Custom Web Architectures",
      description: "Engineering scalable web applications from the ground up. Our focus will remain on clean codebases that are built to handle future expansion without requiring complete rewrites.",
      icon: <Code2 className="text-[#00d4ff]" size={32} />
    },
    {
      title: "Process Automation Systems",
      description: "Developing custom IT solutions intended to replace repetitive manual workflows with reliable, automated digital processes tailored to your specific operational needs.",
      icon: <Zap className="text-[#7209b7]" size={32} />
    }
  ];

  return (
    <div className="bg-[#07090f] w-full text-white overflow-hidden pb-24 font-['Syne',sans-serif]">
      
      {/* 1. INFINITE TECH STACK MARQUEE */}
      <section className="py-12 border-y border-white/[0.04] bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <p className="text-center text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Technologies We Are Adopting
          </p>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full flex overflow-hidden mask-image-gradient">
          <div className="absolute inset-0 z-10 w-full pointer-events-none bg-gradient-to-r from-[#07090f] via-transparent to-[#07090f]" />
          
          <motion.div
            className="flex w-max gap-6 px-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Adjust speed here
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

      {/* 2. THE OBSERVATION / APPROACH */}
      <section className="py-28 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/[0.08] group">
                <div className="absolute inset-0 bg-[#0a0d17]/40 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Engineering environment" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#ff2d78] mb-6 uppercase">
                The Dyzen Approach
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8">
                Digital strategy that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#00d4ff]">
                  adapts to reality.
                </span>
              </h2>
              
              <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                <p>
                  Most companies end up adjusting their workflows to fit the rigid software or marketing packages they buy. Dyzen Labs is being structured around a different principle-that technology and marketing should be shaped entirely by the specific business problem.
                </p>
                <p>
                  We are establishing our operations in Jaipur to work directly with businesses across India. Our intent is to handle everything from initial requirement scoping to final deployment, deliberately avoiding the layers of overhead that slow down most IT engagements.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/[0.02] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#00d4ff] mb-4 uppercase">
                Core Focus Areas
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Engineering tools designed for modern scale.
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

      {/* 4. NEW SECTION: DEVELOPMENT METHODOLOGY (Strictly forward-looking tense) */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right" className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#7209b7] mb-6 uppercase">
                Execution Blueprint
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                How we intend to construct your systems.
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1"><GitMerge className="text-[#00d4ff]" size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white/90 mb-2">Requirement Deconstruction</h4>
                    <p className="text-white/40 text-[15px] leading-relaxed">Before writing a single line of code, we will isolate the exact operational bottleneck. Technology is secondary to logic.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Cpu className="text-[#ff2d78]" size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white/90 mb-2">Modular Engineering</h4>
                    <p className="text-white/40 text-[15px] leading-relaxed">Platforms will be built using independent modules. If your business pivots in a year, the architecture is designed to adapt, not break.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2">
              <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] border border-white/[0.08] group">
                <div className="absolute inset-0 bg-[#00d4ff]/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Code structure and architecture" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 5. NEW SECTION: THE COLLECTIVE (Avoiding "Seasoned Team" claims) */}
      <section className="py-24 bg-[#0a0d17] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-6">The Engineering Collective</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12">
              Based in Jaipur, Dyzen Labs is assembling a group of developers and strategists who prefer complex problem-solving over templated outputs. We are building a culture focused purely on clean execution.
            </p>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full max-w-4xl mx-auto h-[400px] object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
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
              Whether you are looking to establish a digital footprint from scratch or seeking to replace fragmented legacy systems, our platforms are being developed to provide a unified, highly focused technical foundation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-[15px] hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                Register Early Interest <ArrowRight size={18} />
              </Link>
              <Link
                to="/story"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-colors"
              >
                Read The Dyzen Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}