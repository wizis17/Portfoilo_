
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
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-lg">
            JS
          </div>
        );
      case "Python":
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            Py
          </div>
        );
      case "HTML":
        return (
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            HTML
          </div>
        );
      case "CSS":
        return (
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            CSS
          </div>
        );
      case "React.js":
        return (
          <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl">
            ⚛️
          </div>
        );
      case "Node.js":
        return (
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            Node
          </div>
        );
      case "Next.js":
        return (
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white font-bold text-sm border border-white/20">
            N
          </div>
        );
      case "TailwindCSS":
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
        );
      case "Bootstrap":
        return (
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
        );
      case "MongoDB":
        return (
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg">
            🍃
          </div>
        );
      case "MySQL":
        return (
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            SQL
          </div>
        );
      case "Git/GitHub":
        return (
          <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            Git
          </div>
        );
      case "TensorFlow":
        return (
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            TF
          </div>
        );
      case "OpenCV":
        return (
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            CV
          </div>
        );
      case "Figma":
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            F
          </div>
        );
      case "Express.js":
        return (
          <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            EX
          </div>
        );
      case "Pandas":
        return (
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            🐼
          </div>
        );
      case "NumPy":
        return (
          <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            NP
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
