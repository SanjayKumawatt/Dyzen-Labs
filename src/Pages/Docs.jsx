import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Key, Code2, Server, ShieldCheck, 
  ArrowRight, Database, Workflow, CheckCircle2, 
  Cpu, Copy, Activity
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

// Reusable Code Block Component to simulate real Developer Docs
const CodeSnippet = ({ title, code, language = "json" }) => (
  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d17] group">
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
      <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase">{title}</span>
      <Copy size={14} className="text-white/30 group-hover:text-white/80 cursor-pointer transition-colors" />
    </div>
    <div className="p-6 overflow-x-auto">
      <pre className="font-mono text-[13px] leading-relaxed">
        {language === "bash" ? (
          <code className="text-[#00d4ff]">{code}</code>
        ) : (
          <code className="text-green-400">{code}</code>
        )}
      </pre>
    </div>
  </div>
);

export default function Docs() {
  const endpoints = [
    {
      method: "POST",
      path: "/v1/orchestration/execute",
      desc: "Triggers a predefined operational logic sequence.",
      color: "text-green-500",
      bg: "bg-green-500/10 border-green-500/20"
    },
    {
      method: "GET",
      path: "/v1/telemetry/metrics",
      desc: "Retrieves real-time execution data and latency metrics.",
      color: "text-blue-500",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      method: "POST",
      path: "/v1/data/ingest",
      desc: "Pushes raw multi-channel data into the sanitization pipeline.",
      color: "text-green-500",
      bg: "bg-green-500/10 border-green-500/20"
    },
    {
      method: "DELETE",
      path: "/v1/sessions/terminate",
      desc: "Force-closes an active operational session for security.",
      color: "text-red-500",
      bg: "bg-red-500/10 border-red-500/20"
    }
  ];

  return (
    <div className="bg-[#07090f] min-h-screen text-white font-['Syne',sans-serif] overflow-x-hidden pt-5">
      
      {/* 1. HERO SECTION - Developer Focused */}
      <section className="relative py-20 lg:py-32 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Developer <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#00d4ff]">Documentation.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              Integrate the Dyzen Labs core engine directly into your stack. Explore our RESTful API endpoints, Webhook configurations, and SDKs to automate your enterprise logic programmatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-10 py-4 bg-white text-black font-black text-[13px] tracking-widest hover:bg-[#00d4ff] hover:text-white transition-all">
                REQUEST API KEYS
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#7209b7]/10 blur-3xl rounded-full"></div>
              <CodeSnippet 
                title="Quick Start: Ping the Engine" 
                language="bash"
                code={`curl -X GET "[API_BASE_URL]/v1/health" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`} 
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. AUTHENTICATION & SECURITY */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Authentication</h2>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                The Dyzen Labs API uses API keys to authenticate requests. You can request your live and test environment keys from your account manager.
              </p>
              <p className="text-white/40 text-[15px] leading-relaxed mb-10">
                All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail with a <code className="text-[#ff2d78] font-mono bg-white/5 px-2 py-1 rounded">401 Unauthorized</code> error.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Key className="text-[#00d4ff]" size={20} />
                  <div>
                    <h5 className="font-bold text-sm">Bearer Token</h5>
                    <p className="text-[12px] text-white/40">Passed in the Authorization header.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <ShieldCheck className="text-green-500" size={20} />
                  <div>
                    <h5 className="font-bold text-sm">Rate Limiting</h5>
                    <p className="text-[12px] text-white/40">Standard limits: 10,000 req / minute.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <CodeSnippet 
                title="Example: Authentication Error Response" 
                language="json"
                code={`{
  "error": {
    "code": "authentication_failed",
    "message": "Invalid API key provided.",
    "doc_url": "https://dyzenlabsdigital.in/docs/errors#auth"
  },
  "status": 401,
  "timestamp": "2026-05-09T11:10:06Z"
}`} 
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. CORE ENDPOINTS LIST */}
      <section className="py-32 bg-[#0a0d17]/50 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Core Endpoints</h2>
              <p className="text-white/40 text-lg max-w-2xl">
                Interact programmatically with our execution engines. Below are the primary endpoints for triggering logic and fetching telemetry.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {endpoints.map((ep, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-[#07090f] border border-white/10 hover:border-white/30 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`text-[11px] font-black px-3 py-1.5 rounded border tracking-widest ${ep.color} ${ep.bg}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-[14px] text-white/80">{ep.path}</span>
                  </div>
                  <p className="text-white/40 text-[14px] leading-relaxed mb-6">
                    {ep.desc}
                  </p>
                  <Link to="/contact" className="text-[11px] font-bold text-[#00d4ff] uppercase tracking-widest flex items-center gap-2 hover:text-white transition-all">
                    Request Endpoint Access <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEBHOOKS & EVENT STREAMING */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="System Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/50 to-transparent flex items-end p-10">
                <div className="flex items-center gap-4">
                  <Activity className="text-[#ff2d78] animate-pulse" size={24} />
                  <span className="font-mono text-sm text-white/60">Subscribing to logic.execution.completed...</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Event-Driven Webhooks.</h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Instead of polling our API, configure webhooks to receive real-time HTTP payloads whenever an operational event occurs in your environment.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Idempotency Guaranteed</h4>
                  <p className="text-white/40 text-[14px]">Every payload includes a unique idempotency key to prevent duplicate processing on your servers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Automatic Retries</h4>
                  <p className="text-white/40 text-[14px]">If your server fails to acknowledge the webhook (non-200 status), we automatically retry with exponential backoff.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Payload Signatures</h4>
                  <p className="text-white/40 text-[14px]">Verify the authenticity of webhooks using HMAC-SHA256 signatures included in the headers.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. CTA SECTION - Contact Engineering */}
      <section className="py-40 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d17] to-transparent pointer-events-none"></div>
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Need custom enterprise <br/> integrations?</h2>
            <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">
              Our engineering team is available to assist with custom API configurations, ERP bridging, and dedicated single-tenant deployments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link 
                to="/contact" 
                className="w-full sm:w-auto px-12 py-5 bg-white text-black font-black tracking-widest text-[13px] hover:bg-blue-500 hover:text-white transition-all shadow-xl"
               >
                  TALK TO ENGINEERING
               </Link>
            </div>
            <p className="mt-10 text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">Built & Maintained in Jaipur, India</p>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}