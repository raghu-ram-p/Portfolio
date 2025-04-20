import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import profileImage from "/profile.jpg"; // ✅ Make sure this path is correct!

export default function HeroIntro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Word loop animation setup
  const phrases = ["inspire & engage", "solve & build", "design & deliver"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % phrases.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const phraseVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-b from-black via-[#0d0225] to-[#12013d] text-white px-4 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 md:pr-8 lg:pr-12 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Crafting digital experiences <br />
          that{" "}
          <span className="relative inline-block h-[1.2em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[current]}
                className="italic font-serif text-purple-200 relative z-10 absolute"
                variants={phraseVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                {phrases[current]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-purple-500/40 -z-0"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-300 flex flex-wrap justify-center md:justify-start items-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hi there! I'm{" "}
          <span className="font-medium text-white">Raghu Ram</span>
          <motion.img
            src={profileImage}
            alt="Raghu Ram"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-xl ring-2 ring-purple-500 md:hidden"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            whileHover={{ scale: 1.1, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          />
          <span>a passionate Full Stack Developer</span>
        </motion.p>

        <motion.p
          className="mt-6 text-gray-400 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Specializing in modern web development with React, Node.js, and
          cutting-edge technologies. I transform complex problems into elegant,
          user-friendly solutions.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="relative inline-flex items-center px-8 py-3.5 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group overflow-hidden"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="mailto:ramraghu5500@gmail.com"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-purple-300">📩</span>
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Tailwind",
            "MongoDB",
          ].map((tech, index) => (
            <motion.div
              key={tech}
              className="px-3 py-1.5 bg-white/5 rounded-full text-sm backdrop-blur-sm hover:bg-purple-400/10 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -2, scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="hidden md:block md:w-1/2 relative mt-8 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative w-full max-w-lg mx-auto aspect-square group">
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={profileImage}
            alt="Raghu Ram"
            className="relative w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-purple-400/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 0 20px rgba(192, 132, 252, 0.5)",
            }}
          />
        </div>
      </motion.div>

      {/* Background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-900/20 filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.13, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </section>
  );
}
