import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2021 - 2026",
      description:
        "Currently pursuing a Bachelor's degree in Computer Engineering. Engaged in various projects and research activities related to software development and data science.",
      logo: "/lpu.png",
    },
    {
      institution: "Sri Gayatri Junior College",
      degree: "XII - Science (MPC)",
      period: "2019 - 2021",
      description:
        "Completed my intermediate education with a focus on Mathematics, Physics, and Chemistry. Achieved a score of 90% in the board exams.",
      logo: "/gayatri.jpg",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-[#0a011f] to-[#04010c] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-purple-300">Education</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The foundation that shaped my technical thinking and problem-solving
            approach
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
              variants={itemVariants}
            >
              {/* Updated logo styling */}
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white border border-white/10 p-1 flex items-center justify-center z-10 shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-cover rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  onError={(e) => {
                    e.currentTarget.src = "/education/default.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
              </motion.div>

              <motion.div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                } bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative shadow-lg hover:shadow-xl transition-shadow duration-300`}
                variants={index % 2 === 0 ? cardVariants : cardVariantsRight}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute -top-4 md:top-1/2 left-8 md:left-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-white transform -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  viewport={{ once: true }}
                />

                <motion.h3
                  className="text-xl font-bold text-purple-300 mb-1"
                  whileHover={{ color: "#a855f7" }}
                >
                  {edu.institution}
                </motion.h3>
                <motion.p
                  className="text-lg font-medium mb-2"
                  whileHover={{ color: "#ffffff" }}
                >
                  {edu.degree}
                </motion.p>
                <motion.p
                  className="text-sm text-gray-300 mb-3"
                  whileHover={{ color: "#d1d5db" }}
                >
                  {edu.period}
                </motion.p>
                <motion.p
                  className="text-gray-300"
                  whileHover={{ color: "#e5e7eb" }}
                >
                  {edu.description}
                </motion.p>

                <motion.div
                  className={`absolute ${
                    index % 2 === 0
                      ? "-right-px -bottom-px"
                      : "-left-px -bottom-px"
                  } w-8 h-8 border-b-2 ${
                    index % 2 === 0 ? "border-r-2" : "border-l-2"
                  } border-purple-400 rounded-bl-xl`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
