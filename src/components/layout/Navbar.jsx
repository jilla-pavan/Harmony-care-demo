import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HOSPITAL_INFO } from "../../data/mockData.js";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Departments", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      role="banner"
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "border-b border-slate-200 bg-white shadow-sm"
            : "bg-white/95 backdrop-blur-md"
        }
      `}
    >
      <div className="container-custom">
        <div className="flex h-18 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="
              flex items-center gap-3
              rounded-2xl
              transition-opacity
              hover:opacity-90
              focus:outline-none
              focus:ring-2
              focus:ring-slate-300
            "
            aria-label="Go to home page"
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-2xl
                bg-slate-900
                text-white
              "
            >
              <Plus size={18} strokeWidth={2.5} />
            </div>

            <div className="hidden sm:block text-left">
              <h1 className="text-base font-semibold tracking-tight text-slate-900">
                Harmony Care
              </h1>

              <p className="text-xs text-slate-500">Multispeciality Hospital</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="
                  text-sm font-medium
                  text-slate-600
                  transition-colors duration-200
                  hover:text-slate-900
                  focus:outline-none
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${HOSPITAL_INFO.phone.replace(/\s/g, "")}`}
              className="
                flex items-center gap-2
                text-sm font-medium
                text-slate-600
                transition-colors
                hover:text-slate-900
              "
              aria-label={`Call ${HOSPITAL_INFO.phone}`}
            >
              <Phone size={15} />

              <span className="hidden xl:inline">{HOSPITAL_INFO.phone}</span>
            </a>

            <button
              onClick={() => handleNavClick("#appointment")}
              className="
                rounded-full
                bg-slate-900
                px-5 py-2.5
                text-sm font-medium
                text-white
                transition-all duration-200
                hover:bg-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-slate-300
              "
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              rounded-xl
              p-2
              text-slate-900
              transition-colors
              hover:bg-slate-100
              focus:outline-none
              focus:ring-2
              focus:ring-slate-300
              lg:hidden
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="
              border-t border-slate-100
              bg-white
              lg:hidden
            "
          >
            <nav
              aria-label="Mobile navigation"
              className="container-custom py-5"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="
                      rounded-xl
                      px-4 py-3
                      text-left
                      text-sm font-medium
                      text-slate-700
                      transition-colors
                      hover:bg-slate-50
                      hover:text-slate-900
                    "
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <a
                  href={`tel:${HOSPITAL_INFO.phone.replace(/\s/g, "")}`}
                  className="
                    mb-3 flex items-center justify-center gap-2
                    rounded-full
                    border border-slate-200
                    px-4 py-3
                    text-sm font-medium
                    text-slate-700
                  "
                >
                  <Phone size={16} />

                  <span>{HOSPITAL_INFO.phone}</span>
                </a>

                <button
                  onClick={() => handleNavClick("#appointment")}
                  className="
                    w-full
                    rounded-full
                    bg-slate-900
                    px-4 py-3
                    text-sm font-medium
                    text-white
                    transition-colors
                    hover:bg-slate-800
                  "
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
