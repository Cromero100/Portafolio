import React from "react";
import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { FaVuejs, FaNodeJs, FaPython } from "react-icons/fa";
import { DiPostgresql, DiMysql } from "react-icons/di";
import SplitText from "../components/SplitText";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import ImageTrail from "../components/ImageTrail";
import SplashCursor from "../components/SplashCursor";
import BlurText from "../components/BlurText";
import AnimatedContent from "../components/AnimatedContent";
import Navbar from "../components/Navbar";
import coniti from "../assets/universidad/coniti.png";
import coniti2 from "../assets/universidad/coniti2.png";
import feriaProyectos from "../assets/universidad/feriaproyectos.jpg";
import ferias from "../assets/universidad/ferias.jpg";
import popayan1 from "../assets/universidad/popayan1.jpeg";
import popayan2 from "../assets/universidad/popayan2.jpeg";
import popayan3 from "../assets/universidad/popayan3.jpeg";
import reconocimiento from "../assets/universidad/reconocimiento.jpeg";

import TargetCursor from "../components/TargetCursor";
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  {
    node: <IoLogoElectron />,
    title: "Electron.js",
    href: "https://www.electronjs.org",
  },
  { node: <FaVuejs />, title: "Vue.js", href: "https://vuejs.org" },
  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <DiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <DiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <FaPython />, title: "Python", href: "https://www.python.org" },
];

const About = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-28">
      <Navbar />
      <TargetCursor spinDuration={2} hideDefaultCursor />

      <SplashCursor />
      <div className="max-w-6xl mx-auto space-y-36">
        {/* SOBRE MI */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <SplitText
              text="Sobre "
              className="text-5xl font-bold mb-8"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />{" "}
            <SplitText
              text="Mi"
              className="text-5xl text-indigo-400 font-bold mb-8"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            {/* Sobre <span className="text-indigo-400">mí</span> */}
          </h2>

          <BlurText
            text="Soy desarrollador web apasionado por crear experiencias digitales modernas, funcionales y visualmente atractivas. Disfruto combinar diseño y tecnología para construir interfaces intuitivas, eficientes y escalables. Me considero una persona autodidacta, responsable y enfocada en la mejora continua, con especial interés en el desarrollo frontend y las animaciones web."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-zinc-400 text-lg leading-relaxed"
          />
        </div>

        {/* EDUCACION + EXPERIENCIA */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* EDUCACION */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div>
              <h2 className="text-4xl font-bold mb-10">Educación</h2>

              <div className="relative pl-6 border-l border-zinc-800 space-y-10">
                <div>
                  <span className="absolute -left-[7px] w-3 h-3 bg-indigo-400 rounded-full mt-2" />
                  <h3 className="text-xl font-semibold">
                    Ingeniería de Sistemas
                  </h3>
                  <p className="text-zinc-400">
                    Universidad Francisco de Paula Santander Ocaña
                  </p>
                  <span className="text-sm text-zinc-500">En curso</span>
                </div>
              </div>
              <div
                style={{
                  height: "300px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <ImageTrail
                  items={[
                    coniti,
                    coniti2,
                    feriaProyectos,
                    ferias,
                    popayan1,
                    popayan2,
                    popayan3,
                    reconocimiento,
                  ]}
                  variant={2}
                />
              </div>
            </div>
          </AnimatedContent>

          {/* EXPERIENCIA */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div>
              <h2 className="text-4xl font-bold mb-10">Experiencia</h2>

              <div className="bg-zinc-900/70 p-8 rounded-3xl border border-zinc-800 hover:border-indigo-400/40 transition">
                <h3 className="text-xl font-semibold mb-2">
                  Desarrollador Web
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  Proyectos personales y académicos
                </p>

                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Aplicaciones web modernas y responsivas.</li>
                  <li>Animaciones e interacciones con GSAP.</li>
                  <li>Consumo de APIs REST.</li>
                  <li>Optimización de UX y rendimiento.</li>
                </ul>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* TECNOLOGIAS */}

        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Tecnologías</h2>

          <div className="relative h-[180px] overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut={false}
              ariaLabel="Tecnologías"
            />
          </div>
        </div>

        {/* REDES SOCIALES */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Conecta <span className="text-indigo-400">Conmigo</span>
            </h2>

            <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
              Puedes encontrarme y contactarme a través de mis redes sociales.
              Siempre estoy abierto a nuevas oportunidades, proyectos y
              colaboraciones.
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Cromero100"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target group p-4 rounded-2xl bg-zinc-900 border border-zinc-800
                 hover:border-indigo-400/50 hover:-translate-y-1
                 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-zinc-300 group-hover:text-indigo-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/cristian-romero-prada-087697279/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target group p-4 rounded-2xl bg-zinc-900 border border-zinc-800
                 hover:border-indigo-400/50 hover:-translate-y-1
                 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-zinc-300 group-hover:text-indigo-400 transition" />
              </a>

              <a
                href="mailto:cfromerop@ufpso.edu.co"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target sgroup p-4 rounded-2xl bg-zinc-900 border border-zinc-800
                 hover:border-indigo-400/50 hover:-translate-y-1
                 transition-all duration-300"
                aria-label="Gmail"
              >
                <SiGmail className="text-2xl text-zinc-300 group-hover:text-indigo-400 transition" />
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default About;
