"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const roles = [
  "Full-Stack Developer",
  "Competitive Programmer",
  "System Designer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-[400px] md:h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
            animation: "float 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Aesthetic Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--glass-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--glass-border) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-32">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,242,254,0.8)] animate-pulse" />
            <span className="text-text-secondary font-mono text-sm tracking-widest uppercase">Hello World, I am</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[1.1] mb-8 relative z-10"
        >
          <div className="relative inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default group">
            {/* Glow Aura */}
            <span className="absolute -inset-4 blur-3xl opacity-0 group-hover:opacity-30 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple rounded-full transition-opacity duration-500 z-0" />
            
            <span className="relative z-10 text-white drop-shadow-2xl">Ravi </span>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Prakash</span>
          </div>
          <br />
          <div className="relative inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default mt-2 group">
            <span 
              className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple"
              style={{
                filter: "drop-shadow(0 0 40px rgba(0, 242, 254, 0.5))"
              }}
            >
              Pal.
            </span>
          </div>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-text-secondary mb-10 h-10 flex items-center justify-center"
        >
          <span className="font-[family-name:var(--font-jetbrains)]">
            {displayText}
          </span>
          <span className="ml-0.5 w-0.5 h-6 bg-accent-cyan inline-block animate-pulse" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="glow-btn text-base">
            View My Work
          </a>
          <a href="#contact" className="outline-btn text-base">
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: <FiGithub size={20} />,
              href: "https://github.com/RaviP9973",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={20} />,
              href: "https://www.linkedin.com/in/ravi-prakash-261517290",
              label: "LinkedIn",
            },
            {
              icon: <SiLeetcode size={20} />,
              href: "https://leetcode.com/u/rp031776/",
              label: "LeetCode",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full border border-glass-border text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs font-[family-name:var(--font-jetbrains)]">
              scroll down
            </span>
            <FiArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
