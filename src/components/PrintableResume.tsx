
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const PrintableResume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    
    // Set the href to the resume PDF in the public folder
    link.href = "/resume.pdf";
    
    // Set the download attribute to suggest a filename
    link.download = "resume.pdf";
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cyber-btn-primary inline-flex items-center px-6 py-3 text-sm font-bold mb-8"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </motion.button>
    </div>
  );
};

export default PrintableResume;
