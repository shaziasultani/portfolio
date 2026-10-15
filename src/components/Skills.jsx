import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaPaintBrush,
  FaFigma,
  FaImage,
  FaPalette,
  FaVideo,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#FAFAF8] px-4 py-20 sm:px-6 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#2C4A6E]">
            Skills & Tools
          </h2>

          <p className="mb-10 max-w-2xl text-[#20242C]">
            The technologies, tools, and creative skills I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* DEVELOPMENT */}
          <motion.div
            className="rounded-2xl border border-[#2C4A6E]/10 bg-white p-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-xl font-bold text-[#2C4A6E]">
              Development
            </h3>

            {[
              { name: "HTML", icon: FaHtml5 },
              { name: "CSS", icon: FaCss3Alt },
              { name: "JavaScript", icon: FaJs },
              { name: "React", icon: FaReact },
              { name: "Python", icon: FaPython },
              { name: "Tailwind CSS", icon: FaCode },
            ].map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                className="skill-row flex items-center gap-3 py-[9px] text-[14.5px] text-[#20242C]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Icon className="text-lg text-[#56AECB]" />
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* DESIGN */}
          <motion.div
            className="rounded-2xl border border-[#2C4A6E]/10 bg-white p-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="mb-4 text-xl font-bold text-[#2C4A6E]">
              Design
            </h3>

            {[
              { name: "Figma", icon: FaFigma },
              { name: "Photoshop", icon: FaImage },
              { name: "Illustrator", icon: FaPalette },
              { name: "InDesign", icon: FaPaintBrush },
              { name: "Painting", icon: FaPalette },
            ].map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                className="skill-row flex items-center gap-3 py-[9px] text-[14.5px] text-[#20242C]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Icon className="text-lg text-[#56AECB]" />
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* TOOLS */}
          <motion.div
            className="rounded-2xl border border-[#2C4A6E]/10 bg-white p-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 text-xl font-bold text-[#2C4A6E]">
              Tools
            </h3>

            {[
              { name: "Git", icon: FaGitAlt },
              { name: "GitHub", icon: FaGithub },
              { name: "VS Code", icon: FaCode },
              { name: "After Effects", icon: FaVideo },
              { name: "Premiere Pro", icon: FaVideo },
            ].map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                className="skill-row flex items-center gap-3 py-[9px] text-[14.5px] text-[#20242C]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Icon className="text-lg text-[#56AECB]" />
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}