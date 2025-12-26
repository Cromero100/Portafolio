import React, { useEffect } from "react";
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";
import BlurText from "../components/BlurText";
import Shuffle from "../components/Shuffle";
import TargetCursor from "../components/TargetCursor";
import Lanyard from "../components/Lanyard";
import AnimatedContent from "../components/AnimatedContent";
import Navbar from "../components/Navbar";
import Balatro from "../components/Balatro";
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Navbar />
      {/* Background visual */}
      <div className="absolute inset-0 z-[-1]">
        <Balatro isRotate={false} mouseInteraction pixelFilter={1000} />
        {/* overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div className="space-y-8">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full 
    bg-red-500/10 text-red-400 border border-red-500/20 backdrop-blur-sm
    shadow-lg shadow-red-500/10"
          >
            <Shuffle
              text="Fullstack Developer"
              shuffleDirection="right"
              duration={0.35}
              stagger={0.03}
              loop
            />
          </span>

          <h1 className="flex flex-wrap items-center gap-3 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
            <SplitText
              text="Hola, soy"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              className="inline-block overflow-visible  text-white/95"
            />
            <SplitText
              text="Cristian!"
              className="inline-block bg-gradient-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-red-600"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </h1>

          {/* Rotating text */}
          <div className="flex flex-wrap items-center gap-3 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 min-h-[2.5rem] md:min-h-[3rem]">
            <span className="text-gray-400/90">Y</span>
            <TextType
              text={[
                "construyo ideas",
                "creo experiencias digitales",
                "desarrollo soluciones web",
                "transformo ideas en código",
                "doy vida a productos digitales",
              ]}
              typingSpeed={70}
              pauseDuration={1400}
              showCursor
            />
          </div>

          {/* Description */}
          <BlurText
            text="Desarrollador fullstack enfocado en crear aplicaciones modernas, escalables y centradas en el usuario usando tecnologías actuales."
            animateBy="words"
            className="text-base md:text-lg lg:text-xl text-gray-400/90 max-w-2xl leading-relaxed font-normal"
          />

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <TargetCursor spinDuration={2} hideDefaultCursor />

            <AnimatedContent>
              <a
                href="proyectos"
                className="cursor-target px-7 py-3 rounded-xl 
                bg-gradient-to-r from-red-500 to-red-600
                hover:from-red-600 hover:to-red-700
                shadow-lg shadow-red-500/30
                transition-all font-semibold"
              >
                Ver proyectos
              </a>
            </AnimatedContent>

            <AnimatedContent>
              <a
                href="sobremi"
                className="cursor-target px-7 py-3 rounded-xl 
                border border-white/20
                hover:border-red-400 hover:text-red-400
                backdrop-blur transition-all font-medium"
              >
                Sobre mí
              </a>
            </AnimatedContent>
          </div>
        </div>

        {/* VISUAL */}
        <div className="flex justify-center items-center">
          <Lanyard fov={13} position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
