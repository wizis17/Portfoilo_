
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  iconColor?: string;
}

const InfoCard = ({ icon: Icon, title, children, iconColor = "text-primary" }: InfoCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 28px -4px rgba(0, 255, 136, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="glass-panel p-8"
    >
      <div className="flex items-center mb-4">
        <div className="bg-[#00ff88]/10 p-3 border border-[#00ff88]/35 mr-4">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold tracking-[0.08em]">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default InfoCard;
