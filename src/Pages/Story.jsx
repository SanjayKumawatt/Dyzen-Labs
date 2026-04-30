import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Compass, Anchor, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

// Smooth Scroll Reveal Wrapper
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
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Story() {
  return (
    <div className="bg-[#04060c] min-h-screen text-white font-['Syne',sans-serif] selection:bg-[#ff2d78] selection:text-white">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <Quote className="text-[#00d4ff] opacity-50" size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-10">
              Technology should fix problems, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/80">
                not create new ones.
              </span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              The reason we started Dyzen Labs Private Limited is simple: most software today is built to look good to other developers, instead of fixing real, everyday business issues. We are setting up a workspace to change exactly how this is done.
            </p>
          </FadeIn>
        </div>
        
        {/* Subtle background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff2d78]/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* 2. ASYMMETRICAL IMAGE & STORY BLOCK */}
      <section className="py-24 border-t border-white/[0.05] bg-[#07090f]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Human/Team Image side */}
            <FadeIn direction="right" className="w-full lg:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/[0.08] group">
                <div className="absolute inset-0 bg-[#00d4ff]/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team discussion" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full uppercase border border-white/10">
                    The Human Element
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Narrative side */}
            <FadeIn direction="left" className="w-full lg:w-1/2">
              <h2 className="text-[11px] font-bold tracking-[0.3em] text-[#ff2d78] mb-6 uppercase">
                Why We Exist
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Cutting out the noise.
              </h3>
              
              <div className="space-y-8 text-lg text-white/50 leading-relaxed">
                <p>
                  If you look at how most IT agencies work right now, there is a clear pattern. A business comes to them with a specific need, and the agency tries to sell them a heavy, pre-packaged template that requires five different subscriptions just to run properly.
                </p>
                <p>
                  That is exactly what we want to avoid. The name "Dyzen" comes from a mix of staying highly dynamic while keeping absolute clarity (Zen) in the code and marketing campaigns we build.
                </p>
                <p>
                  Operating out of Jaipur, we are bringing together a small, focused group of developers and digital marketers. Our goal is not to chase a huge client list just to show off numbers. We simply want to work with operations that actually need clean, custom engineering.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 3. CORE BELIEFS (Manifesto Style Layout) */}
      <section className="py-32 bg-[#04060c]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-20 text-center">How We Work</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <FadeIn delay={0.1}>
              <div className="border-t-2 border-[#00d4ff] pt-6">
                <Compass className="text-[#00d4ff] mb-6" size={32} />
                <h4 className="text-2xl font-bold mb-4">Think Before Typing</h4>
                <p className="text-white/50 leading-relaxed">
                  We don't just start writing code. The software structure has to make sense for your daily tasks first. If it doesn't fit your routine, we won't build it.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-t-2 border-[#ff2d78] pt-6">
                <Anchor className="text-[#ff2d78] mb-6" size={32} />
                <h4 className="text-2xl font-bold mb-4">Real Numbers Only</h4>
                <p className="text-white/50 leading-relaxed">
                  In our marketing setups, we do not care about surface-level likes or views. We are setting up systems to track raw data that actually brings in revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border-t-2 border-[#7209b7] pt-6">
                <Cpu className="text-[#7209b7] mb-6" size={32} />
                <h4 className="text-2xl font-bold mb-4">Built to Grow</h4>
                <p className="text-white/50 leading-relaxed">
                  Things change fast. We are writing our code so that if your business takes a completely different turn next year, the platform can easily adapt without breaking.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 4. THE COLLECTIVE & OFFICE VIBE (Images) */}
      <section className="py-24 border-y border-white/[0.05] bg-[#07090f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Putting the work in.</h2>
                <p className="text-white/50 text-lg">
                  Being in Jaipur gives us the quiet focus we need to write good code and plan solid campaigns, far away from typical agency distractions.
                </p>
              </div>
              <Link to="/careers" className="text-[13px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#00d4ff] transition-colors border-b border-white/20 pb-1 flex items-center gap-2">
                Join the team <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Code and coffee" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Architecture planning" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. MINIMAL CTA */}
      <section className="py-32 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's talk about what you need.</h2>
            <p className="text-white/50 text-lg mb-10">
              We are currently taking on new projects that require custom development and clear marketing setups. Tell us what you are trying to build.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-[15px] hover:bg-gray-200 transition-colors"
            >
              Start the Conversation <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}