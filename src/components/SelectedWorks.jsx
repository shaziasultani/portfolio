
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import digital from "../assets/image/digital.png";
import realEast from "../assets/image/real-east.png";
import python from "../assets/image/python.png";
import onlineLearning from "../assets/image/online-learning.png";
import respon from "../assets/image/respon.png";
import mentor from "../assets/image/mentor.png";

const projects = [
  {
    title: "Digital Marketing Website",
    image: digital,
    link: "https://6a61e3946d408da256fdcb43--harmonious-gumption-e1be4d.netlify.app/",
    description:
      "A modern website designed to showcase digital marketing services with a clean, engaging interface.",
    category: "Marketing",
    highlights: [
      "Digital marketing services",
      "Clean and engaging interface",
    ],
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Real Estate",
    image: realEast,
    link: "https://6a722a9c0e65a40e69543147--lively-kitsune-b3d5f7.netlify.app/",
    description:
      "A clean real estate website designed to help users explore properties and connect with services.",
    category: "Real Estate",
    highlights: [
      "Property exploration",
      "User-friendly layout",
    ],
    technologies: ["React", "CSS"],
  },
  {
    title: "Student Management System",
    image: python,
    link: "https://github.com/shaziasultani/Python_final_project",
    description:
      "A Python-based system for managing students, courses, assessments, grades, and academic records.",
    category: "Python",
    highlights: [
      "Student and course management",
      "Grade tracking",
    ],
    technologies: ["Python"],
  },
  {
    title: "Online Learning Platform",
    image: onlineLearning,
    link: "https://6a8efd07c22f2bf179ca0448--graceful-gingersnap-64838f.netlify.app/",
    description:
      "An online learning interface designed to help users discover courses and explore opportunities.",
    category: "Education",
    highlights: [
      "Course discovery",
      "Learning-focused interface",
    ],
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Responsive Blog Website",
    image: respon,
    link: "https://6a63b7c49a8ca1bde58e5320--vermillion-marzipan-0ef82b.netlify.app/",
    description:
      "A responsive blog website focused on presenting articles through a clean, user-friendly layout.",
    category: "Blog",
    highlights: [
      "Responsive layout",
      "Article presentation",
    ],
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Mentor Cards Website",
    image: mentor,
    link: "https://6a7caf65c0a3c2c8916d303d--stalwart-kangaroo-fe934c.netlify.app/",
    description:
      "A mentor discovery interface featuring professional profiles, skills, ratings, and session info.",
    category: "Mentorship",
    highlights: [
      "Mentor profiles",
      "Ratings and session information",
    ],
    technologies: ["React", "CSS"],
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section id="works" className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mb-7"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.02em] text-[#2C4A6E]">
            Selected Works
          </h2>

          <p className="section-note text-[17px] leading-[1.7] text-[#20242C]">
            A selection of projects showcasing my web development and design skills.
          </p>
        </motion.div>

        {/* Project selection buttons */}
        <div className="mb-7 flex flex-wrap gap-2">
          {projects.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActiveProject(index)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`relative overflow-hidden rounded-full border px-4 py-2 text-xs transition-colors duration-300 ${
                activeProject === index
                  ? "border-[#20242C] bg-[#274c7a] text-white"
                  : "border-[#2C4A6E]/15 bg-[#FAFAF8] text-[#2C4A6E] hover:border-[#56AECB]"
              }`}
            >
              {activeProject === index && (
                <motion.span
                  layoutId="activeProjectIndicator"
                  className="absolute inset-0 rounded-full bg-[#2C4A6E]"
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 25,
                  }}
                />
              )}

              <motion.span
                className="relative z-10 inline-block"
                animate={{
                  scale: activeProject === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.25 }}
              >
                {item.title}
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* Selected project details */}
        <motion.div
          key={project.title}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {/* Project information */}
          <div className="py-5">
            <motion.p
              variants={itemVariants}
              className="mb-3 text-[13.5px] font-medium uppercase tracking-[0.2em] text-[#56AECB]"
            >
              {project.category}
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="mb-4 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.02em] text-[#2C4A6E]"
            >
              {project.title}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="mb-7 max-w-[420px] text-[17px] leading-[1.7] text-[#20242C]"
            >
              {project.description}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-3 text-[13.5px] uppercase tracking-[0.18em] text-[#2C4A6E]"
            >
              Project Highlights
            </motion.p>

            <ul className="mb-6 space-y-2">
              {project.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={itemVariants}
                  className="flex items-start gap-2 text-[15px] leading-[1.7] text-[#20242C]"
                >
                  <span className="text-[#56AECB]">•</span>
                  {highlight}
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={itemVariants}
              className="mb-6 flex flex-wrap gap-2"
            >
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-[#2C4A6E]/20 px-3 py-1.5 text-[13px] text-[#2C4A6E]"
                >
                  {technology}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#2C4A6E] px-4 py-3 text-[14.5px] font-medium text-[#FAFAF8] no-underline transition-colors duration-300 hover:bg-[#56AECB]"
              >
                Visit live site ↗
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-[#2C4A6E]/25 px-4 py-3 text-[14.5px] text-[#2C4A6E] no-underline transition-colors duration-300 hover:bg-[#2C4A6E] hover:text-white"
              >
                Other projects ↗
              </Link>
            </motion.div>
          </div>

          {/* Project preview - image only */}
          <motion.a
            variants={itemVariants}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <motion.img
              key={project.image}
              src={project.image}
              alt={project.title}
              className="aspect-[4/3] w-full object-cover rounded-lg shadow-[0_10px_20px_rgba(44,74,110,0.18)]"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
