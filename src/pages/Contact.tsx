import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { contactService, ContactMessageInsert } from "@/services/contactService";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get current user if authenticated
      const { data: { user } } = await supabase.auth.getUser();
      
      // Save message to Supabase using our service
      const messageData: ContactMessageInsert = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        user_id: user?.id || null
      };
      
      const { error } = await contactService.insertMessage(messageData);
      
      if (error) {
        console.error("Error submitting message:", error);
        throw error;
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      setIsSubmitting(false);
      toast({
        title: "Failed to send message",
        description: error.message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-brand-purple" />,
      title: "Email",
      details: "ud4yg@yandex.com",
      link: "mailto:udayg@example.com",
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
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
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
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-panel p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Let's start a conversation. Fill out the form below and I'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-colors ${
                        isSubmitted 
                          ? "bg-green-600 text-white" 
                          : "bg-brand-purple text-white hover:bg-opacity-90"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          <span>Sending...</span>
                        </div>
                      ) : isSubmitted ? (
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5" />
                          <span>Sent Successfully</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
