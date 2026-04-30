import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Activity, Layers, Cpu, Code2, Shield, Network } from "lucide-react";
import { Link } from "react-router-dom";

// Smooth Scroll Reveal Component
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

export default function Builds() {
  const architectures = [
    {
      id: "01",
      title: "Marketing Attribution Engines",
      icon: <Activity className="text-[#ff2d78]" size={28} />,
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      context: "Marketing budgets are frequently drained by a lack of clear tracking. Standard analytics often fail to show the exact journey a user took before converting.",
      approach: "We are developing attribution infrastructures designed to map specific user touchpoints. By integrating custom tracking events, these systems will allow your marketing team to see exactly which campaigns yield actual revenue, cutting out the guesswork."
    },
    {
      id: "02",
      title: "Fragment-Free Operational Dashboards",
      icon: <Layers className="text-[#00d4ff]" size={28} />,
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      context: "As businesses expand, they typically adopt multiple disconnected software tools. This fragmentation leads to scattered data, manual copy-pasting, and operational friction.",
      approach: "Dyzen Labs is engineering centralized dashboard interfaces. Our focus is to build singular environments where your management team will be able to monitor logistics, HR inputs, or sales pipelines without ever leaving the platform."
    },
    {
      id: "03",
      title: "High-Load Web Architectures",
      icon: <Network className="text-[#7209b7]" size={28} />,
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      context: "Generic website builders break under complex databases or high concurrent traffic. Scaling them usually requires tearing the whole system down and starting over.",
      approach: "We are constructing web applications utilizing the React and Node.js ecosystems. These codebases are being structured modularly, ensuring that as your user base scales, the foundational architecture will naturally adapt to handle the increased load."
    },
    {
      id: "04",
      title: "Automated Logic Workflows",
      icon: <Cpu className="text-white" size={28} />,
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      context: "Human error in repetitive administrative tasks costs businesses thousands of hours annually. Manual data entry is not a sustainable growth strategy.",
      approach: "Our engineering team is designing custom script-based workflows intended to replace manual admin tasks. By connecting your existing APIs, we will build bridges that automatically transfer and process data between your business systems."
    }
  ];

  const deploymentSteps = [
    {
      step: "Phase 1",
      title: "Requirement Deconstruction",
      desc: "Before writing a single line of code, we will isolate the exact operational bottleneck. We intend to map your entire logic flow to ensure the software matches reality."
    },
    {
      step: "Phase 2",
      title: "Architecture Blueprinting",
      desc: "Our team will design the database schemas and UI/UX wireframes. You will have complete visibility into how the platform will function before development begins."
    },
    {
      step: "Phase 3",
      title: "Component Engineering",
      desc: "We will build the system in modular sprints. This approach ensures that individual features are thoroughly tested and structurally sound before integration."
    },
    {
      step: "Phase 4",
      title: "Deployment & Handoff",
      desc: "Upon completion, the system will be deployed to your servers. We will provide comprehensive documentation to ensure your internal team can navigate the new infrastructure."
    }
  ];

  return (
    <div className="bg-[#04060c] min-h-screen text-white font-['Syne',sans-serif]">
      
      {/* 1. GRAND HERO SECTION (Fixed Image Issue) */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden border-b border-white/[0.05]">
        {/* Background Image with heavy dark overlay for premium look */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" 
            alt="Engineering Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradients to blend image into the dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04060c] via-[#04060c]/80 to-[#04060c]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#04060c] via-transparent to-[#04060c]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-[11px] font-bold tracking-[0.3em] text-[#00d4ff] mb-8 uppercase flex items-center gap-3">
                <span className="w-8 h-px bg-[#00d4ff]"></span>
                Our Capabilities
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">
                Engineering <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                  beyond the template.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mb-12">
                Dyzen Labs is constructing digital frameworks for businesses that demand specific, custom-built logic over generic software packages. We are building systems designed to fit the problem, not the other way around.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e63946] text-white font-bold text-[15px] hover:bg-[#ff4d5a] transition-colors shadow-lg shadow-[#e63946]/20"
              >
                Initiate a Project Assessment <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY TEXT SECTION (Making content heavy) */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                  Software should conform to your operations.
                </h2>
              </div>
              <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                <p>
                  A common friction point in modern business is forcing a unique workflow into a rigid SaaS product. This inevitably leads to workarounds, manual data entries, and a fragmented tech stack.
                </p>
                <p>
                  We are setting up our infrastructure in Jaipur with a clear intent: to develop bespoke marketing and IT solutions that will mirror your exact operational realities. No bloated features, no unnecessary overheads-just clean, deployable logic.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. SECTOR CHALLENGE BLOCKS (Detailed & Deep) */}
      <section className="py-24 bg-[#07090f] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-8">
          
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold">Infrastructures We Are Developing</h2>
              <p className="text-white/40 mt-4 max-w-2xl text-lg">Detailed below are the specific technical domains our engineering collective is actively focused on constructing.</p>
            </div>
          </FadeIn>

          <div className="space-y-32">
            {architectures.map((item, index) => (
              <div key={item.id} className={`flex flex-col lg:flex-row gap-16 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Block */}
                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className="w-full lg:w-1/2">
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group bg-[#0a0d17] border border-white/[0.05]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                    />
                    {/* Modern Overlay Badge */}
                    <div className="absolute top-6 left-6 z-20 flex items-center justify-center px-4 py-2 rounded-full bg-[#04060c]/90 backdrop-blur-md border border-white/10 text-white/80 text-sm font-bold tracking-widest">
                      SYSTEM {item.id}
                    </div>
                  </div>
                </FadeIn>

                {/* Deep Text Block */}
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className="w-full lg:w-1/2">
                  <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">{item.title}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-3 border-l-2 border-[#ff2d78] pl-4">The Current Gap</h4>
                      <p className="text-white/60 leading-relaxed text-[16px] pl-4">{item.context}</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-3 border-l-2 border-[#00d4ff] pl-4">Our Technical Response</h4>
                      <p className="text-white/80 leading-relaxed text-[16px] pl-4">{item.approach}</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY / DEPLOYMENT SEQUENCE (New Structure per Guidelines) */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-6">The Deployment Sequence</h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg">
                We do not rush to write code. Our methodology is designed to isolate the problem first, ensuring that what we build is exactly what your operations require.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="h-full p-8 rounded-3xl bg-[#0a0d17] border border-white/[0.05] hover:bg-white/[0.02] transition-colors">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#00d4ff] uppercase block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed text-[15px]">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MASSIVE CTA SECTION */}
      <section className="py-32 border-t border-white/[0.05] relative overflow-hidden bg-[#0a0d17]">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#e63946]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <Box size={48} className="mx-auto mb-8 text-white/20" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to outline your <br /> next technical build?
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
              Whether you need to overhaul an existing system or construct a new platform from scratch, our team is preparing to scope your exact requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold text-[15px] hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2"
              >
                Send Us Your Requirements <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}