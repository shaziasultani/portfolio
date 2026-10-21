
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import project1 from "../assets/image/1.png";
import project2 from "../assets/image/2.png";
import project3 from "../assets/image/3.png";
import project4 from "../assets/image/4.png";
import python from "../assets/image/python.png";
import realEast from "../assets/image/real-east.png";
import project7 from "../assets/image/reb.png";
import digital from "../assets/image/digital.png";
import mentor from "../assets/image/mentor.png";

import netlinks from "../assets/image/netlinks.png";
import zohco from "../assets/image/zohco.png";
import nexor from "../assets/image/nexor.png";

const projects = [
    // ================= WEB DEVELOPMENT PROJECTS =================
    {
        img: realEast,
        title: "Real Estate Website",
        category: "Web Development",
        description:
            "A real estate website presenting property information through a clean layout and user-friendly browsing experience.",
        href: "https://6a722a9c0e65a40e69543147--lively-kitsune-b3d5f7.netlify.app/",
    },
    {
        img: digital,
        title: "Digital Marketing Website",
        category: "Web Development",
        description:
            "A digital marketing website presenting services through an engaging interface and clearly structured content.",
        href: "https://6a61e3946d408da256fdcb43--harmonious-gumption-e1be4d.netlify.app/",
    },
    {
        img: mentor,
        title: "Mentor Cards Website",
        category: "Web Development",
        description:
            "A mentor-focused website presenting profiles and key information in an organized, easy-to-explore card layout.",
        href: "https://6a7caf65c0a3c2c8916d303d--stalwart-kangaroo-fe934c.netlify.app/",
    },
    {
        img: project1, // Replace with the original blog screenshot if different
        title: "Responsive Blog Website",
        category: "Web Development",
        description:
            "A responsive blog website designed to present articles and content in a clean, readable layout across desktop, tablet, and mobile devices.",
        href: "YOUR_ORIGINAL_RESPONSIVE_BLOG_WEBSITE_LINK",
    },

    // ================= PYTHON PROJECTS =================
    {
        img: python,
        title: "Student Management System",
        category: "Python",
        description:
            "A Python-based system for organizing student information and managing academic records.",
        href: "https://github.com/shaziasultani/Python_final_project",
    },
    {
        img: project7,
        title: "Reeborg's Hurdle",
        category: "Python Game Development",
        description:
            "A Python-based game challenge focused on programming logic, loops, conditional statements, and guiding Reeborg through hurdles.",
        href: "https://x.com/shazia__sultani/status/2022742307846656358?s=20",
    },

    // ================= GRAPHIC DESIGN PROJECTS =================
    {
        img: project1,
        title: "Creative Design Project",
        category: "Graphic Design",
        description:
            "A visual design project focused on thoughtful composition, balanced layouts, and engaging visuals.",
        href: "https://x.com/shazia__sultani/status/1624422520379125760?s=20",
    },
    {
        img: project2,
        title: "Visual Design Concept",
        category: "Graphic Design",
        description:
            "A creative concept exploring color, typography, and visual storytelling to communicate ideas.",
        href: "https://x.com/shazia__sultani/status/1626244960679866369?s=20",
    },
    {
        img: project3,
        title: "Digital Artwork",
        category: "Graphic Design",
        description:
            "A design piece showcasing visual creativity and attention to detail through a polished presentation.",
        href: "https://x.com/shazia__sultani/status/1626564059720974338?s=20",
    },
    {
        img: project4,
        title: "Graphic Design Project",
        category: "Graphic Design",
        description:
            "A visual project combining design elements to create a clear, attractive, and memorable result.",
        href: "https://x.com/shazia__sultani/status/1624759314609995776?s=20",
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#FAFAF8] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-[1200px]">

                {/* Back to Selected Works */}
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <Link
                        to="/#works"
                        className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[13px] font-medium text-[#2C4A6E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#56AECB] hover:text-[#56AECB] hover:shadow-md"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>
                        Back to Selected Works
                    </Link>
                </motion.div>

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-[#56AECB]/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#2C4A6E]">
                        More of my work
                    </span>

                    <h1 className="mb-5 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.02em] text-[#2C4A6E] sm:text-3xl">
                        Other Projects
                        <span className="text-[#56AECB]">.</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-[15px] leading-[1.7] text-[#20242C]">
                        A collection of projects that bring together creativity,
                        design, and technology across web development, Python,
                        and graphic design.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.5,
                                delay: (index % 3) * 0.08,
                            }}
                            whileHover={{ y: -6 }}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#2C4A6E]/10 bg-white shadow-[0_5px_20px_rgba(44,74,110,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(44,74,110,0.12)]"
                        >
                            {/* Project Image */}
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title}`}
                                className="relative block overflow-hidden bg-[#F0F3F5]"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-[#2C4A6E]/0 transition-colors duration-300 group-hover:bg-[#2C4A6E]/10" />
                            </a>

                            {/* Project Information */}
                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                <span className="mb-3 w-fit rounded-full bg-[#56AECB]/10 px-3 py-1 text-[12px] font-medium text-[#2C4A6E]">
                                    {project.category}
                                </span>

                                <h2 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold leading-snug tracking-[-0.02em] text-[#2C4A6E] transition-colors duration-300 group-hover:text-[#56AECB]">
                                    {project.title}
                                </h2>

                                <p className="mb-6 flex-1 text-[15px] leading-[1.7] text-[#20242C]">
                                    {project.description}
                                </p>

                                {/* Individual Project Button */}
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#2C4A6E] px-5 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#56AECB] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#56AECB] focus:ring-offset-2"
                                >
                                    View Project
                                    <FaArrowUpRightFromSquare className="text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-14 text-center text-[13px] leading-[1.7] text-[#20242C]"
                >
                    Every project is another opportunity to learn, create, and improve.
                </motion.p>
            </div>
        </section>
    );
}
