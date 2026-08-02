"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";
import { FiCode, FiLayers, FiAward, FiCpu } from "react-icons/fi";

const stats = [
  { target: 500, suffix: "+", label: "Problems Solved", icon: <FiCode /> },
  { target: 1851, suffix: "", label: "LeetCode Rating", icon: <FiAward /> },
  { target: 15, suffix: "+", label: "Pages Built", icon: <FiLayers /> },
  { target: 8, suffix: ".05", label: "CGPA", icon: <FiCpu /> },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A glimpse into who I am and what drives me"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="relative group rounded-3xl">
              {/* Animated Glow Behind Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-3xl" />
              
              {/* Card Container */}
              <div className="relative bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl z-10">
                {/* macOS Style Window Header */}
                <div className="h-10 bg-[#0c1226] border-b border-white/5 flex items-center px-4 justify-between z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                  </div>
                  <div className="text-xs font-mono text-text-muted opacity-50">about.md</div>
                </div>
                
                <div className="p-8">
                  <p className="text-text-secondary leading-relaxed text-lg">
                    I&apos;m a{" "}
                    <span className="text-accent-cyan font-semibold">
                      Full-Stack Developer
                    </span>{" "}
                    and Computer Science student at{" "}
                    <span className="text-text-primary font-semibold">
                      IIIT Bhagalpur
                    </span>
                    , passionate about building production-grade web applications
                    that solve real problems. With hands-on experience in{" "}
                    <span className="text-accent-cyan">React</span>,{" "}
                    <span className="text-accent-cyan">Next.js</span>,{" "}
                    <span className="text-accent-cyan">Node.js</span>, and{" "}
                    <span className="text-accent-cyan">TypeScript</span>, I thrive
                    on turning complex ideas into elegant, performant solutions.
                  </p>
                  <p className="text-text-secondary leading-relaxed text-lg mt-4">
                    My competitive programming background — as a{" "}
                    <span className="text-accent-purple font-semibold">
                      Knight on LeetCode
                    </span>{" "}
                    and{" "}
                    <span className="text-accent-purple font-semibold">
                      3-Star on CodeChef
                    </span>{" "}
                    — sharpens my problem-solving instincts and helps me write clean,
                    efficient code. I&apos;ve built everything from food delivery PWAs
                    to EdTech platforms with microservices, real-time features, and
                    secure payment pipelines.
                  </p>
                  <p className="text-text-secondary leading-relaxed text-lg mt-4">
                    Currently seeking opportunities where I can contribute to
                    impactful products and grow as an engineer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group rounded-3xl h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/15 to-accent-purple/15 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-3xl" />
                  
                  <div className="relative h-full bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl z-10">
                    <div className="h-8 bg-[#0c1226] border-b border-white/5 flex items-center px-3 justify-between z-20">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                      </div>
                    </div>
                    
                    <div className="p-6 text-center flex-1 flex flex-col items-center justify-center">
                      <div className="text-accent-cyan text-2xl mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        label={stat.label}
                        duration={2}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
