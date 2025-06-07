
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-brand-purple" />,
      title: "Email",
      details: "ud4yg@yandex.com",
      link: "mailto:ud4yg@yandex.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-purple" />,
      title: "Phone",
      details: "+91 0000000000",
      link: "tel:+910000000000",
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-purple" />,
      title: "Location",
      details: "Bengaluru, Karnataka, India",
      link: "https://maps.google.com/?q=Bengaluru",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/oxBinaryBrain/",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/uday-g-601ba9266/",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://x.com/UdayG6389896490",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2"
    >
      <div className="glass-panel p-8 rounded-lg h-full">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          I'd love to hear from you. Whether you have a question, proposal, or just want to say hi.
        </p>
        
        <div className="space-y-6 mb-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(155, 135, 245, 0.15)",
                y: -5 
              }}
              className="flex items-start p-4 bg-secondary/40 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="flex-shrink-0 bg-brand-purple/10 p-3 rounded-full mr-4">
                {info.icon}
              </div>
              <div>
                <h3 className="font-medium mb-1">{info.title}</h3>
                <p className="text-muted-foreground">{info.details}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Connect with me:</h3>
          <div className="flex gap-4">
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
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "#9b87f5",
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full hover:bg-brand-purple hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
