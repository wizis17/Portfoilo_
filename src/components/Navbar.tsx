
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, GraduationCap, FolderGit2, FileText, Mail } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      // Reset menu scroll position to top when opening
      if (mobileMenuRef.current) {
        mobileMenuRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Education", path: "/academics", icon: GraduationCap },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Resume", path: "/resume", icon: FileText },
    { name: "Contact", path: "/contact", icon: Mail },
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
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const bgClass = theme === "dark" 
    ? (isScrolled ? "py-3 bg-brand-dark/90 backdrop-blur-md shadow-md" : "py-5") 
    : (isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-md" : "py-5");

  return (
    <header>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${bgClass}`}
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
              <img 
              width={100}
              src="/uploads/logo_name.png" alt="logo" />
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
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
                initial="closed"
                animate="open"
                exit="closed"
                variants={backdropVariants}
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl lg:hidden z-50 overflow-hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border bg-background/80 backdrop-blur-sm">
                    <span className="text-xl font-bold text-brand-purple">Menu</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto py-4 overscroll-contain" ref={mobileMenuRef}>
                    <div className="space-y-1 px-3">
                      {navLinks.map((link, i) => {
                        const Icon = link.icon;
                        return (
                          <motion.div
                            key={link.name}
                            custom={i}
                            initial="closed"
                            animate="open"
                            variants={mobileItemVariants}
                          >
                            <NavLink
                              to={link.path}
                              className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-200 ${
                                  isActive
                                    ? "bg-brand-purple text-white shadow-md"
                                    : "text-foreground hover:bg-muted active:scale-95"
                                }`
                              }
                            >
                              <Icon className="w-5 h-5 flex-shrink-0" />
                              <span className="text-base font-medium">{link.name}</span>
                            </NavLink>
                          </motion.div>
                        );
                      })}
                    </div>
                  </nav>

                  {/* Footer Info */}
                  <div className="p-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      © 2026 Portfolio
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
