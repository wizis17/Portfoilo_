
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import SkillIcon from "./SkillIcon";

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  level?: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isActive: boolean;
  onToggle: () => void;
}

const SkillCategory = ({ title, skills, isActive, onToggle }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <motion.button
        onClick={onToggle}
        className={`w-full text-left mb-4 p-4 rounded-xl transition-all duration-300 backdrop-blur-sm border ${
          isActive 
            ? 'bg-brand-purple/20 border-brand-purple/40 shadow-lg shadow-brand-purple/20' 
            : 'bg-gray-800/30 border-white/10 hover:bg-gray-800/50 hover:border-brand-purple/30'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-lg font-semibold flex items-center justify-between text-white">
          {title}
          <motion.span
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-brand-purple"
          >
            ▼
          </motion.span>
        </h3>
      </motion.button>
      
      <motion.div
        initial={false}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-6 bg-gray-900/20 rounded-xl backdrop-blur-sm border border-white/5"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <SkillIcon {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;
