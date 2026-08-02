"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMapPin,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const contactInfo = [
  {
    icon: <FiMail className="text-xl" />,
    label: "Email",
    value: "rp031776@gmail.com",
    href: "mailto:rp031776@gmail.com",
  },
  {
    icon: <FiPhone className="text-xl" />,
    label: "Phone",
    value: "+91-9973316633",
    href: "tel:+919973316633",
  },
  {
    icon: <FiMapPin className="text-xl" />,
    label: "Location",
    value: "IIIT Bhagalpur, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <FiGithub size={22} />,
    href: "https://github.com/RaviP9973",
    label: "GitHub",
    color: "#e8eaf6",
  },
  {
    icon: <FiLinkedin size={22} />,
    href: "https://www.linkedin.com/in/ravi-prakash-261517290",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: <SiLeetcode size={22} />,
    href: "https://leetcode.com/u/rp031776/",
    label: "LeetCode",
    color: "#FFA116",
  },
  {
    icon: <SiCodeforces size={22} />,
    href: "https://codeforces.com/profile/rp031776",
    label: "Codeforces",
    color: "#1890FF",
  },
  {
    icon: <SiCodechef size={22} />,
    href: "https://www.codechef.com/users/rp031776",
    label: "CodeChef",
    color: "#5B4638",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or just want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group rounded-3xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-3xl" />
                  
                  <div className="relative bg-[#070b19] border border-glass-border rounded-3xl p-4 flex items-center gap-4 transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl z-10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 text-accent-cyan group-hover:scale-110 transition-transform duration-300 shadow-lg border border-accent-cyan/20">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-text-muted text-sm mb-4 font-medium px-2">
                Find me on
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3.5 rounded-2xl bg-[#070b19] border border-glass-border text-text-secondary hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl relative group overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      y: -4,
                      color: social.color,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative group rounded-3xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl" />
              
              <div className="relative bg-[#070b19] border border-glass-border rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl z-10 h-full">
                <div className="h-10 bg-[#0c1226] border-b border-white/5 flex items-center px-4 justify-between z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50 group-hover:opacity-100 transition-opacity delay-75" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50 group-hover:opacity-100 transition-opacity delay-150" />
                  </div>
                  <div className="text-xs font-mono text-text-muted opacity-50">contact.tsx</div>
                </div>

                <form
                  action={`mailto:rp031776@gmail.com`}
                  method="GET"
                  encType="text/plain"
                  className="p-6 md:p-8 space-y-6 flex-1"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-text-muted text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0f24] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all text-sm group-hover:border-white/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-text-muted text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0f24] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all text-sm group-hover:border-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-text-muted text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0f24] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all text-sm group-hover:border-white/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-text-muted text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="body"
                      rows={5}
                      placeholder="Tell me about your project or just say hi!"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0f24] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 transition-all text-sm resize-none group-hover:border-white/20"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 text-base font-semibold py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
