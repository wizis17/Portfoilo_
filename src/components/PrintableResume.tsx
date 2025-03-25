
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from "lucide-react";

const PrintableResume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = document.getElementById('printable-resume');
    const windowUrl = 'about:blank';
    const uniqueName = new Date().getTime();
    const windowName = 'Print' + uniqueName;
    const printWindow = window.open(windowUrl, windowName, 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

    if (printWindow && printContent) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Uday G Resume</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 30px; color: #333; }
              .resume-container { max-width: 800px; margin: 0 auto; }
              h1, h2, h3, h4 { margin-top: 0; color: #6200EE; }
              h1 { font-size: 24px; margin-bottom: 5px; }
              h2 { font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
              h3 { font-size: 16px; margin-bottom: 5px; }
              p, li { font-size: 14px; line-height: 1.5; }
              .header { text-align: center; margin-bottom: 20px; }
              .section { margin-bottom: 15px; }
              .contact-info { text-align: center; margin-bottom: 20px; font-size: 14px; }
              .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
              .skill-item { margin-bottom: 5px; }
              .work-item, .edu-item, .project-item, .cert-item { margin-bottom: 15px; }
              .work-dates, .edu-dates { float: right; font-style: italic; font-size: 14px; }
              .work-title, .edu-degree { font-weight: bold; }
              .work-company, .edu-institution { font-style: italic; }
              .responsibilities { margin-top: 5px; }
              ul { padding-left: 20px; margin: 5px 0; }
              @media print {
                body { padding: 0; }
                button { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="resume-container">
              ${printContent.innerHTML}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        onClick={handlePrint}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center bg-brand-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all mb-8"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </motion.button>

      <div ref={resumeRef} id="printable-resume" className="w-full max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg hidden">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-brand-purple">Uday G</h1>
          <p className="text-gray-600">Computer Science Student | AI & ML Specialist | Web Developer</p>
          
          <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center">
              <Mail className="h-3 w-3 mr-1" /> contact@udayg.me
            </span>
            <span className="flex items-center">
              <Phone className="h-3 w-3 mr-1" /> +91 9876543210
            </span>
            <span className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" /> Bengaluru, India
            </span>
            <span className="flex items-center">
              <Linkedin className="h-3 w-3 mr-1" /> linkedin.com/in/udayg
            </span>
            <span className="flex items-center">
              <Github className="h-3 w-3 mr-1" /> github.com/oxBinaryBrain
            </span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            Computer Science student specializing in AI & Machine Learning with experience in web development and data science. 
            Skilled in building full-stack applications, implementing machine learning models, and developing computer vision solutions. 
            Passionate about creating innovative technical solutions to real-world problems.
          </p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Education</h2>
          
          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Bachelor of Technology (B.Tech) in Computer Science & Engineering (AI & ML)</h3>
              <span className="text-sm text-gray-600">2021 - 2025</span>
            </div>
            <p>Presidency University, Bengaluru | GPA: 3.8/4.0</p>
            <p className="text-sm text-gray-600">Key Courses: Artificial Intelligence, Machine Learning, Data Structures, Computer Vision, Web Development</p>
          </div>
          
          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">Pre-University College, Science Stream</h3>
              <span className="text-sm text-gray-600">2019 - 2021</span>
            </div>
            <p>MES Kishora Kendra, Bengaluru | Score: 85%</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Technical Skills</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-1">Programming Languages</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Python (Advanced)</li>
                <li>JavaScript (Advanced)</li>
                <li>HTML/CSS (Advanced)</li>
                <li>Java (Intermediate)</li>
                <li>C# (Intermediate)</li>
                <li>C++ (Intermediate)</li>
                <li>SQL (Intermediate)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Frameworks & Libraries</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React.js (Advanced)</li>
                <li>Node.js (Intermediate)</li>
                <li>Next.js (Intermediate)</li>
                <li>Express.js (Intermediate)</li>
                <li>TensorFlow (Intermediate)</li>
                <li>OpenCV (Intermediate)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Tools & Technologies</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>MongoDB</li>
                <li>Postman</li>
                <li>Power BI</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Specialization Areas</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Machine Learning</li>
                <li>Computer Vision</li>
                <li>Web Development</li>
                <li>Data Science</li>
                <li>API Development</li>
                <li>Neural Networks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Key Projects</h2>
          
          <div className="mb-3">
            <h3 className="font-medium">Income Tax Fraud Detection</h3>
            <p className="text-sm text-gray-600">
              Developed an AI-powered system to detect fraudulent activities in income tax filings using machine learning algorithms.
              Achieved 92% accuracy in identifying fraudulent transactions.
            </p>
            <p className="text-xs text-gray-500">Technologies: Python, Machine Learning, AI, Data Analysis, TensorFlow</p>
          </div>
          
          <div className="mb-3">
            <h3 className="font-medium">Oral Cancer Detection</h3>
            <p className="text-sm text-gray-600">
              Built a deep learning model for detecting and classifying oral cancer stages from medical images, achieving 89% accuracy in early-stage detection.
            </p>
            <p className="text-xs text-gray-500">Technologies: Python, TensorFlow, Neural Networks, Computer Vision, OpenCV</p>
          </div>
          
          <div className="mb-3">
            <h3 className="font-medium">Object Tracking using OpenCV</h3>
            <p className="text-sm text-gray-600">
              Developed an object detection and tracking system using OpenCV and KCF Tracker for real-time video analysis.
            </p>
            <p className="text-xs text-gray-500">Technologies: Python, OpenCV, Computer Vision, AI</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Professional Experience</h2>
          
          <div className="mb-3">
            <div className="flex justify-between">
              <h3 className="font-medium">Freelance Developer</h3>
              <span className="text-sm text-gray-600">January 2023 - Present</span>
            </div>
            <p className="italic">Self-employed</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Developed full-stack web applications using React, Node.js, and MongoDB</li>
              <li>Created AI-powered solutions for data analysis and automation</li>
              <li>Managed project timelines and client communication</li>
            </ul>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between">
              <h3 className="font-medium">Web Developer Intern</h3>
              <span className="text-sm text-gray-600">May 2023 - August 2023</span>
            </div>
            <p className="italic">TechStart Solutions</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Developed responsive front-end interfaces using React.js</li>
              <li>Implemented RESTful APIs using Node.js and Express</li>
              <li>Participated in code reviews and team meetings</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Certifications</h2>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <h3 className="font-medium">API Prototyping Learning Path</h3>
              <p className="text-sm text-gray-600">Postman | December 2024</p>
            </div>
            
            <div>
              <h3 className="font-medium">Career Essentials in Generative AI</h3>
              <p className="text-sm text-gray-600">Microsoft and LinkedIn | November 2024</p>
            </div>
            
            <div>
              <h3 className="font-medium">Learning Microsoft Power BI</h3>
              <p className="text-sm text-gray-600">Infosys Springboard | November 2024</p>
            </div>
            
            <div>
              <h3 className="font-medium">Neural Networks and Deep Learning</h3>
              <p className="text-sm text-gray-600">Great Learning | January 2024</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-lg font-semibold border-b-2 border-brand-purple/30 pb-1 mb-2">Soft Skills</h2>
          
          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-700">• Problem Solving</span>
            <span className="text-gray-700">• Communication</span>
            <span className="text-gray-700">• Team Collaboration</span>
            <span className="text-gray-700">• Adaptability</span>
            <span className="text-gray-700">• Time Management</span>
            <span className="text-gray-700">• Critical Thinking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintableResume;
