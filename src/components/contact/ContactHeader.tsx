
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span className="hud-badge mb-3">
        Looking For Work
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        <AnimatedText text="Let's Connect" once />
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-base text-muted-foreground">
          Open for internships, freelance work, and collaborations.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactHeader;
