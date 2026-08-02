"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";
import { FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { HiTrophy, HiLightBulb } from "react-icons/hi2";

const platforms = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-3xl" />,
    rating: 1851,
    title: "Knight",
    rank: "Global #1779",
    detail: "500+ problems solved",
    url: "https://leetcode.com/u/rp031776/",
    color: "#FFA116",
    bgGlow: "rgba(255, 161, 22, 0.15)",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-3xl" />,
    rating: 1606,
    title: "3-Star",
    rank: "Global #437",
    detail: "30+ rated contests",
    url: "https://www.codechef.com/users/rp031776",
    color: "#5B4638",
    bgGlow: "rgba(91, 70, 56, 0.15)",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-3xl" />,
    rating: 1291,
    title: "Pupil",
    rank: "Global #1459",
    detail: "Segment Trees, Binary Lifting",
    url: "https://codeforces.com/profile/rp031776",
    color: "#1890FF",
    bgGlow: "rgba(24, 144, 255, 0.15)",
  },
];

const hackathons = [
  {
    title: "Smart India Hackathon",
    subtitle: "Institute-level Selection",
    achievement: "Ranked 13th (Top 25%)",
    detail: "Among 56+ teams",
    icon: <HiLightBulb className="text-2xl" />,
  },
  {
    title: "Bit-by-Bit Hackathon",
    subtitle: "36-hour Hackathon",
    achievement: "Secured 7th Place",
    detail: "5-member team, rapid prototyping",
    icon: <HiTrophy className="text-2xl" />,
    certificateUrl:
      "https://drive.google.com/file/d/1GlxW1BivyrMmKkj_HL64pjtBosZYw273/view?usp=drive_link",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Achievements"
          subtitle="Competitive programming ratings and hackathon highlights"
        />

        {/* CP Platforms */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              variants={cardVariants}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-3xl block cursor-pointer"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-3xl" 
                style={{ background: `linear-gradient(to bottom right, ${platform.color}40, transparent)` }} 
              />
              
              <div className="relative h-full bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl z-10">
                <div className="h-8 bg-[#0c1226] border-b border-white/5 flex items-center px-3 justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Icon & Name */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: platform.bgGlow, color: platform.color }}
                      >
                        {platform.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all duration-300">{platform.name}</h3>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: platform.bgGlow,
                            color: platform.color,
                          }}
                        >
                          {platform.title}
                        </span>
                      </div>
                    </div>
                    <FiExternalLink className="text-text-muted group-hover:text-white transition-colors" />
                  </div>

                  {/* Rating Counter */}
                  <div className="mb-3">
                    <AnimatedCounter
                      target={platform.rating}
                      label="Peak Rating"
                      duration={2}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-text-muted pt-3 border-t border-white/5">
                    <span>{platform.rank}</span>
                    <span>{platform.detail}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Hackathons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.title}
              variants={cardVariants}
              className="relative group rounded-3xl"
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

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 text-accent-cyan shrink-0 border border-accent-cyan/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {hackathon.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all duration-300">
                            {hackathon.title}
                          </h3>
                          <p className="text-text-muted text-sm font-mono mt-1">
                            {hackathon.subtitle}
                          </p>
                        </div>
                        {hackathon.certificateUrl && (
                          <a
                            href={hackathon.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-cyan hover:text-white transition-colors shrink-0 p-1"
                            aria-label="View certificate"
                          >
                            <FiExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-accent-cyan font-semibold text-sm">
                          {hackathon.achievement}
                        </span>
                        <span className="text-text-muted text-sm">
                          — {hackathon.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
