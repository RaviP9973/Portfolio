"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";

const projects = [
  {
    title: "Dream Jobs",
    subtitle: "AI-Powered Job Marketplace",
    description:
      "A dual-role platform with candidate workflows, subscription payments, NextAuth v5, and OpenAI GPT-4o-mini-powered resume evaluation across a 5-stage hiring pipeline.",
    techStack: ["TypeScript", "Next.js", "Prisma", "NeonDB", "Stripe", "OpenAI"],
    highlights: [
      "10+ data models with Prisma ORM",
      "Arcjet bot detection & rate limiting",
      "Event-driven email notifications",
    ],
    liveUrl: "https://dream-jobs-gold.vercel.app",
    githubUrl: "https://github.com/RaviP9973/dream-jobs",
    gradient: "from-accent-cyan to-accent-blue",
    accentColor: "var(--accent-cyan)",
    geometry: "circle",
  },
  {
    title: "Study-Notion",
    subtitle: "Full-Stack EdTech Platform",
    description:
      "A comprehensive platform featuring 13 pages, 9 data models, and 37+ REST APIs for course sales and video streaming, integrated with Razorpay and Cloudinary.",
    techStack: ["Node.js", "React.js", "Express", "MongoDB", "Redis"],
    highlights: [
      "Migrated OTP to Redis (<1ms latency)",
      "Redis-backed JWT blacklisting",
      "Microservices with RabbitMQ",
    ],
    liveUrl: "https://study-notion-frontend-two-olive.vercel.app",
    githubUrl: "https://github.com/RaviP9973/StudyNotion-frontend",
    gradient: "from-accent-purple to-accent-pink",
    accentColor: "var(--accent-purple)",
    geometry: "square",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production-grade applications I've designed and built"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-10 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-3xl"
            >
              {/* Animated Glow Behind Card */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl`}
              />

              {/* Card Container */}
              <div className="relative h-full bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl z-10">
                
                {/* macOS Style Window Header */}
                <div className="h-10 bg-[#0c1226] border-b border-white/5 flex items-center px-4 gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                </div>

                {/* Abstract Preview Area */}
                <div className="relative h-64 overflow-hidden bg-[#0a0f24] flex items-center justify-center">
                  {/* Subtle Grid in preview */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                      backgroundSize: '2rem 2rem',
                      maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                    }}
                  />
                  
                  {/* Animated Geometry Background */}
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className={`absolute w-72 h-72 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl`}
                  />

                  {/* 3D Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: index === 0 ? [0, 10, 0] : [0, -10, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    {project.geometry === "circle" ? (
                      <div className={`w-32 h-32 rounded-full border border-white/20 bg-gradient-to-br ${project.gradient} shadow-2xl flex items-center justify-center backdrop-blur-md bg-opacity-20`}>
                        <div className="w-24 h-24 rounded-full border border-white/40 bg-black/40 backdrop-blur-xl" />
                      </div>
                    ) : (
                      <div className={`w-32 h-32 rotate-45 rounded-2xl border border-white/20 bg-gradient-to-br ${project.gradient} shadow-2xl flex items-center justify-center backdrop-blur-md bg-opacity-20`}>
                        <div className="w-20 h-20 rounded-xl border border-white/40 bg-black/40 backdrop-blur-xl" />
                      </div>
                    )}
                  </motion.div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-[#070b19]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-20">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg`}
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                    >
                      <FiGithub /> Code
                    </motion.a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="mb-2">
                    <p className="text-sm font-mono text-text-muted mb-1">{project.subtitle}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-text-muted group-hover:text-white transition-colors duration-300" style={{ color: "var(--accent-cyan)" }} />
                        <span className="text-sm text-text-secondary">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-text-secondary border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
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
