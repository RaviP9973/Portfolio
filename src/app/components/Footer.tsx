"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              &lt;RP /&gt;
            </motion.span>
            <p className="text-text-muted text-sm">
              © {currentYear} Ravi Prakash Pal. All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <p className="text-text-muted text-sm flex items-center gap-1">
            Built with{" "}
            <FiHeart className="text-accent-pink animate-pulse" size={14} />{" "}
            using Next.js & Framer Motion
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FiGithub size={18} />,
                href: "https://github.com/RaviP9973",
                label: "GitHub",
              },
              {
                icon: <FiLinkedin size={18} />,
                href: "https://www.linkedin.com/in/ravi-prakash-261517290",
                label: "LinkedIn",
              },
              {
                icon: <SiLeetcode size={18} />,
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
                className="text-text-muted hover:text-accent-cyan transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
