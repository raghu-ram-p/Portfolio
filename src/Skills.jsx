import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-pink-500 to-purple-500",
      icon: "💻",
      skills: [
        {
          name: "React",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        },
        {
          name: "TypeScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      color: "from-blue-500 to-indigo-500",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Python",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "GraphQL",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
        {
          name: "PostgreSQL",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "from-green-500 to-teal-500",
      icon: "🛠️",
      skills: [
        {
          name: "Docker",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VSCode",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Figma",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Jira",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
      ],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 300 },
  };

  const tapEffect = {
    scale: 0.98,
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#12013d] to-[#0a011f] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            My <span className="text-purple-300">Technical Toolkit</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to build efficient, scalable, and
            beautiful web experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-shadow"
              variants={card}
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <motion.div
                className={`text-xl font-semibold mb-6 flex items-center gap-3 text-white`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`}
                ></span>
                <span>
                  {category.icon} {category.title}
                </span>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={container}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center p-3 hover:bg-white/5 rounded-lg transition group"
                    variants={item}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-12 h-12 mb-2 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </motion.div>
                    <motion.span
                      className="text-sm text-center text-gray-300 group-hover:text-white"
                      whileHover={{ color: "#ffffff" }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
