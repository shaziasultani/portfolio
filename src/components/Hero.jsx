import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../assets/image/img.png";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-[84px] px-6 pb-[90px] pt-[150px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-[60px]">

        {/* Hero text */}
        <div className="translate-y-[-40px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
          >
            <div className="mb-[18px] translate-y-[26px] inline-flex items-center gap-2 text-[13.5px] text-[#56AECB]">
              <span className="h-[7px] w-[7px] animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-[#56AECB]" />
              Available for Freelance
            </div>

            <h1 className="mb-[22px] font-['Space_Grotesk'] text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#2C4A6E]">
              <span className="inline-block text-[18px] translate-y-[25px]">
                Hello, I'm
              </span> <br />
              <br />
              Shazia Sultani.
            </h1>

            <p className="mb-8 max-w-[480px] text-[17px] leading-[1.7] text-[#20242C]">
            Web developer with a background in graphic design, combining technical skills with a strong eye for visual detail. Focused on building responsive, user-friendly websites with clean code and thoughtful design. Passionate about continuous learning and creating effective digital experiences.
            </p>

            {/* Hero buttons */}
            <div className="flex flex-wrap items-center gap-[22px]">
              <a
                href="#works"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#2C4A6E] px-6 py-[13px] text-[14.5px] font-medium text-[#FAFAF8] no-underline transition duration-300 hover:-translate-y-px hover:bg-[#56AECB]"
              >
                See My Work
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-lg px-6 py-[13px] text-[14.5px] font-medium text-[#2C4A6E] no-underline shadow-[0_2px_8px_rgba(44,74,110,0.10)] transition duration-300 hover:-translate-y-px hover:text-[#56AECB] hover:shadow-[0_4px_12px_rgba(44,74,110,0.16)]"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

        </div>
        {/* Portrait frame */}
        <div className="translate-y-[-20px]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[450px] overflow-hidden rounded-[14px] bg-[linear-gradient(155deg,#3A5D85_0%,#2C4A6E_55%,#1E3350_100%)] shadow-[0_24px_60px_-20px_rgba(28,36,68,0.35)] before:pointer-events-none before:absolute before:inset-[14px] before:z-20 before:rounded-lg before:border before:border-[#56AECB]/[0.55] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[48%] after:bg-[linear-gradient(to_top,rgba(20,34,54,0.88),transparent)]"
          >
            <img
              src={img}
              alt="Shazia Sultani"
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />

            {/* Portrait information */}
            <div className="absolute inset-x-[22px] bottom-[22px] z-20 flex items-end justify-between text-[12.5px] text-[#FAF6F0]/80">
              <span>
                <strong className="block text-[13.5px] font-medium text-[#FAFAF8]">
                  Kabul, Afghanistan
                </strong>
                Web Developer
              </span>

              <span>◆</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}