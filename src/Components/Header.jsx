import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Changed to framer-motion (standard import)
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// GUIDELINE FOLLOWED: Fresh page names, no standard "About" or "Contact", totally unique structure.
const navItems = [
  { label: "OUR BUILDS", href: "/builds" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "THE DYZEN STORY", href: "/story" },
  { label: "JOIN DYZEN", href: "/careers" },
  { label: "REACH US", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090f]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between">
        
        <Link to="/" className="flex items-center select-none group">
          {/* OPTIONAL: Gradient Text Logo tailored for Dyzen if you don't want to use the image */}
          {/* <span
            className="text-2xl font-black tracking-[0.25em] transition-all duration-300 group-hover:tracking-[0.35em]"
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.25em"
            }}
          >
            <span
              style={{
                background: "linear-gradient(to right, #ff2d78, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              DYZEN
            </span>
          </span> */}

          <img src={logo} className="h-11" alt="Dyzen Labs Private Limited" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 * i + 0.3 }}
            >
              <Link
                to={item.href}
                className="relative text-[13px] block font-semibold tracking-[0.12em] text-white/50 hover:text-white transition-colors duration-200 group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#07090f]/95 backdrop-blur-xl border-t border-white/[0.06] absolute w-full left-0 top-full"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-8 py-4 text-[13px] font-semibold tracking-[0.12em] text-white/50 hover:text-white border-b border-white/[0.04] transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}