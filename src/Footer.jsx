import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="bg-[#04010c] text-white border-t border-white/10">
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left side - Branding */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="text-purple-300">Raghu</span> Ram
              </h2>
              <p className="text-gray-400 text-sm">
                Full Stack Developer & UX Enthusiast
              </p>
            </motion.div>

            {/* Middle - Contact and Resume */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <a
                href="mailto:ramraghu5500@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition transform group"
              >
                <FiMail className="h-5 w-5" />
                <span>ramraghu5500@gmail.com</span>
                <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* Resume Button */}
              <a
                href="ttps://github.com/raghu-ram-p/resume/blob/main/resume.pdf" // Update this path as needed
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform hover:scale-105"
              >
                <FaFileAlt className="h-5 w-5" />
                <span>View Resume</span>
              </a>
            </motion.div>

            {/* Right side - Social Links */}
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a
                href="https://github.com/raghu-ram-p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition hover:text-purple-300 transform hover:scale-105"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/raghu-ram-p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition hover:text-blue-400 transform hover:scale-105"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/raghu4738125680?t=YSW78nLzK-7d4Wl_chpl7A&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition hover:text-blue-300 transform hover:scale-105"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p>© {new Date().getFullYear()} Raghu Ram. All rights reserved.</p>
            <p className="mt-1">Built with React.js</p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
