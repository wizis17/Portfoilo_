
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <header>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-brand-dark/90 backdrop-blur-md shadow-md" : "py-5"
        }`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <motion.span
              className="text-2xl font-bold text-brand-purple"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              UG.
            </motion.span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button className="flex items-center bg-brand-purple text-white px-4 py-2 rounded-md transition-transform hover:scale-105">
                <Star className="w-4 h-4 mr-2" />
                <span>Hire Me</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="p-2 text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="fixed inset-y-0 right-0 w-[280px] bg-secondary/95 backdrop-blur-lg shadow-xl lg:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-6">
            <div className="flex-1 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 border-b border-muted/20 ${
                      isActive ? "text-brand-purple" : "text-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <button className="mt-auto w-full flex justify-center items-center bg-brand-purple text-white px-4 py-3 rounded-md">
              <Star className="w-4 h-4 mr-2" />
              <span>Hire Me</span>
            </button>
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
