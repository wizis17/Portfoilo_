
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4">
      <div className="glass-panel p-8 md:p-12 rounded-lg text-center max-w-md w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 120 
          }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-brand-purple mb-4">404</h1>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-brand-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
