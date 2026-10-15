
import React from "react";
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
  },
  {
    title: "Real Estate",
    image: realEast,
    link: "https://6a722a9c0e65a40e69543147--lively-kitsune-b3d5f7.netlify.app/",
    description:
      "A clean real estate website designed to help users explore properties and connect with services.",
  },
  {
    title: "Student Management System",
    image: python,
    link: "https://github.com/shaziasultani/Python_final_project",
    description:
      "A Python-based system for managing students, courses, assessments, grades, and academic records.",
  },
  {
    title: "Online Learning Platform",
    image: onlineLearning,
    link: "https://6a8efd07c22f2bf179ca0448--graceful-gingersnap-64838f.netlify.app/",
    description:
      "An online learning interface designed to help users discover courses and explore opportunities.",
  },
  {
    title: "Responsive Blog Website",
    image: respon,
    link: "https://6a63b7c49a8ca1bde58e5320--vermillion-marzipan-0ef82b.netlify.app/",
    description:
      "A responsive blog website focused on presenting articles through a clean, user-friendly layout.",
  },
  {
    title: "Mentor Cards Website",
    image: mentor,
    link: "https://6a7caf65c0a3c2c8916d303d--stalwart-kangaroo-fe934c.netlify.app/",
    description:
      "A mentor discovery interface featuring professional profiles, skills, ratings, and session info.",
  },
];

export default function SelectedWorks() {
  return (
    <section id="works" className="py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mb-11"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold">Selected Works</h2>
          <p className="section-note">
            A few projects that show the range — marketing sites, product UI,
            and a Python system built end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="work-card overflow-hidden rounded-[10px] bg-[var(--surface)] transition-[opacity,transform,border-color] duration-[600ms] ease-in hover:border-[var(--gold)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.09 }}
            >
              <a
                className="work-thumb relative block aspect-[16/10.5] overflow-hidden"
                href={project.link}
                target="_blank"
                rel="noopener"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500"
                />
              </a>

              <div className="px-[22px] pb-6 pt-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-[18px] translate-x-[-21px] font-semibold">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="no-underline"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <span className="work-arrow text-[15px] text-[var(--gold)] opacity-0 transition duration-300">
                    ↗
                  </span>
                </div>

                <p className="m-0 translate-x-[-21px] text-sm leading-[1.6] text-[rgba(36,38,43,0.68)]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mt-10 flex w-full justify-center px-2">
          <Link
            to="/projects"
            className="inline-block rounded-full border border-[#2C4A6E] px-7 py-3 text-sm font-medium text-[#2C4A6E] transition-colors duration-300 hover:bg-[#2C4A6E] hover:text-white"
          >
            See Other Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}