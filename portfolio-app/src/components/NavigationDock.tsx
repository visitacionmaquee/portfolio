"use client";
import { useEffect, useState, useRef } from "react";

export default function NavigationDock() {
  const [activeSection, setActiveSection] = useState("hero-port");
  const isManualScrolling = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { id: "hero-port", label: "01 // CORE" },
    { id: "about-port", label: "02 // BIO_MATRIX" },
    { id: "projects-port", label: "03 // NODES" },
    { id: "experience-port", label: "04 // CHRONICLES" },
    { id: "contact-port", label: "05 // COURIER" },
  ];

  useEffect(() => {
    // Threshold configuration: triggers exactly when section occupies the view space
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", 
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // If we are currently executing a smooth scroll button click, ignore camera updates
      if (isManualScrolling.current) return;

      // Find the entry that is actively crossing into our viewing sweet spot
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Bind observer targets to our page elements
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToTarget = (id: string) => {
    isManualScrolling.current = true;
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    // Re-enable automatic tracking once the smooth scroll animation finishes
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800); // Matches smooth scroll duration
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-6 font-mono text-xs select-none">
      <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent absolute right-[5px] -top-36" />
      
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToTarget(item.id)}
            className="group flex items-center gap-4 text-right cursor-pointer outline-none focus:outline-none bg-transparent border-none p-0"
          >
            <span
              className={`transition-all duration-300 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                isActive ? "opacity-100 translate-x-0 text-cyber-primary font-bold" : "text-white/40"
              }`}
            >
              {item.label}
            </span>
            
            <div className="relative w-3 h-3 flex items-center justify-center">
              <div
                className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-cyber-primary border-cyber-primary scale-125 shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                    : "bg-transparent border-white/20 group-hover:border-white/60"
                }`}
              />
            </div>
          </button>
        );
      })}

      <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent absolute right-[5px] -bottom-36" />
    </div>
  );
}