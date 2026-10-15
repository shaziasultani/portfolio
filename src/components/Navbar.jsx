
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav className="fixed py-2 top-0 left-0 z-[1000] w-full border-b border-[#2C4A6E]/15 bg-[#FAFAF8]/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">

        {/* Brand */}
        <a
          href="#home"
          className="font-['Space_Grotesk'] text-[22px] font-semibold tracking-tight text-[#2C4A6E] no-underline"
        >
          Shazia Sultani
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="cursor-pointer border-0 bg-transparent text-xl text-[#2C4A6E] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-6 border-b border-[#2C4A6E]/15 bg-[#FAFAF8] px-6 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group relative pb-1 text-lg text-[#2C4A6E] no-underline ${
                  index === 0 ? "after:w-0" : "after:w-0"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#56AECB] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
