import React from "react";
import { motion } from "framer-motion";
import { 
  Target, Hexagon, Triangle, MapPin, 
  ArrowRight, TerminalSquare, Layers, Cpu 
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
      desc: "While design matters, infrastructure scales. Our primary engineering hours are spent optimizing database queries, reducing latency, and hardening security layers.",
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
      
      {/* 1. HERO SECTION - Corporate/Enterprise Vibe */}
      <section className="relative py-24 lg:py-40 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-[12px] font-bold tracking-[0.4em] text-white/30 uppercase mb-8">The Engineering Collective</p>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-10 max-w-5xl mx-auto">
              Engineering the standard <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#00d4ff]">for automated scale.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-3xl mx-auto mb-16">
              Dyzen Labs was established with a singular directive: to replace rigid, manual legacy workflows with high-performance, asynchronous logic engines. We build the infrastructure that modern enterprises run on.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-14 py-6 bg-white text-black font-black text-[14px] tracking-widest hover:bg-[#00d4ff] hover:text-white transition-all shadow-2xl">
                SPEAK WITH OUR TEAM
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE DYZEN PARADIGM (Story Replacement) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dyzen Operations" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#07090f]/30 mix-blend-multiply"></div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Software should adapt to reality.</h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                The enterprise software industry has fundamentally broken its promise. Instead of increasing efficiency, most generic platforms force businesses to adapt their unique operational workflows to fit rigid, pre-built templates. This creates operational debt.
              </p>
              <p>
                At Dyzen Labs, we engineer from the ground up. We do not aggregate third-party tools; we deploy proprietary, microservices-based platforms that mirror your exact business logic. 
              </p>
              <p>
                Our systems are currently deployed across high-concurrency environments, automating data pipelines, marketing infrastructure, and core administrative protocols with zero latency.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. OPERATING PRINCIPLES */}
      <section className="py-32 bg-white/[0.01] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Operating Principles.</h2>
              <p className="text-white/40 text-xl max-w-2xl mx-auto">
                These are the strict engineering doctrines that govern every line of code we push to production.
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

      {/* 4. HQ & OPERATIONS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-[12px] font-bold tracking-[0.3em] text-[#ff2d78] mb-6 uppercase">Base of Operations</p>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Headquartered in Jaipur, India.</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">
                Our central nervous system is based in Jaipur. From here, our engineering collective monitors, maintains, and pushes updates to automated infrastructures deployed across the country.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-[14px] font-bold text-white/70">
                  <MapPin size={18} className="text-[#00d4ff]" /> Engineering & Architecture
                </li>
                <li className="flex items-center gap-3 text-[14px] font-bold text-white/70">
                  <MapPin size={18} className="text-[#00d4ff]" /> 24/7 Telemetry Monitoring
                </li>
                <li className="flex items-center gap-3 text-[14px] font-bold text-white/70">
                  <MapPin size={18} className="text-[#00d4ff]" /> Client Systems Deployment
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[13px] font-bold text-white/60 hover:text-white transition-all pb-1 border-b border-white/20 hover:border-white">
                VISIT OUR HEADQUARTERS <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="relative rounded-[3rem] p-4 bg-white/[0.02] border border-white/5">
                <img 
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jaipur HQ Operations" 
                  className="rounded-[2.5rem] w-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                {/* Overlay UI element showing "Live" status */}
                <div className="absolute top-10 left-10 bg-[#0a0d17]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Network Status</p>
                    <p className="text-[13px] font-black text-white">All Systems Nominal</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-40 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d17] to-transparent pointer-events-none"></div>
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">Join the infrastructure.</h2>
            <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto">
              Whether you are an enterprise looking to automate, or a developer looking to build at scale-connect with our team.
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