import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart, Github, Send, Linkedin } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import LogoLoop from "@/components/LogoLoop";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="hud-badge mb-4">
              About Me
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I'm a IT Engineering student with a passionate about creating innovative solutions through programming and technology.
            </p>
          </motion.div>

          <div className="relative mb-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="glass-panel p-4 shadow-2xl">
                  <div className="overflow-hidden shadow-xl border border-[#00ff88]/35">
                    <img 
                      src="/uploads/me.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover aspect-[3/4]"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative lg:-ml-32 z-20"
              >
                <div className="glass-panel p-10 bg-gray-900/95 backdrop-blur-md">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Tang KavThenG
                  </h2>
                  <p className="text-gray-400 text-lg mb-6">
                    IT Engineering Student, Software Developer
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm a IT Engineering student specializing in Software Engineer at Royal University of Phnom Penh. My journey in programming began with an interest in solving complex problems, leading me to explore various programming languages and technologies.
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/wizis17/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#081422] border border-[#00ff88]/45 flex items-center justify-center hover:border-[#00ff88] transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6 text-[#00ff88]" />
                    </a>
                    <a
                      href="https://t.me/xiaochen_17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#081422] border border-[#00d4ff]/45 flex items-center justify-center hover:border-[#00d4ff] transition-colors"
                      aria-label="Telegram"
                    >
                      <Send className="w-6 h-6 text-[#00d4ff]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tang-kavtheng-3a6b30362/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#081422] border border-[#ff3fff]/45 flex items-center justify-center hover:border-[#ff3fff] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-[#ff3fff]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={User} title="Personal Interests">
                <ul className="space-y-2 text-muted-foreground">
                  {["Exploring new technologies", "Problem Solving", 
                    "Open-source contributions", "Web development projects"].map((interest, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#00ff88" }}
                    >
                      <Heart className="h-4 w-4 text-[#00ff88] mr-2" />
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={Code} title="Coding Philosophy">
                <ul className="space-y-2 text-muted-foreground">
                  {["Clean and maintainable code", "Problem Solving", 
                    "Continuous learning and improvement", "Maintainability and Extensibility"].map((philosophy, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#00d4ff" }}
                    >
                      <Coffee className="h-4 w-4 text-[#00d4ff] mr-2" />
                      {philosophy}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={GraduationCap} title="Education Journey">
                <ul className="space-y-2 text-muted-foreground">
                  {["Computer Science fundamentals", "Data structures and algorithms", 
                    "Machine learning and AI", "Self-taught Software development"].map((journey, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#ff3fff" }}
                    >
                      <BookOpen className="h-4 w-4 text-[#ff3fff] mr-2" />
                      {journey}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={BookOpen} title="Future Goals">
                <ul className="space-y-2 text-muted-foreground">
                  {["Mastering advanced AI techniques", "Building impactful web applications", 
                    "Contributing to open-source projects", "Exploring Software development"].map((goal, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#00ff88" }}
                    >
                      <GraduationCap className="h-4 w-4 text-[#00ff88] mr-2" />
                      {goal}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Technologies I Work With</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A collection of programming languages and tools I use to build modern applications
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <LogoLoop 
                logos={techLogos}
                speed={50}
                direction="right"
                logoHeight={64}
                gap={48}
                pauseOnHover={true}
                fadeOut={false}
                scaleOnHover={true}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
