import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, TerminalSquare, Coffee, ShieldAlert } from "lucide-react";
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

export default function Careers() {
  const [openJob, setOpenJob] = useState(null);

  const expectations = [
    {
      title: "Less Talking, More Building",
      desc: "We don't do three-hour planning meetings if a quick chat works. We prefer to spend our time actually writing code and testing marketing campaigns.",
      icon: <TerminalSquare className="text-[#00d4ff]" size={28} />
    },
    {
      title: "Quality Over Rush",
      desc: "We want things done right, not just done fast. If a piece of logic needs an extra day to be stable, we take that day. Broken software helps no one.",
      icon: <ShieldAlert className="text-[#ff2d78]" size={28} />
    },
    {
      title: "Small Team, Big Ownership",
      desc: "You will not be a small cog in a massive machine. If you build a feature here, you own the outcome. We trust our people to figure things out.",
      icon: <Coffee className="text-[#7209b7]" size={28} />
    }
  ];

  const jobs = [
    {
      id: "front-end",
      title: "React UI Developer",
      type: "Full-Time",
      location: "Jaipur, India",
      details: "We are looking for someone who knows how to make interfaces look clean and feel fast. You should be comfortable with React, Tailwind, and handling state management without making the code messy."
    },
    {
      id: "back-end",
      title: "Backend Developer (Node.js)",
      type: "Full-Time",
      location: "Jaipur, India",
      details: "We need a logic builder. Your job will be to set up secure databases and write APIs that do exactly what they are supposed to do, without unnecessary heavy frameworks."
    },
    {
      id: "marketing",
      title: "Digital Marketer",
      type: "Full-Time",
      location: "Jaipur, India",
      details: "If you know how to read raw data and set up campaigns that actually bring in revenue (not just likes), we want to talk to you. You will be helping us test and scale our client acquisition."
    }
  ];

  return (
    <div className="bg-[#04060c] min-h-screen text-white font-['Syne',sans-serif] selection:bg-[#00d4ff] selection:text-black">
      
      {/* 1. DIRECT TEXT HERO */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#00d4ff] mb-8 uppercase border-l-2 border-[#00d4ff] pl-4">
              Join Dyzen Labs
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-10">
              We are assembling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/80">
                the core group.
              </span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              We are a new company setting up our base in Jaipur. We are currently looking for people who care deeply about writing clean code and doing honest work, without the corporate drama.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. CRYSTAL CLEAR VISUAL GALLERY (Fixed Images Issue) */}
      <section className="py-20 bg-[#04060c]">
        <div className="max-w-7xl mx-auto px-8">
          
          <FadeIn>
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">The Environment</h2>
              <p className="text-white/50 text-lg max-w-2xl">
                A quiet, focused space where we figure things out together. No dark filters, just bright screens and clear logic.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {/* Main Massive Image - Fully bright and clear */}
            <FadeIn delay={0.1}>
              <div className="w-full aspect-[21/9] md:aspect-[21/7] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" 
                  alt="Developer working at desk" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            {/* Two Side-by-Side Images - Bright and clear */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0.2}>
                <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team discussion" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10">
                  <img 
                    src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Code on screen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT TO EXPECT */}
      <section className="py-24 border-y border-white/[0.05] bg-[#07090f]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">What it is like here.</h2>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {expectations.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-10 rounded-2xl bg-[#04060c] border border-white/[0.05] hover:border-[#00d4ff]/30 transition-colors">
                  <div className="p-4 rounded-xl bg-white/[0.02]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/50 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURRENT REQUIREMENTS (Minimal Accordion Style) */}
      <section className="py-24 bg-[#04060c]">
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Roles</h2>
            <p className="text-white/50 text-lg mb-12">
              If you see a fit below, we would love to hear from you. We are hiring directly in Jaipur.
            </p>
          </FadeIn>

          <div className="border-t border-white/10">
            {jobs.map((job) => (
              <div key={job.id} className="border-b border-white/10">
                <button
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                  className="w-full py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-[13px] font-bold text-white/40 uppercase tracking-widest">
                      <span>{job.type}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ChevronDown 
                    size={24} 
                    className={`text-white/50 transition-transform duration-300 ${openJob === job.id ? "rotate-180" : ""}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-white/60 text-lg leading-relaxed px-4">
                        <p className="mb-6">{job.details}</p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-[#00d4ff] font-bold hover:text-white transition-colors border-b border-[#00d4ff]/30 pb-1"
                        >
                          Apply for this role <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECT CTA */}
      <section className="py-32 text-center relative z-10 bg-[#07090f] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-8">Don't see your role?</h2>
            <p className="text-white/50 text-lg mb-10">
              If you think you can bring value to what we are building at Dyzen Labs, send us your details anyway. We are always keeping an eye out for good people.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-[15px] hover:bg-gray-200 transition-colors"
            >
              Send an Open Application <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}