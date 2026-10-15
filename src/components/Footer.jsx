
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="bg-[#001b36] text-[#EDE7D8] px-6 pt-[90px] pb-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <div>
          <span className="block text-[13.5px] text-[#EDE7D8]/55 mb-[14px]">
            Have a project in mind?
          </span>

          <h2 className="text-[clamp(32px,6vw,58px)] font-semibold leading-[1.05] tracking-[-0.015em] mb-[34px]">
            Let's build <em className="not-italic text-[#56AECB]">something</em>
            <br />
            together.
          </h2>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shazia.sultani.56789@gmail.com"
            className="inline-flex items-center gap-[10px] text-[#56AECB] text-lg no-underline border-b border-[#56AECB]/40 pb-1"
          >
            shazia.sultani.56789@gmail.com
            <FaArrowRight className="text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[70px] pt-8 border-t border-[#EDE7D8]/10">
          <div>
            <h4 className="text-xs font-medium text-[#EDE7D8]/50 mb-3">
              Location
            </h4>
            <p className="text-sm mb-2">Kabul, Afghanistan</p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-[#EDE7D8]/50 mb-3">
              Contact
            </h4>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shazia.sultani.56789@gmail.com"
              className="block text-sm mb-2 hover:text-[#56AECB]"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shazia-sultani-735aa92a4"
              target="_blank"
              rel="noopener"
              className="block text-sm mb-2 hover:text-[#56AECB]"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <h4 className="text-xs font-medium text-[#EDE7D8]/50 mb-3">
              Elsewhere
            </h4>
            <a
              href="https://www.instagram.com/s.sultani.5"
              target="_blank"
              rel="noopener"
              className="block text-sm mb-2 hover:text-[#56AECB]"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/shazia.sultani.56"
              target="_blank"
              rel="noopener"
              className="block text-sm mb-2 hover:text-[#56AECB]"
            >
              Facebook
            </a>
            <a
              href="https://x.com/shazia__sultani"
              target="_blank"
              rel="noopener"
              className="block text-sm mb-2 hover:text-[#56AECB]"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
