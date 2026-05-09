import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "PLATFORM", href: "/platform" },
  { label: "SOLUTIONS", href: "/solutions" },
  { label: "DOCS", href: "/docs" },
  { label: "COMPANY", href: "/company" },
  { label: "CONTACT", href: "/contact" },
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
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center select-none group">
          <img src={logo} className="h-10" alt="Dyzen Labs" />
        </Link>

        {/* Desktop Nav - Clean & Simple */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 * i + 0.3 }}
            >
              <Link
                to={item.href}
                className="relative text-[12px] block font-bold tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-200 group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white/60 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#07090f] border-t border-white/[0.06] overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-5 text-[13px] font-semibold tracking-widest text-white/50 border-b border-white/[0.04]"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}