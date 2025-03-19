
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const skills = {
    programming: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 75 },
      { name: "HTML/CSS", level: 80 },
      { name: "SQL", level: 70 },
    ],
    frameworks: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "TensorFlow", level: 65 },
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "MongoDB", level: 70 },
    ],
  };

  const education = [
    {
      institution: "Presidency University, Bengaluru",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (AI & ML)",
      duration: "2021 - Present",
      gpa: "3.8/4.0",
    },
    {
      institution: "MES Kishora Kendra, Bengaluru",
      degree: "Pre-University College",
      field: "Science Stream",
      duration: "2019 - 2021",
      gpa: "85%",
    },
  ];

  const experience = [
    {
      position: "Web Developer Intern",
      company: "TechStart Solutions",
      duration: "May 2023 - August 2023",
      description: "Developed and maintained web applications using React.js and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
      responsibilities: [
        "Developed responsive front-end interfaces using React.js",
        "Implemented RESTful APIs using Node.js and Express",
        "Participated in code reviews and team meetings",
        "Optimized applications for maximum speed and scalability"
      ]
    },
    {
      position: "Open Source Contributor",
      company: "GitHub Community",
      duration: "January 2022 - Present",
      description: "Actively contributed to various open-source projects, focusing on web development and machine learning libraries.",
      responsibilities: [
        "Fixed bugs and implemented new features in popular repositories",
        "Collaborated with developers worldwide through pull requests",
        "Improved documentation for better user experience",
        "Participated in code reviews and discussions"
      ]
    },
  ];

  const projects = [
    {
      title: "AI Image Generator",
      description: "A web application that uses machine learning to generate images from text descriptions.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and payment processing.",
      technologies: ["JavaScript", "Node.js", "React", "MongoDB"],
      link: "#"
    },
    {
      title: "Blockchain Explorer",
      description: "A web interface for exploring blockchain data and transactions.",
      technologies: ["JavaScript", "React", "Web3.js"],
      link: "#"
    },
  ];

  const certifications = [
    {
      name: "Python Programming",
      issuer: "Coursera",
      date: "2022",
    },
    {
      name: "Web Development with JavaScript",
      issuer: "Udemy",
      date: "2022",
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "edX",
      date: "2023",
    },
    {
      name: "React.js Development",
      issuer: "freeCodeCamp",
      date: "2023",
    },
  ];

  const tabContent = {
    skills: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Code className="w-5 h-5 mr-2 text-brand-purple" />
            Programming Languages
          </h3>
          <div className="space-y-6">
            {skills.programming.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Code className="w-5 h-5 mr-2 text-brand-purple" />
            Frameworks & Libraries
          </h3>
          <div className="space-y-6">
            {skills.frameworks.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="glass-panel p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Code className="w-5 h-5 mr-2 text-brand-purple" />
            Tools & Technologies
          </h3>
          <div className="space-y-6">
            {skills.tools.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <span className="text-sm text-muted-foreground">{edu.duration}</span>
            </div>
            <div className="mb-2">
              <span className="text-lg">{edu.institution}</span>
            </div>
            <div className="mb-2">
              <span className="text-muted-foreground">{edu.field}</span>
            </div>
            <div>
              <span className="inline-flex items-center bg-brand-purple/10 px-3 py-1 rounded-full text-sm text-brand-purple">
                GPA: {edu.gpa}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <span className="text-sm text-muted-foreground">{exp.duration}</span>
            </div>
            <div className="mb-4">
              <span className="text-lg">{exp.company}</span>
            </div>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            <h4 className="font-medium mb-2">Key Responsibilities:</h4>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-brand-purple hover:text-brand-purple/80"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs py-1 px-3 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

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
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                A detailed overview of my skills, education, work experience, and accomplishments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-brand-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </motion.a>
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills" },
                { id: "education", icon: <GraduationCap className="h-5 w-5" />, label: "Education" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
                { id: "certifications", icon: <Award className="h-5 w-5" />, label: "Certifications" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
