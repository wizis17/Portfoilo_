
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-[#00ff88]" />,
      title: "Email",
      details: "tangkavtheng@gmail.com",
      link: "mailto:tangkavtheng@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#00d4ff]" />,
      title: "Location",
      details: "Russey Keo, Phnom Penh, Cambodia",
      link: "https://www.google.com/maps/place/Russei+Keo,+Phnom+Penh/",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/wizis17/",
    },
    {
      icon: <Send className="h-5 w-5" />,
      name: "Telegram",
      url: "https://t.me/xiaochen_17",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tang-kavtheng-3a6b30362/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold mb-4 text-[#00ff88] tracking-[0.1em]">Contact Information</h2>
        
        <div className="space-y-4 mb-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-3 bg-[#081522]/75 border border-[#2f4460] hover:border-[#00d4ff]/55 transition-colors"
            >
              <div className="flex-shrink-0 bg-[#00ff88]/10 p-2 border border-[#00ff88]/35 mr-3">
                {info.icon}
              </div>
              <div>
                <h3 className="font-medium text-sm">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.details}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div>
          <h3 className="font-medium mb-3 text-[#00d4ff] tracking-[0.1em] uppercase [font-family:'Share_Tech_Mono',monospace]">Social Media</h3>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring", 
                  stiffness: 300
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#003f55" }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-[#071220] border border-[#385070] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-panel p-4">
        <h3 className="font-medium mb-2 text-[#00ff88] tracking-[0.1em] uppercase [font-family:'Share_Tech_Mono',monospace]">Response Time</h3>
        <p className="text-sm text-muted-foreground">
          I strive to respond to all messages as quickly as possible.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
