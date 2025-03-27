
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Blockchain", level: "Beginner" },
    { name: "AI", level: "Intermediate" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm a Computer Science student passionate about creating innovative solutions through programming and technology.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="bg-gradient-to-br from-brand-purple/20 to-blue-500/20 w-full h-80 rounded-lg mb-8"></div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm">
                    Python
                  </span>
                  <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm">
                    JavaScript
                  </span>
                  <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm">
                    C++
                  </span>
                  <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm">
                    React.js
                  </span>
                  <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm">
                    Node.js
                  </span>
                  <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm">
                    Next.js
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="Who am I?" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm <span className="text-brand-purple font-semibold">Uday G</span>, a Computer Science student specializing in AI & Machine Learning at Presidency University, Bengaluru.
                </p>
                <p>
                  My journey in programming began with an interest in solving complex problems. This led me to explore various programming languages and technologies, with a focus on web development and artificial intelligence.
                </p>
                <p>
                  I'm passionate about building web applications and software that is not only functional but also intuitive and user-friendly. I believe in continuous learning and staying updated with the latest technologies.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, solving algorithmic problems, contributing to open-source projects and playing video games.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                These are the technologies and programming languages I've worked with and continue to develop expertise in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <span className={`text-xs py-1 px-3 rounded-full ${
                    skill.level === 'Advanced' ? 'bg-brand-purple/20 text-brand-purple' :
                    skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
                    <User className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">Personal Interests</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Heart className="h-4 w-4 text-brand-purple mr-2" />
                    Exploring new technologies
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-4 w-4 text-brand-purple mr-2" />
                    Solving algorithmic challenges
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-4 w-4 text-brand-purple mr-2" />
                    Open-source contributions
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-4 w-4 text-brand-purple mr-2" />
                    Web development projects
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">Coding Philosophy</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                    Clean and maintainable code
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                    Focus on user experience
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                    Building with scalability in mind
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">Education Journey</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                    Computer Science fundamentals
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                    Data structures and algorithms
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                    Machine learning and AI
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                    Self-taught web development
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-panel p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">Future Goals</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                    Mastering advanced AI techniques
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                    Building impactful web applications
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                    Contributing to open-source projects
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                    Exploring blockchain development
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
