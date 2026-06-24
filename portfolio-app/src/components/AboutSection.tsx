"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Download, Terminal, Cpu, Database, Layout, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const techCategories = [
    {
      id: "FRONTEND",
      icon: Layout,
      skills: ["React.js", "JavaScript", "TypeScript", "HTML / CSS", "Tailwind CSS", "Vite"],
    },
    {
      id: "BACKEND & DATA",
      icon: Database,
      skills: ["Node.js", "PostgreSQL", "Supabase", "REST APIs", "Express.js"],
    },
    {
      id: "TOOLS & DEVOPS",
      icon: Cpu,
      skills: ["Git", "GitHub", "Docker", "Figma", "VS Code", "Vercel CI/CD", "Render"],
    },
  ];

  return (
    <section id="about-port" className="py-20 border-t border-cyber-primary/10 mt-12 relative">
      {/* Structural Block Header */}
      <div className="mb-12">
        <div className="text-[10px] text-cyber-primary/50 font-mono tracking-widest uppercase mb-1">
          // IDENTITY_PROFILE_PARAMETERS
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-sans">
          <User size={18} className="text-cyber-primary" />
          ABOUT_CORE_MATRIX
        </h2>
      </div>

      {/* Top Half: Tri-Panel Info Cluster */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 font-sans">
        
        {/* Left Card: Core Operator Identity Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0f]/60 backdrop-blur-sm border border-white/5 rounded-lg p-6 flex flex-col items-center justify-between text-center relative group hover:border-cyber-primary/30 transition-all duration-300"
        >
          <div className="absolute top-3 right-3 font-mono text-[9px] text-white/20">[NODE_BIO_01]</div>
          
          <div className="flex flex-col items-center w-full">
            {/* Avatar Framework */}
            <div className="relative w-32 h-32 mb-4 rounded-full p-1 bg-gradient-to-b from-cyber-primary/40 to-transparent shadow-[0_0_20px_rgba(0,240,255,0.05)]">
              <div className="w-full h-full rounded-full bg-[#101015] overflow-hidden border border-white/10 relative">
                <Image 
                  src="/profile.png" 
                  alt="Engr. Maquee Reinhart P. Visitacion" 
                  fill
                  sizes="128px"
                  priority
                  className="object-cover object-top transition-all duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-widest whitespace-nowrap shadow-[0_0_8px_rgba(0,240,255,0.2)] animate-pulse">
                OPEN TO WORK
              </div>
            </div>

            <h3 className="font-bold text-white text-lg tracking-tight mb-1">
              Maquee Reinhart P. Visitacion
            </h3>
            <p className="text-xs font-mono text-white/40 mb-4">
              Pulilan, Bulacan • visitacionmaquee@gmail.com
            </p>
          </div>

          {/* FIXED DOWNLOAD ANCHOR */}
          <a 
            href="/resume.pdf" 
            download="Engr_Maquee_Visitacion_Resume.pdf"
            className="w-full py-2.5 bg-white/5 border border-white/10 rounded font-mono text-[11px] text-white/80 hover:bg-cyber-primary/10 hover:border-cyber-primary hover:text-cyber-primary flex items-center justify-center gap-2 transition-all group/btn"
          >
            <Download size={13} className="group-hover/btn:translate-y-0.5 transition-transform" />
            <span>DOWNLOAD_RESUME_ARCHIVE</span>
          </a>
        </motion.div>

        {/* Center Card: Specialized Shippable Infrastructure */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#0a0a0f]/60 backdrop-blur-sm border border-white/5 rounded-lg p-6 relative flex flex-col justify-center items-center text-center group hover:border-cyber-secondary/30 transition-all duration-300"
        >
          <div className="absolute top-3 right-3 font-mono text-[9px] text-white/20">[NODE_BIO_02]</div>
          <div className="p-3 rounded bg-white/5 border border-white/5 text-cyber-secondary mb-4 group-hover:border-cyber-secondary/20 transition-all">
            <Terminal size={20} />
          </div>
          <h4 className="font-bold text-white mb-3 text-base">What I Ship</h4>
          <p className="text-sm text-cyber-text/80 leading-relaxed max-w-xs">
            Production React applications backed by clean database orchestration architecture. RESTful integration layers, optimized global state management execution, and automated deployment architectures built to withstand live usage targets.
          </p>
        </motion.div>

        {/* Right Card: Asymmetric Edge / Multi-Disciplinary Traits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0a0a0f]/60 backdrop-blur-sm border border-white/5 rounded-lg p-6 relative flex flex-col justify-center items-center text-center group hover:border-cyber-accent/30 transition-all duration-300"
        >
          <div className="absolute top-3 right-3 font-mono text-[9px] text-white/20">[NODE_BIO_03]</div>
          <div className="p-3 rounded bg-white/5 border border-white/5 text-cyber-accent mb-4 group-hover:border-cyber-accent/20 transition-all">
            <Lightbulb size={20} />
          </div>
          <h4 className="font-bold text-white mb-3 text-base">What Sets Me Apart</h4>
          <p className="text-sm text-cyber-text/80 leading-relaxed max-w-xs">
            As a Computer Engineering graduate, my approach spans both modular application environments and systemic optimization workflows. I bridge the gap between hardware architecture design concepts and clean, interactive UI component engineering.
          </p>
        </motion.div>

      </div>

      {/* Lower Block: Categorized Technical Stack Array Matrix */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-full bg-[#0a0a0f]/40 border border-white/5 rounded-lg p-6 font-mono"
      >
        <h4 className="text-center font-bold text-white tracking-wider text-xs uppercase mb-8 text-white/40">// STACK_CAPABILITY_MATRIX</h4>
        
        <div className="space-y-6">
          {techCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div key={cat.id} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-white/5 pb-5 last:border-none last:pb-0">
                <div className="text-white/40 text-[10px] tracking-widest font-bold flex items-center gap-2 md:col-span-1">
                  <CatIcon size={12} className="text-cyber-primary" />
                  {cat.id}
                </div>
                <div className="flex flex-wrap gap-2 md:col-span-3">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-3 py-1 bg-[#101018] border border-white/5 hover:border-cyber-primary/40 text-cyber-text/90 hover:text-cyber-primary transition-all duration-200 rounded-md cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}