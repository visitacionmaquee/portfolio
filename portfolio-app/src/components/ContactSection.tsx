"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const directComms = [
    { icon: Mail, label: "E-Mail Vector", value: "visitacionmaquee@gmail.com", href: "mailto:visitacionmaquee@gmail.com" },
    { icon: Phone, label: "Comms Line", value: "+63 921 575 2063", href: "tel:+639215752063" },
    { icon: MapPin, label: "Coordinates", value: "Pulilan, Bulacan, PH", href: "https://maps.google.com/?q=Pulilan,+Bulacan" }
  ];

  const socialLinks = [
    { 
      name: "LINKEDIN", 
      url: "https://www.linkedin.com/in/maquee-reinhart-visitacion-bb7a36294/", 
      color: "hover:border-blue-500/40 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: "GITHUB", 
      url: "https://github.com/visitacionmaquee", 
      color: "hover:border-purple-500/40 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: "FACEBOOK", 
      url: "https://www.facebook.com/maquee.visitacion.2025", 
      color: "hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 12.991 22 12z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 border-t border-cyber-primary/10 mt-12 mb-12 relative">
      <div className="mb-12">
        <div className="text-[10px] text-cyber-accent/60 font-mono tracking-widest uppercase mb-1">
          // ACCESS_COMMUNICATION_CHANNELS
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-sans">
          <Mail size={18} className="text-cyber-accent" />
          CONTACT_CORE_INTERFACE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 font-mono text-xs">
        
        {/* Left Side: Core Identity Parameters */}
        <div className="lg:col-span-3 space-y-4">
          <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2 pl-1">// DIRECT_VECTORS</div>
          {directComms.map((comm, idx) => {
            const Icon = comm.icon;
            return (
              <a 
                key={idx}
                href={comm.href}
                target={comm.icon === MapPin ? "_blank" : undefined}
                rel={comm.icon === MapPin ? "noopener noreferrer" : undefined}
                className="block p-4 bg-[#0a0a0f]/60 border border-white/5 rounded-lg flex items-center gap-4 hover:border-cyber-accent/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded bg-white/5 border border-white/5 group-hover:border-cyber-accent/20 group-hover:text-cyber-accent transition-all">
                  <Icon size={16} className="text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 uppercase text-[9px] tracking-wider">{comm.label}</p>
                  <p className="text-white/90 font-sans group-hover:text-cyber-accent transition-colors">{comm.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Side: Network Social Matrices */}
        <div className="lg:col-span-2 space-y-4">
          <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2 pl-1">// EXTERNAL_NETWORKS</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {socialLinks.map((soc, idx) => {
              return (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-[#0a0a0f]/40 border border-white/5 rounded-lg flex lg:flex-row items-center justify-between gap-3 transition-all duration-300 group ${soc.color}`}
                >
                  <div className="flex items-center gap-3">
                    {soc.svg}
                    <span className="font-semibold tracking-wider text-[11px]">{soc.name}</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}