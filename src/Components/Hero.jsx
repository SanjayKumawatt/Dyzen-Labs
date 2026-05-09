import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion"; 
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const hues = [200, 220, 240, 260, 280, 300, 320];
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      r: Math.random() * 1.5 + 0.5,
      hue: hues[Math.floor(Math.random() * hues.length)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const midHue = (p1.hue + p2.hue) / 2;
            const alpha = (1 - dist / 140) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${midHue}, 70%, 65%, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p1.hue}, 80%, 70%, 0.75)`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-[0.55]" />;
};

export default function Hero() {
  return (
    <section
      className="pt-20 relative min-h-screen bg-[#07090f] overflow-hidden flex flex-col items-center justify-center"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        
        @keyframes breathe {  
          0%, 100% { transform: scale(1); opacity: 1; }  
          50% { transform: scale(1.12); opacity: 0.7; }
        }
      `}} />

      {/* Layer 1 - Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px]"
             style={{ background: "radial-gradient(circle, rgba(30,40,120,0.45) 0%, transparent 70%)", animation: "breathe 8s ease-in-out infinite" }} />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px]"
             style={{ background: "radial-gradient(circle, rgba(120,20,80,0.35) 0%, transparent 70%)", animation: "breathe 10s ease-in-out infinite 2s" }} />
      </div>

      <NetworkCanvas />

      <div className="absolute inset-0 pointer-events-none"
           style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)" }} />

      <div className="absolute top-1/2 left-0 w-full h-px"
           style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.12), rgba(0,212,255,0.1), transparent)" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow - Focus on Operational SaaS */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[12px] font-semibold tracking-[0.25em] uppercase text-white/30 mb-6"
        >
          SaaS Infrastructure · AI Deployed Systems · Jaipur HQ
        </motion.p>

        {/* H1 Headings - Concrete & Product Focused */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-black leading-[1.05] tracking-tight mb-5 w-full"
          style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
        >
          <span className="block text-white max-sm:text-3xl ">ENGINEERING</span>
          <span
            className="block max-sm:text-3xl"
            style={{
              background: "linear-gradient(90deg, #e63946 0%, #b5179e 50%, #7209b7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            SYSTEM INTELLIGENCE
          </span>
        </motion.h1>

        {/* Subtext - Removed "being built", kept the length same */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Rigid systems restrict your business operations. Dyzen Labs provides a modular ecosystem of AI-driven tools and cloud infrastructure modules that integrate directly into your operational workflow today.
        </motion.p>

        {/* CTA Buttons - Operational Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <Link
            to="/platform"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "#e63946" }}
          >
            Deploy Platform
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/docs"
            className="px-8 py-3.5 rounded-full text-[15px] font-semibold text-white/60 border border-white/15 hover:border-white/30 hover:text-white transition-all active:scale-95"
          >
            View Documentation
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-7"
          style={{ background: "linear-gradient(to bottom, rgba(230,57,70,0.5), transparent)" }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-28 pointer-events-none"
           style={{ background: "linear-gradient(to top, #07090f, transparent)" }} />
    </section>
  );
}