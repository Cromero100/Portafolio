import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Github,
  Linkedin,
  Facebook,
  Code2,
  Database,
  Smartphone,
  Server,
  Cpu,
  Terminal,
  ExternalLink,
  Download,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility para clases ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Componente: HackerText (Efecto de desencriptado) ---
const HackerText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

// --- Componente: SpotlightCard (Efecto de luz al mouse) ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-slate-600",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition opacity-0 duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// --- Componente Principal: AboutMe ---
const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  // Datos organizados
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "#",
      color: "hover:text-purple-400",
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "#",
      color: "hover:text-blue-600",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      icon: <Smartphone className="mb-2 text-pink-500" />,
      skills: [
        "React",
        "React Native",
        "Vue.js",
        "TailwindCSS",
        "GSAP",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & API",
      icon: <Server className="mb-2 text-emerald-500" />,
      skills: ["Node.js", "Python", "FastAPI", "Express", "Vercel"],
    },
    {
      title: "Core & Data",
      icon: <Database className="mb-2 text-blue-500" />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "Electron",
        "Git",
        "Arquitectura de Software",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".anim-header",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
      ).fromTo(
        ".anim-card",
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full bg-[#0e100f] px-4 py-20 text-slate-300 md:px-10 lg:px-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <div className="anim-header flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-indigo-500">
              <Terminal size={16} />
              <span>Desarrollador FullStack</span>
            </div>
            <h1 className="anim-header text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              <HackerText text="CRISTIAN" className="block" />
              <span className="text-slate-500">ROMERO.</span>
            </h1>
          </div>

          <div className="anim-header max-w-md text-base leading-relaxed text-slate-400 md:text-right">
            <p>
              Ingeniero de Sistemas en formación (10° Semestre) convirtiendo
              café en código limpio y escalable. Especialista en crear
              experiencias digitales inmersivas y funcionales.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Card: Biografía Corta (Span 8) */}
          <div className="anim-card md:col-span-8">
            <SpotlightCard className="h-full flex flex-col justify-center">
              <div className="mb-4 rounded-full bg-indigo-500/10 p-3 w-fit">
                <Code2 className="text-indigo-400" size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Más allá del código
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-slate-300">
                Mi viaje en el desarrollo comenzó por curiosidad y se convirtió
                en mi obsesión. Actualmente estoy finalizando mi ingeniería,
                combinando la teoría académica con una{" "}
                <span className="text-indigo-400 font-semibold">
                  amplia experiencia práctica
                </span>{" "}
                en proyectos reales.
              </p>
              <p className="text-slate-400">
                Me apasiona resolver problemas complejos, ya sea optimizando una
                consulta en PostgreSQL o diseñando una animación fluida en React
                Native. Siempre buscando la próxima tecnología para aprender.
              </p>
            </SpotlightCard>
          </div>

          {/* Card: Foto / Avatar (Span 4) */}
          <div className="anim-card md:col-span-4">
            <SpotlightCard className="group relative h-full min-h-[300px] overflow-hidden p-0">
              {/* Reemplaza src con tu foto real */}
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                alt="Cristian Romero"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Disponible para proyectos
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Cards: Tech Stack (Dividido en 3 columnas) */}
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="anim-card md:col-span-4">
              <SpotlightCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}
                  <h4 className="text-xl font-bold text-white">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-700 bg-slate-800/50 px-2 py-1 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:text-white cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}

          {/* Card: Social & Contacto (Span 12) */}
          <div className="anim-card md:col-span-12">
            <SpotlightCard className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">¿Conectamos?</h3>
                <p className="text-slate-400">
                  Estoy siempre abierto a debatir nuevas ideas o proyectos.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-6 py-3 transition-all hover:bg-slate-800 hover:scale-105",
                      link.color
                    )}
                  >
                    {link.icon}
                    <span className="font-medium text-slate-200 group-hover:text-white">
                      {link.name}
                    </span>
                  </a>
                ))}

                <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-transform hover:scale-105 active:scale-95">
                  <Download size={20} />
                  Descargar CV
                </button>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
