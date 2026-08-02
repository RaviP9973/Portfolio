"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPrisma,
  SiMongoose,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiRabbitmq,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiDatabase, FiServer, FiTool, FiCpu } from "react-icons/fi";

const skillCategories = [
  {
    title: "Languages",
    icon: <FiCpu className="text-xl" />,
    color: "from-accent-cyan to-accent-blue",
    iconColor: "text-accent-cyan",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: <FiDatabase /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FiServer className="text-xl" />,
    color: "from-accent-purple to-accent-pink",
    iconColor: "text-accent-purple",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Databases",
    icon: <FiDatabase className="text-xl" />,
    color: "from-accent-blue to-accent-cyan",
    iconColor: "text-accent-blue",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Developer Tools",
    icon: <FiTool className="text-xl" />,
    color: "from-accent-pink to-accent-purple",
    iconColor: "text-accent-pink",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "AWS (EC2)", icon: <FaAws /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="relative group rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 rounded-3xl`} />
              
              <div className="relative h-full bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl z-10">
                <div className="h-8 bg-[#0c1226] border-b border-white/5 flex items-center px-3 justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-colors cursor-default text-text-secondary hover:text-white shadow-sm"
                      >
                        <span className={`text-lg ${category.iconColor}`}>{skill.icon}</span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 relative group rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 rounded-3xl" />
          
          <div className="relative bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl z-10">
            <div className="h-10 bg-[#0c1226] border-b border-white/5 flex items-center px-4 justify-between z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
              </div>
              <div className="text-xs font-mono text-text-muted opacity-50">concepts.ts</div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan text-white shadow-lg">
                  <FiCpu className="text-xl" />
                </span>
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all duration-300">
                  Core Concepts
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Microservices",
                  "RESTful APIs",
                  "System Design",
                  "OAuth & JWT",
                  "Object-Oriented Programming",
                  "Agile Development",
                  "CI/CD",
                ].map((concept) => (
                  <motion.span
                    key={concept}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-colors cursor-default text-text-secondary hover:text-white shadow-sm"
                  >
                    <span className="text-accent-purple text-lg">•</span>
                    <span className="text-sm font-medium">{concept}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
