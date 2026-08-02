"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { HiBriefcase } from "react-icons/hi";

const experiences = [
  {
    title: "Web Development and Cloud Integration Intern",
    company: "Knockhere Technologies PVT LTD",
    location: "Remote",
    period: "May 2025 — September 2025",
    techStack: ["Node.js", "React.js", "Supabase", "PostgreSQL"],
    certificateUrl:
      "https://drive.google.com/file/d/1qdRh96tEx77SunO7y5XsLwvJ7155gTKP/view?usp=sharing",
    highlights: [
      "Developed a production-grade food delivery PWA with React 19, Supabase, and Node.js/Express, delivering 15+ pages, 35+ reusable components, OTP-based authentication, and real-time order tracking with geolocation-based restaurant discovery.",
      "Built a secure Razorpay payment pipeline with JWT-signed payload verification and SHA-256 tamper detection, processing wallet, COD, and online transactions across 8 order lifecycle states, reducing payment-related support tickets.",
      "Optimized data access layer by authoring 15+ custom PostgreSQL RPC functions and implementing service worker caching across 20+ tables, cutting average page load time and enabling offline-first functionality for end users.",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Where I've contributed and grown as a developer"
        />

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-16 md:pl-24 mb-16 last:mb-0 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_20px_rgba(0,242,254,0.8)] z-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute left-[18px] md:left-[26px] top-[34px] w-2 h-2 rounded-full bg-white z-20 group-hover:scale-0 transition-transform duration-500" />

              {/* Animated Glow Behind Card */}
              <div 
                className="absolute inset-0 left-16 md:left-24 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-3xl"
              />

              <div className="relative bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl z-10">
                
                {/* macOS Style Window Header */}
                <div className="h-10 bg-[#0c1226] border-b border-white/5 flex items-center px-4 justify-between z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                  </div>
                  <div className="text-xs font-mono text-text-muted opacity-50">experience.ts</div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 text-accent-cyan shrink-0 border border-accent-cyan/20">
                          <HiBriefcase className="text-2xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all duration-300">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-text-secondary ml-0 md:ml-[68px]">
                        <span className="font-semibold text-text-primary text-base">{exp.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-3 ml-0 md:ml-0">
                      <span className="text-sm text-text-muted font-mono whitespace-nowrap bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                        {exp.period}
                      </span>
                      {exp.certificateUrl && (
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-white transition-colors"
                        >
                          <FiExternalLink size={16} /> View Certificate
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4 mb-8 ml-0 md:ml-[68px]">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <FiCheckCircle className="mt-1 shrink-0 text-text-muted group-hover:text-accent-cyan transition-colors duration-300 text-lg" />
                        <span className="text-sm md:text-base text-text-secondary leading-relaxed">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 ml-0 md:ml-[68px]">
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium px-4 py-2 rounded-full bg-white/5 text-text-secondary border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
