import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LiquidTransition = () => {
  const [expanded, setExpanded] = useState(false);

  // Definición de los estados del Path (mismos que en tu JS original)
  const paths = {
    start: "M 0 100 V 100 Q 50 100 100 100 V 100 z", // Línea plana abajo
    wave: "M 0 100 V 50 Q 50 0 100 50 V 100 z",      // Estado intermedio (ola)
    end: "M 0 100 V 0 Q 50 0 100 0 V 100 z",         // Pantalla completa
  };

  return (
    <div 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0e100f] cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Texto fijo */}
      <p className="fixed top-1/2 left-1/2 z-[999] -translate-x-1/2 text-[#fffce1] pointer-events-none select-none">
        click me
      </p>

      {/* Wrapper del SVG */}
      <div className="absolute inset-0 h-full w-full">
        <svg 
          className="h-full w-full transition-all duration-500" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="99" y2="99" gradientUnits="userSpaceOnUse">
              <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
              <stop offset="0.7" stopColor="rgb(247, 189, 248)" />
            </linearGradient>
          </defs>
          
          <motion.path 
            className="path" 
            stroke="url(#grad)" 
            fill="url(#grad)" 
            strokeWidth="2px" 
            vectorEffect="non-scaling-stroke"
            // Animación
            initial={{ d: paths.start }}
            animate={{ 
              d: expanded 
                ? [paths.start, paths.wave, paths.end] // Secuencia de apertura
                : [paths.end, paths.wave, paths.start] // Secuencia de cierre
            }}
            transition={{
              duration: 0.8,
              ease: expanded ? "easeIn" : "easeOut",
              times: [0, 0.4, 1] // Controla el timing de la fase intermedia (ola)
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default LiquidTransition;