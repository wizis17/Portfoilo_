
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen, GraduationCap, Award, School, Calendar, MapPin } from "lucide-react";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Presidency University, Bengaluru",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (Specialization in AI & ML)",
      duration: "2021 - Present",
      location: "Bengaluru, Karnataka",
      details: [
        "Specializing in Artificial Intelligence and Machine Learning",
        "Key courses include Data Structures, Algorithms, Machine Learning",
        "Actively participating in research projects related to AI/ML",
        "Maintaining excellent academic standing"
      ]
    },
    {
      id: 2,
      institution: "MES Kishora Kendra",
      degree: "Pre-University College",
      field: "Science Stream",
      duration: "2019 - 2021",
      location: "Bengaluru, Karnataka",
      details: [
        "CGPA: 85",
        "Major subjects included Physics, Mathematics, Chemistry, Computer Science",
        "Participated in various technical competitions and events",
        "Developed strong foundation in scientific principles and programming"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Python Programming",
      issuer: "Coursera",
      date: "2022",
      description: "Comprehensive course covering advanced Python concepts and applications."
    },
    {
      id: 2,
      name: "Web Development with JavaScript",
      issuer: "Udemy",
      date: "2022",
      description: "In-depth training on building modern web applications using JavaScript."
    },
    {
      id: 3,
      name: "Machine Learning Fundamentals",
      issuer: "edX",
      date: "2023",
      description: "Introduction to machine learning algorithms and their implementation."
    },
    {
      id: 4,
      name: "React.js Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Building interactive user interfaces with React.js framework."
    }
  ];

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Software Engineering",
    "Cloud Computing",
    "Blockchain Technology"
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
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand-purple/30" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className={`flex flex-col md:flex-row mb-16 relative ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-purple z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="glass-panel p-8 rounded-lg"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
                          <GraduationCap className="h-6 w-6 text-brand-purple" />
                        </div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      </div>
                      
                      <div className="mb-4">
                        <div className="font-medium text-lg mb-1">{edu.institution}</div>
                        <p className="text-muted-foreground">{edu.field}</p>
                        
                        <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  {/* Empty space for timeline alignment */}
                  <div className="hidden md:block w-full md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Courses</h2>
            
            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-brand-purple/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-brand-purple" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-brand-purple mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <div className="flex items-start">
                    <div className="bg-brand-purple/10 p-3 rounded-lg mr-4 mt-1">
                      <Award className="h-6 w-6 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <School className="h-4 w-4 mr-1" />
                        <span>{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
