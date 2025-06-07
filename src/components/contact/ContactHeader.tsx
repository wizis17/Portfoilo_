
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
        Get In Touch
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <AnimatedText text="Contact Me" once />
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-muted-foreground">
          Feel free to reach out to me for collaboration, questions, or just to say hello.
          I'm open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactHeader;
