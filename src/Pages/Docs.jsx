import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Key, Code2, Server, ShieldCheck, 
  ArrowRight, Database, Workflow, CheckCircle2, 
  Cpu, Copy, Activity, FileJson, AlertTriangle
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
  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0d17] group w-full">
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
      <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase">{title}</span>
      <Copy size={14} className="text-white/30 group-hover:text-white/80 cursor-pointer transition-colors" />
    </div>
    <div className="p-6 overflow-x-auto">
      <pre className="font-mono text-[13px] leading-relaxed">
        {language === "bash" ? (
          <code className="text-[#00d4ff]">{code}</code>
        ) : language === "javascript" ? (
          <code className="text-[#ffbd2e]">{code}</code>
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
      desc: "Triggers a predefined operational logic sequence. Requires a valid payload containing the action scope and target module parameters.",
      color: "text-green-500",
      bg: "bg-green-500/10 border-green-500/20"
    },
    {
      method: "GET",
      path: "/v1/telemetry/metrics",
      desc: "Retrieves execution data and system performance metrics. Supports query parameters for filtering by date range or module ID.",
      color: "text-blue-500",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      method: "POST",
      path: "/v1/data/ingest",
      desc: "Pushes raw multi-channel data into the sanitization pipeline. Accepts batched JSON arrays up to 5MB per request.",
      color: "text-green-500",
      bg: "bg-green-500/10 border-green-500/20"
    },
    {
      method: "DELETE",
      path: "/v1/sessions/terminate",
      desc: "Force-closes an active operational session. Useful for automated security protocols when anomalous behavior is detected.",
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
            <p className="text-[12px] font-bold tracking-[0.3em] text-[#00d4ff] mb-6 uppercase">API Reference (v1.2.0)</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Developer <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#00d4ff]">Documentation.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              Integrate the Dyzen Labs core engine directly into your technical stack. Explore our RESTful API endpoints, Webhook configurations, and data structures to automate your business logic programmatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-10 py-4 bg-white text-black font-black text-[13px] tracking-widest hover:bg-[#00d4ff] hover:text-white transition-all shadow-xl">
                GET API KEYS
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#7209b7]/10 blur-3xl rounded-full"></div>
              <CodeSnippet 
                title="Quick Start: Ping the Engine" 
                language="bash"
                code={`curl -X GET "{{BASE_URL}}/v1/health" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`} 
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. AUTHENTICATION & SECURITY */}
      <section className="py-32 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Authentication</h2>
              <p className="text-white/40 text-[15px] leading-relaxed mb-6">
                The Dyzen Labs API uses API keys to authenticate requests. You can generate your live and test environment keys from your developer dashboard.
              </p>
              <div className="p-5 rounded-xl bg-[#ff2d78]/5 border border-[#ff2d78]/20 mb-8 flex gap-4">
                <AlertTriangle className="text-[#ff2d78] shrink-0 mt-0.5" size={18} />
                <p className="text-[13px] text-white/60 leading-relaxed">
                  <strong className="text-white">Security Notice:</strong> Never expose your secret API keys in client-side code (like React, Vue, or native apps). All requests should be routed through your own backend server to protect your credentials.
                </p>
              </div>
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
                    <h5 className="font-bold text-sm">Key Rotation</h5>
                    <p className="text-[12px] text-white/40">Keys can be rolled with zero downtime.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="shadow-2xl">
                <CodeSnippet 
                  title="Example: Authentication Header Format" 
                  language="bash"
                  code={`// Include this header in all API requests
Authorization: Bearer sk_live_abc123def456ghi789jkl`} 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. CORE ENDPOINTS LIST */}
      <section className="py-32 bg-[#0a0d17]/50 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Core Endpoints</h2>
              <p className="text-white/40 text-lg max-w-2xl">
                Interact programmatically with our execution engines. Below are the primary endpoints for triggering logic and fetching telemetry.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            {endpoints.map((ep, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-[#07090f] border border-white/10 hover:border-white/30 transition-all group cursor-pointer shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`text-[11px] font-black px-3 py-1.5 rounded border tracking-widest ${ep.color} ${ep.bg}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-[14px] text-white/80">{ep.path}</span>
                  </div>
                  <p className="text-white/40 text-[14px] leading-relaxed mb-6">
                    {ep.desc}
                  </p>
                  
                </div>
              </FadeIn>
            ))}
          </div>

          {/* NEW: Extended Payload Example to add length and technical depth */}
          <FadeIn delay={0.3}>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Payload Example: Logic Execution</h3>
                <p className="text-white/40 text-[15px] leading-relaxed">
                  When triggering an automation sequence via <code className="font-mono text-white/80">/v1/orchestration/execute</code>, your request must include the module ID and a strongly-typed data object. 
                </p>
                <CodeSnippet 
                  title="Request Payload (JSON)" 
                  language="json"
                  code={`{
  "module_id": "mod_72b3a9",
  "sync_mode": "async",
  "data": {
    "user_id": "usr_9921",
    "trigger_source": "checkout_abandoned",
    "metadata": {
      "cart_value": 145.50,
      "currency": "USD"
    }
  }
}`} 
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-transparent select-none max-lg:hidden">.</h3>
                <p className="text-white/40 text-[15px] leading-relaxed">
                  The API will immediately return an execution queue ID. You can use this ID to poll for status, or wait for a webhook notification upon completion.
                </p>
                <CodeSnippet 
                  title="Success Response (202 Accepted)" 
                  language="json"
                  code={`{
  "status": "queued",
  "execution_id": "exe_8892jd1",
  "estimated_latency_ms": 120,
  "timestamp": "2026-05-16T14:22:01Z",
  "links": {
    "status": "{{BASE_URL}}/v1/telemetry/status/exe_8892jd1"
  }
}`} 
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NEW SECTION: Standardized Error Codes */}
      <section className="py-32 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Error Codes</h2>
            <p className="text-white/40 text-lg max-w-2xl mb-12">
              Dyzen Labs uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the <code className="font-mono text-white/80">2xx</code> range indicate success, while <code className="font-mono text-white/80">4xx</code> and <code className="font-mono text-white/80">5xx</code> indicate errors.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#161b22]">
                  <tr>
                    <th className="p-5 text-[12px] font-bold tracking-widest text-white/50 uppercase border-b border-white/10">HTTP Status</th>
                    <th className="p-5 text-[12px] font-bold tracking-widest text-white/50 uppercase border-b border-white/10">Description</th>
                    <th className="p-5 text-[12px] font-bold tracking-widest text-white/50 uppercase border-b border-white/10">Resolution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#0a0d17]">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-5 font-mono text-[#00d4ff]">400 - Bad Request</td>
                    <td className="p-5 text-[14px] text-white/70">Required parameters were missing or incorrectly formatted.</td>
                    <td className="p-5 text-[14px] text-white/40">Check the response payload for exact missing fields.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-5 font-mono text-[#ff2d78]">401 - Unauthorized</td>
                    <td className="p-5 text-[14px] text-white/70">No valid API key provided.</td>
                    <td className="p-5 text-[14px] text-white/40">Ensure the Bearer token is passed correctly in headers.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-5 font-mono text-[#ffbd2e]">429 - Too Many Requests</td>
                    <td className="p-5 text-[14px] text-white/70">Rate limit exceeded for the current endpoint.</td>
                    <td className="p-5 text-[14px] text-white/40">Implement exponential backoff or request a limit increase.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-5 font-mono text-red-500">500 - Server Error</td>
                    <td className="p-5 text-[14px] text-white/70">Something went wrong on our end.</td>
                    <td className="p-5 text-[14px] text-white/40">These are rare. Contact engineering if the issue persists.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. WEBHOOKS & EVENT STREAMING */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          
          <FadeIn direction="right">
            {/* Matte Webhook Log UI Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl h-[420px] flex flex-col">
              <div className="w-full h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[11px] font-mono text-white/40">Webhook Payload Viewer</div>
              </div>
              <div className="p-6 font-mono text-[11px] leading-loose text-white/60 flex-1 relative overflow-hidden">
                 <p className="text-[#00d4ff]">POST /webhooks/events HTTP/1.1</p>
                 <p>Host: {"{{YOUR_WEBHOOK_ENDPOINT}}"}</p>
                 <p>X-Dyzen-Signature: t=171600...v1=a2b4c6...</p>
                 <p className="mt-4 text-white/40">{"{"}</p>
                 <p className="pl-4">"id": <span className="text-green-400">"evt_9s8d7f6g"</span>,</p>
                 <p className="pl-4">"type": <span className="text-green-400">"logic.execution.completed"</span>,</p>
                 <p className="pl-4">"created_at": <span className="text-green-400">1715840475</span>,</p>
                 <p className="pl-4">"data": {"{"}</p>
                 <p className="pl-8">"object": <span className="text-green-400">"execution_result"</span>,</p>
                 <p className="pl-8">"status": <span className="text-green-400">"success"</span>,</p>
                 <p className="pl-8">"latency_ms": <span className="text-[#ffbd2e]">42</span></p>
                 <p className="pl-4">{"}"}</p>
                 <p className="text-white/40">{"}"}</p>
                 
                 <div className="absolute bottom-4 left-6 flex items-center gap-2 text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded border border-[#00d4ff]/20">
                   <Activity className="animate-pulse" size={14} /> Listening for events...
                 </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Event-Driven Webhooks.</h2>
            <p className="text-white/40 text-lg leading-relaxed mb-8">
              Instead of polling our API, configure webhooks to receive real-time HTTP payloads whenever an operational event occurs in your environment.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Payload Signatures</h4>
                  <p className="text-white/40 text-[14px] leading-relaxed">We sign webhook events by including a <code className="font-mono text-white/70">X-Dyzen-Signature</code> header. Verify this HMAC-SHA256 hash using your webhook secret to ensure the payload is authentic and un-tampered.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Idempotency Guaranteed</h4>
                  <p className="text-white/40 text-[14px] leading-relaxed">Every payload includes a unique idempotency key to prevent duplicate processing on your servers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold mb-1">Automatic Retries</h4>
                  <p className="text-white/40 text-[14px] leading-relaxed">If your server fails to acknowledge the webhook (returns a non-2xx status code), our engine automatically retries up to 3 times with exponential backoff.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-40 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d17] to-transparent pointer-events-none"></div>
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Need custom platform <br/> integrations?</h2>
            <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">
              Our engineering team is available to assist with custom API configurations, system bridging, and specific deployment requirements.
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