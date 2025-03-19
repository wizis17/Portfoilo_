
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

const phrases = [
  "Full Stack Developer",
  "AI & ML Enthusiast",
  "Web Developer"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // State for tracking draggable element positions instead of AnimationControls
  const [positions, setPositions] = useState({
    pos1: { x: 0, y: 0 },
    pos2: { x: 0, y: 0 },
    pos3: { x: 0, y: 0 },
    pos4: { x: 0, y: 0 },
    pos5: { x: 0, y: 0 },
    pos6: { x: 0, y: 0 },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background animated elements - updated color scheme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-rose-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">Uday G</span>
            </motion.h1>
            
            <motion.div 
              className="h-12 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedText 
                text={phrases[index]} 
                className="text-2xl md:text-3xl font-medium text-muted-foreground"
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Passionate about programming and software development with expertise in Python, JavaScript, and C++.
              Building modern web applications using Node.js, React.js, and Next.js.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="inline-flex items-center bg-secondary text-foreground px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden glass-panel p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
              <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
                {/* Programming language cards - now draggable */}
                <motion.div 
                  className="col-span-3 row-span-3 glass-panel p-6 flex flex-col justify-center cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.05 }}
                  initial={{ x: positions.pos1.x, y: positions.pos1.y }}
                  animate={{ x: positions.pos1.x, y: positions.pos1.y }}
                  onDragEnd={(e, info) => {
                    setPositions(prev => ({
                      ...prev,
                      pos1: {
                        x: prev.pos1.x + info.offset.x,
                        y: prev.pos1.y + info.offset.y
                      }
                    }));
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">Python</h3>
                  <p className="text-sm text-muted-foreground">Expert level proficiency</p>
                </motion.div>
                
                <motion.div 
                  className="col-span-3 row-span-2 glass-panel p-6 flex flex-col justify-center cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.05 }}
                  initial={{ x: positions.pos2.x, y: positions.pos2.y }}
                  animate={{ x: positions.pos2.x, y: positions.pos2.y }}
                  onDragEnd={(e, info) => {
                    setPositions(prev => ({
                      ...prev,
                      pos2: {
                        x: prev.pos2.x + info.offset.x,
                        y: prev.pos2.y + info.offset.y
                      }
                    }));
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                  <p className="text-sm text-muted-foreground">Frontend & backend development</p>
                </motion.div>
                
                <motion.div 
                  className="col-span-2 row-span-1 glass-panel p-4 flex items-center justify-center cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  initial={{ x: positions.pos3.x, y: positions.pos3.y }}
                  animate={{ x: positions.pos3.x, y: positions.pos3.y }}
                  onDragEnd={(e, info) => {
                    setPositions(prev => ({
                      ...prev,
                      pos3: {
                        x: prev.pos3.x + info.offset.x,
                        y: prev.pos3.y + info.offset.y
                      }
                    }));
                  }}
                >
                  <h3 className="text-md font-semibold">React.js</h3>
                </motion.div>
                
                <motion.div 
                  className="col-span-1 row-span-1 glass-panel p-4 flex items-center justify-center cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  initial={{ x: positions.pos4.x, y: positions.pos4.y }}
                  animate={{ x: positions.pos4.x, y: positions.pos4.y }}
                  onDragEnd={(e, info) => {
                    setPositions(prev => ({
                      ...prev,
                      pos4: {
                        x: prev.pos4.x + info.offset.x,
                        y: prev.pos4.y + info.offset.y
                      }
                    }));
                  }}
                >
                  <h3 className="text-md font-semibold">C++</h3>
                </motion.div>
                
                <motion.div 
                  className="col-span-2 row-span-3 glass-panel p-6 flex flex-col justify-center cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.05 }}
                  initial={{ x: positions.pos5.x, y: positions.pos5.y }}
                  animate={{ x: positions.pos5.x, y: positions.pos5.y }}
                  onDragEnd={(e, info) => {
                    setPositions(prev => ({
                      ...prev,
                      pos5: {
                        x: prev.pos5.x + info.offset.x,
                        y: prev.pos5.y + info.offset.y
                      }
                    }));
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">Node.js</h3>
                  <p className="text-sm text-muted-foreground">Backend development</p>
                </motion.div>
                
                <motion.div 
                  className="col-span-4 row-span-1 glass-panel p-4 flex items-center justify-center cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.05 }}
                  initial={{ x: positions.pos6.x, y: positions.pos6.y }}
                  animate={{ x: positions.pos6.x, y: positions.pos6.y }}
                  onDragEnd={(e, info) => {
                    setPositions(prev => ({
                      ...prev,
                      pos6: {
                        x: prev.pos6.x + info.offset.x,
                        y: prev.pos6.y + info.offset.y
                      }
                    }));
                  }}
                >
                  <h3 className="text-md font-semibold">AI & Machine Learning</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
