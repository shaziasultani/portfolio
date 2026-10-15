
import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/image/1.png";
import project2 from "../assets/image/2.png";
import project3 from "../assets/image/3.png";
import project4 from "../assets/image/4.png";
import python from "../assets/image/python.png";
import realEast from "../assets/image/real-east.png";
import project7 from "../assets/image/reb.png";
import digital from "../assets/image/digital.png";
import mentor from "../assets/image/mentor.png";

const projects = [
    {
        img: project1,
        alt: "Project 1",
        href: "https://x.com/shazia__sultani/status/1624422520379125760?s=20",
    },
    {
        img: project2,
        alt: "Project 2",
        href: "https://x.com/shazia__sultani/status/1626244960679866369?s=20",
    },
    {
        img: project3,
        alt: "Project 3",
        href: "https://x.com/shazia__sultani/status/1626564059720974338?s=20",
    },
    {
        img: project4,
        alt: "Project 4",
        href: "https://x.com/shazia__sultani/status/1624759314609995776?s=20",
    },
    {
        img: python,
        alt: "Student Management System",
        href: "https://github.com/shaziasultani/Python_final_project",
    },
    {
        img: realEast,
        alt: "Real Estate",
        href: "https://6a722a9c0e65a40e69543147--lively-kitsune-b3d5f7.netlify.app/",
    },
    {
        img: project7,
        alt: "Project 7",
        href: "https://x.com/shazia__sultani/status/2022742307846656358?s=20",
    },
    {
        img: digital,
        alt: "Digital Marketing Website",
        href: "https://6a61e3946d408da256fdcb43--harmonious-gumption-e1be4d.netlify.app/",
    },
    {
        img: mentor,
        alt: "Mentor Cards Website",
        href: "https://6a7caf65c0a3c2c8916d303d--stalwart-kangaroo-fe934c.netlify.app/",
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-[#FAFAF8] px-6 py-20">
            <div className="mx-auto max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                ><div className="flex flex-col items-center justify-center text-center">
                        <h1 className="mb-4 text-4xl font-bold text-[#2C4A6E]">
                            Other Projects
                        </h1>

                        <p className="mx-auto max-w-2xl text-[15px] leading-[1.65] text-[#24262b]/65">
                            A selection of projects that blend creativity, design, and
                            technology across web development, Python, and graphic design.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.alt}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-[10px] bg-white"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ y: -5 }}
                        >
                            <img
                                src={project.img}
                                alt={project.alt}
                                className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
