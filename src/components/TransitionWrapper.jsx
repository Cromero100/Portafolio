import React from "react";
import { motion } from "framer-motion";

const TransitionWrapper = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.5 
}) => {
  return (
    <motion.div
      // Estado inicial (antes de renderizar)
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      
      // Estado visible (cuando está en el DOM)
      animate={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { 
          duration: duration, 
          delay: delay, 
          ease: "easeOut" 
        } 
      }}
      
      // Estado de salida (cuando se desmonta)
      exit={{ 
        opacity: 0, 
        y: -20, 
        filter: "blur(10px)",
        transition: { 
          duration: duration * 0.8, // Salir un poco más rápido se siente mejor
          ease: "easeIn" 
        } 
      }}
      
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;