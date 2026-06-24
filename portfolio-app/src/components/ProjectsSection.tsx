"use client";
import { motion } from "framer-motion";
import { Layers, Activity, Zap, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "NODE_01",
    title: "Velocity Engine",
    subtitle: "Hardware Telemetry & Observability Platform",
    tech: ["React.js", "Node.js", "PostgreSQL", "Docker", "Render"],
    description: "Engineered a containerized full-stack telemetry platform to monitor and visualize real-time system performance metrics across distributed cloud environments.",
    details: "Designed a scalable architecture utilizing Node.js for telemetry harvesting and PostgreSQL for historical data persistence, integrated via Docker with automated Render blueprint deployment workflows.",
    icon: Activity,
    liveUrl: "https://velocity-engine-dashboard-fdwh.onrender.com/",
    glowColor: "group-hover:border-cyber-primary/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
    badgeColor: "text-cyber-primary border-cyber-primary/20 bg-cyber-primary/5",
  },
  {
    id: "NODE_02",
    title: "Habit Sparks",
    subtitle: "Full-Stack & DevOps Lifecycle Web App",
    tech: ["React.js", "Supabase", "PostgreSQL", "Vite", "Vercel CI/CD"],
    description: "Designed and deployed a full-stack web app establishing an automated CI/CD workflow via GitHub-to-Vercel integration to trigger zero-downtime production builds upon branch merges.",
    details: "Engineered automated client-side data state maintenance logic to handle midnight resets and compute dynamic daily streak decay, drastically reducing server-side processing overhead.",
    icon: Zap,
    liveUrl: "https://projects-henna-delta.vercel.app/",
    glowColor: "group-hover:border-cyber-secondary/60 group-hover:shadow-[0_0_20px_rgba(189,0,255,0.15)]",
    badgeColor: "text-cyber-secondary border-cyber-secondary/20 bg-cyber-secondary/5",
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 border-t border-cyber-primary/10 mt-12 relative">
      <div className="mb-12">
        <div className="text-[10px] text-cyber-primary/50 font-mono tracking-widest uppercase mb-1">
          // CRITICAL_SYSTEMS_PORT
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-sans">
          <Layers size={18} className="text-cyber-primary" />
          DEPLOYED_PROJECT_NODES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative bg-[#0a0a0f]/60 backdrop-blur-sm border border-white/5 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 ${project.glowColor}`}
            >
              <div className="absolute top-4 right-4 font-mono text-[10px] text-white/20 group-hover:text-cyber-primary/60 transition-colors">
                [{project.id}]
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded bg-white/5 border border-white/10 group-hover:border-cyber-primary/30 transition-colors">
                    <IconComponent size={20} className="text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-cyber-primary transition-colors font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/40 font-mono">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-cyber-text/80 mb-4 font-sans leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-white/50 mb-6 font-sans leading-relaxed border-l-2 border-white/10 pl-3 italic">
                  {project.details}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] px-2 py-0.5 rounded font-mono border ${project.badgeColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end pt-2 border-t border-white/5">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[11px] text-white/40 group-hover:text-cyber-primary transition-colors cursor-pointer"
                  >
                    <span>LAUNCH_LIVE_APPLICATION</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}