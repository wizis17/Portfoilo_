
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Royal University of Phnom Penh ",
      degree: "Bachelor of Information Technology Engineering (ITE).",
      field: "Computer Science & Engineering (Specialization in AI & ML)",
      duration: "2024 - Present",
      location: "Phnom Penh, Cambodia",
      cgpa: "In Progress",
      details: [
        "Specializing in Software & Web Development",
        "Key courses include Data Structures and Algorithms, Machine Learning",
        "Actively participating in research projects related to Machine Learning and AI"
      ]
    },
    {
      id: 3,
      institution: "Kompong Speu High School",
      degree: "High School",
      field: "Science",
      duration: "2020 - 2023",
      location: "Kompong Speu, Cambodia",
      grade: "C",
      details: [
        "Strong foundation in Science",
        "Studied foundations of Mathematics"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Python Programming",
      issuer: "IT Center",
      date: "2024",
      description: "Comprehensive course covering Coding & Programming by Python.",
      category: "Course"
    },
    {
      id: 2,
      name: "C & C++ Programming",
      issuer: "Addbook",
      date: "2024",
      description: "In-depth course on C and C++ programming languages, focusing on concepts (OOP).",
      category: "Course"
    },
    {
      id: 3,
      name: "ASEAN Data Science Explorers",
      issuer: "ASEAN Foundation",
      date: "2025",
      description: "Enablement Session - SAP Analytics Cloud training Session .",
      category: "Course"
    },
    {
      id: 4,
      name: "Cambodia Robotics Olympiad 2025",
      issuer: "STEM",
      date: "2025",
      description: "Volunteer as Logistic Team for Event - (CRO 2025).",
      category: "Volunteer"
    },
    {
      id: 5,
      name: "Prompt Engineering Guide",
      issuer: "OpenAI",
      date: "2025",
      description: "The Prompt Engineering Guide is a project by DAIR.AI. It aims to educate researchers and practitioners about prompt engineering, context engineering, RAG, and AI Agents.",
      category: "Course"
    }
  ];

  const categories = ["All", "Course", "Job", "Volunteer"];

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Software Engineering",
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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
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

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  cgpa={edu.cgpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            
            {/* Filter Buttons */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap gap-3 bg-secondary/30 p-2 rounded-lg">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-brand-purple text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCertifications.map((cert, index) => (
                <CertificationCard 
                  key={cert.id}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  description={cert.description}
                  index={index}
                />
              ))}
            </div>
            
            {filteredCertifications.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-muted-foreground"
              >
                No certifications found in this category.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
