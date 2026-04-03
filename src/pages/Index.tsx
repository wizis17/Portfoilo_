
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight, Code, GraduationCap, Briefcase, Star, ExternalLink, Github, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: "E-commerce",
      description: "a full-stack eCommerce web application designed to provide a seamless online shopping experience.",
      image: "/uploads/project_1.jpg",
      tags: ["React", "TypeScript", "PHP"],
      link: "/projects",
      code: "https://github.com/wizis17/twelve_AM"
    },
    {
      title: "Bobbie-Classroom",
      description: "A comprehensive classroom management platform that empowers educators and students with intuitive tools for teaching, learning, and collaboration. Built with React, TypeScript, Tailwind CSS, and Supabase.",
      image: "/uploads/project_7.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      link: "/projects",
      code: "https://github.com/wizis17/Bobbie-Classroom"
    },
    {
      title: "Browser File Converter",
      description: "A privacy-first, browser-based file converter that allows users to convert images, audio, video, and documents entirely on their local device.",
      image: "/uploads/project_8.png",
      tags: ["React", "TypeScript", "ffmpeg.wasm"],
      link: "/projects",
      code: "https://github.com/wizis17/Converter"
    }
  ];

  return (
    <Layout>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="hud-badge mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              <span className="inline-block border border-[#00d4ff]/55 bg-[#041321] text-[#00d4ff] px-3 py-1">Who I Am</span>{" "}
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'm a IT Engineering student specializing Software development. Passionate about programming, AI integration, web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#00ff88]/10 border border-[#00ff88]/35 mb-6 mx-auto">
                <Globe className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Web Development
              </h3>
              <p className="text-muted-foreground text-center">
                Skilled in building responsive and user-friendly web applications using modern frameworks and technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#00d4ff]/10 border border-[#00d4ff]/35 mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Computer Science
              </h3>
              <p className="text-muted-foreground text-center">
                Strong foundation in data structures and algorithms, and programming principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#ff3fff]/10 border border-[#ff3fff]/35 mb-6 mx-auto">
                <Code className="w-8 h-8 text-[#ff3fff]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Backend Development
              </h3>
              <p className="text-muted-foreground text-center">
                Experienced in building modern, responsive web applications-backend using Laravel & PHP.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/about"
              className="cyber-btn-primary inline-flex items-center px-6 py-3 text-sm font-bold"
            >
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/50" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="hud-badge mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              Featured {" "}
              <span className="inline-block border border-[#00ff88]/55 bg-[#04181a] text-[#00ff88] px-3 py-1">Projects</span>{" "}
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A selection of my recent web development and programming projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="hud-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-[#00ff88] hover:text-[#2dffc5] transition-colors font-medium text-sm"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={project.code}
                      className="inline-flex items-center text-gray-400 hover:text-[#00d4ff] transition-colors font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="cyber-btn-outline inline-flex items-center px-6 py-3 text-sm font-bold group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              <span className="inline-block border border-[#00ff88]/55 bg-[#031711] text-[#00ff88] px-3 py-1">Thank you</span>{" "}
              for visiting and I hope{" "}
              <span className="inline-block border border-[#ff3fff]/55 bg-[#18051a] text-[#ff85ff] px-3 py-1">to connect soon</span>{" "}
              for a future{" "}
              <span className="inline-block border border-[#00d4ff]/55 bg-[#04111a] text-[#8fe6ff] px-3 py-1">collaboration</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for freelance work and internship opportunities.
            </p>
            <Link
              to="/contact"
              className="cyber-btn-primary inline-flex items-center px-8 py-4 text-sm font-bold"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
