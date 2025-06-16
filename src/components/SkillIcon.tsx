
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
  color: string;
  bgColor: string;
  level?: number;
}

const SkillIcon = ({ icon: Icon, name, color, bgColor, level }: SkillIconProps) => {
  const getSkillIcon = () => {
    switch (name) {
      case "JavaScript":
  return (
    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center rounded-xl text-3xl">
      <i className="devicon-javascript-plain colored"></i>
    </div>
  );
       case "Python":
        return (
          <i className="devicon-python-plain colored text-3xl"></i>
        );
      case "HTML":
        return (
          <i className="devicon-html5-plain colored text-3xl"></i>
        );
      case "CSS":
        return (
          <i className="devicon-css3-plain colored text-3xl"></i>
        );
      case "Java":
        return (
          <i className="devicon-java-plain colored text-3xl"></i>
        );
      case "C#":
        return (
          <i className="devicon-csharp-plain colored text-3xl"></i>
        );
      case "C++":
        return (
          <i className="devicon-cplusplus-plain colored text-3xl"></i>
        );
      case "MySQL":
        return (
          <i className="devicon-mysql-plain colored text-3xl"></i>
        );
      case "React.js":
        return (
          <i className="devicon-react-original colored text-3xl"></i>
        );
      case "Node.js":
        return (
          <i className="devicon-nodejs-plain colored text-3xl"></i>
        );
      case "Next.js":
        return (
          <i className="devicon-nextjs-original text-white text-3xl"></i>
        );
      case "Express.js":
        return (
          <i className="devicon-express-original text-white text-3xl"></i>
        );
      case "TailwindCSS":
        return (
          <i className="devicon-tailwindcss-plain colored text-3xl"></i>
        );
      case "Bootstrap":
        return (
          <i className="devicon-bootstrap-plain colored text-3xl"></i>
        );
      case "MongoDB":
        return (
          <i className="devicon-mongodb-plain colored text-3xl"></i>
        );
      case "Git/GitHub":
        return (
          <i className="devicon-github-original colored text-3xl"></i>
        );
      case "VS Code":
        return (
          <i className="devicon-vscode-plain colored text-3xl"></i>
        );
      case "TensorFlow":
        return (
          <i className="devicon-tensorflow-original colored text-3xl"></i>
        );
      case "Express.js":
        return (
          <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            EX
          </div>
        );
      default:
        return (
          <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        );
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer p-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative bg-gray-800/50 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-brand-purple/50 transition-all duration-300"
        whileHover={{ 
          boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.3)",
          y: -2
        }}
      >
        {getSkillIcon()}
        
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <motion.span
        className="text-xs font-medium mt-2 text-center text-gray-300 group-hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

export default SkillIcon;
