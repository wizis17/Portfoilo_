
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Cpu, Database, Globe, GitBranch, Palette, Wrench, Target, Bot } from "lucide-react";
import SkillCategory from "./SkillCategory";

const SkillsSection = () => {
  const [activeSkillCategories, setActiveSkillCategories] = useState<string[]>(["programming"]);
  const [allExpanded, setAllExpanded] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      id: "programming",
      skills: [
        { name: "JavaScript", icon: Code, color: "text-yellow-400", bgColor: "bg-yellow-500/20", level: 88 },
        { name: "Python", icon: Code, color: "text-blue-400", bgColor: "bg-blue-500/20", level: 90 },
        { name: "HTML", icon: Code, color: "text-orange-400", bgColor: "bg-orange-500/20", level: 85 },
        { name: "CSS", icon: Palette, color: "text-blue-300", bgColor: "bg-blue-400/20", level: 85 },
        { name: "Java", icon: Code, color: "text-red-400", bgColor: "bg-red-500/20", level: 80 },
        { name: "C#", icon: Code, color: "text-purple-400", bgColor: "bg-purple-500/20", level: 75 },
        { name: "C++", icon: Code, color: "text-blue-500", bgColor: "bg-blue-600/20", level: 70 },
        { name: "SQL", icon: Database, color: "text-green-400", bgColor: "bg-green-500/20", level: 70 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      id: "frameworks",
      skills: [
        { name: "React.js", icon: Globe, color: "text-cyan-400", bgColor: "bg-cyan-500/20", level: 85 },
        { name: "Node.js", icon: Cpu, color: "text-green-500", bgColor: "bg-green-600/20", level: 80 },
        { name: "Next.js", icon: Globe, color: "text-gray-300", bgColor: "bg-gray-500/20", level: 75 },
        { name: "Express.js", icon: Cpu, color: "text-gray-400", bgColor: "bg-gray-600/20", level: 70 },
        { name: "TailwindCSS", icon: Palette, color: "text-teal-400", bgColor: "bg-teal-500/20", level: 85 },
        { name: "Bootstrap", icon: Palette, color: "text-purple-500", bgColor: "bg-purple-600/20", level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      id: "tools",
      skills: [
        { name: "Git/GitHub", icon: GitBranch, color: "text-orange-500", bgColor: "bg-orange-600/20", level: 85 },
        { name: "VS Code", icon: Code, color: "text-blue-600", bgColor: "bg-blue-700/20", level: 90 },
        { name: "MongoDB", icon: Database, color: "text-green-600", bgColor: "bg-green-700/20", level: 70 },
        { name: "Postman", icon: Wrench, color: "text-orange-400", bgColor: "bg-orange-500/20", level: 80 },
        { name: "Figma", icon: Palette, color: "text-pink-400", bgColor: "bg-pink-500/20", level: 65 },
        { name: "MySQL", icon: Database, color: "text-blue-500", bgColor: "bg-blue-600/20", level: 75 },
      ]
    },
    {
      title: "AI & Machine Learning",
      id: "ai",
      skills: [
        { name: "TensorFlow", icon: Brain, color: "text-orange-500", bgColor: "bg-orange-600/20", level: 75 },
        { name: "OpenCV", icon: Bot, color: "text-green-500", bgColor: "bg-green-600/20", level: 70 },
        { name: "Pandas", icon: Database, color: "text-blue-400", bgColor: "bg-blue-500/20", level: 80 },
        { name: "NumPy", icon: Target, color: "text-cyan-500", bgColor: "bg-cyan-600/20", level: 75 },
        { name: "Matplotlib", icon: Target, color: "text-purple-500", bgColor: "bg-purple-600/20", level: 70 },
        { name: "Neural Networks", icon: Brain, color: "text-pink-500", bgColor: "bg-pink-600/20", level: 75 },
        { name: "Deep Learning", icon: Brain, color: "text-indigo-500", bgColor: "bg-indigo-600/20", level: 75 },
        { name: "Computer Vision", icon: Bot, color: "text-teal-500", bgColor: "bg-teal-600/20", level: 70 },
      ]
    }
  ];

  const toggleSkillCategory = (category: string) => {
    setActiveSkillCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleExpandAll = () => {
    if (allExpanded) {
      setActiveSkillCategories(["programming"]);
      setAllExpanded(false);
    } else {
      setActiveSkillCategories(skillCategories.map(cat => cat.id));
      setAllExpanded(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-6 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Code className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Skills
        </h3>
        <motion.button
          onClick={toggleExpandAll}
          className="text-sm text-white bg-brand-purple/20 hover:bg-brand-purple/30 transition-colors px-4 py-2 rounded-lg border border-brand-purple/30 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </motion.button>
      </div>
      
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.id}
          title={category.title}
          skills={category.skills}
          isActive={activeSkillCategories.includes(category.id)}
          onToggle={() => toggleSkillCategory(category.id)}
        />
      ))}
    </motion.div>
  );
};

export default SkillsSection;
