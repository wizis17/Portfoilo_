
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
  return (
    <motion.div
      className="relative flex flex-col items-center group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center shadow-lg relative overflow-hidden`}
        whileHover={{ 
          boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.3)",
          y: -2
        }}
        transition={{ duration: 0.2 }}
      >
        <Icon className={`w-8 h-8 ${color}`} />
        
        {/* Animated background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Skill level indicator */}
        {level && (
          <motion.div
            className="absolute bottom-1 right-1 w-2 h-2 bg-green-400 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          />
        )}
      </motion.div>
      
      <motion.span
        className="text-xs font-medium mt-2 text-center max-w-[80px] truncate group-hover:text-brand-purple transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.span>
      
      {/* Tooltip on hover */}
      <motion.div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none whitespace-nowrap z-10"
        whileHover={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {name} {level && `(${level}%)`}
      </motion.div>
    </motion.div>
  );
};

export default SkillIcon;
