"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, HardDrive, ArrowRight } from "lucide-react";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import NavigationDock from "@/components/NavigationDock";
import AboutSection from "@/components/AboutSection";
import { useTextScramble } from "@/hooks/useTextScramble";

export default function Home() {
  const [latency, setLatency] = useState("24ms");
  const [time, setTime] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  
  // Scramble engine parameters
  const nameEngine = useTextScramble();
  const subEngine = useTextScramble();

  useEffect(() => {
    // Run the high-tech boot decryption sequence on launch
    nameEngine.scramble("ENGR. MAQUEE REINHART P. VISITACION");
    subEngine.scramble("Computer Engineering graduate specializing in full-stack development and cloud infrastructure.");

    // Dynamic system diagnostics tracking clock
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0] + " PST");
    }, 1000);

    // Random micro-fluctuations in ping latency simulation
    const latencyTimer = setInterval(() => {
      setLatency(`${Math.floor(Math.random() * 12) + 18}ms`);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(latencyTimer);
    };
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = `Unknown command: '${cmd}'. Type 'help' for available matrix pipelines.`;
    
    if (cmd === "help") {
      response = "Available protocols: 'help', 'clear', 'about', 'nodes', 'chronicles', 'coordinates'.";
    } else if (cmd === "about") {
      response = "Executing scroll routing to core bio matrix dashboard...";
      document.getElementById("about-port")?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "nodes") {
      response = "Executing scroll routing to project clusters...";
      document.getElementById("projects-port")?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "chronicles") {
      response = "Routing data to corporate experience archives...";
      document.getElementById("experience-port")?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "coordinates") {
      response = "Location Profile: Pulilan, Bulacan, Region III, PH.";
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    }

    setTerminalLogs(prev => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput("");
  };

  return (
    <div id="core" className="relative w-full min-h-screen bg-[#040406] text-white selection:bg-cyber-primary/20 selection:text-cyber-primary">
      
      {/* Structural Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />
      
      {/* Sticky Floating Interaction Sidebar Panel */}
      <NavigationDock />

      {/* SECTION 1: HERO VIEWPORT MODULE */}
      <div id="hero-port" className="min-h-screen w-full flex flex-col justify-center items-center relative px-4 md:px-8 z-10 max-w-6xl mx-auto">
        
        {/* Upper Diagnostics Status Ribbon Header */}
        <div className="absolute top-8 left-4 right-4 flex justify-between items-center text-[10px] text-cyber-primary/60 uppercase tracking-widest border-b border-cyber-primary/10 pb-2 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-ping" />
            <span>System: Online</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>Clock: {time || "00:00:00 PST"}</span>
            <span>Ping: {latency}</span>
          </div>
          <div>Loc: Pulilan, Bulacan [PH]</div>
        </div>

        {/* Core Main Terminal Wrapper Block */}
        <div className="w-full bg-[#0a0a0f]/80 backdrop-blur-md border border-cyber-primary/20 rounded-lg p-6 md:p-8 shadow-[0_0_40px_rgba(0,240,255,0.02)] mt-12">
          
          <div className="flex items-center justify-between border-b border-cyber-primary/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-cyber-primary/20" />
              <span className="text-xs text-cyber-primary/40 ml-2 font-mono">core_matrix_v4.sh</span>
            </div>
            <div className="text-xs text-cyber-primary/40 flex items-center gap-2 font-mono">
              <Terminal size={12} />
              <span>Bash Prompt</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-cyber-primary text-xs tracking-wider uppercase font-mono mb-2">// IDENTITY_DECRYPT_STREAM...</p>
              
              {/* Coded Glitch Typography Header */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-none font-sans cyber-glitch">
                {nameEngine.text || "ENGR. MAQUEE REINHART P. VISITACION"}
              </h1>

              <p className="text-cyber-text/90 text-sm md:text-base max-w-3xl leading-relaxed font-sans min-h-[48px]">
                {subEngine.text}
              </p>
            </div>

            {/* Hardware System Diagnostic Elements Array */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-cyber-primary/10 py-4 my-6 font-mono">
              <div className="flex items-center gap-3 text-xs">
                <Cpu size={16} className="text-cyber-primary" />
                <div>
                  <p className="text-cyber-primary/50 uppercase text-[9px]">Architecture</p>
                  <p className="text-white/90 font-semibold">React.js / Node.js</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <HardDrive size={16} className="text-cyber-secondary" />
                <div>
                  <p className="text-cyber-primary/50 uppercase text-[9px]">Database Core</p>
                  <p className="text-white/90 font-semibold">PostgreSQL / Supabase</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Terminal size={16} className="text-cyber-accent" />
                <div>
                  <p className="text-cyber-primary/50 uppercase text-[9px]">Ops Container</p>
                  <p className="text-white/90 font-semibold">Docker / CI/CD Frameworks</p>
                </div>
              </div>
            </div>

            {/* LIVE COMMAND PROMPT SUB-CONSOLE SYSTEM */}
            <div className="bg-black/40 border border-white/5 rounded p-4 font-mono text-xs space-y-2 max-h-40 overflow-y-auto">
              <div className="text-white/30 text-[10px]">// ACTIVE CORE SHELL — TYPE 'help' FOR MAP PIPELINES</div>
              
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={log.startsWith(">") ? "text-cyber-primary" : "text-white/70"}>
                  {log}
                </div>
              ))}

              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
                <span className="text-cyber-accent animate-pulse">maquee_matrix_~$</span>
                <input 
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                  placeholder="enter command pipeline..."
                />
              </form>
            </div>

            {/* Master Navigation Route Anchors */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono">
              <button 
                onClick={() => document.getElementById("projects-port")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-6 py-2.5 bg-transparent overflow-hidden rounded border border-cyber-primary text-xs text-cyber-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] cursor-pointer"
              >
                <span className="absolute inset-0 bg-cyber-primary/10 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  [ ACCESS PROJECTS ] <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById("contact-port")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2.5 bg-transparent border border-white/10 rounded text-xs text-white/60 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              >
                [ SECURE_COMMUNICATION ]
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER FLOW PORTFOLIO SEGMENTS MODULES */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* About Profile Module Segment */}
        <div id="about-port" className="scroll-mt-24">
          <AboutSection />
        </div>

        <div id="projects-port" className="scroll-mt-24">
          <ProjectsSection />
        </div>

        <div id="experience-port" className="scroll-mt-24">
          <ExperienceSection />
        </div>

        <div id="contact-port" className="scroll-mt-24">
          <ContactSection />
        </div>
      </div>

    </div>
  );
}