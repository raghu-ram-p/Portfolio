import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiChartdotjs,
} from "react-icons/si";

const Projects = () => {
  const [activeImageIndex, setActiveImageIndex] = useState([0, 0, 0]);
  const [isHovered, setIsHovered] = useState([false, false, false]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, product management, and user authentication.",
      tags: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Stripe", icon: <SiStripe /> },
      ],
      githubLink: "https://github.com/raghu-ram-p/nodejs-ecommerce",
      images: ["/ecom1.jpg", "/ecom2.jpg", "/ecom3.jpg"],
    },
    {
      title: "News Aggregator App",
      description:
        "Real-time news aggregator with personalized feeds, search functionality, and bookmarking.",
      tags: [
        { name: "React", icon: <SiReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
      githubLink: "https://github.com/raghu-ram-p/news-homepage-frontendmentor",
      images: ["/news1.jpg", "/news2.jpg", "/news3.jpg"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application with forecasts, location search, and animated representations.",
      tags: [
        { name: "React", icon: <SiReact /> },
        { name: "API Integration", icon: <SiTypescript /> },
        { name: "Chart.js", icon: <SiChartdotjs /> },
      ],
      githubLink: "https://github.com/raghu-ram-p/weather-now",
      images: ["/weather1.jpg", "/weather2.jpg", "/weather3.jpg"],
    },
  ];

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) =>
        prev.map((index, projectIndex) => {
          return isHovered[projectIndex]
            ? index
            : (index + 1) % projects[projectIndex].images.length;
        })
      );
    }, 2500); // Faster auto-slide (2.5 seconds)

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNextImage = (projectIndex) => {
    setActiveImageIndex((prev) => {
      const newIndex = [...prev];
      newIndex[projectIndex] =
        (newIndex[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndex;
    });
  };

  const handlePrevImage = (projectIndex) => {
    setActiveImageIndex((prev) => {
      const newIndex = [...prev];
      newIndex[projectIndex] =
        (newIndex[projectIndex] - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length;
      return newIndex;
    });
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(192, 132, 252, 0.3)",
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0a011f] to-[#04010c] text-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-purple-300">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Some of my recent work with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-300/30 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onMouseEnter={() =>
                setIsHovered((prev) => {
                  const newState = [...prev];
                  newState[projectIndex] = true;
                  return newState;
                })
              }
              onMouseLeave={() =>
                setIsHovered((prev) => {
                  const newState = [...prev];
                  newState[projectIndex] = false;
                  return newState;
                })
              }
            >
              {/* Image Slideshow */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.images[activeImageIndex[projectIndex]]}
                  alt={`${project.title} screenshot ${
                    activeImageIndex[projectIndex] + 1
                  }`}
                  className="w-full h-full object-cover"
                  key={activeImageIndex[projectIndex]}
                  custom={
                    activeImageIndex[projectIndex] >
                    activeImageIndex[projectIndex] - 1
                      ? 1
                      : -1
                  }
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                />

                {/* Navigation Arrows */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage(projectIndex);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaChevronLeft />
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage(projectIndex);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaChevronRight />
                </motion.button>

                {/* Dots Indicator */}
                <motion.div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/30 px-2 py-1 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => {
                          const newIndex = [...prev];
                          newIndex[projectIndex] = index;
                          return newIndex;
                        });
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeImageIndex[projectIndex] === index
                          ? "bg-white w-4"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileHover={{ color: "#c084fc" }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4"
                  whileHover={{ color: "#ffffff" }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/5 rounded-full border border-white/10 flex items-center gap-1"
                      whileHover={{
                        backgroundColor: "rgba(192, 132, 252, 0.1)",
                        borderColor: "rgba(192, 132, 252, 0.5)",
                      }}
                    >
                      <span className="text-purple-300">{tag.icon}</span>
                      {tag.name}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition"
                  whileHover={{
                    backgroundColor: "rgba(192, 132, 252, 0.1)",
                    borderColor: "rgba(192, 132, 252, 0.5)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-purple-300" />
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
