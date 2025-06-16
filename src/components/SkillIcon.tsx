
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
  color: string;
  bgColor: string;
  level?: number;
  image?: string;
}

const SkillIcon = ({ icon: Icon, name, color, bgColor, level, image }: SkillIconProps) => {
  return (
    <motion.div
      className="relative flex flex-col items-center group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className={`w-20 h-20 rounded-2xl ${bgColor} flex items-center justify-center shadow-lg relative overflow-hidden border border-white/10`}
        whileHover={{ 
          boxShadow: "0 15px 35px -5px rgba(155, 135, 245, 0.4)",
          y: -3,
          rotateY: 15
        }}
        transition={{ duration: 0.3 }}
      >
        {image ? (
          <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
            <div 
              className={`w-full h-full flex items-center justify-center text-2xl font-bold ${color} bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg`}
              style={{
                background: name === "JavaScript" ? "#f7df1e" : 
                           name === "Python" ? "linear-gradient(45deg, #3776ab, #ffd43b)" :
                           name === "HTML" ? "#e34c26" :
                           name === "CSS" ? "#1572b6" :
                           name === "React.js" ? "#61dafb" :
                           name === "Node.js" ? "#339933" :
                           name === "MongoDB" ? "#47a248" :
                           name === "Git/GitHub" ? "#f05032" :
                           name === "TailwindCSS" ? "#06b6d4" :
                           name === "Bootstrap" ? "#7952b3" :
                           name === "MySQL" ? "#4479a1" :
                           name === "TensorFlow" ? "#ff6f00" :
                           name === "OpenCV" ? "#5c3ee8" :
                           name === "Figma" ? "linear-gradient(45deg, #f24e1e, #a259ff, #0acf83, #ff7262)" :
                           bgColor
              }}
            >
              {name === "JavaScript" && "JS"}
              {name === "Python" && "Py"}
              {name === "HTML" && "HTML"}
              {name === "CSS" && "CSS"}
              {name === "React.js" && "⚛️"}
              {name === "Node.js" && "Node"}
              {name === "MongoDB" && "🍃"}
              {name === "Git/GitHub" && "Git"}
              {name === "TailwindCSS" && "T"}
              {name === "Bootstrap" && "B"}
              {name === "MySQL" && "SQL"}
              {name === "TensorFlow" && "TF"}
              {name === "OpenCV" && "CV"}
              {name === "Figma" && "F"}
              {!["JavaScript", "Python", "HTML", "CSS", "React.js", "Node.js", "MongoDB", "Git/GitHub", "TailwindCSS", "Bootstrap", "MySQL", "TensorFlow", "OpenCV", "Figma"].includes(name) && (
                <Icon className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
        ) : (
          <Icon className={`w-10 h-10 ${color}`} />
        )}
        
        {/* Animated background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Skill level indicator */}
        {level && (
          <motion.div
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            {Math.round(level / 20)}
          </motion.div>
        )}
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%]"
          whileHover={{ translateX: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.span
        className="text-xs font-medium mt-3 text-center max-w-[90px] truncate group-hover:text-brand-purple transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.span>
      
      {/* Enhanced tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 pointer-events-none whitespace-nowrap z-20 border border-brand-purple/30"
        whileHover={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-2">
          <span>{name}</span>
          {level && (
            <div className="flex items-center space-x-1">
              <div className="w-12 h-1 bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: `${level}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
              <span className="text-green-400">{level}%</span>
            </div>
          )}
        </div>
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
      </motion.div>
    </motion.div>
  );
};

export default SkillIcon;
