import { motion } from "framer-motion";

export default function About() {
  const timeline = [
    {
      date: "2026 — Present",
      title: "Web Development",
      org: "Netlinks",
      description:
        "Expanding my web-development skills with modern website-building tools and workflows — designing interfaces and turning them into functional websites.",
    },
    {
      date: "2026",
      title: "HTML & CSS",
      org: "Afghanistan Change Makers",
      description:
        "Practical projects that deepened my understanding of HTML, CSS, page layouts, and building user-friendly websites.",
    },
    {
      date: "2026",
      title: "HTML & CSS",
      org: "Hazara Students Association of India (HSAI)",
      description:
        "Learned the fundamentals of web development — structuring pages, styling content, and building responsive, organized layouts.",
    },
    {
      date: "Dec 2025 — Jul 2026",
      title: "Python",
      org: "Code to Inspire",
      description:
        "Built a foundation in programming — functions, data structures, OOP, and problem-solving. Final project: a Student Gradebook Manager.",
    },
    {
      date: "Dec 2023 — Jan 2024",
      title: "Anthropology",
      org: "Afghan Female Student Outreach (AFSO)",
      description:
        "Explored human societies and cultures — strengthened my research and communication skills.",
    },
    {
      date: "2022 — 2023",
      title: "English Language",
      org: "Muslim English Language Institute",
      description:
        "Improved communication, writing, reading, and speaking skills for academic and professional work.",
    },
    {
      date: "Oct 2022 — Jun 2023",
      title: "Graphic Design",
      org: "Code to Inspire",
      description:
        "Developed design skills through practical projects — turning ideas into creative, visually appealing work.",
    },
    {
      date: "2019 — 2022",
      title: "Graphic Design",
      org: "Herat University",
      description:
        "Studied the fundamentals of visual communication, composition, and typography.",
    },
    {
      date: "2017",
      title: "High School",
      org: "Baba High School",
      description:
        "Built my academic foundation and developed communication skills.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-[84px] py-[100px] pb-10">
      {/* Section heading */}
      <div className="mx-auto mb-11 flex max-w-[1200px] flex-wrap items-baseline justify-between gap-6 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-['Space_Grotesk'] text-[30px] font-semibold tracking-tight text-[#2C4A6E]"
        >
          About
        </motion.h2>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[13px] text-[#56AECB]"
        >
          Background
        </motion.span>
      </div>

      {/* About text and timeline */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        {/* About description */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="self-start md:sticky md:top-[110px]"
        >
          <p className="text-[15.5px] leading-[1.75] text-[#20242C]">
            I'm a web developer who loves bringing designs to life and building
            sites that just work. I focus on clean, simple code and making sure
            everything looks great and runs smoothly on any screen. For me,
            coding is about turning tricky problems into easy-to-use digital
            experiences.
          </p>
        </motion.div>

        {/* Education and experience timeline */}
        <div className="min-w-0 border-l border-[#2C4A6E]/15 pl-6 sm:pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.date}-${item.title}-${item.org}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative z-[1] bg-[#FAFAF8] md:sticky md:top-[180px] ${
                index === timeline.length - 1
                  ? "pb-0"
                  : "pb-[60px] sm:pb-[80px] md:pb-[100px]"
              }`}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[31px] top-[5px] h-[9px] w-[9px] rounded-full border-2 border-[#56AECB] bg-[#FAFAF8] sm:-left-[37px]" />

              <span className="mb-1.5 block text-[12.5px] tracking-[0.02em] text-[#56AECB]">
                {item.date}
              </span>

              <h3 className="mb-[3px] font-['Space_Grotesk'] text-lg font-semibold text-[#2C4A6E]">
                {item.title}
              </h3>

              <span className="mb-2.5 block text-[13.5px] text-[#24262B]/60">
                {item.org}
              </span>

              <p className="m-0 max-w-[520px] text-sm leading-[1.65] text-[#24262B]/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}