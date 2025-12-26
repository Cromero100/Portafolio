import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ShapeOverlay = () => {
  const pathsRef = useRef([]);
  const svgRef = useRef(null);
  const tl = useRef(null);

  const numPoints = 10;
  const delayPointsMax = 0.3;
  const delayPerPath = 0.18; // Un poco más rápido entre capas para fluidez
  const duration = 1.1;

  // Paleta de colores Balatro
  const colors = {
    red: "#DE443B",
    blue: "#006BB4",
    dark: "#162325",
  };

  const allPoints = useRef([
    new Array(numPoints).fill(0),
    new Array(numPoints).fill(0),
    new Array(numPoints).fill(0), // Añadimos una tercera capa
  ]);

  const render = () => {
    allPoints.current.forEach((points, i) => {
      const path = pathsRef.current[i];
      if (!path) return;

      let d = `M 0 0 V ${points[0]} C`;
      for (let j = 0; j < numPoints - 1; j++) {
        const p = ((j + 1) / (numPoints - 1)) * 100;
        const cp = p - ((1 / (numPoints - 1)) * 100) / 2;
        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
      }
      d += ` V 100 H 0 Z`;
      path.setAttribute("d", d);
    });
  };

  useEffect(() => {
    render();

    tl.current = gsap.timeline({
      onUpdate: render,
      defaults: { ease: "power4.inOut" }, // Power4 es más dramático y limpio
      onComplete: () => {
        if (svgRef.current) svgRef.current.style.display = "none";
      },
    });

    const pointsDelay = Array.from(
      { length: numPoints },
      () => Math.random() * delayPointsMax
    );

    allPoints.current.forEach((points, i) => {
      const pathDelay = delayPerPath * i;

      points.forEach((_, j) => {
        tl.current.to(
          points,
          {
            [j]: 100,
            duration: duration,
          },
          pointsDelay[j] + pathDelay
        );
      });
    });

    return () => {
      if (tl.current) tl.current.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 z-[100] w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradiente 1: Azul a Oscuro */}
        <linearGradient id="balatro-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.blue} />
          <stop offset="100%" stopColor={colors.dark} />
        </linearGradient>
        {/* Gradiente 2: Rojo a Azul */}
        <linearGradient id="balatro-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.red} />
          <stop offset="100%" stopColor={colors.blue} />
        </linearGradient>
        {/* Gradiente 3: Rojo intenso a Oscuro */}
        <linearGradient id="balatro-grad-3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.red} />
          <stop offset="100%" stopColor={colors.dark} />
        </linearGradient>
      </defs>

      {/* Capas de atrás hacia adelante */}
      <path
        ref={(el) => (pathsRef.current[0] = el)}
        fill="url(#balatro-grad-1)"
      />
      <path
        ref={(el) => (pathsRef.current[1] = el)}
        fill="url(#balatro-grad-2)"
      />
      <path
        ref={(el) => (pathsRef.current[2] = el)}
        fill="url(#balatro-grad-3)"
      />
    </svg>
  );
};

export default ShapeOverlay;
