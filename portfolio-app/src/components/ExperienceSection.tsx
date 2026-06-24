"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Terminal, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const duties = [
    "Redesigned and modernized the corporate landing page UI, significantly improving user engagement and visual hierarchy.",
    "Built and maintained design systems for consistent website functionality and longevity.",
    "Collaborated with a team of developers for the design and functionality for feedback.",
    "Successfully migrated the corporate website to a modern cloud hosting platform, optimizing site loading speeds and streamlining ongoing maintenance workflows."
  ];

  return (
    <section className="py-20 border-t border-cyber-primary/10 mt-12 relative">
      {/* Module Header */}
      <div className="mb-12">
        <div className="text-[10px] text-cyber-secondary/60 font-mono tracking-widest uppercase mb-1">
          // HISTORICAL_LOG_ARCHIVE
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Briefcase size={18} className="text-cyber-secondary" />
          EXPERIENCE_CHRONICLES
        </h2>
      </div>

      {/* Timeline Node */}
      <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8">
        
        {/* Animated Glow Node Marker */}
        <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyber-secondary shadow-[0_0_10px_#bd00ff]" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0a0f]/40 border border-white/5 rounded-lg p-6 hover:border-cyber-secondary/30 transition-all duration-300"
        >
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-white/5 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">Web Developer Intern</h3>
              <p className="text-sm text-cyber-secondary font-mono">Milky Way Control and Power Services</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40 font-mono bg-white/5 px-3 py-1 rounded border border-white/5 h-fit w-fit">
              <Calendar size={12} />
              <span>June 2025 – August 2025</span>
            </div>
          </div>

          {/* Bullet Items Infrastructure */}
          <ul className="space-y-3">
            {duties.map((duty, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-cyber-text/80 leading-relaxed font-sans">
                <CheckCircle2 size={14} className="text-cyber-secondary mt-1 shrink-0" />
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}