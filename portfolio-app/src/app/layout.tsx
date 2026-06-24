import type { Metadata } from "next";
import "./globals.css";
import CyberBackground from "@/components/CyberBackground";

export const metadata: Metadata = {
  title: "Maquee Visitacion | Systems & Devops Architect",
  description: "Professional portfolio of Engr. Maquee Reinhart P. Visitacion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative min-h-screen selection:bg-cyber-primary selection:text-black">
        <div className="scanlines" />
        <CyberBackground />
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}